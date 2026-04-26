import React, { useEffect, useState, useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRightIcon,
  AwardIcon,
  UsersIcon,
  GlobeIcon,
  TrendingUpIcon } from
'lucide-react';
// --- Animated Counter Component ---
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
// --- Sections ---
function LeadershipHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  return (
    <section className="relative min-h-screen w-full bg-neutral-900 text-white overflow-hidden flex items-center">
      {/* Parallax Background */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0">
        
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2400"
          alt="Leadership and Team"
          className="w-full h-full object-cover opacity-40" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/70 to-neutral-900" />
      </motion.div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          'linear-gradient(rgba(233,30,140,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-20">
        <motion.div
          style={{
            opacity
          }}
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
          }}>
          
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="flex items-center gap-3 mb-8">
            
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              Our People
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8 max-w-5xl">
            
            LEADERSHIP & TEAM
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-3xl mb-12">
            
            Meet the experienced leaders and engineers driving operational
            excellence and strategic growth across global energy markets.
          </motion.p>

          {/* Floating Stat Badges */}
          <div className="flex flex-wrap gap-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.8
              }}
              className="px-6 py-3 bg-brand-pink/90 backdrop-blur-sm text-white font-bold text-sm tracking-wider uppercase">
              
              200+ Professionals
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.9
              }}
              className="px-6 py-3 bg-white/90 backdrop-blur-sm text-neutral-900 font-bold text-sm tracking-wider uppercase">
              
              15+ Years Average Experience
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 1.0
              }}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm tracking-wider uppercase">
              
              23+ Countries
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}
function LeadershipPhilosophy() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
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
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-8 leading-tight tracking-tight uppercase">
              Leading With an Owner's Mindset
            </h2>

            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                At Encotec, leadership is not just about managing teams; it's
                about taking full accountability for the outcomes we deliver.
                Our leadership team brings decades of hands-on experience from
                the world's most complex energy projects.
              </p>
              <p>
                We believe that true engineering excellence requires a culture
                where every team member is empowered to think critically, act
                decisively, and prioritize long-term asset performance over
                short-term gains.
              </p>
            </div>
          </motion.div>

          {/* Right: Image & Callout */}
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
              duration: 0.8,
              delay: 0.2
            }}
            className="relative">
            
            <div
              className="relative shadow-2xl"
              style={{
                transform: 'rotate(2deg)'
              }}>
              
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
                alt="Leadership Philosophy"
                className="w-full h-[500px] object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
            </div>

            {/* Callout Quote */}
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
                duration: 0.6,
                delay: 0.6
              }}
              className="absolute -bottom-10 -left-6 md:-left-12 bg-brand-panel p-8 shadow-xl max-w-sm border-l-4 border-brand-pink"
              style={{
                transform: 'rotate(-2deg)'
              }}>
              
              <p className="text-lg font-bold text-neutral-900 italic leading-snug">
                "We don't just manage projects — we take ownership of outcomes,
                treating every asset as if it were our own."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
