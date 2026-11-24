import React, { useState } from 'react';
import { RiskItem } from '../../types/risk';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Layers,
  ArrowRight,
  Printer,
  Info,
  ChevronRight,
  TrendingDown,
} from 'lucide-react';

interface PriorityRiskViewProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
}

export const PriorityRiskView: React.FC<PriorityRiskViewProps> = ({ risks, onSelectRisk }) => {
  const [viewMode, setViewMode] = useState<'OFFICIAL' | 'INHERENT_BASELINE'>('OFFICIAL');

  // Baseline inherent risks that were originally >= 12 before being controlled down to <= 11
  const inherentHighBaseline = risks
    .filter(r => r.inherentScore >= 12)
    .sort((a, b) => b.inherentScore - a.inherentScore);

  return (
    <div className="space-y-6">
      {/* Official Status Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono">
                  Lampiran 1 • No: BSKJI.1/RT/VIII/2026
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Permenperin No. 24 Tahun 2023 (Hal. 35)
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Daftar Risiko Prioritas Organisasi (Formulir 3)
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Status Resmi: <strong className="text-emerald-800">Nihil (*Tidak ada Daftar Risiko Prioritas)</strong> — Seluruh 45 risiko residu BSKJI Pusat berada di bawah batas selera risiko (skor ≤ 11).
              </p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start lg:self-auto">
            <button
              onClick={() => setViewMode('OFFICIAL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                viewMode === 'OFFICIAL'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-teal-600" />
              <span>Status Resmi (Lampiran 1)</span>
            </button>
            <button
              onClick={() => setViewMode('INHERENT_BASELINE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                viewMode === 'INHERENT_BASELINE'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>Analisis Risiko Awal ({inherentHighBaseline.length})</span>
            </button>
          </div>
        </div>

        {/* Regulatory Basis Notice */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>Landasan Regulasi Permenperin No. 24 Tahun 2023:</span>
          </div>
          <p className="leading-relaxed text-slate-700">
            Berdasarkan Peraturan Menteri Perindustrian Nomor 24 Tahun 2023, penetapan <strong>Daftar Risiko Prioritas</strong> secara yuridis dan metodologis ditujukan bagi risiko yang memiliki besaran risiko residu melebihi batas toleransi selera risiko organisasi (<strong>skor residu &gt; 11</strong> atau tingkat Sedang, Tinggi, dan Sangat Tinggi).
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-3 font-semibold text-emerald-900">
            <span className="inline-flex items-center gap-1">
              ✓ Selera Risiko BSKJI: <strong>Maksimal Skor 11 (Kategori Rendah &amp; Sangat Rendah)</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              ✓ Skor Residu BSKJI: <strong>100% berada pada rentang skor 1 s.d. 11</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              ✓ Kesimpulan Resmi: <strong>Daftar Risiko Prioritas = Nihil</strong>
            </span>
          </div>
        </div>
      </div>

      {/* VIEW 1: FORMAT RESMI LAMPIRAN 1 SURAT RESMI BSKJI */}
      {viewMode === 'OFFICIAL' && (
        <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Header Format Dokumen Resmi BSKJI Pusat */}
          <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
            <div className="flex justify-between items-start text-[11px] font-mono text-slate-600">
              <span>- 2 -</span>
              <div className="text-right space-y-0.5">
                <p>Lampiran 1 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
                <p>Nomor : BSKJI.1/RT/VIII/2026</p>
                <p>Tanggal : Agustus 2026</p>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold tracking-wider text-slate-900 uppercase pt-2">
              C. DAFTAR RISIKO PRIORITAS
            </h3>
            <div className="text-xs font-semibold text-slate-700 space-y-0.5">
              <p>Unit Pemilik Risiko : Badan Standardisasi dan Kebijakan Jasa Industri</p>
              <p>Tahun : 2026</p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                  <th rowSpan={2} className="p-2.5 border border-slate-300 w-14">No</th>
                  <th rowSpan={2} className="p-2.5 border border-slate-300 min-w-[320px]">Pernyataan Risiko</th>
                  <th colSpan={3} className="p-2 border border-slate-300 bg-slate-200/70">
                    Skor / Nilai Risiko Residu setelah Pengendalian
                  </th>
                </tr>
                <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                  <th className="p-2 border border-slate-300 w-32">Skor Probabilitas</th>
                  <th className="p-2 border border-slate-300 w-28">Skor Dampak</th>
                  <th className="p-2 border border-slate-300 w-32">Level Risiko</th>
                </tr>
                <tr className="bg-slate-50 text-[10px] font-mono text-slate-500 border-b border-slate-300 text-center">
                  <th className="p-1 border border-slate-300">1</th>
                  <th className="p-1 border border-slate-300">2</th>
                  <th className="p-1 border border-slate-300">3</th>
                  <th className="p-1 border border-slate-300">4</th>
                  <th className="p-1 border border-slate-300">5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center font-bold text-slate-700 bg-white">
                  <td className="p-3.5 border border-slate-300 font-mono">*</td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs font-bold text-slate-800 italic">
            *Tidak ada Daftar Risiko Prioritas
          </p>

          {/* Formal Signature Block */}
          <div className="pt-8 border-t border-slate-300 flex justify-end text-xs text-slate-800">
            <div className="w-64 space-y-14 text-center">
              <div>
                <p className="text-slate-600">Jakarta, Agustus 2026</p>
                <p className="font-bold text-slate-900 mt-1">Koordinator Pengelola Risiko</p>
              </div>
              <div className="pt-2 border-t border-slate-400">
                <p className="font-bold text-slate-900">Muhammad Taufiq</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ANALISIS RISIKO MELEKAT AWAL (INHERENT BASELINE PRE-MITIGASI) */}
      {viewMode === 'INHERENT_BASELINE' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900">
            <span className="font-bold block mb-1">
              Catatan Evaluasi Efektivitas Pengendalian Organisasi:
            </span>
            <p className="text-slate-700 leading-relaxed">
              Daftar di bawah ini memperlihatkan {inherentHighBaseline.length} risiko yang semula memiliki nilai risiko melekat (inherent) pada level Tinggi atau Sangat Tinggi (skor ≥ 12) sebelum penerapan pengendalian. Melalui pengendalian internal dan SOP operasional yang dijalankan BSKJI Pusat, seluruh risiko tersebut <strong>berhasil ditekan hingga ke level residu dalam batas selera (skor ≤ 11)</strong>, sehingga tidak ada yang perlu ditetapkan sebagai Risiko Prioritas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {inherentHighBaseline.map(risk => (
              <div
                key={risk.id}
                onClick={() => onSelectRisk(risk)}
                className="bg-white border border-slate-200 hover:border-teal-500 rounded-xl p-4 shadow-xs hover:shadow-sm transition cursor-pointer flex flex-col md:flex-row md:items-center md:justify-between gap-4 group"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono font-bold text-xs text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                      {risk.id}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {risk.unit}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      Inherent Awal: {risk.inherentScore} ({risk.inherentLevel})
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Residu Terkendali: {risk.residualScore} ({risk.residualLevel})
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition">
                    {risk.pernyataanRisiko}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-1">
                    <strong className="text-slate-700">Kendali Eksisting: </strong>
                    {risk.controlDescription[0]}
                  </p>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-center flex-shrink-0 justify-between md:justify-end">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Efektivitas Kendali</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                      <TrendingDown className="w-3 h-3" />
                      -{risk.scoreReduction} Poin
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">Status Selera</span>
                    <span className="text-xs font-bold text-emerald-700">Dalam Selera</span>
                  </div>

                  <div className="text-teal-600 group-hover:translate-x-0.5 transition pl-1">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
