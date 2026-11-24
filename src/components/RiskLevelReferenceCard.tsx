import React from 'react';
import { ShieldCheck, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { OFFICIAL_RISK_LEVELS, OfficialRiskLevelDef } from '../data/permenperin24Info';
import { KPIData } from '../utils/riskCalculations';

interface RiskLevelReferenceCardProps {
  kpi: KPIData;
  onFilterLevel?: (level: string) => void;
  selectedLevel?: string;
}

export const RiskLevelReferenceCard: React.FC<RiskLevelReferenceCardProps> = ({
  kpi,
  onFilterLevel,
  selectedLevel,
}) => {
  // Mapping KPI counts to each official level
  const getLevelCounts = (level: string) => {
    switch (level) {
      case 'Sangat Tinggi':
        return {
          inherent: kpi.sangatTinggiInherentCount,
          residual: kpi.sangatTinggiResidualCount,
        };
      case 'Tinggi':
        return {
          inherent: kpi.tinggiInherentCount,
          residual: kpi.tinggiResidualCount,
        };
      case 'Sedang':
        return {
          inherent: kpi.sedangInherentCount,
          residual: kpi.sedangResidualCount,
        };
      case 'Rendah':
        return {
          inherent: kpi.rendahInherentCount,
          residual: kpi.rendahResidualCount,
        };
      case 'Sangat Rendah':
        return {
          inherent: kpi.sangatRendahInherentCount,
          residual: kpi.sangatRendahResidualCount,
        };
      default:
        return { inherent: 0, residual: 0 };
    }
  };

  const total = kpi.totalRisks || 45;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-gradient-to-r from-slate-50 to-white">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
              Permenperin No. 24 Tahun 2023
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Pedoman MRPN Kemenperin
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
            Tabel Klasifikasi Tingkat, dan Besaran Risiko
          </h3>
          <p className="text-xs text-slate-500">
            Penetapan baku besaran skor risiko, kategori level (5 tingkat), kode warna, serta posisi portofolio risiko BSKJI TA 2026
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start md:self-auto">
          <div className="flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs font-bold text-emerald-800">
              Selera Risiko: Skor ≤ 11 (Hijau / Biru)
            </span>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              <th className="py-3 px-4 w-44">Level Risiko</th>
              <th className="py-3 px-4 w-32 text-center">Besaran Risiko</th>
              <th className="py-3 px-4 w-36">Warna Resmi</th>
              <th className="py-3 px-4 text-center">Risiko Melekat (Inherent)</th>
              <th className="py-3 px-4 text-center">Risiko Residu (Setelah Kontrol)</th>
              <th className="py-3 px-4 w-44 text-center">Status Batas Selera</th>
              <th className="py-3 px-4 w-28 text-center">Aksi Filter</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {OFFICIAL_RISK_LEVELS.map((item: OfficialRiskLevelDef) => {
              const counts = getLevelCounts(item.level);
              const inhPct = total > 0 ? Number(((counts.inherent / total) * 100).toFixed(1)) : 0;
              const resPct = total > 0 ? Number(((counts.residual / total) * 100).toFixed(1)) : 0;
              const isFiltered = selectedLevel === item.level;

              return (
                <tr
                  key={item.level}
                  className={`transition hover:bg-slate-50/80 ${
                    isFiltered ? 'bg-teal-50/40 ring-1 ring-inset ring-teal-400' : ''
                  }`}
                >
                  {/* Level Risiko */}
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-6 h-6 rounded-lg text-white font-mono text-xs font-extrabold flex items-center justify-center shadow-xs ${item.solidBg}`}
                      >
                        {item.levelNumber}
                      </span>
                      <div>
                        <div className="font-bold text-slate-900">{item.level}</div>
                        <div className="text-[10px] text-slate-500 font-normal">Level {item.levelNumber}</div>
                      </div>
                    </div>
                  </td>

                  {/* Besaran Risiko */}
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-lg font-mono font-extrabold text-xs bg-slate-100 text-slate-800 border border-slate-200">
                      {item.scoreRange}
                    </span>
                  </td>

                  {/* Warna Resmi */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center space-x-2">
                      <span className={`w-4 h-4 rounded-full border border-slate-300 shadow-xs shrink-0 ${item.solidBg}`} />
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${item.badgeClass}`}>
                        {item.colorName}
                      </span>
                    </div>
                  </td>

                  {/* Risiko Melekat (Inherent) */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="font-mono text-sm font-bold text-slate-900">
                          {counts.inherent}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          ({inhPct}%)
                        </span>
                      </div>
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.solidBg}`}
                          style={{ width: `${Math.min(100, inhPct)}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Risiko Residu (Setelah Pengendalian) */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="font-mono text-sm font-bold text-slate-900">
                          {counts.residual}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          ({resPct}%)
                        </span>
                      </div>
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.solidBg}`}
                          style={{ width: `${Math.min(100, resPct)}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Status Batas Selera */}
                  <td className="py-3.5 px-4 text-center">
                    {item.isAboveAppetite ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                        Di Luar Selera
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Dalam Selera</span>
                      </span>
                    )}
                  </td>

                  {/* Aksi Filter */}
                  <td className="py-3.5 px-4 text-center">
                    {onFilterLevel && (
                      <button
                        type="button"
                        onClick={() => onFilterLevel(item.level)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition ${
                          isFiltered
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {isFiltered ? 'Aktif' : 'Lihat Data'}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Analytical Callout Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start space-x-2">
          <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900">Analisis Hasil Evaluasi Selera Risiko BSKJI: </span>
            <span>
              Dari total <strong>45 risiko</strong>, sebanyak <strong>11 risiko inherent</strong> awalnya berada di luar selera risiko (1 Tinggi, 10 Sedang). Setelah pengendalian terpasang memadai, seluruh <strong>45 risiko residu (100%)</strong> telah berhasil diturunkan ke dalam batas selera risiko (8 Rendah [Hijau] dan 37 Sangat Rendah [Biru]).
            </span>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-lg inline-block">
            Risiko Prioritas (Formulir 3): NIHIL
          </span>
        </div>
      </div>
    </div>
  );
};
