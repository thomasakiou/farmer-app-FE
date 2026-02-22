import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const MediaUpload: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await api.uploadFarmers(file);
      setSuccess(true);
      setTimeout(() => navigate('/manage-farmers'), 2000);
    } catch (err: any) {
      setError(err.message || 'Upload failed. Ensure the file is a valid CSV or XLSX.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    api.logout();
    navigate('/login');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex h-screen overflow-hidden">
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
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold" to="/media-upload">
            <span className="material-symbols-outlined">cloud_upload</span>
            <span className="text-sm">Bulk Upload</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/reports">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm">Reports & Analytics</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/admin-settings">
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
        {/* Header */}
        <header className="h-16 flex items-center justify-start px-4 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 gap-2 lg:gap-4">
          <button
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-lg lg:text-xl font-bold">Bulk Farmer Data Upload</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8 max-w-4xl mx-auto w-full">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Bulk Upload</h1>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">Upload a CSV or XLSX file containing farmer records for bulk registration.</p>
          </div>

          <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <form onSubmit={handleUpload}>
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
                  <span className="material-symbols-outlined text-xl">error</span>
                  <p className="text-sm font-bold">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <p className="text-sm font-bold">File uploaded successfully! Redirecting...</p>
                </div>
              )}

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Upload Data File</label>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group relative">
                  <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{file ? 'description' : 'cloud_upload'}</span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 font-bold text-lg">{file ? file.name : 'Click to select or drag and drop'}</p>
                  <p className="text-slate-500 text-sm mt-1 text-center">Supported formats: .CSV, .XLSX (MAX. 10MB)</p>
                  <input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  className="flex-1 bg-primary text-slate-900 font-bold py-4 px-6 rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={isLoading || !file}
                  type="submit"
                >
                  {isLoading ? (
                    <span className="animate-spin material-symbols-outlined">sync</span>
                  ) : (
                    <span className="material-symbols-outlined">publish</span>
                  )}
                  {isLoading ? 'Processing...' : 'Process Bulk Upload'}
                </button>
                <button
                  className="py-4 px-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  type="button"
                  onClick={() => navigate('/manage-farmers')}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">info</span>
              File Requirements
            </h3>
            <ul className="text-sm space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="text-primary font-bold">01.</span>
                File must contain mandatory columns: Full Name, NIN, Farm State, Farm LGA.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">02.</span>
                Maximum recommended records per upload is 5,000.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">03.</span>
                Ensure NINs are 11 digits long to avoid validation errors.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediaUpload;
