import { RiskLevel } from '../types/risk';

export interface PermenperinMatrixCell {
  prob: number;
  imp: number;
  score: number;
  level: RiskLevel;
  colorName: 'Biru' | 'Hijau' | 'Kuning' | 'Orange' | 'Merah';
  colorBg: string;
  colorText: string;
  colorBadge: string;
  isAboveAppetite: boolean; // Di luar selera risiko (wajib ditangani)
}

/**
 * Tabel Resmi Penetapan Level, Besaran Risiko, dan Warna
 * Berdasarkan Pedoman MRPN Permenperin No. 24 Tahun 2023
 */
export interface OfficialRiskLevelDef {
  level: RiskLevel;
  levelNumber: number; // 5, 4, 3, 2, 1
  levelLabel: string; // "Sangat Tinggi (5)", "Tinggi (4)", dst.
  scoreMin: number;
  scoreMax: number;
  scoreRange: string; // "20 – 25", "15 – 19", "12 – 14", "7 – 11", "1 – 6"
  colorName: 'Merah' | 'Orange' | 'Kuning' | 'Hijau' | 'Biru';
  badgeClass: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  solidBg: string;
  textColor: string;
  hexCode: string;
  description: string;
  appetiteStatus: 'Di Luar Selera (Wajib Mitigasi)' | 'Dalam Selera (Dapat Diterima)';
  isAboveAppetite: boolean;
}

export const OFFICIAL_RISK_LEVELS: OfficialRiskLevelDef[] = [
  {
    level: 'Sangat Tinggi',
    levelNumber: 5,
    levelLabel: 'Sangat Tinggi (5)',
    scoreMin: 20,
    scoreMax: 25,
    scoreRange: '20 – 25',
    colorName: 'Merah',
    badgeClass: 'bg-red-100 text-red-800 border-red-300',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    badgeBorder: 'border-red-300',
    solidBg: 'bg-red-600',
    textColor: 'text-red-600',
    hexCode: '#ef4444',
    description: 'Kritis. Memerlukan eskalasi segera ke Menteri / Kepala BSKJI dan tindakan penanganan khusus.',
    appetiteStatus: 'Di Luar Selera (Wajib Mitigasi)',
    isAboveAppetite: true,
  },
  {
    level: 'Tinggi',
    levelNumber: 4,
    levelLabel: 'Tinggi (4)',
    scoreMin: 15,
    scoreMax: 19,
    scoreRange: '15 – 19',
    colorName: 'Orange',
    badgeClass: 'bg-orange-100 text-orange-800 border-orange-300',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
    badgeBorder: 'border-orange-300',
    solidBg: 'bg-orange-500',
    textColor: 'text-orange-600',
    hexCode: '#f97316',
    description: 'Tinggi. Memerlukan penanganan prioritas melalui Rencana Tindak Pengendalian (RTP) dan pemantauan ketat.',
    appetiteStatus: 'Di Luar Selera (Wajib Mitigasi)',
    isAboveAppetite: true,
  },
  {
    level: 'Sedang',
    levelNumber: 3,
    levelLabel: 'Sedang (3)',
    scoreMin: 12,
    scoreMax: 14,
    scoreRange: '12 – 14',
    colorName: 'Kuning',
    badgeClass: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-900',
    badgeBorder: 'border-yellow-300',
    solidBg: 'bg-yellow-400',
    textColor: 'text-yellow-700',
    hexCode: '#eab308',
    description: 'Di atas batas selera. Wajib ditangani melalui RTP untuk menurunkan besaran risiko ke zona aman (≤ 11).',
    appetiteStatus: 'Di Luar Selera (Wajib Mitigasi)',
    isAboveAppetite: true,
  },
  {
    level: 'Rendah',
    levelNumber: 2,
    levelLabel: 'Rendah (2)',
    scoreMin: 7,
    scoreMax: 11,
    scoreRange: '7 – 11',
    colorName: 'Hijau',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-300',
    solidBg: 'bg-emerald-600',
    textColor: 'text-emerald-700',
    hexCode: '#10b981',
    description: 'Dalam batas selera risiko organisasi. Dapat diterima dengan mempertahankan pengendalian eksisting.',
    appetiteStatus: 'Dalam Selera (Dapat Diterima)',
    isAboveAppetite: false,
  },
  {
    level: 'Sangat Rendah',
    levelNumber: 1,
    levelLabel: 'Sangat Rendah (1)',
    scoreMin: 1,
    scoreMax: 6,
    scoreRange: '1 – 6',
    colorName: 'Biru',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-300',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    badgeBorder: 'border-blue-300',
    solidBg: 'bg-blue-500',
    textColor: 'text-blue-600',
    hexCode: '#3b82f6',
    description: 'Dalam batas selera risiko organisasi. Risiko minimal yang dapat diterima dengan pemantauan rutin.',
    appetiteStatus: 'Dalam Selera (Dapat Diterima)',
    isAboveAppetite: false,
  },
];

