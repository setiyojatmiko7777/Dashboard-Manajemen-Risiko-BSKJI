import React from 'react';
import { RiskHeatmapMatrix } from '../RiskHeatmapMatrix';
import { RiskItem } from '../../types/risk';
import { Grid3X3, ArrowRight, TrendingDown, Layers, ShieldCheck } from 'lucide-react';

interface HeatmapViewProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
}

export const HeatmapView: React.FC<HeatmapViewProps> = ({ risks, onSelectRisk }) => {
  // Compute level breakdowns
  const inherentHigh = risks.filter(r => r.inherentLevel === 'Sangat Tinggi' || r.inherentLevel === 'Tinggi').length;
  const inherentMedium = risks.filter(r => r.inherentLevel === 'Sedang').length;
  const inherentLow = risks.filter(r => r.inherentLevel === 'Rendah' || r.inherentLevel === 'Sangat Rendah').length;

  const residualHigh = risks.filter(r => r.residualLevel === 'Sangat Tinggi' || r.residualLevel === 'Tinggi').length;
  const residualMedium = risks.filter(r => r.residualLevel === 'Sedang').length;
  const residualLow = risks.filter(r => r.residualLevel === 'Rendah' || r.residualLevel === 'Sangat Rendah').length;

  return (
    <div className="space-y-6">
      {/* Overview Cards: Shift Analysis */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-teal-600" />
          Analisis Migrasi Matriks Risiko (Inherent vs Residual Shift)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* High level migration */}
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
            <span className="text-xs font-bold text-rose-800 uppercase">
              Risiko Level Tinggi & Sangat Tinggi
            </span>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-500 block">Sebelum Kendali</span>
                <span className="text-2xl font-bold text-rose-600">{inherentHigh}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-rose-400" />
              <div>
                <span className="text-[10px] text-slate-500 block">Setelah Kendali</span>
                <span className="text-2xl font-bold text-emerald-600">{residualHigh}</span>
              </div>
            </div>
            <p className="text-[11px] text-rose-700 font-medium pt-1 border-t border-rose-200">
              Penurunan 100% risiko tingkat tinggi ke zona toleransi.
            </p>
          </div>

          {/* Medium level migration */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase">
              Risiko Level Sedang
            </span>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-500 block">Sebelum Kendali</span>
                <span className="text-2xl font-bold text-amber-600">{inherentMedium}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[10px] text-slate-500 block">Setelah Kendali</span>
                <span className="text-2xl font-bold text-amber-700">{residualMedium}</span>
              </div>
            </div>
            <p className="text-[11px] text-amber-700 font-medium pt-1 border-t border-amber-200">
              Menjadi fokus utama pemantauan berkala unit kerja.
            </p>
          </div>

          {/* Low level migration */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase">
              Risiko Level Rendah & Sangat Rendah
            </span>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-500 block">Sebelum Kendali</span>
                <span className="text-2xl font-bold text-slate-600">{inherentLow}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-2xl font-bold text-emerald-600">{residualLow}</span>
              </div>
            </div>
            <p className="text-[11px] text-emerald-700 font-medium pt-1 border-t border-emerald-200">
              Peningkatan {residualLow - inherentLow} risiko ke zona aman.
            </p>
          </div>
        </div>
      </div>

      {/* Main Heatmap Matrix Component */}
      <RiskHeatmapMatrix risks={risks} onSelectRisk={onSelectRisk} />
    </div>
  );
};