function ExecutiveTeam() {
  const executives = [
  {
    name: 'Vikram Sharma',
    role: 'Managing Director & Founder',
    image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    bio: "25+ years of leadership in energy infrastructure. Founded Encotec with a vision to bring an owner's mindset to every project. Under his leadership, Encotec has grown from a specialized engineering firm to a full-spectrum energy services provider operating across 23+ countries.",
    tags: ['Strategic Leadership', 'Business Development', 'Energy Policy']
  },
  {
    name: 'Rajesh Patel',
    role: 'Director – Operations',
    image:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: '20+ years in power plant operations and project execution. Leads operational delivery across multiple projects, ensuring efficient execution, quality standards, and optimal resource utilization across thermal, renewable, and transmission projects.',
    tags: [
    'Operations Management',
    'Plant Commissioning',
    'Asset Optimization']

  }];

  return (
    <section className="py-32 bg-dark-bg text-white">
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
          transition={{
            duration: 0.8
          }}
          className="mb-16">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Executive Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tight">
            Visionaries Driving Our Mission
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {executives.map((exec, index) =>
          <motion.div
            key={exec.name}
            initial={{
              opacity: 0,
              y: 40
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
              delay: index * 0.2
            }}
            className="relative h-[500px] overflow-hidden group bg-neutral-800">
            
              {/* Background Image */}
              <img
              src={exec.image}
              alt={exec.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            

              {/* Default Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 md:p-12 flex flex-col justify-start pt-12">
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  {exec.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pb-24">
                  {exec.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 border border-brand-pink/50 text-brand-pink text-xs font-bold uppercase tracking-wider">
                  
                      {tag}
                    </span>
                )}
                </div>
              </div>

              {/* Always Visible Name & Role */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 pointer-events-none z-10">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                  {exec.name}
                </h3>
                <p className="text-brand-pink font-bold text-sm tracking-wider uppercase">
                  {exec.role}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function SeniorLeadership() {
  const leaders = [
  {
    name: 'Dr. Anita Desai',
    role: 'VP Engineering',
    image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'PhD in Thermal Engineering. 18+ years leading complex engineering design for power generation and transmission projects.'
  },
  {
    name: 'Sanjay Mehta',
    role: 'VP Business Development',
    image:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    bio: '15+ years driving strategic growth across India, Middle East, and Southeast Asia.'
  },
  {
    name: 'Priya Krishnan',
    role: 'Head of Renewable Energy',
    image:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    bio: '12+ years in solar and wind energy project development and execution.'
  },
  {
    name: 'Arjun Reddy',
    role: 'Head of Project Management',
    image:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    bio: '16+ years managing large-scale EPC projects across diverse geographies.'
  },
  {
    name: 'Dr. Klaus Werner',
    role: 'Head of Quality & Safety',
    image:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    bio: '20+ years in quality management systems and international safety standards.'
  },
  {
    name: 'Meera Iyer',
    role: 'Chief Financial Officer',
    image:
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800',
    bio: '14+ years in financial strategy and corporate governance for engineering firms.'
  }];

  return (
    <section className="py-32 bg-neutral-50">
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
          transition={{
            duration: 0.8
          }}
          className="mb-16 text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Senior Leadership
            </span>
            <div className="w-8 h-[2px] bg-brand-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight">
            Department Heads
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) =>
          <motion.div
            key={leader.name}
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
              delay: index * 0.1
            }}
            whileHover={{
              y: -8
            }}
            className="bg-white border border-neutral-200 hover:border-b-4 hover:border-b-brand-pink transition-all duration-300 overflow-hidden group">
            
              <div className="h-64 overflow-hidden">
                <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-neutral-900 mb-1 uppercase tracking-tight">
                  {leader.name}
                </h3>
                <p className="text-brand-pink text-xs font-bold uppercase tracking-wider mb-4">
                  {leader.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function TeamByNumbers() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/10">
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={1800} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Total Professionals
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={150} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Senior Engineers
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={23} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Countries of Operation
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={15} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Years Avg Experience
            </div>
          </div>
        </div>
      </div>
    </section>);

}
function CultureValues() {
  const values = [
  {
    title: 'Technical Mastery',
    desc: 'Deep domain expertise across every discipline',
    icon: AwardIcon
  },
  {
    title: 'Collaborative Spirit',
    desc: 'Cross-functional teams solving complex challenges',
    icon: UsersIcon
  },
  {
    title: 'Global Perspective',
    desc: 'Diverse experiences from 23+ countries',
    icon: GlobeIcon
  },
  {
    title: 'Continuous Growth',
    desc: 'Investment in learning and professional development',
    icon: TrendingUpIcon
  }];

  return (
    <section className="py-32 bg-white">
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
          transition={{
            duration: 0.8
          }}
          className="mb-16">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Our Culture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight">
            What Defines Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) =>
          <motion.div
            key={value.title}
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
              delay: index * 0.1
            }}
            whileHover={{
              y: -8
            }}
            className="p-8 bg-neutral-50 border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 group">
            
              <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-neutral-900 mb-3 uppercase tracking-tight">
                {value.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function JoinCTA() {
  return (
    <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
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
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">
            Join Our Team of Experts
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            We're always looking for talented engineers and energy professionals
            who share our passion for excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
              
              View Open Positions
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300">
              
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);

}
export function Leadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            className="text-sm font-medium text-brand-pink">
            
            Leadership
          </Link>
        </div>

        <Link
          to="/contact"
          className="px-6 py-2.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
          
          Contact Us
        </Link>
      </nav>

      <LeadershipHero />
      <LeadershipPhilosophy />
      <ExecutiveTeam />
      <SeniorLeadership />
      <TeamByNumbers />
      <CultureValues />
      <JoinCTA />

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