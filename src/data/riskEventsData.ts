export interface RiskEventItem {
  no: number;
  unit: 'PIH' | 'POPTIKJI' | 'PPSI' | 'PPPPSI' | 'Sekretariat';
  uraianPeristiwa: string;
  pernyataanRisiko: string;
  waktuKejadian: string;
  tempatKejadian: string;
  skorDampak: number;
  penyebabPeristiwa: string[];
}

export const OFFICIAL_RISK_EVENTS_SEMESTER_1: RiskEventItem[] = [
  // 1 - 13: PIH (Pusat Industri Hijau)
  {
    no: 1,
    unit: 'PIH',
    uraianPeristiwa:
      'Pada rapat awal perumusan RSIH untuk Industri Ban, Asosiasi atau perwakilan Perusahaan Industri belum mendukung sepenuhnya penyusunan RSIH ini (belum terbuka untuk dikunjungi dan mengisi kuesioner aspek data teknis Standar Industri Hijau)',
    pernyataanRisiko:
      'Keterlambatan pencapaian kesepakatan batasan-batasan teknis pada Rapat Teknis (melebihi waktu yang telah dialokasikan) sehingga Rapat Konsensus diadakan melewati waktu yang direncanakan',
    waktuKejadian: 'Rabu, 1 April 2026',
    tempatKejadian: 'Ruang Rapat Industri Hijau dan Zoom',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Beberapa peserta rapat (perwakilan perusahaan industri) belum menyatakan sepenuhnya terbuka untuk mengisi survei atau kuesioner yang telah disusun oleh Narasumber.',
      'Usulan RSIH untuk Industri Ban merupakan usulan dari Direktorat Pembina, namun belum ada dukungan penuh dari perwakilan Perusahaan industri.',
      'Perlu tahap sosialisasi lebih intens kepada perwakilan Perusahaan Industri atau asosiasi untuk menumbuhkan kesepahaman dalam rencana penyusunan RSIH untuk Industri Ban.',
    ],
  },
  {
    no: 2,
    unit: 'PIH',
    uraianPeristiwa:
      'Sebagian besar Perusahaan Industri tidak hadir pada rapat melalui zoom untuk pembahasan pengisian kuesioner RSIH Poliester dan PET Chips',
    pernyataanRisiko:
      'Keterlambatan pencapaian kesepakatan batasan-batasan teknis pada Rapat Teknis (melebihi waktu yang telah dialokasikan) sehingga Rapat Konsensus diadakan melewati waktu yang direncanakan',
    waktuKejadian: 'Rabu, 22 April 2026',
    tempatKejadian: 'Lantai 20 Gedung Kementerian Perindustrian (Ruang Rapat Industri Hijau)',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Tim Kerja FSPIH telah menyusun jadwal rapat dengan Narasumber dan Perusahaan untuk membahas isian kuesioner oleh Perusahaan Industri.',
      'Beberapa Perusahaan tidak dapat hadir sehingga perlu melakukan penjadwalan ulang.',
      'Jumlah Perusahaan Industri yang mengisi dan dibahas akan menentukan jumlah data yang akan diolah oleh Narasumber.',
      'Perusahaan Industri yang tidak dapat hadir pada jadwal yang telah ditentukan akan diberikan kesempatan untuk penjadwalan ulang, namun jika tidak ada jadwal cocok maka ada kemungkinan mengurangi jumlah data yang masuk.',
      'Penjadwalan ulang akan mempengaruhi periode pembahasan isian kuesioner sehingga akan mempengaruhi jadwal rapat teknis.',
    ],
  },
  {
    no: 3,
    unit: 'PIH',
    uraianPeristiwa:
      'Perusahaan Industri kurang yakin mengenai manfaat dari Pengisian Kuesioner Data Proses Produksi untuk pengolahan data untuk mendukung penetapan ambang batas pada parameter-parameter teknis',
    pernyataanRisiko:
      'Keterlambatan pencapaian kesepakatan batasan-batasan teknis pada Rapat Teknis (melebihi waktu yang telah dialokasikan) sehingga Rapat Konsensus diadakan melewati waktu yang direncanakan',
    waktuKejadian: 'Rapat Zoom Pengisian Kuesioner Perusahaan',
    tempatKejadian: 'Rapat Zoom Komunikasi via WhatsApp',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Belum semua sektor industri memahami mengenai alur dan pentingnya data proses produksi dalam penyusunan RSIH.',
      'Pengisian Kuesioner Data Proses Produksi (aspek teknis) mempengaruhi ke tahap Rapat Teknis dan akan mempengaruhi jadwal Rapat Pra Konsensus dan Konsensus.',
      'Pada rapat awal perlu menyakinkan Perusahaan Industri bahwa data proses produksi merupakan hal yang penting dan perlu menyakinkan Perusahaan Industri bahwa Tim Kerja FSPIH memiliki SOP dalam hal penanganan data perusahaan.',
      'Beberapa hal yang perlu disepakati sejak awal: pengisian kuesioner, kunjungan industri, usulan perwakilan perusahaan untuk Tim Teknis, dukungan manajemen dalam tahapan perumusan.',
    ],
  },
  {
    no: 4,
    unit: 'PIH',
    uraianPeristiwa:
      'Salah satu Perusahaan Industri mengusulkan untuk perubahan jadwal dari Senin, 11 Mei 2026 ke Selasa, 12 Mei 2026; perwakilan perusahaan masih perlu diyakinkan terkait tujuan pengisian kuesioner (data produksi); perubahan jadwal dan kecepatan/keterbukaan pengisian kuesioner proses produksi akan menyebabkan rencana atau penetapan Jadwal Rapat Teknis perlu disesuaikan kembali (tenggat waktu pengisian kuesioner akan dijadwalkan kembali)',
    pernyataanRisiko:
      'Keterlambatan pencapaian kesepakatan batasan-batasan teknis pada Rapat Teknis (melebihi waktu yang telah dialokasikan) sehingga Rapat Konsensus diadakan melewati waktu yang direncanakan',
    waktuKejadian: 'Mei 2026',
    tempatKejadian: 'Rapat Zoom (Pembahasan Pengisian Kuesioner)',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Perusahaan Industri besar sensitif terhadap pemberian data proses produksi (pengisian data aspek teknis); namun ada juga Perusahaan Industri besar yang mendukung terhadap penerapan Industri Hijau karena ingin mendapatkan akses pasar global.',
      'Beberapa perusahaan industri memiliki prosedur penandatanganan Non-Disclosure Agreement (NDA) sebelum membahas data teknis.',
      'Perwakilan Perusahaan belum begitu memahami program atau kegiatan Standar Industri Hijau (kurang tersosialisasi).',
      'Perusahaan merasa sudah menyerahkan data melalui SIINas dan sudah pernah memberikan data maka jadi perlu diyakinkan bahwa ini hal yang berbeda; dan juga merasa ada Direktorat lain yang memberikan kuesioner.',
    ],
  },
  {
    no: 5,
    unit: 'PIH',
    uraianPeristiwa:
      'Dalam rangka perumusan RSIH Poliester, salah satu tahapan/metode adalah kunjungan ke Perusahaan yang mengisi kuesioner bersama dengan Narasumber; Perusahaan Industri memiliki jadwal yang padat sehingga belum dapat menerima kunjungan; data aspek teknis pada kuesioner belum dikumpulkan oleh Perusahaan Industri',
    pernyataanRisiko:
      'Keterlambatan pencapaian kesepakatan batasan-batasan teknis pada Rapat Teknis (melebihi waktu yang telah dialokasikan) sehingga Rapat Konsensus diadakan melewati waktu yang direncanakan',
    waktuKejadian:
      'Koordinasi Kunjungan Perusahaan dengan Narasumber UI dan Perusahaan dalam rangka penyusunan RSIH Poliester pada Juni 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian Lantai 19',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Perusahaan Industri memiliki jadwal yang padat dan kurang terbuka/kurang percaya untuk dikunjungi (sedang ada audit, dll).',
      'Asosiasi belum dapat menyakinkan anggotanya untuk mendukung perumusan RSIH Poliester.',
      'Rapat Teknis 1 telah dilakukan pada Selasa, 2 Juni 2026 dengan 1 kuesioner yang menjadi pembahasan (sebelumnya sudah dilakukan pembahasan kuesioner dengan tiap Perusahaan).',
    ],
  },
  {
    no: 6,
    unit: 'PIH',
    uraianPeristiwa:
      'Pengusulan perjalan dinas dalam rangka pengawasan LSIH mendapat arahan/penyesuaian dari Pimpinan',
    pernyataanRisiko:
      'Kapasitas/kompetensi LSIH tidak sesuai dengan SIH yang disusun sehingga LSIH tidak dapat menambah ruang lingkup sesuai SIH baru yang ditetapkan',
    waktuKejadian: 'Maret - April 2026',
    tempatKejadian: 'Lantai 20 Gedung Kementerian Perindustrian (Ruang Kerja Pusat Industri Hijau)',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Tim Kerja FSPIH telah mengusulkan Perjadin dalam rangka pengawasan LSIH.',
      'Rencana kunjungan pengawasan pada bulan April 2026.',
      'Terdapat arahan efisiensi anggaran pada Triwulan II sehingga untuk anggaran Perjadin belum dapat direalisasikan.',
      'Rencana kunjungan pengawasan LSIH diundur atau tidak/belum dapat dilaksanakan akibat efisiensi/pemotongan/refocusing anggaran Perjadin pada periode triwulan I.',
      'Tim Kerja melakukan penjadwalan ulang kunjungan pengawasan LSIH atau pengawasan LSIH secara daring.',
    ],
  },
  {
    no: 7,
    unit: 'PIH',
    uraianPeristiwa:
      'Tim Kerja FSPIH belum memiliki Prosedur Standar dalam pelaksanaan Ujikom secara daring, pemeriksaan hasil ujikom, dan pencetakan Sertifikat Elektronik yang menjamin mutu pelaksanaan kegiatan tersebut',
    pernyataanRisiko:
      'Kapasitas/kompetensi LSIH tidak sesuai dengan SIH yang disusun sehingga LSIH tidak dapat menambah ruang lingkup sesuai SIH baru yang ditetapkan',
    waktuKejadian: 'Ujikom Pelatihan Industri Hijau BSPJI Jakarta pada Senin, 11 Mei 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian Lantai 19',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Pada periode sebelumnya belum pernah (jarang) mengadakan ujikom secara daring.',
      'Tim Kerja FSPIH perlu memiliki SOP pelaksanaan ujikom secara daring untuk menjamin kualitas ujikom serta pencetakan Sertifikat Elektronik.',
    ],
  },
  {
    no: 8,
    unit: 'PIH',
    uraianPeristiwa:
      'LSIH memberikan usulan calon Perusahaan Industri yang akan menerima Fasilitasi Sertifikasi; dalam penentuan Perusahaan Industri yang akan menerima Fasilitasi, Tim Kerja FSPIH perlu melakukan koordinasi dengan Perusahaan Industri; diharapkan koordinasi tersebut telah dilakukan oleh LSIH',
    pernyataanRisiko:
      'Persentase peningkatan perusahaan industri yang terfasilitasi penerapan industri hijau',
    waktuKejadian: 'Koordinasi atau Seleksi Perusahaan Industri yang mendapatkan Fasilitasi Sertifikasi pada Mei-Juni 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian Lantai 19',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Beberapa Perusahaan Industri yang diusulkan belum memahami mengenai Sertifikasi Industri Hijau.',
    ],
  },
  {
    no: 9,
    unit: 'PIH',
    uraianPeristiwa: 'Asosiasi/perusahaan industri memberikan usulan untuk melibatkan K/L lain.',
    pernyataanRisiko:
      'Sosialisasi kebijakan ekonomi sirkular ke stakeholder terkait tidak efektif* (*Penyesuaian Pernyataan Risiko)',
    waktuKejadian: 'FGD Pembahasan Kebutuhan Ekonomi Sirkular Sektor Industri pada 7 Mei 2026',
    tempatKejadian: 'Rapat Zoom',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Agenda diskusi atau komunikasi yang dilakukan pada rapat pembahasan kurang optimal dalam mengumpulkan masukan secara terbuka dari akademisi dan industri sehingga diperlukan keterlibatan (masukan) dari K/L terkait.',
    ],
  },
  {
    no: 10,
    unit: 'PIH',
    uraianPeristiwa: 'Hasil pendataan sektor prioritas yang telah diselesaikan perlu disesuaikan kembali',
    pernyataanRisiko: 'Penetapan sektor prioritas tidak optimal',
    waktuKejadian: 'Jan-Jun',
    tempatKejadian: 'Gedung Kementerian Perindustrian Lantai 20',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Tim Kerja PEIH telah menyelesaikan pendataan sektor prioritas dan berkoordinasi dengan Ditjen Pembina.',
      'Hasil pendataan perlu disesuaikan kembali mengikuti perkembangan dinamika kebijakan internal.',
      'Hasil pendataan akan menjadi bagian dari kegiatan fasilitasi dan pendampingan.',
    ],
  },
  {
    no: 11,
    unit: 'PIH',
    uraianPeristiwa:
      'Rancangan Perpres tentang Pengembangan Industri Hijau yang telah selesai disusun perlu dikaji ulang agar selaras dengan Naskah Akademik',
    pernyataanRisiko: 'Sosialisasi kebijakan (ekonomi sirkular) ke stakeholder terkait tidak efektif*',
    waktuKejadian: 'Apr-Jun',
    tempatKejadian: 'Gedung Kementerian Perindustrian Lantai 20',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Tim Kerja Penguatan Ekosistem Industri Hijau (PEIH) telah menyelesaikan pembahasan Rancangan Peraturan Presiden (RPerpres) tentang Pengembangan Industri Hijau serta penyusunan Naskah Akademik bersama Tim Ahli.',
      'Diperlukan penyelarasan akhir agar beberapa redaksional pasal dan substansi selaras dengan Naskah Akademik.',
      'Diperlukan waktu tambahan untuk mengharmoniskan rumusan norma pada beberapa pasal tertentu agar tidak bertentangan dengan peraturan perundang-undangan lain yang lebih tinggi atau yang terkait.',
      'Terdapat dinamika pembahasan dan masukan teknis baru yang berkembang saat rapat, sehingga beberapa pasal krusial memerlukan kajian ulang dan penajaman rumusan agar aplikatif saat diimplementasikan.',
    ],
  },
  {
    no: 12,
    unit: 'PIH',
    uraianPeristiwa: 'Pusat P3DN memberitahukan perubahan cara perhitungan realisasi PDN/TKDN',
    pernyataanRisiko:
      'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target',
    waktuKejadian: 'Juni',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Perhitungan realisasi belanja PDN/TKDN mengalami perubahan di internal Kementerian Perindustrian.',
      'Cara perhitungan yang baru dapat menghasilkan realisasi bulan tertentu di bawah atau di atas target Perkin dari bulan sebelumnya.',
    ],
  },
  {
    no: 13,
    unit: 'PIH',
    uraianPeristiwa: 'Persuratan menggunakan dua sistem yaitu SRIKANDI dan Intranew',
    pernyataanRisiko:
      'Penggunaan sistem informasi/digitalisasi kearsipan belum optimal menyebabkan nilai hasil pengawasan rendah',
    waktuKejadian: 'Jan-Jun',
    tempatKejadian: 'Gedung Kementerian Perindustrian Lantai 20',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Nilai Hasil Pengawasan Kearsipan Unit Pengolah Kearsipan Pusat Industri Hijau di atas target Perkin.',
      'Manajemen belum percaya sepenuhnya dengan penggunaan satu aplikasi saja.',
      'Penggunaan 2 aplikasi yang memiliki fungsi yang mirip membuat tata laksana persuratan menjadi kurang efisien.',
    ],
  },

  // 14 - 19: POPTIKJI
  {
    no: 14,
    unit: 'POPTIKJI',
    uraianPeristiwa: 'Proposal Rintek tidak sesuai dengan kriteria dan format yang sudah ditetapkan',
    pernyataanRisiko:
      'Proses seleksi tidak optimal (seperti proposal yang lolos tidak sesuai, dsb) sehingga jumlah perusahaan industri yang melakukan pemanfaatan teknologi industri tidak mengalami peningkatan',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Rentang waktu yang singkat pada pendaftaran RINTEK mengakibatkan pembuatan proposal tidak maksimal.',
      'Beberapa perusahaan sensitif terhadap pemberian data.',
    ],
  },
  {
    no: 15,
    unit: 'POPTIKJI',
    uraianPeristiwa:
      'Pengajuan harmonisasi terkait RPermenperin Penghargaan Teknologi Industri yang rencananya diajukan pada awal-pertengahan TW2 mengalami keterlambatan, sehingga direncanakan akan diajukan untuk harmonisasi pada TW3',
    pernyataanRisiko:
      'Keterlambatan proses penerbitan kebijakan terkait digitalisasi manufaktur yang disusun oleh Pusat OPTIKJI.',
    waktuKejadian: 'Triwulan 2',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Dinamika perubahan anggota pada Tim Kerja penyusunan RPermenperin Penghargaan Teknologi Industri (pada bagian penghargaan INDI 4.0) membutuhkan penyesuaian terkait beberapa hal terutama dalam penyesuaian alur penghargaan.',
    ],
  },
  {
    no: 16,
    unit: 'POPTIKJI',
    uraianPeristiwa:
      'Kegiatan asesmen dan pendampingan transformasi industri 4.0 tidak dapat dilaksanakan secara optimal akibat keterbatasan jumlah asesor, - Jumlah perusahaan yang sudah terverifikasi : 150 Perusahaan; - Jumlah perusahaan yang sudah mengisi self-assessment INDI 4.0 di SIINAS dengan level >3 (kesiapan matang) : 460 Perusahaan; - Jumlah Asesor di lingkungan Kementerian Perindustrian : 65 Orang; - Jumlah Asesor di lingkungan Pusat OPTIKJI : 10 Orang. Keterbatasan jumlah asesor di Pusat OPTIKJI menjadikan proses asesmen INDI 4.0 kurang maksimal, karena Pusat OPTIKJI perlu mengikuti semua rangkaian verifikasi perusahaan INDI untuk seluruh sektor.',
    pernyataanRisiko:
      'Keterbatasan sumber daya (jumlah dan kapasitas asesor) sehingga persentase peningkatan efisiensi Perusahaan Industri tidak tercapai',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Jumlah asesor belum sebanding dengan kebutuhan pelaksanaan asesmen secara optimal.',
      'Jumlah asesor sampai saat ini 65 dari seluruh Kementerian Perindustrian dan 10 Orang di Pusat OPTIKJI. Sedangkan kebutuhan yang ideal di Pusat OPTIKJI adalah 16-20 asesor.',
      'Pelatihan dan pengembangan kompetensi asesor belum optimal.',
      'Keterbatasan anggaran menghambat pelaksanaan asesmen, pendampingan, dan peningkatan kapasitas asesor.',
    ],
  },
  {
    no: 17,
    unit: 'POPTIKJI',
    uraianPeristiwa:
      'Perhitungan peningkatan kapabilitas Jasa Industri menggunakan data pelaporan triwulanan perusahaan sebagai dasar penghitungan. Berdasarkan perkembangan data pelaporan dari Sekretariat Jenderal, ketersediaan data masih berfluktuasi sehingga pada Triwulan I Tahun 2026, data pelaporan mengalami penurunan dibandingkan triwulan sebelumnya.',
    pernyataanRisiko:
      'Pemetaan kapabilitas Perusahaan Jasa Industri yang tidak optimal atau tidak tepat sehingga target persentase peningkatan perusahaan jasa industri yang meningkat kapabilitasnya tidak tercapai',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Masih terdapat perusahaan yang belum mendaftar/memiliki akun SIINas',
      'Perusahaan tidak rutin melaporkan laporan triwulan ke SIINas',
    ],
  },
  {
    no: 18,
    unit: 'POPTIKJI',
    uraianPeristiwa:
      'Pengajuan harmonisasi terkait RPermenperin Peta Jalan Jasa Industri yang mengalami keterlambatan karena terdapat penerbitan regulasi baru yaitu PP 28 Tahun 2025 dengan turunan Permenperin Nomor 37 Tahun 2025.',
    pernyataanRisiko:
      'Keterbatasan payung hukum yang tersedia terkait pemanfaatan jasa industri pada stakeholder menyebabkan target rekomendasi kebijakan tidak tercapai.',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Terdapat perubahan pada bagian lampiran RPermen Peta Jalan Jasa Industri karena menunggu korespondensi KBLI 2020 ke KBLI 2025 yang masih menjadi pembahasan.',
    ],
  },
  {
    no: 19,
    unit: 'POPTIKJI',
    uraianPeristiwa: 'Pusat P3DN memberitahukan perubahan cara perhitungan realisasi PDN/TKDN.',
    pernyataanRisiko:
      'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target.',
    waktuKejadian: 'Juni',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Perhitungan realisasi belanja PDN/TKDN mengalami perubahan di internal Kementerian Perindustrian.',
      'Cara perhitungan yang baru dapat menghasilkan realisasi bulan tertentu di bawah atau di atas target Perkin dari bulan sebelumnya.',
    ],
  },

  // 20 - 21: PPSI
  {
    no: 20,
    unit: 'PPSI',
    uraianPeristiwa: 'Penyesuaian Metode Pengawasan LPK menjadi Hybrid',
    pernyataanRisiko:
      'Pelaksanaan pengawasan kepatuhan LPK tidak sesuai dengan rencana yang telah dibuat sehingga target persentase kepatuhan LPK tidak tercapai',
    waktuKejadian: 'Februari 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Kebijakan penajaman alokasi anggaran yang menyebabkan rencana awal pengawasan tidak dapat dijalankan secara optimal, sehingga metode disesuaikan menjadi hybrid dan memengaruhi pencapaian target kepatuhan.',
    ],
  },
  {
    no: 21,
    unit: 'PPSI',
    uraianPeristiwa: 'Pusat P3DN memberitahukan perubahan cara perhitungan realisasi PDN/TKDN.',
    pernyataanRisiko:
      'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target.',
    waktuKejadian: 'Juni',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Perhitungan realisasi belanja PDN/TKDN mengalami perubahan di internal Kementerian Perindustrian.',
      'Cara perhitungan yang baru dapat menghasilkan realisasi bulan tertentu di bawah atau di atas target Perkin dari bulan sebelumnya.',
    ],
  },

  // 22 - 25: PPPPSI
  {
    no: 22,
    unit: 'PPPPSI',
    uraianPeristiwa:
      'Perumusan SNI masih dalam tahap Penyusunan Konsep sebanyak 56 RSNI, tahap Rapat Teknis : 8 RSNI, tahap Rapat Konsensus : 1 RSNI',
    pernyataanRisiko:
      'Penyusunan atau perumusan SNI tidak dapat diselesaikan sesuai jadwal yang telah ditentukan sehingga jumlah standar bidang industri yang selesai disusun tidak tercapai',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Sebagian besar Perumusan RSNI masih pada Tahap Penyusunan Konsep oleh Konseptor, belum dapat dilaksanakan Rapat Teknis.',
    ],
  },
  {
    no: 23,
    unit: 'PPPPSI',
    uraianPeristiwa:
      'Terdapat 3 Permen Pencabutan SNI Wajib (7 SNI Wajib): 1. Baja Batangan untuk Keperluan Umum (Bj KU); 2. Pupuk amonium sulfat (ZA); 3. Pupuk Kalium Klorida (KCl); 4. Pupuk Super Pospat (SP-36); 5. Pupuk Triple Superfosfat (TSP); 6. Pupuk Fosfat Alam untuk Pertanian; 7. STPP Mutu Teknis',
    pernyataanRisiko:
      'Keterbatasan jumlah standar yang dapat diberlakukan secara wajib dan sarana-prasarana yang mendukung pemberlakukan standar sehingga target persentase peningkatan standar bidang industri yang diberlakukan secara wajib tidak tercapai',
    waktuKejadian: 'Mei 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 1,
    penyebabPeristiwa: [
      '1. Permen 9 Tahun 2026 : Pemberlakuan SNI Pupuk anorganik tunggal secara wajib dapat mengganggu ketersediaan bahan baku pupuk anorganik tunggal di dalam negeri',
      '2. Permen 10 Tahun 2026 : Pemberlakuan SNI STPP Mutu Teknis secara Wajib sudah tidak sesuai dengan Kebijakan Standardisasi Industri',
      '3. Permen 11 Tahun 2026 : Sudah terdapat SNI BTB yang secara visual tidak dapat dibedakan dan sifat mekanis yang relatif sama dengan SNI Bj.KU.',
    ],
  },
  {
    no: 24,
    unit: 'PPPPSI',
    uraianPeristiwa:
      'Terdapat wacana untuk tidak dilanjukannya Penyusunan Rancangan Peraturan Menteri SNI Wajib untuk Traktor Roda Dua',
    pernyataanRisiko:
      'Keterbatasan jumlah standar yang dapat diberlakukan secara wajib dan sarana-prasarana yang mendukung pemberlakukan standar sehingga target persentase peningkatan standar bidang industri yang diberlakukan secara wajib tidak tercapai',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 1,
    penyebabPeristiwa: [
      'Ketidaksiapan infrastruktur dan fasilitas teknis pada Laboratorium Uji yang dibutuhkan untuk mendukung pelaksanaan pengujian serta sertifikasi secara wajib.',
    ],
  },
  {
    no: 25,
    unit: 'PPPPSI',
    uraianPeristiwa: 'Pusat P3DN memberitahukan perubahan cara perhitungan realisasi PDN/TKDN.',
    pernyataanRisiko:
      'Penerapan belanja PDN/TKDN kurang optimal menyebabkan realisasi belanja PDN/TKDN di bawah target',
    waktuKejadian: 'Juni',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Perhitungan realisasi belanja PDN/TKDN mengalami perubahan di internal Kementerian Perindustrian.',
      'Cara perhitungan yang baru dapat menghasilkan realisasi bulan tertentu di bawah atau di atas target Perkin dari bulan sebelumnya.',
    ],
  },

  // 26 - 34: Sekretariat BSKJI
  {
    no: 26,
    unit: 'Sekretariat',
    uraianPeristiwa: 'Pusat P3DN memberitahukan perubahan cara perhitungan realisasi PDN/TKDN.',
    pernyataanRisiko:
      'Realisasi belanja Produk Dalam Negeri (PDN) pada pengadaan barang/jasa Sekretariat BSKJI kurang optimal sehingga tidak mencapai target yang ditetapkan.',
    waktuKejadian: 'Juni',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Perhitungan realisasi belanja PDN/TKDN mengalami perubahan di internal Kementerian Perindustrian.',
      'Cara perhitungan yang baru dapat menghasilkan realisasi bulan tertentu di bawah atau di atas target Perkin dari bulan sebelumnya.',
    ],
  },
  {
    no: 27,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Kegiatan Peningkatan Kompetensi belum berjalan optimal karena terbatasnya kuota pelatihan, pendidikan serta minimnya pelatihan yang tidak berbayar.',
    pernyataanRisiko:
      'Pelaksanaan kegiatan peningkatan kompetensi pegawai tidak optimal sehingga target Indeks Profesionalitas tidak tercapai',
    waktuKejadian: 'Semester 1',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Terbatasnya alokasi anggaran sehingga mengurangi kuota pegawai yang dapat mengikuti pelatihan berbayar.',
      'Masih ada beberapa pegawai yang belum mengetahui kewajiban pegawai untuk mengikuti minimal 20 Jam Pelatihan dalam 1 tahun.',
      'Terbatasnya informasi terkait pelatihan maupun pendidikan.',
    ],
  },
  {
    no: 28,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Belum semua Satker/UPT BSKJI memiliki sistem informasi yang memadai untuk layanan sertifikasi.',
    pernyataanRisiko:
      'Perbedaan sumber daya yang tidak memadai sehingga target persentase jenis layanan di seluruh UPT BSKJI yang datanya terintegrasi dengan sistem informasi BSKJI tidak tercapai.',
    waktuKejadian: 'Januari 2026',
    tempatKejadian: 'Satker UPT BSKJI',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Terbatasnya sumber daya pada satker UPT BSKJI BBSPJIKMN, BSPJI Pekanbaru, BSPJI Palembang, BSPJI Jakarta, BBSPJIKKP.',
    ],
  },
  {
    no: 29,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Data kerja sama teknis/ non layanan pada Satker di lingkungan BSKJI belum semuanya dilaporkan ke Sekretariat BSKJI.',
    pernyataanRisiko:
      'Kapasitas kerja sama satker tidak memadai sehingga target Indeks Manfaat Kerja Sama tidak tercapai.',
    waktuKejadian: 'Juni 2026',
    tempatKejadian: 'Satker UPT BSKJI',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Terdapat perbedaan persepsi terkait kerja sama yang perlu dilaporkan kepada Sekretariat BSKJI.',
    ],
  },
  {
    no: 30,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Ada pergantian personil yang menangani pelayanan publik di UPT dan perubahan panduan penyampaian bukti dukung untuk penyapaian PEKPP.',
    pernyataanRisiko:
      'Pengisian form Pelayanan Publik tidak optimal sehingga target persentase satker yang memperoleh Indeks Pelayanan Publik minimal A tidak tercapai.',
    waktuKejadian: 'Juni 2026',
    tempatKejadian: 'Satker UPT BSKJI',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Rotasi pegawai dan sosialisasi perubahan panduan tata cara pengisian bukti dukung PEKPP.',
    ],
  },
  {
    no: 31,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Data emisi GRK pada industri yang sudah di input ke portal Romantik tidak kunjung di validasi/ terlambatnya respon dalam menangapi perubahan BSKJI dan validasi perbaikan data.',
    pernyataanRisiko:
      'Penerapan SPBE dan EPSS sesuai kaidah tidak optimal sehingga target Tingkat Penerapan SPBE tidak tercapai',
    waktuKejadian: 'Maret 2026',
    tempatKejadian: 'Portal Romantik',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Notifikasi kurang memadai atau belum ada notifikasi ke email user dari portal Romantik.',
    ],
  },
  {
    no: 32,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Dalam Peraturan Menteri PANRB Nomor 88 Tahun 2021 menyatakan bahwa SAKIP terdiri atas lima komponen utama sebagai berikut: 1. Perencanaan Kinerja, 2. Pengukuran Kinerja, 3. Pelaporan Kinerja, 4. Evaluasi Internal, dan 5. Capaian Kinerja, dengan demikian diperlukan mekanisme atau metode atau alat bagi implementasi Pengukuran Kinerja dan Pelaporan Kinerja. Dimana alat yang digunakan adalah ALKI Kementerian Perindustrian. Namun ALKI tersebut belum dapat digunakan secara optimal dikarenakan masih terdapat beberapa bug. Alternatif lain guna mengatasi masalah tersebut juga masih mengalami jalan buntu dikarenakan BSKJI tidak diberikannya ijin pengembangan aplikasi yang menyerupai ALKI atau clereance oleh Pusat Data dan Informasi Kementerian Perindustrian.',
    pernyataanRisiko:
      'Ketidaklengkapan pemenuhan komponen dan kualitas dokumen Lembar Kerja Evaluasi (LKE) SAKIP mengakibatkan target nilai minimal SAKIP tidak tercapai.',
    waktuKejadian: 'Semester I Tahun Anggaran 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'ALKI Kementerian Perindustrian yang masih belum optimal.',
      'BSKJI tidak diberikannya ijin pengembangan aplikasi yang menyerupai ALKI atau clereance oleh Pusat Data dan Informasi Kementerian Perindustrian.',
    ],
  },
  {
    no: 33,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Nilai indikator deviasi halaman III DIPA bulan April berpotensi sangat tinggi menyebabkan nilai IKPA akan turun drastis',
    pernyataanRisiko:
      'Nilai pada aspek dan indikator IKPA tidak optimal sehingga target nilai IKPA tidak tercapai',
    waktuKejadian: 'April - Juni 2026',
    tempatKejadian: 'Gedung Kementerian Perindustrian',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Nilai proyeksi belanja bulanan pada Halaman III DIPA ikut menurun otomatis ketika dilakukan efisiensi, sehingga harus dilakukan revisi untuk menyesuaikan proyeksi belanja pada halaman III DIPA',
    ],
  },
  {
    no: 34,
    unit: 'Sekretariat',
    uraianPeristiwa:
      'Laporan keuangan periode 14 audited 2025, terdapat koreksi belanja dan pendapatan yang harus dilakukan oleh satker BBSPJIBBT dengan nilai cukup besar dan harus dilakukan revisi DIPA 2025 juga. Setelah revisi dilakukan, terdapat error pada aplikasi SAKTI sehingga perlu koordinasi langsung berhari-hari dengan SITP dit APK Kemenkeu untuk memulihkan error tersebut, sehingga penyelesaian koreksi dilakukan di jam-jam terakhir batas waktu, dan angka final laporan keuangan baru naik di hari terakhir batas waktu pengumpulan laporan keuangan',
    pernyataanRisiko:
      'Ketidaksesuaian penyajian data dan keterlambatan penyampaian laporan keuangan yang mengakibatkan target nilai analisis dan laporan keuangan tidak tercapai',
    waktuKejadian: 'Mei 2026',
    tempatKejadian: 'BBSPJIBBT',
    skorDampak: 2,
    penyebabPeristiwa: [
      'Terdapat error pada aplikasi SAKTI khususnya untuk transaksi koreksi/perubahan pada belanja dan pendapatan BLU sehingga menyebabkan angka saldo kas BLU nya tidak sesuai dengan kondisi sebenarnya. Karena error pada SAKTI hanya dapat diselesaikan oleh SITP dan angka kas BLU sama sekali tidak bisa diselesaikan secara manual, maka BSKJI dan Kemenperin tidak bisa menyelesaikan masalah ini sendiri dan deadline tutup buku adalah tanggal 6 Mei 2026 sehingga dilakukan koordinasi sangat intensif hingga error benar-benar dapat diatasi dan angka kas BLU sesuai dengan hasil tripartit antara BPK, Kemenperin dan Kemenkeu.',
    ],
  },
];

export const RISK_EVENT_DOCUMENT_META = {
  lampiran: 'Lampiran 4 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026',
  nomor: 'BSKJI.1/RT/VIII/2026',
  tanggal: 'Agustus 2026',
  judul: 'F. LAPORAN PEMANTAUAN PERISTIWA RISIKO SEMESTER I',
  unitPemilikRisiko: 'Badan Standardisasi dan Kebijakan Jasa Industri',
  tahun: '2026',
  penandatangan: {
    tempat: 'Jakarta',
    tanggal: 'Agustus 2026',
    jabatan: 'Koordinator Pengelola Risiko',
    nama: 'Muhammad Taufiq',
  },
};