export function getRiskLevelInfo(levelOrScore: RiskLevel | number): OfficialRiskLevelDef {
  if (typeof levelOrScore === 'number') {
    if (levelOrScore >= 20) return OFFICIAL_RISK_LEVELS[0];
    if (levelOrScore >= 15) return OFFICIAL_RISK_LEVELS[1];
    if (levelOrScore >= 12) return OFFICIAL_RISK_LEVELS[2];
    if (levelOrScore >= 7) return OFFICIAL_RISK_LEVELS[3];
    return OFFICIAL_RISK_LEVELS[4];
  }
  const found = OFFICIAL_RISK_LEVELS.find(l => l.level === levelOrScore);
  return found || OFFICIAL_RISK_LEVELS[4];
}

/**
 * Informasi Regulasi Permenperin No. 24 Tahun 2023
 */
export const PERMENPERIN_24_INFO = {
  nomor: 'Peraturan Menteri Perindustrian RI Nomor 24 Tahun 2023',
  judul: 'Pedoman Manajemen Risiko Pembangunan Nasional (MRPN) di Lingkungan Kementerian Perindustrian',
  tanggalDitetapkan: '30 Oktober 2023',
  tanggalBerlaku: '30 Oktober 2023',
  beritaNegara: 'Berita Negara RI Tahun 2023 Nomor 885',
  lingkup: 'Seluruh Unit Kerja Eselon I, II, dan Unit Pelaksana Teknis (UPT) Kementerian Perindustrian',
  dasarHukumUtama: 'PP No. 60 Tahun 2008 tentang SPIP & Permenperin No. 24 Tahun 2023',
  seleraRisikoAmbang: 11, // Skor <= 11 (Tingkat Rendah - Hijau)
};

/**
 * Matriks Analisis Risiko 5x5 Resmi Permenperin No. 24 Tahun 2023 (Lampiran hal. 19)
 * Sumbu Y: Level Kemungkinan / Probabilitas (5 = Hampir Pasti, 1 = Hampir Tidak Terjadi)
 * Sumbu X: Level Dampak (1 = Tidak Signifikan, 5 = Sangat Signifikan)
 */
