import React from 'react';
import { RiskItem } from '../../types/risk';
import { ShieldCheck, TrendingDown, CheckCircle, Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { getRiskLevelInfo } from '../../data/permenperin24Info';

interface ControlEffectivenessViewProps {
  risks: RiskItem[];
  onSelectRisk: (risk: RiskItem) => void;
}

export const ControlEffectivenessView: React.FC<ControlEffectivenessViewProps> = ({
  risks,
  onSelectRisk,
}) => {
  // Filter top reductions
  const sortedByReduction = [...risks].sort((a, b) => b.scoreReduction - a.scoreReduction);

  return (
    <div className="space-y-6">
      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-500">
              Total Pengendalian Terdata
            </span>
            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mt-2">
            {risks.length} Pengendalian
          </div>
          <p className="text-xs text-slate-500 mt-1">
            100% risiko memiliki mekanisme kendali eksisting
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-500">
              Tingkat Kecukupan (Adequacy)
            </span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-600 mt-2">
            100% Memadai
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Seluruh unit kerja dinilai memadai dalam SOP & instrumen
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-slate-500">
              Maksimum Reduksi Skor
            </span>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <TrendingDown className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-indigo-600 mt-2">
            -8 Poin
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Penurunan tertinggi terjadi pada risiko perumusan & pengawasan
          </p>
        </div>
      </div>

      {/* Control Details Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Matriks Pengendalian Eksisting & Efektivitas Reduksi
            </h3>
            <p className="text-xs text-slate-500">
              Daftar seluruh langkah mitigasi eksisting serta dampaknya terhadap penurunan skor risiko
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px]">
                <th className="py-3 px-3 w-12 text-center">No</th>
                <th className="py-3 px-3 w-20">ID</th>
                <th className="py-3 px-3 w-28">Unit</th>
                <th className="py-3 px-4 min-w-[200px]">Pernyataan Risiko</th>
                <th className="py-3 px-4 min-w-[260px]">Uraian Pengendalian yang Ada</th>
                <th className="py-3 px-3 text-center w-28">Kecukupan</th>
                <th className="py-3 px-3 text-center w-28">Inherent → Residu</th>
                <th className="py-3 px-3 text-center w-24">Reduksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {sortedByReduction.map((risk, idx) => {
                const inhInfo = getRiskLevelInfo(risk.inherentScore);
                const resInfo = getRiskLevelInfo(risk.residualScore);
                return (
                  <tr
                    key={risk.id}
                    onClick={() => onSelectRisk(risk)}
                    className="hover:bg-slate-50 transition cursor-pointer"
                  >
                    <td className="py-3 px-3 text-center font-medium text-slate-500">{idx + 1}</td>
                    <td className="py-3 px-3">
                      <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {risk.id}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{risk.unit}</td>
                    <td className="py-3 px-4 font-medium text-slate-900">{risk.pernyataanRisiko}</td>
                    <td className="py-3 px-4 text-slate-700">
                      <ul className="list-disc pl-4 space-y-1">
                        {risk.controlDescription.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className="font-bold text-[10px] text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                        {risk.controlAdequacy}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="flex items-center gap-1.5 font-medium">
                          {/* Inherent Score colored according to Permenperin 24/2023 risk level */}
                          <span
                            className={`font-mono font-bold px-2 py-0.5 rounded border text-xs ${inhInfo.badgeClass}`}
                            title={`Skor Inherent: ${risk.inherentScore} (${inhInfo.level} - ${inhInfo.colorName})`}
                          >
                            {risk.inherentScore}
                          </span>
                          <span className="text-slate-400 font-bold">→</span>
                          {/* Residual Score colored according to Permenperin 24/2023 risk level */}
                          <span
                            className={`font-mono font-bold px-2 py-0.5 rounded border text-xs ${resInfo.badgeClass}`}
                            title={`Skor Residu: ${risk.residualScore} (${resInfo.level} - ${resInfo.colorName})`}
                          >
                            {risk.residualScore}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-semibold">
                          <span className={inhInfo.textColor}>{inhInfo.level}</span>
                          <span className="text-slate-300">→</span>
                          <span className={resInfo.textColor}>{resInfo.level}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full text-xs">
                        -{risk.scoreReduction}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
