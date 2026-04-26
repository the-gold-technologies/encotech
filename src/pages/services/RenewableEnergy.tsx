import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClipboardCheckIcon,
  SearchIcon,
  ActivityIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  CheckCircle2Icon,
  ZapIcon } from
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
function AdvisoryHero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(233, 30, 140, 0.2) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
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
              Expert Advisory & Performance Audits
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            Solving the Hardest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-light">
              Engineering Problems
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
            When a plant is running but not performing, or when technical faults
            disrupt your peace of mind, our expert advisory team steps in. We
            provide high-level problem solving that goes beyond basic
            maintenance.
          </p>
        </motion.div>
      </div>
    </section>);

}
function AdvisoryFeatures() {
  const features = [
  {
    title: 'Specialised Testing (NDT)',
    description:
    'We use Non-Destructive Testing to assess the health of your equipment without causing further downtime. Identify micro-fractures and wear before they lead to catastrophic failure.',
    icon: SearchIcon
  },
  {
    title: 'Efficiency Audits',
    description:
    'Our in-house team conducts energy efficiency and steam path audits to identify savings and reduce your carbon footprint. We find the lost megawatts in your system.',
    icon: ActivityIcon
  },
  {
    title: '5S & Process Improvement',
    description:
    'We implement industrial standards (5S) to improve workplace safety and operational flow. A clean, organized plant is a safe and efficient plant.',
    icon: TrendingUpIcon
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
function DiagnosticProcess() {
  return (
    <section className="py-28 bg-neutral-900 text-white">
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
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our Diagnostic Approach
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We don't guess; we measure. Our advisory services are built on hard
            data and deep engineering expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
          {
            step: '01',
            title: 'Assess',
            desc: 'Comprehensive site evaluation and data gathering'
          },
          {
            step: '02',
            title: 'Analyze',
            desc: 'Deep dive into performance metrics and NDT results'
          },
          {
            step: '03',
            title: 'Advise',
            desc: 'Actionable recommendations for improvement'
          },
          {
            step: '04',
            title: 'Optimize',
            desc: 'Implementation support and verification'
          }].
          map((item, i) =>
          <motion.div
            key={i}
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
            transition={{
              delay: i * 0.1
            }}
            className="bg-white/5 border border-white/10 p-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
            
              <div className="text-6xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-brand-pink/10 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm relative z-10">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
export function RenewableEnergy() {
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

      <AdvisoryHero />
      <AdvisoryFeatures />
      <DiagnosticProcess />

      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Is Your Asset Reaching Its Full Potential?
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            Speak with our specialized engineers about our expert advisory and
            performance audits.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink text-white font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
            
            Request an Audit
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