export const PERMENPERIN_24_MATRIX: Record<number, Record<number, PermenperinMatrixCell>> = {
  5: {
    1: { prob: 5, imp: 1, score: 7, level: 'Rendah', colorName: 'Hijau', colorBg: 'bg-emerald-600', colorText: 'text-white', colorBadge: 'bg-emerald-100 text-emerald-800', isAboveAppetite: false },
    2: { prob: 5, imp: 2, score: 12, level: 'Sedang', colorName: 'Kuning', colorBg: 'bg-yellow-400', colorText: 'text-slate-900', colorBadge: 'bg-yellow-100 text-yellow-900', isAboveAppetite: true },
    3: { prob: 5, imp: 3, score: 17, level: 'Tinggi', colorName: 'Orange', colorBg: 'bg-orange-500', colorText: 'text-white', colorBadge: 'bg-orange-100 text-orange-800', isAboveAppetite: true },
    4: { prob: 5, imp: 4, score: 22, level: 'Sangat Tinggi', colorName: 'Merah', colorBg: 'bg-red-600', colorText: 'text-white', colorBadge: 'bg-red-100 text-red-800', isAboveAppetite: true },
    5: { prob: 5, imp: 5, score: 25, level: 'Sangat Tinggi', colorName: 'Merah', colorBg: 'bg-red-700', colorText: 'text-white', colorBadge: 'bg-red-100 text-red-800', isAboveAppetite: true },
  },
  4: {
    1: { prob: 4, imp: 1, score: 4, level: 'Sangat Rendah', colorName: 'Biru', colorBg: 'bg-blue-500', colorText: 'text-white', colorBadge: 'bg-blue-100 text-blue-800', isAboveAppetite: false },
    2: { prob: 4, imp: 2, score: 9, level: 'Rendah', colorName: 'Hijau', colorBg: 'bg-emerald-600', colorText: 'text-white', colorBadge: 'bg-emerald-100 text-emerald-800', isAboveAppetite: false },
    3: { prob: 4, imp: 3, score: 14, level: 'Sedang', colorName: 'Kuning', colorBg: 'bg-yellow-400', colorText: 'text-slate-900', colorBadge: 'bg-yellow-100 text-yellow-900', isAboveAppetite: true },
    4: { prob: 4, imp: 4, score: 19, level: 'Tinggi', colorName: 'Orange', colorBg: 'bg-orange-500', colorText: 'text-white', colorBadge: 'bg-orange-100 text-orange-800', isAboveAppetite: true },
    5: { prob: 4, imp: 5, score: 24, level: 'Sangat Tinggi', colorName: 'Merah', colorBg: 'bg-red-600', colorText: 'text-white', colorBadge: 'bg-red-100 text-red-800', isAboveAppetite: true },
  },
  3: {
    1: { prob: 3, imp: 1, score: 3, level: 'Sangat Rendah', colorName: 'Biru', colorBg: 'bg-blue-500', colorText: 'text-white', colorBadge: 'bg-blue-100 text-blue-800', isAboveAppetite: false },
    2: { prob: 3, imp: 2, score: 8, level: 'Rendah', colorName: 'Hijau', colorBg: 'bg-emerald-600', colorText: 'text-white', colorBadge: 'bg-emerald-100 text-emerald-800', isAboveAppetite: false },
    3: { prob: 3, imp: 3, score: 13, level: 'Sedang', colorName: 'Kuning', colorBg: 'bg-yellow-400', colorText: 'text-slate-900', colorBadge: 'bg-yellow-100 text-yellow-900', isAboveAppetite: true },
    4: { prob: 3, imp: 4, score: 18, level: 'Tinggi', colorName: 'Orange', colorBg: 'bg-orange-500', colorText: 'text-white', colorBadge: 'bg-orange-100 text-orange-800', isAboveAppetite: true },
    5: { prob: 3, imp: 5, score: 23, level: 'Sangat Tinggi', colorName: 'Merah', colorBg: 'bg-red-600', colorText: 'text-white', colorBadge: 'bg-red-100 text-red-800', isAboveAppetite: true },
  },
  2: {
    1: { prob: 2, imp: 1, score: 2, level: 'Sangat Rendah', colorName: 'Biru', colorBg: 'bg-blue-400', colorText: 'text-white', colorBadge: 'bg-blue-100 text-blue-800', isAboveAppetite: false },
    2: { prob: 2, imp: 2, score: 6, level: 'Sangat Rendah', colorName: 'Biru', colorBg: 'bg-blue-500', colorText: 'text-white', colorBadge: 'bg-blue-100 text-blue-800', isAboveAppetite: false },
    3: { prob: 2, imp: 3, score: 11, level: 'Rendah', colorName: 'Hijau', colorBg: 'bg-emerald-600', colorText: 'text-white', colorBadge: 'bg-emerald-100 text-emerald-800', isAboveAppetite: false },
    4: { prob: 2, imp: 4, score: 16, level: 'Tinggi', colorName: 'Orange', colorBg: 'bg-orange-500', colorText: 'text-white', colorBadge: 'bg-orange-100 text-orange-800', isAboveAppetite: true },
    5: { prob: 2, imp: 5, score: 21, level: 'Sangat Tinggi', colorName: 'Merah', colorBg: 'bg-red-600', colorText: 'text-white', colorBadge: 'bg-red-100 text-red-800', isAboveAppetite: true },
  },
  1: {
    1: { prob: 1, imp: 1, score: 1, level: 'Sangat Rendah', colorName: 'Biru', colorBg: 'bg-blue-400', colorText: 'text-white', colorBadge: 'bg-blue-100 text-blue-800', isAboveAppetite: false },
    2: { prob: 1, imp: 2, score: 5, level: 'Sangat Rendah', colorName: 'Biru', colorBg: 'bg-blue-500', colorText: 'text-white', colorBadge: 'bg-blue-100 text-blue-800', isAboveAppetite: false },
    3: { prob: 1, imp: 3, score: 10, level: 'Rendah', colorName: 'Hijau', colorBg: 'bg-emerald-600', colorText: 'text-white', colorBadge: 'bg-emerald-100 text-emerald-800', isAboveAppetite: false },
    4: { prob: 1, imp: 4, score: 15, level: 'Tinggi', colorName: 'Orange', colorBg: 'bg-orange-500', colorText: 'text-white', colorBadge: 'bg-orange-100 text-orange-800', isAboveAppetite: true },
    5: { prob: 1, imp: 5, score: 20, level: 'Sangat Tinggi', colorName: 'Merah', colorBg: 'bg-red-600', colorText: 'text-white', colorBadge: 'bg-red-100 text-red-800', isAboveAppetite: true },
  },
};

