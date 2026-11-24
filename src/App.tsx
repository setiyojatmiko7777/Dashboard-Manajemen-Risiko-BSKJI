import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { RAW_RISK_DATA } from './data/riskData';
import { FilterState, RiskItem, SortField } from './types/risk';
import {
  computeKPIData,
  filterRiskData,
  generateRiskInsights,
} from './utils/riskCalculations';
import { Header } from './components/Header';
import { Sidebar, NavTab } from './components/Sidebar';
import { GlobalFilterBar } from './components/GlobalFilterBar';
import { RiskDetailDrawer } from './components/RiskDetailDrawer';
import { RiskInsightsPanel } from './components/RiskInsightsPanel';
import { LoginView, AuthUser } from './components/LoginView';

// Views
import { DashboardMainView } from './components/views/DashboardMainView';
import { PermenperinGuideView } from './components/views/PermenperinGuideView';
import { PermenperinFormsView } from './components/views/PermenperinFormsView';
import { RiskEventsView } from './components/views/RiskEventsView';
import { RiskProfileView } from './components/views/RiskProfileView';
import { RiskRegisterView } from './components/views/RiskRegisterView';
import { HeatmapView } from './components/views/HeatmapView';
import { ControlEffectivenessView } from './components/views/ControlEffectivenessView';
import { IndicatorMonitoringView } from './components/views/IndicatorMonitoringView';
import { PriorityRiskView } from './components/views/PriorityRiskView';
import { ActionPlanView } from './components/views/ActionPlanView';
import { UnitAnalysisView } from './components/views/UnitAnalysisView';
import { DataQualityView } from './components/views/DataQualityView';
import { ReportView } from './components/views/ReportView';

