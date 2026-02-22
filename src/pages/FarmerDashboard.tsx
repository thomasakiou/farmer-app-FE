import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, FarmerOut } from '../services/api';

const FarmerDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [farmer, setFarmer] = useState<FarmerOut | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFarmerData = async () => {
            try {
                const data = await api.getMyData();
                setFarmer(data);
            } catch (err: any) {
                setError(err.message || 'Failed to load farmer data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchFarmerData();
    }, []);

    const handleLogout = () => {
        api.logout();
        navigate('/login');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="flex flex-col items-center gap-4">
                    <span className="animate-spin material-symbols-outlined text-primary text-4xl">sync</span>
                    <p className="text-slate-500 font-medium tracking-wide">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    if (error || !farmer) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-red-100 dark:border-red-900/30 text-center max-w-md">
                    <span className="material-symbols-outlined text-red-500 text-5xl mb-4">error</span>
                    <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
                    <p className="text-slate-500 mb-6">{error || 'Could not verify farmer profile'}</p>
                    <button className="px-6 py-2 bg-primary text-slate-900 font-bold rounded-lg" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display flex flex-col">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-4 shrink-0 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg text-white shadow-md shadow-primary/20">
                            <span className="material-symbols-outlined block text-2xl">agriculture</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-none">Farmer<span className="text-primary">Portal</span></h2>
                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Southern Ijaw LGA</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-3 border-r border-slate-200 dark:border-slate-700 pr-6 mr-2">
                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs overflow-hidden border border-primary/30">
                                {farmer.image_url ? (
                                    <img src={farmer.image_url} alt={farmer.full_name} className="w-full h-full object-cover" />
                                ) : (
                                    farmer.full_name.charAt(0)
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-bold leading-none">{farmer.full_name}</p>
                                <p className="text-xs text-slate-500">ID: #{farmer.farmer_id}</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-500 transition-colors" onClick={handleLogout}>
                            <span className="material-symbols-outlined text-lg">logout</span>
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-8 lg:py-12 overflow-y-auto">
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-black tracking-tight mb-2">Welcome back, {farmer.full_name.split(' ')[0]}</h1>
                        <p className="text-slate-500">Here is a summary of your registration and farm verification status.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className={`px-4 py-2 rounded-xl flex items-center gap-2 border font-bold ${farmer.farmer_status === 'approved' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800'}`}>
                            <span className="material-symbols-outlined">
                                {farmer.farmer_status === 'approved' ? 'verified' : 'pending_actions'}
                            </span>
                            Profile: {farmer.farmer_status.charAt(0).toUpperCase() + farmer.farmer_status.slice(1)}
                        </div>
                        <div className={`px-4 py-2 rounded-xl flex items-center gap-2 border font-bold ${farmer.farm_status === 'verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800'}`}>
                            <span className="material-symbols-outlined">
                                {farmer.farm_status === 'verified' ? 'verified' : 'pending_actions'}
                            </span>
                            Farm: {(farmer.farm_status || 'Pending').charAt(0).toUpperCase() + (farmer.farm_status || 'Pending').slice(1)}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Personal Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                            <div className="h-24 bg-gradient-to-br from-primary/20 to-transparent"></div>
                            <div className="px-6 pb-6 -mt-12 relative flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center mb-4">
                                    {farmer.image_url ? (
                                        <img src={farmer.image_url} alt={farmer.full_name} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold">{farmer.full_name}</h3>
                                <p className="text-sm font-mono text-slate-500 mt-1">{farmer.nin}</p>
                            </div>
                            <div className="border-t border-slate-100 dark:border-slate-800 p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-sm">cake</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase">Date of Birth</p>
                                        <p className="text-sm font-medium">{farmer.dob}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-sm">wc</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase">Gender</p>
                                        <p className="text-sm font-medium capitalize">{farmer.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">contact_phone</span>
                                Contact Data
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Phone Number</p>
                                    <p className="font-medium">{farmer.phone_number}</p>
                                </div>
                                {farmer.email && (
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Email Address</p>
                                        <p className="font-medium">{farmer.email}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Farm Data */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-center">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">straighten</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Area</span>
                                </div>
                                <h4 className="text-3xl font-black">{farmer.farm_size} <span className="text-lg font-normal text-slate-500">Hectares</span></h4>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-center">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="size-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <span className="material-symbols-outlined">filter_vintage</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Primary Crop</span>
                                </div>
                                <h4 className="text-2xl font-bold truncate">{farmer.crop_type || 'None'}</h4>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                                <h3 className="font-bold text-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">map</span>
                                    Location Details
                                </h3>
                            </div>
                            <div className="p-6 grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Personal Address</h4>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">State / LGA</p>
                                        <p className="font-medium">{farmer.personal_state} / {farmer.personal_lga}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Street Address</p>
                                        <p className="font-medium">{farmer.personal_address}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Farm Address</h4>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">State / LGA</p>
                                        <p className="font-medium">{farmer.farm_state} / {farmer.farm_lga}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Street Address</p>
                                        <p className="font-medium">{farmer.farm_address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {farmer.livestock_type && (
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                                        <span className="material-symbols-outlined text-2xl">pets</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Livestock Info</h4>
                                        <p className="text-sm text-slate-500">Registered animals on the property</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold">{farmer.livestock_type}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs text-slate-400 font-medium tracking-wide">
                        © {new Date().getFullYear()} National Farmer Registry. Information displayed is for reference only.
                        Contact your local registration office for record updates.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default FarmerDashboard;
