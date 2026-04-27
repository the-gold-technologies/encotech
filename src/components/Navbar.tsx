import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon, 
  SettingsIcon, 
  ShieldCheckIcon, 
  ZapIcon, 
  WindIcon, 
  PlaneIcon, 
  BriefcaseIcon,
  TrendingUpIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

export function Navbar({ variant = 'light' }: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const isDark = variant === 'dark';

  const navClasses = isDark
    ? "fixed top-0 left-0 right-0 z-50 px-5 sm:px-6 lg:px-10 py-4 flex justify-between items-center bg-neutral-900/90 backdrop-blur-md border-b border-white/10 text-white"
    : "fixed top-0 left-0 right-0 z-50 px-5 sm:px-6 lg:px-10 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-neutral-100 text-neutral-900";

  const linkClasses = isDark
    ? "text-sm font-medium text-neutral-300 hover:text-white transition-colors py-2"
    : "text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors py-2";

  const services = [
    { name: 'Engineering Services', path: '/services/engineering', icon: SettingsIcon },
    { name: 'Project Management', path: '/services/project-management', icon: BriefcaseIcon },
    { name: 'Power Generation', path: '/services/power-generation', icon: ZapIcon },
    { name: 'Transmission & Distribution', path: '/services/transmission-distribution', icon: TrendingUpIcon },
    { name: 'Renewable Energy', path: '/services/renewable-energy', icon: WindIcon },
    { name: 'Airport Services', path: '/services/airport-services', icon: PlaneIcon },
    { name: 'Value Added Services', path: '/services/value-added', icon: ShieldCheckIcon },
  ];

  return (
    <>
      <nav className={navClasses}>
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/encotec-768x179.png"
            alt="Encotec"
            className="h-8 md:h-10 w-auto"
            style={isDark ? { filter: 'brightness(0) invert(1)' } : {}}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${isDark ? 'border-white/20 text-neutral-300' : 'border-neutral-200 text-neutral-600'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            SINCE 2011
          </div>
          
          <Link to="/about" className={linkClasses}>
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              to="/services" 
              className={`${linkClasses} flex items-center gap-1 group`}
            >
              Services
              <ChevronDownIcon 
                size={14} 
                className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''} ${isDark ? 'text-neutral-500' : 'text-neutral-400'} group-hover:text-brand-pink`} 
              />
            </Link>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute left-0 mt-1 w-[560px] p-4 rounded-2xl border shadow-2xl z-50 ${
                    isDark 
                      ? "bg-neutral-900 border-white/10" 
                      : "bg-white border-neutral-100"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${
                          isDark
                            ? "text-neutral-400 hover:bg-white/5 hover:text-white"
                            : "text-neutral-600 hover:bg-neutral-50 hover:text-brand-pink"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isDark ? 'bg-neutral-800 text-neutral-500 group-hover/item:text-brand-pink' : 'bg-neutral-100 text-neutral-400 group-hover/item:text-brand-pink group-hover/item:bg-brand-pink/10'
                        }`}>
                          <service.icon size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm tracking-tight">{service.name}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/insights" className={linkClasses}>
            Insights
          </Link>
          <Link to="/careers" className={linkClasses}>
            Careers
          </Link>
          <Link to="/certifications" className={linkClasses}>
            Certifications
          </Link>
          <Link to="/leadership" className={linkClasses}>
            Leadership
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:block px-4 md:px-6 py-2 md:py-2.5 bg-brand-pink text-white text-[10px] md:text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300 shadow-lg shadow-brand-pink/20"
          >
            Contact Us
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 pr-1 text-current"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden"
          >
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/encotec-768x179.png" alt="Encotec" className="h-8 w-auto" />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-900"
              >
                <XIcon size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="space-y-1">
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-neutral-700 hover:text-brand-pink transition-colors"
                >
                  About
                </Link>

                <div className="space-y-1">
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex justify-between items-center py-3 text-lg font-medium text-neutral-700 hover:text-brand-pink transition-colors"
                  >
                    Services
                    <ChevronDownIcon 
                      size={18} 
                      className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-1 pl-4 border-l border-neutral-100"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-3 text-sm font-medium text-neutral-500 hover:text-brand-pink transition-colors"
                          >
                            <service.icon size={16} />
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/insights" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-neutral-700 hover:text-brand-pink transition-colors"
                >
                  Insights
                </Link>
                <Link 
                  to="/careers" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-neutral-700 hover:text-brand-pink transition-colors"
                >
                  Careers
                </Link>
                <Link 
                  to="/certifications" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-neutral-700 hover:text-brand-pink transition-colors"
                >
                  Certifications
                </Link>
                <Link 
                  to="/leadership" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-neutral-700 hover:text-brand-pink transition-colors"
                >
                  Leadership
                </Link>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-100">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-3.5 bg-brand-pink text-white text-center text-xs font-bold tracking-widest uppercase hover:bg-[#a0004f] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
