import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../services/api';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      await api.login(formData);

      try {
        // Attempt to fetch farmer specific data to determine role
        await api.getMyData();
        // If successful, user is a farmer
        navigate('/farmer-dashboard');
      } catch (roleErr) {
        // If farmer data fetch fails, assume user is an admin
        navigate('/dashboard');
      }

    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar Component */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">agriculture</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Southern Ijaw LGA Farmers Registry</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Resources</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
              {/* <Link className="bg-primary hover:bg-primary/90 text-slate-900 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm" to="/register-farmer"> */}
              {/* Register */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </header >

      {/* Main Content: Login Section */}
      < main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden" >
        {/* Background Decorative Element */}
        < div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden" >
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/40 rounded-full blur-3xl"></div>
        </div >

        <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden relative z-10 border border-slate-100 dark:border-slate-800">
          {/* Left Side: Visual/Branding */}
          <div className="hidden lg:block relative min-h-[600px] bg-slate-100 dark:bg-slate-800">
            <img alt="Lush green farm field in Nigeria" className="absolute inset-0 w-full h-full object-cover" data-alt="Lush green farm field with bright sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4ww0HPNtYSJZncYAXYLzcaK8aFK7dcUbKjueDfgmFRVNVpmwF-PDIKHb3d4TDD_Cn7BbEgqxGJVMFcR6O7HnVSQpZ3tnqPj66ZuZd0ngIpnE5S8kbS9QHAwR53tdiiWzfwdINj5ZQ-PT9QxNL2aRSsbDU2RoiRsBZvCxXcb8jvHT_8Ax52EDFpRDxoZuJT_PD_vvwisplgr8IGKSlE0ILa2lvsJPxJKxx2tR9RBddLBG-Y2pisuxFoQnfKrNFO_G5XNNjcQPlio" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Empowering the Future of Bayelsa State Agriculture</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Join thousands of farmers across Southern Ijaw LGA in our unified digital ecosystem. Secure, transparent, and built for growth.
              </p>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your details to access your dashboard.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined text-xl">error</span>
                <p className="text-sm font-bold">{error}</p>
              </div>
            )}

            {/* Form Fields */}
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Username (Email/Phone)</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">person</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:placeholder-slate-500 text-slate-900 dark:text-white"
                    placeholder="NIN or Phone Number"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:placeholder-slate-500 text-slate-900 dark:text-white"
                    placeholder="password"
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" id="remember" type="checkbox" />
                <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Keep me signed in</label>
              </div>
              <button
                className="w-full py-4 bg-primary hover:bg-primary/90 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <span className="animate-spin material-symbols-outlined">sync</span>
                ) : (
                  <>
                    Login to Dashboard
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Not registered yet?
                <Link className="text-primary font-bold hover:underline ml-1" to="/register-farmer">Create an account</Link>
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span>Secure Government Gateway</span>
              </div>
            </div>
          </div>
        </div>
      </main >

      {/* Footer */}
      < footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark" >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Accessibility</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
          <p className="text-xs text-slate-400">
            © 2026 Southern Ijaw LGA Farmers Registry. Powered by the Chairman of Southern Ijaw LGA.
          </p>
        </div>
      </footer >
    </div >
  );
};

export default Login;