export default function App() {
  // Authentication state (Bearer token stored strictly in JS/React memory)
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  const checkAuthStatus = useCallback(async (token: string | null) => {
    try {
      const res = await fetch('/api/auth/status', {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = (await res.json()) as {
          authenticated: boolean;
          user: AuthUser | null;
        };
        if (!data.authenticated) {
          setAuthToken(null);
          setAuthUser(null);
        } else if (data.user) {
          setAuthUser(data.user);
        }
      }
    } catch {
      // Static hosting without /api/auth/status
    } finally {
      setAuthChecking(false);
    }
  }, []);

  useEffect(() => {
    void checkAuthStatus(null);
  }, [checkAuthStatus]);

  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Global filters state
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    unit: 'ALL',
    sasaranStrategis: 'ALL',
    inherentLevel: 'ALL',
    residualLevel: 'ALL',
    controlAdequacy: 'ALL',
    indicatorStatus: 'ALL',
    kriteriaRisiko: 'ALL',
    seleraRisiko: 'ALL',
    sortField: 'inherentScore',
    sortDirection: 'desc',
  });

  // Selected risk for detail drawer
  const [selectedRisk, setSelectedRisk] = useState<RiskItem | null>(null);

  // AI/Executive Insights Modal state
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  // Available unique Sasaran Strategis for dropdown filter
  const availableSasaran = useMemo(() => {
    return Array.from(new Set(RAW_RISK_DATA.map(r => r.sasaranStrategis)));
  }, []);

  // Filtered dataset based on current filter state
  const filteredRisks = useMemo(() => {
    return filterRiskData(RAW_RISK_DATA, filters);
  }, [filters]);

  // Dynamic KPI calculations for filtered data
  const kpiData = useMemo(() => {
    return computeKPIData(filteredRisks);
  }, [filteredRisks]);

  // Executive Insights
  const insights = useMemo(() => {
    return generateRiskInsights(RAW_RISK_DATA);
  }, []);

  // Filter handlers
  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      unit: 'ALL',
      sasaranStrategis: 'ALL',
      inherentLevel: 'ALL',
      residualLevel: 'ALL',
      controlAdequacy: 'ALL',
      indicatorStatus: 'ALL',
      kriteriaRisiko: 'ALL',
      seleraRisiko: 'ALL',
      sortField: 'inherentScore',
      sortDirection: 'desc',
    });
  };

  const handleSortChange = (field: SortField) => {
    setFilters(prev => ({
      ...prev,
      sortField: field,
      sortDirection:
        prev.sortField === field && prev.sortDirection === 'desc' ? 'asc' : 'desc',
    }));
  };

  const handleFilterLevel = (level: string) => {
    setFilters(prev => ({
      ...prev,
      inherentLevel: level as any,
    }));
    setCurrentTab('register');
  };

  const handleSelectInsightRisks = (riskIds: string[]) => {
    setFilters(prev => ({
      ...prev,
      search: riskIds[0] || '',
    }));
    setCurrentTab('register');
  };

  const handleAuthSuccess = (token: string, user: AuthUser) => {
    setAuthToken(token);
    setAuthUser(user);
  };

  const handleLogout = async () => {
    const currentToken = authToken;
    setAuthToken(null);
    setAuthUser(null);
    setSelectedRisk(null);
    setIsInsightsOpen(false);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: currentToken ? { Authorization: `Bearer ${currentToken}` } : undefined,
      });
    } catch {
      // Ignore network errors during logout
    }
  };

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-3 text-slate-600">
        <div className="w-9 h-9 rounded-full border-3 border-teal-600 border-t-transparent animate-spin" />
        <p className="text-xs font-semibold tracking-wide uppercase text-slate-500">
          Memeriksa Sesi Autentikasi...
        </p>
      </div>
    );
  }

  if (!authUser || !authToken) {
    return <LoginView onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Header */}
      <Header
        filteredRisks={filteredRisks}
        totalRisks={RAW_RISK_DATA.length}
        onOpenInsights={() => setIsInsightsOpen(true)}
        username={authUser.username}
        onLogout={() => void handleLogout()}
      />

      {/* Main Layout Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Nav */}
        <Sidebar
          currentTab={currentTab}
          onSelectTab={tab => setCurrentTab(tab)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          totalRisks={RAW_RISK_DATA.length}
        />

        {/* Dynamic Content View Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Global Filter Bar (shown on relevant interactive tabs) */}
            {currentTab !== 'quality' && currentTab !== 'reports' && (
              <GlobalFilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                availableSasaran={availableSasaran}
                totalRecords={RAW_RISK_DATA.length}
                filteredCount={filteredRisks.length}
              />
            )}

            {/* View Switching */}
            {currentTab === 'dashboard' && (
              <DashboardMainView
                risks={filteredRisks}
                kpi={kpiData}
                onSelectRisk={r => setSelectedRisk(r)}
                onNavigateTab={tab => setCurrentTab(tab)}
                onFilterLevel={handleFilterLevel}
              />
            )}

            {currentTab === 'permenperin_guide' && (
              <PermenperinGuideView />
            )}

            {currentTab === 'permenperin_forms' && (
              <PermenperinFormsView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'risk_events' && (
              <RiskEventsView />
            )}

            {currentTab === 'profile' && (
              <RiskProfileView
                risks={filteredRisks}
                onSelectUnit={unit => {
                  setFilters(prev => ({ ...prev, unit }));
                  setCurrentTab('units');
                }}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'register' && (
              <RiskRegisterView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
                sortField={filters.sortField}
                sortDirection={filters.sortDirection}
                onSortChange={handleSortChange}
              />
            )}

            {currentTab === 'heatmap' && (
              <HeatmapView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'controls' && (
              <ControlEffectivenessView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'indicators' && (
              <IndicatorMonitoringView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'priority' && (
              <PriorityRiskView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'action_plan' && (
              <ActionPlanView
                risks={filteredRisks}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'units' && (
              <UnitAnalysisView
                risks={filteredRisks}
                selectedUnit={filters.unit}
                onSelectUnit={unit => setFilters(prev => ({ ...prev, unit }))}
                onSelectRisk={r => setSelectedRisk(r)}
              />
            )}

            {currentTab === 'quality' && (
              <DataQualityView risks={RAW_RISK_DATA} />
            )}

            {currentTab === 'reports' && (
              <ReportView risks={filteredRisks} kpi={kpiData} />
            )}
          </div>
        </main>
      </div>

      {/* Drill-down Detail Modal / Drawer */}
      <RiskDetailDrawer
        risk={selectedRisk}
        onClose={() => setSelectedRisk(null)}
      />

      {/* Executive Insights Modal */}
      <RiskInsightsPanel
        insights={insights}
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
        onSelectInsightRisks={handleSelectInsightRisks}
      />
    </div>
  );
}
