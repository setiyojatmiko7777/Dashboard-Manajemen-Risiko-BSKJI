import React, { useState } from 'react';
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Eye,
  Info,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Building,
  Target
} from 'lucide-react';
import { RiskItem, SortField, SortDirection } from '../types/risk';

interface RiskRegisterTableProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onSortChange: (field: SortField) => void;
}

export const RiskRegisterTable: React.FC<RiskRegisterTableProps> = ({
  risks,
  onSelectRisk,
  sortField,
  sortDirection,
  onSortChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(risks.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedRisks = risks.slice(startIndex, startIndex + itemsPerPage);

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 opacity-60" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-3.5 h-3.5 text-teal-600" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-teal-600" />
    );
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Sangat Tinggi':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Tinggi':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Sedang':
        return 'bg-yellow-100 text-yellow-900 border-yellow-300';
      case 'Rendah':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Sangat Rendah':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      {/* Table Top Bar */}
      <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50/50">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Tabel Register Risiko BSKJI Pusat TA 2026
          </h3>
          <p className="text-xs text-slate-500">
            Daftar lengkap 45 risiko yang mencakup analisis inherent, existing control, dan residual score
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <span>Menampilkan</span>
          <span className="font-bold text-slate-900">
            {risks.length > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + itemsPerPage, risks.length)}
          </span>
          <span>dari</span>
          <span className="font-bold text-slate-900">{risks.length}</span>
          <span>risiko</span>
        </div>
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
              <th className="py-3.5 px-3 text-center w-12">No</th>
              <th
                onClick={() => onSortChange('id')}
                className="py-3.5 px-3 cursor-pointer hover:bg-slate-200/80 transition select-none w-24"
              >
                <div className="flex items-center space-x-1">
                  <span>ID</span>
                  {renderSortIcon('id')}
                </div>
              </th>
              <th
                onClick={() => onSortChange('unit')}
                className="py-3.5 px-3 cursor-pointer hover:bg-slate-200/80 transition select-none w-28"
              >
                <div className="flex items-center space-x-1">
                  <span>Unit Kerja</span>
                  {renderSortIcon('unit')}
                </div>
              </th>
              <th className="py-3.5 px-4 min-w-[240px]">
                Pernyataan Risiko & Dampak
              </th>
              <th
                onClick={() => onSortChange('inherentScore')}
                className="py-3.5 px-3 cursor-pointer hover:bg-slate-200/80 transition select-none text-center w-28"
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Inherent (P×D)</span>
                  {renderSortIcon('inherentScore')}
                </div>
              </th>
              <th className="py-3.5 px-3 min-w-[180px]">
                Pengendalian Eksisting
              </th>
              <th
                onClick={() => onSortChange('residualScore')}
                className="py-3.5 px-3 cursor-pointer hover:bg-slate-200/80 transition select-none text-center w-28"
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Residu (P×D)</span>
                  {renderSortIcon('residualScore')}
                </div>
              </th>
              <th
                onClick={() => onSortChange('scoreReduction')}
                className="py-3.5 px-3 cursor-pointer hover:bg-slate-200/80 transition select-none text-center w-24"
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Reduksi</span>
                  {renderSortIcon('scoreReduction')}
                </div>
              </th>
              <th className="py-3.5 px-3 text-center w-20">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {displayedRisks.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-slate-400 text-xs">
                  Tidak ada data risiko yang sesuai dengan kriteria filter yang diterapkan.
                </td>
              </tr>
            ) : (
              displayedRisks.map((risk, idx) => (
                <tr
                  key={risk.id}
                  className="hover:bg-slate-50/80 transition group"
                >
                  {/* Number */}
                  <td className="py-3 px-3 text-center font-medium text-slate-500">
                    {startIndex + idx + 1}
                  </td>

                  {/* ID */}
                  <td className="py-3 px-3">
                    <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/80">
                      {risk.id}
                    </span>
                    {risk.needsVerification && (
                      <span
                        className="ml-1 text-[10px] text-amber-600 cursor-help"
                        title={risk.verificationNote || 'Perlu verifikasi'}
                      >
                        ⚠️
                      </span>
                    )}
                  </td>

                  {/* Unit */}
                  <td className="py-3 px-3">
                    <span className="font-semibold text-slate-800 block">{risk.unit}</span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[100px]" title={risk.pengelola}>
                      {risk.pengelola}
                    </span>
                  </td>

                  {/* Risk Statement */}
                  <td className="py-3 px-4">
                    <p className="font-medium text-slate-900 leading-snug">
                      {risk.pernyataanRisiko}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 italic">
                      Dampak: {risk.uraianDampak}
                    </p>
                  </td>

                  {/* Inherent Score */}
                  <td className="py-3 px-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-sm text-slate-900">
                        {risk.inherentScore}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        ({risk.inherentProbability}×{risk.inherentImpact})
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.2 rounded mt-0.5 border ${getLevelBadgeClass(risk.inherentLevel)}`}>
                        {risk.inherentLevel}
                      </span>
                    </div>
                  </td>

                  {/* Controls */}
                  <td className="py-3 px-3">
                    <div className="space-y-1">
                      <div className="text-[11px] text-slate-800 line-clamp-2">
                        {risk.controlDescription[0]}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.2 rounded border border-teal-200">
                        <ShieldCheck className="w-3 h-3 text-teal-600" />
                        {risk.controlAdequacy}
                      </span>
                    </div>
                  </td>

                  {/* Residual Score */}
                  <td className="py-3 px-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-sm text-emerald-700">
                        {risk.residualScore}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        ({risk.residualProbability}×{risk.residualImpact})
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.2 rounded mt-0.5 border ${getLevelBadgeClass(risk.residualLevel)}`}>
                        {risk.residualLevel}
                      </span>
                    </div>
                  </td>

                  {/* Reduction */}
                  <td className="py-3 px-3 text-center">
                    <span className="font-bold text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                      -{risk.scoreReduction}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={() => onSelectRisk(risk)}
                      className="inline-flex items-center justify-center p-1.5 rounded-lg bg-slate-100 hover:bg-teal-600 text-slate-600 hover:text-white transition shadow-2xs group"
                      title="Lihat Detail Lengkap"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/60">
          <div className="text-xs text-slate-500">
            Halaman <span className="font-bold text-slate-800">{currentPage}</span> dari{' '}
            <span className="font-bold text-slate-800">{totalPages}</span>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition ${
                  currentPage === i + 1
                    ? 'bg-teal-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
