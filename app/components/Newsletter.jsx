export const Newsletter = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-64 sm:h-80 lg:h-[400px] bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-400 rounded-lg sm:rounded-xl"></div>
                    <div className="flex-1">
                      <div className="w-full max-w-[120px] sm:max-w-[150px] h-2 sm:h-3 bg-white/30 rounded-full mb-2"></div>
                      <div className="w-full max-w-[80px] sm:max-w-[100px] h-1.5 sm:h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-lg sm:rounded-xl"></div>
                    <div className="flex-1">
                      <div className="w-full max-w-[120px] sm:max-w-[150px] h-2 sm:h-3 bg-white/30 rounded-full mb-2"></div>
                      <div className="w-full max-w-[80px] sm:max-w-[100px] h-1.5 sm:h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"></div>
              <span className="text-blue-600 font-bold text-xs sm:text-sm">
                STAY UPDATED
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Sign up for our newsletter:
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Get the latest updates on features, bill management tips, and
              exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-slate-200 focus:border-blue-600 focus:outline-none text-slate-900 font-medium text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
