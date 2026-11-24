import React from 'react';
import { RiskItem } from '../../types/risk';
import { Activity, Target, CheckCircle2, AlertTriangle, AlertCircle, ArrowUpRight } from 'lucide-react';

interface IndicatorMonitoringViewProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
}

export const IndicatorMonitoringView: React.FC<IndicatorMonitoringViewProps> = ({
  risks,
  onSelectRisk,
}) => {
  // Extract unique indicators
  const indicatorMap = new Map<string, RiskItem[]>();
  risks.forEach(r => {
    const list = indicatorMap.get(r.indikatorKinerja) || [];
    list.push(r);
    indicatorMap.set(r.indikatorKinerja, list);
  });

  const uniqueIndicators = Array.from(indicatorMap.entries()).map(([name, items]) => {
    const first = items[0];
    return {
      name,
      unit: first.unit,
      sasaran: first.sasaranStrategis,
      target: first.target,
      realisasi: first.realisasi || 'Belum tersedia',
      capaian: first.capaian || 'Belum tersedia',
      capaianPercentage: first.capaianPercentage,
      status: first.indicatorStatus,
      risks: items,
    };
  });

  return (
    <div className="space-y-6">
      {/* Header Summary */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Monitoring Indikator Kinerja Utama & Capaian Sasaran
            </h3>
            <p className="text-xs text-slate-500">
              Pemantauan target kinerja, capaian realisasi, serta risiko-risiko yang mempengaruhi ketercapaian target
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {uniqueIndicators.map((ind, idx) => {
          const isIntervensi = ind.status === 'Perlu Intervensi';
          const isPerhatian = ind.status === 'Perlu Perhatian';

          return (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-5 shadow-sm flex flex-col justify-between transition hover:shadow-md ${
                isIntervensi
                  ? 'border-rose-300 ring-1 ring-rose-200'
                  : isPerhatian
                  ? 'border-amber-300'
                  : 'border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {ind.unit}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      isIntervensi
                        ? 'bg-rose-100 text-rose-800'
                        : isPerhatian
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {ind.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {ind.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Sasaran: {ind.sasaran}
                </p>

                {/* Target vs Realization bar */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Target</span>
                    <span className="font-bold text-slate-800">{ind.target}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Realisasi</span>
                    <span className="font-bold text-slate-800">{ind.realisasi}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Capaian</span>
                    <span
                      className={`font-bold ${
                        isIntervensi ? 'text-rose-600' : isPerhatian ? 'text-amber-600' : 'text-emerald-600'
                      }`}
                    >
                      {ind.capaian}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Risks List */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Risiko Terkait ({ind.risks.length} Risiko):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.risks.map(r => (
                    <button
                      key={r.id}
                      onClick={() => onSelectRisk(r)}
                      className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-slate-100 text-slate-700 hover:bg-teal-600 hover:text-white transition"
                      title={r.pernyataanRisiko}
                    >
                      {r.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
