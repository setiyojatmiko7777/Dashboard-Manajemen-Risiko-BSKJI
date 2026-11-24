import React, { useState, useMemo } from 'react';
import { RiskItem } from '../../types/risk';
import {
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Search,
  Building2,
  Printer,
  ChevronRight,
  Layers,
  Info,
} from 'lucide-react';
import { UNIT_INFO } from '../../data/unitInfo';

interface ActionPlanViewProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
}

export const ActionPlanView: React.FC<ActionPlanViewProps> = ({ risks, onSelectRisk }) => {
  const [viewMode, setViewMode] = useState<'OFFICIAL' | 'EXISTING_CONTROLS'>('OFFICIAL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<string>('ALL');

  const filteredControls = useMemo(() => {
    return risks.filter(r => {
      const matchUnit = selectedUnit === 'ALL' || r.unit === selectedUnit;
      const q = searchTerm.toLowerCase();
      const matchSearch =
        !searchTerm.trim() ||
        r.id.toLowerCase().includes(q) ||
        r.pernyataanRisiko.toLowerCase().includes(q) ||
        r.pengelola.toLowerCase().includes(q) ||
        r.controlDescription.some(c => c.toLowerCase().includes(q));

      return matchUnit && matchSearch;
    });
  }, [risks, searchTerm, selectedUnit]);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-200 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-mono">
                  Lampiran 2 • No: BSKJI.1/RT/VIII/2026
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Permenperin No. 24 Tahun 2023 (Hal. 36)
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                Rencana Tindak Pengendalian (RTP) Organisasi (Formulir 4)
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Status Resmi: <strong className="text-blue-800">Nihil (*Tidak ada Rencana Tindak Pengendalian terhadap Daftar Risiko Prioritas)</strong>
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
              <span>Status Resmi (Lampiran 2)</span>
            </button>
            <button
              onClick={() => setViewMode('EXISTING_CONTROLS')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                viewMode === 'EXISTING_CONTROLS'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Pemeliharaan SOP Rutin ({risks.length})</span>
            </button>
          </div>
        </div>

        {/* Regulatory Basis Notice */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-2">
          <div className="flex items-center gap-2 font-bold">
            <Info className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>Ketentuan Rencana Tindak Pengendalian (RTP) Permenperin No. 24 Tahun 2023:</span>
          </div>
          <p className="leading-relaxed text-slate-700">
            Sesuai pedoman baku Permenperin 24/2023, penyusunan formulir Rencana Tindak Pengendalian (RTP) baru hanya diwajibkan untuk menindaklanjuti risiko-risiko yang masuk ke dalam <strong>Daftar Risiko Prioritas</strong> (yakni risiko dengan besaran residu yang melampaui batas selera risiko organisasi).
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-3 font-semibold text-blue-900">
            <span className="inline-flex items-center gap-1">
              ✓ Daftar Risiko Prioritas: <strong>Nihil (*Tidak ada)</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              ✓ Kewajiban RTP Baru: <strong>Nihil (*Tidak ada Rencana Tindak Pengendalian terhadap Risiko Prioritas)</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              ✓ Tindakan Berjalan: <strong>Pemeliharaan disiplin SOP dan pengendalian eksisting</strong>
            </span>
          </div>
        </div>
      </div>

      {/* VIEW 1: FORMAT RESMI LAMPIRAN 2 SURAT RESMI BSKJI */}
      {viewMode === 'OFFICIAL' && (
        <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Header Format Dokumen Resmi BSKJI Pusat */}
          <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
            <div className="flex justify-between items-start text-[11px] font-mono text-slate-600">
              <span>- 3 -</span>
              <div className="text-right space-y-0.5">
                <p>Lampiran 2 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
                <p>Nomor : BSKJI.1/RT/VIII/2026</p>
                <p>Tanggal : Agustus 2026</p>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold tracking-wider text-slate-900 uppercase pt-2">
              D. RENCANA TINDAK PENGENDALIAN
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
                  <th rowSpan={2} className="p-2 border border-slate-300 w-10">No</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 min-w-[140px]">Pernyataan Risiko</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 min-w-[130px]">Penyebab Risiko</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 w-24">Respons Risiko</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 min-w-[150px]">Kegiatan Pengendalian</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 w-28">Penanggung Jawab</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 w-28">Indikator Keluaran</th>
                  <th rowSpan={2} className="p-2 border border-slate-300 w-20">Target Waktu</th>
                  <th colSpan={3} className="p-1.5 border border-slate-300 bg-slate-200/70">
                    Risiko yang direspons
                  </th>
                </tr>
                <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                  <th className="p-1.5 border border-slate-300 w-20">Skor Probabilitas</th>
                  <th className="p-1.5 border border-slate-300 w-16">Skor Dampak</th>
                  <th className="p-1.5 border border-slate-300 w-20">Level Risiko</th>
                </tr>
                <tr className="bg-slate-50 text-[10px] font-mono text-slate-500 border-b border-slate-300 text-center">
                  <th className="p-1 border border-slate-300">1</th>
                  <th className="p-1 border border-slate-300">2</th>
                  <th className="p-1 border border-slate-300">3</th>
                  <th className="p-1 border border-slate-300">4</th>
                  <th className="p-1 border border-slate-300">5</th>
                  <th className="p-1 border border-slate-300">6</th>
                  <th className="p-1 border border-slate-300">7</th>
                  <th className="p-1 border border-slate-300">8</th>
                  <th className="p-1 border border-slate-300">9</th>
                  <th className="p-1 border border-slate-300">10</th>
                  <th className="p-1 border border-slate-300">11</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center font-bold text-slate-700 bg-white">
                  <td className="p-3.5 border border-slate-300 font-mono">*</td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                  <td className="p-3.5 border border-slate-300"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs font-bold text-slate-800 italic">
            *Tidak ada Rencana Tindak Pengendalian terhadap Daftar Risiko Prioritas
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

      {/* VIEW 2: PEMELIHARAAN PENGENDALIAN EKSISTING (SOP RUTIN) */}
      {viewMode === 'EXISTING_CONTROLS' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Cari kode risiko, pernyataan, PIC, atau kendali eksisting..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 text-slate-800 font-medium"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedUnit}
                onChange={e => setSelectedUnit(e.target.value)}
                className="bg-transparent border-none focus:outline-hidden text-slate-800 font-bold cursor-pointer"
              >
                <option value="ALL">Semua Unit ({risks.length})</option>
                <option value="PIH">PIH (13)</option>
                <option value="POPTIKJI">POPTIKJI (6)</option>
                <option value="PPSI">PPSI (6)</option>
                <option value="PPPPSI">PPPPSI (6)</option>
                <option value="Sekretariat">Sekretariat (14)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredControls.map(risk => (
              <div
                key={risk.id}
                onClick={() => onSelectRisk(risk)}
                className="bg-white border border-slate-200 hover:border-teal-500 rounded-xl p-4 shadow-xs hover:shadow-sm transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                      {risk.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {risk.unit}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition">
                    {risk.pernyataanRisiko}
                  </h4>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      Prosedur Pengendalian Eksisting Terpasang:
                    </span>
                    <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                      {risk.controlDescription.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate max-w-[160px] font-medium" title={risk.pengelola}>
                    PIC: {risk.pengelola}
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                    Residu: {risk.residualScore} ({risk.residualLevel})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
