import React from 'react';
import { Link } from 'react-router-dom';

const FarmerProfile: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-3" to="/dashboard">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined block">agriculture</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">AgroAdmin<span className="text-primary">NG</span></h2>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
              <Link className="text-sm font-semibold text-primary" to="/manage-farmers">Farmers</Link>
              <Link className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" to="/reports">Reports</Link>
              <Link className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" to="/admin-settings">Settings</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5">
              <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-400" placeholder="Search farmers..." type="text" />
            </div>
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="Admin user profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzbuQjZm9ZHs4Xz4MNw2aG95SzxOd6M7qLg6q2HRo1Cz3poSkAHDEoTv5MxJkM_kSJyewO1WADSU_r_N0dEFntwn-G1ikE8JuxsTBLa3cyvVfVp5C5a5o46MS3Sp1fU5r6Iv_mAYnuNMhv2zKkTHeujoH0TP1_kqGfD5tSIr7VMHVVhZjC2uq5IgzSF1C5BQB9tZMh0aJkNl8eaZcXxGrebBaya1QdahavCOTSzvT_3fRfirUUrK594d1YVfjHH6XZAeUYeDo0VnY" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        {/* Farmer Profile Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"></div>
          <div className="px-8 pb-8 -mt-12">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl border-4 border-white dark:border-slate-900 overflow-hidden shadow-lg bg-slate-200">
                    <img className="w-full h-full object-cover" data-alt="Passport photo of farmer Oluwaseun Adebayo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2TCArupfZh69tiomG0Wcsq11Fplwf2pg_QlZeoIv0fdHD-Cx4WafmoLpiBMN1isB777AN2HJuzcnVjWMeC8LzO-D80WoWQZW46DY3G8HAV5bRhcMJ8UmGdoPhkWZTAIOuNMKynu17g_b2Ql1IQUKiJ7z1k3z10AcrHnOY6XdDFFtmYIffJl1LdBbFU8SFXMQkZ0EQR4lUOPcfftnIqY-wSSLomPDF829JKejoymQrDKwwEQHkXmaW76WCLwpcVLbW-rJIrFBJow" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
                    <span className="material-symbols-outlined text-sm block">verified</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Oluwaseun Adebayo</h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1 text-slate-500 dark:text-slate-400">
                    <span className="text-sm font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-md">ID: NG-FARM-2023-001</span>
                    <span className="flex items-center gap-1 text-sm">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      Ibadan North, Oyo State
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined text-lg">edit</span>
                  Edit Profile
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined text-lg">badge</span>
                  Download ID
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Total Acreage</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">15.5 <span className="text-sm font-normal text-slate-500">Ha</span></p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Primary Crop</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">Maize</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Livestock</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">Poultry</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Status</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                  <p className="text-lg font-bold text-primary">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="border-b border-slate-100 dark:border-slate-800">
            <nav className="flex px-8 gap-8">
              <button className="py-5 text-sm font-bold text-primary border-b-2 border-primary">Personal Details</button>
              <button className="py-5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors border-b-2 border-transparent">Farm Details</button>
              <button className="py-5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors border-b-2 border-transparent">Uploaded Images</button>
            </nav>
          </div>
          <div className="p-8">
            {/* Grid Content (Personal Details displayed by default) */}
            <div className="grid md:grid-cols-2 gap-12">
              <section>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  General Information
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Full Name</span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Oluwaseun Temitope Adebayo</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Date of Birth</span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">May 14, 1985 (38 years)</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Gender</span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Male</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Marital Status</span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Married</span>
                  </div>
                </div>
              </section>
              <section>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">contact_phone</span>
                  Contact & Verification
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Phone Number</span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">+234 803 123 4567</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Address</span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">oluwaseun.adebayo@agromail.ng</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">NIN Number</span>
                    <span className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                      ********4291
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded uppercase font-bold">Verified</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">BVN Status</span>
                    <span className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                      Linked
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    </span>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">photo_library</span>
                Recent Uploads
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
                  <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" data-alt="Vibrant green maize crop field in daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyMlEyH6rXFyl4Cwayg476W6di3R9AEfj9TIGRwzkXIr0PbXrnzsUnuOltjFXNQkf_Ymh5wtP2SgE7dsmcdTYmm1T-EVcDp8bqcgJF3AQSL8jEDAd9s6SZFSvtS8WD8c68jpVzaGuCsj5u4r-9vO0W5uaF5BUGO2hd5VffyWAjAmjlCUgbD9VxBC3oIBLRugXmwJ9yl9NzvMyLsYFjUvL35JZmkSk3NDLHygDzTAtyVPrOPyE77p-3vWOZhvHIH8qm_n6fPIrc1Gc" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold px-2 py-1 bg-primary rounded">Crop View</span>
                  </div>
                </div>
                <div className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
                  <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" data-alt="Aerial view of fertile farmland layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGi5ZPIsP8YcJj8NwgOK4JTa_AQ4dt3TBBrTcQV5zOjW_BLYt_K9Wo9Qqc_uq7q2ZPliCzN5WIvlEeEld12q5Ps1J9JOLO_1_MLojDPkOhp0mqpn4ZtvoXJzxcSQVRvMTbZAX9ztdHD14cdzveYlIzFDeDCF45d-QxIUfRpIfBySFt-hjJXq4QgKf53xhKwXXEr5AZLSm2dDREckUq2b93E4tTAI2ZWCapEqznURU_KRXF7BJ2vnBbbJsOCMCwpvdhOb0JNW3ZDWA" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold px-2 py-1 bg-primary rounded">Land Doc</span>
                  </div>
                </div>
                <div className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
                  <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" data-alt="Poultry farm with healthy white chickens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5r0kwYP-cWL7he0HHFeFFILIJnv_aC8du8BLWFlqeC8B8Q9EuPo40UPI4h7MPlL0IhuqJ6RHiOstKeMhNnFiqqBcrHQWYxEj8R-fWpbZ9HUg4wVXUcyJby8zgMOO4xbPOUkV7VDuI3dmZEtE7GYZ1szZ1E4gsPc_iDtYpZBqk_AynsyfTV-DbirM22qYzEwz7M7fQiPlRvd-VioI5_IFRQK0JV04bbZbBSQVrQEEfi6IcIgmjOw6kksznno8y9ZVZfWosqhx1HAk" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold px-2 py-1 bg-primary rounded">Livestock</span>
                  </div>
                </div>
                <div className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
                  <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" data-alt="Tractor plowing soil in open field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIypONKYCav7vL2TRA-6vQ68FQUa6VjCwUjjkaq-EQnc4XugNCDzZiXgU61t4Ev4CBORKhz0n8Vwnxy0WgH-ovZmm0USvXTOHS9EE1LaL0oMajhsWtWSXu_V-yXm46tJUDsMNgF2UV_yl4o_7J2p09WGdzMXFp4IM8S0Zqn77JryoY43K3sGLOhOLAtASjCiPXkEn5GhC4aUrcKu7Oiw_HZyKqwmhR7xtysbPgeDSbgg6LwywrwsAcinWUWQcdPZ7RSartQYKo_M4" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold px-2 py-1 bg-primary rounded">Equipment</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-slate-400 dark:text-slate-600 hover:border-primary hover:text-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-3xl">add_a_photo</span>
                  <span className="text-[10px] font-bold mt-2 uppercase">Upload New</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Context */}
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">map</span>
                Farm Geographical Location
              </h3>
              <button className="text-sm font-bold text-primary hover:underline">View on Map</button>
            </div>
            <div className="relative w-full h-64 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img className="w-full h-full object-cover" data-alt="Top down satellite view of green terrain" data-location="Ibadan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhfOS1XGiegXZHgJfqady_KxQ8esuLzvcebkf8yNMjE8JrAuDY6vC6btUvjiM84Dcq1WF5C1cBUnnxiuWuy_f_9cBAm_3ZPczxW2xV3JkUjjlGmxzZeRDhF-mOHFaPfa0npy-_nnIP-Jy3MlewK0cQ4nMU9OkBSR3y_odEn8ly_IuovYiduiigAt0WKYs5_TgexGR_sK1QevHovy_WepMUuW8Ad8j7eHSYiSBmu5Ui3WN0B5AIhXR2pU5qat43Bf0YMTiWhjhVlU" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="material-symbols-outlined text-4xl text-red-500 drop-shadow-lg">location_on</span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-3 rounded-lg text-[10px] font-mono border border-slate-200 dark:border-slate-800">
                LAT: 7.3775° N <br /> LONG: 3.9470° E
              </div>
            </div>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Verification Score</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">98</span>
                <span className="text-xl font-bold text-slate-500">/ 100</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                This profile has high data integrity. All mandatory documents are verified and GPS data matches registered land area.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>DATA COMPLETENESS</span>
                <span className="text-primary">100%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 lg:px-20 py-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-sm text-slate-500">© 2024 Federal Ministry of Agriculture - Farmer Registration System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FarmerProfile;
