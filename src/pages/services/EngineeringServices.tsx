import React, { useEffect, useState, useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  TargetIcon,
  TrendingUpIcon,
  LayoutIcon,
  ZapIcon,
  NetworkIcon,
  FileTextIcon,
  SearchIcon,
  PencilRulerIcon,
  SettingsIcon,
  ShieldCheckIcon } from
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
// Immersive Hero Section
function EngineeringHero() {
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
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2400"
          alt="Power engineering facility"
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
          
          {/* Breadcrumb */}
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
              delay: 0.2
            }}>
            
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300 mb-12">
              
              <ArrowLeftIcon size={16} />
              Back to Services
            </Link>
          </motion.div>

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
              Service 01
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
            
            ENGINEERING SERVICES
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
            
            Comprehensive engineering solutions forming the foundation of
            reliable and efficient energy infrastructure across power
            generation, transmission, and renewable energy projects.
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
              
              500+ Projects Engineered
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
              
              8000+ MW Designed
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
              
              99.2% Design Accuracy
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}
// Overview Section
function OverviewSection() {
  return (
    <section className="py-32 bg-white">
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
                Overview
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 leading-tight">
              Building the Foundation of Reliable Energy Infrastructure
            </h2>

            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Our engineering services deliver comprehensive solutions that
                form the foundation of reliable and efficient energy
                infrastructure. We bring deep technical expertise across
                feasibility analysis, system design, and detailed engineering
                for power generation, transmission, and renewable energy
                projects.
              </p>
              <p>
                From initial site assessment to final design validation, our
                engineering team ensures every project is built on a strong
                technical foundation that optimizes performance, minimizes risk,
                and delivers long-term value.
              </p>

              {/* Callout */}
              <div className="mt-8 p-6 bg-brand-panel border-l-4 border-brand-pink">
                <p className="text-neutral-900 font-medium italic">
                  "Engineering excellence is not just about technical precision
                  — it's about understanding the entire lifecycle and designing
                  for reliability, efficiency, and sustainable performance."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
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
              className="relative"
              style={{
                transform: 'rotate(2deg)'
              }}>
              
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200"
                alt="Engineers reviewing blueprints"
                className="w-full h-[600px] object-cover shadow-2xl" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.6
              }}
              className="absolute -bottom-6 -left-6 px-6 py-4 bg-white shadow-xl border border-neutral-200">
              
              <div className="text-xs font-bold text-brand-pink uppercase tracking-wider mb-1">
                Engineering Excellence
              </div>
              <div className="text-2xl font-black text-neutral-900">
                Since 2009
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
// Key Capabilities Section
function CapabilitiesSection() {
  const capabilities = [
  {
    title: 'Site Assessment & Evaluation',
    description:
    'Comprehensive technical evaluation of site conditions, resource availability, and project feasibility',
    icon: TargetIcon,
    image:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Energy Yield Analysis',
    description:
    'Detailed resource assessment and energy generation forecasting for optimal project planning',
    icon: TrendingUpIcon,
    image:
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Feasibility Studies',
    description:
    'Pre-feasibility and detailed feasibility studies with technical and commercial evaluation',
    icon: FileTextIcon,
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Design & Engineering',
    description:
    'Design review, detailed engineering, and preparation of comprehensive project reports (DPR)',
    icon: LayoutIcon,
    image:
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'System Integration',
    description:
    'Power evacuation planning and system integration for seamless grid connectivity',
    icon: ZapIcon,
    image:
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Transmission & Substation Design',
    description:
    'Transmission line design (33kV to 765kV) and substation design (AIS/GIS systems)',
    icon: NetworkIcon,
    image:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
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
          className="mb-16">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6">
            Key Capabilities
          </h2>
          <p className="text-neutral-600 text-xl max-w-3xl">
            Our engineering services span the complete project lifecycle, from
            initial assessment to detailed design and technical validation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) =>
          <motion.div
            key={i}
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
              delay: i * 0.1
            }}
            whileHover={{
              y: -8
            }}
            className="group relative overflow-hidden bg-white border border-neutral-200 hover:border-brand-pink/50 transition-all duration-500">
            
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  duration: 0.6
                }}
                src={cap.image}
                alt={cap.title}
                className="w-full h-full object-cover" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-brand-pink/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <cap.icon size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 uppercase tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// Engineering Process Section
