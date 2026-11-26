import React from 'react';
import {
  X,
  Shield,
  AlertTriangle,
  Building,
  Target,
  Activity,
  ArrowRight,
  CheckCircle2,
  ListOrdered,
  FileSpreadsheet,
  Info
} from 'lucide-react';
import { RiskItem } from '../types/risk';
import { UNIT_INFO } from '../data/unitInfo';
import { getRiskLevelInfo } from '../data/permenperin24Info';

interface RiskDetailDrawerProps {
  risk: RiskItem | null;
  onClose: () => void;
}

export const RiskDetailDrawer: React.FC<RiskDetailDrawerProps> = ({ risk, onClose }) => {
  if (!risk) return null;

  const unitMeta = UNIT_INFO[risk.unit];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white h-full shadow-2xl overflow-y-auto flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="p-5 bg-slate-900 text-white sticky top-0 z-10 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center font-mono font-bold text-white shadow-md">
              {risk.id.replace('RSK-', '#')}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-semibold text-teal-300">
                  {risk.id}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                  {risk.unit} • {unitMeta?.shortName || risk.unit}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-serif">
                Rincian Identifikasi & Mitigasi Risiko
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            title="Tutup Panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 text-slate-800">
          {/* Status Alert if Needs Verification */}
          {risk.needsVerification && (
            <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 flex items-start space-x-2.5">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block">Catatan Integritas Data Dokumen:</strong>
                {risk.verificationNote || 'Data ini dicatat sesuai dokumen resmi Peta Risiko BSKJI 2026.'}
              </div>
            </div>
          )}

          {/* 1. Sasaran Strategis & Indikator */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-teal-600" />
              Sasaran Strategis & Indikator Terkait
            </h4>

            <div>
              <span className="text-[11px] font-semibold text-slate-500 block">Sasaran Strategis:</span>
              <p className="text-xs font-bold text-slate-900 mt-0.5">
                {risk.sasaranStrategis}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">Indikator Kinerja:</span>
                <p className="text-xs font-medium text-slate-800 mt-0.5">
                  {risk.indikatorKinerja}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">Target:</span>
                <div className="flex items-center space-x-2 mt-0.5">
                  <span className="text-xs font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Target: {risk.target}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">Pengelola Risiko / PIC:</span>
                <p className="text-xs font-medium text-slate-800 mt-0.5">
                  {risk.pengelola}
                </p>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block">Kriteria Risiko (Permenperin 24/2023 Hal. 18):</span>
                <span className="inline-block text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded mt-0.5">
                  {risk.kriteriaRisiko || 'Pencapaian Tujuan Organisasi'}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Pernyataan Risiko & Dampak */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Pernyataan Risiko & Uraian Dampak
            </h4>

            <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-xl space-y-2">
              <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wide">
                Pernyataan Risiko (Risk Event):
              </span>
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                {risk.pernyataanRisiko}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                Uraian Dampak (Consequences):
              </span>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {risk.uraianDampak}
              </p>
            </div>
          </div>

          {/* 3. Akar Penyebab Internal & Eksternal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
              <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Penyebab Internal:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                {risk.penyebabInternal.map((penyebab, i) => (
                  <li key={i} className="leading-relaxed">
                    {penyebab}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
              <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Penyebab Eksternal:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
                {risk.penyebabEksternal.map((penyebab, i) => (
                  <li key={i} className="leading-relaxed">
                    {penyebab}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Perbandingan Evaluasi Nilai: Inherent vs Residual */}
          {(() => {
            const inhInfo = getRiskLevelInfo(risk.inherentScore);
            const resInfo = getRiskLevelInfo(risk.residualScore);
            return (
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Evaluasi Kuantitatif Skor Risiko (Permenperin 24/2023)
                  </h4>
                  <span className="text-[10px] font-bold text-slate-500">
                    Batas Selera: Skor ≤ 11
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center items-center">
                  {/* Inherent Score Card */}
                  <div className={`p-3 rounded-xl border ${inhInfo.badgeBg} ${inhInfo.badgeBorder}`}>
                    <span className={`text-[10px] font-bold uppercase block ${inhInfo.textColor}`}>
                      Risiko Melekat (Inherent)
                    </span>
                    <div className={`text-2xl font-black my-1 font-sans ${inhInfo.textColor}`}>
                      {risk.inherentScore}
                    </div>
                    <div className={`text-[11px] font-bold px-2 py-0.5 rounded border ${inhInfo.badgeClass}`}>
                      {risk.inherentLevel}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      P: {risk.inherentProbability} × D: {risk.inherentImpact} ({inhInfo.colorName})
                    </div>
                  </div>

                  {/* Arrow and Reduction */}
                  <div className="flex flex-col items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                    <span className="text-xs font-bold text-emerald-600 mt-1">
                      -{risk.scoreReduction} Poin
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      (-{((risk.scoreReduction / risk.inherentScore) * 100).toFixed(0)}%)
                    </span>
                    <span className="text-[9px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.2 rounded mt-1 border border-teal-200">
                      Turun Level
                    </span>
                  </div>

                  {/* Residual Score Card */}
                  <div className={`p-3 rounded-xl border ${resInfo.badgeBg} ${resInfo.badgeBorder}`}>
                    <span className={`text-[10px] font-bold uppercase block ${resInfo.textColor}`}>
                      Risiko Residu
                    </span>
                    <div className={`text-2xl font-black my-1 font-sans ${resInfo.textColor}`}>
                      {risk.residualScore}
                    </div>
                    <div className={`text-[11px] font-bold px-2 py-0.5 rounded border ${resInfo.badgeClass}`}>
                      {risk.residualLevel}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      P: {risk.residualProbability} × D: {risk.residualImpact} ({resInfo.colorName})
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 5. Pengendalian yang Ada & Kecukupan */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-teal-600" />
                Pengendalian yang Telah Ada (Existing Controls)
              </h4>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                {risk.controlAdequacy}
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-800 list-disc pl-4">
              {risk.controlDescription.map((ctrl, i) => (
                <li key={i} className="leading-relaxed">
                  {ctrl}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Sumber Data: Peta Risiko BSKJI TA 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
