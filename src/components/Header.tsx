import React from 'react';
import { ShieldCheck, Building2, Calendar, FileSpreadsheet, Printer, Download, Sparkles } from 'lucide-react';
import { DOCUMENT_METADATA } from '../data/unitInfo';
import { exportToCSV, exportToJSON, triggerPrint } from '../utils/exportUtils';
import { RiskItem } from '../types/risk';

interface HeaderProps {
  filteredRisks: RiskItem[];
  totalRisks: number;
  onOpenInsights?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ filteredRisks, totalRisks, onOpenInsights }) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & Main Title */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-900/30 flex-shrink-0 border border-teal-400/30">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  TA 2026
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Kementerian Perindustrian RI
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif">
                DASHBOARD MANAJEMEN RISIKO BSKJI PUSAT
              </h1>
              <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-teal-400" />
                <span className="font-medium text-teal-300">Unit Pemilik Risiko:</span> {DOCUMENT_METADATA.organization}
              </p>
            </div>
          </div>

          {/* Quick Actions & Metadata */}
          <div className="flex items-center flex-wrap gap-2.5">
            {/* Quick Filtered Count Badge */}
            <div className="hidden lg:flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
              <span className="text-slate-400">Data Terfilter:</span>
              <span className="font-bold text-teal-300">{filteredRisks.length}</span>
              <span className="text-slate-500">/ {totalRisks} Risiko</span>
            </div>

            {/* AI Insights Button */}
            {onOpenInsights && (
              <button
                onClick={onOpenInsights}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium transition shadow-sm"
                title="Lihat Executive Risk Insights"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Risk Insights</span>
              </button>
            )}

            {/* Export CSV */}
            <button
              onClick={() => exportToCSV(filteredRisks)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition shadow-sm"
              title="Unduh Data Risk Register (CSV / Excel)"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            {/* Export JSON */}
            <button
              onClick={() => exportToJSON(filteredRisks)}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium transition"
              title="Unduh Raw Data JSON"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">JSON</span>
            </button>

            {/* Print / Report */}
            <button
              onClick={triggerPrint}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium transition"
              title="Cetak Halaman / Laporan"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden sm:inline">Cetak</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
