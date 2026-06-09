import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { EngineeringServices } from './pages/services/EngineeringServices';
import { ProjectManagement } from './pages/services/ProjectManagement';
import { PowerGeneration } from './pages/services/PowerGeneration';
import { TransmissionDistribution } from './pages/services/TransmissionDistribution';
import { RenewableEnergy } from './pages/services/RenewableEnergy';
import { AirportServices } from './pages/services/AirportServices';
import { ValueAddedServices } from './pages/services/ValueAddedServices';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/insights/InsightDetail';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Certifications } from './pages/Certifications';
import { Leadership } from './pages/Leadership';

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
        
        <Route path="/services/value-added" element={<ValueAddedServices />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </BrowserRouter>);

}