import React from 'react';
import { Link } from 'react-router-dom';

const Reports: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-2" to="/dashboard">
              <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">agriculture</span>
              </div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">National Farmer Registry</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
              <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" to="/manage-farmers">Farmer Database</Link>
              <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Subsidies</a>
              <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Resources</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400" placeholder="Search reports..." type="text" />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <div className="size-9 rounded-full bg-primary/20 border border-primary/30 overflow-hidden">
              <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKI0Wu9fY20mb1nI0Bg2oXaIDUHhtg-cgqm2RjjfcuLX4jhNDjWnsyh4fYMvf8MxcDNuVLsezMYBua_18aw6j-90ku--REd6uEXtuU2u1B-JUy_dGHts5jIQDLhb790KwA79fVVPYmrRyHfHwp_yD_yop6DT6MlnxxxjiBjHTNzlo0AcjuzMfO6Jxz-EfsQvhyxhYMe_U-wnz64DNhCKT82YZTSRcYwClKHsVTXx2fl10NdLT0Tyt-uB-AT-ggFQMVT361dHPcvps" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Reports & Analytics</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Comprehensive insights into national agricultural data.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1">
              <button className="px-3 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded shadow-sm">Monthly</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Quarterly</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Yearly</button>
            </div>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Export PDF
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">group_add</span>
              </div>
              <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                +12.5%
                <span className="material-symbols-outlined text-sm ml-1">trending_up</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">New Registrations</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">2,543</h3>
            <p className="text-xs text-slate-400 mt-2">vs. 2,260 last month</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                +5.2%
                <span className="material-symbols-outlined text-sm ml-1">trending_up</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Land Mapped (Ha)</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">45,200</h3>
            <p className="text-xs text-slate-400 mt-2">vs. 42,900 last month</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                +8.1%
                <span className="material-symbols-outlined text-sm ml-1">trending_up</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Subsidies Disbursed</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">₦125M</h3>
            <p className="text-xs text-slate-400 mt-2">vs. ₦115M last month</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-rose-50 dark:bg-rose-900/20 rounded-lg text-rose-600 dark:text-rose-400">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <span className="flex items-center text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-full">
                -2.4%
                <span className="material-symbols-outlined text-sm ml-1">trending_down</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Pending Verifications</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">342</h3>
            <p className="text-xs text-slate-400 mt-2">vs. 350 last month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Regional Registration Trends</h3>
              <button className="text-primary text-xs font-bold hover:underline">View Full Report</button>
            </div>
            <div className="h-64 w-full flex items-end justify-between gap-2 px-4">
              {/* Simulated Bar Chart */}
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-primary/20 h-[40%] rounded-t-sm group-hover:bg-primary/30 transition-colors relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[60%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Jan</span>
              </div>
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-primary/20 h-[55%] rounded-t-sm group-hover:bg-primary/30 transition-colors relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[50%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Feb</span>
              </div>
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-primary/20 h-[45%] rounded-t-sm group-hover:bg-primary/30 transition-colors relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[70%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Mar</span>
              </div>
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-primary/20 h-[60%] rounded-t-sm group-hover:bg-primary/30 transition-colors relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[80%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Apr</span>
              </div>
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-primary/20 h-[75%] rounded-t-sm group-hover:bg-primary/30 transition-colors relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[65%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">May</span>
              </div>
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-primary/20 h-[90%] rounded-t-sm group-hover:bg-primary/30 transition-colors relative">
                  <div className="absolute bottom-0 w-full bg-primary h-[85%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Jun</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-primary"></span>
                <span className="text-xs font-medium text-slate-500">North West</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-primary/20"></span>
                <span className="text-xs font-medium text-slate-500">South West</span>
              </div>
            </div>
          </div>

          {/* Secondary Chart / List */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Crop Distribution</h3>
            <div className="flex-1 flex flex-col justify-center gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Maize</span>
                  <span className="text-slate-900 dark:text-slate-100">45%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Rice</span>
                  <span className="text-slate-900 dark:text-slate-100">25%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Cassava</span>
                  <span className="text-slate-900 dark:text-slate-100">20%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-700 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Others</span>
                  <span className="text-slate-900 dark:text-slate-100">10%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 dark:bg-slate-600 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-400 text-center">Data based on verified farm surveys.</p>
            </div>
          </div>
        </div>

        {/* Recent Reports Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Generated Reports</h3>
            <button className="text-primary text-xs font-bold hover:underline">View Archive</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Report Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Generated</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Generated By</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded text-red-500">
                        <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Q3 2024 National Subsidy Report</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">Oct 15, 2024</td>
                  <td className="px-6 py-4 text-sm text-slate-500">System Admin</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Ready</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-500">
                        <span className="material-symbols-outlined text-lg">table_view</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Kano State Farmer Census</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">Oct 12, 2024</td>
                  <td className="px-6 py-4 text-sm text-slate-500">Ibrahim Ahmed</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Ready</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded text-red-500">
                        <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Monthly Verification Audit</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">Oct 01, 2024</td>
                  <td className="px-6 py-4 text-sm text-slate-500">System Auto-Gen</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Processing</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-300 cursor-not-allowed">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
