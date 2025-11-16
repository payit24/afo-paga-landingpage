import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Quote } from "lucide-react";
import { testimonials } from "./constants";
import { ScrollAnimate } from "./ScrollAnimate";
import { withDelay } from "./animations";
import { animations } from "./animations";



export default function Testimonial() {
  return (
    <section className="bg-white flex flex-col px-6 justify-center py-20 sm:py-32">
      {/* Centered Header */}
      <ScrollAnimate
        animation={animations.fadeInUp}
        triggerOnce={false}
        threshold={0.5}
        className="text-center mb-16 sm:mb-20"
      >
        <motion.div
          {...withDelay(animations.fadeInUp, 0)}
          className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          {...withDelay(animations.fadeInUp, 0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-slate-900">Real Clients</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Real Clean Results
            </span>
          </span>
        </motion.h2>

        <motion.p
          {...withDelay(animations.fadeInUp, 0.2)}
          className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
        >
          Here's what our happy customers are saying about us
        </motion.p>
      </ScrollAnimate>

      {/* Scrolling Testimonials */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 lg:gap-12"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <motion.div
              key={index}
              {...withDelay(animations.fadeInUp, (index % testimonials.length) * 0.15)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="group relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-transparent overflow-hidden min-w-[500px] lg:min-w-[600px] flex-shrink-0"
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>

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
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#209afa] flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                >
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Testimonial Text */}
                <p className="text-white/90 leading-relaxed mb-6 text-base">
                  "{item.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>

                {/* Hover Arrow */}
                <div className="flex items-center mt-6 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}