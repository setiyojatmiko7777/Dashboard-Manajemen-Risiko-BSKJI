import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Download,
  Filter,
  Building2,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { RiskItem } from '../../types/risk';
import { UNIT_INFO } from '../../data/unitInfo';
import { PERMENPERIN_STANDARD_FORMS, getRiskLevelInfo } from '../../data/permenperin24Info';
import { OFFICIAL_RISK_EVENTS_SEMESTER_1, RISK_EVENT_DOCUMENT_META } from '../../data/riskEventsData';

interface PermenperinFormsViewProps {
  risks: RiskItem[];
  onSelectRisk?: (risk: RiskItem) => void;
}

export const PermenperinFormsView: React.FC<PermenperinFormsViewProps> = ({
  risks,
  onSelectRisk,
}) => {
  const [activeFormId, setActiveFormId] = useState<string>('form-2');
  const [selectedUnit, setSelectedUnit] = useState<string>('ALL');

  const filteredRisks = selectedUnit === 'ALL'
    ? risks
    : risks.filter(r => r.unit === selectedUnit);

  // Sorted risks for Priority Form (Form 3) and RTP Form (Form 4)
  const priorityRisks = [...filteredRisks].sort((a, b) => b.residualScore - a.residualScore);

  const activeFormMeta = PERMENPERIN_STANDARD_FORMS.find(f => f.id === activeFormId) || PERMENPERIN_STANDARD_FORMS[1];

  const handlePrint = () => {
    window.print();
  };

  const getUnitDisplayName = () => {
    if (selectedUnit === 'ALL') return 'BSKJI PUSAT (SEMUA UNIT KERJA)';
    return UNIT_INFO[selectedUnit]?.name.toUpperCase() || selectedUnit;
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Form Selection Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-teal-300 font-mono">
                Lampiran Permenperin No. 24 Tahun 2023
              </span>
              <span className="text-xs font-semibold text-slate-500">Standar Dokumen MRPN Resmi</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              Formulir Baku Manajemen Risiko Pembangunan Nasional (MRPN)
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Koleksi formulir resmi siap cetak dan audit sesuai tata naskah dinas Lampiran Permenperin 24/2023.
            </p>
          </div>

          {/* Unit Filter & Print Action */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedUnit}
                onChange={e => setSelectedUnit(e.target.value)}
                className="bg-transparent border-none focus:outline-hidden text-slate-800 font-bold cursor-pointer"
              >
                <option value="ALL">Semua Unit Kerja (45 Risiko)</option>
                <option value="PIH">PIH (Pusat Industri Hijau)</option>
                <option value="POPTIKJI">POPTIKJI</option>
                <option value="PPSI">PPSI</option>
                <option value="PPPPSI">PPPPSI</option>
                <option value="Sekretariat">Sekretariat BSKJI</option>
              </select>
            </div>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span>Cetak / Cetak PDF</span>
            </button>
          </div>
        </div>

        {/* 7 Standard Forms Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-medium">
          {PERMENPERIN_STANDARD_FORMS.map(form => (
            <button
              key={form.id}
              onClick={() => setActiveFormId(form.id)}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition flex items-center gap-1.5 ${
                activeFormId === form.id
                  ? 'bg-teal-600 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{form.title.split('-')[0].trim()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* DOCUMENT PREVIEW CONTAINER (Audit-ready Paper View) */}
      <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
        {/* Kop Resmi Dokumen */}
        <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
          <h3 className="text-xs sm:text-sm font-bold tracking-widest text-slate-900 uppercase">
            KEMENTERIAN PERINDUSTRIAN REPUBLIK INDONESIA
          </h3>
          <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase">
            BADAN STANDARDISASI DAN KEBIJAKAN JASA INDUSTRI (BSKJI)
          </h4>
          <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">
            UNIT PEMILIK RISIKO (UPR): {getUnitDisplayName()}
          </p>
          <div className="inline-block mt-1 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-[10px] font-mono font-bold text-slate-800">
            TAHUN ANGGARAN 2026 • STANDAR PERMENPERIN NO. 24 TAHUN 2023
          </div>
        </div>

        {/* Form Title Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase">
              {activeFormMeta.title}
            </h3>
            <p className="text-xs text-slate-500">
              {activeFormMeta.description} (Jumlah Record: {filteredRisks.length})
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 self-start sm:self-auto">
            {activeFormMeta.id.toUpperCase()}
          </span>
        </div>

        {/* FORM 1: FORMULIR IDENTIFIKASI RISIKO */}
        {activeFormId === 'form-1' && (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl">
              <span className="font-semibold text-slate-700 leading-relaxed">
                Dokumen Resmi Identifikasi Risiko (Formulir 1) • Seluruh narasi sasaran strategis, IKU, proses bisnis, pernyataan risiko, akar penyebab internal & eksternal, dan uraian dampak disajikan utuh tanpa pemotongan.
              </span>
              <span className="font-mono text-teal-800 font-bold self-start sm:self-auto bg-teal-50 border border-teal-200 px-2 py-0.5 rounded shrink-0">
                {filteredRisks.length} Risiko Terdaftar
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-300 rounded-xl shadow-2xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center uppercase tracking-wider text-[11px]">
                    <th className="p-3 border border-slate-300 w-12 shrink-0">No</th>
                    <th className="p-3 border border-slate-300 min-w-[110px]">ID / Unit</th>
                    <th className="p-3 border border-slate-300 min-w-[260px]">Sasaran Strategis & IKU</th>
                    <th className="p-3 border border-slate-300 min-w-[100px]">Target IKU</th>
                    <th className="p-3 border border-slate-300 min-w-[280px]">Proses Bisnis</th>
                    <th className="p-3 border border-slate-300 min-w-[300px]">Pernyataan Risiko</th>
                    <th className="p-3 border border-slate-300 min-w-[340px]">Akar Penyebab (Internal & Eksternal)</th>
                    <th className="p-3 border border-slate-300 min-w-[280px]">Uraian Dampak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredRisks.map((r, idx) => (
                    <tr
                      key={r.id}
                      className="hover:bg-slate-50/80 align-top transition group"
                    >
                      <td className="p-3 border border-slate-300 text-center font-mono font-bold text-slate-700">
                        {idx + 1}
                      </td>
                      <td className="p-3 border border-slate-300">
                        <div className="flex flex-col items-start gap-1">
                          <button
                            type="button"
                            onClick={() => onSelectRisk?.(r)}
                            className="font-mono font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-2 py-0.5 rounded text-xs transition"
                            title="Klik untuk membuka lembar detail risiko"
                          >
                            {r.id}
                          </button>
                          <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {r.unit}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 border border-slate-300">
                        <div className="space-y-1.5 leading-relaxed break-words">
                          <span className="font-bold text-slate-900 block">
                            {r.sasaranStrategis}
                          </span>
                          <div className="text-[11px] text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                            <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wide mb-0.5">
                              Indikator Kinerja Utama (IKU):
                            </span>
                            {r.indikatorKinerja}
                          </div>
                        </div>
                      </td>
                      <td className="p-3 border border-slate-300 text-center font-bold font-mono text-slate-800">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                          {r.target}
                        </span>
                      </td>
                      <td className="p-3 border border-slate-300">
                        <ul className="list-disc pl-4 space-y-1.5 text-[11px] text-slate-800 leading-relaxed break-words">
                          {r.prosesBisnis.map((pb, pidx) => (
                            <li key={pidx} className="break-words">
                              {pb}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-3 border border-slate-300">
                        <div className="font-semibold text-slate-900 leading-relaxed break-words text-xs">
                          {r.pernyataanRisiko}
                        </div>
                        {onSelectRisk && (
                          <button
                            type="button"
                            onClick={() => onSelectRisk(r)}
                            className="mt-2 text-[10px] font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition"
                          >
                            <span>Buka Detail Lengkap</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </td>
                      <td className="p-3 border border-slate-300 text-[11px]">
                        <div className="space-y-3 leading-relaxed break-words">
                          {/* Penyebab Internal - Ditampilkan Utuh */}
                          <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-200">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-800 border border-rose-200 mb-1.5">
                              Penyebab Internal:
                            </span>
                            <ul className="list-disc pl-4 space-y-1.5 text-slate-700">
                              {r.penyebabInternal.map((cause, cidx) => (
                                <li key={cidx} className="break-words">
                                  {cause}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Penyebab Eksternal - Ditampilkan Utuh */}
                          <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-200">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
                              Penyebab Eksternal:
                            </span>
                            <ul className="list-disc pl-4 space-y-1.5 text-slate-700">
                              {r.penyebabEksternal.map((cause, cidx) => (
                                <li key={cidx} className="break-words">
                                  {cause}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 border border-slate-300 text-[11px] text-slate-800 leading-relaxed break-words">
                        <div className="bg-slate-50/60 p-2.5 rounded-lg border border-slate-200">
                          {r.uraianDampak}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FORM 2: FORMULIR ANALISIS RISIKO (RESMI 11 KOLOM) */}
        {activeFormId === 'form-2' && (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl">
              <span className="font-semibold text-slate-700 leading-relaxed">
                Dokumen Resmi Analisis Risiko (Formulir 2) • Seluruh narasi pengendalian yang ada, evaluasi efektivitas, dan tingkat risiko inherent vs residual disajikan utuh dan lengkap.
              </span>
              <span className="font-mono text-teal-800 font-bold self-start sm:self-auto bg-teal-50 border border-teal-200 px-2 py-0.5 rounded shrink-0">
                {filteredRisks.length} Risiko Teranalisis
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-300 rounded-xl shadow-2xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center uppercase tracking-wider text-[11px]">
                    <th rowSpan={2} className="p-2.5 border border-slate-300 w-12">No</th>
                    <th rowSpan={2} className="p-2.5 border border-slate-300 min-w-[100px]">Kode / Unit</th>
                    <th rowSpan={2} className="p-2.5 border border-slate-300 min-w-[280px]">Pernyataan Risiko</th>
                    <th colSpan={3} className="p-2 border border-slate-300 bg-rose-50 text-rose-900">
                      Risiko Melekat (Inherent)
                    </th>
                    <th rowSpan={2} className="p-2.5 border border-slate-300 min-w-[340px]">
                      Pengendalian yang Ada (SOP / Regulasi Eksisting)
                    </th>
                    <th rowSpan={2} className="p-2.5 border border-slate-300 w-28 text-center">
                      Efektivitas Kendali
                    </th>
                    <th colSpan={3} className="p-2 border border-slate-300 bg-teal-50 text-teal-900">
                      Risiko Residu (Residual)
                    </th>
                    <th rowSpan={2} className="p-2.5 border border-slate-300 min-w-[130px] text-center">
                      Status Batas Selera Risiko (≤ 11)
                    </th>
                  </tr>
                  <tr className="bg-slate-50 font-bold text-slate-800 border-b border-slate-300 text-center text-[10px]">
                    <th className="p-1.5 border border-slate-300 w-12 bg-rose-50/70">Kem (P)</th>
                    <th className="p-1.5 border border-slate-300 w-12 bg-rose-50/70">Dam (D)</th>
                    <th className="p-1.5 border border-slate-300 min-w-[110px] bg-rose-50/70">Besaran & Level</th>
                    <th className="p-1.5 border border-slate-300 w-12 bg-teal-50/70">Kem (P)</th>
                    <th className="p-1.5 border border-slate-300 w-12 bg-teal-50/70">Dam (D)</th>
                    <th className="p-1.5 border border-slate-300 min-w-[110px] bg-teal-50/70">Besaran & Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredRisks.map((r, idx) => {
                    const inhInfo = getRiskLevelInfo(r.inherentScore);
                    const resInfo = getRiskLevelInfo(r.residualScore);
                    return (
                      <tr key={r.id} className="hover:bg-slate-50/80 align-top transition group">
                        <td className="p-3 border border-slate-300 text-center font-mono font-bold text-slate-700">
                          {idx + 1}
                        </td>
                        <td className="p-3 border border-slate-300">
                          <div className="flex flex-col items-start gap-1">
                            <button
                              type="button"
                              onClick={() => onSelectRisk?.(r)}
                              className="font-mono font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-2 py-0.5 rounded text-xs transition"
                              title="Klik untuk membuka lembar detail risiko"
                            >
                              {r.id}
                            </button>
                            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                              {r.unit}
                            </span>
                          </div>
                        </td>
                        <td className="p-3 border border-slate-300">
                          <div className="font-semibold text-slate-900 leading-relaxed break-words text-xs">
                            {r.pernyataanRisiko}
                          </div>
                          {onSelectRisk && (
                            <button
                              type="button"
                              onClick={() => onSelectRisk(r)}
                              className="mt-2 text-[10px] font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition"
                            >
                              <span>Buka Detail Lengkap</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </td>

                        {/* Inherent */}
                        <td className="p-3 border border-slate-300 text-center font-mono font-semibold text-slate-800">
                          {r.inherentProbability}
                        </td>
                        <td className="p-3 border border-slate-300 text-center font-mono font-semibold text-slate-800">
                          {r.inherentImpact}
                        </td>
                        <td className="p-3 border border-slate-300 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className={`font-mono font-black text-sm ${inhInfo.textColor}`}>
                              {r.inherentScore}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap ${inhInfo.badgeClass}`}>
                              {r.inherentLevel}
                            </span>
                          </div>
                        </td>

                        {/* Controls (Pengendalian yang Ada - Utuh & Lengkap tanpa pemotongan) */}
                        <td className="p-3 border border-slate-300 text-[11px]">
                          <ul className="list-disc pl-4 space-y-2 text-slate-800 leading-relaxed break-words">
                            {r.controlDescription.map((c, cidx) => (
                              <li key={cidx} className="break-words">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </td>

                        {/* Control Adequacy */}
                        <td className="p-3 border border-slate-300 text-center">
                          <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg border ${
                            r.controlAdequacy === 'Memadai'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-amber-50 text-amber-800 border-amber-300'
                          }`}>
                            {r.controlAdequacy}
                          </span>
                        </td>

                        {/* Residual */}
                        <td className="p-3 border border-slate-300 text-center font-mono font-semibold text-slate-800">
                          {r.residualProbability}
                        </td>
                        <td className="p-3 border border-slate-300 text-center font-mono font-semibold text-slate-800">
                          {r.residualImpact}
                        </td>
                        <td className="p-3 border border-slate-300 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className={`font-mono font-black text-sm ${resInfo.textColor}`}>
                              {r.residualScore}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap ${resInfo.badgeClass}`}>
                              {r.residualLevel}
                            </span>
                          </div>
                        </td>

                        {/* Appetite Status */}
                        <td className="p-3 border border-slate-300 text-center">
                          <span className={`inline-flex items-center justify-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg border ${
                            r.residualScore <= 11
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-rose-50 text-rose-800 border-rose-300'
                          }`}>
                            {r.residualScore <= 11 ? (
                              <>
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span>Dalam Selera</span>
                              </>
                            ) : (
                              <span>Di Luar Selera</span>
                            )}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FORM 3: DAFTAR RISIKO PRIORITAS (LAMPIRAN 1 SURAT RESMI BSKJI PUSAT) */}
        {activeFormId === 'form-3' && (
          <div className="space-y-6">
            {/* Official Document Sub-Header */}
            <div className="flex justify-between items-start text-[11px] font-mono text-slate-600 border-b border-slate-200 pb-2">
              <span>- 2 -</span>
              <div className="text-right space-y-0.5">
                <p>Lampiran 1 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
                <p>Nomor : BSKJI.1/RT/VIII/2026</p>
                <p>Tanggal : Agustus 2026</p>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wide">
                C. DAFTAR RISIKO PRIORITAS
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                Unit Pemilik Risiko : Badan Standardisasi dan Kebijakan Jasa Industri
              </p>
              <p className="text-xs font-semibold text-slate-700">Tahun : 2026</p>
            </div>

            {/* Explanatory Audit Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Kesesuaian Selera Risiko Permenperin No. 24 Tahun 2023:</span>
              </div>
              <p className="leading-relaxed">
                Berdasarkan pedoman Permenperin No. 24 Tahun 2023, Daftar Risiko Prioritas disusun khusus untuk risiko yang memiliki nilai residu di atas batas selera risiko organisasi (skor residu &gt; 11 / Tingkat Sedang, Tinggi, atau Sangat Tinggi). Karena seluruh 45 risiko residu di lingkungan BSKJI Pusat berada pada rentang skor 1 s.d. 11 (Tingkat Rendah dan Sangat Rendah / Dalam Selera Risiko), maka secara resmi <strong>tidak ada risiko yang masuk ke dalam Daftar Risiko Prioritas</strong>.
              </p>
            </div>

            {/* Official Table */}
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
                    <td className="p-3 border border-slate-300 font-mono">*</td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs font-bold text-slate-800 italic">
              *Tidak ada Daftar Risiko Prioritas
            </p>

            {/* Official Signatory */}
            <div className="pt-6 flex justify-end text-xs text-slate-800">
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

        {/* FORM 4: RENCANA TINDAK PENGENDALIAN (LAMPIRAN 2 SURAT RESMI BSKJI PUSAT) */}
        {activeFormId === 'form-4' && (
          <div className="space-y-6">
            {/* Official Document Sub-Header */}
            <div className="flex justify-between items-start text-[11px] font-mono text-slate-600 border-b border-slate-200 pb-2">
              <span>- 3 -</span>
              <div className="text-right space-y-0.5">
                <p>Lampiran 2 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
                <p>Nomor : BSKJI.1/RT/VIII/2026</p>
                <p>Tanggal : Agustus 2026</p>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wide">
                D. RENCANA TINDAK PENGENDALIAN
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                Unit Pemilik Risiko : Badan Standardisasi dan Kebijakan Jasa Industri
              </p>
              <p className="text-xs font-semibold text-slate-700">Tahun : 2026</p>
            </div>

            {/* Explanatory Audit Banner */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-blue-950">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Ketentuan Rencana Tindak Pengendalian (RTP) Permenperin No. 24 Tahun 2023:</span>
              </div>
              <p className="leading-relaxed">
                Penyusunan Rencana Tindak Pengendalian (RTP) baru diwajibkan untuk risiko yang masuk ke dalam Daftar Risiko Prioritas (yakni risiko yang besaran residunya melampaui selera risiko). Karena seluruh 45 risiko residu BSKJI Pusat telah berada di bawah batas selera risiko (skor ≤ 11), maka <strong>tidak ada Rencana Tindak Pengendalian baru yang diterbitkan terhadap Daftar Risiko Prioritas</strong>. Pengendalian yang ada tetap dijalankan secara disiplin melalui Prosedur Operasional Standar (SOP).
              </p>
            </div>

            {/* Official Table */}
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
                    <td className="p-3 border border-slate-300 font-mono">*</td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs font-bold text-slate-800 italic">
              *Tidak ada Rencana Tindak Pengendalian terhadap Daftar Risiko Prioritas
            </p>

            {/* Official Signatory */}
            <div className="pt-6 flex justify-end text-xs text-slate-800">
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

        {/* FORM 5: PEMANTAUAN KEGIATAN PENGENDALIAN (LAMPIRAN 3 SURAT RESMI BSKJI PUSAT) */}
        {activeFormId === 'form-5' && (
          <div className="space-y-6">
            {/* Official Document Sub-Header */}
            <div className="flex justify-between items-start text-[11px] font-mono text-slate-600 border-b border-slate-200 pb-2">
              <span>- 4 -</span>
              <div className="text-right space-y-0.5">
                <p>Lampiran 3 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
                <p>Nomor : BSKJI.1/RT/VIII/2026</p>
                <p>Tanggal : Agustus 2026</p>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wide">
                E. LAPORAN PEMANTAUAN KEGIATAN PENGENDALIAN
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                Unit Pemilik Risiko : Badan Standardisasi dan Kebijakan Jasa Industri
              </p>
              <p className="text-xs font-semibold text-slate-700">Tahun : 2026</p>
            </div>

            {/* Explanatory Audit Banner */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Pelaksanaan Pemantauan Kegiatan Pengendalian:</span>
              </div>
              <p className="leading-relaxed">
                Karena tidak ada Rencana Tindak Pengendalian (RTP) baru yang dibentuk terhadap Daftar Risiko Prioritas (seluruh risiko residu berada pada skor ≤ 11), maka pelaporan pemantauan terhadap kegiatan RTP dinyatakan <strong>nihil</strong>. Pemantauan terhadap pelaksanaan pengendalian eksisting (SOP, regulasi teknis, dan koordinasi internal) berjalan rutin di masing-masing satuan kerja.
              </p>
            </div>

            {/* Official Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                    <th className="p-2 border border-slate-300 w-12">No</th>
                    <th className="p-2 border border-slate-300 min-w-[180px]">Pernyataan Risiko</th>
                    <th className="p-2 border border-slate-300 min-w-[200px]">Kegiatan Pengendalian</th>
                    <th className="p-2 border border-slate-300 w-36">Penanggung Jawab</th>
                    <th className="p-2 border border-slate-300 min-w-[150px]">Indikator Keluaran</th>
                    <th className="p-2 border border-slate-300 w-24">Target Waktu</th>
                    <th className="p-2 border border-slate-300 w-28">Realisasi Waktu</th>
                    <th className="p-2 border border-slate-300 min-w-[160px]">Hambatan/ Kendala</th>
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-bold text-slate-700 bg-white">
                    <td className="p-3 border border-slate-300 font-mono">*</td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                    <td className="p-3 border border-slate-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs font-bold text-slate-800 italic">
              *Tidak ada Pemantauan Kegiatan Pengendalian terhadap Rencana Tindak Pengendalian
            </p>

            {/* Official Signatory */}
            <div className="pt-6 flex justify-end text-xs text-slate-800">
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

        {/* FORM 6: PEMANTAUAN PERISTIWA RISIKO SEMESTER I (LAMPIRAN 4 SURAT RESMI BSKJI PUSAT) */}
        {activeFormId === 'form-6' && (
          <div className="space-y-6">
            {/* Official Document Sub-Header */}
            <div className="flex justify-between items-start text-[11px] font-mono text-slate-600 border-b border-slate-200 pb-2">
              <span>- 5 s.d. 18 -</span>
              <div className="text-right space-y-0.5">
                <p>Lampiran 4 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
                <p>Nomor : BSKJI.1/RT/VIII/2026</p>
                <p>Tanggal : Agustus 2026</p>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wide">
                F. LAPORAN PEMANTAUAN PERISTIWA RISIKO SEMESTER I
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                Unit Pemilik Risiko : Badan Standardisasi dan Kebijakan Jasa Industri
              </p>
              <p className="text-xs font-semibold text-slate-700">Tahun : 2026</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-slate-900">Catatan Pemantauan Semester I TA 2026: </span>
                <span>Tercatat 34 peristiwa risiko aktual yang terjadi di 5 unit kerja BSKJI Pusat sesuai Lampiran 4.</span>
              </div>
              <span className="font-mono font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                34 Peristiwa Terdaftar
              </span>
            </div>

            {/* Official 34 Records Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                    <th className="p-2.5 border border-slate-300 w-12">No</th>
                    <th className="p-2.5 border border-slate-300 min-w-[220px]">Uraian Peristiwa</th>
                    <th className="p-2.5 border border-slate-300 min-w-[200px]">Pernyataan Risiko</th>
                    <th className="p-2.5 border border-slate-300 w-32">Waktu Kejadian</th>
                    <th className="p-2.5 border border-slate-300 w-36">Tempat Kejadian</th>
                    <th className="p-2.5 border border-slate-300 w-16 text-center">Skor Dampak</th>
                    <th className="p-2.5 border border-slate-300 min-w-[280px]">Penyebab Peristiwa</th>
                  </tr>
                  <tr className="bg-slate-50 text-[10px] font-mono text-slate-500 border-b border-slate-300 text-center">
                    <th className="p-1 border border-slate-300">1</th>
                    <th className="p-1 border border-slate-300">2</th>
                    <th className="p-1 border border-slate-300">3</th>
                    <th className="p-1 border border-slate-300">4</th>
                    <th className="p-1 border border-slate-300">5</th>
                    <th className="p-1 border border-slate-300">6</th>
                    <th className="p-1 border border-slate-300">7</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {OFFICIAL_RISK_EVENTS_SEMESTER_1.filter(
                    e => selectedUnit === 'ALL' || e.unit === selectedUnit
                  ).map((item, idx, arr) => {
                    const isFirstOfUnit =
                      idx === 0 || arr[idx - 1].unit !== item.unit;

                    return (
                      <React.Fragment key={item.no}>
                        {isFirstOfUnit && selectedUnit === 'ALL' && (
                          <tr className="bg-slate-200/80 font-bold text-slate-900">
                            <td colSpan={7} className="p-2.5 border border-slate-300 uppercase tracking-wide text-xs">
                              <span className="font-extrabold text-teal-900">
                                {item.unit} ({UNIT_INFO[item.unit]?.name || item.unit})
                              </span>
                            </td>
                          </tr>
                        )}
                        <tr className="hover:bg-slate-50 align-top transition">
                          <td className="p-2.5 border border-slate-300 text-center font-mono font-bold text-slate-800">
                            {item.no}.
                          </td>
                          <td className="p-2.5 border border-slate-300 text-slate-900 font-medium leading-relaxed">
                            {item.uraianPeristiwa}
                          </td>
                          <td className="p-2.5 border border-slate-300 text-slate-800 text-[11px] leading-relaxed">
                            {item.pernyataanRisiko}
                          </td>
                          <td className="p-2.5 border border-slate-300 text-slate-700 text-[11px]">
                            {item.waktuKejadian}
                          </td>
                          <td className="p-2.5 border border-slate-300 text-slate-700 text-[11px]">
                            {item.tempatKejadian}
                          </td>
                          <td className="p-2.5 border border-slate-300 text-center font-mono font-bold">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-xs ${
                                item.skorDampak === 2
                                  ? 'bg-amber-100 text-amber-900 font-extrabold'
                                  : 'bg-emerald-100 text-emerald-900'
                              }`}
                            >
                              {item.skorDampak}
                            </span>
                          </td>
                          <td className="p-2.5 border border-slate-300 text-slate-700 text-[11px] leading-relaxed">
                            <ul className="list-disc pl-4 space-y-1">
                              {item.penyebabPeristiwa.map((cause, cidx) => (
                                <li key={cidx}>{cause}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Official Signatory */}
            <div className="pt-6 flex justify-end text-xs text-slate-800">
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

        {/* FORM 7: PEMANTAUAN LEVEL RISIKO & DEVIASI */}
        {activeFormId === 'form-7' && (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                  <th className="p-2 border border-slate-300 w-12">No</th>
                  <th className="p-2 border border-slate-300 w-20">Kode</th>
                  <th className="p-2 border border-slate-300 w-52">Pernyataan Risiko</th>
                  <th className="p-2 border border-slate-300 w-24">Target Level Residu</th>
                  <th className="p-2 border border-slate-300 w-24">Realisasi Level Residu</th>
                  <th className="p-2 border border-slate-300 w-24">Status Deviasi</th>
                  <th className="p-2 border border-slate-300 w-52">Analisis Penyebab Deviasi</th>
                  <th className="p-2 border border-slate-300 w-44">Tindak Lanjut Penyesuaian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredRisks.map((r, idx) => (
                  <tr key={r.id} className="hover:bg-slate-50 align-top">
                    <td className="p-2 border border-slate-300 text-center font-mono font-semibold">{idx + 1}</td>
                    <td className="p-2 border border-slate-300 font-mono font-bold text-teal-700">{r.id}</td>
                    <td className="p-2 border border-slate-300 font-medium text-slate-900">{r.pernyataanRisiko}</td>
                    <td className="p-2 border border-slate-300 text-center font-semibold text-emerald-800">
                      Rendah (≤11)
                    </td>
                    <td className="p-2 border border-slate-300 text-center font-bold">
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        r.residualScore <= 11 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {r.residualLevel} ({r.residualScore})
                      </span>
                    </td>
                    <td className="p-2 border border-slate-300 text-center font-semibold">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        r.residualScore <= 11
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {r.residualScore <= 11 ? 'Sesuai Target' : 'Perlu Intervensi'}
                      </span>
                    </td>
                    <td className="p-2 border border-slate-300 text-[11px] text-slate-700">
                      {r.residualScore <= 11
                        ? 'Pengendalian internal berjalan efektif menekan probabilitas dan dampak.'
                        : 'Aktivitas pengendalian memerlukan penambahan intensitas pengawasan.'}
                    </td>
                    <td className="p-2 border border-slate-300 text-[11px] text-slate-800 font-medium">
                      {r.residualScore <= 11
                        ? 'Pertahankan prosedur operasional standar.'
                        : 'Laksanakan eskalasi percepatan RTP dan monitoring mingguan.'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Formal Signature Footer (Tata Naskah Dinas Lampiran Permenperin 24/2023) */}
        <div className="pt-8 border-t border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-slate-800 print:pt-4">
          <div className="space-y-16">
            <div>
              <p className="font-semibold text-slate-600">Disusun oleh:</p>
              <p className="font-bold text-slate-900">Koordinator Pengelola Risiko UPR</p>
              <p className="text-slate-600">BSKJI Pusat Kementerian Perindustrian</p>
            </div>
            <div className="pt-4 border-t border-slate-400 w-56">
              <p className="font-bold text-slate-900">(Koordinator Manajemen Risiko)</p>
              <p className="text-[11px] text-slate-500">NIP. ....................................................</p>
            </div>
          </div>

          <div className="space-y-16 sm:text-right">
            <div>
              <p className="font-semibold text-slate-600">Jakarta, 02 Januari 2026</p>
              <p className="font-bold text-slate-900">Mengetahui & Menyetujui:</p>
              <p className="font-bold text-slate-900 uppercase">Pemilik Risiko (Kepala Unit Kerja / UPR)</p>
            </div>
            <div className="pt-4 border-t border-slate-400 w-56 sm:ml-auto">
              <p className="font-bold text-slate-900">(Kepala Satuan Kerja / UPR)</p>
              <p className="text-[11px] text-slate-500">NIP. ....................................................</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
