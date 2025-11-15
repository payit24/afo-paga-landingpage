import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Zap, 
  Smartphone, 
  Wifi, 
  Tv, 
  Home, 
  Users, 
  CreditCard, 
  TrendingUp,
  Shield,
  Gift,
  Bell,
  Settings,
  HelpCircle,
  Package,
  ShoppingBag,
  Wallet
} from 'lucide-react';

/* Minimal Menu and X icons */
const Menu = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const megaMenuData = {
  services: {
    title: 'Services',
    sections: [
      {
        title: 'Bill Payments',
        icon: Zap,
        items: [
          { name: 'Electricity', icon: Zap, popular: true },
          { name: 'Water Bills', icon: Home },
          { name: 'Cable TV', icon: Tv },
          { name: 'Internet', icon: Wifi }
        ]
      },
      {
        title: 'Mobile Services',
        icon: Smartphone,
        items: [
          { name: 'Airtime Top-up', icon: Smartphone, popular: true },
          { name: 'Data Bundles', icon: Wifi },
          { name: 'Mobile Banking', icon: CreditCard },
          { name: 'Mobile Insurance', icon: Shield }
        ]
      },
      {
        title: 'Financial Services',
        icon: Wallet,
        items: [
          { name: 'Split Payments', icon: Users, popular: true },
          { name: 'Bill Reminders', icon: Bell },
          { name: 'Savings Plans', icon: TrendingUp },
          { name: 'Cashback Rewards', icon: Gift }
        ]
      }
    ],
    featured: {
      title: 'New Feature',
      description: 'Split bills with friends and track group expenses',
      image: '💰',
      link: '#'
    }
  },
  solutions: {
    title: 'Solutions',
    sections: [
      {
        title: 'For Individuals',
        icon: Users,
        items: [
          { name: 'Personal Finance', icon: Wallet },
          { name: 'Budget Tracking', icon: TrendingUp },
          { name: 'Auto-Payments', icon: Settings },
          { name: 'Family Sharing', icon: Users }
        ]
      },
      {
        title: 'For Businesses',
        icon: ShoppingBag,
        items: [
          { name: 'Bulk Payments', icon: Package },
          { name: 'Employee Benefits', icon: Gift },
          { name: 'Invoice Management', icon: CreditCard },
          { name: 'Analytics Dashboard', icon: TrendingUp }
        ]
      }
    ],
    featured: {
      title: 'Business Solutions',
      description: 'Manage team expenses and automate payroll',
      image: '🏢',
      link: '#'
    }
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto sm:px-2 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="PayConnect Logo" className="h-70 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-slate-50">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {activeDropdown === 'services' && (
                <div className="absolute left-0 top-[54px] pt-2 w-screen max-w-5xl -ml-86 animate-fade-in">
                  <div className="bg-white p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Service Sections */}
                      {megaMenuData.services.sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-center space-x-2 text-slate-900 font-bold">
                            <section.icon className="w-5 h-5 text-emerald-600" />
                            <h3>{section.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <a
                                  href="#"
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                                >
                                  <item.icon className="w-4 h-4 text-slate-400 group-hover/item:text-emerald-600 transition-colors" />
                                  <span className="text-sm text-slate-600 group-hover/item:text-emerald-600 transition-colors">
                                    {item.name}
                                  </span>
                                  {item.popular && (
                                    <span className="text-xs bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-2 py-0.5 rounded-full font-semibold">
                                      Popular
                                    </span>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Featured Section */}
                      <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-4 border border-emerald-100">
                        <div className="text-4xl mb-3">{megaMenuData.services.featured.image}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{megaMenuData.services.featured.title}</h4>
                        <p className="text-sm text-slate-600 mb-4">{megaMenuData.services.featured.description}</p>
                        <a
                          href={megaMenuData.services.featured.link}
                          className="inline-flex items-center space-x-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                        >
                          <span>Learn more</span>
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-slate-50">
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {activeDropdown === 'solutions' && (
                <div className="absolute left-0 top-[54px] pt-2 w-screen max-w-5xl -ml-96 animate-fade-in">
                  <div className="bg-white  p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Solution Sections */}
                      {megaMenuData.solutions.sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-center space-x-2 text-slate-900 font-bold">
                            <section.icon className="w-5 h-5 text-blue-600" />
                            <h3>{section.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <a
                                  href="#"
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group/item"
                                >
                                  <item.icon className="w-4 h-4 text-slate-400 group-hover/item:text-blue-600 transition-colors" />
                                  <span className="text-sm text-slate-600 group-hover/item:text-blue-600 transition-colors">
                                    {item.name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Featured Section */}
                      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-4 border border-blue-100">
                        <div className="text-4xl mb-3">{megaMenuData.solutions.featured.image}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{megaMenuData.solutions.featured.title}</h4>
                        <p className="text-sm text-slate-600 mb-4">{megaMenuData.solutions.featured.description}</p>
                        <a
                          href={megaMenuData.solutions.featured.link}
                          className="inline-flex items-center space-x-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          <span>Learn more</span>
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Links */}
            <a href="#pricing" className="px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Pricing
            </a>
            <a href="#about" className="px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-slate-50">
              About Us
            </a>

            {/* CTA Button */}
            <button className="ml-4 px-6 py-2.5 bg-[#32d4bc] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-slate-200 bg-white animate-fade-in">
            <details className="group">
              <summary className="flex items-center justify-between px-4 py-3 text-slate-700 font-medium cursor-pointer hover:bg-slate-50 rounded-lg">
                Services
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-8 pr-4 py-2 space-y-2">
                {megaMenuData.services.sections.map((section, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{section.title}</p>
                    {section.items.map((item, i) => (
                      <a key={i} href="#" className="block px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between px-4 py-3 text-slate-700 font-medium cursor-pointer hover:bg-slate-50 rounded-lg">
                Solutions
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-8 pr-4 py-2 space-y-2">
                {megaMenuData.solutions.sections.map((section, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{section.title}</p>
                    {section.items.map((item, i) => (
                      <a key={i} href="#" className="block px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </details>

            <a href="#pricing" className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors">
              Pricing
            </a>
            <a href="#about" className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors">
              About Us
            </a>
            <button className="w-full mt-2 px-6 py-3 bg-[#003766] text-white rounded-full font-semibold shadow-lg">
              Download App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}