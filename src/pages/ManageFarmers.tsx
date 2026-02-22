import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, FarmerOut } from '../services/api';

const ManageFarmers: React.FC = () => {
  const navigate = useNavigate();
  const [farmers, setFarmers] = useState<FarmerOut[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFarmers, setSelectedFarmers] = useState<number[]>([]);
  const [isDeletingBulk, setIsDeletingBulk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [stateFilter, setStateFilter] = useState('Bayelsa State');
  const [statusFilter, setStatusFilter] = useState('All Status');

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

  const filteredFarmers = farmers.filter(f => {
    const matchesSearch = f.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.nin.includes(searchQuery);
    const matchesState = stateFilter === 'All States' || f.farm_state === stateFilter;
    const matchesStatus = statusFilter === 'All Status' || f.farmer_status === statusFilter.toLowerCase();

    return matchesSearch && matchesState && matchesStatus;
  });

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedFarmers(filteredFarmers.map(f => f.id));
    } else {
      setSelectedFarmers([]);
    }
  };

  const handleSelectOne = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.checked) {
      setSelectedFarmers(prev => [...prev, id]);
    } else {
      setSelectedFarmers(prev => prev.filter(i => i !== id));
    }
  };

  const handleBulkDelete = async () => {
    if (selectedFarmers.length === 0 || !window.confirm(`Are you sure you want to delete ${selectedFarmers.length} selected farmers?`)) return;

    setIsDeletingBulk(true);
    try {
      await Promise.all(selectedFarmers.map(id => api.deleteFarmer(id)));
      // Refetch
      const data = await api.getFarmers();
      setFarmers(data);
      setSelectedFarmers([]);
    } catch (err: any) {
      setError(err.message || 'Failed to delete some or all selected farmers.');
    } finally {
      setIsDeletingBulk(false);
    }
  };

  const stats = {
    total: farmers.length,
    verified: farmers.filter(f => f.farmer_status === 'approved').length,
    pending: farmers.filter(f => f.farmer_status === 'pending').length
  };

  const uniqueStates = Array.from(new Set(farmers.map(f => f.farm_state))).sort();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased flex h-screen overflow-hidden">
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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold" to="/manage-farmers">
            <span className="material-symbols-outlined">groups</span>
            <span className="text-sm">Manage Farmers</span>
          </Link>
          <Link to="/farm-lands" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">potted_plant</span>
            <span className="text-sm">Farm Lands</span>
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
          <button className="w-full mt-4 flex items-center justify-center gap-2 text-slate-500 hover:text-red-500 text-sm font-semibold py-2 transition-colors" onClick={handleLogout}>
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 lg:gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg lg:text-xl font-bold">Manage Farmers</h2>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            {selectedFarmers.length > 0 && (
              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-red-500/20 hover:bg-red-600 transition-all disabled:opacity-50"
                onClick={handleBulkDelete}
                disabled={isDeletingBulk}
              >
                {isDeletingBulk ? (
                  <span className="animate-spin material-symbols-outlined text-sm">sync</span>
                ) : (
                  <span className="material-symbols-outlined text-sm">delete</span>
                )}
                <span className="hidden sm:inline">Delete ({selectedFarmers.length})</span>
                <span className="sm:hidden">Delete</span>
              </button>
            )}
            <Link className="flex items-center gap-2 bg-primary text-slate-900 px-3 lg:px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all" to="/register-farmer">
              <span className="material-symbols-outlined text-sm">person_add</span>
              <span className="hidden sm:inline">Register New Farmer</span>
              <span className="sm:hidden">Register</span>
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined text-xl">error</span>
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Total Farmers</p>
                <span className="material-symbols-outlined text-primary">groups</span>
              </div>
              <p className="text-2xl font-black mt-2">{isLoading ? '...' : stats.total.toLocaleString()}</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Verified</p>
                <span className="material-symbols-outlined text-emerald-500">verified</span>
              </div>
              <p className="text-2xl font-black mt-2">{isLoading ? '...' : stats.verified.toLocaleString()}</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Pending Approval</p>
                <span className="material-symbols-outlined text-amber-500">pending_actions</span>
              </div>
              <p className="text-2xl font-black mt-2">{isLoading ? '...' : stats.pending.toLocaleString()}</p>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm text-slate-900 dark:text-white"
                  placeholder="Search by Farmer Name or NIN..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                className="pl-3 pr-8 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm text-slate-900 dark:text-white"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
              >
                <option>All States</option>
                {uniqueStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <select
                className="pl-3 pr-8 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm text-slate-900 dark:text-white"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Status</option>
                <option>Approved</option>
                <option>Pending</option>
              </select>
            </div>
          </div>

          {/* Farmer Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400">
                    <th className="px-6 py-4 w-10">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 dark:bg-slate-800"
                        checked={selectedFarmers.length > 0 && selectedFarmers.length === filteredFarmers.length}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Farmer Name</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">State / LGA</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">NIN</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Crop/Type</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {isLoading ? (
                    <tr>
                      <td className="px-6 py-8 text-center" colSpan={7}>
                        <div className="flex items-center justify-center gap-2">
                          <span className="animate-spin material-symbols-outlined text-primary">sync</span>
                          <span className="text-sm font-medium">Loading farmer records...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredFarmers.length === 0 ? (
                    <tr>
                      <td className="px-6 py-8 text-center text-slate-500" colSpan={7}>No records matching your criteria</td>
                    </tr>
                  ) : filteredFarmers.map((farmer) => (
                    <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group ${selectedFarmers.includes(farmer.id) ? 'bg-primary/5 dark:bg-primary/10' : ''}`} key={farmer.id}>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 dark:bg-slate-800"
                          checked={selectedFarmers.includes(farmer.id)}
                          onChange={(e) => handleSelectOne(e, farmer.id)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs overflow-hidden">
                            {farmer.image_url ? (
                              <img src={farmer.image_url} alt={farmer.full_name} className="w-full h-full object-cover" />
                            ) : (
                              farmer.full_name.charAt(0)
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-bold">{farmer.full_name}</p>
                            <p className="text-xs text-slate-400">UID: #{farmer.farmer_id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        {farmer.farm_state}, {farmer.farm_lga}
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-500">{farmer.nin}</td>
                      <td className="px-6 py-4">
                        <span className="text-sm">{farmer.crop_type || farmer.livestock_type || 'N/A'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${farmer.farmer_status === 'approved' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                          farmer.farmer_status === 'pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                            'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                          }`}>
                          {farmer.farmer_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link className="p-1.5 text-slate-400 hover:text-primary transition-colors" to={`/farmer-profile/${farmer.id}`}>
                            <span className="material-symbols-outlined text-lg">visibility</span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageFarmers;
