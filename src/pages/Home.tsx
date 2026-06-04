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
export function Home() {
  return (
    <main className="w-full bg-white min-h-screen selection:bg-brand-pink selection:text-white">
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