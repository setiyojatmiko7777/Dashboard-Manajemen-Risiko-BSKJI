import { RiskItem, RiskLevel } from '../types/risk';

// Helper to determine risk level category strictly from the document's score
// Penetapan Level Risiko berdasarkan Besaran/Skor Risiko resmi Permenperin No. 24 Tahun 2023:
// Skor 20 - 25: Sangat Tinggi (Level 5 - Merah)
// Skor 15 - 19: Tinggi (Level 4 - Orange)
// Skor 12 - 14: Sedang (Level 3 - Kuning)
// Skor 7 - 11: Rendah (Level 2 - Hijau) - Batas Selera Risiko Organisasi (Skor <= 11)
// Skor 1 - 6: Sangat Rendah (Level 1 - Biru)
export function getLevelCategory(score: number): RiskLevel {
  if (score >= 20) return 'Sangat Tinggi';
  if (score >= 15) return 'Tinggi';
  if (score >= 12) return 'Sedang';
  if (score >= 7) return 'Rendah';
  return 'Sangat Rendah';
}

export const RAW_RISK_DATA: RiskItem[] = [
  // ==========================================
  // PIH (Pusat Industri Hijau) - Risks 1 to 8
  // ==========================================
  {
    id: 'RSK-01',
    originalNumber: 1,
    unit: 'PIH',
    sasaranStrategis: '(SK1) Meningkatkan sertifikasi industri hijau',
    indikatorKinerja: 'Jumlah RSIH yang mencapai konsensus',
    target: '4',
    pengelola: 'Tim Kerja Fasilitasi, Standardisasi dan Penerapan Industri Hijau',
    prosesBisnis: [
      'Permenperin Nomor 51 Tahun 2015 tentang Pedoman Penyusunan Standar Industri Hijau',
      '1. Menyusunan usulan perumusan RSIH dari Direktorat Teknis, Asosisasi Industri, Perusahaan Industri, LSIH dan hasil evaluasi Sertifikasi Industri Hijau',
      '2. Mendalami usulan RSIH melalui rapat koordinasi dengan Direktorat Teknis, Asosiasi Industri, dan LSIH',
      '3. Menetapkan RSIH yang akan disusun pada tahun berjalan',
      '4. Melakukan Rapat Sosialisasi/Rapat Koordinasi Penyusunan RSIH',
      '5. Melaksanakan tahap pengambilan data-data yang diperlukan melalui kuesioner/survei/benchmarking; melakukan pengolahan data; analisis data',
      '6. Menyelenggarakan Rapat Teknis Penyusunan draf RSIH dengan stakeholder terkait (Asosiasi, Perusahaan Industri, dll) untuk menghasilkan draf RSIH Hasil Rapat Teknis',
      '7. Menyelenggarakan Rapat Pra-Konsensus dengan mengundang peserta pada Rapat Teknis dan Kementerian/Lembaga terkait untuk menghasilkan RSIH yang akan digunakan pada Rapat Konsensus',
      '8. Menyelenggarakan Rapat Konsensus untuk menghasilkan RSIH Hasil Konsensus (kesepatakan pihak-pihak Rapat Teknis dan Kementerian/Lembaga terkait)',
      '9. Menyampaikan draf RSIH hasil Konsensus kepada Sekretaris BSKJI dan Kepala BSKJI untuk diparaf'
    ],
    pernyataanRisiko: 'Keterlambatan pencapaian kesepakatan batasan-batasan teknis pada Rapat Teknis (melebihi waktu yang telah dialokasikan) sehingga Rapat Konsensus diadakan melewati waktu yang direncanakan',
    penyebabInternal: [
      '1. Tim Internal mengundang para pihak terkait',
      '2. Tim Internal tidak memastikan kehadiran para pemangku kepentingan yang hadir sesuai dengan kapasitasnya',
      '3. Tim Internal bersama dengan Tenaga Ahli gagal mengidentifikasi data-data yang dibutuhkan sehingga Rapat Teknis tidak efektif-efisien',
      '4. Tim Internal bersama dengan Tenaga Ahli membuat kuesioner/survei, dsb yang kurang memadai untuk mendapatkan data-data yang diperlukan',
      '5. Tim Internal tidak dapat mengharmonisasi Para Pihak terkait'
    ],
    penyebabEksternal: [
      '1. Pihak Eksternal yang diundang tidak hadir atau diwakili oleh personel yang tidak sesuai',
      '2. Kondisi perusahaan industri terlalu variatif sehingga sulit menetapkan angka atau kriteria threshold (ambang batas)',
      '3. Pihak Eksternal tidak menghadiri atau tidak konsisten menghadiri Rapat Teknis maupun Rapat Pra-Konsensus dan Rapat Konsensus',
      '4. Pihak Eksternal tidak aware terhadap RSIH yang akan disusun sehingga tidak menghadiri Rapat-Rapat yang diadakan'
    ],
    uraianDampak: 'Jumlah RSIH yang mencapai konsensus sebanyak 3 RSIH',
    levelDampakIdentifikasi: 4,
    realisasi: '3 RSIH',
    capaian: '75%',
    capaianPercentage: 75,
    inherentProbability: 2,
    inherentImpact: 4,
    inherentScore: 16,
    inherentLevel: 'Tinggi',
    controlExists: true,
    controlDescription: [
      'Tim FSPIH memastikan perwakilan stakeholder yang terlibat dalam Rapat Teknis sesuai dengan kapasitas yang diperlukan, mengharapkan komitmen partisipasi (kehadiran), dan bersedia memberikan data yang diperlukan pada tahap Rapat Teknis [Formulir Keikutsertaan Rapat Teknis-Bersedia Memberikan Informasi yang Dibutuhkan; Daftar Hadir]'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 1,
    residualImpact: 3,
    residualScore: 10,
    residualLevel: 'Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 37.5,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-02',
    originalNumber: 2,
    unit: 'PIH',
    sasaranStrategis: '(SK1) Meningkatkan sertifikasi industri hijau',
    indikatorKinerja: 'Persentase ruang lingkup SIH yang dimiliki LSIH terhadap jumlah SIH yang ditetapkan',
    target: '100%',
    pengelola: 'Tim Kerja Fasilitasi, Standardisasi dan Penerapan Industri Hijau',
    prosesBisnis: [
      'Permenperin Nomor 39 Tahun 2018 tentang Tata Cara Sertifikasi Industri Hijau:',
      '● Bab IV Lembaga Sertifikasi Industri Hijau',
      '● Bab V Pelaporan, Pembinaan dan Pengawasan',
      '● Bab VI Sanksi',
      '1. Melakukan pemetaan kompetensi/kapasitas LSIH terhadap SIH yang telah/akan ditetapkan',
      '2. Melakukan verifikasi dan pemantauan terhadap usulan perluasan ruang lingkup LSIH terhadap SIH yang telah ditetapkan',
      '3. Menetapkan ruang lingkup LSIH terhadap SIH baru yang telah ditetapkan',
      '4. Menyusun draf Kepemen/Permen ruang lingkup LSIH untuk dibahas dengan Sekretaris BSKJI, Biro Hukum, pihak terkait',
      '5. Menghitung persentase penambahan ruang lingkup LSIH terhadap SIH baru yang ditetapkan'
    ],
    pernyataanRisiko: 'Kapasitas/kompetensi LSIH tidak sesuai dengan SIH yang disusun sehingga LSIH tidak dapat menambah ruang lingkup sesuai SIH baru yang ditetapkan',
    penyebabInternal: [
      '1. Tim Kerja tidak melakukan sosialisasi yang cukup untuk memastikan LSIH menyesuaikan kapasitas/kompetensi sesuai SIH baru yang ditetapkan',
      '2. Belum ada mekanisme yang jelas terkait pemberian sanksi dari peraturan yang mengatur pemenuhan kepatuhan LSIH yang tidak menambah ruang lingkup LSIH',
      '3. Belum ada Tim Kerja khusus dalam pemantauan kepatuhan LSIH'
    ],
    penyebabEksternal: [
      '1. LSIH tidak memiliki peta jalan peningkatan kapasitas/kompetensi sesuai dengan SIH baru yang ditetapkan',
      '2. LSIH tidak menyusun pemetaan yang tepat antara data pelanggan dan ruang lingkup SIH yang dimiliki',
      '3. LSIH tidak mengetahui SIH baru yang akan ditetapkan sehingga tidak mempersiapkan kapasitas untuk memenuhi lingkup SIH yang baru',
      '4. LSIH memiliki peta jalan pengembangan ruang lingkup yang tidak sesuai dengan pengembangan ruang lingkup SIH yang ditetapkan',
      '5. LSIH tidak melihat potensi peningkatan pendapatan dari penambahan ruang lingkup terhadap SIH baru yang ditetapkan'
    ],
    uraianDampak: 'Persentase ruang lingkup SIH yang dimiliki LSIH terhadap jumlah SIH yang ditetapkan sebesar 91%',
    levelDampakIdentifikasi: 2,
    realisasi: '91%',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 2,
    inherentImpact: 2,
    inherentScore: 6,
    inherentLevel: 'Sangat Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan sosialisasi RSIH yang akan disusun ke LSIH [Undangan / Daftar Hadir / Nota Dinas penyampaian RSIH yang sedang disusun]',
      '2. Menyusun kuesioner keterkaitan RSIH yang dibahas dengan kapasitas LSIH (menampung masukan jika terdapat gap antara RSIH yang sedang disusun dengan kapasitas LSIH) [kuesioner]'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 1,
    residualImpact: 2,
    residualScore: 5,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 1,
    scoreReductionPercent: 16.7,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-03',
    originalNumber: 3,
    unit: 'PIH',
    sasaranStrategis: '(SK2) Terwujudnya praktik industri hijau dan ekonomi sirkular yang ditetapkan di sektor industri',
    indikatorKinerja: 'Persentase peningkatan perusahaan industri yang terfasilitasi penerapan industri hijau',
    target: '25%',
    pengelola: 'Tim Kerja Dekarbonisasi Industri; Tim Kerja Penguatan Ekonomi Sirkular dan Pencegahan Pencemaran Sektor Industri; Tim Kerja Penguatan Ekosistem Industri Hijau',
    prosesBisnis: [
      '1. Menyusun pedoman praktik industri hijau dan ekonomi sirkular di sektor industri bersama dengan stakeholder',
      '2. Melakukan sosialisasi pedoman praktik industri hijau dan ekonomi sirkular kepada stakeholder (pelaku industri dan K/L lain yang terkait)',
      '3. Melakukan seleksi terhadap perusahaan industri yang akan diberikan fasilitasi penerapan praktik industri hijau dan ekonomi sirkular',
      '4. Melakukan fasilitasi dan pemantauan implementasi praktik industri hijau dan ekonomi sirkular',
      '5. Melakukan rekapitulasi data hasil implementasi praktik industri hijau dan ekonomi sirkular',
      '6. Menyelenggarakan rapat evaluasi penerapan praktik industri hijau dan ekonomi sirkular dengan stakeholder (perusahaan industri yang diberikan fasilitas, K/L terkait, Eselon I Kemenperin yang terkait)'
    ],
    pernyataanRisiko: 'Pedoman atau kebijakan praktik industri hijau dan ekonomi sirkular yang telah dibuat tidak efektif diterapkan di perusahaan industri terkait',
    penyebabInternal: [
      '1. Tim Penyusun Pedoman tidak dapat menangkap atau menerjemahkan kapasitas industri dengan tepat',
      '2. Koordinasi antar PIH dengan Direktorat Jenderal sebagai pembina industri tidak optimal',
      '3. PIH tidak merumuskan keuntungan tambahan bagi penerapan industri hijau dan ekonomi sirkular seperti insentif, dsb untuk meningkatkan minat perusahaan industri'
    ],
    penyebabEksternal: [
      '1. Perusahaan industri tidak dapat menerapkan teknologi yang dianjurkan atau yang diperlukan',
      '2. Perusahaan industri resisten terhadap pedoman praktik industri hijau dan ekonomi sirkular (tidak menangkap dampak lingkungan dan dampak ekonomi terhadap perusahaan)'
    ],
    uraianDampak: 'Persentase peningkatan perusahaan industri yang terfasilitasi penerapan industri hijau sebesar sebanyak 25%',
    levelDampakIdentifikasi: 3,
    realisasi: '21% (capaian 84%)',
    capaian: '84%',
    capaianPercentage: 84,
    inherentProbability: 2,
    inherentImpact: 3,
    inherentScore: 11,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Tim Penyusun Kebijakan memastikan perwakilan stakeholder yang terlibat dalam Rapat Teknis sesuai dengan kapasitas yang diperlukan, mengharapkan komitmen partisipasi (kehadiran), dan bersedia memberikan data yang diperlukan pada tahap Rapat Teknis agar pedoman yang dibuat efektif diterapkan di Perusahaan Industri [Formulir Keikutsertaan Rapat Teknis-Bersedia Memberikan Informasi yang Dibutuhkan; Daftar Hadir]',
      '2. Menyelenggarakan forum sosialisasi fasilitasi untuk mengurangi resistensi penerapan industri hijau dan ekonomi sirkular [Undagan Sosialisasi - Daftar Hadir - Kuesioner Evaluasi atau Masukan]'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 1,
    residualImpact: 3,
    residualScore: 10,
    residualLevel: 'Rendah',
    scoreReduction: 1,
    scoreReductionPercent: 9.1,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-04',
    originalNumber: 4,
    unit: 'PIH',
    sasaranStrategis: '(SK2) Terwujudnya praktik industri hijau dan ekonomi sirkular yang ditetapkan di sektor industri',
    indikatorKinerja: 'Jumlah rekomendasi kebijakan penguatan industri hijau',
    target: '53 rekomendasi kebijakan (akumulasi)',
    pengelola: 'Tim Kerja Dekarbonisasi Industri; Tim Kerja Penguatan Ekonomi Sirkular dan Pencegahan Pencemaran Sektor Industri; Tim Kerja Penguatan Ekosistem Industri Hijau',
    prosesBisnis: [
      '1. Melakukan koordinasi dengan Direktorat teknis dan stakeholders terkait rencana penyusunan rekomendasi kebijakan oleh PIH TA 2026, seperti Rekomendasi Kebijakan - Potensi Penurunan Emisi GRK dari pemanfaatan Limbah B3; Permenperin Ekonomi Sirkular Sektor Industri; Pengembangan Roadmap Perdagangan Sektor Industri; dll',
      '2. Melakukan rapat-rapat teknis',
      '3. Menyelenggarakan Rapat Harmonisasi',
      '4. Finalisasi dokumen (paraf Sekretaris BSKJI dan Kepala BSKJI)'
    ],
    pernyataanRisiko: 'Kesepakatan pada rapat teknis sulit dicapai sehingga membutuhkan waktu lebih lama dari waktu yang telah ditentukan sehingga penyelesaian rekomendasi kebijakan tidak dapat diselesaikan (Dinamika kebijakan atau bentuk Rancangan Permenperin menyebabkan jumlah rekomendasi kebijakan penguatan industri hijau tidak tercapai)',
    penyebabInternal: [
      '1. Kesulitan koordinasi antar stakeholder internal (Biro Hukum, Direktorat, dll) sehingga memerlukan waktu lebih lama dalam pengambilan keputusan atau kesepakatan',
      '2. Beberapa kebijakan seperti kebijakan pengurangan emisi, ekonomi sirkular merupakan kebijakan yang relatif baru sehingga belum ada data atau informasi Benchmark Best Available Technologies dan Best Practice yang cukup'
    ],
    penyebabEksternal: [
      '1. Dinamika kebijakan pada stakeholder eksternal',
      '2. Stakeholder yang diundang (pelaku industri, K/L, asosiasi) tidak terlibat aktif dalam proses diskusi sehingga menghambat pengumpulan dokumen, data, atau informasi penting yang mempengaruhi pengambilan keputusan'
    ],
    uraianDampak: 'Jumlah rekomendasi kebijakan penguatan industri hijau sebanyak 45 rekomendasi kebijakan',
    levelDampakIdentifikasi: 3,
    realisasi: '45 rekomendasi kebijakan',
    capaian: '85%',
    capaianPercentage: 85,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Tim Penyusun Rekomendasi Kebijakan melakukan identifikasi terhadap data-data kebijakan yang relatif baru pada periode sebelumnya [Dokumen Identifikasi]',
      '2. Tim Penyusun Rekomendasi Kebijakan melakukan identifikasi dinamika kebijakan pada stakeholder internal dan eksternal sejak tahap awal perumusan [Dokumen Identifikasi]',
      '3. Tim Penyusun Rekomendsai memastikan perwakilan stakeholder yang terlibat dalam Rapat Teknis sesuai dengan kapasitas yang diperlukan, mengharapkan komitmen partisipasi (kehadiran), dan bersedia memberikan data yang diperlukan pada tahap Rapat Teknis [Formulir Keikutsertaan Rapat Teknis-Bersedia Memberikan Informasi yang Dibutuhkan; Daftar Hadir]'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 3,
    residualScore: 11,
    residualLevel: 'Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 15.4,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-05',
    originalNumber: 5,
    unit: 'PIH',
    sasaranStrategis: '(SK3) Meningkatnya penggunaan Produk Dalam Negeri dalam rangka menunjang produktivitas industri',
    indikatorKinerja: 'Persentase penggunaan Produk Dalam Negeri dalam pengadaan barang dan/atau jasa pemerintah',
    target: '91,3%',
    pengelola: 'PIH',
    prosesBisnis: [
      '1. Koordinasi terkait pelaksanaan P3DN di BSKJI',
      '2. Koordinasi internal terkait upaya maksimalisasi pengadaan barang dan jasa PIH TA 2026',
      '3. Pemenuhan perencanaan PBJ dan tagging PDN pada SIRUP',
      '4. Monitoring Penggunaan Produk Dalam Negeri melalui SAKTI'
    ],
    pernyataanRisiko: 'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target',
    penyebabInternal: [
      'PPK/PBJ/User mengusulkan barang non-PDN untuk memenuhi kebutuhan dalam pelaksanaan kegiatan di PIH'
    ],
    penyebabEksternal: [
      'Belum tersedia'
    ],
    uraianDampak: 'Capaian belanja PDN TKDN dibawah target 91,3%',
    levelDampakIdentifikasi: 2,
    realisasi: 'Belum tersedia',
    capaian: 'Dibawah target (<91,3%)',
    capaianPercentage: 88,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Sosialisasi ketersediaan PDN kepada Tim Kerja',
      '2. Melakukan seleksi terhadap usulan permintaan barang/jasa'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-06',
    originalNumber: 6,
    unit: 'PIH',
    sasaranStrategis: '(SK4) Tercapainya pengawasan internal yang efektif dan efisien',
    indikatorKinerja: 'Persentase rekomendasi hasil pengawasan internal telah ditindaklanjuti oleh Satker',
    target: '62%',
    pengelola: 'PIH / Tata Usaha',
    prosesBisnis: [
      '1. Koordinasi matriks temuan audit pengawasan dengan Auditor',
      '2. Koordinasi penyelesaian tindak lanjut audit kinerja PIH TA 2025 di tahun 2026 dengan tim kerja',
      '3. Monitoring dan pengumpulan materi tindak lanjut'
    ],
    pernyataanRisiko: 'Terdapat rekomendasi hasil pengawasan yang melibatkan Unit lain sehingga penyelesaiannya juga bergantung pada pihak eksternal',
    penyebabInternal: [
      '1. Terdapat beberapa kegiatan atau prosedur yang lintas Eselon II',
      '2. Terdapat perbedaan persepsi antara auditor dan PIH terhadap tindak lanjut temuan'
    ],
    penyebabEksternal: [
      'Terdapat beberapa kegiatan atau prosedur yang melibatkan pihak ketiga seperti tenaga ahli, dll'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi dibawah target 62%',
    levelDampakIdentifikasi: 3,
    realisasi: 'Belum mencapai 62%',
    capaian: 'Dibawah target (<62%)',
    capaianPercentage: 85,
    inherentProbability: 2,
    inherentImpact: 3,
    inherentScore: 11,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan identifikasi potensi rekomendasi yang melibatkan lintas Unit Eselon I atau Eselon II',
      '2. Menyamakan persepsi dengan koordinator'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 1,
    residualImpact: 2,
    residualScore: 5,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 54.5,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-07',
    originalNumber: 7,
    unit: 'PIH',
    sasaranStrategis: '(SK4) Tercapainya pengawasan internal yang efektif dan efisien',
    indikatorKinerja: 'Nilai hasil pengawasan kearsipan (Unit Pengolah)',
    target: 'Nilai 63',
    pengelola: 'PIH / Tata Usaha',
    prosesBisnis: [
      '1. Menginput data arsip inaktif',
      '2. digitalisasi arsip aktif',
      '3. persiapan penilaian kearsipan'
    ],
    pernyataanRisiko: 'Penggunaan sistem informasi/digitalisasi kearsipan belum optimal menyebabkan nilai hasil pengawasan rendah',
    penyebabInternal: [
      '1. Kompetensi SDM yang kurang dalam penggunaan SRIKANDI dalam persuratan',
      '2. Koordinasi antar JF Arsiparis masih kurang'
    ],
    penyebabEksternal: [
      '1. Perubahan metode pengawasan oleh ANRI terhadap pengawasan kearsipan',
      '2. Koordinasi pengawasan dari Biro Umum Kemenperin masih kurang'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi dibawah target Nilai 63',
    levelDampakIdentifikasi: 2,
    realisasi: 'Dibawah target 63',
    capaian: 'Dibawah target',
    capaianPercentage: 88,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan bimbingan teknis internal kepada Tim Kerja terkait penerapan SRIKANDI setiap semester',
      '2. Terdapat pembagian kerja yang jelas dalam proses pengarsipan dan penginputan/digitalisasi arsip di SRIKANDI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-08',
    originalNumber: 8,
    unit: 'PIH',
    sasaranStrategis: '(SK4) Tercapainya pengawasan internal yang efektif dan efisien',
    indikatorKinerja: 'Nilai minimal Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)',
    target: 'Nilai: 79,45',
    pengelola: 'PIH / Tata Usaha',
    prosesBisnis: [
      '1. Menyusun rencana strategis dan operasional organisasi yang sesuai dengan visi, misi, tujuan, dan sasaran organisasi',
      '2. Melaksanakan kegiatan organisasi sesuai dengan rencana yang telah disusun',
      '3. Menyampaikan laporan kinerja organisasi kepada pihak yang berwenang dan berkepentingan',
      '4. Menerima umpan balik dan evaluasi atas laporan kinerja'
    ],
    pernyataanRisiko: 'Unsur-unsur nilai yang tertuang pada SAKIP tidak mencapai nilai optimal menyebabkan nilai SAKIP rendah',
    penyebabInternal: [
      '1. Tidak ada pembagian tugas yang jelas dari atasan',
      '2. tidak ada arahan dan monitoring secara berkala dari atasan terhadap pembagian pekerjaan',
      '3. Fungsi reward dan punishment belum dijalankan optimal terhadap pembagian beban pekerjaan'
    ],
    penyebabEksternal: [
      'Perbedaan persepsi antara auditor dan PIC terhadap substansi satker'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi dibawah target nilai',
    levelDampakIdentifikasi: 2,
    realisasi: 'Dibawah target 79,45',
    capaian: 'Dibawah target',
    capaianPercentage: 89,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Mengadakan sosialisasi unsur penilaian SAKIP kepada Tim Kerja',
      '2. Terdapat pembagian kerja yang jelas dari mulai pedoman kegiatan hingga pelaporan, sehingga program kegiatan yang dilaksanakan terukur'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },

  // ==========================================
  // POPTIKJI - Risks 9 to 18
  // ==========================================
  {
    id: 'RSK-09',
    originalNumber: 9,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK1) Terwujudnya optimalisasi pemanfaatan teknologi Penurunan Emisi GRK',
    indikatorKinerja: 'Peningkatan jumlah perusahaan industri yang mendapatkan fasilitasi teknologi Hijau',
    target: '19 Perusahaan Industri (akumulasi)',
    pengelola: 'Pusat OPTIKJI / Tim Kerja Optimalisasi Teknologi Industri, Rintisan Teknologi dan TKDN',
    prosesBisnis: [
      '1. Melakukan seleksi perusahaan penerima jasa konsultasi pada program DAPATI (stakeholder: Balai dan industri)',
      '2. Memberikan jasa konsultasi atau fasilitasi Industri Hijau kepada peserta program DAPATI/industri lainnya',
      '3. Melakukan evaluasi capaian jumlah industri yang mendapatkan fasilitasi'
    ],
    pernyataanRisiko: 'Jumlah perusahaan dengan lingkup IH tidak mengalami peningkatan sehingga target peningkatan jumlah industri yang mendapatkan fasilitasi teknologi IH tidak tercapai',
    penyebabInternal: [
      '1. Ketersediaan anggaran untuk kegiatan fasilitasi Industri Hijau terbatas',
      '2. Proses seleksi yang dilakukan Tim Kerja Internal terkait lingkup Industri Hijau kurang optimal'
    ],
    penyebabEksternal: [
      'Tidak semua perusahaan yang diseleksi memiliki ruang lingkup industri hijau'
    ],
    uraianDampak: 'Realisasi indikator sebesar 18 Perusahaan Industri (capaian 94% - Dampak Level 2)',
    levelDampakIdentifikasi: 2,
    realisasi: '18 Perusahaan Industri',
    capaian: '94%',
    capaianPercentage: 94,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Menyusun pemetaan ruang lingkup industri yang akan diseleksi',
      '2. Mengadakan sosialisasi dengan industri terkait fasilitasi teknologi IH'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 2,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 75.0,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-10',
    originalNumber: 10,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK2) Meningkatnya Adopsi Teknologi Pada Industri Manufaktur',
    indikatorKinerja: 'Peningkatan jumlah perusahaan industri yang melakukan optimalisasi pemanfaatan teknologi industri',
    target: '141 Perusahaan Industri (akumulasi)',
    pengelola: 'Pusat OPTIKJI / Tim Kerja Optimalisasi Teknologi Industri, Rintisan Teknologi, dan TKDN',
    prosesBisnis: [
      '1. Melakukan seleksi perusahaan penerima jasa konsultasi pada program DAPATI (stakeholder Balai dan industri; Balai melakukan pendampingan ke Industri)',
      '2. Memberikan jasa konsultasi',
      '3. Melakukan evaluasi capaian perusahaan yang melakukan optimalisasi pemanfaatan teknologi industri'
    ],
    pernyataanRisiko: 'Proses seleksi tidak optimal (seperti proposal yang lolos tidak sesuai, dsb) sehingga jumlah perusahaan industri yang melakukan pemanfaatan teknologi industri tidak mengalami peningkatan',
    penyebabInternal: [
      'Terbatas ketersediaan anggaran (revisi target) POPTIKJI tidak optimal dalam mendampingi Balai'
    ],
    penyebabEksternal: [
      '1. IKM tidak mempunyai dana untuk sharing biaya untuk melakukan optimalisasi pemanfaatan teknologi industri',
      '2. Kurangnya informasi keberadaan IKM yang sesuai kriteria',
      '3. Beban kerja SDM dibalai tinggi (ketidakmampuan balai melakukan pendampingan)',
      '4. Penyesuaian target dari Bappenas'
    ],
    uraianDampak: 'Realisasi indikator sebesar 17 (capaian Tahun 2025 = 113) Perusahaan Industri (capaian 92% - Dampak Level 2)',
    levelDampakIdentifikasi: 2,
    realisasi: '17 Perusahaan Industri (capaian Tahun 2025 = 113)',
    capaian: '92%',
    capaianPercentage: 92,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Mengadakan bimbingan teknis, pelatihan, sertifikasi kepada Balai untuk meningkatkan kapasitas pendampingan kepada industri',
      '2. Memperbaiki alur proses seleksi'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-11',
    originalNumber: 11,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK2) Meningkatnya Adopsi Teknologi Pada Industri Manufaktur',
    indikatorKinerja: 'Rekomendasi kebijakan terkait digitalisasi manufaktur yang telah dimanfaatkan perusahaan industri',
    target: '3 Rekomendasi Kebijakan (Akumulasi)',
    pengelola: 'Pusat OPTIKJI / Tim Kerja Regulasi dan Kerja Sama',
    prosesBisnis: [
      '1. Menyusun draf R-Permenperin tentang Penghargaan Teknologi Industri dan R-Permenperin Lighthouse Industri 4.0',
      '2. Harmonisasi draf R-Permenperin tentang Penghargaan Teknologi Industri dan R-Permenperin Lighthouse Industri 4.0',
      '3. Pengusulan rekomendasi kebijakan'
    ],
    pernyataanRisiko: 'Keterbatasan sumber daya (anggaran, kompetensi SDM) dalam menyusun rekomendasi sehingga target jumlah rekomendasi kebijakan tidak tercapai',
    penyebabInternal: [
      '1. Terbatas anggaran dalam melaksanakan FGD dan harmonisasi draf regulasi',
      '2. Keterbatasan SDM yang memiiki kompetensi hukum di Pusat OPTIKJI',
      '3. Tidak tersusunya kebijakan terkait digitalisasi manufaktur'
    ],
    penyebabEksternal: [
      'Terdapat perubahan prioritas kebijakan pemerintah dalam mengkomodir penerbitan regulasi baru di bidang digitalisasi'
    ],
    uraianDampak: 'Realisasi indikator sebesar 100% Rekomendasi Kebijakan (Dampak Level 1)',
    levelDampakIdentifikasi: 1,
    realisasi: '100% Rekomendasi Kebijakan',
    capaian: '100%',
    capaianPercentage: 100,
    inherentProbability: 3,
    inherentImpact: 1,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan peningkatan kapasitas pegawai dalam bidang hukum/peratura/kebijakan',
      '2. Melakukan kerja sama dengan personel yang memiliki kapasitas hukum yang memadai'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Tercapai'
  },
  {
    id: 'RSK-12',
    originalNumber: 12,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK2) Meningkatnya Adopsi Teknologi Pada Industri Manufaktur',
    indikatorKinerja: 'Persentase peningkatan efisiensi perusahaan industri yang menerapkan digitalisasi manufaktur',
    target: '6%',
    pengelola: 'Pusat OPTIKJI / Tim Kerja Penguatan Ekosistem 4.0',
    prosesBisnis: [
      '1. Meningkatkan kompetensi awareness perusahaan industri terhadap transformasi digital',
      '2. Verifikasi kesiapterapan perusahaan industri terhadap transformasi digital',
      '3. Menyampaikan hasil verifikasi perusahaan dan rekomendasi',
      '4. Penerbitan sertifikat INDI 4.0'
    ],
    pernyataanRisiko: 'Keterbatasan sumber daya (jumlah dan kapasitas verifikator) sehingga persentase peningkatan efisiensi Perusahaan Industri tidak tercapai',
    penyebabInternal: [
      '1. Terbatas anggaran (realokasi anggaran terkait prioritas)',
      '2. Terbatasnya SDM verifikator/Assesor INDI 4.0',
      '3. Pemantauan capaian transformasi perusahaan ke industri 4.0 dan koordinasi Insentif transformasi 4.0 ke pemangku kepentingan terkait masih rendah (disebabkan oleh keterbatasan jumlah SDM)'
    ],
    penyebabEksternal: [
      '1. Kesadaran perusahan industri untuk bertransformasi masih kurang',
      '2. Belum ada pemetaan dari Direktorat pembina terhadap kemampuan perusahan industri untuk bertransformasi'
    ],
    uraianDampak: 'Realisasi Indikator sebesar 5,5% (capaian 91% - Dampak Level 2)',
    levelDampakIdentifikasi: 2,
    realisasi: '5,5%',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan koordinasi dengan Balai untuk meningkatkan jumlah dan kapasitas verifikator peningkatan efisiensi Perusahaan Industri',
      '2. Mengadakan Bimbingan Teknis assesor/verifikator',
      '3. Melakukan Verifikasi Industri berdasarkan BCU (Business Classification Unit)'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-13',
    originalNumber: 13,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK3) Terwujudnya Jasa Industri Yang Profesional',
    indikatorKinerja: 'Persentase peningkatan perusahaan jasa industri yang meningkat kapabilitasnya',
    target: '10%',
    pengelola: 'Pusat OPTIKJI / Tim Kerja Jasa Industri',
    prosesBisnis: [
      '1. Pemetaan Kapabilitas perusahaan Jasa Industri',
      '2. Pendampingan dan pembinaan perusahaan Jasa Industri oleh direktorat pembina',
      '3. Pengukuran peningkatan kapabilitas perusahaan Jasa Industri setelah mendapatkan Pendampingan dan pembinaan'
    ],
    pernyataanRisiko: 'Pemetaan kapabilitas Perusahaan Jasa Industri yang tidak optimal atau tidak tepat sehingga target persentase peningkatan perusahaan jasa industri yang meningkat kapabilitasnya tidak tercapai',
    penyebabInternal: [
      'Terbatas anggaran dalam melaksanakan pemetaan, pembinaan / pendampingan dan evaluasi'
    ],
    penyebabEksternal: [
      '1. Perusahaan belum mendaftarkan SIINAS',
      '2. Wawasan perusahaan dalam menentukan KBLI yang sesuai dengan lingkup usaha nya'
    ],
    uraianDampak: 'Realisasi indikator sebesar 9% (capaian 90% - Dampak Level 3)',
    levelDampakIdentifikasi: 3,
    realisasi: '9%',
    capaian: '90%',
    capaianPercentage: 90,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Penyelenggaraan forum diskusi dengan stakeholder terkait mengenai jasa industri prioritas (yg telah terlaksana jasa rancang bangun industri), dan inisiasi penyusunan PDB Satelit Jasa Industri bersama BPS'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-14',
    originalNumber: 14,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK3) Terwujudnya Jasa Industri Yang Profesional',
    indikatorKinerja: 'Rekomendasi kebijakan terkait jasa industri yang telah dimanfaatkan stakeholder jasa industri',
    target: '3 Rekomendasi Kebijakan (Akumulasi)',
    pengelola: 'Pusat OPTIKJI / Tim Kerja Jasa Industri',
    prosesBisnis: [
      '1. Mengidentifikasi kebutuhan industri',
      '2. Menyusun rencana kebutuhan industri',
      '3. Melaksanakan kegiatan penyusunan rekomendasi kebijakan terkait jasa industri',
      '4. Koordinasi dengan stakeholder terkait rekomendasi kebijakan jasa industri',
      '5. Menyampaikan hasil kegiatan berupa rekomendasi kebijakan jasa industri'
    ],
    pernyataanRisiko: 'Keterbatasan payung hukum yang tersedia terkait pemanfaatan jasa industri pada stakeholder menyebabkan target rekomendasi kebijakan tidak tercapai',
    penyebabInternal: [
      '1. Belum tersedia baseline pengembangan jasa industri (kontribusi jasa industri) terhadap perekonomian nasional',
      '2. Pengembangan jasa industri sesuai amanat KIN yang masih rendah'
    ],
    penyebabEksternal: [
      '1. Belum ada payung hukum terkait pemanfaatan Jasa Industri',
      '2. Adanya resistensi dari stakeholder jasa industri terhadap rekomendasi kebijakan jasa industri yang dikeluarkan',
      '3. Belum tersedianya infrastruktur bagi jasa industri prioritas nasional'
    ],
    uraianDampak: 'Realisasi indikator sebesar 1 (Dampak Level 1) capaian tahun 2025 = 2 (akumulasi)',
    levelDampakIdentifikasi: 1,
    realisasi: '1 (capaian tahun 2025 = 2)',
    capaian: '67%',
    capaianPercentage: 67,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Mengadakan sosialisasi terkait jasa industri kepada stakeholder untuk menurunkan resistansi dari stakeholder'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-15',
    originalNumber: 15,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK4) Meningkatnya Penggunaan Produk Dalam Negeri dalam rangka menunjang produktivitas industri',
    indikatorKinerja: 'Persentase penggunaan Produk Dalam Negeri dalam pengadaan barang dan/atau jasa pemerintah',
    target: '91,3%',
    pengelola: 'Pusat OPTIKJI / Tata Usaha',
    prosesBisnis: [
      '1. Perencanaan pengadaan barang dan jasa PDN',
      '2. Melakukan pengadaan barang dan jasa',
      '3. Pemantauan pengadaan barang dan jasa',
      '4. Melakukan evaluasi pengadaan barang dan jasa'
    ],
    pernyataanRisiko: 'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target',
    penyebabInternal: [
      'PPK/PBJ/User mengusulkan barang non-PDN untuk memenuhi kebutuhan dalam pelaksanaan kegiatan di POPTIKJI'
    ],
    penyebabEksternal: [
      'Ketersediaan barang PDN/ber-TKDN terbatas sehingga mengadakan barang non-PDN atau tidak ber-TKDN'
    ],
    uraianDampak: 'Capaian belanja PDN TKDN sebesar 88% (capaian: 96% - Dampak Level 1)',
    levelDampakIdentifikasi: 1,
    realisasi: '88%',
    capaian: '96%',
    capaianPercentage: 96,
    inherentProbability: 2,
    inherentImpact: 1,
    inherentScore: 6,
    inherentLevel: 'Sangat Rendah',
    controlExists: true,
    controlDescription: [
      'Melakukan pemantauan terhadap belanja impor'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 2,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 4,
    scoreReductionPercent: 66.7,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-16',
    originalNumber: 16,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK5) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Persentase rekomendasi hasil pengawasan internal telah ditindaklanjuti oleh Satker',
    target: '62%',
    pengelola: 'Pusat OPTIKJI / Tata Usaha',
    prosesBisnis: [
      'PERIN.09.01.PLF.02 Pelaksanaan Pengawasan Internal Terhadap Kinerja dan Keuangan',
      'PERIN.09.01.PLF.03 Pengendalian Pelaksanaan Program dan Kegiatan',
      '1. Mengidentifikasi kebutuhan pengawasan internal',
      '2. Menyusun rencana pengawasan internal',
      '3. Melaksanakan pengawasan internal',
      '4. Menyampaikan hasil pengawasan internal',
      '5. Pemantauan tindak lanjut hasil pengawasan internal'
    ],
    pernyataanRisiko: 'Terdapat rekomendasi hasil pengawasan yang melibatkan Unit Eselon II lain sehingga persentase hasil pengawasan yang ditindaklanjuti rendah',
    penyebabInternal: [
      'Terdapat beberapa kegiatan atau prosedur yang lintas Eselon II'
    ],
    penyebabEksternal: [
      'Belum tersedia'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi sebesar 58% (capaian 93% - Dampak Level 2)',
    levelDampakIdentifikasi: 2,
    realisasi: '58%',
    capaian: '93%',
    capaianPercentage: 93,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Melakukan koordinasi berkala dengan Tim Kerja Keuangan Sekretariat BSKJI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-17',
    originalNumber: 17,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK5) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Nilai hasil pengawasan kearsipan (Unit Pengolah)',
    target: 'Target Nilai 63',
    pengelola: 'Pusat OPTIKJI / Tata Usaha',
    prosesBisnis: [
      '1. Melakukan koordinasi perencanaan pengawasan kearsipan',
      '2. Melakukan pengawasan pada Unit Pengolah',
      '3. Melakukan pemantauan dan evaluasi pengawasan kearsipan'
    ],
    pernyataanRisiko: 'Penggunaan sistem informasi/digitalisasi kearsipan belum optimal menyebabkan nilai hasil pengawasan rendah',
    penyebabInternal: [
      '1. Kompetensi SDM yang kurang dalam penggunaan SRIKANDI dalam persuratan',
      '2. Koordinasi antar JF Arsiparis masih kurang'
    ],
    penyebabEksternal: [
      '1. Perubahan metode pengawasan oleh ANRI terhadap pengawasan kearsipan',
      '2. Koordinasi pengawasan dari Biro Umum Kemenperin masih kurang'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi sebesar 60 (capaian: 95,2% - Dampak Level 1)',
    levelDampakIdentifikasi: 1,
    realisasi: '60',
    capaian: '95.2%',
    capaianPercentage: 95.2,
    inherentProbability: 3,
    inherentImpact: 1,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Melakukan sosialisasi pemanfaatan aplikasi SRIKANDI kepada Tim Kerja'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-18',
    originalNumber: 18,
    unit: 'POPTIKJI',
    sasaranStrategis: '(SK5) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Nilai minimal Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)',
    target: 'Target Nilai: 79,45',
    pengelola: 'Pusat OPTIKJI / Tata Usaha',
    prosesBisnis: [
      'PERIN.09.01.PLF.01 Pelaksanaan Penjaminan Mutu Dan Akuntabilitas Bidang Industri',
      'PERIN.11.01.PLF.03 Pengendalian Anggaran Kementerian',
      'PERIN.11.01.PLF.04 Pengelolaan Barang Milik Negara',
      'PERIN.11.01.PLF.06 Pengelolaan Tata Laksana',
      'PERIN.11.01.PLF.08 Peningkatan Layanan Persuratan dan Arsip Kementerian Perindustrian',
      'PERIN.12 Peningkatan Kualitas dan Efektivitas Perencanaan Kinerja dan Program',
      '1. Menyusun rencana strategis dan operasional organisasi yang sesuai dengan visi, misi, tujuan, dan sasaran organisasi',
      '2. Melaksanakan kegiatan organisasi sesuai dengan rencana yang telah disusun',
      '3. Menyampaikan laporan kinerja organisasi kepada pihak yang berwenang dan berkepentingan',
      '4. Menerima umpan balik dan evaluasi atas laporan kinerja organisasi dari pihak yang berwenang dan berkepentingan'
    ],
    pernyataanRisiko: 'Unsur-unsur nilai SAKIP tidak mencapai nilai optimal menyebabkan nilai SAKIP rendah',
    penyebabInternal: [
      '1. PIC kegiatan kurang memahami penyusunan dokumen kegiatan sesuai dengan kebutuhan Dokumen SAKIP sehingga perlu banyak perbaikan',
      '2. PIC kegiatan lalai dalam pengarsipan dokumen kegiatan atau rapat',
      '3. Komunikasi yang kurang baik antar pegawai sehingga pengarsipan dokumen kegiatan tidak berjalan dengan baik',
      '4. Kurangnya sosialisasi terhadap unsur-unsur penilaian yang harus diperhatikan dalam penilaian SAKIP'
    ],
    penyebabEksternal: [
      'Penilaian SAKIP yang lebih menitiberatkan substansi berdasarkan Peraturan Menteri PAN & RB No. 88 Tahun 2021 tentang Evaluasi Akuntabilitas Kinerja Instansi Pemerintah'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi sebesar 75 (capaian 94% - Dampak Level 2)',
    levelDampakIdentifikasi: 2,
    realisasi: '75',
    capaian: '94%',
    capaianPercentage: 94,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Melakukan sosialisasi terhadap unsur-unsur nilai SAKIP'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },

  // ==========================================
  // PPSI - Risks 19 to 25
  // ==========================================
  {
    id: 'RSK-19',
    originalNumber: 19,
    unit: 'PPSI',
    sasaranStrategis: '(SK1) Terselenggaranya pengawasan standar yang optimal',
    indikatorKinerja: 'Persentase kepatuhan Lembaga Penilaian Kesesuaian (LPK) terhadap regulasi',
    target: '80%',
    pengelola: 'PPSI / Tim Kerja Pengawasan Lembaga Penilaian Kesesuaian',
    prosesBisnis: [
      '1. Penyusunan rencana pengawasan',
      '2. Pelaksanaan pengawasan LPK',
      '3. Evaluasi hasil pengawasan',
      '4. Tindak lanjut hasil pengawasan'
    ],
    pernyataanRisiko: 'Pelaksanaan pengawasan kepatuhan LPK tidak sesuai dengan rencana yang telah dibuat sehingga target persentase kepatuhan LPK tidak tercapai',
    penyebabInternal: [
      '1. Keterbatasan anggaran dalam penyediaan sarana prasarana pengawasan sehingga pelaksanaan pengawasan tidak sesuai perencanaan',
      '2. Keterbatasan anggaran untuk peningkatan kompetensi pegawai sehingga pelaksanaan pengawasan tidak optimal'
    ],
    penyebabEksternal: [
      '1. Sarana prasarana yang dibutuhkan untuk pengawasan LPK (SIINAS) sering mengalami gangguan sehingga menghambat proses pengawasan',
      '2. Koordinasi dengan stakeholder terkait belum optimal disebabkan keterbatasan sumber daya anggaran, sarpras dan SDM'
    ],
    uraianDampak: 'Realisasi Target Indikator Sebesar 72% - Dampak Level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '72%',
    capaian: '90%',
    capaianPercentage: 90,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Menyusun /memperbarui SOP Pengawasan LPK',
      '2. Melakukan Pengawasan berkala dan Pengawasan Khusus sesuai rencana/kebutuhan',
      '3. Melakukan kemitraan (MoU) dengan KAN untuk Diklat ISO LSPro dan Laboratorium Tindak lanjut pengawasan sesuai regulasi'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 2,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 75.0,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-20',
    originalNumber: 20,
    unit: 'PPSI',
    sasaranStrategis: '(SK1) Terselenggaranya pengawasan standar yang optimal',
    indikatorKinerja: 'Persentase peningkatan pengawasan produk',
    target: '20%',
    pengelola: 'PPSI / Tim Kerja Pengawasan Standardisasi Industri Sektor Agro, Kimia, Farmasi dan Tekstil dan Tim Kerja Pengawasan Standardisasi Industri Sektor Logam, Mesin, Alat Transportasi, Elektronika dan Aneka',
    prosesBisnis: [
      '1. Penyusunan rencana pengawasan berkala dilakukan berkoordinasi dengan Dirjen Pembina Industri untuk ditetapkan oleh Kepala Badan',
      '2. Evaluasi Laporan/ Aduan untuk dilakukan pengawasan khusus',
      '3. Pelaksanaan pengawasan berkala/ khusus di pabrik/pasar dengan memeriksa dokumen, proses produksi, dan pengendalian mutu',
      '4. Evaluasi hasil pengawasan dan pelaporan kepada Kepala Badan',
      '5. Tindak lanjut hasil pengawasan berupa perintah penghentian kegiatan produksi, perintah perbaikan, perintah penarikan barang, perintah penghentian kegiatan impor, dan/atau pelimpahan kepada PPNS bidang perindustrian.'
    ],
    pernyataanRisiko: 'Pelaksanaan pengawasan belum sesuai rencana dan prosedur yang sudah ditetapkan sehingga peningkatan pengawasan tidak tercapai',
    penyebabInternal: [
      '1. Keterbatasan sarpras dan infrastruktur yang mendukung pelaksanaan pengawasan',
      '2. Jumlah dan kompetensi penyidik yang terbatas sehingga pengawasan tidak dapat dilakukan pada semua produk dalam lingkup sektor industri'
    ],
    penyebabEksternal: [
      '1. Waktu yang lama untuk pengujian sampel',
      '2. Distributor barang atau pelaku pada sektor industri melakukan peredaran barang impor yang sulit ditemukan',
      '3. Importir barang / produk impor memiliki jalur masuk yang bervariasi (sulit diawasi) terutama pada daerah perbatasan',
      '4. Jalur dan sarana transportasi pada lokasi yang diawasi masih terbatas',
      '5. Jadwal produksi perusahaan tidak sesuai dengan waktu pengawasan',
      '6. Barang/produk yang beredar didominasi barang/produk impor dan tidak sesuai SNI'
    ],
    uraianDampak: 'Realisasi Target Indikator Sebesar 18,2% - Dampak Level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '18,2%',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Menyusun/mememperbarui SOP Pengawasan barang beredar',
      '2. Melakukan pengawasan terhadap pelaku usaha secara berkala di pasar',
      '3. Melakukan pemetaan dan identifikasi peredaran barang',
      '4. Melakukan peningkatan kompetensi SDM pengawasan dan kerjasama pengawasan dengan stakeholder terkait'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 2,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 75.0,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-21',
    originalNumber: 21,
    unit: 'PPSI',
    sasaranStrategis: '(SK1) Terselenggaranya pengawasan standar yang optimal',
    indikatorKinerja: 'Persentase penyelesaian laporan pengaduan dan laporan hasil pengawasan standardisasi industri',
    target: '100%',
    pengelola: 'PPSI / Tim Kerja Pengawasan Standardisasi Industri Sektor Agro, Kimia, Farmasi dan Tekstil dan Tim Kerja Pengawasan Standardisasi Industri Sektor Logam, Mesin, Alat Transportasi, Elektronika dan Aneka',
    prosesBisnis: [
      '1. Melakukan identifikasi laporan pengaduan dan laporan hasil pengawasan standardisasi industri',
      '2. Melaksanakan penyelesaian laporan pengaduan dan laporan hasil pengawasan standardisasi industri',
      '3. Melakukan pemantauan dan evaluasi penyelesaian pengaduan dan hasil pengawasan standardisasi industri'
    ],
    pernyataanRisiko: 'Keterbatasan sumber daya sehingga tidak semua laporan pengaduan dan laporan hasil pengawasan standardisasi industri dapat diselesaikan',
    penyebabInternal: [
      '1. Keterbatasan jumlah dan kompetensi SDM',
      '2. Keterbatasan sarana-prasarana dan infrastruktur'
    ],
    penyebabEksternal: [
      'Efisiensi anggaran pada kegiatan pengawasan standardisasi industri'
    ],
    uraianDampak: 'Realisasi Target indikator sebesar 91,67% - Dampak level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '91,67%',
    capaian: '91.67%',
    capaianPercentage: 91.67,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Melakukan pemetaan prioritas peningkatan pemenuhan SDM pengawasan (diklat PPNS dan PPSI)',
      '2. Melakukan kerja sama dengan mitra terkait SDM pengawasan (Kerjasama dengan Kejaksaan Kerjasama dengan Tim Satgas Impor)',
      '3. Melakukan koordinasi dan kerjasama dengan unit terkait untuk dukungan sarana-prasarana dan infrastruktur'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 7,
    scoreReductionPercent: 53.8,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-22',
    originalNumber: 22,
    unit: 'PPSI',
    sasaranStrategis: '(SK2) Meningkatnya penggunaan Produk Dalam Negeri dalam rangka menunjang produktivitas industri',
    indikatorKinerja: 'Persentase nilai capaian penggunaan PDN dalam pengadaan barang dan jasa pemerintah',
    target: '91,3%',
    pengelola: 'PPSI / Tata Usaha',
    prosesBisnis: [
      '1. Menyusun perencaan pengadaan barang dan jasa produk dalam negeri',
      '2. Melakukan pengadaan barang dan jasa',
      '3. Melakukan pemantauan dan evaluasi pengadaan barang dan jasa',
      '4. Melakukan evaluasi pengadaan barang dan jasa'
    ],
    pernyataanRisiko: 'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target',
    penyebabInternal: [
      '1. PPK/PBJ/User mengusulkan barang non-PDN untuk memenuhi kebutuhan dalam pelaksanaan kegiatan di PPSI',
      '2. Beberapa produk terkait pelaksanaan pengawasan merupakan produk impor'
    ],
    penyebabEksternal: [
      'Ketersediaan PDN/TKDN masih terbatas pada e-katalog LKPP'
    ],
    uraianDampak: 'Realisasi Target Indikator sebesa 85% - Dampak Level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '85%',
    capaian: '93%',
    capaianPercentage: 93,
    inherentProbability: 2,
    inherentImpact: 2,
    inherentScore: 6,
    inherentLevel: 'Sangat Rendah',
    controlExists: true,
    controlDescription: [
      '1. Perencanaan pengadaan dengan prioritas PDN/TKDN',
      '2. Pemantauan pelaksanaan pengadaan',
      '3. Evaluasi pengadaan PDN/TKDN',
      '4. Melakukan koordinasi dengan Sekretariat BSKJI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 2,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 4,
    scoreReductionPercent: 66.7,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-23',
    originalNumber: 23,
    unit: 'PPSI',
    sasaranStrategis: '(SK3) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Persentase rekomendasi hasil pengawasan internal telah ditindaklanjuti oleh Satker',
    target: '62%',
    pengelola: 'PPSI / Tata Usaha',
    prosesBisnis: [
      '1. Mengidentifikasi kebutuhan pengawasan internal',
      '2. Menyusun rencana pengawasan internal',
      '3. Melaksanakan pengawasan internal',
      '4. Menyampaikan hasil pengawasan internal',
      '5. Pemantauan tindak lanjut hasil pengawasan internal'
    ],
    pernyataanRisiko: 'Terdapat rekomendasi hasil pengawasan yang melibatkan Unit Eselon II lain sehingga persentase hasil pengawasan yang ditindaklanjuti rendah',
    penyebabInternal: [
      'Terdapat beberapa kegiatan atau prosedur yang lintas Eselon II'
    ],
    penyebabEksternal: [
      'Belum tersedia'
    ],
    uraianDampak: 'Realisasi Target Indiaktor Sebesar 57% - Dampak Level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '57%',
    capaian: '92%',
    capaianPercentage: 92,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Melakukan koordinasi berkala dengan tim kerja keuangan Sekretariat BSKJI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-24',
    originalNumber: 24,
    unit: 'PPSI',
    sasaranStrategis: '(SK3) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Nilai hasil pengawasan kearsipan (Unit Pengolah)',
    target: 'Target Nilai 63',
    pengelola: 'PPSI / Tata Usaha',
    prosesBisnis: [
      '1. Melakukan koordinasi perencanaan pengawasan kearsipan',
      '2. Melakukan pengawasan pada Unit Pengolah',
      '3. Melakukan pemantauan dan evaluasi pengawasan kearsipan'
    ],
    pernyataanRisiko: 'Penggunaan sistem informasi/digitalisasi kearsipan belum optimal menyebabkan nilai hasil pengawasan rendah',
    penyebabInternal: [
      'Diperlukan penguatan bagi personel dalam mengoperasikan aplikasi SRIKANDI, guna mewujudkan administrasi persuratan yang lebih efektif dan terintegrasi'
    ],
    penyebabEksternal: [
      '1. Perubahan metode pengawasan oleh ANRI terhadap pengawasan kearsipan',
      '2. Terdapat ruang untuk meningkatkan sinergi dan komunikasi dengan Biro Umum terkait'
    ],
    uraianDampak: 'Realisasi Target Indikator sebesar 58 - Dampak Level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '58',
    capaian: '92%',
    capaianPercentage: 92,
    inherentProbability: 3,
    inherentImpact: 1,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      'Melakukan sosialisasi pemanfaatan aplikasi SRIKANDI kepada Tim Kerja'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-25',
    originalNumber: 25,
    unit: 'PPSI',
    sasaranStrategis: '(SK4) Terwujudnya akuntabilitas organisasi',
    indikatorKinerja: 'Nilai minimal Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)',
    target: 'Target Nilai: 79,5',
    pengelola: 'PPSI / Tata Usaha',
    prosesBisnis: [
      '1. Menyusun rencana strategis dan operasional organisasi yang sesuai dengan visi, misi, tujuan, dan sasaran organisasi',
      '2. Melaksanakan kegiatan organisasi sesuai dengan rencana yang telah disusun',
      '3. Menyampaikan laporan kinerja organisasi kepada pihak yang berwenang dan berkepentingan',
      '4. Menerima umpan balik dan evaluasi atas laporan kinerja organisasi dari pihak yang berwenang dan berkepentingan'
    ],
    pernyataanRisiko: 'Unsur unsur nilai SAKIP tidak mencapai nilai optimal menyebabkan nilai SAKIP rendah',
    penyebabInternal: [
      '1. PIC kegiatan kurang memahami penyusunan dokumen kegiatan sesuai dengan kebutuhan dokumen SAKIP sehingga banyak perbaikan',
      '2. PIC kegiatan lalai dalam pengarsipan dokumen kegiatan atau rapat',
      '3. Komunikasi yang kurang baik antar pegawai sehingga pengarsipan dokumen kegiatan tidak berjalan dengan baik',
      '4. Kurangnya sosialisasi terhadap unsur-unsur penilaian yang harus diperhatikan dalam penilaian SAKIP'
    ],
    penyebabEksternal: [
      'Penilaian SAKIP yang menitiberatkan substansi berdasarkan Peraturan Menteri PAN & RB No.88 Tahun 2021 tentang evaluasi akuntabilitas kinierja instansi pemerinatah'
    ],
    uraianDampak: 'Realisasi Target Indikator sebesar 75 - Dampak Level 2',
    levelDampakIdentifikasi: 2,
    realisasi: '75',
    capaian: '94%',
    capaianPercentage: 94,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Mengadakan sosialisasi unsur penilaian SAKIP kepada Tim Kerja',
      '2. Terdapat pembagian kerja yang jelas dari mulai pedoman kegiatan hingga pelaporan, sehingga program kegiatan yang dilaksanakan terukur'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian',
    needsVerification: true,
    verificationNotes: 'Penomoran tabel Analisis Risiko pada dokumen sumber tertulis baris 5 / 24, dinormalisasi ke urutan ID 25.'
  },

  // ==========================================
  // PPPPSI - Risks 26 to 33
  // ==========================================
  {
    id: 'RSK-26',
    originalNumber: 26,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK1) Tersedianya standar bidang industri yang meningkatkan daya saing industri',
    indikatorKinerja: 'Jumlah standar bidang industri yang telah selesai disusun',
    target: 'Target: 30 Standar Industri',
    pengelola: 'PPPPSI / Tim Kerja Perumusan Standardisasi Industri',
    prosesBisnis: [
      '1. Koordinasi terkait penetapan PNPS dan rencana pelaksanaan penyusunan konsep RSNI dengan Komite Teknis dan sektor terkait;',
      '2. Penyiapan data evaluasi target yang telah ditetapkan;',
      '3. Pengumpulan data standar acuan/referensi yang dibutuhkan;',
      '4. Pelaksanaan Penyusunan konsep RSNI;',
      '5. Pembelian sampel/contoh uji;',
      '6. Pengujian sampel/contoh uji;',
      '7. Rapat Teknis RNSI1;',
      '8. Rapat konsensus RSNI2;'
    ],
    pernyataanRisiko: 'Penyusunan atau perumusan SNI tidak dapat diselesaikan sesuai jadwal yang telah ditentukan sehingga jumlah standar bidang industri yang selesai disusun tidak tercapai',
    penyebabInternal: [
      '1. Perencanaan waktu pelaksanaan perumusan RSNI belum disusun secara rinci dan terukur',
      '2. Ketersediaan personil perumusan masih terbatas',
      '3. Ketersediaan data dukung dan referensi standar belum memadai',
      '4. Koordinasi antar anggota tim kerja dalam pelaksanaan perumusan RSNI belum berjalan secara optimal',
      '5. Pelaksanaan proses administrasi (termasuk pembelian dan pengujian sampel uji) belum sesuai kebutuhan'
    ],
    penyebabEksternal: [
      '1. Penyampaian masukan dan tanggapan dari Komite Teknis dan pemangku kepentingan tidak tepat waktu',
      '2. Proses pembahasan teknis memerlukan waktu lebih lama dalam rangka penyesuaian parameter syarat mutu',
      '3. Ketersediaan standar acuan dan/atau referensi yang relevan masih terbatas',
      '4. Pelaksanaan pengujian pada laboratorium eksternal memerlukan waktu lebih lama dari yang direncanakan',
      '5. Adanya perubahan kebijakan dan/atau prioritas dari kementerian/lembaga terkait'
    ],
    uraianDampak: 'Realisasi Indikator sebesar 25 Standar Industri (capaian 83% Dampak Level 3)',
    levelDampakIdentifikasi: 3,
    realisasi: '25 Standar Industri',
    capaian: '83%',
    capaianPercentage: 83,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Monitoring dan evaluasi progres secara berkala',
      '2. Peningkatan koordinasi dengan Komite Teknis dan stakeholder',
      '3. Memastikan partisipasi aktif dari komite teknis dalam pembahasan RSNI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 7,
    scoreReductionPercent: 53.8,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-27',
    originalNumber: 27,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK1) Tersedianya standar bidang industri yang meningkatkan daya saing industri',
    indikatorKinerja: 'Peningkatan standar bidang industri yang diberlakukan secara wajib',
    target: 'Target: 138',
    pengelola: 'PPPPSI / Tim Kerja Penerapan dan Pemberlakuan Standardisasi Industri',
    prosesBisnis: [
      '1. Melakukan identifikasi standar bidang industri yang diberlakukan secara wajib',
      '2. Monitoring pemberlakuan standar bidang industri secara wajib',
      '3. Melakukan evaluasi pemberlakuan standar bidang industri secara wajib'
    ],
    pernyataanRisiko: 'Keterbatasan jumlah standar yang dapat diberlakukan secara wajib dan sarana-prasarana yang mendukung pemberlakukan standar sehingga target persentase peningkatan standar bidang industri yang diberlakukan secara wajib tidak tercapai',
    penyebabInternal: [
      '1. Identifikasi standar yang berpotensi diberlakukan secara wajib belum dilakukan secara menyeluruh',
      '2. Perencanaan penetapan SNI wajib belum berbasis prioritas yang jelas',
      '3. Data dukung dan hasil evaluasi pemberlakuan SNI wajib belum memadai'
    ],
    penyebabEksternal: [
      '1. Keterbatasan jumlah standar yang memenuhi kriteria untuk diberlakukan secara wajib',
      '2. Kesiapan sarana dan prasarana pendukung (LSPro, laboratorium uji) masih terbatas',
      '3. Kesiapan pelaku usaha dalam memenuhi ketentuan SNI wajib',
      '4. Adanya perubahan kebijakan atau prioritas pemerintah terkait pemberlakuan SNI wajib'
    ],
    uraianDampak: 'Realisasi Indikator sebesar 136 - Dampak Level 1 [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 1,
    realisasi: '136',
    capaian: '98.5%',
    capaianPercentage: 98.5,
    inherentProbability: 2,
    inherentImpact: 1,
    inherentScore: 2,
    inherentLevel: 'Sangat Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan pemetaan jumlah standar yang dapat diberlakukan secara wajib',
      '2. Melakukan pemantauan LS Pro dan Laboratorium Uji yang dapat menunjang pemberlakukan SNI Wajib',
      '3. Mendorong peningkatan kesiapan infrastruktur mutu (LSPro dan laboratorium uji) melalui pembinaan dan penunjukan LPK',
      '4. Melakukan pemantauan SNI yang sedang disusun'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 1,
    residualImpact: 1,
    residualScore: 1,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 1,
    scoreReductionPercent: 50.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-28',
    originalNumber: 28,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK1) Tersedianya standar bidang industri yang meningkatkan daya saing industri',
    indikatorKinerja: 'Persentase standar bidang industri yang mendukung industri prioritas',
    target: 'Target: 65%',
    pengelola: 'PPPPSI / Tim Kerja Perumusan Standardisasi Industri',
    prosesBisnis: [
      '1. Identifikasi Komite Teknis yang sesuai dengan Komoditi Prioritas',
      '2. Penghitungan Jumlah SNI yang Disusun untuk Industri Prioritas',
      '3. Melakukan pemantauan dan evaluasi perumusan standar yang mendukung industri prioritas'
    ],
    pernyataanRisiko: 'Standar yang disusun tidak sesuai dengan kebutuhan industri prioritas sehingga target persentase standar bidang industri yang mendukung industri prioritas tidak tercapai',
    penyebabInternal: [
      '1. Perumusan standar tidak dapat diselesaikan',
      '2. Arah dan fokus perumusan tidak sesuai komoditi prioritas'
    ],
    penyebabEksternal: [
      '1. Komoditi prioritas yang tidak sesuai dengan kebutuhan industri',
      '2. Adanya perubahan kebijakan pemerintah terkait industri prioritas'
    ],
    uraianDampak: 'Realisasi Indikator sebesar 60% (capaian 92% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '60%',
    capaian: '92%',
    capaianPercentage: 92,
    inherentProbability: 2,
    inherentImpact: 2,
    inherentScore: 6,
    inherentLevel: 'Sangat Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan identifikasi/pemetaan/ananalisis pada standar yang disusun',
      '2. Melakukan pematauan atau reviu perumusan standar',
      '3. Penyesuaian arah dan fokus perumusan',
      '4. Koordinasi antar pemangku kepentingan'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 1,
    residualScore: 2,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 4,
    scoreReductionPercent: 66.7,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-29',
    originalNumber: 29,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK1) Tersedianya standar bidang industri yang meningkatkan daya saing industri',
    indikatorKinerja: 'Persentase rancangan Permenperin SNI wajib yang siap untuk harmonisasi',
    target: 'Target: 50%',
    pengelola: 'PPPPSI / Tim Kerja Penerapan dan Pemberlakuan Standardisasi Industri',
    prosesBisnis: [
      '1. Melakukan persiapan penyusunan R-Permenperin SNI wajib',
      '2. Melakukan penyusunan R-Permenperin SNI wajib',
      '3. Melakukan tahap harmonisasi penyusunan R-Permenperin SNI wajib'
    ],
    pernyataanRisiko: 'R-Permenperin SNI wajb yang disusun tidak dapat diselesaikan untuk masuk ke tahap harmonisasi sehingga target persentase R-Permenperin SNI tidak tercapai',
    penyebabInternal: [
      '1. Perencanaan penyusunan R-Permenperin SNI wajib belum disusun secara rinci dan terjadwal',
      '2. Ketersediaan data dukung dan kajian teknis sebagai bahan penyusunan belum memadai',
      '3. Penyusunan substansi teknis masih memerlukan waktu yang cukup panjang',
      '4. Keterbatasan sumber daya dalam penyusunan dan pembahasan rancangan regulasi',
      '5. Proses reviu dan penyempurnaan draft memerlukan waktu lebih lama dari yang direncanakan',
      '6. Keterbatasan jumlah dan kompentesi Tim Penyusun sehingga penyelesaian R-Permenperin SNI wajib tidak dapat diselesaikan sesuai jadwal'
    ],
    penyebabEksternal: [
      '1. Kesulitan melakukan koordinasi dengan stakeholder (pelaku industri, K/L terkait) sehingga R-Permenperin SNI wajib tidak dapat diselesaikan sesuai jadwal',
      '2. Adanya perubahan kebijakan terkait dengan Pemberlakuan SNI Wajib',
      '3. Dalam proses notifikasi ke WTO atas rencana pemberlakuan SNI wajib, terdapat potensi masukan, pertanyaan, atau keberatan dari negara anggota yang memerlukan waktu tindak lanjut dan penyesuaian substansi'
    ],
    uraianDampak: 'Realisasi Indikator sebesar 85% (capaian 85% - Dampak Level 3) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 3,
    realisasi: '85%',
    capaian: '85%',
    capaianPercentage: 85,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Melakukan koordinasi berkala dengan stakeholder terkait penyelesaian R-Permenperin SNI wajib',
      '2. Mengantisipasi perubahan kebijakan dengan penyesuaian substansi secara cepat dan terarah'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 7,
    scoreReductionPercent: 53.8,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-30',
    originalNumber: 30,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK2) Meningkatnya penggunaan Produk Dalam Negeri dalam rangka menunjang produktivitas industri',
    indikatorKinerja: 'Persentase penggunaan Produk Dalam Negeri dalam pengadaan barang dan/atau jasa pemerintah',
    target: 'Target: 91,33%',
    pengelola: 'PPPPSI /Tata Usaha',
    prosesBisnis: [
      '1. Koordinasi terkait pelaksanaan P3DN di BSKJI',
      '2. Koordinasi internal terkait upaya maksimalisasi pengadaan barang dan jasa P4SI TA 2026',
      '3. Pemenuhan perencanaan PBJ dan tagging PDN pada SIRUP',
      '4. Monitoring Penggunaan Produk Dalam Negeri melalui SAKTI'
    ],
    pernyataanRisiko: 'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target',
    penyebabInternal: [
      'PPK/PBJ/User mengusulkan barang non-PDN untuk memenuhi kebutuhan dalam pelaksanaan kegiatan di P4SI'
    ],
    penyebabEksternal: [
      'Belum tersedia'
    ],
    uraianDampak: 'Capaian belanja PDN TKDN dibawah target 91,3%',
    levelDampakIdentifikasi: 2,
    realisasi: 'Belum mencapai 91,33%',
    capaian: 'Dibawah target',
    capaianPercentage: 88,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Sosialisasi ketersediaan PDN kepada Tim Kerja',
      '2. Melakukan seleksi terhadap usulan permintaan barang/jasa'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-31',
    originalNumber: 31,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK3) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Persentase rekomendasi hasil pengawasan internal telah ditindaklanjuti oleh Satker',
    target: 'Target: 62%',
    pengelola: 'PPPPSI / Tata Usaha',
    prosesBisnis: [
      '1. Koordinasi matriks temuan audit pengawasan dengan Auditor',
      '2. Koordinasi penyelesaian tindak lanjut auditkinerja P4SI TA 2025 di tahun 2026 dengan tim kerja',
      '3. Monitoring dan pengumpulan materi tindak lanjut'
    ],
    pernyataanRisiko: 'Terdapat rekomendasi hasil pengawasan yang melibatkan Unit lain sehingga penyelesaiannya juga bergantung pada pihak eksternal',
    penyebabInternal: [
      'Terdapat perbedaan persepsi antara auditor dan P4SI terhadap tindak lanjut temuan'
    ],
    penyebabEksternal: [
      'Terdapat beberapa kegiatan yang melibatkan pihak ketiga'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi dibawah target 62%',
    levelDampakIdentifikasi: 3,
    realisasi: 'Dibawah target 62%',
    capaian: 'Dibawah target',
    capaianPercentage: 85,
    inherentProbability: 2,
    inherentImpact: 3,
    inherentScore: 11,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan identifikasi potensi rekomendasi yang melibatkan lintas Unit Eselon I atau Eselon II',
      '2. Menyamakan persepsi dengan koordinator'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 1,
    residualImpact: 2,
    residualScore: 5,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 54.5,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-32',
    originalNumber: 32,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK3) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Nilai hasil pengawasan kearsipan',
    target: 'Target Nilai 63',
    pengelola: 'PPPPSI / Tata Usaha',
    prosesBisnis: [
      '1. Menginput data arsip inaktif digitalisasi arsip aktif',
      '2. persiapan penilaian kearsipan'
    ],
    pernyataanRisiko: 'Penggunaan sistem informasi/digitalisasi kearsipan belum optimal menyebabkan nilai hasil pengawasan rendah',
    penyebabInternal: [
      '1. Kompetensi SDM yang kurang dalam penggunaan SRIKANDI dalam persuratan',
      '2. Koordinasi Arsiparis dengan tim kerja masih kurang'
    ],
    penyebabEksternal: [
      '1. Perubahan metode pengawasan oleh ANRI terhadap pengawasan kearsipan',
      '2. Koordinasi pengawasan dari Biro Umum Kemenperin masih kurang'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi dibawah target Nilai 63',
    levelDampakIdentifikasi: 2,
    realisasi: 'Dibawah target 63',
    capaian: 'Dibawah target',
    capaianPercentage: 88,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan bimbingan teknis internal kepada Tim Kerja terkait penerapan SRIKANDI setiap semester',
      '2. Terdapat pembagian kerja yang jelas dalam proses pengarsipan dan penginputan/digitalisasi arsip di SRIKANDI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Intervensi'
  },
  {
    id: 'RSK-33',
    originalNumber: 33,
    unit: 'PPPPSI',
    sasaranStrategis: '(SK4) Terwujudnya akuntabilitas organisasi',
    indikatorKinerja: 'Nilai minimal Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)',
    target: 'Target Nilai: 79,45',
    pengelola: 'PPPPSI / Tata Usaha',
    prosesBisnis: [
      '1. Menyusun rencana strategis dan operasional organisasi yang sesuai dengan visi, misi, tujuan, dan sasaran organisasi',
      '2. Melaksanakan kegiatan organisasi sesuai dengan rencana yang telah disusun',
      '3. Menyampaikan laporan kinerja organisasi',
      '4. Menerima umpan balik dan evaluasi atas laporan kinerja organisasi dari pihak yang berwenang dan berkepentingan'
    ],
    pernyataanRisiko: 'Unsur-unsur nilai yang tertuang pada SAKIP tidak mencapai nilai optimal menyebabkan nilai SAKIP rendah',
    penyebabInternal: [
      '1. Kurangnya pemahaman dan kapasitas Person in Charge (PIC) kegiatan terhadap pedoman penyusunan bukti dukung SAKIP yang berorientasi pada substansi hasil (outcome), bukan sekadar kelengkapan administratif.',
      '2. Ketidakdisiplinan PIC dalam mendokumentasikan dan mengarsipkan bukti pelaksanaan kegiatan (laporan, notulensi, dokumentasi visual) secara tertib dan berkala'
    ],
    penyebabEksternal: [
      'Perbedaan persepsi antara auditor dan PIC terhadap substansi satker'
    ],
    uraianDampak: 'Capaian Tujuan Organisasi 91%',
    levelDampakIdentifikasi: 2,
    realisasi: 'Nilai tercapai (capaian 91%)',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Mengadakan sosialisasi unsur penilaian SAKIP kepada Tim Kerja',
      '2. Terdapat pembagian kerja yang jelas dari mulai pedoman kegiatan hingga pelaporan, sehingga program kegiatan yang dilaksanakan terukur'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },

  // ==========================================
  // Sekretariat - Risks 34 to 45
  // ==========================================
  {
    id: 'RSK-34',
    originalNumber: 34,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK1) Meningkatnya penggunaan Produk Dalam Negeri dalam menunjang produktivitas industri',
    indikatorKinerja: 'Persentase Nilai Capaian Penggunaan Produk Dalam Negeri dalam Pengadaaan Barang dan Jasa Pemerintah (Sekretariat BSKJI)',
    target: 'Target: 91%',
    pengelola: 'Sekretariat',
    prosesBisnis: [
      '1. Penyusunan Rencana Umum Pengadaan (RUP) dengan memprioritaskan alokasi belanja Produk Dalam Negeri (PDN) dan ber-TKDN pada lingkup Sekretariat BSKJI.',
      '2. Pelaksanaan proses pengadaan barang/jasa melalui mekanisme e-Purchasing (Katalog Elektronik) maupun non-Katalog dengan menyasar produk bersertifikat PDN/TKDN.',
      '3. Pemantauan berkala atas komitmen serta realisasi capaian belanja PDN/TKDN secara terintegrasi.'
    ],
    pernyataanRisiko: 'Realisasi belanja Produk Dalam Negeri (PDN) pada pengadaan barang/jasa Sekretariat BSKJI kurang optimal sehingga tidak mencapai target yang ditetapkan.',
    penyebabInternal: [
      '1. Identifikasi kebutuhan dan perencanaan pengadaan barang/jasa berbasis PDN/TKDN belum sepenuhnya akurat.',
      '2. Lemahnya koordinasi dalam proses pengadaan, sehingga masih terdapat kecenderungan pembelian produk impor untuk barang yang sebenarnya memiliki substitusi lokal.',
      '3. Kesalahan dalam melakukan tagging jenis belanja (PDN/TKDN/Impor) pada sistem.',
      '4. Adanya revisi atau penambahan alokasi anggaran belanja barang modal secara insidental yang ketersediaan produk lokalnya sangat terbatas.'
    ],
    penyebabEksternal: [
      '1. Keterbatasan pasokan dan ketersediaan barang substitusi impor yang berstatus PDN/TKDN di pasaran.',
      '2. Pilihan produk bersertifikat PDN/TKDN pada sistem E-Katalog LKPP masih sangat terbatas untuk pemenuhan spesifikasi teknis khusus yang dibutuhkan organisasi.'
    ],
    uraianDampak: 'Capaian belanja PDN/TKDN sebesar 85% (capaian: 93% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '85%',
    capaian: '93%',
    capaianPercentage: 93,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Identifikasi kebutuhan belanja barang PDN/TKDN/Impor',
      '2. Pemantauan realisasi belanja PDN/TKDN/Impor per semester (pemantauan tagging, dll)'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-35',
    originalNumber: 35,
    unit: 'Sekretariat',
    sasaranStrategis: '(SP5) Meningkatnya penggunaan Produk Dalam Negeri dalam rangka menunjang produktivitas industri',
    indikatorKinerja: 'Persentase penggunaan Produk Dalam Negeri dalam pengadaan barang dan/atau jasa pemerintah (BSKJI)',
    target: 'Target: 81%',
    pengelola: 'Sekretariat',
    prosesBisnis: [
      '1. Koordinasi dan identifikasi kebutuhan belanja PDN/TKDN serta pemetaan urgensi kebutuhan barang impor.',
      '2. Penyusunan usulan permohonan izin persetujuan impor.',
      '3. Pelaksanaan pengadaan barang/jasa dengan memprioritaskan katalog PDN/TKDN dan mengeksekusi pengadaan impor yang telah memperoleh persetujuan resmi.',
      '4. Pemantauan berkala atas realisasi capaian belanja PDN/TKDN berbanding belanja Impor.'
    ],
    pernyataanRisiko: 'Tingginya realisasi belanja modal berupa peralatan dan mesin impor oleh Satuan Kerja (Satker) terutama Satker BLU mengakibatkan tidak tercapainya target persentase penggunaan Produk Dalam Negeri (PDN) di lingkungan BSKJI',
    penyebabInternal: [
      '1. Satker BLU cenderung memprioritaskan alokasi belanja untuk peralatan laboratorium guna mengejar target ekspansi layanan dan pendapatan PNBP.',
      '2. Lemahnya koordinasi kepatuhan tata waktu pengusulan izin persetujuan impor sebelum proses pengadaan dieksekusi.',
      '3. Ketidakakuratan atau human error dalam melakukan tagging status belanja (PDN/TKDN/Impor) pada sistem informasi yang berlaku.'
    ],
    penyebabEksternal: [
      '1. Ketiadaan produsen dalam negeri yang mampu memproduksi peralatan/mesin laboratorium berteknologi tinggi sesuai presisi dan standar metode pengujian.',
      '2. Adanya aturan spesifik yang mewajibkan pengujian menggunakan instrumen tertentu (yang belum memiliki perwakilan pabrik lokal).'
    ],
    uraianDampak: 'Capaian belanja PDN/TKDN sebesar 75% (capaian: 92% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '75%',
    capaian: '92%',
    capaianPercentage: 92,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Perencanaan belanja impor (persetujuan belanja impor pada Triwulan I)',
      '2. Pemantauan Penggunaan Produk Dalam Negeri dan belanja impor per semester (pemantauan tagging)',
      '3. Koordinasi dengan Tim BLU terkait kebijakan target belanja BLU (kebutuhan belanja modal impor terhadap kapasitas BLU dan target pendapatan BLU pada Tingkat Eselon I BSKJI)'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 3,
    residualImpact: 2,
    residualScore: 8,
    residualLevel: 'Rendah',
    scoreReduction: 5,
    scoreReductionPercent: 38.5,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-36',
    originalNumber: 36,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK2) Terwujudnya SDM yang profesional',
    indikatorKinerja: 'Indeks Profesionalitas ASN sebesar 81,40',
    target: 'Target 81,40 (Target 81.30)',
    pengelola: 'Sekretariat / Tim Kerja OSDM / Pengembangan Kompetensi',
    prosesBisnis: [
      '1. PERIN.10.01.PLF.02 Peningkatan Kompetensi Pegawai',
      '2. PERIN.10.01.PLF.03 Pengembangan Karier Pegawai',
      '3. PERIN.10.02.PLF.01 Penilaian dan Pemantauan Kinerja Pegawai',
      '4. PERIN.10.02.PLF.02 Manajemen Disiplin Pegawai',
      '5. PERIN.10.02.PLF.06 Pelaksanaan dan Pemantauan Jabatan Fungsional di Bidang Perindustrian',
      '6. PERIN.10.02.PLF.07 Pengembangan Kompetensi Digital ASN Kementerian Perindustrian',
      '7. PERIN.10.02.PLF.08 Pengembangan Program Pendidikan ASN yang Berbasis Kompetensi',
      '8. PERIN.10.02.PLF.09 Pengembangan Pendidikan dan Pelatihan SDM Aparatur Kementerian Perindustrian',
      '9. PERIN.11.01.PLF.07 Peningkatan Layanan Kepegawaian;',
      '1. Melakukan perencanaan peningkatan kompetensi ASN BSKJI',
      '2. Meningkatkan kompetensi ASN BSKJI melalui pelatihan dan pendidikan',
      '3. Meningkatkan capaian kinerja ASN BSKJI untuk meningkatkan capaian kinerja organisasi',
      '4. Meningkatkan integritas dan disiplin ASN BSKJI'
    ],
    pernyataanRisiko: 'Pelaksanaan kegiatan peningkatan kompetensi pegawai tidak optimal sehingga target Indeks Profesionalitas ASN tidak tercapai',
    penyebabInternal: [
      '1. Terdapat kesenjangan kompetensi pegawai dengan kebutuhan organisasi',
      '2. Kurangnya jenis-jenis pelatihan yang berbasis kebutuhan kerja (training need analysis)',
      '3. Keterbatasan anggaran untuk memberikan pengembangan kompetensi dan pelatihan yang dibutuhkan pegawai'
    ],
    penyebabEksternal: [
      '1. Terbatasnya kuota pelatihan yang diberikan oleh instansi pembina sehingga memerlukan anggaran tambahan serta rentang waktu bagi pegawai yang membutuhkan pelatihan tersebut',
      '2. Minimnya informasi pelatihan tidak berbayar yang dapat dimanfaatkan oleh pegawai',
      '3. Terjadi efisiensi anggaran sehingga alokasi pelatihan berkurang'
    ],
    uraianDampak: 'Indeks Profesionalitas ASN sebesar 80 (capaian 98%, Dampak Level 1); 2025 Realisasi 82,30 dari target 81.30 (capaian: 101%)',
    levelDampakIdentifikasi: 1,
    realisasi: '80 (2025: 82,30)',
    capaian: '98%',
    capaianPercentage: 98,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Memanfaatkan pelatihan yang tidak dipungut biaya',
      '2. Melakukan koordinasi dengan lembaga penyelenggara pelatihan terkait kalender pelatihan tahunan dan kuota pelatihan yang tersedia'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-37',
    originalNumber: 37,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK3) Penguatan sistem informasi terintegrasi, kolaborasi, dan pelayanan publik',
    indikatorKinerja: 'Persentase jenis layanan di seluruh UPT BSKJI yang datanya terintegrasi dengan sistem informasi BSKJI',
    target: 'Target: 40%',
    pengelola: 'Sekretariat / Tim Kerja Data, Informasi, Hubungan Masyarakat',
    prosesBisnis: [
      'PERIN.08.01.PLF.02 Penyediaan Data dan Informasi Industri',
      '1. Mengembangkan sistem informasi terintegrasi yang mampu menyediakan data dan informasi yang akurat, relevan, dan terkini untuk mendukung pengambilan keputusan dan pelayanan publik.',
      '2. Meningkatkan kolaborasi antara instansi pemerintah dan pemangku kepentingan lainnya dalam penyelenggaraan layanan publik.',
      '3. Meningkatkan kualitas dan aksesibilitas layanan publik yang berbasis digital.'
    ],
    pernyataanRisiko: 'Perbedaan sumber daya yang tidak memadai sehingga target persentase jenis layanan di seluruh UPT BSKJI yang datanya terintegrasi dengan sistem informasi BSKJI tidak tercapai.',
    penyebabInternal: [
      '1. Kemampuan SDM IT pada satker UPT BSKJI yang tidak merata.',
      '2. Maturitas sapras dan aplikasi UPT yang tidak merata (beberapa balai ada infrastruktur yang sudah bagus ada yg belum bagus).',
      '3. Server akan dijadikan satu di pusat (tdk boleh penambahan server), proses menunggu pusdatin.'
    ],
    penyebabEksternal: [
      '1. Beberapa fitur yang ada pada SIPPT merupakan kewenangan K/L lain.',
      '2. Pengelola aplikasi masih menggunakan tenaga ahli eksternal.'
    ],
    uraianDampak: 'Realisasi indikator sebesar 36% dari target 40% (capaian 90% - Dampak Level 3) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 3,
    realisasi: '36%',
    capaian: '90%',
    capaianPercentage: 90,
    inherentProbability: 4,
    inherentImpact: 3,
    inherentScore: 14,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      'Pendampingan integrasi data layanan UPT BSKJI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 3,
    residualImpact: 2,
    residualScore: 8,
    residualLevel: 'Rendah',
    scoreReduction: 6,
    scoreReductionPercent: 42.9,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-38',
    originalNumber: 38,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK3) Penguatan sistem informasi terintegrasi, kolaborasi, dan pelayanan publik',
    indikatorKinerja: 'Indeks Manfaat Kerja Sama',
    target: 'Target: 4,1 Indeks',
    pengelola: 'Sekretariat / Bagian Program dan Kerja Sama',
    prosesBisnis: [
      '1. Koordinasi dan pemetaan potensi kerja sama strategis di lingkungan BSKJI.',
      '2. Fasilitasi dan pendampingan tindak lanjut implementasi naskah kerja sama (MoU/PKS) pada seluruh Satuan Kerja (Satker).',
      '3. Pemantauan dan evaluasi kerja sama di lingkungan BSKJI secara berkala.'
    ],
    pernyataanRisiko: 'Kapasitas kerja sama antar satker tidak memadai sehingga target Indeks Manfaat Kerja Sama tidak tercapai.',
    penyebabInternal: [
      '1. Kurangnya pemahaman dan komitmen Person in Charge (PIC) di tingkat Satker terhadap substansi teknis dan kewajiban tindak lanjut dari naskah kerja sama.',
      '2. Lemahnya pemantauan internal secara berkala terkait masa berlaku dokumen dan progres rencana aksi implementasi kerja sama di masing-masing unit.'
    ],
    penyebabEksternal: [
      '1. Perubahan kebijakan, pergeseran prioritas program, atau pergantian personel (counterpart) pada pihak instansi/lembaga mitra.',
      '2. Keterbatasan ketersediaan anggaran dari pihak mitra untuk mengeksekusi rencana kegiatan yang telah disepakati bersama.'
    ],
    uraianDampak: 'Indeks Manfaat Kerja Sama sebesar 3,7 (capaian 92% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '3,7',
    capaian: '92%',
    capaianPercentage: 92,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Penetapan working plan dari tiap kerja sama',
      '2. Melakukan pelatihan SDM'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-39',
    originalNumber: 39,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK3) Penguatan sistem informasi terintegrasi, kolaborasi, dan pelayanan publik',
    indikatorKinerja: 'Persentase satker yang memperoleh Indeks Pelayanan Publik Minimal A',
    target: 'Target 50%',
    pengelola: 'Sekretariat / Tim Kerja Data, Informasi, Hubungan Masyarakat',
    prosesBisnis: [
      '1. Melakukan perencanaan penerapan Pelayanan Publik dan pemetaan sub nilai Indeks Pelayanan Publik',
      '2. Mendorong Satker BSKJI untuk mengisi form Pelayanan Publik secara mandiri',
      '3. Mengolah data untuk menghitung nilai indeks Pelayanan Publik',
      '4. Melakukan pemantauan dan evaluasi hasil perhitungan Indeks Pelayanan Publik'
    ],
    pernyataanRisiko: 'Pengisian form Pelayanan Publik tidak optimal sehingga target persentase satker yang memperoleh Indeks Pelayanan Publik minimal A tidak tercapai',
    penyebabInternal: [
      '1. Pemahaman terdapat pengisian form yang belum sama presepsinya sehingga pengisian dari form menjadi kurang akurat',
      '2. Tata kelola dan dokumentasi pelayaanan publik yang belum tertata baik',
      '3. Pengisian form secara mandiri tidak optimal'
    ],
    penyebabEksternal: [
      'Sebaran dan jenis pelanggan layanan jasa sangat bervariasi'
    ],
    uraianDampak: 'Realisasi sebesar 45% (capaian 90% - Dampak Level 3) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 3,
    realisasi: '45%',
    capaian: '90%',
    capaianPercentage: 90,
    inherentProbability: 4,
    inherentImpact: 3,
    inherentScore: 14,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      'Sosialisasi tata cara pengisian form asesmen Indeks Pelayanan Publik.'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 3,
    residualScore: 11,
    residualLevel: 'Rendah',
    scoreReduction: 3,
    scoreReductionPercent: 21.4,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-40',
    originalNumber: 40,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK3) Penguatan sistem informasi terintegrasi, kolaborasi, dan pelayanan publik',
    indikatorKinerja: 'Tingkat Penerapan SPBE dan Kesiapan Statistik Sektoral',
    target: 'Target 78%',
    pengelola: 'Sekretariat / Tim Kerja Data, Informasi, Hubungan Masyarakat',
    prosesBisnis: [
      '1. Melaksanakan Tata Kelola SPBE yang baik sesuai LKE yang diberikan oleh Pusdatin Kemenperin',
      '2. Unit Kerja menerapkan kaidah SPBE yang baik yaitu melakukan clearance untuk pengusulan kegiatan TIK, melakukan konsultansi secara berkala dan memberikan reviu atas dokumen pengelolaan aplikasi/sistem',
      '3. Melakukan pemantauan pelaksanaan kegiatan sesuai kaidah yang diperlukan'
    ],
    pernyataanRisiko: 'Penerapan SPBE sesuai kaidah tidak optimal sehingga target Tingkat Penerapan SPBE tidak tercapai',
    penyebabInternal: [
      '1. SDM IT yang belum merata baik secara jumlah maupun kemampuan sehingga belum optimal dalam melakukan reviu pengelolaan aplikasi',
      '2. Sapras dan infrastruktur masih belum lengkap (masih perlu dilengkapi)',
      '3. Pengisian LKE tidak sesuai kaidah'
    ],
    penyebabEksternal: [
      '1. Pemenuhan server yang mumpuni sangat tergantung pada Kemenkoinfo (mempengaruhi pengelolaan aplikasi)',
      '2. Uji keamanan sistem yang belum terpusat, dan masih dilaksanakan oleh masing-masing Unit Kerja',
      '3. Pengelola aplikasi masih menggunakan tenaga ahli eksternal'
    ],
    uraianDampak: 'Realisasi sebesar 70.98% (capaian 91% - Dampak Level 3) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 3,
    realisasi: '70.98%',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 4,
    inherentImpact: 3,
    inherentScore: 14,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Koordinasi berkala dengan Pusdatin',
      '2. Bimbingan teknis tata cara pengisian LKE SPBE'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 3,
    residualScore: 11,
    residualLevel: 'Rendah',
    scoreReduction: 3,
    scoreReductionPercent: 21.4,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-41',
    originalNumber: 41,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK4) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Persentase rekomendasi hasil pengawasan internal telah ditindaklanjuti oleh seluruh satker BSKJI',
    target: 'Target: 62%',
    pengelola: 'Sekretariat / Tim Kerja Keuangan',
    prosesBisnis: [
      'PERIN.09.01.PLF.02 Pelaksanaan Pengawasan Internal Terhadap Kinerja dan Keuangan',
      'PERIN.09.01.PLF.03 Pengendalian Pelaksanaan Program dan Kegiatan',
      '1. Mengidentifikasi kebutuhan pengawasan internal',
      '2. Menyusun rencana pengawasan internal',
      '3. Melaksanakan pengawasan internal',
      '4. Menyampaikan hasil pengawasan internal',
      '5. Pemantauan tindak lanjut hasil pengawasan internal'
    ],
    pernyataanRisiko: 'Kurangnya koordinasi internal dan eksternal sehingga target persentase rekomendasi hasil pengawasan internal telah ditindaklanjuti tidak tercapai',
    penyebabInternal: [
      '1. Hasil rekomendasi pengawasan yang harus ditindaklanjuti tidak tersampaikan dengan baik',
      '2. Ketua Tim/Anggota/PIC tidak memahami rekomendasi hasil pengawasan yang harus ditindaklanjuti yang disampaikan oleh Tim Auditor',
      '3. Beberapa prosedur kerja tidak efisien dan efektif sehingga sulit menindaklanjuti hasil pengawasan'
    ],
    penyebabEksternal: [
      '1. Rekomendasi tidak dapat ditindaklanjuti karena perubahan struktur organisasi atau penyelesaian perlu koordinasi dengan pihak eksternal',
      '2. Beberapa cara hitung realisasi mengalami perubahan khususnya cara hitung yang ditentukan oleh eksternal'
    ],
    uraianDampak: 'Realisasi sebesar 57% dari target 62% (capaian sebesar 91% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '57%',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Koordinasi dan pembinaan penyelesaian tindak lanjut temuan untuk satker di lingkungan BSKJI',
      '2. Menyusun SOP penyelesaian temuan lintas Bagian atau Tim Kerja'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-42',
    originalNumber: 42,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK4) Tercapainya Pengawasan Internal yang Efektif dan Efisien',
    indikatorKinerja: 'Nilai minimal hasil pengawasan kearsipan (Unit Pengolah)',
    target: 'Target: 63 (Nilai)',
    pengelola: 'Sekretariat / Bagian Umum / Tim Kerja Tata Usaha dan Kerasipan',
    prosesBisnis: [
      '1. Perencanaan dan koordinasi pelaksanaan pengawasan kearsipan internal secara terpadu.',
      '2. Pelaksanaan audit dan pengawasan kearsipan pada Unit Kearsipan dan Unit Pengolah.',
      '3. Pemantauan, evaluasi, dan tindak lanjut atas hasil pengawasan kearsipan.'
    ],
    pernyataanRisiko: 'Belum optimalnya pemanfaatan sistem informasi kearsipan terintegrasi (SRIKANDI) mengakibatkan tidak tercapainya target nilai minimal hasil pengawasan kearsipan',
    penyebabInternal: [
      '1. Kesenjangan kompetensi teknis SDM dalam pengoperasian aplikasi SRIKANDI secara menyeluruh.',
      '2. Belum optimalnya sinergi dan pembagian peran tata kelola arsip antar-Jabatan Fungsional Arsiparis di lingkungan Sekretariat.',
      '3. Rendahnya tingkat kepatuhan anggota Tim Kerja dalam mendigitalisasi dan mendistribusikan tata naskah dinas murni melalui sistem SRIKANDI.'
    ],
    penyebabEksternal: [
      '1. Adanya penyesuaian atau perubahan indikator dan metode evaluasi pengawasan kearsipan secara nasional oleh ANRI.',
      '2. Belum terintegrasinya jadwal dan mekanisme koordinasi pengawasan kearsipan secara intensif dengan Biro Umum Kementerian Perindustrian.'
    ],
    uraianDampak: 'Nilai minimal hasil pengawasan kearsipan (Unit Pengolah) sebesar 57 (capaian: 93% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '57',
    capaian: '93%',
    capaianPercentage: 93,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Mengadakan rapat koordinasi perencanaan pengawasan kearsipan dengan masing-masing PIC di Sekretariat dan Pusat-Pusat',
      '2. Melakukan koordinasi dengan Biro Umum dan ANRI',
      '3. Melakukan verifikasi lapangan pengawasan kearsipan di lingkungan BSKJI'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian'
  },
  {
    id: 'RSK-43',
    originalNumber: 43,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK5) Terwujudnya akuntabilitas organisasi',
    indikatorKinerja: 'Nilai minimal Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)',
    target: 'Target: 79,45',
    pengelola: 'Sekretariat / Bagian Program dan Kerja Sama',
    prosesBisnis: [
      'PERIN.09.01.PLF.01 Pelaksanaan Penjaminan Mutu Dan Akuntabilitas Bidang Industri',
      'PERIN.11.01.PLF.03 Pengendalian Anggaran Kementerian',
      'PERIN.11.01.PLF.04 Pengelolaan Barang Milik Negara',
      'PERIN.11.01.PLF.06 Pengelolaan Tata Laksana',
      'PERIN.11.01.PLF.08 Peningkatan Layanan Persuratan dan Arsip Kementerian Perindustrian',
      'PERIN.12 Peningkatan Kualitas dan Efektivitas Perencanaan Kinerja dan Program',
      '1. Menyusun rencana strategis dan operasional organisasi yang sesuai dengan visi, misi, tujuan, dan sasaran organisasi.',
      '2. Melaksanakan kegiatan organisasi sesuai dengan rencana yang telah disusun.',
      '3. Menyampaikan laporan kinerja organisasi kepada pihak yang berwenang dan berkepentingan.',
      '4. Menerima umpan balik dan evaluasi atas laporan kinerja organisasi dari pihak yang berwenang dan berkepentingan.'
    ],
    pernyataanRisiko: 'Ketidaklengkapan pemenuhan komponen dan kualitas dokumen Lembar Kerja Evaluasi (LKE) SAKIP mengakibatkan target nilai minimal SAKIP tidak tercapai.',
    penyebabInternal: [
      '1. Kurangnya pemahaman dan kapasitas Person in Charge (PIC) kegiatan terhadap pedoman penyusunan bukti dukung SAKIP yang berorientasi pada substansi hasil (outcome), bukan sekadar kelengkapan administratif.',
      '2. Ketidakdisiplinan PIC dalam mendokumentasikan dan mengarsipkan bukti pelaksanaan kegiatan (laporan, notulensi, dokumentasi visual) secara tertib dan berkala.'
    ],
    penyebabEksternal: [
      '1. Pengetatan standar penilaian SAKIP oleh Kementerian PANRB (Permen PANRB No. 88 Tahun 2021) yang semakin menitikberatkan pada kedalaman substansi evaluasi kinerja.',
      '2. Perbedaan persepsi dan penilaian subjektif dari tim auditor/evaluator eksternal terhadap dokumen pembuktian kinerja yang disajikan oleh unit kerja.'
    ],
    uraianDampak: 'Nilai minimal Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP) sebesar 70 (capaian 88% - Dampak Level 3) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 3,
    realisasi: '70',
    capaian: '88%',
    capaianPercentage: 88,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Melakukan sosialisasi mengenai standar peyusunan SAKIP (peraturan penilaian, dll)',
      '2. Seluruh Satker diharuskan menyusun dokumen SAKIP dan menyesuaikan dengan organisasi dan aturan terkini',
      '3. Melakukan pemantauan berkala terkait komponen-komponen penilaian SAKIP'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 7,
    scoreReductionPercent: 53.8,
    reductionCategory: 'Turun Signifikan',
    indicatorStatus: 'Perlu Intervensi',
    needsVerification: true,
    verificationNotes: 'Pada tabel Analisis Risiko dokumen sumber tercantum bernomor 45, dinormalisasi ke ID RSK-43 sesuai urutan tabel Identifikasi Risiko.'
  },
  {
    id: 'RSK-44',
    originalNumber: 44,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK5) Terwujudnya akuntabilitas organisasi',
    indikatorKinerja: 'Nilai Minimal Indikator Kinerja Pelaksanaan Anggaran (IKPA)',
    target: 'Target: 93,4',
    pengelola: 'Sekretariat / Tim Kerja Keuangan',
    prosesBisnis: [
      '1. Merencanakan kegiatan berdasarkan indikator terkait',
      '2. Melakukan pemantauan secara berkala pada tiap aspek dan indikator dalam formula perhitunngan IKPA',
      '3. Melakukan evaluasi secara berkala tiap triwulan pada tiap aspek dan indikator dalam formula perhitungan IKPA'
    ],
    pernyataanRisiko: 'Nilai pada aspek dan indikator IKPA tidak optimal sehingga target nilai IKPA tidak tercapai',
    penyebabInternal: [
      '1. Koordinasi dengan bagian program yang kurang baik sehingga mempengaruhi nilai pada aspek dan indikator IKPA',
      '2. Ketersediaan infrastruktur yang dimiliki anggota Tim pada saat WFA sehingga koordinasi / pemantauan / evaluasi aspek-indikator',
      '3. Koordinasi internal Tim Kerja Keuangan belum optimal',
      '4. Nilai pada aspek dan indikator dalam formula IKPA (Revisi DIPA, Deviasi Halaman III DIPA, Penyerapan Anggaran, Belanja Kontraktual, Penyelesaian Tagihan, Pengelolaan UP dan TUP, Dispensasi SPM, Capaian Output) tidak optimal'
    ],
    penyebabEksternal: [
      '4. Koordinasi dengan KPPN terkait anggaran yang belum optimal'
    ],
    uraianDampak: 'Realisasi sebesar 85 (capaian 91% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '85',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 3,
    inherentImpact: 3,
    inherentScore: 13,
    inherentLevel: 'Sedang',
    controlExists: true,
    controlDescription: [
      '1. Melakukan sosialisasi mengenai komponen penilaian IKPA kepada satker BSKJI',
      '2. Melakukkan koordinasi dan pembinaan penyusunan laporan keuangan sesuai aturan IKPA',
      '3. Pemantauan terhadap revisi anggaran'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 3,
    residualImpact: 2,
    residualScore: 8,
    residualLevel: 'Rendah',
    scoreReduction: 5,
    scoreReductionPercent: 38.5,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian',
    needsVerification: true,
    verificationNotes: 'Pada tabel Analisis Risiko dokumen sumber tercantum bernomor 46, dinormalisasi ke ID RSK-44.'
  },
  {
    id: 'RSK-45',
    originalNumber: 45,
    unit: 'Sekretariat',
    sasaranStrategis: '(SK5) Terwujudnya akuntabilitas organisasi',
    indikatorKinerja: 'Penilaian dan Analisis Laporan Keuangan',
    target: 'Target : 86.25',
    pengelola: 'Sekretariat / Tim Kerja Keuangan',
    prosesBisnis: [
      '1. Perencanaan dan koordinasi pelaksanaan penyusunan Laporan Keuangan dari unit vertikal',
      '2. Melaksanakan kegiatan penyusunan Laporan Keuangan Unit pusat dan Unit Vertikal untuk direkapitulasi menjadi Laporan Keuangan BSKJI Eselon I',
      '3. Melakukan evaluasi terhadap hasil rekapitulasi Laporan Keuangan per unit',
      '4. Menyampaikan hasil Laporan Keuangan BSKJI Eselon I kepada Biro Keuangan'
    ],
    pernyataanRisiko: 'Ketidaksesuaian penyajian data dan keterlambatan penyampaian laporan keuangan yang mengakibatkan target nilai analisis dan laporan keuangan tidak tercapai',
    penyebabInternal: [
      'Kurangnya ketelitian dan pemahaman petugas penyusun laporan keuangan dalam mengimplementasikan standar laporan keuangan'
    ],
    penyebabEksternal: [
      'Ketidakseuaian pada aplikasi SAKTI dan Om Span terkait data Laporan Keuangan'
    ],
    uraianDampak: 'Realisasi sebesar 78,5 (capaian 91% - Dampak Level 2) [Pencapaian Tujuan Organisasi]',
    levelDampakIdentifikasi: 2,
    realisasi: '78,5',
    capaian: '91%',
    capaianPercentage: 91,
    inherentProbability: 3,
    inherentImpact: 2,
    inherentScore: 8,
    inherentLevel: 'Rendah',
    controlExists: true,
    controlDescription: [
      '1. Melakukan rekonsiliasi data keuangan dengan KPPN (Kementerian Keuangan)',
      '2. Mengadakan workshop penyusunan laporan keuangan'
    ],
    controlAdequacy: 'Memadai',
    residualProbability: 2,
    residualImpact: 2,
    residualScore: 6,
    residualLevel: 'Sangat Rendah',
    scoreReduction: 2,
    scoreReductionPercent: 25.0,
    reductionCategory: 'Turun Sebagian',
    indicatorStatus: 'Perlu Perhatian',
    needsVerification: true,
    verificationNotes: 'Pada tabel Analisis Risiko dokumen sumber tercantum bernomor 47, dinormalisasi ke ID RSK-45.'
  }
];

