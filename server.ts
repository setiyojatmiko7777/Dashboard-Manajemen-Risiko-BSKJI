import 'dotenv/config';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import { AUTH_DIGEST_CONFIG } from './src/utils/authVerifier.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

interface SessionPayload {
  sub: string;
  role: 'admin';
  iat: number;
  exp: number;
  jti: string;
}

interface AuthenticatedRequest extends Request {
  user?: { username: string; role: 'admin' };
  tokenJti?: string;
}

// In-memory revoked token IDs with expiration timestamps
const revokedTokens = new Map<string, number>();

// Simple in-memory rate limiter for login endpoint
const failedAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_FAILED_ATTEMPTS = 10;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function sha256Hex(value: string): string {
  return crypto.createHash('sha256').update(value, 'utf8').digest('hex');
}

function timingSafeEqualHex(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'hex');
  const bufB = Buffer.from(b, 'hex');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// Derive env credential hash once on startup if ADMIN_USERNAME and ADMIN_PASSWORD are provided
const envUsernameRaw = process.env.ADMIN_USERNAME?.trim() || '';
const envPasswordRaw = process.env.ADMIN_PASSWORD || '';
const envConfigured = Boolean(envUsernameRaw && envPasswordRaw);
const envSalt = crypto.randomBytes(16).toString('hex');
const envPasswordScryptHex = envConfigured
  ? crypto.scryptSync(envPasswordRaw, envSalt, 64).toString('hex')
  : '';

function verifyServerCredentials(username: string, password: string): string | null {
  const trimmedUsername = username.trim();

  if (envConfigured) {
    const expectedUserHex = sha256Hex(envUsernameRaw);
    const providedUserHex = sha256Hex(trimmedUsername);
    const userOk = timingSafeEqualHex(providedUserHex, expectedUserHex);

    const derivedPassHex = crypto.scryptSync(password, envSalt, 64).toString('hex');
    const passOk = timingSafeEqualHex(derivedPassHex, envPasswordScryptHex);

    return userOk && passOk ? envUsernameRaw : null;
  }

  // Fallback to salted PBKDF2 digest when process.env secrets are not set
  const providedUserHex = sha256Hex(trimmedUsername);
  const userOk = timingSafeEqualHex(providedUserHex, AUTH_DIGEST_CONFIG.usernameSha256Hex);

  const derivedPassHex = crypto
    .pbkdf2Sync(
      password,
      Buffer.from(AUTH_DIGEST_CONFIG.saltHex, 'hex'),
      AUTH_DIGEST_CONFIG.iterations,
      32,
      'sha256'
    )
    .toString('hex');
  const passOk = timingSafeEqualHex(derivedPassHex, AUTH_DIGEST_CONFIG.passwordPbkdf2Hex);

  return userOk && passOk ? trimmedUsername : null;
}

