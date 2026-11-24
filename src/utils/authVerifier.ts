// One-way salted PBKDF2-HMAC-SHA256 verification digest (no plaintext password stored)
export const AUTH_DIGEST_CONFIG = {
  usernameSha256Hex: 'f71eea64db119216d713e3aaa3d4595fd87767ca8c7dbcc9babe74f0e45623bd',
  saltHex: '9ecf602ce8b539e11b4e6556264d7834',
  passwordPbkdf2Hex: '30f245ba9f475e9ab6708a0a823e9572b68ee5a1c3e4ac55b2f1bbd51b17e6e5',
  iterations: 100000,
};

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

function bytesToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function constantTimeHexEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function verifyCredentialsStaticFallback(
  username: string,
  password: string
): Promise<boolean> {
  if (typeof window === 'undefined' || !window.crypto?.subtle) {
    return false;
  }

  const encoder = new TextEncoder();
  const userDigestBuf = await window.crypto.subtle.digest(
    'SHA-256',
    encoder.encode(username.trim())
  );
  const userDigestHex = bytesToHex(userDigestBuf);
  if (!constantTimeHexEqual(userDigestHex, AUTH_DIGEST_CONFIG.usernameSha256Hex)) {
    return false;
  }

  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits']
  );

  const saltBytes = hexToBytes(AUTH_DIGEST_CONFIG.saltHex);
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: saltBytes.buffer as ArrayBuffer,
      iterations: AUTH_DIGEST_CONFIG.iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const derivedHex = bytesToHex(derivedBits);
  return constantTimeHexEqual(derivedHex, AUTH_DIGEST_CONFIG.passwordPbkdf2Hex);
}
