import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, FarmerOut } from '../services/api';

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState<FarmerOut[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchReportsData = async () => {
      try {
        const data = await api.getFarmers();
        setFarmers(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch reports data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportsData();
  }, []);

  const handleLogout = () => {
    api.logout();
    navigate('/login');
  };

  const stats = {
    totalFarmers: farmers.length,
    totalAcreage: farmers.reduce((sum, f) => sum + (f.farm_size || 0), 0),
    pendingVerifications: farmers.filter(f => f.farmer_status === 'pending').length,
    approvedFarmers: farmers.filter(f => f.farmer_status === 'approved').length
  };

  const cropDistribution = farmers.reduce((acc: Record<string, number>, f) => {
    const crop = f.crop_type || 'Other';
    acc[crop] = (acc[crop] || 0) + 1;
    return acc;
  }, {});

  const sortedCrops = Object.entries(cropDistribution)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 5);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex h-screen overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shrink-0 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between gap-3">
          <Link className="flex items-center gap-3" to="/dashboard">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">agriculture</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Farmer Registry</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Federal Ministry Admin</p>
            </div>
          </Link>
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 px-4 space-y-1 mt-4">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/register-farmer">
            <span className="material-symbols-outlined">person_add</span>
            <span className="text-sm">Register Farmer</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/manage-farmers">
            <span className="material-symbols-outlined">groups</span>
            <span className="text-sm">Manage Farmers</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold" to="/reports">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Reports & Analytics</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/admin-settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </Link>
          <button className="w-full mt-4 flex items-center justify-center gap-2 text-slate-500 hover:text-red-500 text-sm font-semibold py-2 transition-colors" onClick={handleLogout}>
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 lg:gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg lg:text-xl font-bold">Reports & Analytics</h2>
          </div>
          <button className="flex items-center gap-1 sm:gap-2 bg-primary text-slate-900 px-3 sm:px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-lg">download</span>
            <span className="hidden sm:inline">Export Data</span>
          </button>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 overflow-y-auto space-y-8">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined text-xl">error</span>
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Registrations', value: stats.totalFarmers.toLocaleString(), icon: 'group', color: 'blue' },
              { label: 'Total Land (Ha)', value: stats.totalAcreage.toFixed(1), icon: 'landscape', color: 'amber' },
              { label: 'Verified Farms', value: stats.approvedFarmers.toLocaleString(), icon: 'verified', color: 'emerald' },
              { label: 'Pending Reviews', value: stats.pendingVerifications.toLocaleString(), icon: 'warning', color: 'rose' }
            ].map((stat, idx) => (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" key={idx}>
                <div className={`p-2 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-lg text-${stat.color}-600 dark:text-${stat.color}-400 w-fit mb-4`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-black mt-1">{isLoading ? '...' : stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Primary Crop Distribution */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Crop Distribution (Top 5)</h3>
              <div className="flex-1 flex flex-col justify-center gap-6">
                {isLoading ? (
                  <div className="flex justify-center py-10">
                    <span className="animate-spin material-symbols-outlined text-primary">sync</span>
                  </div>
                ) : sortedCrops.length === 0 ? (
                  <p className="text-slate-500 text-center py-10">No data available</p>
                ) : sortedCrops.map(([crop, count], idx) => (
                  <div className="space-y-2" key={idx}>
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-600 dark:text-slate-400 capitalize">{crop}</span>
                      <span className="text-slate-900 dark:text-slate-100">{stats.totalFarmers > 0 ? (((count as number) / stats.totalFarmers) * 100).toFixed(1) : 0}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${stats.totalFarmers > 0 ? ((count as number) / stats.totalFarmers) * 100 : 0}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Summary Table */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Regional Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">State</th>
                      <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Farmers</th>
                      <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Verified</th>
                      <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Acreage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {isLoading ? (
                      <tr><td className="p-4 text-center" colSpan={4}>Loading...</td></tr>
                    ) : farmers.length === 0 ? (
                      <tr><td className="p-4 text-center" colSpan={4}>No data found</td></tr>
                    ) : Object.entries(farmers.reduce((acc: any, f) => {
                      const s = f.farm_state;
                      if (!acc[s]) acc[s] = { count: 0, verified: 0, acreage: 0 };
                      acc[s].count++;
                      if (f.farmer_status === 'approved') acc[s].verified++;
                      acc[s].acreage += f.farm_size || 0;
                      return acc;
                    }, {})).sort((a: any, b: any) => b[1].count - a[1].count).slice(0, 10).map(([state, data]: [string, any]) => (
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors" key={state}>
                        <td className="px-4 py-3 font-bold text-sm capitalize">{state}</td>
                        <td className="px-4 py-3 text-sm">{data.count.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="text-emerald-500 font-bold">{((data.verified / data.count) * 100).toFixed(0)}%</span>
                        </td>
                        <td className="px-4 py-3 text-sm">{data.acreage.toFixed(1)} Ha</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
