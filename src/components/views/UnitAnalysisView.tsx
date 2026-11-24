import React, { useState } from 'react';
import { RiskItem } from '../../types/risk';
import { UNIT_INFO } from '../../data/unitInfo';
import { computeUnitSummaries } from '../../utils/riskCalculations';
import { Building2, BarChart2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { getRiskLevelInfo } from '../../data/permenperin24Info';

interface UnitAnalysisViewProps {
  risks: RiskItem[];
  selectedUnit: string;
  onSelectUnit: (unit: string) => void;
  onSelectRisk: (risk: RiskItem) => void;
}

export const UnitAnalysisView: React.FC<UnitAnalysisViewProps> = ({
  risks,
  selectedUnit,
  onSelectUnit,
  onSelectRisk,
}) => {
  const currentUnitKey = (selectedUnit === 'ALL' ? 'PIH' : selectedUnit) as keyof typeof UNIT_INFO;
  const unitInfo = UNIT_INFO[currentUnitKey] || UNIT_INFO['PIH'];
  const unitRisks = risks.filter(r => r.unit === currentUnitKey);

  const unitSummaries = computeUnitSummaries(risks);
  const currentSummary = unitSummaries.find(u => u.unit === currentUnitKey);

  return (
    <div className="space-y-6">
      {/* Unit Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(UNIT_INFO).map(([key, info]) => {
          const isActive = currentUnitKey === key;
          const count = risks.filter(r => r.unit === key).length;

          return (
            <button
              key={key}
              onClick={() => onSelectUnit(key)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                isActive
                  ? 'bg-teal-600 text-white shadow-sm shadow-teal-700/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{key}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-teal-800 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Unit Overview Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                {currentUnitKey}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Unit Kerja Eselon II
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif mt-1">
              {unitInfo.name}
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              {unitInfo.description}
            </p>
          </div>

          {(() => {
            const maxInhScore = currentSummary?.highestInherentRisk || 0;
            const maxInhInfo = getRiskLevelInfo(maxInhScore);
            const maxResScore = currentSummary?.highestResidualRisk || 0;
            const maxResInfo = getRiskLevelInfo(maxResScore);
            return (
              <div className="grid grid-cols-3 gap-3 text-center sm:min-w-[320px]">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-medium">Total Risiko</span>
                  <span className="text-xl font-bold text-slate-900 font-sans">
                    {unitRisks.length}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">
                    {currentUnitKey}
                  </span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-medium">Inherent Max</span>
                  <span className={`text-xl font-bold font-sans ${maxInhInfo.textColor}`}>
                    {maxInhScore}
                  </span>
                  <span className={`block text-[10px] font-bold mt-0.5 ${maxInhInfo.textColor}`}>
                    {maxInhInfo.level}
                  </span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-medium">Residu Max</span>
                  <span className={`text-xl font-bold font-sans ${maxResInfo.textColor}`}>
                    {maxResScore}
                  </span>
                  <span className={`block text-[10px] font-bold mt-0.5 ${maxResInfo.textColor}`}>
                    {maxResInfo.level}
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Unit Risks List */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
          Daftar Risiko Teridentifikasi pada {currentUnitKey} ({unitRisks.length} Risiko)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unitRisks.map(risk => {
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
                    <span className="font-mono font-bold text-xs text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
                      {risk.id}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      PIC: {risk.pengelola}
                    </span>
                  </div>

                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition line-clamp-2">
                    {risk.pernyataanRisiko}
                  </h5>

                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {risk.uraianDampak}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] text-slate-500 font-medium">Inherent:</span>
                    <span
                      className={`font-mono font-bold px-1.5 py-0.5 rounded text-xs border ${inhInfo.badgeClass}`}
                      title={`Inherent: ${risk.inherentScore} (${inhInfo.level} - ${inhInfo.colorName})`}
                    >
                      {risk.inherentScore}
                    </span>
                    <span className={`text-[10px] font-bold hidden sm:inline ${inhInfo.textColor}`}>
                      ({inhInfo.level})
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] text-slate-500 font-medium">Residu:</span>
                    <span
                      className={`font-mono font-bold px-1.5 py-0.5 rounded text-xs border ${resInfo.badgeClass}`}
                      title={`Residu: ${risk.residualScore} (${resInfo.level} - ${resInfo.colorName})`}
                    >
                      {risk.residualScore}
                    </span>
                    <span className={`text-[10px] font-bold hidden sm:inline ${resInfo.textColor}`}>
                      ({resInfo.level})
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    -{risk.scoreReduction} Poin
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
