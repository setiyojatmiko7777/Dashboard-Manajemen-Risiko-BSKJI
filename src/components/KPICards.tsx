import React from 'react';
import {
  Layers,
  Flame,
  AlertTriangle,
  ShieldCheck,
  CheckCircle,
  XCircle,
  TrendingDown,
  Gauge
} from 'lucide-react';
import { KPIData } from '../utils/riskCalculations';

interface KPICardsProps {
  kpi: KPIData;
  onFilterLevel?: (level: string) => void;
}

export const KPICards: React.FC<KPICardsProps> = ({ kpi, onFilterLevel }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* 1. Total Risks */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-teal-300 transition group">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Total Risiko
          </span>
          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-600 transition">
            <Layers className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans tracking-tight">
            {kpi.totalRisks}
          </div>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            5 Unit Kerja
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 line-clamp-1">
          Peta Risiko Eselon I BSKJI 2026
        </p>
      </div>

      {/* 2. High Level Risks */}
      <div
        onClick={() => onFilterLevel && onFilterLevel('Tinggi')}
        className="bg-white border border-orange-200 rounded-2xl p-4 shadow-sm hover:border-orange-300 hover:shadow-md transition cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
            Risiko Level Tinggi
          </span>
          <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition">
            <Flame className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-orange-600 font-sans tracking-tight">
            {kpi.highRiskCount}
          </div>
          <span className="text-[11px] font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
            {kpi.totalRisks > 0 ? ((kpi.highRiskCount / kpi.totalRisks) * 100).toFixed(0) : 0}% portofolio
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 flex items-center justify-between">
          <span>Inherent (Skor 15-25)</span>
          <span className="text-orange-600 font-medium">Residu Tinggi: {kpi.highResidualCount}</span>
        </p>
      </div>

      {/* 3. Medium Level Risks */}
      <div
        onClick={() => onFilterLevel && onFilterLevel('Sedang')}
        className="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm hover:border-amber-300 hover:shadow-md transition cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Risiko Level Sedang
          </span>
          <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition">
            <AlertTriangle className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-amber-600 font-sans tracking-tight">
            {kpi.mediumRiskCount}
          </div>
          <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            {kpi.totalRisks > 0 ? ((kpi.mediumRiskCount / kpi.totalRisks) * 100).toFixed(0) : 0}% portofolio
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 flex items-center justify-between">
          <span>Inherent (Skor 12-14)</span>
          <span className="text-amber-600 font-medium">Residu Sedang: {kpi.mediumResidualCount}</span>
        </p>
      </div>

      {/* 4. Low Level Risks */}
      <div
        onClick={() => onFilterLevel && onFilterLevel('Rendah')}
        className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Risiko Rendah / Sangat Rendah
          </span>
          <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition">
            <CheckCircle className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-sans tracking-tight">
            {kpi.lowRiskCount}
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            {kpi.totalRisks > 0 ? ((kpi.lowRiskCount / kpi.totalRisks) * 100).toFixed(0) : 0}% portofolio
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 flex items-center justify-between">
          <span>Inherent (Skor 1-11)</span>
          <span className="text-emerald-600 font-medium">Residu Rendah: {kpi.lowResidualCount}</span>
        </p>
      </div>

      {/* 5. Control Adequacy */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-teal-300 transition">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Pengendalian Memadai
          </span>
          <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-teal-700 font-sans tracking-tight">
            {kpi.controlAdequateCount}
          </div>
          <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
            {kpi.controlAdequatePercentage}%
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2">
          Seluruh risiko memiliki kontrol teridentifikasi
        </p>
      </div>

      {/* 6. Inadequate Control */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-teal-300 transition">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Pengendalian Belum Memadai
          </span>
          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
            <XCircle className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-slate-700 font-sans tracking-tight">
            {kpi.controlInadequateCount}
          </div>
          <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
            0% (Nihil)
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2">
          Sesuai dokumen sumber (100% Memadai)
        </p>
      </div>

      {/* 7. Average Risk Score */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-teal-300 transition">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Rata-rata Skor Risiko
          </span>
          <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Gauge className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-slate-800 font-sans tracking-tight">
            {kpi.avgInherentScore}
          </div>
          <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
            Residu: {kpi.avgResidualScore}
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2">
          Inherent: {kpi.avgInherentScore} → Residu: {kpi.avgResidualScore}
        </p>
      </div>

      {/* 8. Average Score Reduction */}
      <div className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-sm hover:border-emerald-300 transition bg-gradient-to-br from-white to-emerald-50/30">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Rata-rata Penurunan Risiko
          </span>
          <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <TrendingDown className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-emerald-700 font-sans tracking-tight">
            -{kpi.avgReductionScore}
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
            -{kpi.avgReductionPercentage}%
          </span>
        </div>
        <p className="text-[11px] text-emerald-700 mt-2 font-medium">
          Dampak efektivitas pengendalian terpasang
        </p>
      </div>
    </div>
  );
};
