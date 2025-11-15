import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <footer className="relative mt-20 sm:mt-32 ">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Newsletter Section */}
        <motion.div 
          {...fadeInUp}
          className="relative transform -translate-y-12 px-4 sm:px-6 lg:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">Stay Updated</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                    Get Early Access
                  </h3>
                  <p className="text-emerald-50 text-base sm:text-lg">
                    Be the first to know when we launch. Join our waitlist today!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all font-medium"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-xl transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              {...staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16"
            >
              {/* Brand Column */}
              <motion.div {...fadeInUp} className="lg:col-span-4">
                <div className="mb-6">
                  <img src="/images/logo.png" alt="PayConnect" className="h-40 sm:h-42 mb-4" />
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                    Simplifying bill payments across Africa with smart automation and seamless experiences.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <a href="mailto:hello@payconnect.com" className="flex items-center space-x-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm">hello@payconnect.com</span>
                    </a>
                    <a href="tel:+234" className="flex items-center space-x-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-sm">+234 (0) 800 000 0000</span>
                    </a>
                    <div className="flex items-center space-x-3 text-slate-400">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-sm">Lagos, Nigeria</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Links Columns */}
              {[
                {
                  title: "Product",
                  links: ["Features", "How It Works", "Security", "Pricing", "Download", "API"],
                },
                {
                  title: "Company",
                  links: ["About Us", "Careers", "Blog", "Press Kit", "Partners"],
                },
                {
                  title: "Resources",
                  links: ["Help Center", "Contact", "FAQ", "Status", "Community"],
                },
                {
                  title: "Legal",
                  links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
                }
              ].map((col, index) => (
                <motion.div {...fadeInUp} key={index} className="lg:col-span-2">
                  <h4 className="font-bold mb-4 sm:mb-6 text-white text-base sm:text-lg">
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-emerald-400 transition-colors text-sm sm:text-base inline-flex items-center group"
                        >
                          <span>{link}</span>
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Bar */}
            <motion.div 
              {...fadeInUp}
              className="border-t border-slate-800 pt-8"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-sm text-center lg:text-left">
                  © 2025 PayConnect. All rights reserved.s
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  {[
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    { Icon: Twitter, href: "#", label: "Twitter" },
                    { Icon: Instagram, href: "#", label: "Instagram" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Youtube, href: "#", label: "YouTube" }
                  ].map(({ Icon, href, label }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      aria-label={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-lg hover:shadow-emerald-500/50"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-400 text-xs font-medium">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};