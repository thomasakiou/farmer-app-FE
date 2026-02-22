import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { api, FarmerOut } from '../services/api';

const FarmerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState<FarmerOut | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchFarmer = async () => {
      if (!id) return;
      try {
        const data = await api.getFarmer(parseInt(id));
        setFarmer(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch farmer details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFarmer();
  }, [id]);

  const handleApprove = async () => {
    if (!farmer) return;
    try {
      await api.updateFarmer(farmer.id, { farmer_status: 'approved' });
      setFarmer({ ...farmer, farmer_status: 'approved' });
    } catch (err: any) {
      setError(err.message || 'Failed to approve farmer');
    }
  };

  const handleDelete = async () => {
    if (!farmer || !window.confirm('Are you sure you want to delete this farmer?')) return;
    setIsDeleting(true);
    try {
      await api.deleteFarmer(farmer.id);
      navigate('/manage-farmers');
    } catch (err: any) {
      setError(err.message || 'Failed to delete farmer');
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="flex flex-col items-center gap-4">
          <span className="animate-spin material-symbols-outlined text-primary text-4xl">sync</span>
          <p className="text-slate-500 font-medium tracking-wide">Loading farmer profile...</p>
        </div>
      </div>
    );
  }

  if (error || !farmer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-red-100 dark:border-red-900/30 text-center max-w-md">
          <span className="material-symbols-outlined text-red-500 text-5xl mb-4">error</span>
          <h2 className="text-2xl font-bold mb-2">Error Occurred</h2>
          <p className="text-slate-500 mb-6">{error || 'Farmer not found'}</p>
          <Link className="px-6 py-2 bg-primary text-slate-900 font-bold rounded-lg" to="/manage-farmers">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-3" to="/dashboard">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined block">agriculture</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">AgroAdmin<span className="text-primary">NG</span></h2>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <Link className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" to="/manage-farmers">Farmers</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"></div>
          <div className="px-8 pb-8 -mt-12">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl border-4 border-white dark:border-slate-900 overflow-hidden shadow-lg bg-slate-200 flex items-center justify-center">
                    {farmer.image_url ? (
                      <img src={farmer.image_url} alt={farmer.full_name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-6xl text-slate-400">person</span>
                    )}
                  </div>
                  {farmer.farmer_status === 'approved' && (
                    <div className="absolute -bottom-2 -right-2 bg-primary text-slate-900 p-1 rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
                      <span className="material-symbols-outlined text-sm block">verified</span>
                    </div>
                  )}
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{farmer.full_name}</h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1 text-slate-500 dark:text-slate-400">
                    <span className="text-sm font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-md">ID: #{farmer.farmer_id}</span>
                    <span className="flex items-center gap-1 text-sm">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      {farmer.address}, {farmer.farm_state}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-6 md:mt-0">
                {farmer.farmer_status === 'pending' && (
                  <button
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all shadow-md"
                    onClick={handleApprove}
                  >
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    Approve
                  </button>
                )}
                <Link
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all shadow-md"
                  to={`/edit-farmer/${farmer.id}`}
                >
                  <span className="material-symbols-outlined text-lg">edit</span>
                  Edit
                </Link>
                <button
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-all shadow-md"
                  disabled={isDeleting}
                  onClick={handleDelete}
                >
                  <span className="material-symbols-outlined text-lg">delete</span>
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Farm Size</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{farmer.farm_size} <span className="text-sm font-normal text-slate-500">Ha</span></p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Crop Type</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{farmer.crop_type || 'N/A'}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Livestock</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{farmer.livestock_type || 'N/A'}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Status</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`w-3 h-3 rounded-full ${farmer.farmer_status === 'approved' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  <p className={`text-lg font-bold ${farmer.farmer_status === 'approved' ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {farmer.farmer_status.charAt(0).toUpperCase() + farmer.farmer_status.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">person</span>
            Detailed Information
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">National Identity Number (NIN)</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium font-mono tracking-wider">{farmer.nin}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Date of Birth</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{farmer.dob}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Gender</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium capitalize">{farmer.gender}</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Phone Number</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{farmer.phone_number}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Address</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{farmer.email}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Registration Center (State)</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{farmer.farm_state}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FarmerProfile;
