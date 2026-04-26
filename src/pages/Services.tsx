import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  TargetIcon,
  HardHatIcon,
  SettingsIcon,
  SunIcon,
  PackageIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  FlameIcon,
  NetworkIcon,
  BuildingIcon,
  PlaneIcon,
  ZapIcon } from
'lucide-react';
// Hero Section
function ServicesHero() {
  return (
    <section className="relative w-full bg-neutral-900 text-white pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          'linear-gradient(rgba(233,30,140,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-4xl">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              Our Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            Integrated Solutions Across the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-light">
              Asset Lifecycle
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-10">
            We bridge the gap between technical complexity and commercial
            success. Whether you are conceptualizing a new plant or optimizing
            an existing one, we provide the end-to-end expertise required to
            keep your world running.
          </p>
        </motion.div>
      </div>
    </section>);

}
// Intro Section
function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center space-y-6">
          
          <p className="text-xl text-neutral-700 leading-relaxed">
            At Encotec, we don't just provide engineering services; we provide
            peace of mind. We approach every facility we manage with an "Owner's
            Mindset", meaning we treat your infrastructure with the same care,
            precision, and long-term vision as if it were our own.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            With a family of over 1,800 staff members and 300+ specialized
            engineers, we bridge the gap between technical complexity and
            commercial success. Below is an overview of how we provide
            end-to-end expertise across the asset lifecycle.
          </p>
        </motion.div>
      </div>
    </section>);

}
// Service Card Component with Expandable Details
function ServiceCard({ service, index }: {service: any;index: number;}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className="bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 overflow-hidden group">
      
      {/* Header */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink group-hover:scale-110 transition-transform duration-300">
            <service.icon size={28} strokeWidth={1.5} />
          </div>
          <span className="text-5xl font-black text-neutral-100 group-hover:text-brand-pink/10 transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-black text-neutral-900 mb-3 uppercase tracking-tight">
          {service.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed mb-6">
          {service.overview}
        </p>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300">
          
          {isExpanded ? 'Show Less' : 'View Details'}
          <ChevronDownIcon
            size={16}
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          
        </button>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="overflow-hidden">
        
        <div className="px-8 pb-8 pt-4 border-t border-neutral-100 bg-neutral-50">
          {/* Key Capabilities */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
              Key Capabilities
            </h4>
            <ul className="space-y-2">
              {service.capabilities.map((cap: string, i: number) =>
              <li key={i} className="flex items-start gap-3">
                  <CheckCircle2Icon
                  size={18}
                  className="text-brand-pink flex-shrink-0 mt-0.5"
                  strokeWidth={2} />
                
                  <span className="text-neutral-700 text-sm">{cap}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Value Delivered */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
              Value Delivered
            </h4>
            <div className="space-y-2">
              {service.value.map((val: string, i: number) =>
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-neutral-700">
                
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  {val}
                </div>
              )}
            </div>
          </div>

          {/* Explore Service Link */}
          {service.link &&
          <Link
            to={service.link}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] hover:gap-3 transition-all duration-300">
            
              Explore Service
              <ArrowRightIcon size={16} />
            </Link>
          }
        </div>
      </motion.div>
    </motion.div>);

}
// Core Services Section
function CoreServices() {
  const services = [
  {
    title: 'Project Conceptualisation & Development',
    icon: TargetIcon,
    link: '/services/project-management',
    overview:
    'We help you build on a solid foundation, from pre-feasibility studies to the final selection of your EPC partners.',
    capabilities: [
    'Feasibility & Pre-Feasibility Studies',
    'Detailed Project Reports (DPR)',
    'Strategic Sourcing & Technical Specifications',
    'EPC Contractor Selection',
    'Financial Assessments'],

    value: [
    'Technically sound planning',
    'Financially viable projects',
    'Stakeholder confidence']

  },
  {
    title: 'Construction, Commissioning & Relocation',
    icon: HardHatIcon,
    link: '/services/transmission-distribution',
    overview:
    "Whether it's a new build or moving an entire plant across borders, we handle the complex installation and synchronization of your assets.",
    capabilities: [
    'Multi-Sector Construction Expertise',
    'International Commissioning',
    'Grid Synchronization & Performance Tests',
    'Asset Dismantling & Relocation',
    'Complex IBR Piping Erection'],

    value: [
    'Speed and safety',
    'Seamless cross-border transitions',
    'Physical realization of complex assets']

  },
  {
    title: 'Asset Stewardship (O&M)',
    icon: SettingsIcon,
    link: '/services/power-generation',
    overview:
    "As one of India's top five O&M specialists, we provide continuous care for thermal plants, international airports, and critical utilities.",
    capabilities: [
    'Thermal & Supercritical Mastery',
    'Airport Utility Management',
    'Integrated ERP Support',
    'Zero-Error Operations',
    'Risk Management & Reliability Focus'],

    value: [
    'Optimized megawatt production',
    'Long-term asset health',
    'Owner-perspective care']

  },
  {
    title: 'Expert Advisory & Performance Audits',
    icon: ClipboardCheckIcon,
    link: '/services/renewable-energy',
    overview:
    'When problems arise or efficiency drops, our specialists provide on-site diagnostics and high-level technical solutions.',
    capabilities: [
    'Specialised Testing (NDT)',
    'Energy Efficiency Audits',
    'Steam Path Audits',
    '5S & Process Improvement',
    'High-Level Problem Solving'],

    value: [
    'Reduced carbon footprint',
    'Improved workplace safety',
    'Restored operational efficiency']

  },
  {
    title: 'Due Diligence & Asset Health',
    icon: ShieldCheckIcon,
    link: '/services/airport-services',
    overview:
    'We evaluate the "residual life" of older plants to help owners make informed decisions about acquisitions or relocations.',
    capabilities: [
    'Residual Life Assessment (RLA)',
    'Technical Due Diligence',
    'Independent Technical Audits',
    'Revamping & Restoration Strategy',
    'Environmental Compliance Planning'],

    value: [
    'Informed investment decisions',
    'Understanding true asset value',
    'Future-proofed infrastructure']

  },
  {
    title: 'Strategic Global Sourcing (Spare Parts)',
    icon: PackageIcon,
    link: '/services/value-added',
    overview:
    'Access our trusted network of major OEMs in China, Vietnam, and India to keep your facility running without interruption.',
    capabilities: [
    'Global OEM Network (65+ tie-ups)',
    'Comprehensive Inventory Supply',
    'High-Pressure Boiler Spares',
    'Electrical Actuators & Mill Rollers',
    'Engineering Integration Support'],

    value: [
    'Reduced downtime',
    'Strategic sourcing partnerships',
    'Guaranteed specification performance']

  }];

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-16">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Core Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight">
            Comprehensive Solutions <br />
            Across the Value Chain
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) =>
          <ServiceCard key={index} service={service} index={index} />
          )}
        </div>
      </div>
    </section>);

}
// Industries Section
function IndustriesSection() {
  const industries = [
  {
    name: 'Power Generation',
    subtitle: 'Thermal & Renewable',
    icon: FlameIcon
  },
  {
    name: 'Transmission & Distribution',
    subtitle: 'Grid Infrastructure',
    icon: NetworkIcon
  },
  {
    name: 'Infrastructure & Industrial',
    subtitle: 'Facilities',
    icon: BuildingIcon
  },
  {
    name: 'Airports & Utility Systems',
    subtitle: 'Critical Infrastructure',
    icon: PlaneIcon
  },
  {
    name: 'Energy & Climate Projects',
    subtitle: 'Sustainable Solutions',
    icon: ZapIcon
  }];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We deliver solutions across a wide range of sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1
            }}
            whileHover={{
              y: -8
            }}
            className="p-6 bg-neutral-50 border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 group cursor-pointer">
            
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-pink mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <industry.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-1 text-sm">
                {industry.name}
              </h3>
              <p className="text-xs text-neutral-500">{industry.subtitle}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// Process Section
