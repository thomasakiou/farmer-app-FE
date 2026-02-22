import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api, FarmerCreate, FarmerOut } from '../services/api';

const BAYELSA_LGAS = [
  'Brass',
  'Ekeremor',
  'Kolokuma/Opokuma',
  'Nembe',
  'Ogbia',
  'Sagbama',
  'Southern Ijaw',
  'Yenagoa'
];

const RegisterFarmer: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [farmers, setFarmers] = useState<FarmerOut[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const fetchExistingData = async () => {
      try {
        const farmersData = await api.getFarmers();
        setFarmers(farmersData);

        if (isEditing && id) {
          setIsLoading(true);
          const specificFarmer = await api.getFarmer(parseInt(id));
          setFormData(specificFarmer);
          if (specificFarmer.image_url) {
            setImagePreview(specificFarmer.image_url);
          }
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Failed to load data", err);
        setIsLoading(false);
      }
    };
    fetchExistingData();
  }, [id, isEditing]);

  const [formData, setFormData] = useState<FarmerCreate>({
    full_name: '',
    nin: '',
    dob: '',
    gender: '',
    phone_number: '',
    email: '',
    personal_address: '',
    personal_state: 'Bayelsa State',
    personal_lga: '',
    farm_address: '',
    farm_state: 'Bayelsa State',
    farm_lga: '',
    farm_size: 0,
    crop_type: '',
    livestock_type: '',
    image_url: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'farm_size' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData(prev => ({ ...prev, image_url: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    setIsCameraActive(true);
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      setMediaStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Could not access camera. Please check camera permissions.");
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const base64String = canvas.toDataURL('image/jpeg');
        setImagePreview(base64String);
        setFormData(prev => ({ ...prev, image_url: base64String }));
        stopCamera();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaStream]);

  const triggerFileUpload = () => fileInputRef.current?.click();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      // Validation Check
      const ninExists = farmers.some(f => f.nin === formData.nin && f.id !== (isEditing ? parseInt(id!) : -1));
      const phoneExists = farmers.some(f => f.phone_number === formData.phone_number && f.id !== (isEditing ? parseInt(id!) : -1));
      const emailExists = formData.email && farmers.some(f => f.email === formData.email && f.id !== (isEditing ? parseInt(id!) : -1));

      if (ninExists) {
        setError(`A farmer with NIN ${formData.nin} is already registered.`);
        return;
      }
      if (phoneExists) {
        setError(`A farmer with Phone Number ${formData.phone_number} is already registered.`);
        return;
      }
      if (emailExists) {
        setError(`A farmer with Email ${formData.email} is already registered.`);
        return;
      }

      setError(null);
    }

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      // The image_url may be empty, let's make sure it's valid
      const dataToSubmit = { ...formData };
      if (dataToSubmit.image_url && !dataToSubmit.image_url.startsWith('data:image')) {
        // If it's a broken base64 string, set to null
        dataToSubmit.image_url = null;
      }

      if (isEditing && id) {
        await api.updateFarmer(parseInt(id), dataToSubmit);
      } else {
        await api.createFarmer(dataToSubmit);
      }
      navigate('/manage-farmers');
    } catch (err: any) {
      setError(err.message || 'Failed to register farmer. Please check all fields.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-3" to="/dashboard">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">agriculture</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AgroAdmin <span className="text-primary">Nigeria</span></h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <Link className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" to="/manage-farmers">Farmers</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">{isEditing ? 'Edit Farmer Details' : 'Register New Farmer'}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">{isEditing ? 'Update the official records for this registered farmer.' : 'Fill in the official details to onboard a new farmer.'}</p>
          </div>
        </div>

        {/* Wizard Progress Bar */}
        <div className="mb-10 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative flex justify-between items-center w-full max-w-2xl mx-auto">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-0">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(step - 1) * 50}%` }}></div>
            </div>
            {[
              { id: 1, label: 'Personal Info', icon: 'person' },
              { id: 2, label: 'Personal Location', icon: 'location_on' },
              { id: 3, label: 'Farm Specifics', icon: 'potted_plant' }
            ].map((s) => (
              <div className="relative z-10 flex flex-col items-center gap-2" key={s.id}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ring-4 ring-white dark:ring-slate-900 transition-all ${step >= s.id ? 'bg-primary text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
                <span className={`text-xs font-bold ${step >= s.id ? 'text-primary' : 'text-slate-400'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
            <span className="material-symbols-outlined text-xl">error</span>
            <p className="text-sm font-bold">{error}</p>
          </div>
        )}

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
          <form className="p-8" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-symbols-outlined">badge</span>
                  <h3 className="text-xl font-bold">Step 1: Personal Information</h3>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  {/* Photo Upload Area */}
                  <div className="shrink-0 space-y-3">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Farmer Photograph</label>
                    <div className="size-40 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 overflow-hidden relative group">
                      {isCameraActive ? (
                        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover transform scale-x-[-1]" />
                      ) : imagePreview ? (
                        <img src={imagePreview} alt="Farmer Preview" className="w-full h-full object-cover" />
                      ) : (
                        <span className="material-symbols-outlined text-4xl text-slate-300">account_circle</span>
                      )}
                      {!isCameraActive && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button type="button" onClick={startCamera} className="p-2 bg-white rounded-full text-slate-900 shadow-lg hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">photo_camera</span>
                          </button>
                          <button type="button" onClick={triggerFileUpload} className="p-2 bg-white rounded-full text-slate-900 shadow-lg hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">upload</span>
                          </button>
                        </div>
                      )}
                    </div>
                    {isCameraActive ? (
                      <div className="flex gap-2 justify-center w-full">
                        <button type="button" onClick={capturePhoto} className="text-xs px-3 py-1.5 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primary/90 flex-1">Capture</button>
                        <button type="button" onClick={stopCamera} className="text-xs px-3 py-1.5 bg-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-300 flex-1">Cancel</button>
                      </div>
                    ) : (
                      <div className="flex gap-2 justify-center w-full">
                        <button type="button" onClick={startCamera} className="text-[10px] font-bold uppercase tracking-wider text-primary hover:underline">Take Photo</button>
                        <span className="text-slate-300 text-[10px]">•</span>
                        <button type="button" onClick={triggerFileUpload} className="text-[10px] font-bold uppercase tracking-wider text-primary hover:underline">Upload File</button>
                      </div>
                    )}
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                    <canvas ref={canvasRef} className="hidden" />
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Full Name</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="full_name" placeholder="First Middle Surname" required type="text" value={formData.full_name} onChange={handleChange} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">NIN (11 Digits)</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="nin" placeholder="12345678901" required type="text" value={formData.nin} onChange={handleChange} />
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">DOB</span>
                        <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="dob" required type="date" value={formData.dob} onChange={handleChange} />
                      </label>
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Gender</span>
                        <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="gender" required value={formData.gender} onChange={handleChange}>
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Phone Number</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="phone_number" placeholder="08012345678" required type="tel" value={formData.phone_number} onChange={handleChange} />
                    </label>
                    <label className="block col-span-full">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Email</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="email" placeholder="farmer@example.com" type="email" value={formData.email} onChange={handleChange} />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <h3 className="text-xl font-bold">Step 2: Personal Location Details</h3>
                </div>
                <div className="space-y-4 max-w-2xl">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Home Address</span>
                    <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="personal_address" required rows={3} value={formData.personal_address} onChange={handleChange} />
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">State</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4 bg-slate-50" name="personal_state" readOnly type="text" value={formData.personal_state} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">LGA</span>
                      <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="personal_lga" required value={formData.personal_lga} onChange={handleChange}>
                        <option value="">Select LGA</option>
                        {BAYELSA_LGAS.map(lga => (
                          <option key={lga} value={lga}>{lga}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-symbols-outlined">potted_plant</span>
                  <h3 className="text-xl font-bold">Step 3: Farm Specifics & Location</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Farm Location Info (Moved here as requested) */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider">Farm Location</h4>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Farm Physical Address</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="farm_address" required type="text" value={formData.farm_address} onChange={handleChange} />
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Farm State</span>
                        <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4 bg-slate-50" name="farm_state" readOnly type="text" value={formData.farm_state} />
                      </label>
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Farm LGA</span>
                        <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="farm_lga" required value={formData.farm_lga} onChange={handleChange}>
                          <option value="">Select LGA</option>
                          {BAYELSA_LGAS.map(lga => (
                            <option key={lga} value={lga}>{lga}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Operational Details */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider">Operational Details</h4>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Farm Size (Hectares)</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="farm_size" required step="0.1" type="number" value={formData.farm_size} onChange={handleChange} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Primary Crop</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="crop_type" placeholder="e.g. Maize" type="text" value={formData.crop_type} onChange={handleChange} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1 block">Livestock Type</span>
                      <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 py-3 px-4" name="livestock_type" placeholder="e.g. Poultry or None" type="text" value={formData.livestock_type} onChange={handleChange} />
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between">
              {step > 1 ? (
                <button
                  className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                  type="button"
                  onClick={() => setStep(step - 1)}
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back
                </button>
              ) : (
                <Link className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 transition-all" to="/dashboard">
                  Cancel
                </Link>
              )}
              <button
                className="px-10 py-2.5 rounded-lg bg-primary text-slate-900 font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <span className="animate-spin material-symbols-outlined">sync</span>
                ) : (
                  <>
                    {step === 3 ? (isEditing ? 'Update Farmer' : 'Complete Registration') : 'Next Step'}
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterFarmer;
