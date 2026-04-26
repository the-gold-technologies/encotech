import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/TrustStrip';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { ProjectShowcase } from '../components/sections/ProjectShowcase';
import { GlobalFootprint } from '../components/sections/GlobalFootprint';
import { WhyEncotec } from '../components/sections/WhyEncotec';
import { Testimonials } from '../components/sections/Testimonials';
import { LogoStrip } from '../components/sections/LogoStrip';
import { CTA } from '../components/sections/CTA';
export function Home() {
  return (
    <main className="w-full bg-white min-h-screen selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <Link to="/" className="flex items-center">
          <img
            src="/encotec-768x179.png"
            alt="Encotec - Member of Dornier Group"
            className="h-10 w-auto" />
          
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            SINCE 2011
          </div>
          <Link
            to="/about"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            About
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Services
          </Link>
          <Link
            to="/insights"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Insights
          </Link>
          <Link
            to="/careers"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Careers
          </Link>
          <Link
            to="/certifications"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Certifications
          </Link>
          <Link
            to="/leadership"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Leadership
          </Link>
        </div>

        <Link
          to="/contact"
          className="px-6 py-2.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
          
          Contact Us
        </Link>
      </nav>

      <Hero />
      <AboutSection />
      <Services />
      <Process />
      <ProjectShowcase />
      <GlobalFootprint />
      <WhyEncotec />
      <Testimonials />
      <LogoStrip />
      <CTA />
    </main>);

}