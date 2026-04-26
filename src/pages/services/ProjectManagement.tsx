import React, { useEffect, useState, useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircle2Icon,
  TargetIcon,
  FileCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapIcon,
  BriefcaseIcon,
  FileTextIcon } from
'lucide-react';
// Animated Counter Component
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
function ProjectHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center pt-20">
      {/* Strategic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
          'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      

      {/* Animated Strategic Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg">
        
        <motion.path
          d="M 0,200 Q 400,300 800,100 T 1600,200"
          fill="none"
          stroke="#B6005E"
          strokeWidth="2"
          initial={{
            pathLength: 0,
            opacity: 0
          }}
          animate={{
            pathLength: 1,
            opacity: 1
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut'
          }} />
        
        <motion.path
          d="M 0,400 Q 600,200 1000,500 T 1600,400"
          fill="none"
          stroke="#D4006F"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{
            pathLength: 0,
            opacity: 0
          }}
          animate={{
            pathLength: 1,
            opacity: 0.5
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            delay: 0.5
          }} />
        
      </svg>

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
              Project Conceptualisation & Development
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            Building Your Vision on a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-light">
              Logical Foundation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
            A great project doesn't start with a shovel in the ground; it starts
            with a logical, well-vetted plan. We are your strategic developers
            who ensure your project is technically sound and financially viable
            from day one.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4">
              <MapIcon className="text-brand-pink" size={24} />
              <span className="font-bold tracking-wider uppercase text-sm">
                Pre-Feasibility
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4">
              <FileTextIcon className="text-brand-pink" size={24} />
              <span className="font-bold tracking-wider uppercase text-sm">
                DPR Creation
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4">
              <BriefcaseIcon className="text-brand-pink" size={24} />
              <span className="font-bold tracking-wider uppercase text-sm">
                EPC Selection
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}
function PhilosophySection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
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
            
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-8">
              Not Just Detailed Engineering. <br />
              <span className="text-brand-pink">Strategic Development.</span>
            </h2>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                We are not a "detailed engineering" firm that gets lost in the
                minutiae. We understand that the earliest decisions in a
                project's lifecycle have the most profound impact on its
                ultimate success.
              </p>
              <p>
                By adopting an "Owner's Mindset" from the very beginning, we
                evaluate site conditions, resource potential, and financial
                models to ensure your investment is built on reality, not just
                theory. We provide the clarity required for stakeholder
                confidence and project approval.
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {[
            {
              icon: TargetIcon,
              title: 'Strategic Alignment',
              desc: 'Aligning technical specs with business goals'
            },
            {
              icon: FileCheckIcon,
              title: 'Financial Viability',
              desc: 'Rigorous financial and resource assessments'
            },
            {
              icon: UsersIcon,
              title: 'Partner Selection',
              desc: 'Finalising the right EPC contractors'
            },
            {
              icon: ShieldCheckIcon,
              title: 'Risk Mitigation',
              desc: 'Identifying challenges before they arise'
            }].
            map((feature, i) =>
            <div
              key={i}
              className="p-8 bg-neutral-50 border border-neutral-200 hover:border-brand-pink/30 transition-colors duration-300">
              
                <feature.icon
                className="text-brand-pink mb-4"
                size={32}
                strokeWidth={1.5} />
              
                <h3 className="font-bold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600">{feature.desc}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}
function CoreOfferings() {
  const offerings = [
  {
    title: 'Feasibility & Pre-Feasibility Studies',
    description:
    'We evaluate site conditions and resource potential to ensure your investment is built on reality, not just theory. Our comprehensive studies cover technical, economic, and environmental factors.',
    icon: MapIcon
  },
  {
    title: 'Detailed Project Reports (DPR)',
    description:
    'We provide the technical and financial clarity required for stakeholder confidence and project approval. Our DPRs serve as the definitive blueprint for project execution and financing.',
    icon: FileTextIcon
  },
  {
    title: 'Strategic Sourcing & EPC Selection',
    description:
    'We develop rigorous technical specifications and help you finalise EPC contractors, ensuring you have the right partners by your side. We manage the entire tendering and evaluation process.',
    icon: BriefcaseIcon
  }];

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
            Our Development Services
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            End-to-end conceptualisation to ensure your project starts strong.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, i) =>
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
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 hover:bg-white/10 transition-colors duration-300">
            
              <div className="w-16 h-16 bg-brand-pink/20 rounded-xl flex items-center justify-center text-brand-pink mb-8">
                <offering.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black mb-4">{offering.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function StatsSection() {
  return (
    <section className="py-20 bg-brand-pink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
            }}>
            
            <div className="text-5xl md:text-6xl font-black mb-2">
              <AnimatedCounter target={8000} suffix="+" />
            </div>
            <div className="text-sm font-bold uppercase tracking-wider opacity-90">
              MW Conceptualised
            </div>
          </motion.div>

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
            transition={{
              delay: 0.2
            }}>
            
            <div className="text-5xl md:text-6xl font-black mb-2">
              <AnimatedCounter target={100} suffix="%" />
            </div>
            <div className="text-sm font-bold uppercase tracking-wider opacity-90">
              Owner's Mindset
            </div>
          </motion.div>

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
            transition={{
              delay: 0.4
            }}>
            
            <div className="text-5xl md:text-6xl font-black mb-2">
              <AnimatedCounter target={300} suffix="+" />
            </div>
            <div className="text-sm font-bold uppercase tracking-wider opacity-90">
              Specialized Engineers
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
export function ProjectManagement() {
  return (
    <main className="w-full bg-white min-h-screen selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
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

      <ProjectHero />
      <PhilosophySection />
      <CoreOfferings />
      <StatsSection />

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            Let's start your project on a logical foundation with our expert
            conceptualisation and development services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink text-white font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
            
            Start the Conversation
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>

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