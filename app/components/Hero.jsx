import { Menu, X, ArrowRight, Star, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return ( 
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Trust Badge - Enhanced */}
              <div className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
                  Trusted by 50,000+ users
                </span>
              </div>

              {/* Headline - Enhanced typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-slate-900">Master Your Bills,</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    Automate Life
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 2 100 2 150 6C200 10 250 10 298 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                The all-in-one app for bills, airtime, data, and shared expenses across Africa. 
                <span className="font-semibold text-slate-700"> Say goodbye to bill chaos.</span>
              </p>

              {/* Key Benefits - New */}
              <div className="flex flex-col space-y-3">
                {['Instant payments', 'Split bills with friends', 'Auto-reminders'].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section - Enhanced */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 pt-2">
                <button className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 text-white rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Started Free</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Social Proof - Enhanced */}
                <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-full border border-slate-200">
                  <div className="flex items-center">
                    {[1,2,3,4,5].map(i => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 -ml-1 first:ml-0" 
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">4.9/5</span>
                    <span className="text-xs text-slate-600">512 reviews</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content - Phone Mockup with floating elements */}
            <div className="relative flex items-center justify-center lg:h-[700px] mt-8 lg:mt-0">
              {/* Floating cards */}
              <div className="absolute top-10 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-float hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Bill Paid!</p>
                    <p className="text-xs text-slate-600">Electricity - ₦5,000</p>
                  </div>
                </div>
              </div>

             <div className="absolute bottom-20 right-0 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/30 animate-float-delayed hidden lg:block z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">₦2,500 saved</p>
                    <p className="text-xs text-slate-700">this month</p>
                  </div>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="relative z-0">
                <img 
                  src="./images/mockup-phone-2.png" 
                  alt="Phone Mockup" 
                  className="w-full sm:w-80 lg:w-auto h-screen lg:h-full drop-shadow-2xl"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-3xl -z-10 rounded-full"></div>
            </div>
             
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }
        `}</style>
      </section>
    );
}