import { RiskItem, UnitSummary, FilterState } from '../types/risk';
import { UNIT_INFO } from '../data/unitInfo';

export interface KPIData {
  totalRisks: number;
  highRiskCount: number; // Sangat Tinggi + Tinggi (inherent)
  mediumRiskCount: number; // Sedang (inherent)
  lowRiskCount: number; // Rendah + Sangat Rendah (inherent)
  highResidualCount: number;
  mediumResidualCount: number;
  lowResidualCount: number;
  // 5 Tingkatan Level Resmi Permenperin 24/2023
  sangatTinggiInherentCount: number; // 20 - 25 (Merah)
  tinggiInherentCount: number; // 15 - 19 (Orange)
  sedangInherentCount: number; // 12 - 14 (Kuning)
  rendahInherentCount: number; // 7 - 11 (Hijau)
  sangatRendahInherentCount: number; // 1 - 6 (Biru)
  sangatTinggiResidualCount: number;
  tinggiResidualCount: number;
  sedangResidualCount: number;
  rendahResidualCount: number;
  sangatRendahResidualCount: number;
  controlAdequateCount: number;
  controlInadequateCount: number;
  controlAdequatePercentage: number;
  avgInherentScore: number;
  avgResidualScore: number;
  avgReductionScore: number;
  avgReductionPercentage: number;
  topRisks: RiskItem[];
  // Permenperin 24/2023 Risk Appetite KPIs
  aboveAppetiteInherentCount: number; // Inherent >= 12 (Di Luar Selera / Wajib Mitigasi)
  aboveAppetiteResidualCount: number; // Residual >= 12 (Masih Di Luar Selera)
  belowAppetiteResidualCount: number; // Residual <= 11 (Berhasil Masuk Batas Selera)
  appetiteComplianceRate: number; // % risiko residu yang sudah di dalam selera
  criteriaCounts: Record<string, number>;
}

