import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear auth state here
    navigate('/login');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display flex h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shrink-0">
        <div className="p-6 flex items-center gap-3">
          <Link className="flex items-center gap-3" to="/dashboard">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">agriculture</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Farmer Registry</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Federal Ministry Admin</p>
            </div>
          </Link>
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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/manage-farmers">
            <span className="material-symbols-outlined">groups</span>
            <span className="text-sm">Manage Farmers</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/reports">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Reports & Analytics</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
            <span className="material-symbols-outlined">map</span>
            <span className="text-sm">GIS Mapping</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/admin-settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </Link>
          <Link className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-sm" to="/register-farmer">
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
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/50 text-sm" placeholder="Search farmers by NIN, ID, or name..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:border-slate-800 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">Olusola Adeyemi</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Super Admin</p>
              </div>
              <img alt="Admin Profile" className="size-10 rounded-full border-2 border-primary/20 object-cover" data-alt="Professional portrait of a male administrative officer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ALDxx1h8D97FWle-4YqGruzTcyOY0iAQRfl_ADNHACndpnAzWH7LkfTqVAnUTvilreGL8TiudJ3uurMljWihl1vGjaGeNo8iIXM409sshRwPaxh2EmoW0rinp1XHVPx9QBMQ633FyServwUehG_yLJSXmrVyozyZ0LGQYmGB4lJuNrouvD7pMBFvFW3hc3jim0r3ElximnlwYMMwrNVg3wZCcNWz27cSZXUuAX0mETrSI-l-dXaeJpiYMjEak0Sz-ipo8EvLi7I" />
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 space-y-8">
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">System Overview</h2>
              <p className="text-slate-500 text-sm">Data updated: Just now</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                <span>Last 30 Days</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-lg">file_download</span>
                <span>Export Data</span>
              </button>
            </div>
          </div>

          {/* Summary Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">person_pin</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold flex items-center gap-0.5">+12.5% <span className="material-symbols-outlined text-xs">trending_up</span></span>
              </div>
              <p className="mt-4 text-slate-500 text-sm font-medium uppercase tracking-wider">Registered Farmers</p>
              <h3 className="text-3xl font-bold mt-1 tracking-tight">125,400</h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <span className="text-slate-400 text-xs font-bold">Stable</span>
              </div>
              <p className="mt-4 text-slate-500 text-sm font-medium uppercase tracking-wider">Active States</p>
              <h3 className="text-3xl font-bold mt-1 tracking-tight">36</h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold flex items-center gap-0.5">+8.2% <span className="material-symbols-outlined text-xs">trending_up</span></span>
              </div>
              <p className="mt-4 text-slate-500 text-sm font-medium uppercase tracking-wider">Crop Farmers</p>
              <h3 className="text-3xl font-bold mt-1 tracking-tight">81,510</h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <span className="material-symbols-outlined text-2xl">pet_supplies</span>
                </div>
                <span className="text-rose-500 text-xs font-bold flex items-center gap-0.5">-2.4% <span className="material-symbols-outlined text-xs">trending_down</span></span>
              </div>
              <p className="mt-4 text-slate-500 text-sm font-medium uppercase tracking-wider">Livestock Farmers</p>
              <h3 className="text-3xl font-bold mt-1 tracking-tight">43,890</h3>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bar Chart: Farmers per State */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-lg">Top 7 States by Registration</h4>
                <select className="text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-1 px-3">
                  <option>By Region</option>
                  <option>North West</option>
                  <option>North East</option>
                  <option>South West</option>
                </select>
              </div>
              <div className="flex-1 flex items-end justify-between gap-4 px-2 min-h-[250px]">
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary rounded-t-md relative group" style={{ height: '90%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">24.5k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Kano</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary/80 rounded-t-md relative group" style={{ height: '75%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">19.2k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Kaduna</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary/70 rounded-t-md relative group" style={{ height: '60%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">15.8k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Oyo</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary/60 rounded-t-md relative group" style={{ height: '45%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">12.1k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Benue</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary/50 rounded-t-md relative group" style={{ height: '40%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">10.8k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Plateau</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary/40 rounded-t-md relative group" style={{ height: '35%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">9.5k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Bauchi</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-primary/30 rounded-t-md relative group" style={{ height: '25%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">6.2k</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Enugu</span>
                </div>
              </div>
            </div>

            {/* Pie Chart Illustration: Farm Type */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <h4 className="font-bold text-lg mb-8">Farm Type Distribution</h4>
              <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                {/* Visual Representation of a Pie Chart using CSS */}
                <div className="size-48 rounded-full flex items-center justify-center relative overflow-hidden bg-primary/10 border-4 border-white dark:border-slate-900" style={{ background: 'conic-gradient(#3fd411 0% 65%, #f59e0b 65% 100%)' }}>
                  <div className="size-24 rounded-full bg-white dark:bg-slate-900 shadow-inner flex flex-col items-center justify-center">
                    <p className="text-xs font-bold text-slate-400 uppercase">Total</p>
                    <p className="text-xl font-bold">125k</p>
                  </div>
                </div>
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-full bg-primary"></span>
                      <span className="font-medium">Crop Farming</span>
                    </div>
                    <span className="font-bold">65%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="size-3 rounded-full bg-amber-500"></span>
                      <span className="font-medium">Livestock</span>
                    </div>
                    <span className="font-bold">35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Registrations Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h4 className="font-bold text-lg">Recent Farmer Registrations</h4>
              <Link className="text-primary text-sm font-bold hover:underline" to="/manage-farmers">View All Records</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Farmer Details</th>
                    <th className="px-6 py-4">Registry ID</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Primary Type</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">BA</div>
                        <div>
                          <p className="text-sm font-bold">Bello Abubakar</p>
                          <p className="text-xs text-slate-500">bello.a@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">NFR-2024-8842</td>
                    <td className="px-6 py-4 text-sm">Kano, Ungogo</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-amber-600 text-sm">eco</span> Maize</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold">Verified</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-block" to="/farmer-profile">
                        <span className="material-symbols-outlined text-slate-400">visibility</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">CO</div>
                        <div>
                          <p className="text-sm font-bold">Chidi Okafor</p>
                          <p className="text-xs text-slate-500">c.okafor@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">NFR-2024-9120</td>
                    <td className="px-6 py-4 text-sm">Enugu, Nsukka</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-amber-600 text-sm">eco</span> Cassava</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-block" to="/farmer-profile">
                        <span className="material-symbols-outlined text-slate-400">visibility</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">FA</div>
                        <div>
                          <p className="text-sm font-bold">Fatima Aliyu</p>
                          <p className="text-xs text-slate-500">fatima.a@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">NFR-2024-8501</td>
                    <td className="px-6 py-4 text-sm">Kaduna, Zaria</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-rose-500 text-sm">pet_supplies</span> Poultry</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold">Verified</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-block" to="/farmer-profile">
                        <span className="material-symbols-outlined text-slate-400">visibility</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">TA</div>
                        <div>
                          <p className="text-sm font-bold">Tunde Ajayi</p>
                          <p className="text-xs text-slate-500">t.ajayi@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">NFR-2024-1102</td>
                    <td className="px-6 py-4 text-sm">Oyo, Ibadan</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-amber-600 text-sm">eco</span> Cocoa</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold">Verified</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-block" to="/farmer-profile">
                        <span className="material-symbols-outlined text-slate-400">visibility</span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 text-center text-xs text-slate-400 mt-auto">
          <p>© 2024 National Farmer Registration System. All rights reserved. Powered by AgricTech Solutions.</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
