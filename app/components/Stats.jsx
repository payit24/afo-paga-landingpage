import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const statsData = [
  { icon: Users, value: "50+", label: "Active Users" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
  { icon: Award, value: "150+", label: "Awards Won" },
  { icon: Zap, value: "24/7", label: "Support" }
];

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const numericEnd = parseInt(end.replace(/[^0-9]/g, '')) || 0;
      const current = Math.floor(progress * numericEnd);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  const prefix = end.match(/[^0-9]/g)?.join('').includes('%') ? '' : '';
  const suffix = end.includes('%') ? '%' : end.includes('+') ? '+' : '';
  
  return <>{prefix}{count}{suffix}</>;
};

export default function Stats() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003766] via-[#003766] to-[#002444]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#003766]] rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left side - Stats Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            {statsData.map((stat, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl text-center transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent blur-xl"></div>
                </div>
                
                <div className="relative">
                  {/* Icon with animated background */}
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:rotate-6 transition-transform duration-500">
                      <stat.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Value with count-up animation */}
                  <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">
                    <CountUp end={stat.value} />
                  </h3>
                  
                  {/* Label */}
                  <p className="text-white/90 font-medium text-lg">{stat.label}</p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 mx-auto h-1 w-16 bg-white/30 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Content */}
          <div className="lg:col-span-2 text-white space-y-6" style={{ animation: 'fadeInRight 0.8s ease-out' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Trusted by Industry Leaders</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Trusted by
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed">
              Join a thriving community of satisfied customers who have transformed their business with our innovative solutions.
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
      `}</style>
    </section>
  );
}