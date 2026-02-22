import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { api, FarmerOut } from '../services/api';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState<FarmerOut[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const data = await api.getFarmers();
        setFarmers(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch farmers');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  const handleLogout = () => {
    api.logout();
    navigate('/login');
  };

  const stats = {
    totalFarmers: farmers.length,
    pendingRegistrations: farmers.filter(f => f.farmer_status === 'pending').length,
    approvedFarmers: farmers.filter(f => f.farmer_status === 'approved').length,
    totalFarmSize: farmers.reduce((sum, f) => sum + (f.farm_size || 0), 0)
  };

  const recentFarmers = [...farmers]
    .sort((a, b) => b.id - a.id)
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
              <h1 className="text-lg font-bold leading-tight">Bayelsa State</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Southern Ijaw LGA Admin</p>
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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/register-farmer">
            <span className="material-symbols-outlined">person_add</span>
            <span className="text-sm">Register Farmer</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/farm-lands">
            <span className="material-symbols-outlined">potted_plant</span>
            <span className="text-sm">Farm Lands</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/manage-farmers">
            <span className="material-symbols-outlined">groups</span>
            <span className="text-sm">Manage Farmers</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/reports">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Reports & Analytics</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/admin-settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </Link>
          <Link className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-slate-900 font-bold py-2.5 px-4 rounded-lg transition-all shadow-sm" to="/register-farmer">
            <span className="material-symbols-outlined text-sm">add</span>
            <span className="text-sm">New Registration</span>
          </Link>
          <button className="w-full mt-2 flex items-center justify-center gap-2 text-slate-500 hover:text-red-500 text-sm font-semibold py-2 transition-colors" onClick={handleLogout}>
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header Bar */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center flex-1 gap-4 max-w-xl">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Search farmers by NIN, ID, or name..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:border-slate-800 mx-1 lg:mx-2"></div>
            <div className="flex items-center gap-3 pl-1 lg:pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Administrator</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Registry Admin</p>
              </div>
              <img alt="Admin Profile" className="size-10 rounded-full border-2 border-primary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ALDxx1h8D97FWle-4YqGruzTcyOY0iAQRfl_ADNHACndpnAzWH7LkfTqVAnUTvilreGL8TiudJ3uurMljWihl1vGjaGeNo8iIXM409sshRwPaxh2EmoW0rinp1XHVPx9QBMQ633FyServwUehG_yLJSXmrVyozyZ0LGQYmGB4lJuNrouvD7pMBFvFW3hc3jim0r3ElximnlwYMMwrNVg3wZCcNWz27cSZXUuAX0mETrSI-l-dXaeJpiYMjEak0Sz-ipo8EvLi7I" />
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined text-xl">error</span>
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          {/* Page Title */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">System Overview</h2>
              <p className="text-slate-500 text-sm">Data updated: {isLoading ? 'Loading...' : 'Just now'}</p>
            </div>
          </div>

          {/* Summary Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Registered Farmers', value: stats.totalFarmers.toLocaleString(), icon: 'person_pin', color: 'primary' },
              { label: 'Approved Users', value: stats.approvedFarmers.toLocaleString(), icon: 'verified', color: 'emerald' },
              { label: 'Pending Verifications', value: stats.pendingRegistrations.toLocaleString(), icon: 'pending_actions', color: 'amber' },
              { label: 'Total Farm Size (Ha)', value: stats.totalFarmSize.toLocaleString(), icon: 'landscape', color: 'sky' }
            ].map((stat, idx) => (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" key={idx}>
                <div className="flex justify-between items-start">
                  <div className={`size-12 rounded-lg bg-${stat.color === 'primary' ? 'primary' : stat.color + '-500'}/10 flex items-center justify-center text-${stat.color === 'primary' ? 'primary' : stat.color + '-500'}`}>
                    <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                  </div>
                </div>
                <p className="mt-4 text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-3xl font-bold mt-1 tracking-tight">{isLoading ? '...' : stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Registrations Table */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h4 className="font-bold text-lg">Recent Farmer Registrations</h4>
                <Link className="text-primary text-sm font-bold hover:underline" to="/manage-farmers">View All Records</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[11px] font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Farmer Details</th>
                      <th className="px-6 py-4">NIN</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {isLoading ? (
                      <tr>
                        <td className="px-6 py-4 text-center" colSpan={5}>
                          <div className="flex items-center justify-center gap-2 py-4">
                            <span className="animate-spin material-symbols-outlined text-primary">sync</span>
                            <span className="text-sm font-medium">Loading records...</span>
                          </div>
                        </td>
                      </tr>
                    ) : recentFarmers.length === 0 ? (
                      <tr>
                        <td className="px-6 py-4 text-center text-slate-500" colSpan={5}>No records found</td>
                      </tr>
                    ) : recentFarmers.map((farmer) => (
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" key={farmer.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                              {farmer.full_name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-bold">{farmer.full_name}</p>
                              <p className="text-xs text-slate-500">ID: #{farmer.farmer_id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">{farmer.nin}</td>
                        <td className="px-6 py-4 text-sm">{farmer.farm_state}, {farmer.farm_lga}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${farmer.farmer_status === 'approved' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                            farmer.farmer_status === 'pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                              'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                            }`}>
                            {farmer.farmer_status.charAt(0).toUpperCase() + farmer.farmer_status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-block text-slate-400" to={`/farmer-profile/${farmer.id}`}>
                            <span className="material-symbols-outlined">visibility</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Distribution Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <h4 className="font-bold text-lg mb-6">Farmer Distribution</h4>
              <div className="flex-1 space-y-4">
                {[
                  { label: 'Crop Farmers', count: stats.approvedFarmers + stats.pendingRegistrations, total: stats.totalFarmers, color: 'primary' },
                  { label: 'Verified Farms', count: stats.approvedFarmers, total: stats.totalFarmers, color: 'emerald' },
                ].map((item, idx) => (
                  <div className="space-y-2" key={idx}>
                    <div className="flex justify-between text-xs font-bold">
                      <span>{item.label}</span>
                      <span className="text-slate-400">{item.count} / {item.total}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${item.total > 0 ? (item.count / item.total) * 100 : 0}%` }}
                        className={`h-full bg-${item.color === 'primary' ? 'primary' : item.color + '-500'}`}
                        initial={{ width: 0 }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    The distribution shows real-time data from the national registry database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 text-center text-xs text-slate-400 mt-auto">
          <p>© 2024 National Farmer Registration System. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
