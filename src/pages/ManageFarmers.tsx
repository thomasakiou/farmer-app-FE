import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageFarmers: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear auth state here
    navigate('/login');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased flex h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex flex-col bg-white dark:bg-background-dark border-r border-primary/10">
        <div className="p-6 flex items-center gap-3">
          <Link className="flex items-center gap-3" to="/dashboard">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">agriculture</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">AgroAdmin</h1>
              <p className="text-xs text-primary font-medium uppercase tracking-wider">Nigeria Registry</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" to="/manage-farmers">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Farmers</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">map</span>
            <span className="text-sm font-medium">Farm Mapping</span>
          </a>
          <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" to="/reports">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm font-medium">Reports</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" to="/admin-settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
        <div className="p-4 mt-auto">
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-slate-200" data-alt="Admin user profile headshot photo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2dTfl5zs7w1_fwcI4Q3qKZc7E7wtI1Qd4x4ZZqX4Xkqnu_3IkA782mpylUZhm_6x8XlaCjLm8tKA9vWX-ybMeE8Cl-y34eP6invFCqHqfX7WAkF4d0SJf7GNSowUGUERxGQ0c0qlU8Z1daRjN9N5xj62P2bejFbX1uBkr7C-BDYEGLePRn-RjTkhFPsYC_CJ4Ttkz52d2rConZ5uuauoqqCq8NGk8kyB11QaI9lrs1YpOyqaHSptcmhOsPdyloXG-d7uzNUaOZ4A')" }}></div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Ibrahim Ahmed</p>
                <p className="text-xs text-slate-500 truncate">System Admin</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 text-xs font-bold text-red-500 hover:bg-red-50 py-2 rounded-lg transition-colors" onClick={handleLogout}>
              <span className="material-symbols-outlined text-sm">logout</span>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-background-dark border-b border-primary/10 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Manage Farmers</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all" to="/register-farmer">
              <span className="material-symbols-outlined text-sm">person_add</span>
              Register New Farmer
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Total Farmers</p>
                <span className="material-symbols-outlined text-primary">groups</span>
              </div>
              <p className="text-2xl font-black mt-2">12,840</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs font-bold text-primary">+12%</span>
                <span className="text-xs text-slate-400">vs last month</span>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Verified</p>
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
              <p className="text-2xl font-black mt-2">10,502</p>
              <div className="flex items-center gap-1 mt-2 text-primary font-bold">
                <span className="text-xs">82% Overall</span>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Pending Approval</p>
                <span className="material-symbols-outlined text-amber-500">pending_actions</span>
              </div>
              <p className="text-2xl font-black mt-2">2,338</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs font-bold text-amber-500">+15%</span>
                <span className="text-xs text-slate-400">Review required</span>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-white dark:bg-background-dark p-4 rounded-xl border border-primary/10 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm" placeholder="Search by Farmer Name or 11-digit NIN..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="pl-3 pr-8 py-2 bg-background-light dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none min-w-[140px]">
                  <option>All States</option>
                  <option>Kano</option>
                  <option>Lagos</option>
                  <option>Oyo</option>
                  <option>Kaduna</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">keyboard_arrow_down</span>
              </div>
              <div className="relative">
                <select className="pl-3 pr-8 py-2 bg-background-light dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none min-w-[140px]">
                  <option>Farm Type</option>
                  <option>Crop</option>
                  <option>Livestock</option>
                  <option>Fishery</option>
                  <option>Mixed</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">keyboard_arrow_down</span>
              </div>
              <div className="relative">
                <select className="pl-3 pr-8 py-2 bg-background-light dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none min-w-[140px]">
                  <option>Status</option>
                  <option>Verified</option>
                  <option>Pending</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">keyboard_arrow_down</span>
              </div>
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>

          {/* Farmer Table */}
          <div className="bg-white dark:bg-background-dark rounded-xl border border-primary/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/5 text-slate-600 dark:text-slate-400">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Farmer Name</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">State</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">NIN</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Farm Type</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Reg. Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {/* Row 1 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">AO</div>
                        <div>
                          <p className="text-sm font-bold">Adekunle Olumide</p>
                          <p className="text-xs text-slate-400">ID: #FR-88902</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Oyo</td>
                    <td className="px-6 py-4 text-sm font-mono">1234****901</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold uppercase">Crop</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase">
                        <span className="size-1.5 rounded-full bg-primary"></span>
                        Verified
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link className="p-1.5 text-slate-400 hover:text-primary transition-colors" to="/farmer-profile">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs">MU</div>
                        <div>
                          <p className="text-sm font-bold">Musa Usman</p>
                          <p className="text-xs text-slate-400">ID: #FR-88903</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Kano</td>
                    <td className="px-6 py-4 text-sm font-mono">5567****332</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold uppercase">Livestock</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">Oct 26, 2023</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-amber-100 text-amber-600 rounded-full text-[10px] font-bold uppercase">
                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link className="p-1.5 text-slate-400 hover:text-primary transition-colors" to="/farmer-profile">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">CE</div>
                        <div>
                          <p className="text-sm font-bold">Chukwudi Eze</p>
                          <p className="text-xs text-slate-400">ID: #FR-88904</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Enugu</td>
                    <td className="px-6 py-4 text-sm font-mono">8812****004</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold uppercase">Fishery</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">Nov 01, 2023</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase">
                        <span className="size-1.5 rounded-full bg-primary"></span>
                        Verified
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link className="p-1.5 text-slate-400 hover:text-primary transition-colors" to="/farmer-profile">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">FA</div>
                        <div>
                          <p className="text-sm font-bold">Fatima Abubakar</p>
                          <p className="text-xs text-slate-400">ID: #FR-88905</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Kaduna</td>
                    <td className="px-6 py-4 text-sm font-mono">9923****115</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold uppercase">Mixed</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">Nov 03, 2023</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase">
                        <span className="size-1.5 rounded-full bg-primary"></span>
                        Verified
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link className="p-1.5 text-slate-400 hover:text-primary transition-colors" to="/farmer-profile">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">BN</div>
                        <div>
                          <p className="text-sm font-bold">Benson Nwachukwu</p>
                          <p className="text-xs text-slate-400">ID: #FR-88906</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Lagos</td>
                    <td className="px-6 py-4 text-sm font-mono">2201****778</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold uppercase">Fishery</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">Nov 05, 2023</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-amber-100 text-amber-600 rounded-full text-[10px] font-bold uppercase">
                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link className="p-1.5 text-slate-400 hover:text-primary transition-colors" to="/farmer-profile">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-primary/5 flex items-center justify-between bg-white dark:bg-background-dark">
              <p className="text-xs text-slate-500">Showing <span className="font-bold text-slate-900 dark:text-slate-100">1-10</span> of <span className="font-bold text-slate-900 dark:text-slate-100">12,840</span> farmers</p>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="size-8 flex items-center justify-center bg-primary text-white rounded text-xs font-bold">1</button>
                <button className="size-8 flex items-center justify-center hover:bg-slate-100 rounded text-xs font-bold">2</button>
                <button className="size-8 flex items-center justify-center hover:bg-slate-100 rounded text-xs font-bold">3</button>
                <span className="text-slate-400">...</span>
                <button className="size-8 flex items-center justify-center hover:bg-slate-100 rounded text-xs font-bold">128</button>
                <button className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageFarmers;
