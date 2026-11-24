import React from 'react';
import { RiskItem } from '../../types/risk';
import { KPIData } from '../../utils/riskCalculations';
import { DOCUMENT_METADATA } from '../../data/unitInfo';
import { triggerPrint, exportToCSV } from '../../utils/exportUtils';
import { Printer, FileSpreadsheet, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getRiskLevelInfo } from '../../data/permenperin24Info';

interface ReportViewProps {
  risks: RiskItem[];
  kpi: KPIData;
}

export const ReportView: React.FC<ReportViewProps> = ({ risks, kpi }) => {
  return (
    <div className="space-y-6">
      {/* Print Trigger Button Bar (Hidden in Print) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center justify-between print:hidden">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Laporan Eksekutif Manajemen Risiko BSKJI Pusat TA 2026
          </h3>
          <p className="text-xs text-slate-500">
            Format resmi siap cetak / PDF untuk kebutuhan rapat pimpinan dan arsip kedinasan
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => exportToCSV(risks)}
            className="inline-flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Unduh CSV</span>
          </button>
          <button
            onClick={triggerPrint}
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan PDF</span>
          </button>
        </div>
      </div>

      {/* Official Printable Report Document Container */}
      <div className="bg-white border border-slate-300 rounded-2xl p-8 sm:p-10 shadow-sm print:border-none print:shadow-none print:p-0 space-y-6 text-slate-900 font-sans">
        {/* Official Header / Kop Surat */}
        <div className="text-center pb-6 border-b-2 border-slate-800 space-y-1">
          <h1 className="text-base sm:text-lg font-bold uppercase tracking-wide">
            KEMENTERIAN PERINDUSTRIAN REPUBLIK INDONESIA
          </h1>
          <h2 className="text-sm sm:text-base font-bold uppercase text-slate-800">
            BADAN STANDARDISASI DAN KEBIJAKAN JASA INDUSTRI
          </h2>
          <p className="text-xs text-slate-600">
            Jalan Gatot Subroto Kav. 52-53, Jakarta Selatan | Situs: bskji.kemenperin.go.id
          </p>
          <div className="pt-3">
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
              RINGKASAN EKSEKUTIF PETA RISIKO TAHUN ANGGARAN 2026
            </span>
          </div>
        </div>

        {/* Executive Narrative */}
        <div className="space-y-3 text-xs leading-relaxed text-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            I. PENDAHULUAN & LATAR BELAKANG
          </h3>
          <p>
            Dalam rangka penerapan Sistem Pengendalian Intern Pemerintah (SPIP) Terintegrasi di lingkungan Badan Standardisasi dan Kebijakan Jasa Industri (BSKJI) Pusat, telah dilaksanakan identifikasi dan penilaian risiko terhadap 5 (lima) Unit Pemilik Risiko Eselon II untuk Tahun Anggaran 2026. Dokumen ini merangkum seluruh hasil pemetaan risiko yang bersumber dari Dokumen Resmi <strong>&ldquo;{DOCUMENT_METADATA.sourceDocument}&rdquo;</strong>.
          </p>
        </div>

        {/* Statistical Summary Table */}
        <div className="space-y-3 text-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            II. IKHTISAR STATISTIK PORTOFOLIO RISIKO
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 border border-slate-300 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Total Risiko</span>
              <span className="text-xl font-bold text-slate-900 font-sans">{kpi.totalRisks}</span>
            </div>
            <div className="p-3 border border-slate-300 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Risiko Tinggi (Inherent)</span>
              <span className="text-xl font-bold text-rose-600 font-sans">{kpi.highRiskCount}</span>
            </div>
            <div className="p-3 border border-slate-300 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Rata-rata Skor Melekat</span>
              <span className="text-xl font-bold text-slate-900 font-sans">{kpi.avgInherentScore}</span>
            </div>
            <div className="p-3 border border-slate-300 rounded-lg">
              <span className="text-[10px] text-slate-500 block uppercase">Rata-rata Skor Residu</span>
              <span className="text-xl font-bold text-emerald-600 font-sans">{kpi.avgResidualScore}</span>
            </div>
          </div>
        </div>

        {/* Top Priority Table */}
        <div className="space-y-3 text-xs">
          <div className="border-b border-slate-200 pb-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              III. PEMANTAUAN RISIKO MELEKAT AWAL TERTINGGI (STATUS RESMI FORMULIR 3: NIHIL)
            </h3>
            <p className="text-[11px] text-slate-600 mt-0.5">
              *Catatan: Seluruh 45 risiko residu telah memenuhi batas selera risiko (skor residu ≤ 11), sehingga Daftar Risiko Prioritas resmi berstatus <strong>Nihil</strong>. Tabel berikut menampilkan pemantauan historis atas risiko dengan nilai inherent awal tertinggi yang telah berhasil dikendalikan.
            </p>
          </div>

          <table className="w-full text-left border border-slate-300 border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 font-bold text-[10px] uppercase">
                <th className="p-2 border-r border-slate-300 w-12 text-center">No</th>
                <th className="p-2 border-r border-slate-300 w-20">ID</th>
                <th className="p-2 border-r border-slate-300 w-24">Unit</th>
                <th className="p-2 border-r border-slate-300">Pernyataan Risiko</th>
                <th className="p-2 border-r border-slate-300 text-center w-20">Inherent</th>
                <th className="p-2 border-r border-slate-300 text-center w-20">Residu</th>
                <th className="p-2 text-center w-20">Reduksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300">
              {kpi.topRisks.slice(0, 8).map((risk, idx) => {
                const inhInfo = getRiskLevelInfo(risk.inherentScore);
                const resInfo = getRiskLevelInfo(risk.residualScore);
                return (
                  <tr key={risk.id}>
                    <td className="p-2 border-r border-slate-300 text-center">{idx + 1}</td>
                    <td className="p-2 border-r border-slate-300 font-mono font-bold">{risk.id}</td>
                    <td className="p-2 border-r border-slate-300 font-semibold">{risk.unit}</td>
                    <td className="p-2 border-r border-slate-300 font-medium">{risk.pernyataanRisiko}</td>
                    <td className="p-2 border-r border-slate-300 text-center">
                      <span className={`font-bold ${inhInfo.textColor}`}>
                        {risk.inherentScore}
                      </span>
                    </td>
                    <td className="p-2 border-r border-slate-300 text-center">
                      <span className={`font-bold ${resInfo.textColor}`}>
                        {risk.residualScore}
                      </span>
                    </td>
                    <td className="p-2 text-center font-bold text-teal-700">-{risk.scoreReduction}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Signature Blocks */}
        <div className="pt-8 border-t border-slate-300 grid grid-cols-2 gap-8 text-xs text-center">
          <div className="space-y-16">
            <div>
              <p className="font-semibold">Mengetahui,</p>
              <p className="text-slate-600">Ketua Tim Manajemen Risiko BSKJI</p>
            </div>
            <div>
              <p className="font-bold underline uppercase">Sekretaris BSKJI</p>
              <p className="text-[11px] text-slate-500">NIP. 197XXXXXXXXXXXXXXX</p>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <p className="font-semibold">Jakarta, 01 Maret 2026</p>
              <p className="text-slate-600">Kepala Badan Standardisasi dan Kebijakan Jasa Industri</p>
            </div>
            <div>
              <p className="font-bold underline uppercase">Kepala BSKJI</p>
              <p className="text-[11px] text-slate-500">NIP. 196XXXXXXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
