import React from 'react';
import { 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import {animations} from './animations';
import { withDelay } from './animations';
import {featuresData} from './constants';

export default function FeaturesHighlight() {
  return (
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Background decorations - matching your Hero style */}
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - matching your Hero style */}
        <motion.div 
          {...animations.staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            {...withDelay(animations.fadeInUp, 2)}
            className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
              Powerful Features
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
                Master Your Finances
              </span>
            </span>
          </motion.h2>
          
          <motion.p 
            {...withDelay(animations.fadeInUp, 0.2)}
            className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            Afropaga brings together powerful tools to simplify your bill payments, automate your finances, and connect with others.
          </motion.p>
        </motion.div>

        {/* Features Grid - matching your Solution component style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              {...withDelay(animations.fadeInUp, index * 0.15)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-transparent overflow-hidden"
            >
              {/* Gradient Background on Hover - matching Solution style */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Accent Line - matching Solution style */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container - matching Solution style */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#209afa] flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>

                {/* Features List */}
                <div className="space-y-4">
                  {item.features.map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-start space-x-3"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-[#209afa] flex items-center justify-center mt-0.5`}>
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover Arrow - matching Solution style */}
                <div className="flex items-center mt-6 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-emerald-600" />
                </div>
              </div>

              {/* Decorative Circle - matching Solution style */}
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