export function getPermenperinMatrixScore(prob: number, imp: number): PermenperinMatrixCell {
  const p = Math.max(1, Math.min(5, Math.round(prob)));
  const i = Math.max(1, Math.min(5, Math.round(imp)));
  return PERMENPERIN_24_MATRIX[p]?.[i] || {
    prob: p,
    imp: i,
    score: p * i,
    level: 'Sedang',
    colorName: 'Kuning',
    colorBg: 'bg-amber-400',
    colorText: 'text-slate-900',
    colorBadge: 'bg-amber-100 text-amber-800',
    isAboveAppetite: true,
  };
}

export function getPermenperinLevelFromScore(score: number): {
  level: RiskLevel;
  levelNumber: number;
  colorName: string;
  badgeClass: string;
  isAboveAppetite: boolean;
} {
  const info = getRiskLevelInfo(score);
  return {
    level: info.level,
    levelNumber: info.levelNumber,
    colorName: info.colorName,
    badgeClass: info.badgeClass,
    isAboveAppetite: info.isAboveAppetite,
  };
}

// 5 Kriteria Risiko Resmi Permenperin 24/2023 (Halaman 18)
export const PERMENPERIN_RISK_CRITERIA = [
  {
    id: 'PENCAPAIAN_TUJUAN_ORGANISASI',
    code: 'TUJUAN ORGANISASI',
    name: 'Pencapaian Tujuan Organisasi',
    definition: 'Kriteria risiko yang mengukur dampak terhadap tingkat ketercapaian Indikator Kinerja Utama (IKU) dan sasaran strategis Unit Pemilik Risiko (UPR).',
    description: 'Kriteria risiko yang mengukur dampak terhadap tingkat ketercapaian Indikator Kinerja Utama (IKU) dan sasaran strategis Unit Pemilik Risiko (UPR).',
    examples: 'Seluruh 45 risiko di lingkungan BSKJI Pusat TA 2026 masuk ke dalam kriteria Pencapaian Tujuan Organisasi (capaian IKU > 95% s.d. ≤ 70%).',
    color: 'border-teal-300 bg-teal-50 text-teal-800',
  },
  {
    id: 'BEBAN_KEUANGAN_NEGARA',
    code: 'BEBAN KEUANGAN',
    name: 'Beban Keuangan Negara',
    definition: 'Kriteria risiko yang mengukur dampak finansial atau tambahan beban pengeluaran anggaran terhadap total anggaran non-belanja pegawai Unit Pemilik Risiko (UPR).',
    description: 'Kriteria risiko yang mengukur dampak finansial atau tambahan beban pengeluaran anggaran terhadap total anggaran non-belanja pegawai Unit Pemilik Risiko (UPR).',
    examples: 'Skala dampak ≤ 0,01% (Level 1) hingga > 5% (Level 5) dari anggaran non-belanja pegawai UPR.',
    color: 'border-amber-300 bg-amber-50 text-amber-800',
  },
  {
    id: 'REPUTASI_ORGANISASI',
    code: 'REPUTASI',
    name: 'Reputasi Organisasi',
    definition: 'Kriteria risiko yang mengukur dampak negatif terhadap citra, kredibilitas pejabat/pegawai, serta kepercayaan publik dan media terhadap organisasi.',
    description: 'Kriteria risiko yang mengukur dampak negatif terhadap citra, kredibilitas pejabat/pegawai, serta kepercayaan publik dan media terhadap organisasi.',
    examples: 'Reputasi pelaksana/fungsional (Level 1) hingga pemberitaan negatif media massa nasional (Level 4) dan internasional (Level 5).',
    color: 'border-cyan-300 bg-cyan-50 text-cyan-800',
  },
  {
    id: 'K3',
    code: 'K3 PEGAWAI',
    name: 'Kesehatan dan Keselamatan Kerja (K3)',
    definition: 'Kriteria risiko yang mengukur dampak terhadap keselamatan, kesehatan fisik, maupun kesehatan mental pegawai dalam pelaksanaan tugas kedinasan.',
    description: 'Kriteria risiko yang mengukur dampak terhadap keselamatan, kesehatan fisik, maupun kesehatan mental pegawai dalam pelaksanaan tugas kedinasan.',
    examples: 'Tidak berbahaya (Level 1), gangguan ringan (Level 2), sedang (Level 3), berat/cacat (Level 4), hingga kejadian fatal/kematian (Level 5).',
    color: 'border-rose-300 bg-rose-50 text-rose-800',
  },
  {
    id: 'TEMUAN_PEMERIKSAAN',
    code: 'TEMUAN AUDITOR',
    name: 'Temuan Pemeriksaan / Auditor',
    definition: 'Kriteria risiko yang mengukur dampak berupa temuan pemeriksaan pengawas internal maupun eksternal terkait penyimpangan atau pengembalian uang ke kas negara.',
    description: 'Kriteria risiko yang mengukur dampak berupa temuan pemeriksaan pengawas internal maupun eksternal terkait penyimpangan atau pengembalian uang ke kas negara.',
    examples: 'Tidak ada temuan material (Level 1) hingga temuan pengembalian uang ke kas negara > 5% total anggaran (Level 5).',
    color: 'border-purple-300 bg-purple-50 text-purple-800',
  },
];

