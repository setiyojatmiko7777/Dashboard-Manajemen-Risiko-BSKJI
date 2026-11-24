import React from 'react';
import { Building, ShieldCheck, Target, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DOCUMENT_METADATA, UNIT_INFO } from '../../data/unitInfo';
import { RiskItem } from '../../types/risk';
import { computeUnitSummaries } from '../../utils/riskCalculations';

interface RiskProfileViewProps {
  risks: RiskItem[];
  onSelectUnit: (unitCode: string) => void;
  onSelectRisk: (risk: RiskItem) => void;
}

export const RiskProfileView: React.FC<RiskProfileViewProps> = ({
  risks,
  onSelectUnit,
  onSelectRisk,
}) => {
  const unitSummaries = computeUnitSummaries(risks);

  const unitsList = Object.entries(UNIT_INFO);

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                Profil Risiko Organisasi
              </span>
              <span className="text-xs text-slate-500">Tahun Anggaran 2026</span>
            </div>
            <h2 className="text-xl font-bold font-serif text-slate-900 mt-1">
              Badan Standardisasi dan Kebijakan Jasa Industri (BSKJI)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Peta Risiko BSKJI Pusat Tahun 2026 disusun sebagai instrumen strategis pengendalian intern pemerintah (SPIP) untuk mengidentifikasi, menganalisis, dan memitigasi risiko strategis dan operasional di seluruh unit kerja BSKJI Pusat.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1 sm:min-w-[200px]">
            <div className="text-slate-500">Unit Pemilik Risiko (UPR):</div>
            <div className="font-bold text-slate-900">{DOCUMENT_METADATA.organization}</div>
            <div className="text-slate-500 pt-1">Total Unit Terpetakan:</div>
            <div className="font-bold text-teal-700">5 Unit Eselon II / Satker</div>
          </div>
        </div>
      </div>

      {/* 5 Unit Kerja Cards */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
          Struktur Unit Pemilik Risiko Eselon II
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {unitsList.map(([key, info]) => {
            const summary = unitSummaries.find(u => u.unit === key);
            const unitRisks = risks.filter(r => r.unit === key);

            return (
              <div
                key={key}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-teal-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
                      {key}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                      {summary?.totalRisks || 0} Risiko
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900">
                    {info.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {info.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate-500 block">Inherent Max</span>
                      <span className="font-bold text-rose-600 text-sm">
                        {summary?.highestInherentRisk || 0}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate-500 block">Residu Max</span>
                      <span className="font-bold text-emerald-600 text-sm">
                        {summary?.highestResidualRisk || 0}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate-500 block">Efektivitas</span>
                      <span className="font-bold text-teal-600 text-sm">
                        {summary?.controlAdequateCount ? '100%' : '0%'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {summary?.indicatorsCount || 0} Indikator Kinerja
                  </span>
                  <button
                    onClick={() => onSelectUnit(key)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-teal-700 hover:text-teal-900 transition"
                  >
                    <span>Analisis Unit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Goals Mapping */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
          <Target className="w-4 h-4 text-teal-600" />
          Sasaran Strategis BSKJI 2026
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-200 space-y-2">
            <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
              Sasaran Strategis 1 (Fokus Industri Hijau & Standardisasi)
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              Meningkatnya Pemanfaatan Jasa Industri, Standardisasi Industri, Optimalisasi Pemanfaatan Teknologi Industri, dan Industri Hijau
            </h4>
            <p className="text-xs text-slate-600">
              Menaungi risiko operasional pada unit Pusat Industri Hijau (PIH), Pusat Optimalisasi Pemanfaatan Teknologi Industri dan Kebijakan Jasa Industri (POPTIKJI), Pusat Perumusan, Penerapan, dan Pemberlakuan Standardisasi Industri (PPSI), serta Pusat Pencegahan Polusi dan Pengembangan Standar Industri (PPPPSI).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Sasaran Strategis 2 (Tata Kelola & Reformasi Birokrasi)
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              Terwujudnya Tata Kelola Pemerintahan BSKJI yang Baik dan Akuntabel
            </h4>
            <p className="text-xs text-slate-600">
              Menaungi seluruh risiko manajerial, pengadaan barang/jasa, kepegawaian, pengelolaan keuangan, dan sistem informasi di bawah koordinasi Sekretariat BSKJI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
