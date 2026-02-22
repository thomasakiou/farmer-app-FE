import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, FarmerOut } from '../services/api';

const AdminSettings: React.FC = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState<FarmerOut | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const data = await api.getMyData();
        setAdminData(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch admin profile');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  const handleLogout = () => {
    api.logout();
    navigate('/login');
  };

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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/reports">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Reports & Analytics</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold" to="/admin-settings">
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
        <header className="h-16 flex items-center justify-start px-4 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 gap-2 lg:gap-4">
          <button
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-lg lg:text-xl font-bold">Admin Settings</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-10 max-w-4xl mx-auto w-full">
          <div className="space-y-8 lg:space-y-12">
            {/* Profile Section */}
            <section>
              <h3 className="text-2xl font-black mb-6 tracking-tight">Your Profile</h3>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                {isLoading ? (
                  <div className="flex items-center gap-3 py-4">
                    <span className="animate-spin material-symbols-outlined text-primary">sync</span>
                    <span className="text-slate-500">Loading profile...</span>
                  </div>
                ) : error ? (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg text-sm font-bold">
                    {error}
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="size-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary text-4xl font-black">
                      {adminData?.full_name.charAt(0)}
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Full Name</p>
                          <p className="text-lg font-bold">{adminData?.full_name}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                          <p className="text-lg font-bold">{adminData?.email}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">NIN</p>
                          <p className="text-lg font-bold">{adminData?.nin}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Role</p>
                          <p className="text-lg font-bold text-primary">Registry Administrator</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Security Section */}
            <section>
              <h3 className="text-2xl font-black mb-6 tracking-tight">System Security</h3>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">Password Management</h4>
                    <p className="text-sm text-slate-500 mt-1">Update your administrative access credentials.</p>
                  </div>
                  <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Change Password</button>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-red-500">Security Clearance</h4>
                    <p className="text-sm text-slate-500 mt-1">This account has Level 4 clearance for national data access.</p>
                  </div>
                  <span className="material-symbols-outlined text-red-500">verified_user</span>
                </div>
              </div>
            </section>

            {/* Sessions */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black tracking-tight">Active Sessions</h3>
                <button className="text-sm font-bold text-red-500 hover:underline" onClick={handleLogout}>Revoke All Sessions</button>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 rounded-xl">
                    <span className="material-symbols-outlined">laptop_mac</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Chrome on Windows (Current)</p>
                    <p className="text-xs text-slate-500">Abuja, Nigeria • Active now</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase">Current Session</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
