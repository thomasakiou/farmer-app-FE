import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    navigate('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar Component */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">potted_plant</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">National Farmer Registry</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Resources</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
              <Link className="bg-primary hover:bg-primary/90 text-slate-900 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm" to="/register-farmer">
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content: Login Section */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/40 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden relative z-10 border border-slate-100 dark:border-slate-800">
          {/* Left Side: Visual/Branding */}
          <div className="hidden lg:block relative min-h-[600px] bg-slate-100 dark:bg-slate-800">
            <img alt="Lush green farm field in Nigeria" className="absolute inset-0 w-full h-full object-cover" data-alt="Lush green farm field with bright sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4ww0HPNtYSJZncYAXYLzcaK8aFK7dcUbKjueDfgmFRVNVpmwF-PDIKHb3d4TDD_Cn7BbEgqxGJVMFcR6O7HnVSQpZ3tnqPj66ZuZd0ngIpnE5S8kbS9QHAwR53tdiiWzfwdINj5ZQ-PT9QxNL2aRSsbDU2RoiRsBZvCxXcb8jvHT_8Ax52EDFpRDxoZuJT_PD_vvwisplgr8IGKSlE0ILa2lvsJPxJKxx2tR9RBddLBG-Y2pisuxFoQnfKrNFO_G5XNNjcQPlio" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Empowering the Future of Nigerian Agriculture</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Join thousands of farmers across the nation in our unified digital ecosystem. Secure, transparent, and built for growth.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden" data-alt="Profile of a registered farmer">
                    <img alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcouNiGAe6DeZRSMuWy3WUn7Jpu1JETVrzxzmpWrG8vnPI01m-JmCsPsUoFmSo87byW_Jdyo9oSNefOFQkymRB43dLww8YKuaVYeaVRl6s7wk5f1CLpLi9QuHi_ytPdNRNFewX0DeRo3KrpNL5I8JPAr4RK1E1LQwO4mGVCd1QyD3fVOR5tHvXHYk9bnam6W3YEDLB0I27pHneZ66Poc5wwOQWaxQ9YnlEA9xuA82j3tTgf7fAfjlpH9B8lZXLWiCxKzBQmkR3jG0" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden" data-alt="Profile of a registered female farmer">
                    <img alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxgJy9-_LrZHvFcTGzB0iXJmj932p0s2mJOs_vPjhDbpvqFBq_PbgnQZQT0yug2jcDSTiyikm5_ZuHQTe9T57-QAcK4X279CtPCo-5tyX8CUvFIK_PbM8Emy9gSSqIkfT-2rPJCPa7PVEWal12X6vhU1s4yV7qO5XA8_Z6awewMP-qcdweJ04lH9NspufrB0WtUmQUmyqVthUutkzqRrszCVWvu5J1ezKzgTtlg8n1-ZHeWc63B_LrXHYxtGpfZYu8YL_pJoYsnTU" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden" data-alt="Profile of a young farmer">
                    <img alt="User 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2PjXcV_VFqEGrSZ4i3Khf26HIVO66PO3_O5H_UdMxKDoAeoFVUSsHD0PFUBTeSpkqT7vWwCMSE74gJ3drelcO7Y9K1cIimMUJqDrHX3QIXwYLyAMsbN6y8VX9ZqIj2DqkefV_sGU7UMcxqsPaHvdcSI7IPU62O0rZbawTJChHsDRW78p1fFFkqDqaWl4E4WmQTys7Oibh8hReLpklFzWrn-5GNEbF7Cz05K2Q2fUZCob5LuWHuy4J0cE0SVZbl11qC1HJqI8kEf4" />
                  </div>
                </div>
                <p className="text-white text-sm font-medium">Join 50,000+ registered farmers</p>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your details to access your dashboard.</p>
            </div>

            {/* Role Selection Toggle */}
            <div className="mb-8 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl flex">
              <button className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">agriculture</span>
                Farmer
              </button>
              <button className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">admin_panel_settings</span>
                Admin
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address or Phone Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:placeholder-slate-500" placeholder="e.g. farmer@registry.gov.ng" type="text" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                  <input className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:placeholder-slate-500" placeholder="••••••••" type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" id="remember" type="checkbox" />
                <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Keep me signed in</label>
              </div>
              <button className="w-full py-4 bg-primary hover:bg-primary/90 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg" type="submit">
                Login to Dashboard
                <span className="material-symbols-outlined">arrow_forward</span>
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
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Accessibility</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
          <p className="text-xs text-slate-400">
            © 2024 National Farmer Registry. Powered by the Ministry of Agriculture & Rural Development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
