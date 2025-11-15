import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import animations from "./animations";
import { solutionData } from "./constants";
import { withDelay } from "./animations";
import { ArrowRight } from "lucide-react";

export function Solution() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-white">
      <div className=" w-full py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* left Content */}
        <div className="flex flex-col justify-center">
          <img
            src="/images/solution.png"
            alt=" A lady happy after her bills have been automated"
            className="w-full h-auto mb-6 lg:mb-8"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            {/* Trust Badge */}
            <motion.div
              {...withDelay(animations.fadeInLeft, 0)}
              className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 mb-4 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
                You Financial Control Center
              </span>
            </motion.div>
            <motion.h2
              {...withDelay(animations.fadeInRight, 0.2)}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4"
            >
              A Unified Platform for Seamless Bill Payments
            </motion.h2>
            <motion.p
              {...withDelay(animations.fadeInUp, 0.4)}
              className="text-slate-600 text-base sm:text-lg leading-relaxed"
            >
              PayConnect simplifies bill payments across Africa by integrating
              multiple service providers into a single, user-friendly platform.
              Our solution automates payments, enhances security, and provides
              real-time tracking, ensuring users never miss a payment deadline.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {solutionData.map((item, index) => (
            <motion.div
              key={index}
              {...withDelay(animations.fadeInUp, index * 0.15)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-transparent overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Arrow */}
                <div className="flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-emerald-600" />
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
