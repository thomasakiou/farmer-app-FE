import React from 'react';

const RegisterFarmer: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">agriculture</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AgroAdmin <span className="text-primary">Nigeria</span></h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Dashboard</a>
              <a className="text-sm font-semibold text-primary" href="#">Farmers</a>
              <a className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Farms</a>
              <a className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Reports</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50" placeholder="Search farmers..." type="text" />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary text-xl">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Register New Farmer</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Fill in the official details to onboard a new farmer to the federal registry.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">drafts</span>
              Save Draft
            </button>
          </div>
        </div>

        {/* Wizard Progress Bar */}
        <div className="mb-10 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative flex justify-between items-center w-full max-w-2xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-0">
              <div className="h-full bg-primary" style={{ width: '33%' }}></div>
            </div>
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-xl">person</span>
              </div>
              <span className="text-xs font-bold text-primary">Personal Info</span>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center font-bold ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Location</span>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center font-bold ring-4 ring-white dark:ring-slate-900">
                <span className="material-symbols-outlined text-xl">potted_plant</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Farm Details</span>
            </div>
          </div>
        </div>

        {/* Multi-Step Form Container */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
          {/* Step 1: Personal Information Content */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <span className="material-symbols-outlined">badge</span>
              <h3 className="text-xl font-bold">Step 1: Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Full Name (First, Middle, Surname)</span>
                    <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary py-3" placeholder="Enter farmer's full name" type="text" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">National Identity Number (NIN)</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">fingerprint</span>
                      <input className="w-full pl-11 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary py-3" placeholder="11-digit NIN" type="text" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Required for government subsidy verification.</p>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Date of Birth</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary py-3" type="date" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Gender</span>
                      <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary py-3">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Phone Number</span>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 text-sm font-bold">+234</span>
                      <input className="w-full rounded-r-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary py-3" placeholder="8012345678" type="tel" />
                    </div>
                  </label>
                </div>
              </div>
              {/* Right Column: Passport Upload */}
              <div className="flex flex-col h-full">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 block">Passport Photograph</span>
                <div className="flex-1 min-h-[250px] border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center p-6 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer group">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-primary">account_circle</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Click to upload or drag & drop</p>
                    <p className="text-xs text-slate-400 mt-1">PNG, JPG or JPEG (Max. 2MB)</p>
                  </div>
                  <input className="hidden" type="file" />
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg flex gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-xl">info</span>
                  <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-tight">Ensure the background is plain and the farmer's face is clearly visible for AI verification.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Form Footer Actions */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
            <button className="px-6 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 font-bold hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center gap-2">
              Cancel
            </button>
            <div className="flex gap-4">
              <button className="hidden md:flex px-6 py-2.5 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-all items-center gap-2">
                Preview Info
              </button>
              <button className="px-10 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
                Next: Location
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Form Navigation Help */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div>
              <h4 className="text-sm font-bold">Secure Data</h4>
              <p className="text-xs text-slate-400 mt-1">All information is encrypted according to NITDA regulations.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <h4 className="text-sm font-bold">Fast Approval</h4>
              <p className="text-xs text-slate-400 mt-1">Verify NIN instantly to skip manual document review.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">help</span>
            </div>
            <div>
              <h4 className="text-sm font-bold">Need Help?</h4>
              <p className="text-xs text-slate-400 mt-1">Call official support at 0800-AGRO-SUPPORT.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Map Component Placeholder (Used in Step 2 usually) */}
      <div className="hidden">
        <img alt="Detailed map of Nigerian agricultural zones" data-location="Abuja, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZwGg4jcn2z4y23xuEVwtAmW8SAM9SrgjQ5LB8cvlvC-ZFsdZoBttKgPZW7RnSPt8h27DhB_lhYGeySgyJ4f-zaISdT_lRtvgvmYEIJGUCuNWQOcfETsWc05CV7GG53ENddKspI8gThCAlCgDaRyBiRAKXXBifgvSfghIFDi2YwTVwkhIUWn8majQ_pWLUw020V4OQ2-R30137pp1ungyCTtcqfYcjhwqxZ6v0F3HPWJP8kpkgGOiRJuL3vHycSdm0hcj7sgljEGE" />
      </div>
    </div>
  );
};

export default RegisterFarmer;
