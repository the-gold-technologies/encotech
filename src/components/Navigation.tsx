import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  variant?: 'light' | 'dark';
}

export function Navigation({ variant = 'light' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = path === '/' 
      ? location.pathname === '/' 
      : location.pathname.startsWith(path);
    if (isActive) {
      return "text-sm font-medium text-brand-pink";
    }
    return variant === 'dark'
      ? "text-sm font-medium text-neutral-300 hover:text-white transition-colors"
      : "text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = path === '/' 
      ? location.pathname === '/' 
      : location.pathname.startsWith(path);
    return isActive
      ? "text-lg font-bold text-brand-pink"
      : "text-lg font-bold text-neutral-900 hover:text-brand-pink transition-colors";
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-4 flex justify-between items-center backdrop-blur-md border-b ${
      variant === 'dark' 
        ? 'bg-neutral-900/90 border-white/10' 
        : 'bg-white/90 border-neutral-100'
    }`}>
      <Link to="/" className="flex items-center relative z-50">
        <img
          src="/encotec-768x179.png"
          alt="Encotec - Member of Dornier Group"
          className="h-10 w-auto" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${
          variant === 'dark'
            ? 'border-white/20 text-neutral-300'
            : 'border-neutral-200 text-neutral-600'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          SINCE 2011
        </div>
        <Link to="/" className={getLinkClass('/')}>
          Home
        </Link>
        <Link to="/about" className={getLinkClass('/about')}>
          About
        </Link>
        <Link to="/services" className={getLinkClass('/services')}>
          Services
        </Link>
        <Link to="/insights" className={getLinkClass('/insights')}>
          Insights
        </Link>
        <Link to="/careers" className={getLinkClass('/careers')}>
          Careers
        </Link>
        <Link to="/certifications" className={getLinkClass('/certifications')}>
          Certifications
        </Link>
        <Link to="/leadership" className={getLinkClass('/leadership')}>
          Leadership
        </Link>
      </div>

      {/* Desktop Contact Button */}
      <Link
        to="/contact"
        className="hidden lg:inline-flex px-6 py-2.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center ${
          variant === 'dark' ? 'text-white' : 'text-neutral-900'
        }`}
        aria-label="Toggle menu">
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)} />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-40 lg:hidden shadow-2xl">
              <div className="flex flex-col h-full pt-24 px-6">
                <div className="flex flex-col gap-6">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/')}>
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/about')}>
                    About
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/services')}>
                    Services
                  </Link>
                  <Link
                    to="/insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/insights')}>
                    Insights
                  </Link>
                  <Link
                    to="/careers"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/careers')}>
                    Careers
                  </Link>
                  <Link
                    to="/certifications"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/certifications')}>
                    Certifications
                  </Link>
                  <Link
                    to="/leadership"
                    onClick={() => setMobileMenuOpen(false)}
                    className={getMobileLinkClass('/leadership')}>
                    Leadership
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
                    Contact Us
                  </Link>
                </div>

                <div className="mt-auto pb-8">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    SINCE 2011
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}