import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HardHatIcon,
  GlobeIcon,
  TruckIcon,
  CheckCircle2Icon,
  ZapIcon,
  SettingsIcon } from
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
function ConstructionHero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center pt-20">
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
          'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      

      {/* Animated Construction Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[20%] left-[10%] w-64 h-64 border border-brand-pink/30 rounded-full"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }} />
        
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-96 h-96 border border-brand-light/20 rounded-full"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear'
          }} />
        
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900" />

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
              Construction, Commissioning & Relocation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            Bringing Complex <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-light">
              Infrastructure to Life
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
            At Encotec, we thrive on the challenge of "physical realization".
            From the massive IBR piping of a thermal plant to the precision
            mounting of solar modules, we bring your assets online with speed
            and safety.
          </p>
        </motion.div>
      </div>
    </section>);

}
function CapabilitiesSection() {
  const capabilities = [
  {
    title: 'Multi-Sector Expertise',
    description:
    'We have delivered construction excellence across thermal power, solar PV, and wind projects globally. Our teams handle everything from civil works to complex mechanical erection.',
    icon: HardHatIcon
  },
  {
    title: 'International Commissioning',
    description:
    'Our teams have managed grid synchronization and performance tests in diverse markets, including Greece and Turkey. We ensure your plant meets all local and international standards.',
    icon: GlobeIcon
  },
  {
    title: 'Asset Relocation Services',
    description:
    'Unique to Encotec, we support owners in the complex process of dismantling, shifting, and reinstalling plants from one site—or country—to another, ensuring minimal downtime.',
    icon: TruckIcon
  }];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
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
          
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Physical Realization at Scale
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Whether it's a new build or moving an entire plant across borders,
            we handle the complex installation and synchronization of your
            assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) =>
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
                <cap.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4">
                {cap.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function ProcessFlow() {
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
              The Relocation <span className="text-brand-pink">Advantage</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              Asset relocation is a highly specialized service that requires
              meticulous planning, precise execution, and deep engineering
              knowledge. Encotec is one of the few global providers with a
              proven track record in cross-border plant relocations.
            </p>

            <div className="space-y-6">
              {[
              'Detailed dismantling protocols and tagging',
              'Logistics planning and customs clearance support',
              'Refurbishment of critical components during transit',
              'Re-erection and synchronization at the new site'].
              map((item, i) =>
              <div key={i} className="flex items-start gap-4">
                  <CheckCircle2Icon
                  className="text-brand-pink flex-shrink-0 mt-1"
                  size={20} />
                
                  <span className="text-neutral-300">{item}</span>
                </div>
              )}
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
            className="relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-light/20 blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-neutral-900/50 p-6 border border-white/5">
                  <SettingsIcon className="text-brand-pink mb-4" size={28} />
                  <div className="font-bold mb-2">Dismantle</div>
                  <div className="text-sm text-neutral-400">
                    Precision teardown
                  </div>
                </div>
                <div className="bg-neutral-900/50 p-6 border border-white/5">
                  <TruckIcon className="text-brand-pink mb-4" size={28} />
                  <div className="font-bold mb-2">Transport</div>
                  <div className="text-sm text-neutral-400">
                    Global logistics
                  </div>
                </div>
                <div className="bg-neutral-900/50 p-6 border border-white/5">
                  <HardHatIcon className="text-brand-pink mb-4" size={28} />
                  <div className="font-bold mb-2">Erect</div>
                  <div className="text-sm text-neutral-400">
                    Expert installation
                  </div>
                </div>
                <div className="bg-neutral-900/50 p-6 border border-white/5">
                  <ZapIcon className="text-brand-pink mb-4" size={28} />
                  <div className="font-bold mb-2">Commission</div>
                  <div className="text-sm text-neutral-400">
                    Grid sync & testing
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
export function TransmissionDistribution() {
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

      <ConstructionHero />
      <CapabilitiesSection />
      <ProcessFlow />

      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Ready to Bring Your Asset Online?
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            From new builds to complex cross-border relocations, our teams are
            ready to execute.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink text-white font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
            
            Discuss Your Project
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