export function computeKPIData(items: RiskItem[]): KPIData {
  const total = items.length;
  if (total === 0) {
    return {
      totalRisks: 0,
      highRiskCount: 0,
      mediumRiskCount: 0,
      lowRiskCount: 0,
      highResidualCount: 0,
      mediumResidualCount: 0,
      lowResidualCount: 0,
      sangatTinggiInherentCount: 0,
      tinggiInherentCount: 0,
      sedangInherentCount: 0,
      rendahInherentCount: 0,
      sangatRendahInherentCount: 0,
      sangatTinggiResidualCount: 0,
      tinggiResidualCount: 0,
      sedangResidualCount: 0,
      rendahResidualCount: 0,
      sangatRendahResidualCount: 0,
      controlAdequateCount: 0,
      controlInadequateCount: 0,
      controlAdequatePercentage: 0,
      avgInherentScore: 0,
      avgResidualScore: 0,
      avgReductionScore: 0,
      avgReductionPercentage: 0,
      topRisks: [],
      aboveAppetiteInherentCount: 0,
      aboveAppetiteResidualCount: 0,
      belowAppetiteResidualCount: 0,
      appetiteComplianceRate: 0,
      criteriaCounts: {},
    };
  }

  // 5 Level Resmi Permenperin 24/2023
  const sangatTinggiInh = items.filter(r => r.inherentLevel === 'Sangat Tinggi').length;
  const tinggiInh = items.filter(r => r.inherentLevel === 'Tinggi').length;
  const sedangInh = items.filter(r => r.inherentLevel === 'Sedang').length;
  const rendahInh = items.filter(r => r.inherentLevel === 'Rendah').length;
  const sangatRendahInh = items.filter(r => r.inherentLevel === 'Sangat Rendah').length;

  const sangatTinggiRes = items.filter(r => r.residualLevel === 'Sangat Tinggi').length;
  const tinggiRes = items.filter(r => r.residualLevel === 'Tinggi').length;
  const sedangRes = items.filter(r => r.residualLevel === 'Sedang').length;
  const rendahRes = items.filter(r => r.residualLevel === 'Rendah').length;
  const sangatRendahRes = items.filter(r => r.residualLevel === 'Sangat Rendah').length;

  const highInherent = sangatTinggiInh + tinggiInh;
  const mediumInherent = sedangInh;
  const lowInherent = rendahInh + sangatRendahInh;

  const highRes = sangatTinggiRes + tinggiRes;
  const mediumRes = sedangRes;
  const lowRes = rendahRes + sangatRendahRes;

  const adequate = items.filter(r => r.controlAdequacy === 'Memadai').length;
  const inadequate = items.filter(r => r.controlAdequacy !== 'Memadai').length;

  const sumInherent = items.reduce((acc, r) => acc + r.inherentScore, 0);
  const sumResidual = items.reduce((acc, r) => acc + r.residualScore, 0);
  const sumReduction = items.reduce((acc, r) => acc + r.scoreReduction, 0);

  const avgInherent = Number((sumInherent / total).toFixed(2));
  const avgResidual = Number((sumResidual / total).toFixed(2));
  const avgReduction = Number((sumReduction / total).toFixed(2));
  const avgReductionPct = avgInherent > 0 ? Number(((avgReduction / avgInherent) * 100).toFixed(1)) : 0;

  // Permenperin 24/2023 Risk Appetite Boundary: Score >= 12 is Above Appetite
  const aboveInherent = items.filter(r => r.inherentScore >= 12).length;
  const aboveResidual = items.filter(r => r.residualScore >= 12).length;
  const belowResidual = items.filter(r => r.residualScore <= 11).length;
  const complianceRate = Number(((belowResidual / total) * 100).toFixed(1));

  // Criteria counts (Permenperin 24/2023 Hal. 18)
  const criteriaCounts: Record<string, number> = {};
  items.forEach(r => {
    const crit = r.kriteriaRisiko || 'Pencapaian Tujuan Organisasi';
    criteriaCounts[crit] = (criteriaCounts[crit] || 0) + 1;
  });

  // Sorted by Inherent Score desc then Residual Score desc
  const sorted = [...items].sort((a, b) => {
    if (b.inherentScore !== a.inherentScore) {
      return b.inherentScore - a.inherentScore;
    }
    return b.residualScore - a.residualScore;
  });

  return {
    totalRisks: total,
    highRiskCount: highInherent,
    mediumRiskCount: mediumInherent,
    lowRiskCount: lowInherent,
    highResidualCount: highRes,
    mediumResidualCount: mediumRes,
    lowResidualCount: lowRes,
    sangatTinggiInherentCount: sangatTinggiInh,
    tinggiInherentCount: tinggiInh,
    sedangInherentCount: sedangInh,
    rendahInherentCount: rendahInh,
    sangatRendahInherentCount: sangatRendahInh,
    sangatTinggiResidualCount: sangatTinggiRes,
    tinggiResidualCount: tinggiRes,
    sedangResidualCount: sedangRes,
    rendahResidualCount: rendahRes,
    sangatRendahResidualCount: sangatRendahRes,
    controlAdequateCount: adequate,
    controlInadequateCount: inadequate,
    controlAdequatePercentage: Number(((adequate / total) * 100).toFixed(1)),
    avgInherentScore: avgInherent,
    avgResidualScore: avgResidual,
    avgReductionScore: avgReduction,
    avgReductionPercentage: avgReductionPct,
    topRisks: sorted.slice(0, 10),
    aboveAppetiteInherentCount: aboveInherent,
    aboveAppetiteResidualCount: aboveResidual,
    belowAppetiteResidualCount: belowResidual,
    appetiteComplianceRate: complianceRate,
    criteriaCounts,
  };
}

