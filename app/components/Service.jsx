
export const Service = ({ title, desc, icon }) => {

    const services = [
    { title: 'Banking', desc: 'Manage all your bills', icon: '💳' },
    { title: 'Home Loan', desc: 'Auto-pay setup', icon: '🏠' },
    { title: 'Insurance', desc: 'Split expenses', icon: '🛡️' },
    { title: 'International', desc: 'Cross-border payments', icon: '🌍' },
    { title: 'Business', desc: 'Team expenses', icon: '💼' },
    { title: 'Rates & Calculators', desc: 'Bill predictions', icon: '📊' }
  ];
    return (
        <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"></div>
                <span className="text-blue-600 font-bold text-xs sm:text-sm">WHAT WE OFFER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">Our Services</h2>
            </div>
            <button className="hidden md:flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 hover:bg-slate-200 rounded-full font-semibold transition-colors text-sm sm:text-base">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <div key={i} className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{service.desc}</p>
                <button className="text-blue-600 font-semibold flex items-center space-x-1 group-hover:space-x-2 transition-all text-sm sm:text-base">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}