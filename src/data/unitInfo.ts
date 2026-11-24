export interface UnitDetail {
  code: 'PIH' | 'POPTIKJI' | 'PPSI' | 'PPPPSI' | 'Sekretariat';
  name: string;
  shortName?: string;
  description?: string;
  shortDescription: string;
  color: string;
  accentBg: string;
  badgeClass: string;
}

export const UNIT_INFO: Record<string, UnitDetail> = {
  PIH: {
    code: 'PIH',
    name: 'Pusat Industri Hijau',
    shortName: 'Pusat Industri Hijau',
    description: 'Perumusan kebijakan, fasilitasi, standardisasi, dan sertifikasi industri hijau serta ekonomi sirkular.',
    shortDescription: 'Perumusan kebijakan, fasilitasi, standardisasi, dan sertifikasi industri hijau serta ekonomi sirkular.',
    color: '#059669', // emerald
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  POPTIKJI: {
    code: 'POPTIKJI',
    name: 'Pusat Optimalisasi Pemanfaatan Teknologi Industri dan Kebijakan Jasa Industri',
    shortName: 'POPTIKJI',
    description: 'Optimalisasi pemanfaatan teknologi industri manufaktur, digitalisasi 4.0, dan pembinaan jasa industri.',
    shortDescription: 'Optimalisasi pemanfaatan teknologi industri manufaktur, digitalisasi 4.0, dan pembinaan jasa industri.',
    color: '#0284c7', // sky
    accentBg: 'bg-sky-50 text-sky-700 border-sky-200',
    badgeClass: 'bg-sky-100 text-sky-800 border-sky-300',
  },
  PPSI: {
    code: 'PPSI',
    name: 'Pusat Pengawasan Standardisasi Industri',
    shortName: 'Pusat Pengawasan Standardisasi Industri',
    description: 'Pengawasan penerapan standar industri, kepatuhan Lembaga Penilaian Kesesuaian (LPK), dan pengawasan produk beredar.',
    shortDescription: 'Pengawasan penerapan standar industri, kepatuhan Lembaga Penilaian Kesesuaian (LPK), dan pengawasan produk beredar.',
    color: '#d97706', // amber
    accentBg: 'bg-amber-50 text-amber-700 border-amber-200',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  PPPPSI: {
    code: 'PPPPSI',
    name: 'Pusat Perumusan, Penerapan, dan Pemberlakuan Standardisasi Industri',
    shortName: 'PPPPSI',
    description: 'Perumusan Rancangan SNI, penetapan SNI wajib, dan evaluasi pemberlakuan standar sektor industri.',
    shortDescription: 'Perumusan Rancangan SNI, penetapan SNI wajib, dan evaluasi pemberlakuan standar sektor industri.',
    color: '#7c3aed', // violet
    accentBg: 'bg-violet-50 text-violet-700 border-violet-200',
    badgeClass: 'bg-violet-100 text-violet-800 border-violet-300',
  },
  Sekretariat: {
    code: 'Sekretariat',
    name: 'Sekretariat Badan Standardisasi dan Kebijakan Jasa Industri',
    shortName: 'Sekretariat BSKJI',
    description: 'Pengelolaan tata usaha, keuangan, kepegawaian, kerja sama, pengadaan barang/jasa, SPBE, dan akuntabilitas SAKIP/IKPA.',
    shortDescription: 'Pengelolaan tata usaha, keuangan, kepegawaian, kerja sama, pengadaan barang/jasa, SPBE, dan akuntabilitas SAKIP/IKPA.',
    color: '#475569', // slate
    accentBg: 'bg-slate-100 text-slate-700 border-slate-300',
    badgeClass: 'bg-slate-200 text-slate-800 border-slate-300',
  },
};

export const DOCUMENT_METADATA = {
  title: 'Peta Risiko Eselon I BSKJI Pusat Tahun 2026',
  sourceDocument: 'Peta Risiko BSKJI Pusat TA2026 Rev.docx',
  docNumber: '/BSKJI.1/RT/III/2026',
  date: 'Maret 2026',
  organization: 'Badan Standardisasi dan Kebijakan Jasa Industri (BSKJI)',
  ministry: 'Kementerian Perindustrian Republik Indonesia',
  riskCoordinator: 'Muhammad Taufiq',
  coordinatorTitle: 'Koordinator Pengelola Risiko',
  year: 2026,
  totalRisks: 45,
  statusPrioritas: 'Tidak ada Daftar Risiko Prioritas pada dokumen sumber (Bab C).',
  statusRTP: 'Tidak ada Rencana Tindak Pengendalian pada dokumen sumber (Bab D).',
};
