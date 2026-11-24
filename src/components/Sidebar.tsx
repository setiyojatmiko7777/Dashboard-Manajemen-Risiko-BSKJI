import React from 'react';
import {
  LayoutDashboard,
  Building,
  TableProperties,
  Grid3X3,
  SlidersHorizontal,
  Activity,
  AlertTriangle,
  ClipboardList,
  BarChart3,
  CheckCircle2,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type NavTab =
  | 'dashboard'
  | 'permenperin_guide'
  | 'permenperin_forms'
  | 'risk_events'
  | 'profile'
  | 'register'
  | 'heatmap'
  | 'controls'
  | 'indicators'
  | 'priority'
  | 'action_plan'
  | 'units'
  | 'quality'
  | 'reports';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  totalRisks: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  isCollapsed,
  onToggleCollapse,
  totalRisks,
}) => {
  const menuItems: Array<{
    id: NavTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
    badgeColor?: string;
  }> = [
    { id: 'dashboard', label: 'Dashboard Utama', icon: LayoutDashboard },
    { id: 'permenperin_guide', label: 'Pedoman Permenperin 24/2023', icon: FileText, badge: 'Regulasi', badgeColor: 'bg-indigo-100 text-indigo-800' },
    { id: 'permenperin_forms', label: 'Formulir Standar MRPN', icon: ClipboardList, badge: '7 Form', badgeColor: 'bg-teal-100 text-teal-800' },
    { id: 'risk_events', label: 'Peristiwa Risiko Sem I', icon: AlertTriangle, badge: '34 Data', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 'profile', label: 'Profil Risiko BSKJI', icon: Building },
    { id: 'register', label: 'Risk Register', icon: TableProperties, badge: totalRisks, badgeColor: 'bg-teal-100 text-teal-800' },
    { id: 'heatmap', label: 'Risk Heatmap (5x5)', icon: Grid3X3 },
    { id: 'controls', label: 'Analisis & Pengendalian', icon: SlidersHorizontal },
    { id: 'indicators', label: 'Monitoring Indikator', icon: Activity },
    { id: 'priority', label: 'Risiko Prioritas', icon: AlertTriangle, badge: 'Nihil', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 'action_plan', label: 'Rencana Tindak (RTP)', icon: ClipboardList, badge: 'Nihil (SOP)', badgeColor: 'bg-slate-100 text-slate-700' },
    { id: 'units', label: 'Analisis Unit Kerja', icon: BarChart3 },
    { id: 'quality', label: 'Validasi & Kualitas Data', icon: CheckCircle2, badge: '100%', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 'reports', label: 'Laporan Eksekutif', icon: FileText },
  ];

  return (
    <aside
      className={`bg-white border-r border-slate-200 shadow-sm transition-all duration-300 flex flex-col flex-shrink-0 z-20 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Sidebar Header toggle */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Navigasi Manajemen
            </span>
            <span className="text-xs font-semibold text-slate-700">
              Peta Risiko TA 2026
            </span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 mx-auto transition"
          title={isCollapsed ? 'Perluas Menu' : 'Persempit Menu'}
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-3 px-2 space-y-1 overflow-y-auto">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all group relative ${
                isActive
                  ? 'bg-teal-600 text-white shadow-sm shadow-teal-700/20 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon
                className={`w-4 h-4 flex-shrink-0 transition-transform ${
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'
                }`}
              />
              {!isCollapsed && (
                <span className="flex-1 text-left truncate">{item.label}</span>
              )}
              {!isCollapsed && item.badge !== undefined && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-teal-800 text-teal-100' : item.badgeColor || 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Tooltip for collapsed view */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
