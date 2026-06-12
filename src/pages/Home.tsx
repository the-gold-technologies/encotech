import React from 'react';
import { Navigation } from '../components/Navigation';
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
import { useSEO } from '../hooks/useSEO';

export function Home() {
  useSEO(
    "home",
    "Encotec | Energy Solutions, Asset Stewardship & Engineering",
    "Encotec is a leading global service provider of engineering, asset stewardship (O&M), and advisory services across traditional power, transmission & distribution, and renewable energy sectors."
  );

  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden selection:bg-brand-pink selection:text-white">
      <Navigation />
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