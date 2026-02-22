import React from 'react';

const AdminSettings: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">agriculture</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">National Farmer Registry</h2>
          </div>
          <div className="hidden md:flex flex-col min-w-64">
            <div className="flex w-full items-stretch rounded-lg h-10 bg-slate-100 dark:bg-slate-800">
              <div className="text-slate-500 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input className="form-input flex w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-500 px-3" placeholder="Search farmers or records..." defaultValue="" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
            <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Farmers</a>
            <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Reports</a>
            <a className="text-primary text-sm font-bold border-b-2 border-primary py-4" href="#">Settings</a>
          </nav>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-primary p-0.5 overflow-hidden">
            <img alt="Admin Profile" className="h-full w-full object-cover rounded-full" data-alt="Close up portrait of male admin headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApTVk6J5wwzIvdm3H_Lf-YpJJroQ29ZWOwvHFu-E9T6HriGf6ghXTtod790CjDXqsJl1lm3xFj1dQVkofOxqXBaFCjadKkyK255JXCzDANIjWOv5T2Mpnu2-tDyeOZ6hqWdwAX6A-4_BmvwK4ST9je-_27Kn1J8nzuoJ9nXlKRrHQLHWtM8pVReN3w-VobzTqebVm3lxI33R3FtiQ0FeXwe1FXOzyj0QlLyKOw7XFlBaz5lKbqrhI7cr4pzFoWjUymltlSH-u_AO4" />
          </div>
        </div>
      </header>

      <main className="flex flex-1 px-4 lg:px-10 py-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Sidebar Sidebar */}
        <aside className="w-64 flex flex-col gap-6 shrink-0">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-slate-100 text-xl font-bold px-3">Admin Settings</h1>
            <p className="text-slate-500 text-sm px-3">Manage system access & profile</p>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-primary/10 hover:text-slate-900 transition-all" href="#">
              <span className="material-symbols-outlined">person</span>
              <span className="text-sm font-semibold">General Profile</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-primary/10 hover:text-slate-900 transition-all" href="#">
              <span className="material-symbols-outlined">shield</span>
              <span className="text-sm font-semibold">Security</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white shadow-md shadow-primary/20 transition-all" href="#">
              <span className="material-symbols-outlined">manage_accounts</span>
              <span className="text-sm font-semibold">Role Management</span>
            </a>
            <div className="my-4 border-t border-slate-200 dark:border-slate-800"></div>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-primary/10 hover:text-slate-900 transition-all" href="#">
              <span className="material-symbols-outlined">database</span>
              <span className="text-sm font-semibold">System Logs</span>
            </a>
          </nav>
          <div className="mt-auto bg-primary/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-primary mb-2">
              <span className="material-symbols-outlined text-sm">info</span>
              <span className="text-xs font-bold uppercase tracking-wider">Storage Usage</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-3/4"></div>
            </div>
            <p className="text-[10px] text-slate-500 mt-2">75% of registry storage utilized</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 flex flex-col gap-6 min-w-0">
          {/* Header Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Staff Overview</h2>
              <p className="text-slate-500 text-sm">Control administrative permissions and security levels</p>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-lg">person_add</span>
              <span>Invite New User</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined text-2xl">group</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Admins</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Sessions</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">8</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                <span className="material-symbols-outlined text-2xl">hourglass_empty</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Pending Invites</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">3</p>
              </div>
            </div>
          </div>

          {/* Role Management Table Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Staff List</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Filter by role:</span>
                <select className="form-select text-xs rounded-md border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary py-1 px-3">
                  <option>All Roles</option>
                  <option>Super Admin</option>
                  <option>Data Entry</option>
                  <option>Auditor</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Staff Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Login</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* User 1 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-400">AB</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Abebe Bello</span>
                          <span className="text-xs text-slate-500">abebe.b@registry.gov.ng</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">Super Admin</span>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 italic">2 hours ago</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 2 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-400">CO</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Chidi Okafor</span>
                          <span className="text-xs text-slate-500">c.okafor@registry.gov.ng</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600">Data Entry</span>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 italic">5 mins ago</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 3 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-400">FM</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Fatima Musa</span>
                          <span className="text-xs text-slate-500">fatima.m@registry.gov.ng</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-600">Auditor</span>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 italic">Yesterday</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 4 (Pending) */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 opacity-60">
                        <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-400">ZY</div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Zainab Yusuf</span>
                          <span className="text-xs text-slate-500">z.yusuf@registry.gov.ng</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">Pending Invite</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-orange-500">Awaiting acceptance</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 italic">Never</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-bold text-primary hover:underline">Resend Invite</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <p className="text-xs text-slate-500">Showing 1-4 of 24 staff members</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs font-semibold hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs font-semibold hover:bg-slate-50">Next</button>
              </div>
            </div>
          </div>

          {/* Permissions Matrix Header */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mt-2">
            <h3 className="text-lg font-bold mb-1">Global Permissions Control</h3>
            <p className="text-sm text-slate-500 mb-6">Set standard access levels for the 'Data Entry' role</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <input defaultChecked className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <div>
                  <p className="text-sm font-bold">Read-only Records</p>
                  <p className="text-xs text-slate-500 leading-relaxed">View all registered farmer details and historical census data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input defaultChecked className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <div>
                  <p className="text-sm font-bold">Edit Basic Info</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Update contact information and farm location data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <div>
                  <p className="text-sm font-bold">Approve Grants</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Permission to authorize federal agricultural subsidies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <div>
                  <p className="text-sm font-bold">Financial Reporting</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Access to expenditure logs and system audit trails.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input defaultChecked className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <div>
                  <p className="text-sm font-bold">Verify Identity</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Ability to confirm NIN and Biometric data matches.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <div>
                  <p className="text-sm font-bold">System Configuration</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Change core registry settings and API parameters.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
              <button className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Discard Changes</button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">Save Permissions</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center text-xs text-slate-400">
          <p>© 2024 Federal Ministry of Agriculture. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Security Protocols</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminSettings;
