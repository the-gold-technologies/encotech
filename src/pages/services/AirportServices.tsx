import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  FileCheckIcon,
  RefreshCwIcon,
  ActivityIcon,
  CheckCircle2Icon,
  BarChartIcon } from
'lucide-react';
function AnimatedCounter({
  target,
  suffix = ''



}: {target: number;suffix?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>);

}
function DueDiligenceHero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            'linear-gradient(45deg, #B6005E 25%, transparent 25%, transparent 75%, #B6005E 75%, #B6005E), linear-gradient(45deg, #B6005E 25%, transparent 25%, transparent 75%, #B6005E 75%, #B6005E)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }} />
        
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className="max-w-4xl">
          
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300 mb-12">
            
            <ArrowLeftIcon size={16} />
            Back to Services
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              Due Diligence & Asset Health
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            Making Informed Decisions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-light">
              For the Long Term
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
            Before you buy an old plant or decide to move one, you need to know
            if it's fit for the future. Our due diligence services provide the
            technical truth about your assets.
          </p>
        </motion.div>
      </div>
    </section>);

}
function HealthFeatures() {
  const features = [
  {
    title: 'Residual Life Assessment (RLA)',
    description:
    'We conduct exhaustive studies to determine how many more years of efficient life your plant equipment actually has, helping you plan for replacements or upgrades.',
    icon: ActivityIcon
  },
  {
    title: 'Technical Due Diligence',
    description:
    'We provide independent technical audits for plant acquisitions, helping you understand the true value, operational risks, and hidden costs of an investment.',
    icon: FileCheckIcon
  },
  {
    title: 'Restoration Strategy',
    description:
    'For older plants, we provide comprehensive revamping and restoration plans to improve performance, extend lifecycle, and meet modern environmental standards.',
    icon: RefreshCwIcon
  }];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, i) =>
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
              duration: 0.6,
              delay: i * 0.2
            }}
            className="p-10 bg-neutral-50 border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 group">
            
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-brand-pink mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function ValueProtection() {
  return (
    <section className="py-28 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Protecting Your <br />
              <span className="text-brand-pink">Investment</span>
            </h2>
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
              <p>
                Acquiring or relocating an industrial asset involves significant
                capital risk. Without a clear understanding of the asset's true
                condition, you may be inheriting expensive liabilities.
              </p>
              <p>
                Our independent technical audits provide the objective data you
                need to negotiate effectively, plan capital expenditures
                accurately, and ensure that your investment will deliver the
                expected returns over its intended lifecycle.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="bg-white/5 border border-white/10 p-10">
            
            <h3 className="text-2xl font-bold mb-6">What We Evaluate</h3>
            <ul className="space-y-4">
              {[
              'Structural integrity and material degradation',
              'Historical O&M records and failure analysis',
              'Environmental compliance and emissions',
              'Control systems obsolescence',
              'Thermodynamic performance baseline'].
              map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                  <CheckCircle2Icon
                  className="text-brand-pink flex-shrink-0 mt-1"
                  size={20} />
                
                  <span className="text-neutral-300">{item}</span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}
export function AirportServices() {
  return (
    <main className="w-full bg-white min-h-screen selection:bg-brand-pink selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-4 flex justify-between items-center bg-neutral-900/90 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="flex items-center">
          <img
            src="/encotec-768x179.png"
            alt="Encotec - Member of Dornier Group"
            className="h-10 w-auto" />
          
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 text-xs font-medium text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            SINCE 2011
          </div>
          <Link
            to="/"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            
            About
          </Link>
          <Link to="/services" className="text-sm font-medium text-brand-pink">
            Services
          </Link>
          <Link
            to="/insights"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            
            Insights
          </Link>
          <Link
            to="/careers"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            
            Careers
          </Link>
          <Link
            to="/certifications"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            
            Certifications
          </Link>
          <Link
            to="/leadership"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            
            Leadership
          </Link>
        </div>

        <Link
          to="/contact"
          className="px-6 py-2.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
          
          Contact Us
        </Link>
      </nav>

      <DueDiligenceHero />
      <HealthFeatures />
      <ValueProtection />

      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Planning an Acquisition or Relocation?
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            Get the technical truth about your assets before you make a
            decision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink text-white font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
            
            Request an Assessment
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>

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
            <Link
              to="/contact"
              className="hover:text-brand-pink transition-colors">
              
              Contact
            </Link>
          </div>
          <div className="mt-4 md:mt-0">© 2024 Encotec Engineering.</div>
        </div>
      </footer>
    </main>);

}