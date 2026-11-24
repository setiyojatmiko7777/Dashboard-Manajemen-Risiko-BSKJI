import React from 'react';
import { KPICards } from '../KPICards';
import { ExecutiveSummaryBanner } from '../ExecutiveSummaryBanner';
import { RiskHeatmapMatrix } from '../RiskHeatmapMatrix';
import { InherentResidualChart } from '../InherentResidualChart';
import { RiskLevelReferenceCard } from '../RiskLevelReferenceCard';
import { RiskItem } from '../../types/risk';
import { KPIData } from '../../utils/riskCalculations';
import { ShieldAlert, ShieldCheck, ArrowRight, TrendingDown, Target, Building, Scale, BookOpen, ClipboardList } from 'lucide-react';
import { UNIT_INFO } from '../../data/unitInfo';
import { getRiskLevelInfo, PERMENPERIN_RISK_CRITERIA } from '../../data/permenperin24Info';

interface DashboardMainViewProps {
  risks: RiskItem[];
  kpi: KPIData;
  onSelectRisk: (risk: RiskItem) => void;
  onNavigateTab: (tab: any) => void;
  onFilterLevel: (level: string) => void;
}

export const DashboardMainView: React.FC<DashboardMainViewProps> = ({
  risks,
  kpi,
  onSelectRisk,
  onNavigateTab,
  onFilterLevel,
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Executive Summary Banner */}
      <ExecutiveSummaryBanner kpi={kpi} onNavigateToTab={onNavigateTab} />

      {/* 2. Permenperin No. 24 Tahun 2023 Compliance & Risk Appetite Snapshot */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-200">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Penerapan Selera Risiko BSKJI
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Tingkat Kepatuhan: {kpi.appetiteComplianceRate}%
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Penerapan Matriks 5x5 dan Batas Selera Risiko (Skor ≤ 11) di Lingkungan BSKJI Pusat
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateTab('permenperin_guide')}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-600" />
              <span>Pedoman MRPN</span>
            </button>
            <button
              onClick={() => onNavigateTab('permenperin_forms')}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
            >
              <ClipboardList className="w-3.5 h-3.5 text-teal-400" />
              <span>Formulir 1-7 Resmi</span>
            </button>
          </div>
        </div>

        {/* Appetite Cards & Category Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1: Inherent Above Appetite */}
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-1">
            <span className="text-[10px] uppercase font-bold text-rose-800">Risiko Melekat Di Luar Selera</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-mono font-extrabold text-rose-700">{kpi.aboveAppetiteInherentCount}</span>
              <span className="text-xs font-bold text-rose-600">{((kpi.aboveAppetiteInherentCount / (kpi.totalRisks || 1)) * 100).toFixed(0)}% Total</span>
            </div>
            <p className="text-[11px] text-slate-600">Skor awal ≥ 12 (Kuning, Orange, Merah) wajib dimitigasi.</p>
          </div>

          {/* Card 2: Residual In Appetite */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1">
            <span className="text-[10px] uppercase font-bold text-emerald-800">Risiko Residu Dalam Selera</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-mono font-extrabold text-emerald-700">{kpi.belowAppetiteResidualCount}</span>
              <span className="text-xs font-bold text-emerald-600">{kpi.appetiteComplianceRate}% Capaian</span>
            </div>
            <p className="text-[11px] text-slate-600">Skor residu ≤ 11 (Hijau & Biru) berhasil ditekan pengendalian.</p>
          </div>

          {/* Card 3: Residual Above Appetite */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1">
            <span className="text-[10px] uppercase font-bold text-amber-800">Sisa Di Luar Selera (Residu)</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-mono font-extrabold text-amber-700">{kpi.aboveAppetiteResidualCount}</span>
              <span className="text-xs font-bold text-emerald-600">0% Defisit</span>
            </div>
            <p className="text-[11px] text-slate-600">Seluruh risiko residu berhasil diturunkan ke bawah ambang batas.</p>
          </div>

          {/* Card 4: Kriteria Risiko Dominan */}
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1">
            <span className="text-[10px] uppercase font-bold text-blue-800">Kriteria Risiko BSKJI</span>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-base font-bold text-blue-900 leading-tight">Pencapaian Tujuan Organisasi</span>
              <span className="text-xs font-bold text-blue-700 font-mono shrink-0">
                {kpi.criteriaCounts['Pencapaian Tujuan Organisasi'] || 0} Item
              </span>
            </div>
            <p className="text-[11px] text-slate-600">Seluruh risiko BSKJI mengacu kriteria Permenperin 24/2023 Hal. 18.</p>
          </div>
        </div>

        {/* 5 Criteria Chip Row (Permenperin 24/2023 Hal. 18) */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-bold text-slate-500 mr-1">5 Kriteria Risiko (Hal. 18):</span>
          {PERMENPERIN_RISK_CRITERIA.map((crit) => {
            const count = kpi.criteriaCounts[crit.name] || 0;
            const isActive = count > 0;
            return (
              <span
                key={crit.id}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold ${
                  isActive
                    ? 'bg-teal-50 border-teal-200 text-teal-900'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}
              >
                <span>{crit.name}</span>
                <span
                  className={`font-mono font-bold px-1.5 py-0.2 rounded border text-[10px] ${
                    isActive
                      ? 'text-teal-700 bg-white border-teal-200'
                      : 'text-slate-400 bg-white border-slate-200'
                  }`}
                >
                  {count}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* 3. Top KPI Cards */}
      <KPICards kpi={kpi} onFilterLevel={onFilterLevel} />

      {/* 4. Tabel Klasifikasi Tingkat, Besaran Risiko & Warna Resmi Permenperin 24/2023 */}
      <RiskLevelReferenceCard kpi={kpi} onFilterLevel={onFilterLevel} />

      {/* 5. Visual Charts (Comparison & Top Risks) */}
      <InherentResidualChart risks={risks} />

      {/* 6. Interactive 5x5 Heatmap Matrix */}
      <RiskHeatmapMatrix risks={risks} onSelectRisk={onSelectRisk} />

      {/* 7. Top 5 Priority Risks Quick Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Pemantauan Risiko Melekat Awal Tertinggi
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Form 3 Resmi: Nihil
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Risiko dengan nilai inherent awal tertinggi yang berhasil dikendalikan ke level residu di bawah selera risiko (≤ 11)
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('priority')}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition self-start sm:self-auto"
          >
            <span>Status Resmi Form 3</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpi.topRisks.slice(0, 6).map((risk) => {
            const inhInfo = getRiskLevelInfo(risk.inherentScore);
            const resInfo = getRiskLevelInfo(risk.residualScore);
            return (
              <div
                key={risk.id}
                onClick={() => onSelectRisk(risk)}
                className="p-4 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-xs text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded border border-teal-200">
                      {risk.id}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {risk.unit}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-teal-700 transition">
                    {risk.pernyataanRisiko}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {risk.uraianDampak}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] text-slate-500">Inherent:</span>
                    <span className={`font-bold ${inhInfo.textColor}`}>{risk.inherentScore}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${inhInfo.badgeClass}`}>
                      {risk.inherentLevel}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] text-slate-500">Residu:</span>
                    <span className={`font-bold ${resInfo.textColor}`}>{risk.residualScore}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${resInfo.badgeClass}`}>
                      {risk.residualLevel}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    -{risk.scoreReduction}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

