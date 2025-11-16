import React from "react";
import { Globe, MapPin, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
  },

  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
};

const withDelay = (animation, delay) => ({
  ...animation,
  transition: { ...animation.transition, delay },
});

const activeCountries = [
  {
    name: "CÔTE D'IVOIRE",
    flag: "🇨🇮",
    providers: ["Orange CI", "MTN CI", "CIE", "SODECI", "Canal+"],
  },
  {
    name: "SENEGAL",
    flag: "🇸🇳",
    providers: ["Orange SN", "Free Senegal", "SENELEC", "SDE", "Canal+"],
  },
  {
    name: "BENIN",
    flag: "🇧🇯",
    providers: ["MTN Benin", "Moov Benin", "SBEE", "SONEB", "Canal+"],
  },
];

const comingSoonCountries = [
  "Cameroon",
  "Burkina Faso",
  "Togo",
  "Mali",
  "Niger",
  "DR Congo",
  "Guinea",
  "Equatorial Guinea",
  "Chad",
];

export default function CountryCoverage() {
  // Duplicate countries array for seamless loop
  const duplicatedCountries = [...activeCountries, ...activeCountries];

  return (
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          {...animations.staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            {...withDelay(animations.fadeInUp, 0)}
            className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
              Serving Africa
            </span>
          </motion.div>

          <motion.h2
            {...withDelay(animations.fadeInUp, 0.1)}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-slate-900">Everything You Need to</span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
               Country Coverage
              </span>
            </span>
          </motion.h2>

          <motion.p
            {...withDelay(animations.fadeInUp, 0.2)}
            className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
         Pay bills seamlessly across multiple African countries with support for all major service providers.
          </motion.p>
        </motion.div>

        {/* Moving Cards Container */}
        <div className="relative mb-20">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Moving Cards Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCountries.map((country, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{country.flag}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {country.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#32d4bc] animate-pulse"></div>
                        <span className="text-sm font-semibold text-[#32d4bc]">
                          Active Now
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {country.providers.map((provider, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 px-4 py-3 bg-slate-50 rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#32d4bc] flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-700">
                          {provider}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          {...withDelay(animations.fadeInUp, 0.5)}
          className="bg-slate-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-slate-200"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
              <Clock className="w-5 h-5 text-[#003766]" />
              <span className="text-sm font-bold text-slate-700">
                Coming Soon
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Expanding Across Africa
            </h3>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              We're rapidly expanding to bring seamless bill payments to more
              countries across the continent.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {comingSoonCountries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center justify-center px-4 py-6 bg-white rounded-xl shadow-md border border-slate-200 hover:border-[#32d4bc] hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-slate-400 mb-3" />
                <span className="text-sm font-bold text-slate-700 text-center">
                  {country}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-900 hover:bg-[#003766] text-white rounded-full font-bold text-base transition-all duration-300 shadow-lg"
            >
              Request Your Country
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