// Kriteria Kemungkinan Resmi Permenperin 24/2023 (Hal 17)
export const PERMENPERIN_PROBABILITY_CRITERIA = [
  {
    level: 1,
    label: 'Hampir Tidak Terjadi',
    percentage: 'X ≤ 5%',
    frequency: '< 2 kali dalam 1 tahun',
    description: 'Peluang terjadinya risiko sangat kecil atau jarang sekali dijumpai dalam satu siklus tahunan.',
  },
  {
    level: 2,
    label: 'Jarang Terjadi',
    percentage: '5% < x ≤ 10%',
    frequency: '2 s.d. 5 kali dalam 1 tahun',
    description: 'Peluang terjadinya risiko kecil, sesekali dapat terjadi dalam siklus pelaksanaan kegiatan tahunan.',
  },
  {
    level: 3,
    label: 'Kadang Terjadi',
    percentage: '10% < x ≤ 20%',
    frequency: '6 s.d. 9 kali dalam 1 tahun',
    description: 'Peluang terjadinya risiko bersifat moderat, terjadi beberapa kali dalam setahun.',
  },
  {
    level: 4,
    label: 'Sering Terjadi',
    percentage: '20% < x ≤ 50%',
    frequency: '10 s.d. 12 kali dalam 1 tahun',
    description: 'Peluang terjadinya risiko tinggi, terjadi hampir setiap bulan.',
  },
  {
    level: 5,
    label: 'Hampir Pasti Terjadi',
    percentage: 'X > 50%',
    frequency: '> 12 kali dalam 1 tahun',
    description: 'Peluang terjadinya risiko sangat tinggi, frekuensi kejadian lebih dari sekali sebulan.',
  },
];

