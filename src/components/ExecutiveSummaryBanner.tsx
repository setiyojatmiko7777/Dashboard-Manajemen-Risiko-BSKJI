import React from 'react';
import { Sparkles, TrendingDown, ShieldCheck, AlertCircle, ArrowUpRight } from 'lucide-react';
import { KPIData } from '../utils/riskCalculations';

interface ExecutiveSummaryBannerProps {
  kpi: KPIData;
  onNavigateToTab?: (tab: string) => void;
}

export const ExecutiveSummaryBanner: React.FC<ExecutiveSummaryBannerProps> = ({
  kpi,
  onNavigateToTab,
}) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-5 sm:p-6 mb-6 shadow-lg border border-slate-700/50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Executive Narrative */}
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Executive Risk Summary TA 2026
              </span>
              <span className="text-xs text-slate-400">
                Update Resmi Peta Risiko BSKJI
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif tracking-tight text-white leading-snug">
              Portofolio Risiko BSKJI Pusat Menunjukkan Pengendalian Efektif dengan Reduksi Risiko Sebesar {kpi.avgReductionPercentage}%
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dari <strong className="text-teal-300">{kpi.totalRisks} risiko teridentifikasi</strong> pada 5 unit kerja, 
              sebanyak <strong className="text-amber-300">{kpi.aboveAppetiteInherentCount} risiko (skor ≥12)</strong> berada di luar selera risiko (level sedang & tinggi) sebelum pengendalian. 
              Implementasi kendali eksisting berhasil menurunkan seluruh profil risiko ke dalam batas aman selera risiko (skor residu ≤11), 
              sehingga <strong className="text-emerald-300">Risiko Prioritas menjadi Nihil (0 risiko)</strong> dan rata-rata skor turun dari <strong className="text-white">{kpi.avgInherentScore}</strong> menjadi <strong className="text-emerald-300">{kpi.avgResidualScore}</strong>.
            </p>
          </div>

          {/* Key Metric Highlights Box */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-xl p-3.5 text-center min-w-[110px]">
              <span className="text-[11px] font-medium text-slate-400 block uppercase">
                Reduksi Rata-rata
              </span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-sans">
                -{kpi.avgReductionPercentage}%
              </span>
              <span className="text-[10px] text-emerald-300/80 block mt-0.5">
                -{kpi.avgReductionScore} Poin Skor
              </span>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-xl p-3.5 text-center min-w-[110px]">
              <span className="text-[11px] font-medium text-slate-400 block uppercase">
                Kontrol Memadai
              </span>
              <span className="text-xl sm:text-2xl font-bold text-teal-300 font-sans">
                100%
              </span>
              <span className="text-[10px] text-teal-200/80 block mt-0.5">
                {kpi.controlAdequateCount} Pengendalian
              </span>
            </div>

            <div 
              onClick={() => onNavigateToTab?.('priority')}
              className="bg-slate-800/80 backdrop-blur-sm border border-emerald-500/40 hover:border-emerald-400/80 rounded-xl p-3.5 text-center min-w-[115px] transition cursor-pointer group"
              title="Klik untuk melihat rincian Formulir 3 Resmi (Nihil - Seluruh Residu ≤11)"
            >
              <span className="text-[11px] font-medium text-slate-300 block uppercase group-hover:text-emerald-300 transition">
                Risiko Prioritas
              </span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-sans flex items-center justify-center gap-1.5">
                0
                <span className="text-xs font-semibold text-emerald-300/90 font-mono tracking-tight">(Nihil)</span>
              </span>
              <span className="text-[10px] text-emerald-300/90 block mt-0.5 font-medium">
                Semua Masuk Selera
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
