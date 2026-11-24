export type RiskLevel = 'Sangat Tinggi' | 'Tinggi' | 'Sedang' | 'Rendah' | 'Sangat Rendah';

export type ControlAdequacy = 'Memadai' | 'Belum Memadai' | 'Belum Ada';

export type AchievementStatus = 'Tercapai' | 'Perlu Perhatian' | 'Perlu Intervensi' | 'Belum tersedia';

// 5 Kriteria Risiko Resmi Permenperin No. 24 Tahun 2023 Halaman 18
export type RiskCriteria =
  | 'Beban Keuangan Negara'
  | 'Reputasi Organisasi'
  | 'Pencapaian Tujuan Organisasi'
  | 'Kesehatan dan Keselamatan Kerja (K3)'
  | 'Temuan Pemeriksaan / Auditor';

export type AppetiteStatus = 'Dalam Selera (Dapat Diterima)' | 'Di Luar Selera (Wajib Mitigasi)';

export type SortField = keyof RiskItem | 'scoreReduction';
export type SortDirection = 'asc' | 'desc';

export interface RiskItem {
  id: string; // e.g. "RSK-01"
  originalNumber: number; // 1 to 45
  unit: 'PIH' | 'POPTIKJI' | 'PPSI' | 'PPPPSI' | 'Sekretariat';
  sasaranStrategis: string; // e.g. "(SK1) Meningkatkan sertifikasi industri hijau"
  indikatorKinerja: string;
  target: string;
  pengelola: string;
  prosesBisnis: string[]; // List of business process steps
  pernyataanRisiko: string;
  penyebabInternal: string[];
  penyebabEksternal: string[];
  uraianDampak: string;
  levelDampakIdentifikasi?: number;
  realisasi?: string;
  capaian?: string;
  capaianPercentage?: number; // parsed numerical for analytics
  
  // Klasifikasi Permenperin 24/2023
  kriteriaRisiko?: RiskCriteria;
  aspekDampak?: RiskCriteria;
  inherentAppetiteStatus?: AppetiteStatus;
  residualAppetiteStatus?: AppetiteStatus;

  // Analisis Risiko Melekat (Inherent)
  inherentProbability: number;
  inherentImpact: number;
  inherentScore: number;
  inherentLevel: RiskLevel;
  
  // Pengendalian yang Ada
  controlExists: boolean;
  controlDescription: string[];
  controlAdequacy: ControlAdequacy;
  
  // Analisis Risiko Residu (Residual)
  residualProbability: number;
  residualImpact: number;
  residualScore: number;
  residualLevel: RiskLevel;

  // Rencana Tindak Pengendalian (RTP) Resmi Permenperin 24/2023
  rtpRespons?: string;
  rtpKegiatanPengendalian?: string[];
  rtpPenanggungJawab?: string;
  rtpIndikatorKeluaran?: string;
  rtpTargetWaktu?: string;
  
  // Analitik Dashboard (turunan)
  scoreReduction: number; // inherentScore - residualScore
  scoreReductionPercent: number;
  reductionCategory: 'Turun Signifikan' | 'Turun Sebagian' | 'Tidak Mengalami Penurunan' | 'Membutuhkan Evaluasi';
  indicatorStatus: AchievementStatus;
  
  // Verifikasi Data
  needsVerification?: boolean;
  verificationNote?: string;
  verificationNotes?: string;
}

export interface FilterState {
  search: string;
  unit: string; // 'ALL' | unit name
  sasaranStrategis: string; // 'ALL' | string
  inherentLevel: string; // 'ALL' | RiskLevel
  residualLevel: string; // 'ALL' | RiskLevel
  controlAdequacy: string; // 'ALL' | ControlAdequacy
  indicatorStatus: string; // 'ALL' | AchievementStatus
  kriteriaRisiko?: string; // 'ALL' | RiskCriteria
  seleraRisiko?: string; // 'ALL' | 'Dalam Selera' | 'Di Luar Selera'
  sortField: SortField;
  sortDirection: SortDirection;
}

export interface UnitSummary {
  unit: string;
  name: string;
  totalRisks: number;
  highestInherentRisk: number;
  highestResidualRisk: number;
  avgInherentScore: number;
  avgResidualScore: number;
  avgReduction: number;
  controlAdequateCount: number;
  controlInadequateCount: number;
  indicatorsCount: number;
  avgAchievement: number;
}