// Enrich all 45 risks with Permenperin 24/2023 fields
RAW_RISK_DATA.forEach(r => {
  // Pastikan penetapan level inherent & residu selalu sinkron dengan Permenperin No. 24 Tahun 2023
  r.inherentLevel = getLevelCategory(r.inherentScore);
  r.residualLevel = getLevelCategory(r.residualScore);

  // Kriteria Risiko Resmi Permenperin No. 24 Tahun 2023 Halaman 18:
  // Seluruh 45 risiko di BSKJI masuk ke dalam kriteria "Pencapaian Tujuan Organisasi"
  r.kriteriaRisiko = 'Pencapaian Tujuan Organisasi';
  r.aspekDampak = 'Pencapaian Tujuan Organisasi';

  // Selera Risiko: Batas Permenperin 24/2023 adalah skor 11 (Hijau/Biru = Dalam Selera, Kuning/Orange/Merah >= 12 = Di Luar Selera)
  r.inherentAppetiteStatus = r.inherentScore >= 12 ? 'Di Luar Selera (Wajib Mitigasi)' : 'Dalam Selera (Dapat Diterima)';
  r.residualAppetiteStatus = r.residualScore >= 12 ? 'Di Luar Selera (Wajib Mitigasi)' : 'Dalam Selera (Dapat Diterima)';

  // Rencana Tindak Pengendalian (RTP)
  r.rtpRespons = 'Mengurangi Frekuensi dan Dampak Risiko';
  r.rtpKegiatanPengendalian = r.controlDescription.length > 0
    ? r.controlDescription.map(d => d.replace(/^[0-9]+\.\s*/, ''))
    : ['Pelaksanaan pengawasan berkala dan koordinasi internal'];
  r.rtpPenanggungJawab = r.pengelola;
  r.rtpIndikatorKeluaran = `Laporan pelaksanaan ${r.controlDescription[0] || 'pengendalian'} dan evaluasi berkala`;
  r.rtpTargetWaktu = 'Triwulan I - IV TA 2026';
});

