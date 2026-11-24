import React, { useState } from 'react';
import {
  BookOpen,
  Shield,
  Layers,
  Calendar,
  AlertTriangle,
  FileCheck,
  Building2,
  DollarSign,
  ChevronRight,
  ExternalLink,
  Scale,
  CheckCircle2,
} from 'lucide-react';
import {
  PERMENPERIN_24_INFO,
  PERMENPERIN_RISK_CRITERIA,
  PERMENPERIN_PROBABILITY_CRITERIA,
  PERMENPERIN_IMPACT_CRITERIA,
  PERMENPERIN_REPORTING_CYCLES,
  PERMENPERIN_THREE_LINES,
} from '../../data/permenperin24Info';

export const PermenperinGuideView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'lines' | 'categories' | 'criteria' | 'cycles'>('overview');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <Scale className="w-3.5 h-3.5" />
              <span>Acuan Baku Regulasi MRPN Kemenperin</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {PERMENPERIN_24_INFO.nomor}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              {PERMENPERIN_24_INFO.judul} — Pedoman komprehensif bagi seluruh Unit Pemilik Risiko (UPR) di lingkungan BSKJI Pusat dalam merencanakan, menganalisis, mengendalikan, dan memantau risiko pembangunan industri.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2.5 rounded-xl text-center">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Tanggal Ditetapkan</span>
              <span className="text-xs font-bold text-teal-300">{PERMENPERIN_24_INFO.tanggalDitetapkan}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 px-4 py-2.5 rounded-xl text-center">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Pemberlakuan</span>
              <span className="text-xs font-bold text-teal-300">Tahun Anggaran 2024 - Seterusnya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveSection('overview')}
          className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
            activeSection === 'overview'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 text-teal-400" />
          <span>Prinsip & Selera Risiko</span>
        </button>

        <button
          onClick={() => setActiveSection('lines')}
          className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
            activeSection === 'lines'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Layers className="w-4 h-4 text-teal-400" />
          <span>Konsep Tiga Lini (Three Lines)</span>
        </button>

        <button
          onClick={() => setActiveSection('categories')}
          className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
            activeSection === 'categories'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-teal-400" />
          <span>5 Kriteria Risiko (Hal. 18)</span>
        </button>

        <button
          onClick={() => setActiveSection('criteria')}
          className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
            activeSection === 'criteria'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <FileCheck className="w-4 h-4 text-teal-400" />
          <span>Kriteria Kemungkinan & Dampak</span>
        </button>

        <button
          onClick={() => setActiveSection('cycles')}
          className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
            activeSection === 'cycles'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4 text-teal-400" />
          <span>Siklus & Jadwal Pelaporan Wajib</span>
        </button>
      </div>

      {/* Content Sections */}

      {/* SECTION 1: OVERVIEW & SELERA RISIKO */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Tujuan MRPN Kemenperin</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meningkatkan pencapaian Sasaran Strategis (SS) dan Indikator Kinerja Utama (IKU), meminimalkan kerugian keuangan negara, menjaga reputasi instansi, serta meningkatkan kualitas tata kelola pemerintahan yang akuntabel.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">Batas Selera Risiko Organisasi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ditetapkan pada batas skor <strong>11 (Tingkat Rendah - Hijau)</strong>. Seluruh risiko dengan skor residu <strong>≥ 12 (Sedang, Tinggi, Sangat Tinggi)</strong> berada di luar selera risiko dan <strong>wajib dimitigasi</strong> melalui RTP.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">Dukungan Anggaran MRPN</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pasal 24 Permenperin 24/2023 menegaskan bahwa seluruh kegiatan manajemen risiko wajib didukung dengan alokasi anggaran yang memadai dalam Rencana Kerja dan Anggaran (RKA) DIPA masing-masing unit kerja.
              </p>
            </div>
          </div>

          {/* Selera Risiko Detail Matrix Overview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-600" />
              Ketentuan Ambang Batas Selera Risiko (Permenperin 24/2023 Hal. 19-20)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/60 space-y-1">
                <span className="text-[10px] uppercase font-bold text-blue-800">Skor 1 - 6 (Biru)</span>
                <h4 className="text-xs font-bold text-blue-900">Sangat Rendah</h4>
                <p className="text-[11px] text-blue-950">Dapat diterima. Pemantauan rutin operasional harian.</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Dalam Selera Risiko
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-800">Skor 7 - 11 (Hijau)</span>
                <h4 className="text-xs font-bold text-emerald-900">Rendah</h4>
                <p className="text-[11px] text-emerald-950">Dapat diterima. Pengendalian internal yang ada dipertahankan.</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Batas Maksimal Selera
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-800">Skor 12 - 14 (Kuning)</span>
                <h4 className="text-xs font-bold text-amber-900">Sedang</h4>
                <p className="text-[11px] text-amber-950">Di luar selera. Wajib menyusun Rencana Tindak Pengendalian (RTP).</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Wajib Mitigasi (RTP)
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-orange-200 bg-orange-50/60 space-y-1">
                <span className="text-[10px] uppercase font-bold text-orange-800">Skor 15 - 19 (Orange)</span>
                <h4 className="text-xs font-bold text-orange-900">Tinggi</h4>
                <p className="text-[11px] text-orange-950">Di luar selera. Wajib dilaporkan ke Pimpinan UPR dan dievaluasi ketat.</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                  Prioritas Penanganan
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-1">
                <span className="text-[10px] uppercase font-bold text-rose-800">Skor 20 - 25 (Merah)</span>
                <h4 className="text-xs font-bold text-rose-900">Sangat Tinggi</h4>
                <p className="text-[11px] text-rose-950">Kritis. Memerlukan eskalasi segera ke Menteri Perindustrian / Kepala BSKJI.</p>
                <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                  Eskalasi Pimpinan
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: KONSEP TIGA LINI */}
      {activeSection === 'lines' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERMENPERIN_THREE_LINES.map(line => (
              <div
                key={line.lini}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-900 text-teal-300 font-mono">
                      {line.lini}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{line.entitas}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{line.nama}</h3>
                    <p className="text-xs text-slate-600 mt-1">{line.peran}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Tanggung Jawab Utama:
                    </span>
                    <ul className="space-y-1.5">
                      {line.tanggungJawab.map((tj, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{tj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-xl">
                  Kedudukan di BSKJI: <strong>{line.lini === 'Lini Pertama' ? 'Kepala BSKJI & Seluruh Kepala Unit Kerja' : line.lini === 'Lini Kedua' ? 'Biro Keuangan Kemenperin' : 'Inspektorat Jenderal Kemenperin'}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: 5 KRITERIA RISIKO RESMI (HALAMAN 18) */}
      {activeSection === 'categories' && (
        <div className="space-y-6">
          <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-4 text-xs text-teal-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <strong className="font-bold block text-sm">
                Klasifikasi Kriteria Risiko Permenperin No. 24 Tahun 2023 (Halaman 18)
              </strong>
              <p className="text-teal-800 mt-0.5">
                Seluruh <strong>45 risiko</strong> pada profil risiko BSKJI Pusat TA 2026 masuk ke dalam kriteria <strong>Pencapaian Tujuan Organisasi</strong>.
              </p>
            </div>
            <span className="font-mono font-bold px-3 py-1 rounded-full bg-white border border-teal-300 text-teal-800 shrink-0 self-start sm:self-auto">
              45 / 45 Risiko: Pencapaian Tujuan Organisasi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERMENPERIN_RISK_CRITERIA.map(crit => (
              <div
                key={crit.id}
                className={`bg-white border rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between transition ${
                  crit.name === 'Pencapaian Tujuan Organisasi'
                    ? 'border-teal-400 ring-2 ring-teal-500/15'
                    : 'border-slate-200 hover:border-teal-500'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {crit.code}
                    </span>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                      Permenperin 24/2023 Hal. 18
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900">{crit.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{crit.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Penerapan & Skala Kriteria:
                  </span>
                  <p className="text-xs font-medium text-slate-800">{crit.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: KRITERIA KEMUNGKINAN & DAMPAK */}
      {activeSection === 'criteria' && (
        <div className="space-y-6">
          {/* Probability Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-teal-600" />
              Kriteria Kemungkinan / Probabilitas Terjadi (5 Tingkat)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
                    <th className="p-2.5 border-r border-slate-200 w-16 text-center">Level</th>
                    <th className="p-2.5 border-r border-slate-200 w-48">Kategori</th>
                    <th className="p-2.5 border-r border-slate-200 w-32">Persentase</th>
                    <th className="p-2.5 border-r border-slate-200 w-48">Frekuensi / Tahun</th>
                    <th className="p-2.5">Karakteristik & Deskripsi Kualitatif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PERMENPERIN_PROBABILITY_CRITERIA.map(pc => (
                    <tr key={pc.level} className="hover:bg-slate-50">
                      <td className="p-2.5 text-center font-bold font-mono border-r border-slate-200">{pc.level}</td>
                      <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">{pc.label}</td>
                      <td className="p-2.5 font-mono text-slate-700 border-r border-slate-200">{pc.percentage}</td>
                      <td className="p-2.5 font-medium text-slate-700 border-r border-slate-200">{pc.frequency}</td>
                      <td className="p-2.5 text-slate-600">{pc.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Impact Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-teal-600" />
              Kriteria Dampak Resmi Permenperin 24/2023 (5 Aspek Pengaruh)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200 text-[11px] uppercase">
                    <th className="p-2.5 border-r border-slate-200 w-12 text-center">Lvl</th>
                    <th className="p-2.5 border-r border-slate-200 w-36">Tingkat Dampak</th>
                    <th className="p-2.5 border-r border-slate-200">Beban Keuangan Negara</th>
                    <th className="p-2.5 border-r border-slate-200">Reputasi Instansi</th>
                    <th className="p-2.5 border-r border-slate-200">Pencapaian Tujuan Organisasi</th>
                    <th className="p-2.5 border-r border-slate-200">K3 Pegawai</th>
                    <th className="p-2.5">Temuan Pemeriksaan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PERMENPERIN_IMPACT_CRITERIA.map(ic => (
                    <tr key={ic.level} className="hover:bg-slate-50">
                      <td className="p-2.5 text-center font-bold font-mono border-r border-slate-200">{ic.level}</td>
                      <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">{ic.label}</td>
                      <td className="p-2.5 text-slate-700 border-r border-slate-200">{ic.financial}</td>
                      <td className="p-2.5 text-slate-700 border-r border-slate-200">{ic.reputation}</td>
                      <td className="p-2.5 text-slate-700 border-r border-slate-200 font-semibold">{ic.targetAchievement}</td>
                      <td className="p-2.5 text-slate-700 border-r border-slate-200">{ic.k3}</td>
                      <td className="p-2.5 text-slate-700">{ic.auditFinding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: SIKLUS & JADWAL PELAPORAN */}
      {activeSection === 'cycles' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PERMENPERIN_REPORTING_CYCLES.map(cycle => (
              <div
                key={cycle.periode}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                    {cycle.periode}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    <span>Batas Waktu: {cycle.batasWaktu}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">{cycle.jenisLaporan}</h3>
                  <p className="text-xs text-slate-600 mt-1">{cycle.keterangan}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Penyusun: <strong>Pengelola Risiko UPR</strong></span>
                  <span>Diserahkan ke: <strong>Inspektorat Jenderal / Menteri</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
