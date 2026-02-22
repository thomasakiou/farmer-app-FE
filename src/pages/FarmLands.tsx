import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api, FarmerOut } from '../services/api';

const FarmLands: React.FC = () => {
    const [farmers, setFarmers] = useState<FarmerOut[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [stateFilter, setStateFilter] = useState('Bayelsa State');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchFarmers();
    }, []);

    const fetchFarmers = async () => {
        setIsLoading(true);
        try {
            const data = await api.getFarmers();
            setFarmers(data);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch farm lands');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyLand = async (id: number) => {
        try {
            await api.updateFarmer(id, { farm_status: 'verified' });
            // Update local state
            setFarmers(prev => prev.map(f => f.id === id ? { ...f, farm_status: 'verified' } : f));
        } catch (err: any) {
            alert('Verification failed: ' + err.message);
        }
    };

    const filteredFarmers = farmers.filter(f => {
        const matchesSearch = f.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.farm_address.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesState = stateFilter === 'All States' || f.farm_state === stateFilter;
        return matchesSearch && matchesState;
    });

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

                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                        <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
                        <span className="font-semibold text-sm">Dashboard</span>
                    </Link>
                    <Link to="/manage-farmers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                        <span className="material-symbols-outlined group-hover:text-primary">group</span>
                        <span className="font-semibold text-sm">Manage Farmers</span>
                    </Link>
                    <Link to="/farm-lands" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary transition-all group">
                        <span className="material-symbols-outlined">potted_plant</span>
                        <span className="font-bold text-sm">Farm Lands</span>
                    </Link>
                    <Link to="/register-farmer" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                        <span className="material-symbols-outlined group-hover:text-primary">person_add</span>
                        <span className="font-semibold text-sm">Register Farmer</span>
                    </Link>
                    <Link to="/media-upload" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                        <span className="material-symbols-outlined group-hover:text-primary">upload_file</span>
                        <span className="font-semibold text-sm">Bulk Upload</span>
                    </Link>
                    <Link to="/reports" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                        <span className="material-symbols-outlined group-hover:text-primary">analytics</span>
                        <span className="font-semibold text-sm">Reports</span>
                    </Link>
                </nav>

                <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
                    <Link to="/admin-settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                        <span className="material-symbols-outlined group-hover:text-primary">settings</span>
                        <span className="font-semibold text-sm">Admin Settings</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 shrink-0">
                    <div className="flex items-center gap-2 lg:gap-4">
                        <button
                            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">Farm Land Verification</h2>
                            <p className="hidden sm:block text-sm text-slate-500 font-medium">Verify and manage agricultural land records</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 border border-slate-200 dark:border-slate-700">
                            <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                            <input
                                type="text"
                                placeholder="Search by farm address or owner..."
                                className="bg-transparent border-none outline-none text-sm ml-2 w-64 text-slate-900 dark:text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="flex items-center gap-1 sm:gap-2 bg-primary text-slate-900 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-lg">add_location</span>
                            <span className="hidden sm:inline">Add Land</span>
                        </button>
                    </div>
                </header>

                {/* Filters */}
                <div className="px-8 py-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="flex flex-wrap gap-4">
                        <select
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none"
                            value={stateFilter}
                            onChange={(e) => setStateFilter(e.target.value)}
                        >
                            <option>All States</option>
                            <option>Bayelsa State</option>
                        </select>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 dark:bg-red-900/10 text-red-600 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 text-center">
                            <span className="material-symbols-outlined text-4xl mb-2">error</span>
                            <p className="font-bold">{error}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredFarmers.map((f) => (
                                <div key={f.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all group">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                                                    <span className="material-symbols-outlined text-2xl">potted_plant</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 dark:text-white leading-tight">{f.full_name}'s Farm</h3>
                                                    <p className="text-xs text-slate-500 font-medium">Size: {f.farm_size} Hectares</p>
                                                </div>
                                            </div>
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${f.farm_status === 'verified'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30'
                                                }`}>
                                                {f.farm_status}
                                            </span>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex gap-2">
                                                <span className="material-symbols-outlined text-sm text-slate-400">location_on</span>
                                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                    {f.farm_address}, {f.farm_lga}, {f.farm_state}
                                                </p>
                                            </div>
                                            <div className="flex gap-2 text-xs">
                                                <span className="font-bold text-slate-500">Crop:</span>
                                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-bold">{f.crop_type}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                                            <button
                                                onClick={() => handleVerifyLand(f.id)}
                                                disabled={f.farm_status === 'verified'}
                                                className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${f.farm_status === 'verified'
                                                    ? 'bg-green-50 text-green-600 dark:bg-green-900/10 cursor-default'
                                                    : 'bg-primary text-slate-900 hover:scale-105 shadow-lg shadow-primary/20'
                                                    }`}
                                            >
                                                <span className="material-symbols-outlined text-sm">{f.farm_status === 'verified' ? 'verified' : 'check_circle'}</span>
                                                {f.farm_status === 'verified' ? 'Verified' : 'Verify Land'}
                                            </button>
                                            <Link to={`/farmer-profile/${f.id}`} className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-400">
                                                <span className="material-symbols-outlined text-sm text-slate-500">open_in_new</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default FarmLands;
