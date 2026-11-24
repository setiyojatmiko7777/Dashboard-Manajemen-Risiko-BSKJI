import React, { useState } from 'react';
import { Grid3X3, ArrowRight, Info, ShieldAlert, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { RiskItem } from '../types/risk';
import {
  getPermenperinMatrixScore,
  getRiskLevelInfo,
  PERMENPERIN_PROBABILITY_CRITERIA,
  PERMENPERIN_IMPACT_CRITERIA,
} from '../data/permenperin24Info';

interface RiskHeatmapMatrixProps {
  risks: RiskItem[];
  onSelectCell?: (prob: number, imp: number, mode: 'inherent' | 'residual') => void;
  onSelectRisk?: (risk: RiskItem) => void;
}

export const RiskHeatmapMatrix: React.FC<RiskHeatmapMatrixProps> = ({
  risks,
  onSelectCell,
  onSelectRisk,
}) => {
  const [activeMode, setActiveMode] = useState<'inherent' | 'residual'>('inherent');
  const [selectedCoord, setSelectedCoord] = useState<{ prob: number; imp: number } | null>(null);
  const [showCriteriaGuide, setShowCriteriaGuide] = useState(false);
  const [criteriaTab, setCriteriaTab] = useState<'prob' | 'imp' | 'appetite'>('appetite');

  const probabilities = [5, 4, 3, 2, 1]; // Y-axis (Sumbu Kemungkinan)
  const impacts = [1, 2, 3, 4, 5]; // X-axis (Sumbu Dampak)

  const probLabels: Record<number, string> = {
    5: '5 - Hampir Pasti Terjadi (>50%)',
    4: '4 - Sering Terjadi (20%-50%)',
    3: '3 - Kadang Terjadi (10%-20%)',
    2: '2 - Jarang Terjadi (5%-10%)',
    1: '1 - Hampir Tidak Terjadi (≤5%)',
  };

  const impLabels: Record<number, string> = {
    1: '1 - Tidak Signifikan',
    2: '2 - Minor',
    3: '3 - Moderat',
    4: '4 - Signifikan',
    5: '5 - Sangat Signifikan',
  };

  // Group risks into cells
  const getCellRisks = (prob: number, imp: number) => {
    return risks.filter(r => {
      if (activeMode === 'inherent') {
        return r.inherentProbability === prob && r.inherentImpact === imp;
      } else {
        return r.residualProbability === prob && r.residualImpact === imp;
      }
    });
  };

  // Calculate appetite totals for active mode
  const aboveAppetiteCount = risks.filter(r => {
    const score = activeMode === 'inherent' ? r.inherentScore : r.residualScore;
    return score >= 12;
  }).length;

  const withinAppetiteCount = risks.filter(r => {
    const score = activeMode === 'inherent' ? r.inherentScore : r.residualScore;
    return score <= 11;
  }).length;

  const selectedCellRisks = selectedCoord ? getCellRisks(selectedCoord.prob, selectedCoord.imp) : [];

  // Helper to check if a cell is on the dashed appetite boundary (right edge)
  // Row 5: between col 1 & 2
  // Row 4: between col 2 & 3
  // Row 3: between col 2 & 3
  // Row 2: between col 3 & 4
  // Row 1: between col 3 & 4
  const isBoundaryCell = (prob: number, imp: number) => {
    if (prob === 5 && imp === 1) return true;
    if (prob === 4 && imp === 2) return true;
    if (prob === 3 && imp === 2) return true;
    if (prob === 2 && imp === 3) return true;
    if (prob === 1 && imp === 3) return true;
    return false;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-slate-900 text-teal-400 rounded-xl shadow-sm">
            <Grid3X3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide">
                Matriks Analisis Risiko 5x5 Permenperin No. 24 Tahun 2023
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                Standar MRPN Kemenperin
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Tampilan: <strong>{activeMode === 'inherent' ? 'Risiko Melekat (Inherent Risk)' : 'Risiko Residu (Setelah Pengendalian)'}</strong> • Sumbu Kemungkinan (1-5) vs Dampak (1-5)
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => {
                setActiveMode('inherent');
                setSelectedCoord(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeMode === 'inherent'
                  ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Risiko Melekat (Inherent)
            </button>
            <button
              onClick={() => {
                setActiveMode('residual');
                setSelectedCoord(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeMode === 'residual'
                  ? 'bg-teal-600 text-white shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Risiko Residu (Residual)
            </button>
          </div>

          <button
            onClick={() => setShowCriteriaGuide(!showCriteriaGuide)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-medium inline-flex items-center gap-1.5 transition ${
              showCriteriaGuide
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pedoman Kriteria</span>
            {showCriteriaGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Risk Appetite Banner Status based on Permenperin 24/2023 */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start sm:items-center gap-2.5">
          <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-800">
              Batas Selera Risiko Organisasi (Permenperin 24/2023 Hal. 19-20):
            </span>
            <p className="text-slate-600 text-[11px] mt-0.5">
              Garis putus-putus (<span className="font-mono font-bold text-slate-900">- - -</span>) membatasi area penerimaan risiko. Nilai ≤ 11 (Biru & Hijau) dapat diterima; Nilai ≥ 12 (Kuning, Orange, Merah) <strong>wajib ditangani</strong> dengan Rencana Tindak Pengendalian (RTP).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dalam Selera: <strong>{withinAppetiteCount}</strong> ({((withinAppetiteCount / (risks.length || 1)) * 100).toFixed(0)}%)</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-semibold flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Di Luar Selera: <strong>{aboveAppetiteCount}</strong> ({((aboveAppetiteCount / (risks.length || 1)) * 100).toFixed(0)}%)</span>
          </div>
        </div>
      </div>

      {/* Matrix Layout Container */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Heatmap Grid */}
        <div className="xl:col-span-8 overflow-x-auto">
          <div className="min-w-[520px]">
            {/* Top Y-Axis Label */}
            <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Level Kemungkinan / Probabilitas (Sumbu Y)
            </div>

            {/* Matrix rows */}
            <div className="space-y-2">
              {probabilities.map(prob => (
                <div key={prob} className="flex items-center gap-2">
                  {/* Y Axis Label */}
                  <div className="w-28 sm:w-32 text-right text-[11px] font-medium text-slate-600 pr-2 truncate" title={probLabels[prob]}>
                    <span className="font-bold text-slate-900">{prob}</span> - {probLabels[prob].split('-')[1]?.trim()}
                  </div>

                  {/* 5 columns of Impact */}
                  <div className="grid grid-cols-5 gap-2 flex-1">
                    {impacts.map(imp => {
                      const cellRisks = getCellRisks(prob, imp);
                      const matrixCell = getPermenperinMatrixScore(prob, imp);
                      const isSelected = selectedCoord?.prob === prob && selectedCoord?.imp === imp;
                      const hasAppetiteBoundary = isBoundaryCell(prob, imp);

                      return (
                        <div
                          key={imp}
                          onClick={() => {
                            setSelectedCoord({ prob, imp });
                            if (onSelectCell) onSelectCell(prob, imp, activeMode);
                          }}
                          className={`h-18 sm:h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer transition transform hover:scale-[1.02] shadow-xs relative ${matrixCell.colorBg} ${matrixCell.colorText} ${
                            isSelected ? 'ring-4 ring-slate-900 ring-offset-2 z-20' : ''
                          } ${
                            hasAppetiteBoundary
                              ? 'after:content-[""] after:absolute after:top-0 after:-right-1 after:bottom-0 after:w-1 after:border-r-4 after:border-dashed after:border-slate-900 after:z-10'
                              : ''
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-bold opacity-90">
                            <span className="font-mono text-[11px] font-extrabold">{matrixCell.score}</span>
                            <span className="text-[9px] uppercase tracking-tighter truncate max-w-[65px] font-semibold">
                              {matrixCell.level}
                            </span>
                          </div>

                          {/* Cell Risk Count */}
                          <div className="flex items-center justify-center my-auto">
                            {cellRisks.length > 0 ? (
                              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-md">
                                {cellRisks.length}
                              </span>
                            ) : (
                              <span className="text-[11px] opacity-35 font-medium">-</span>
                            )}
                          </div>

                          <div className="text-[9px] text-center font-medium opacity-90 truncate">
                            {cellRisks.length > 0 ? `${cellRisks.length} risiko` : 'Nihil'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* X-Axis Impact Labels */}
            <div className="flex items-start gap-2 mt-2.5">
              <div className="w-28 sm:w-32" />
              <div className="grid grid-cols-5 gap-2 flex-1">
                {impacts.map(imp => (
                  <div key={imp} className="text-center text-[11px] font-medium text-slate-600 px-1 truncate" title={impLabels[imp]}>
                    <span className="font-bold text-slate-900 block">{imp}</span>
                    <span className="text-[10px] text-slate-500 block truncate">{impLabels[imp].split('-')[1]?.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">
              Level Dampak (Sumbu X)
            </div>
          </div>

          {/* Matrix Legend Resmi Permenperin 24/2023 */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-semibold">Tingkat Risiko (Permenperin 24/2023):</span>
            <div className="flex items-center space-x-1.5">
              <span className="w-3.5 h-3.5 rounded bg-red-600" />
              <span className="font-medium text-slate-700">Sangat Tinggi (20–25) • Merah</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3.5 h-3.5 rounded bg-orange-500" />
              <span className="font-medium text-slate-700">Tinggi (15–19) • Orange</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3.5 h-3.5 rounded bg-yellow-400" />
              <span className="font-medium text-slate-700">Sedang (12–14) • Kuning</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600" />
              <span className="font-medium text-slate-700">Rendah (7–11) • Hijau</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3.5 h-3.5 rounded bg-blue-500" />
              <span className="font-medium text-slate-700">Sangat Rendah (1–6) • Biru</span>
            </div>
            <div className="flex items-center space-x-1 pl-2 border-l border-slate-200">
              <span className="w-4 border-b-2 border-dashed border-slate-900" />
              <span className="font-bold text-slate-900">Batas Selera Risiko (≤ 11)</span>
            </div>
          </div>
        </div>

        {/* Drill-down / Selected Cell Detail Panel */}
        <div className="xl:col-span-4 bg-slate-50 rounded-2xl p-4 border border-slate-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-1.5">
              <Info className="w-4 h-4 text-teal-600" />
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                {selectedCoord
                  ? `Detail Risiko [Kemungkinan: ${selectedCoord.prob}, Dampak: ${selectedCoord.imp}]`
                  : 'Pilih Sel Matriks untuk Rincian'}
              </h4>
            </div>
            {selectedCoord && (
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-mono">
                {selectedCellRisks.length} Risiko
              </span>
            )}
          </div>

          <div className="mt-3 space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {!selectedCoord ? (
              <div className="py-10 text-center text-xs text-slate-400 space-y-2">
                <Grid3X3 className="w-8 h-8 mx-auto text-slate-300" />
                <p>Klik kotak angka pada matriks untuk melihat daftar risiko, skor, kriteria, dan kendali mitigasinya.</p>
              </div>
            ) : selectedCellRisks.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                Tidak ada risiko terpetakan pada koordinat Kemungkinan {selectedCoord.prob} dan Dampak {selectedCoord.imp} ({activeMode === 'inherent' ? 'Melekat' : 'Residu'}).
              </div>
            ) : (
              selectedCellRisks.map(risk => (
                <div
                  key={risk.id}
                  onClick={() => onSelectRisk && onSelectRisk(risk)}
                  className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs hover:border-teal-500 hover:shadow-xs transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-mono">
                      {risk.id}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {risk.unit}
                    </span>
                    {risk.kriteriaRisiko && (
                      <span
                        className="text-[9px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 truncate max-w-[165px]"
                        title={`Kriteria Risiko: ${risk.kriteriaRisiko}`}
                      >
                        {risk.kriteriaRisiko}
                      </span>
                    )}
                  </div>
                  <h5 className="text-xs font-medium text-slate-800 line-clamp-2 group-hover:text-teal-700 transition">
                    {risk.pernyataanRisiko}
                  </h5>
                  {(() => {
                    const inhInfo = getRiskLevelInfo(risk.inherentScore);
                    const resInfo = getRiskLevelInfo(risk.residualScore);
                    return (
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span>
                          Inherent: <strong className={`${inhInfo.textColor} font-mono`}>{risk.inherentScore}</strong> ({risk.inherentLevel})
                        </span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                        <span>
                          Residu: <strong className={`${resInfo.textColor} font-mono`}>{risk.residualScore}</strong> ({risk.residualLevel})
                        </span>
                      </div>
                    );
                  })()}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Expandable Permenperin 24/2023 Criteria Guide */}
      {showCriteriaGuide && (
        <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50/70 rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              Pedoman Kriteria Penilaian MRPN Kementerian Perindustrian (Permenperin 24/2023)
            </h4>

            <div className="inline-flex bg-white rounded-lg p-0.5 border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setCriteriaTab('appetite')}
                className={`px-3 py-1 rounded-md transition ${
                  criteriaTab === 'appetite' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Selera Risiko
              </button>
              <button
                onClick={() => setCriteriaTab('prob')}
                className={`px-3 py-1 rounded-md transition ${
                  criteriaTab === 'prob' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kriteria Kemungkinan
              </button>
              <button
                onClick={() => setCriteriaTab('imp')}
                className={`px-3 py-1 rounded-md transition ${
                  criteriaTab === 'imp' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                5 Aspek Dampak
              </button>
            </div>
          </div>

          {/* Appetite Tab */}
          {criteriaTab === 'appetite' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-1.5">
                <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Zona Dalam Selera Risiko (Skor 1 - 11)
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Risiko pada tingkat <strong>Sangat Rendah (Biru, skor 1-6)</strong> dan <strong>Rendah (Hijau, skor 7-11)</strong> dapat diterima oleh pimpinan organisasi dan tidak memerlukan tindakan penanganan/mitigasi khusus tambahan di luar prosedur operasional standar.
                </p>
              </div>

              <div className="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-1.5">
                <span className="font-bold text-rose-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  Zona Di Luar Selera Risiko (Skor 12 - 25)
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Risiko pada tingkat <strong>Sedang (Kuning, 12-14)</strong>, <strong>Tinggi (Orange, 15-19)</strong>, dan <strong>Sangat Tinggi (Merah, 20-25)</strong> berada di atas ambang batas toleransi organisasi dan <strong>wajib ditangani</strong> melalui Rencana Tindak Pengendalian (RTP) untuk menurunkan besaran risikonya ke zona selera risiko.
                </p>
              </div>
            </div>
          )}

          {/* Probability Tab */}
          {criteriaTab === 'prob' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200 bg-white rounded-lg">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 w-16 text-center">Level</th>
                    <th className="p-2 border-r border-slate-200 w-44">Kategori Kemungkinan</th>
                    <th className="p-2 border-r border-slate-200 w-32">Persentase</th>
                    <th className="p-2 border-r border-slate-200 w-48">Jumlah Frekuensi / Tahun</th>
                    <th className="p-2">Uraian Kualitatif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PERMENPERIN_PROBABILITY_CRITERIA.map(pc => (
                    <tr key={pc.level} className="hover:bg-slate-50">
                      <td className="p-2 text-center font-bold font-mono border-r border-slate-200">{pc.level}</td>
                      <td className="p-2 font-semibold text-slate-900 border-r border-slate-200">{pc.label}</td>
                      <td className="p-2 font-mono text-slate-700 border-r border-slate-200">{pc.percentage}</td>
                      <td className="p-2 font-medium text-slate-700 border-r border-slate-200">{pc.frequency}</td>
                      <td className="p-2 text-slate-600">{pc.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Impact Tab */}
          {criteriaTab === 'imp' && (
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] text-left border-collapse border border-slate-200 bg-white rounded-lg">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200 text-[10px] uppercase">
                    <th className="p-2 border-r border-slate-200 w-12 text-center">Lvl</th>
                    <th className="p-2 border-r border-slate-200 w-28">Tingkat Dampak</th>
                    <th className="p-2 border-r border-slate-200">Beban Keuangan Negara</th>
                    <th className="p-2 border-r border-slate-200">Reputasi Organisasi</th>
                    <th className="p-2 border-r border-slate-200">Pencapaian Tujuan Organisasi</th>
                    <th className="p-2 border-r border-slate-200">K3 Pegawai</th>
                    <th className="p-2">Temuan Pemeriksa Auditor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PERMENPERIN_IMPACT_CRITERIA.map(ic => (
                    <tr key={ic.level} className="hover:bg-slate-50">
                      <td className="p-2 text-center font-bold font-mono border-r border-slate-200">{ic.level}</td>
                      <td className="p-2 font-semibold text-slate-900 border-r border-slate-200">{ic.label}</td>
                      <td className="p-2 text-slate-700 border-r border-slate-200">{ic.financial}</td>
                      <td className="p-2 text-slate-700 border-r border-slate-200">{ic.reputation}</td>
                      <td className="p-2 text-slate-700 border-r border-slate-200 font-semibold">{ic.targetAchievement}</td>
                      <td className="p-2 text-slate-700 border-r border-slate-200">{ic.k3}</td>
                      <td className="p-2 text-slate-700">{ic.auditFinding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
