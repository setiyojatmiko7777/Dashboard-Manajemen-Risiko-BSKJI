import React from 'react';
import { X, Sparkles, AlertTriangle, TrendingDown, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { RiskInsight } from '../utils/riskCalculations';

interface RiskInsightsPanelProps {
  insights: RiskInsight[];
  isOpen: boolean;
  onClose: () => void;
  onSelectInsightRisks?: (riskIds: string[]) => void;
}

export const RiskInsightsPanel: React.FC<RiskInsightsPanelProps> = ({
  insights,
  isOpen,
  onClose,
  onSelectInsightRisks,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-teal-500/20 text-teal-300 rounded-xl border border-teal-500/30">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-serif">
                Executive Risk Insights & Rekomendasi
              </h3>
              <p className="text-xs text-slate-300">
                Temuan analitis otomatis berbasis data portofolio Peta Risiko 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body list of insights */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {insights.map((insight, idx) => {
            const isAlert = insight.type === 'alert';
            const isWarning = insight.type === 'warning';
            const isSuccess = insight.type === 'success';

            const borderClass = isAlert
              ? 'border-rose-200 bg-rose-50/40'
              : isWarning
              ? 'border-amber-200 bg-amber-50/40'
              : isSuccess
              ? 'border-emerald-200 bg-emerald-50/40'
              : 'border-slate-200 bg-slate-50/50';

            const badgeBg = isAlert
              ? 'bg-rose-100 text-rose-800'
              : isWarning
              ? 'bg-amber-100 text-amber-800'
              : isSuccess
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-teal-100 text-teal-800';

            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border ${borderClass} space-y-2 transition hover:shadow-xs`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    {isAlert && <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />}
                    {isWarning && <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />}
                    {isSuccess && <TrendingDown className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                    {!isAlert && !isWarning && !isSuccess && <Info className="w-4 h-4 text-teal-600 flex-shrink-0" />}
                    <h4 className="text-xs font-bold text-slate-900">{insight.title}</h4>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${badgeBg} flex-shrink-0`}>
                    {insight.metric}
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {insight.description}
                </p>

                {insight.relatedRiskIds.length > 0 && onSelectInsightRisks && (
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200/60">
                    <span className="text-[10px] text-slate-500">
                      Terkait: {insight.relatedRiskIds.slice(0, 4).join(', ')}
                      {insight.relatedRiskIds.length > 4 ? ` +${insight.relatedRiskIds.length - 4} lainnya` : ''}
                    </span>
                    <button
                      onClick={() => {
                        onSelectInsightRisks(insight.relatedRiskIds);
                        onClose();
                      }}
                      className="inline-flex items-center space-x-1 text-[11px] font-semibold text-teal-700 hover:text-teal-900 transition"
                    >
                      <span>Lihat Risiko Terkait</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition"
          >
            Tutup Panel
          </button>
        </div>
      </div>
    </div>
  );
};