// Kriteria Dampak Resmi Permenperin 24/2023 (Hal 18-19)
export const PERMENPERIN_IMPACT_CRITERIA = [
  {
    level: 1,
    label: 'Tidak Signifikan',
    financial: '≤ 0,01% dari anggaran non belanja pegawai UPR',
    reputation: 'Berdampak negatif pada reputasi pelaksana / fungsional ahli pertama',
    targetAchievement: '95% < Capaian IKU ≤ 100%',
    k3: 'Tidak berbahaya',
    auditFinding: 'Tidak ada temuan pengembalian uang ke kas negara dan penyimpangan material',
  },
  {
    level: 2,
    label: 'Minor',
    financial: '> 0,01% - 0,1% dari total anggaran non belanja pegawai UPR',
    reputation: 'Berdampak negatif pada reputasi Pejabat Administrator dan/atau Pejabat Pengawas',
    targetAchievement: '90% < Capaian IKU ≤ 95%',
    k3: 'Gangguan kesehatan fisik ringan (mampu bekerja pada hari yang sama)',
    auditFinding: 'Ada temuan pengembalian uang ke kas negara dan/atau penyimpangan ≤ 0,1% total anggaran',
  },
  {
    level: 3,
    label: 'Moderat',
    financial: '> 0,1% - 1% dari total anggaran non belanja pegawai UPR',
    reputation: 'Berdampak negatif pada reputasi Kepala Unit Kerja / Satker',
    targetAchievement: '80% < Capaian IKU ≤ 90%',
    k3: 'Gangguan kesehatan fisik/mental sedang (tidak mampu tugas 1 hari - 3 minggu)',
    auditFinding: 'Ada temuan pengembalian ke kas negara/penyimpangan > 0,1% - 1% total anggaran',
  },
  {
    level: 4,
    label: 'Signifikan',
    financial: '> 1% - 5% dari total anggaran non belanja pegawai UPR',
    reputation: 'Pemberitaan negatif pada media massa / media sosial tingkat nasional',
    targetAchievement: '70% < Capaian IKU ≤ 80%',
    k3: 'Gangguan kesehatan fisik/mental berat (> 3 minggu, cacat tetap / jiwa permanen)',
    auditFinding: 'Ada temuan pengembalian ke kas negara/penyimpangan > 1% - 5% total anggaran',
  },
  {
    level: 5,
    label: 'Sangat Signifikan',
    financial: '> 5% dari total anggaran non belanja pegawai UPR',
    reputation: 'Pemberitaan negatif pada media massa / media sosial tingkat internasional',
    targetAchievement: 'Capaian Indikator Kinerja ≤ 70%',
    k3: 'Kejadian fatal / kematian',
    auditFinding: 'Ada temuan pengembalian ke kas negara/penyimpangan > 5% total anggaran',
  },
];

// Struktur Konsep Tiga Lini (Three Lines Model) Permenperin 24/2023 (Hal 4-6, 11-12)
export const THREE_LINES_MODEL_DATA = {
  line1: {
    title: 'Lini Pertama (First Line)',
    entity: 'Unit Pemilik Risiko (UPR)',
    actors: [
      {
        role: 'Pemilik Risiko (Tingkat Pimpinan)',
        officials: 'Menteri (Kementerian), Kepala BSKJI (Eselon I), Kepala Pusat & Sekretaris BSKJI (Eselon II), Kepala Balai (UPT)',
        duties: [
          'Menentukan tingkat selera risiko yang tepat',
          'Memastikan risiko telah diidentifikasi, dinilai, dikelola, dan dipantau',
          'Menetapkan dan mendelegasikan pelaksanaan Rencana Tindak Pengendalian (RTP) kepada Pengelola Risiko',
          'Melakukan pemantauan berkala dan berkelanjutan atas pengelolaan risiko',
          'Menyampaikan laporan pengelolaan risiko yang disusun Pengelola Risiko kepada pejabat pembina dan UMR/UPMR',
        ],
      },
      {
        role: 'Pengelola Risiko (Tingkat Pelaksana)',
        officials: 'Koordinator, Subkoordinator, Ketua Tim Kerja yang ditunjuk dengan SK Pemilik Risiko',
        duties: [
          'Memfasilitasi dan mengadministrasikan proses identifikasi dan analisis risiko dalam register dan peta risiko',
          'Mengadministrasikan kegiatan pengendalian dan pemantauan risiko serta menuangkannya dalam RTP',
          'Menyelenggarakan catatan historis atas peristiwa risiko ke dalam laporan peristiwa risiko',
          'Melaporkan pelaksanaan MRPN secara periodik kepada Pemilik Risiko',
        ],
      },
    ],
  },
  line2: {
    title: 'Lini Kedua (Second Line)',
    entity: 'Unit Manajemen Risiko (UMR)',
    officials: 'Biro Keuangan Sekretariat Jenderal Kementerian Perindustrian',
    duties: [
      'Memantau penilaian risiko dan rencana tindak pengendalian seluruh unit kerja',
      'Memantau pelaksanaan dan tindak lanjut hasil reviu/audit atas MRPN',
      'Menyusun profil risiko kementerian yang bersifat strategis, baru, dan lintas unit kerja',
      'Memberikan umpan balik (feedback) dan usulan rekomendasi perbaikan pelaksanaan MRPN',
      'Menyusun laporan kegiatan pemantauan MRPN kementerian',
      'Memberikan bimbingan teknis dan sosialisasi terkait MRPN ke seluruh unit kerja',
      'Memvalidasi usulan risiko baru dari Unit Pemilik Risiko',
      'Mengelola Sistem Informasi MRPN Kementerian Perindustrian',
    ],
  },
  line3: {
    title: 'Lini Ketiga (Third Line)',
    entity: 'Unit Pengawasan Manajemen Risiko (UPMR)',
    officials: 'Inspektorat Jenderal Kementerian Perindustrian (APIP)',
    duties: [
      'Menyusun kebijakan pengawasan penyelenggaraan MRPN',
      'Melaksanakan konsultasi dan asistensi penerapan manajemen risiko',
      'Melaksanakan pengawasan intern melalui audit, pemantauan, reviu, dan evaluasi',
      'Menyampaikan rekomendasi terhadap efektivitas penyelenggaraan MRPN kepada Pemilik Risiko dan UMR',
      'Memberikan saran pertimbangan respons risiko pada area-area kritis',
    ],
  },
};