function signSessionToken(username: string): string {
  const now = Date.now();
  const payload: SessionPayload = {
    sub: username,
    role: 'admin',
    iat: now,
    exp: now + TOKEN_TTL_MS,
    jti: crypto.randomUUID(),
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(encodedPayload)
    .digest('base64url');
  return `${encodedPayload}.${signature}`;
}

function verifySessionToken(token: string): SessionPayload | null {
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [encodedPayload, providedSignature] = parts;
  if (!encodedPayload || !providedSignature) return null;

  const expectedSignature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(encodedPayload)
    .digest('base64url');

  const providedBuf = Buffer.from(providedSignature, 'utf8');
  const expectedBuf = Buffer.from(expectedSignature, 'utf8');
  if (providedBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(providedBuf, expectedBuf)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8')) as SessionPayload;
    if (!parsed || typeof parsed.sub !== 'string' || typeof parsed.exp !== 'number' || typeof parsed.jti !== 'string') {
      return null;
    }
    if (Date.now() > parsed.exp) {
      return null;
    }
    if (revokedTokens.has(parsed.jti)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function extractBearerToken(req: Request): string | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7).trim();
  return token || null;
}

function cleanupExpiredState(): void {
  const now = Date.now();
  for (const [jti, exp] of revokedTokens.entries()) {
    if (now > exp) revokedTokens.delete(jti);
  }
  for (const [ip, record] of failedAttempts.entries()) {
    if (now > record.resetAt) failedAttempts.delete(ip);
  }
}

function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const token = extractBearerToken(req);
  if (!token) {
    res.status(401).json({ error: 'Sesi tidak ditemukan. Silakan masuk terlebih dahulu.' });
    return;
  }
  const payload = verifySessionToken(token);
  if (!payload) {
    res.status(401).json({ error: 'Sesi tidak valid atau telah berakhir. Silakan masuk kembali.' });
    return;
  }
  req.user = { username: payload.sub, role: payload.role };
  req.tokenJti = payload.jti;
  next();
}

function isRateLimited(clientKey: string): boolean {
  cleanupExpiredState();
  const record = failedAttempts.get(clientKey);
  if (!record) return false;
  if (Date.now() > record.resetAt) {
    failedAttempts.delete(clientKey);
    return false;
  }
  return record.count >= MAX_FAILED_ATTEMPTS;
}

function recordFailedAttempt(clientKey: string): void {
  const now = Date.now();
  const existing = failedAttempts.get(clientKey);
  if (!existing || now > existing.resetAt) {
    failedAttempts.set(clientKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  } else {
    existing.count += 1;
  }
}

function clearFailedAttempts(clientKey: string): void {
  failedAttempts.delete(clientKey);
}

async function startServer(): Promise<void> {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '64kb' }));

  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // Public auth status check
  app.get('/api/auth/status', (req: Request, res: Response) => {
    const token = extractBearerToken(req);
    const payload = token ? verifySessionToken(token) : null;

    res.json({
      authenticated: Boolean(payload),
      user: payload ? { username: payload.sub, role: payload.role } : null,
      envConfigured,
      setupRequired: false,
    });
  });

  // Login route
  app.post('/api/auth/login', (req: Request, res: Response) => {
    const clientKey = req.ip || 'unknown';
    if (isRateLimited(clientKey)) {
      res.status(429).json({
        error: 'Terlalu banyak percobaan login gagal. Silakan coba lagi dalam beberapa menit.',
      });
      return;
    }

    const body = req.body as { username?: unknown; password?: unknown } | undefined;
    const username = typeof body?.username === 'string' ? body.username.trim() : '';
    const password = typeof body?.password === 'string' ? body.password : '';

    if (!username || !password) {
      res.status(400).json({ error: 'Username dan password wajib diisi.' });
      return;
    }

    const verifiedUser = verifyServerCredentials(username, password);
    if (!verifiedUser) {
      recordFailedAttempt(clientKey);
      res.status(401).json({ error: 'Username atau password tidak sesuai.' });
      return;
    }

    clearFailedAttempts(clientKey);
    const token = signSessionToken(verifiedUser);
    res.json({
      token,
      user: { username: verifiedUser, role: 'admin' },
    });
  });

  // Protected session inspection route
  app.get('/api/auth/me', requireAuth, (req: AuthenticatedRequest, res: Response) => {
    res.json({ user: req.user });
  });

  // Logout & token revocation route
  app.post('/api/auth/logout', (req: Request, res: Response) => {
    const token = extractBearerToken(req);
    if (token) {
      const payload = verifySessionToken(token);
      if (payload) {
        revokedTokens.set(payload.jti, payload.exp);
      }
    }
    res.json({ ok: true });
  });

  const distDir = path.resolve(__dirname, 'dist');
  const distIndexHtml = path.join(distDir, 'index.html');
  const isDevMode =
    process.env.NODE_ENV !== 'production' &&
    (process.env.npm_lifecycle_event === 'dev' || !fs.existsSync(distIndexHtml));

  if (isDevMode) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distDir));
    app.get('*', (req: Request, res: Response, next: NextFunction) => {
      if (req.path.startsWith('/api/')) {
        next();
        return;
      }
      if (fs.existsSync(distIndexHtml)) {
        res.sendFile(distIndexHtml);
      } else {
        res.status(404).send('Build output not found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BSKJI Risk Dashboard server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