export function computeUnitSummaries(items: RiskItem[]): UnitSummary[] {
  const units: Array<'PIH' | 'POPTIKJI' | 'PPSI' | 'PPPPSI' | 'Sekretariat'> = [
    'PIH',
    'POPTIKJI',
    'PPSI',
    'PPPPSI',
    'Sekretariat',
  ];

  return units.map(unitCode => {
    const unitItems = items.filter(r => r.unit === unitCode);
    const count = unitItems.length;

    if (count === 0) {
      return {
        unit: unitCode,
        name: UNIT_INFO[unitCode]?.name || unitCode,
        totalRisks: 0,
        highestInherentRisk: 0,
        highestResidualRisk: 0,
        avgInherentScore: 0,
        avgResidualScore: 0,
        avgReduction: 0,
        controlAdequateCount: 0,
        controlInadequateCount: 0,
        indicatorsCount: 0,
        avgAchievement: 0,
      };
    }

    const maxInherent = Math.max(...unitItems.map(r => r.inherentScore));
    const maxResidual = Math.max(...unitItems.map(r => r.residualScore));
    const avgInherent = Number((unitItems.reduce((a, b) => a + b.inherentScore, 0) / count).toFixed(2));
    const avgResidual = Number((unitItems.reduce((a, b) => a + b.residualScore, 0) / count).toFixed(2));
    const avgRed = Number((unitItems.reduce((a, b) => a + b.scoreReduction, 0) / count).toFixed(2));

    const adequate = unitItems.filter(r => r.controlAdequacy === 'Memadai').length;
    const inadequate = count - adequate;

    const uniqueIndicators = new Set(unitItems.map(r => r.indikatorKinerja)).size;
    const validAchievements = unitItems
      .filter(r => r.capaianPercentage !== undefined)
      .map(r => r.capaianPercentage as number);
    const avgAch = validAchievements.length > 0
      ? Number((validAchievements.reduce((a, b) => a + b, 0) / validAchievements.length).toFixed(1))
      : 0;

    return {
      unit: unitCode,
      name: UNIT_INFO[unitCode]?.name || unitCode,
      totalRisks: count,
      highestInherentRisk: maxInherent,
      highestResidualRisk: maxResidual,
      avgInherentScore: avgInherent,
      avgResidualScore: avgResidual,
      avgReduction: avgRed,
      controlAdequateCount: adequate,
      controlInadequateCount: inadequate,
      indicatorsCount: uniqueIndicators,
      avgAchievement: avgAch,
    };
  });
}

export function filterRiskData(items: RiskItem[], filters: FilterState): RiskItem[] {
  return items.filter(item => {
    // Search filter
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      const matchId = item.id.toLowerCase().includes(q);
      const matchPernyataan = item.pernyataanRisiko.toLowerCase().includes(q);
      const matchIndikator = item.indikatorKinerja.toLowerCase().includes(q);
      const matchSasaran = item.sasaranStrategis.toLowerCase().includes(q);
      const matchPengelola = item.pengelola.toLowerCase().includes(q);
      const matchDampak = item.uraianDampak.toLowerCase().includes(q);
      if (!matchId && !matchPernyataan && !matchIndikator && !matchSasaran && !matchPengelola && !matchDampak) {
        return false;
      }
    }

    // Unit filter
    if (filters.unit !== 'ALL' && item.unit !== filters.unit) {
      return false;
    }

    // Sasaran Strategis filter
    if (filters.sasaranStrategis !== 'ALL' && item.sasaranStrategis !== filters.sasaranStrategis) {
      return false;
    }

    // Inherent Level filter
    if (filters.inherentLevel !== 'ALL' && item.inherentLevel !== filters.inherentLevel) {
      return false;
    }

    // Residual Level filter
    if (filters.residualLevel !== 'ALL' && item.residualLevel !== filters.residualLevel) {
      return false;
    }

    // Control adequacy filter
    if (filters.controlAdequacy !== 'ALL' && item.controlAdequacy !== filters.controlAdequacy) {
      return false;
    }

    // Indicator status filter
    if (filters.indicatorStatus !== 'ALL' && item.indicatorStatus !== filters.indicatorStatus) {
      return false;
    }

    // Kriteria Risiko Permenperin 24/2023 Hal. 18 filter
    if (filters.kriteriaRisiko && filters.kriteriaRisiko !== 'ALL' && item.kriteriaRisiko !== filters.kriteriaRisiko) {
      return false;
    }

    // Selera Risiko filter
    if (filters.seleraRisiko && filters.seleraRisiko !== 'ALL') {
      if (filters.seleraRisiko === 'Dalam Selera' && item.residualScore > 11) {
        return false;
      }
      if (filters.seleraRisiko === 'Di Luar Selera' && item.residualScore <= 11) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    const dir = filters.sortDirection === 'asc' ? 1 : -1;
    if (filters.sortField === 'scoreReduction') {
      return (a.scoreReduction - b.scoreReduction) * dir;
    }
    if (filters.sortField === 'inherentScore') {
      return (a.inherentScore - b.inherentScore) * dir;
    }
    if (filters.sortField === 'residualScore') {
      return (a.residualScore - b.residualScore) * dir;
    }
    if (filters.sortField === 'originalNumber') {
      return (a.originalNumber - b.originalNumber) * dir;
    }
    const valA = a[filters.sortField];
    const valB = b[filters.sortField];
    if (typeof valA === 'number' && typeof valB === 'number') {
      return (valA - valB) * dir;
    }
    return String(valA || '').localeCompare(String(valB || '')) * dir;
  });
}