function ProcessSection() {
  const steps = [
  {
    title: 'Assess',
    description: 'Technical and commercial evaluation',
    number: '01'
  },
  {
    title: 'Design',
    description: 'Engineering and system planning',
    number: '02'
  },
  {
    title: 'Execute',
    description: 'Construction and commissioning',
    number: '03'
  },
  {
    title: 'Operate',
    description: 'Maintenance and optimization',
    number: '04'
  }];

  return (
    <section className="py-28 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            How We Deliver
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Our structured approach ensures precision and reliability at every
            stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.15
            }}
            className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-pink/50 transition-all duration-300 group">
            
              <div className="text-6xl font-black text-brand-pink/20 group-hover:text-brand-pink/40 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm">{step.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// Closing Statement
function ClosingSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight mb-8">
            Our integrated approach ensures that every project —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-brand">
              from concept to operation
            </span>{' '}
            — is delivered with precision, reliability, and long-term
            performance in mind.
          </h2>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300 shadow-2xl shadow-brand-pink/30 mt-8">
            
            Start Your Project
            <ArrowRightIcon size={18} />
          </Link>
        </motion.div>
      </div>
    </section>);

}
// Main Services Page
export function Services() {
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
            to="/"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-neutral-700 hover:text-brand-pink transition-colors">
            
            About
          </Link>
          <Link to="/services" className="text-sm font-medium text-brand-pink">
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

      <ServicesHero />
      <IntroSection />
      <CoreServices />
      <IndustriesSection />
      <ProcessSection />
      <ClosingSection />

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
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
            <a href="#" className="hover:text-brand-pink transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0">© 2024 Encotec Engineering.</div>
        </div>
      </footer>
    </main>);

}