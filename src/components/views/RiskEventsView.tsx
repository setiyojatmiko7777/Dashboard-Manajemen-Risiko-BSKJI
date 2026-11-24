import React, { useState, useMemo } from 'react';
import {
  OFFICIAL_RISK_EVENTS_SEMESTER_1,
  RISK_EVENT_DOCUMENT_META,
  RiskEventItem,
} from '../../data/riskEventsData';
import {
  AlertTriangle,
  Search,
  Building2,
  Calendar,
  MapPin,
  Printer,
  FileSpreadsheet,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { UNIT_INFO } from '../../data/unitInfo';

export const RiskEventsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<string>('ALL');
  const [selectedImpact, setSelectedImpact] = useState<string>('ALL');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const filteredEvents = useMemo(() => {
    return OFFICIAL_RISK_EVENTS_SEMESTER_1.filter(item => {
      const matchUnit = selectedUnit === 'ALL' || item.unit === selectedUnit;
      const matchImpact =
        selectedImpact === 'ALL' || item.skorDampak.toString() === selectedImpact;

      const q = searchTerm.toLowerCase();
      const matchSearch =
        !searchTerm.trim() ||
        item.uraianPeristiwa.toLowerCase().includes(q) ||
        item.pernyataanRisiko.toLowerCase().includes(q) ||
        item.tempatKejadian.toLowerCase().includes(q) ||
        item.waktuKejadian.toLowerCase().includes(q) ||
        item.penyebabPeristiwa.some(p => p.toLowerCase().includes(q));

      return matchUnit && matchImpact && matchSearch;
    });
  }, [searchTerm, selectedUnit, selectedImpact]);

  // Counts by unit
  const unitCounts = useMemo(() => {
    const map: Record<string, number> = {
      PIH: 0,
      POPTIKJI: 0,
      PPSI: 0,
      PPPPSI: 0,
      Sekretariat: 0,
    };
    OFFICIAL_RISK_EVENTS_SEMESTER_1.forEach(e => {
      map[e.unit] = (map[e.unit] || 0) + 1;
    });
    return map;
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-teal-300 font-mono">
                Lampiran 4 • No: {RISK_EVENT_DOCUMENT_META.nomor}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Laporan Resmi BSKJI Pusat
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              Laporan Pemantauan Peristiwa Risiko Semester I Tahun 2026
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Dokumentasi 34 kejadian peristiwa risiko riil yang teridentifikasi selama pelaksanaan program Semester I TA 2026.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span>Cetak Laporan Resmi</span>
            </button>
          </div>
        </div>

        {/* Statistical Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Peristiwa</span>
            <span className="text-xl font-mono font-extrabold text-teal-700">34</span>
            <span className="text-[10px] text-slate-500 block">Semester I 2026</span>
          </div>
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-800 block">PIH</span>
            <span className="text-xl font-mono font-extrabold text-emerald-700">{unitCounts.PIH}</span>
            <span className="text-[10px] text-emerald-600 block">Peristiwa</span>
          </div>
          <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-blue-800 block">POPTIKJI</span>
            <span className="text-xl font-mono font-extrabold text-blue-700">{unitCounts.POPTIKJI}</span>
            <span className="text-[10px] text-blue-600 block">Peristiwa</span>
          </div>
          <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-indigo-800 block">PPSI</span>
            <span className="text-xl font-mono font-extrabold text-indigo-700">{unitCounts.PPSI}</span>
            <span className="text-[10px] text-indigo-600 block">Peristiwa</span>
          </div>
          <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-amber-800 block">PPPPSI</span>
            <span className="text-xl font-mono font-extrabold text-amber-700">{unitCounts.PPPPSI}</span>
            <span className="text-[10px] text-amber-600 block">Peristiwa</span>
          </div>
          <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-purple-800 block">Sekretariat</span>
            <span className="text-xl font-mono font-extrabold text-purple-700">{unitCounts.Sekretariat}</span>
            <span className="text-[10px] text-purple-600 block">Peristiwa</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 pt-3 border-t border-slate-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Cari uraian peristiwa, pernyataan risiko, tempat kejadian, atau penyebab..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 text-slate-800 font-medium"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedUnit}
                onChange={e => setSelectedUnit(e.target.value)}
                className="bg-transparent border-none focus:outline-hidden text-slate-800 font-bold cursor-pointer"
              >
                <option value="ALL">Semua Unit (34)</option>
                <option value="PIH">PIH (13)</option>
                <option value="POPTIKJI">POPTIKJI (6)</option>
                <option value="PPSI">PPSI (2)</option>
                <option value="PPPPSI">PPPPSI (4)</option>
                <option value="Sekretariat">Sekretariat (9)</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedImpact}
                onChange={e => setSelectedImpact(e.target.value)}
                className="bg-transparent border-none focus:outline-hidden text-slate-800 font-bold cursor-pointer"
              >
                <option value="ALL">Semua Skor Dampak</option>
                <option value="1">Skor Dampak 1 (Rendah)</option>
                <option value="2">Skor Dampak 2 (Sedang)</option>
              </select>
            </div>

            {(searchTerm || selectedUnit !== 'ALL' || selectedImpact !== 'ALL') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedUnit('ALL');
                  setSelectedImpact('ALL');
                }}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold px-2 py-1"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* DOCUMENT PAPER VIEW (Lampiran 4 Resmi) */}
      <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
        {/* Header Format Dokumen Resmi BSKJI Pusat */}
        <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
          <div className="flex justify-between items-start text-[11px] font-mono text-slate-600">
            <span>- 5 s.d. 18 -</span>
            <div className="text-right space-y-0.5">
              <p>Lampiran 4 : Penyampaian Pemantauan Risiko Eselon I BSKJI Pusat Semester I Tahun 2026</p>
              <p>Nomor : BSKJI.1/RT/VIII/2026</p>
              <p>Tanggal : Agustus 2026</p>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold tracking-wider text-slate-900 uppercase pt-2">
            F. LAPORAN PEMANTAUAN PERISTIWA RISIKO SEMESTER I
          </h3>
          <div className="text-xs font-semibold text-slate-700 space-y-0.5">
            <p>Unit Pemilik Risiko : Badan Standardisasi dan Kebijakan Jasa Industri (BSKJI)</p>
            <p>Tahun : 2026</p>
          </div>
        </div>

        {/* Table of 34 Risk Events */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 text-center">
                <th className="p-2.5 border border-slate-300 w-12">No</th>
                <th className="p-2.5 border border-slate-300 w-64">Uraian Peristiwa</th>
                <th className="p-2.5 border border-slate-300 w-60">Pernyataan Risiko</th>
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
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    Tidak ditemukan peristiwa risiko yang sesuai dengan filter.
                  </td>
                </tr>
              ) : (
                filteredEvents.map((item, idx) => {
                  const isFirstOfUnit =
                    idx === 0 || filteredEvents[idx - 1].unit !== item.unit;

                  return (
                    <React.Fragment key={item.no}>
                      {isFirstOfUnit && selectedUnit === 'ALL' && (
                        <tr className="bg-slate-100/90 font-bold text-slate-900">
                          <td
                            colSpan={7}
                            className="p-2.5 border border-slate-300 uppercase tracking-wide text-xs bg-slate-200/70"
                          >
                            <span className="font-extrabold text-teal-800">
                              UNIT KERJA: {UNIT_INFO[item.unit]?.name || item.unit} ({item.unit})
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
                        <td className="p-2.5 border border-slate-300 text-slate-700 text-[11px] font-medium">
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
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Formal Signature Block */}
        <div className="pt-8 border-t border-slate-300 flex justify-end text-xs text-slate-800 print:pt-4">
          <div className="w-72 space-y-16 text-center">
            <div>
              <p className="font-semibold text-slate-600">
                {RISK_EVENT_DOCUMENT_META.penandatangan.tempat},{' '}
                {RISK_EVENT_DOCUMENT_META.penandatangan.tanggal}
              </p>
              <p className="font-bold text-slate-900 mt-1">
                {RISK_EVENT_DOCUMENT_META.penandatangan.jabatan}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-400">
              <p className="font-bold text-slate-900">
                {RISK_EVENT_DOCUMENT_META.penandatangan.nama}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