export interface RiskInsight {
  type: 'alert' | 'success' | 'info' | 'warning';
  title: string;
  description: string;
  metric: string;
  relatedRiskIds: string[];
}

export function generateRiskInsights(items: RiskItem[]): RiskInsight[] {
  const insights: RiskInsight[] = [];
  const kpi = computeKPIData(items);
  const units = computeUnitSummaries(items);

  // 1. Highest unit risk concentration
  const maxUnit = [...units].sort((a, b) => b.totalRisks - a.totalRisks)[0];
  if (maxUnit) {
    insights.push({
      type: 'info',
      title: 'Konsentrasi Risiko Terbanyak',
      description: `Unit kerja ${maxUnit.name} (${maxUnit.unit}) mengelola ${maxUnit.totalRisks} risiko (${((maxUnit.totalRisks / items.length) * 100).toFixed(1)}% dari total risiko organisasi), didominasi proses pendukung kepegawaian, pengadaan, dan sistem informasi.`,
      metric: `${maxUnit.totalRisks} Risiko`,
      relatedRiskIds: items.filter(r => r.unit === maxUnit.unit).map(r => r.id),
    });
  }

  // 2. Highest inherent risk
  const topInherent = items.filter(r => r.inherentScore >= 14);
  if (topInherent.length > 0) {
    insights.push({
      type: 'alert',
      title: 'Risiko Inherent Tertinggi (Level 14 - 16)',
      description: `Terdapat ${topInherent.length} risiko dengan skor inheren level Tinggi hingga Sangat Tinggi. Risiko nomor 1 (PIH - RSIH Konsensus) memiliki skor tertinggi 16 dengan dampak level 4.`,
      metric: `${topInherent.length} Risiko Kritis`,
      relatedRiskIds: topInherent.map(r => r.id),
    });
  }

  // 3. Highest residual risks
  const topResidual = items.filter(r => r.residualScore >= 10);
  if (topResidual.length > 0) {
    insights.push({
      type: 'warning',
      title: 'Risiko Residu Perlu Pemantauan Khusus',
      description: `Terdapat ${topResidual.length} risiko yang memiliki skor risiko residu ≥ 10 setelah pengendalian, termasuk RSK-01 (PIH), RSK-03 (PIH), RSK-04 (PIH), RSK-39 (Sekretariat), dan RSK-40 (Sekretariat).`,
      metric: `${topResidual.length} Risiko Residu ≥10`,
      relatedRiskIds: topResidual.map(r => r.id),
    });
  }

  // 4. Highest reduction effectiveness
  const bigReductions = items.filter(r => r.scoreReduction >= 6);
  if (bigReductions.length > 0) {
    insights.push({
      type: 'success',
      title: 'Efektivitas Pengendalian Tertinggi',
      description: `Sebanyak ${bigReductions.length} risiko mengalami penurunan skor signifikan (penurunan ≥ 6 poin) berkat pengendalian yang memadai, dengan rata-rata reduksi seluruh portofolio mencapai ${kpi.avgReductionPercentage}%.`,
      metric: `-${kpi.avgReductionPercentage}% Reduksi Rata-rata`,
      relatedRiskIds: bigReductions.map(r => r.id),
    });
  }

  // 5. Indicators below target
  const lowAchievements = items.filter(r => r.capaianPercentage !== undefined && r.capaianPercentage < 80);
  if (lowAchievements.length > 0) {
    insights.push({
      type: 'alert',
      title: 'Indikator Kinerja yang Memerlukan Intervensi',
      description: `Indikator kinerja pada ${lowAchievements.length} area teridentifikasi memiliki capaian terendah terhadap target, seperti Pengawasan Produk PPSI (18.2%) dan RSIH Konsensus PIH (75%).`,
      metric: `${lowAchievements.length} Indikator Kritis`,
      relatedRiskIds: lowAchievements.map(r => r.id),
    });
  }

  return insights;
}
