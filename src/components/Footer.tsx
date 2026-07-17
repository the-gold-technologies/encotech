import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
  variant?: 'standalone' | 'embedded';
}

export function Footer({ className = '', variant = 'standalone' }: FooterProps) {
  const content = (
    <>
      <div className="font-black text-neutral-900 text-xl mb-4 md:mb-0 tracking-tighter">
        ENCOTEC
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-brand-pink transition-colors">
          Privacy
        </a>
        <a href="#" className="hover:text-brand-pink transition-colors">
          Terms
        </a>
        <Link to="/contact" className="hover:text-brand-pink transition-colors">
          Contact
        </Link>
      </div>
      <div className="mt-4 md:mt-0">© 2026 Encotec Engineering.</div>
    </>
  );

  if (variant === 'embedded') {
    return (
      <footer className={`mt-32 border-t border-neutral-200 pt-12 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm ${className}`}>
        {content}
      </footer>
    );
  }

  return (
    <footer className={`py-12 border-t border-neutral-200 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
        {content}
      </div>
    </footer>
  );
}
