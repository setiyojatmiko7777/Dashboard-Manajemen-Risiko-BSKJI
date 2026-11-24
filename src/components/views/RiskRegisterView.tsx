import React from 'react';
import { RiskRegisterTable } from '../RiskRegisterTable';
import { RiskItem, SortField, SortDirection } from '../../types/risk';
import { FileSpreadsheet, Download, Filter, Layers } from 'lucide-react';
import { exportToCSV, exportToJSON } from '../../utils/exportUtils';

interface RiskRegisterViewProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onSortChange: (field: SortField) => void;
}

export const RiskRegisterView: React.FC<RiskRegisterViewProps> = ({
  risks,
  onSelectRisk,
  sortField,
  sortDirection,
  onSortChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Header action panel */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-base font-bold text-slate-900 font-serif">
            Daftar Lengkap Register Risiko (45 Risiko BSKJI Pusat)
          </h2>
          <p className="text-xs text-slate-500">
            Tabel komprehensif memuat seluruh identifikasi risiko, akar penyebab, skor probabilitas-dampak, dan pengendalian.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => exportToCSV(risks)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Download CSV / Excel</span>
          </button>
          <button
            onClick={() => exportToJSON(risks)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Raw JSON</span>
          </button>
        </div>
      </div>

      {/* Main Register Table */}
      <RiskRegisterTable
        risks={risks}
        onSelectRisk={onSelectRisk}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={onSortChange}
      />
    </div>
  );
};
