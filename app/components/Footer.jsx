export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="font-black text-lg sm:text-xl">P</span>
              </div>
              <span className="text-xl sm:text-2xl font-black">PayConnect</span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base">
              Simplifying bill payments across Africa
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "How It Works", "Security", "Download"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "FAQ", "Status"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 PayConnect. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
