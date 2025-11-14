import { Menu, X, ArrowRight, Star, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import animations  from "./animations";
import { withDelay } from "./animations";

export default function Hero() {
  return ( 
    <section className="relative px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content - Staggered animations */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            {...animations.staggerContainer}
          >
            {/* Trust Badge */}
            <motion.div 
              {...withDelay(animations.fadeInLeft, 0)}
              className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
                Trusted by users
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              {...animations.fadeInLeft}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight"
            >
              <span className="text-slate-900">Master Your Bills,</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                  Automate Your Life
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <motion.path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 10 298 6" 
                    stroke="url(#gradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              {...animations.fadeInLeft}
              className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-xl"
            >
              The all-in-one app for bills, airtime, data, and shared expenses across Africa. 
              <span className="font-semibold text-slate-700"> Say goodbye to bill chaos.</span>
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              className="flex flex-col space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {['Instant payments', 'Split bills with friends', 'Auto-reminders'].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              {...animations.fadeInLeft}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 pt-2"
            >
              <motion.button 
                className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl flex items-center justify-center space-x-2 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Coming Soon</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="relative z-10 w-5 h-5" />
                </motion.div>
              </motion.button>

              {/* Social Proof */}
              <motion.div 
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-xl shadow-xl px-6 py-4 rounded-full border border-slate-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  {[1,2,3,4,5].map(i => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 -ml-1 first:ml-0" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">4.9/5</span>
                  <span className="text-xs text-slate-600">512 reviews</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex items-center justify-center lg:h-[800px] mt-8 lg:mt-0">
            {/* Floating card 1 */}
            <motion.div 
              {...animations.scaleIn}
              {...animations.float}
              transition={{ 
                ...animations.scaleIn.transition,
                delay: 0.8,
                ...animations.float.transition
              }}
              className="absolute top-10 -left-8 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">Bill Paid!</p>
                  <p className="text-sm text-slate-600">Electricity - ₦5,000</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div 
              {...animations.scaleIn}
              {...animations.floatDelayed}
              transition={{ 
                ...animations.scaleIn.transition,
                delay: 1,
                ...animations.floatDelayed.transition
              }}
              className="absolute bottom-24 -right-8 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-slate-200 hidden lg:block z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">₦2,500 saved</p>
                  <p className="text-sm text-slate-700">this month</p>
                </div>
              </div>
            </motion.div>

            {/* Phone mockup - SLIDES UP */}
            <motion.div 
              {...animations.slideUpBounce}
              transition={{ ...animations.slideUpBounce.transition, delay: 0.3 }}
              className="relative z-10 transform scale-110  lg:scale-140"
            >
              <img 
                src="/images/mockup.png"
                alt="Phone Mockup" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-2xl rounded-3xl"
              />
            </motion.div>

            {/* Enhanced glow effects */}
            <motion.div 
              {...withDelay(animations.fadeIn, 0.5)}
              className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 blur-3xl -z-10 rounded-full scale-110"
            />
            <motion.div 
              {...animations.glow}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-3xl -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}