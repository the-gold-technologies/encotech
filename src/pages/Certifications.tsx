import React, { useEffect, useState, useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  AwardIcon,
  CheckCircle2Icon,
  FileTextIcon,
  BuildingIcon,
  GlobeIcon,
  ChevronRightIcon } from
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
function CertificationsHero() {
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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2400"
          alt="Certifications and Quality Assurance"
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
              Trust & Excellence
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
            
            CERTIFICATIONS & PARTNERS
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
            
            Our commitment to global standards of quality, safety, and
            environmental management, backed by strategic alliances with
            industry leaders.
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
              
              ISO Certified
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
              
              ASME Compliant
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
              
              15+ Years Excellence
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}
function CertificationsGrid() {
  const certifications = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    category: 'Quality Management',
    desc: 'Ensuring consistent quality in our engineering, procurement, and construction services.',
    icon: ShieldCheckIcon
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015',
    category: 'Environmental Management',
    desc: 'Commitment to minimizing our environmental footprint across all project sites.',
    icon: GlobeIcon
  },
  {
    id: 'iso-45001',
    title: 'ISO 45001:2018',
    category: 'Occupational Health & Safety',
    desc: 'Maintaining the highest standards of workplace safety for our employees and contractors.',
    icon: CheckCircle2Icon
  },
  {
    id: 'asme',
    title: "ASME 'U' & 'S' Stamps",
    category: 'Boiler & Pressure Vessel',
    desc: 'Authorized to manufacture and assemble power boilers and pressure vessels.',
    icon: AwardIcon
  },
  {
    id: 'nabl',
    title: 'NABL Accreditation',
    category: 'Testing & Calibration',
    desc: 'Recognized competence of our testing and calibration laboratories.',
    icon: FileTextIcon
  },
  {
    id: 'ibr',
    title: 'IBR Certification',
    category: 'Indian Boiler Regulations',
    desc: 'Certified as a special class boiler repairer and erector under IBR 1950.',
    icon: BuildingIcon
  }];

  return (
    <section className="py-32 bg-neutral-50 relative overflow-hidden">
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
          transition={{
            duration: 0.8
          }}
          className="mb-16">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Global Standards
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight max-w-3xl">
            Accreditations That Define Our Quality
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) =>
          <motion.div
            key={cert.id}
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
              delay: index * 0.1
            }}
            className="bg-white p-10 border border-neutral-200 hover:border-brand-pink/30 hover:shadow-xl hover:shadow-brand-pink/5 transition-all duration-500 group">
            
              <div className="w-14 h-14 bg-brand-panel flex items-center justify-center text-brand-pink mb-8 group-hover:scale-110 transition-transform duration-500">
                <cert.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="text-xs font-bold text-brand-pink tracking-wider uppercase mb-3">
                {cert.category}
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4 tracking-tight">
                {cert.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{cert.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function StrategicPartners() {
  const partners = [
  {
    name: 'Siemens Energy',
    monogram: 'SE',
    role: 'Gas Turbine Technology'
  },
  {
    name: 'GE Vernova',
    monogram: 'GE',
    role: 'Power Generation Systems'
  },
  {
    name: 'BHEL',
    monogram: 'BH',
    role: 'Heavy Electrical Equipment'
  },
  {
    name: 'NTPC',
    monogram: 'NT',
    role: 'Thermal Power Operations'
  },
  {
    name: 'L&T Energy',
    monogram: 'LT',
    role: 'EPC & Construction'
  },
  {
    name: 'Tata Power',
    monogram: 'TP',
    role: 'Integrated Power Solutions'
  },
  {
    name: 'Adani Power',
    monogram: 'AP',
    role: 'Private Sector Energy'
  },
  {
    name: 'JSW Energy',
    monogram: 'JW',
    role: 'Diversified Energy Portfolio'
  }];

  return (
    <section className="py-32 bg-dark-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-pink/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
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
            className="max-w-2xl">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                Strategic Alliances
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Trusted by Industry Leaders
            </h2>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              x: 30
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
            className="text-neutral-400 max-w-md leading-relaxed">
            
            We collaborate with the world's leading technology providers and
            energy conglomerates to deliver state-of-the-art solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) =>
          <motion.div
            key={partner.name}
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
              duration: 0.5,
              delay: index * 0.05
            }}
            className="bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-brand-pink/50 transition-all duration-300 group">
            
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-xl font-black text-white/50 group-hover:text-brand-pink group-hover:bg-brand-pink/10 transition-colors duration-300">
                {partner.monogram}
              </div>
              <span className="text-sm font-bold tracking-wider text-center">
                {partner.name}
              </span>
              <span className="text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 text-center">
                {partner.role}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function IndustryMemberships() {
  const memberships = [
  {
    name: 'Confederation of Indian Industry (CII)',
    year: '2010'
  },
  {
    name: 'Federation of Indian Chambers of Commerce (FICCI)',
    year: '2012'
  },
  {
    name: 'Indian Electrical & Electronics Mfrs. Assoc. (IEEMA)',
    year: '2014'
  },
  {
    name: 'Central Board of Irrigation and Power (CBIP)',
    year: '2015'
  },
  {
    name: 'Independent Power Producers Assoc. (IPPAI)',
    year: '2016'
  },
  {
    name: 'Associated Chambers of Commerce (ASSOCHAM)',
    year: '2018'
  }];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
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
          className="text-center">
          
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            INDUSTRY MEMBERSHIPS
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Active participation in shaping the future of India's energy sector
            through key industry bodies and associations.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full flex overflow-x-hidden border-y border-neutral-100 py-8 bg-neutral-50 mb-16">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20
          }}>
          
          {[...memberships, ...memberships].map((item, i) =>
          <div
            key={i}
            className="flex items-center gap-8 px-8 text-xl font-bold text-neutral-300 uppercase tracking-widest">
            
              <span>{item.name}</span>
              <span className="w-2 h-2 rounded-full bg-brand-pink" />
            </div>
          )}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberships.map((item, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="p-6 border border-neutral-200 flex justify-between items-center hover:border-brand-pink transition-colors duration-300">
            
              <span className="font-bold text-neutral-900 text-sm pr-4">
                {item.name}
              </span>
              <span className="text-xs font-bold text-brand-pink bg-brand-panel px-3 py-1">
                Since {item.year}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function TrustStats() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/10">
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={15} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Years of Excellence
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={100} suffix="%" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Compliance Rate
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={50} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Global Audits Passed
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
              <AnimatedCounter target={23} suffix="+" />
            </div>
            <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
              Countries Recognized
            </div>
          </div>
        </div>
      </div>
    </section>);

}
function CTASection() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
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
          }}>
          
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight">
            Partner With Excellence
          </h2>
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
            Experience engineering services backed by global certifications and
            a commitment to uncompromising quality.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
            
            Discuss Your Project
            <ArrowRightIcon size={16} />
          </Link>
        </motion.div>
      </div>
    </section>);

}
export function Certifications() {
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
            className="text-sm font-medium text-brand-pink">
            
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

      <CertificationsHero />
      <CertificationsGrid />
      <StrategicPartners />
      <IndustryMemberships />
      <TrustStats />
      <CTASection />

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