// Siklus dan Jadwal Pelaporan MRPN (Hal 31-32)
export const MRPN_CYCLE_SCHEDULE = [
  {
    phase: 'Penetapan Konteks & Penilaian Risiko (Perencanaan)',
    deadline: 'Paling lambat 31 Maret',
    outputDoc: 'Dokumen Penetapan Konteks, Formulir Identifikasi Risiko, Formulir Analisis Risiko, Daftar Risiko Prioritas, dan Formulir RTP',
    targetAudience: 'Disampaikan berjenjang kepada Unit Manajemen Risiko (Biro Keuangan) dan Unit Pengawasan Manajemen Risiko (Itjen)',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    phase: 'Pemantauan Semester I (Tengah Tahun)',
    deadline: 'Bulan Juli',
    outputDoc: 'Laporan Pemantauan Kegiatan Pengendalian dan Laporan Pemantauan Peristiwa Risiko Semester I',
    targetAudience: 'Disampaikan kepada UMR (Biro Keuangan) dan UPMR (Itjen)',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    phase: 'Pemantauan Tahunan / Semester II',
    deadline: 'Bulan Desember',
    outputDoc: 'Laporan Pemantauan Kegiatan Pengendalian dan Peristiwa Risiko Tahunan',
    targetAudience: 'Disampaikan kepada UMR (Biro Keuangan) dan UPMR (Itjen)',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    phase: 'Evaluasi Penyelenggaraan MRPN & Pemantauan Level Risiko',
    deadline: 'Bulan Maret (Tahun Berikutnya)',
    outputDoc: 'Laporan Pemantauan Level Risiko Aktual & Deviasi serta Laporan Efektivitas Penyelenggaraan MRPN',
    targetAudience: 'Disampaikan kepada UMR dan UPMR untuk evaluasi tingkat maturitas risiko',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
];

export const PERMENPERIN_THREE_LINES = [
  {
    lini: 'Lini Pertama',
    nama: 'Unit Pemilik Risiko (UPR)',
    entitas: 'Operasional Unit Kerja',
    peran: 'Pemilik & Pengelola Risiko operasional di masing-masing unit kerja (Pimpinan Satker & Tim Kerja)',
    tanggungJawab: [
      'Menetapkan selera risiko dan sasaran operasional unit kerja',
      'Mengidentifikasi, menganalisis, dan menilai risiko secara berkala',
      'Menyusun dan melaksanakan Rencana Tindak Pengendalian (RTP)',
      'Memantau dan mengevaluasi efektivitas pengendalian intern',
      'Menyusun dan menyampaikan Laporan Manajemen Risiko periodik',
    ],
  },
  {
    lini: 'Lini Kedua',
    nama: 'Unit Manajemen Risiko (UMR)',
    entitas: 'Fungsi Kepatuhan & Manajemen Risiko',
    peran: 'Biro Keuangan / Sekretariat Jenderal sebagai pembina teknis dan fasilitator kebijakan MRPN',
    tanggungJawab: [
      'Menyusun pedoman teknis dan metodologi manajemen risiko kementerian',
      'Memantau implementasi profil risiko di seluruh satuan kerja',
      'Memfasilitasi bimbingan teknis dan asistensi penyusunan peta risiko',
      'Menyusun profil risiko agregat kementerian untuk Pimpinan Kementerian',
      'Mengelola sistem informasi manajemen risiko kementerian',
    ],
  },
  {
    lini: 'Lini Ketiga',
    nama: 'Unit Pengawasan Manajemen Risiko (UPMR)',
    entitas: 'Internal Audit (APIP)',
    peran: 'Inspektorat Jenderal Kementerian Perindustrian sebagai pengawas independen',
    tanggungJawab: [
      'Melakukan reviu, evaluasi, dan audit independen atas efektivitas MRPN',
      'Memberikan rekomendasi perbaikan tata kelola dan pengendalian intern',
      'Menilai tingkat maturitas (kematangan) manajemen risiko instansi',
      'Melaporkan hasil pengawasan manajemen risiko langsung kepada Menteri Perindustrian',
    ],
  },
];

export const PERMENPERIN_REPORTING_CYCLES = [
  {
    periode: 'Perencanaan (Tahunan)',
    jenisLaporan: 'Dokumen Profil & Peta Risiko Tahunan',
    batasWaktu: 'Paling lambat 31 Maret TA Berjalan',
    keterangan: 'Memuat Penetapan Konteks, Risk Register, Matriks Analisis, Daftar Prioritas, dan Formulir RTP',
  },
  {
    periode: 'Semester I',
    jenisLaporan: 'Laporan Pemantauan Triwulan II / Semester I',
    batasWaktu: 'Bulan Juli TA Berjalan',
    keterangan: 'Laporan pemantauan progres pelaksanaan RTP, efektivitas pengendalian, dan catatan peristiwa risiko aktual',
  },
  {
    periode: 'Semester II / Tahunan',
    jenisLaporan: 'Laporan Pemantauan Akhir Tahun (Tahunan)',
    batasWaktu: 'Bulan Desember TA Berjalan',
    keterangan: 'Evaluasi ketercapaian target penurunan skor risiko, kepatuhan selera risiko, dan kendala mitigasi',
  },
  {
    periode: 'Evaluasi & Reviu',
    jenisLaporan: 'Laporan Evaluasi Maturitas MRPN',
    batasWaktu: 'Bulan Maret (Tahun Berikutnya)',
    keterangan: 'Evaluasi menyeluruh oleh Inspektorat Jenderal terhadap efektivitas MRPN dan rekomendasi tahun berjalan',
  },
];

// 7 Formulir Baku Lampiran Permenperin No. 24 Tahun 2023
export const PERMENPERIN_STANDARD_FORMS = [
  {
    id: 'form-1',
    title: 'Formulir 1 - Identifikasi Risiko',
    description: 'Daftar identifikasi sasaran strategis, indikator, proses bisnis, pernyataan risiko, penyebab internal/eksternal, dan dampak.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 33',
  },
  {
    id: 'form-2',
    title: 'Formulir 2 - Analisis & Evaluasi Risiko',
    description: 'Tabel analisis risiko 11 kolom membandingkan level inherent, kecukupan pengendalian saat ini, dan level residual.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 34',
  },
  {
    id: 'form-3',
    title: 'Formulir 3 - Daftar Risiko Prioritas',
    description: 'Peringkat risiko prioritas utama organisasi berdasarkan besaran residu yang melampaui selera risiko.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 35',
  },
  {
    id: 'form-4',
    title: 'Formulir 4 - Rencana Tindak Pengendalian (RTP)',
    description: 'Rencana aksi mitigasi, opsi respons risiko, target indikator keluaran, jadwal pelaksanaan, dan penanggung jawab.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 36',
  },
  {
    id: 'form-5',
    title: 'Formulir 5 - Pemantauan Kegiatan Pengendalian',
    description: 'Laporan pemantauan progres realisasi tindak pengendalian semesteran dan tahunan.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 37',
  },
  {
    id: 'form-6',
    title: 'Formulir 6 - Pemantauan Peristiwa Risiko',
    description: 'Log catatan historis kejadian peristiwa risiko riil yang terjadi selama tahun berjalan.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 38',
  },
  {
    id: 'form-7',
    title: 'Formulir 7 - Pemantauan Level Risiko & Deviasi',
    description: 'Evaluasi ketercapaian target level residu, deviasi capaian, dan penyesuaian strategi respon.',
    lampiranRef: 'Lampiran Permenperin No. 24 Tahun 2023 Halaman 39',
  },
];


