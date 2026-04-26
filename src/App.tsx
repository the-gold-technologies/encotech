import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { EngineeringServices } from './pages/services/EngineeringServices';
import { ProjectManagement } from './pages/services/ProjectManagement';
import { PowerGeneration } from './pages/services/PowerGeneration';
import { TransmissionDistribution } from './pages/services/TransmissionDistribution';
import { RenewableEnergy } from './pages/services/RenewableEnergy';
import { AirportServices } from './pages/services/AirportServices';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/insights/InsightDetail';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Certifications } from './pages/Certifications';
import { Leadership } from './pages/Leadership';
// Shared Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-9 h-9 bg-brand-pink rounded-md flex items-center justify-center text-white font-black text-sm">
          E
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-black tracking-tight text-neutral-900 leading-none">
            ENCOTEC
          </div>
          <div className="text-[9px] font-medium text-neutral-400 tracking-wider uppercase leading-none mt-0.5">
            Energy India Pvt. Ltd.
          </div>
        </div>
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
        <a
          href="#services"
          className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
          
          Services
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
          
          Why Encotec
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
          
          References
        </a>
      </div>

      <button className="px-6 py-2.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
        Contact Us
      </button>
    </nav>);

}
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/engineering" element={<EngineeringServices />} />
        <Route
          path="/services/project-management"
          element={<ProjectManagement />} />
        
        <Route
          path="/services/power-generation"
          element={<PowerGeneration />} />
        
        <Route
          path="/services/transmission-distribution"
          element={<TransmissionDistribution />} />
        
        <Route
          path="/services/renewable-energy"
          element={<RenewableEnergy />} />
        
        <Route
          path="/services/airport-services"
          element={<AirportServices />} />
        
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </BrowserRouter>);

}