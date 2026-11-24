import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
} from 'recharts';
import { RiskItem } from '../types/risk';
import { computeUnitSummaries } from '../utils/riskCalculations';

interface InherentResidualChartProps {
  risks: RiskItem[];
}

export const InherentResidualChart: React.FC<InherentResidualChartProps> = ({ risks }) => {
  const unitData = computeUnitSummaries(risks);

  const unitComparisonData = unitData.map(u => ({
    name: u.unit,
    fullName: u.name,
    Inherent: u.avgInherentScore,
    Residual: u.avgResidualScore,
    Reduksi: u.avgReduction,
    MaxInherent: u.highestInherentRisk,
    MaxResidual: u.highestResidualRisk,
    TotalRisiko: u.totalRisks,
  }));

  // Top 10 Risks comparison data
  const topRisksData = [...risks]
    .sort((a, b) => b.inherentScore - a.inherentScore)
    .slice(0, 8)
    .map(r => ({
      id: r.id,
      label: `${r.id} (${r.unit})`,
      inherent: r.inherentScore,
      residual: r.residualScore,
      reduction: r.scoreReduction,
      title: r.pernyataanRisiko.substring(0, 40) + '...',
    }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* 1. Comparison by Unit Kerja */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Perbandingan Rata-rata Skor per Unit Kerja
            </h3>
            <p className="text-xs text-slate-500">
              Inherent Risk vs Residual Risk & Nilai Penurunan Risiko
            </p>
          </div>
          <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
            5 Unit Kerja
          </span>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={unitComparisonData}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 11 }} />
              <YAxis domain={[0, 16]} tick={{ fill: '#475569', fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  color: '#fff',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              <Bar dataKey="Inherent" name="Skor Melekat (Inherent)" fill="#f43f5e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Residual" name="Skor Residu (Setelah Kendali)" fill="#0d9488" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Reduksi" name="Penurunan Skor" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Top 8 Critical Risks Comparison */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Dampak Pengendalian pada 8 Risiko Tertinggi
            </h3>
            <p className="text-xs text-slate-500">
              Penurunan skor dari level Inherent ke level Residual
            </p>
          </div>
          <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
            Top Inherent
          </span>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topRisksData}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" domain={[0, 18]} tick={{ fill: '#475569', fontSize: 11 }} />
              <YAxis dataKey="id" type="category" tick={{ fill: '#0f172a', fontSize: 11, fontWeight: 600 }} width={60} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  color: '#fff',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontSize: '12px',
                }}
                formatter={(value: any, name: any, item: any) => [
                  `${value} poin`,
                  name === 'inherent' ? 'Skor Melekat' : name === 'residual' ? 'Skor Residu' : 'Penurunan',
                ]}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              <Bar dataKey="inherent" name="Skor Melekat" fill="#e11d48" radius={[0, 4, 4, 0]} />
              <Bar dataKey="residual" name="Skor Residu" fill="#059669" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
