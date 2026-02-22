import React from 'react';
import { Link } from 'react-router-dom';

const MediaUpload: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-3 text-primary" to="/dashboard">
              <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">agriculture</span>
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Nigerian Farmer Admin</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
              <Link className="text-primary text-sm font-semibold border-b-2 border-primary pb-1" to="/manage-farmers">Farmers</Link>
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Media Library</a>
              <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to="/reports">Reports</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
            <div className="size-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
              <img alt="Admin Profile" className="w-full h-full rounded-full object-cover" data-alt="Circular profile picture of administrative user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKI0Wu9fY20mb1nI0Bg2oXaIDUHhtg-cgqm2RjjfcuLX4jhNDjWnsyh4fYMvf8MxcDNuVLsezMYBua_18aw6j-90ku--REd6uEXtuU2u1B-JUy_dGHts5jIQDLhb790KwA79fVVPYmrRyHfHwp_yD_yop6DT6MlnxxxjiBjHTNzlo0AcjuzMfO6Jxz-EfsQvhyxhYMe_U-wnz64DNhCKT82YZTSRcYwClKHsVTXx2fl10NdLT0Tyt-uB-AT-ggFQMVT361dHPcvps" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-20 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <a className="text-primary font-medium hover:underline" href="#">Admin</a>
          <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          <span className="text-slate-500">Media Management</span>
          <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          <span className="text-slate-900 dark:text-slate-100 font-semibold">Upload Farm Media</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Form Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Upload Farm Media</h1>
              <p className="text-slate-500 mt-2">Associate high-quality images of crops, land, or livestock with a registered farmer's profile for verification and monitoring.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
              {/* Form Section: Identity */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Select Registered Farmer</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                  <select className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option disabled selected value="">Search by Name, Farmer ID, or Location</option>
                    <option value="1">Adebayor Johnson - #NGA-8829 - Kano</option>
                    <option value="2">Fatima Musa - #NGA-1032 - Kaduna</option>
                    <option value="3">Chidi Okafor - #NGA-4491 - Enugu</option>
                    <option value="4">Zainab Bello - #NGA-7732 - Bauchi</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Form Section: Category */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Image Category</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="relative flex items-center p-4 rounded-lg border-2 border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all group">
                    <input defaultChecked className="sr-only peer" name="category" type="radio" />
                    <div className="peer-checked:text-primary flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary peer-checked:text-primary">potted_plant</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 peer-checked:text-primary">Crop Data</span>
                    </div>
                    <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                  </label>
                  <label className="relative flex items-center p-4 rounded-lg border-2 border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all group">
                    <input className="sr-only peer" name="category" type="radio" />
                    <div className="peer-checked:text-primary flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary peer-checked:text-primary">landscape</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 peer-checked:text-primary">Land Survey</span>
                    </div>
                    <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                  </label>
                  <label className="relative flex items-center p-4 rounded-lg border-2 border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all group">
                    <input className="sr-only peer" name="category" type="radio" />
                    <div className="peer-checked:text-primary flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary peer-checked:text-primary">pets</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 peer-checked:text-primary">Livestock</span>
                    </div>
                    <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                  </label>
                </div>
              </div>

              {/* Form Section: Upload */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Upload Media Files</label>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                  <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 font-bold text-lg">Click to upload or drag and drop</p>
                  <p className="text-slate-500 text-sm mt-1 text-center">PNG, JPG or JPEG (MAX. 800x400px, 10MB each)</p>
                  <input className="hidden" multiple type="file" />
                </div>
              </div>

              {/* Preview Section (Simulated) */}
              <div className="mb-8 grid grid-cols-4 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group">
                  <img alt="Crop preview" className="w-full h-full object-cover" data-alt="Close up image of healthy green maize crops" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmIc_YPSr-BgZ3PFVol2FGdgdXMwFXgV1vDdlfziGNyZKEeCIsB9otFKVeFWHXWtpD1DPjaHqwOWyLrq-LEO0fy4CqRZX6iq3T_gYaTIi1xdkkWt9dSbTW--lPR36WM8BVhXHZUUI1oaRO0gHjfAOzL-WG3Fui6EyPa7q5V6IY4bXk0egx8mjc3IKrJsSzyw6xeIiLmELHfq8i8wpRdv8YMFSDNEQY9aMlZCK7SLpgXPGvfuRyk0nHOnhijKeZtQgcOQCKv4MGEBY" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 bg-red-500 text-white rounded-full hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 border-2 border-primary/50 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <div className="text-center p-2">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">65% Uploading...</span>
                  </div>
                </div>
              </div>

              {/* Form Section: Description */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Context & Notes</label>
                <textarea className="w-full p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Provide details about the image (e.g., specific area of the farm, crop health status, or livestock count)..." rows={4}></textarea>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button className="flex-1 bg-primary text-slate-900 font-bold py-4 px-6 rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">save</span>
                  Upload and Save to Profile
                </button>
                <button className="py-4 px-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Sidebar Info */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">info</span>
                Upload Tips
              </h3>
              <ul className="text-sm space-y-4 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">01.</span>
                  Ensure the images are taken in clear daylight for better verification.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">02.</span>
                  For land images, try to capture visible landmarks or boundaries.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">03.</span>
                  Tag each image with accurate descriptions to speed up approval.
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="size-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Crops Uploaded</p>
                    <p className="text-[10px] text-slate-500">Ibrahim Musa • 2m ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="size-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-lg">image</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Land Mapping</p>
                    <p className="text-[10px] text-slate-500">Sarah Audu • 15m ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="size-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-orange-600 text-lg">history</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Draft Saved</p>
                    <p className="text-[10px] text-slate-500">System • 1h ago</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 text-sm font-bold text-primary hover:text-primary/80 transition-colors">View All Logs</button>
            </div>
          </div>
        </div>
      </main>

      {/* Success Toast (Floating) */}
      <div className="fixed bottom-8 right-8 bg-slate-900 text-white rounded-xl p-4 shadow-2xl flex items-center gap-4 border border-slate-800 animate-in slide-in-from-bottom-5">
        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">cloud_done</span>
        </div>
        <div>
          <p className="font-bold text-sm">Media Uploaded Successfully</p>
          <p className="text-slate-400 text-xs">Files have been linked to #NGA-8829</p>
        </div>
        <button className="ml-4 text-slate-500 hover:text-white">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default MediaUpload;