function ProcessSection() {
  const steps = [
  {
    title: 'Assessment',
    description:
    'Comprehensive site evaluation, resource analysis, and technical feasibility assessment',
    icon: SearchIcon,
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Analysis',
    description:
    'Energy yield forecasting, system modeling, and detailed technical evaluation',
    icon: TrendingUpIcon,
    image:
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Design',
    description:
    'Detailed engineering, system design, and comprehensive project documentation',
    icon: PencilRulerIcon,
    image:
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Integration',
    description:
    'Power evacuation planning, grid connectivity design, and system integration',
    icon: SettingsIcon,
    image:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Validation',
    description:
    'Design review, technical validation, and regulatory compliance verification',
    icon: ShieldCheckIcon,
    image:
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200'
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
          className="mb-20 text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Our Approach
            </span>
            <div className="w-8 h-[2px] bg-brand-pink" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6">
            Engineering Methodology
          </h2>
          <p className="text-neutral-600 text-xl max-w-3xl mx-auto">
            A systematic approach to engineering excellence, ensuring every
            project is built on a foundation of technical rigor and precision.
          </p>
        </motion.div>

        <div className="space-y-24 relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-pink via-brand-pink/50 to-transparent hidden lg:block" />

          {steps.map((step, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -60 : 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1
            }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
              {/* Content */}
              <div
              className={`${i % 2 === 1 ? 'lg:col-start-2 lg:text-left' : 'lg:text-right'}`}>
              
                <div
                className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 1 ? '' : 'lg:flex-row-reverse'}`}>
                
                  <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink">
                    <step.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-6xl font-black text-neutral-100">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-neutral-900 mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div
              className={`${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              
                <motion.div
                whileHover={{
                  scale: 1.02
                }}
                transition={{
                  duration: 0.4
                }}
                className="relative overflow-hidden shadow-2xl">
                
                  <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-80 object-cover" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// Stats Section
function StatsSection() {
  const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Engineered'
  },
  {
    value: 8000,
    suffix: '+ MW',
    label: 'Capacity Designed'
  },
  {
    value: 23,
    suffix: '+',
    label: 'Countries Served'
  },
  {
    value: 99.2,
    suffix: '%',
    label: 'Design Accuracy'
  }];

  return (
    <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-pink rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl" />
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
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Engineering Impact
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Delivering measurable results through technical excellence and
            precision engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) =>
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
              delay: i * 0.1
            }}
            className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-pink/50 transition-colors duration-300">
            
              <div className="text-5xl md:text-6xl font-black text-brand-pink mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-neutral-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// Featured Project Section
function FeaturedProjectSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -100]);
  return (
    <section className="py-32 bg-white overflow-hidden">
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
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Featured Project
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900">
            Engineering Excellence in Action
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image */}
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
            }}
            className="lg:col-span-3 relative overflow-hidden">
            
            <motion.div
              style={{
                y
              }}
              className="relative">
              
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2400"
                alt="Obra C Thermal Power Plant"
                className="w-full h-[600px] object-cover shadow-2xl" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Details */}
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
            className="lg:col-span-2">
            
            <h3 className="text-3xl font-black text-neutral-900 mb-4 uppercase tracking-tight">
              The Obra 'C' Thermal Success
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Complete engineering services for a 2x660 MW supercritical thermal
              power plant in Uttar Pradesh, delivering comprehensive design,
              system integration, and technical validation.
            </p>

            {/* Metrics */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink">
                  <ZapIcon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-neutral-900">
                    1,320 MW
                  </div>
                  <div className="text-sm text-neutral-600">Total Capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink">
                  <TargetIcon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-neutral-900">
                    Supercritical
                  </div>
                  <div className="text-sm text-neutral-600">Technology</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink">
                  <CheckCircle2Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-neutral-900">
                    On Schedule
                  </div>
                  <div className="text-sm text-neutral-600">Delivery</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
// Value Delivered Section
function ValueSection() {
  const values = [
  {
    title: 'Reduced Project Risk',
    description:
    'Accurate planning and technical validation minimize execution risks and costly delays',
    icon: ShieldCheckIcon
  },
  {
    title: 'Optimized System Design',
    description:
    'Performance-focused engineering ensures maximum efficiency and reliability',
    icon: TargetIcon
  },
  {
    title: 'Strong Technical Foundation',
    description:
    'Comprehensive documentation and design reviews support seamless execution',
    icon: ClipboardCheckIcon
  },
  {
    title: 'Regulatory Compliance',
    description:
    'Designs meet all applicable standards and regulatory requirements',
    icon: CheckCircle2Icon
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
          className="mb-16 text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Value Delivered
            </span>
            <div className="w-8 h-[2px] bg-brand-pink" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6">
            Engineering Value
          </h2>
          <p className="text-neutral-600 text-xl max-w-3xl mx-auto">
            Our engineering approach delivers measurable value through risk
            reduction, performance optimization, and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -40 : 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.1
            }}
            whileHover={{
              y: -4
            }}
            className="flex gap-6 p-8 bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300">
            
              <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink flex-shrink-0">
                <value.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// Related Services Section
function RelatedServicesSection() {
  const services = [
  {
    title: 'Project Management',
    description:
    'Structured planning, coordination, and control across all project phases',
    link: '/services/project-management',
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'EPC & Construction',
    description:
    'Execution support across engineering, procurement, and construction',
    link: '/services',
    image:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'O&M Services',
    description:
    'Long-term operational excellence and performance optimization',
    link: '/services',
    image:
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200'
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
          className="mb-16">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Related Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900">
            Explore More Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) =>
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
              delay: i * 0.1
            }}
            whileHover={{
              y: -8
            }}
            className="group relative overflow-hidden bg-white border border-neutral-200 hover:border-brand-pink/50 transition-all duration-500">
            
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  duration: 0.6
                }}
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300">
                
                  Explore Service
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
// CTA Section
function CTASection() {
  return (
    <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Glow */}
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
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Start Your Engineering Project?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            Let our engineering team help you build a strong technical
            foundation for your energy infrastructure project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
              
              Get Started
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300">
              
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);

}
// Main Component
export function EngineeringServices() {
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

      <EngineeringHero />
      <OverviewSection />
      <CapabilitiesSection />
      <ProcessSection />
      <StatsSection />
      <FeaturedProjectSection />
      <ValueSection />
      <RelatedServicesSection />
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