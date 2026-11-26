import React from 'react';
import { Filter, RotateCcw, Search, Building, AlertCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { FilterState, RiskLevel, ControlAdequacy } from '../types/risk';

interface GlobalFilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  availableSasaran: string[];
  totalRecords: number;
  filteredCount: number;
}

export const GlobalFilterBar: React.FC<GlobalFilterBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  availableSasaran,
  totalRecords,
  filteredCount,
}) => {
  const isFiltered =
    filters.search !== '' ||
    filters.unit !== 'ALL' ||
    filters.sasaranStrategis !== 'ALL' ||
    filters.inherentLevel !== 'ALL' ||
    filters.residualLevel !== 'ALL' ||
    filters.controlAdequacy !== 'ALL' ||
    (filters.kriteriaRisiko && filters.kriteriaRisiko !== 'ALL') ||
    (filters.seleraRisiko && filters.seleraRisiko !== 'ALL');

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3.5 mb-6">
      {/* Top row: Title and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-teal-50 text-teal-700 rounded-lg border border-teal-200">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Filter
            </h3>
            <p className="text-[11px] text-slate-500">
              Menampilkan {filteredCount} dari total {totalRecords} risiko teridentifikasi (Permenperin 24/2023)
            </p>
          </div>
        </div>

        {/* Search input & Reset */}
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.search}
              onChange={e => onFilterChange({ search: e.target.value })}
              placeholder="Cari pernyataan risiko, indikator, proses bisnis..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800 transition placeholder:text-slate-400"
            />
          </div>

          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition flex-shrink-0"
              title="Reset seluruh filter ke kondisi awal"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Select Controls Grid (7 filters) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-1 border-t border-slate-100">
        {/* Unit Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Unit Kerja:
          </label>
          <select
            value={filters.unit}
            onChange={e => onFilterChange({ unit: e.target.value })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-medium"
          >
            <option value="ALL">Semua Unit (5)</option>
            <option value="PIH">PIH (8 Risiko)</option>
            <option value="POPTIKJI">POPTIKJI (10 Risiko)</option>
            <option value="PPSI">PPSI (7 Risiko)</option>
            <option value="PPPPSI">PPPPSI (8 Risiko)</option>
            <option value="Sekretariat">Sekretariat (12 Risiko)</option>
          </select>
        </div>

        {/* Kriteria Risiko Permenperin 24/2023 Hal. 18 Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Kriteria Risiko:
          </label>
          <select
            value={filters.kriteriaRisiko || 'ALL'}
            onChange={e => onFilterChange({ kriteriaRisiko: e.target.value })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-medium truncate"
          >
            <option value="ALL">Semua Kriteria (5)</option>
            <option value="Pencapaian Tujuan Organisasi">Pencapaian Tujuan Organisasi</option>
            <option value="Beban Keuangan Negara">Beban Keuangan Negara</option>
            <option value="Reputasi Organisasi">Reputasi Organisasi</option>
            <option value="Kesehatan dan Keselamatan Kerja (K3)">Kesehatan dan Keselamatan Kerja (K3)</option>
            <option value="Temuan Pemeriksaan / Auditor">Temuan Pemeriksaan / Auditor</option>
          </select>
        </div>

        {/* Selera Risiko Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Batas Selera:
          </label>
          <select
            value={filters.seleraRisiko || 'ALL'}
            onChange={e => onFilterChange({ seleraRisiko: e.target.value })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-medium truncate"
          >
            <option value="ALL">Semua Selera</option>
            <option value="Dalam Selera">Dalam Selera (≤11)</option>
            <option value="Di Luar Selera">Di Luar Selera (≥12)</option>
          </select>
        </div>

        {/* Inherent Risk Level Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Level Inherent:
          </label>
          <select
            value={filters.inherentLevel}
            onChange={e => onFilterChange({ inherentLevel: e.target.value as RiskLevel | 'ALL' })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-medium"
          >
            <option value="ALL">Semua Level</option>
            <option value="Sangat Tinggi">Sangat Tinggi (20–25) • Merah</option>
            <option value="Tinggi">Tinggi (15–19) • Orange</option>
            <option value="Sedang">Sedang (12–14) • Kuning</option>
            <option value="Rendah">Rendah (7–11) • Hijau</option>
            <option value="Sangat Rendah">Sangat Rendah (1–6) • Biru</option>
          </select>
        </div>

        {/* Residual Risk Level Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Level Residual:
          </label>
          <select
            value={filters.residualLevel}
            onChange={e => onFilterChange({ residualLevel: e.target.value as RiskLevel | 'ALL' })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-medium"
          >
            <option value="ALL">Semua Residu</option>
            <option value="Sangat Tinggi">Sangat Tinggi (20–25) • Merah</option>
            <option value="Tinggi">Tinggi (15–19) • Orange</option>
            <option value="Sedang">Sedang (12–14) • Kuning</option>
            <option value="Rendah">Rendah (7–11) • Hijau</option>
            <option value="Sangat Rendah">Sangat Rendah (1–6) • Biru</option>
          </select>
        </div>

        {/* Control Adequacy Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Kecukupan Kendali:
          </label>
          <select
            value={filters.controlAdequacy}
            onChange={e => onFilterChange({ controlAdequacy: e.target.value as ControlAdequacy | 'ALL' })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-medium"
          >
            <option value="ALL">Semua Kendali</option>
            <option value="Memadai">Memadai (100%)</option>
            <option value="Belum Memadai">Belum Memadai</option>
          </select>
        </div>

        {/* Sasaran Strategis Filter */}
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1 truncate">
            Sasaran Strategis:
          </label>
          <select
            value={filters.sasaranStrategis}
            onChange={e => onFilterChange({ sasaranStrategis: e.target.value })}
            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 truncate font-medium"
          >
            <option value="ALL">Semua Sasaran</option>
            {availableSasaran.map(sasaran => (
              <option key={sasaran} value={sasaran}>
                {sasaran.length > 25 ? `${sasaran.substring(0, 25)}...` : sasaran}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
