import { RiskItem } from '../types/risk';

export function exportToCSV(items: RiskItem[], filename = 'Risk_Register_BSKJI_2026.csv') {
  const headers = [
    'No',
    'ID Risiko',
    'Unit Pemilik',
    'Sasaran Strategis',
    'Indikator Kinerja',
    'Target',
    'Pengelola',
    'Pernyataan Risiko',
    'Penyebab Internal',
    'Penyebab Eksternal',
    'Uraian Dampak',
    'Probabilitas Melekat',
    'Dampak Melekat',
    'Skor Melekat',
    'Level Melekat',
    'Pengendalian yang Ada',
    'Kecukupan Pengendalian',
    'Probabilitas Residu',
    'Dampak Residu',
    'Skor Residu',
    'Level Residu',
    'Penurunan Skor'
  ];

  const escapeCSV = (str: string | number | undefined | null) => {
    if (str === undefined || str === null) return '""';
    const s = String(str).replace(/"/g, '""');
    return `"${s}"`;
  };

  const rows = items.map((item, idx) => [
    idx + 1,
    escapeCSV(item.id),
    escapeCSV(item.unit),
    escapeCSV(item.sasaranStrategis),
    escapeCSV(item.indikatorKinerja),
    escapeCSV(item.target),
    escapeCSV(item.pengelola),
    escapeCSV(item.pernyataanRisiko),
    escapeCSV(item.penyebabInternal.join('; ')),
    escapeCSV(item.penyebabEksternal.join('; ')),
    escapeCSV(item.uraianDampak),
    item.inherentProbability,
    item.inherentImpact,
    item.inherentScore,
    escapeCSV(item.inherentLevel),
    escapeCSV(item.controlDescription.join('; ')),
    escapeCSV(item.controlAdequacy),
    item.residualProbability,
    item.residualImpact,
    item.residualScore,
    escapeCSV(item.residualLevel),
    item.scoreReduction
  ].join(','));

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToJSON(items: RiskItem[], filename = 'Risk_Data_BSKJI_2026.json') {
  const jsonContent = JSON.stringify(items, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function triggerPrint() {
  window.print();
}
