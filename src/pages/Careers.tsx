import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  GlobeIcon,
  TrendingUpIcon,
  DollarSignIcon,
  HeartIcon,
  ClockIcon,
  AwardIcon,
  MapPinIcon,
  BriefcaseIcon,
  CheckCircle2Icon,
  SearchIcon,
  UsersIcon,
  SettingsIcon,
  FileTextIcon } from
'lucide-react';
// --- Data ---
const benefits = [
{
  title: 'Global Exposure',
  description:
  'Work on critical energy infrastructure projects across 23+ countries with diverse international teams.',
  icon: GlobeIcon
},
{
  title: 'Technical Growth',
  description:
  'Access to cutting-edge technologies, specialized training, and continuous learning programs.',
  icon: TrendingUpIcon
},
{
  title: 'Competitive Compensation',
  description:
  'Industry-leading salary packages with performance-based bonuses and comprehensive benefits.',
  icon: DollarSignIcon
},
{
  title: 'Health & Wellness',
  description:
  'Comprehensive medical insurance, wellness programs, and support for physical and mental health.',
  icon: HeartIcon
},
{
  title: 'Work-Life Balance',
  description:
  'Flexible working arrangements, generous leave policies, and a supportive team environment.',
  icon: ClockIcon
},
{
  title: 'Career Progression',
  description:
  'Clear growth paths, leadership development, and mentorship from seasoned industry veterans.',
  icon: AwardIcon
}];

const jobs = [
{
  id: 1,
  title: 'Senior Power Plant Engineer',
  dept: 'Engineering',
  location: 'Mumbai, India',
  type: 'Full-time',
  desc: 'Lead engineering design and technical reviews for supercritical thermal power projects.'
},
{
  id: 2,
  title: 'Renewable Energy Analyst',
  dept: 'Engineering',
  location: 'Dubai, UAE',
  type: 'Full-time',
  desc: 'Conduct energy yield analysis and feasibility studies for solar and wind projects.'
},
{
  id: 3,
  title: 'Project Manager — EPC',
  dept: 'Project Management',
  location: 'Riyadh, KSA',
  type: 'Full-time',
  desc: 'Manage end-to-end execution of large-scale EPC projects in the Middle East.'
},
{
  id: 4,
  title: 'Commissioning Engineer',
  dept: 'Engineering',
  location: 'Houston, USA',
  type: 'Contract',
  desc: 'Oversee testing and commissioning of power generation equipment and systems.'
},
{
  id: 5,
  title: 'O&M Site Manager',
  dept: 'Operations',
  location: 'Rajpura, India',
  type: 'Full-time',
  desc: 'Lead day-to-day operations and maintenance of a 2x700 MW supercritical plant.'
},
{
  id: 6,
  title: 'Electrical Design Engineer',
  dept: 'Engineering',
  location: 'Mumbai, India',
  type: 'Full-time',
  desc: 'Design transmission lines (33kV-765kV) and substation systems (AIS/GIS).'
},
{
  id: 7,
  title: 'Business Development Manager',
  dept: 'Corporate',
  location: 'Singapore',
  type: 'Full-time',
  desc: 'Drive business growth across the Asia-Pacific region for energy services.'
},
{
  id: 8,
  title: 'Quality Assurance Lead',
  dept: 'Operations',
  location: 'Frankfurt, Germany',
  type: 'Full-time',
  desc: 'Implement and oversee quality management systems across European projects.'
}];

const gallery = [
{
  image:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  caption: 'Team Collaboration'
},
{
  image:
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
  caption: 'On-Site Engineering'
},
{
  image:
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  caption: 'Strategic Planning'
},
{
  image:
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
  caption: 'Field Operations'
},
{
  image:
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
  caption: 'Team Celebrations'
},
{
  image:
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  caption: 'Project Reviews'
}];

const processSteps = [
{
  title: 'Apply Online',
  description: 'Submit your resume and cover letter through our portal.',
  icon: FileTextIcon
},
{
  title: 'Initial Screening',
  description: 'Our HR team reviews your application within 5 business days.',
  icon: SearchIcon
},
{
  title: 'Technical Interview',
  description: 'Meet with our engineering leads for a technical discussion.',
  icon: UsersIcon
},
{
  title: 'Final Offer',
  description: 'Receive your offer and begin your journey with Encotec.',
  icon: CheckCircle2Icon
}];

// --- Components ---
function CareersHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  return (
    <section className="relative min-h-[80vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center">
      {/* Parallax Background */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0">
        
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2400"
          alt="Team collaboration"
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
      

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-32">
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
          }}
          className="max-w-4xl">
          
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
              delay: 0.2
            }}
            className="flex items-center gap-3 mb-8">
            
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              Careers at Encotec
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
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            
            SHAPE THE FUTURE OF GLOBAL ENERGY
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
            className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
            
            Join a team of world-class engineers and energy professionals
            delivering critical infrastructure across 23+ countries.
          </motion.p>

          {/* Floating Badges */}
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
            className="flex flex-wrap gap-4">
            
            <div className="px-6 py-3 bg-brand-pink/90 backdrop-blur-sm text-white font-bold text-sm tracking-wider uppercase">
              200+ Team Members
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm tracking-wider uppercase">
              Offices in 8 Countries
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
function WhyEncotecSection() {
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
                Why Join Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 leading-tight">
              Engineering Careers That Matter
            </h2>

            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                At Encotec, we don't just build power plants; we engineer the
                foundation of modern society. Our team works on some of the most
                complex and critical energy infrastructure projects globally,
                from massive supercritical thermal plants to utility-scale
                renewable energy parks.
              </p>
              <p>
                We foster a culture of technical excellence, continuous
                learning, and collaborative problem-solving. When you join
                Encotec, you gain global exposure, working alongside industry
                veterans who are passionate about mentoring the next generation
                of engineering leaders.
              </p>

              {/* Callout */}
              <div className="mt-8 p-8 bg-brand-panel border-l-4 border-brand-pink">
                <p className="text-xl text-neutral-900 font-medium italic">
                  "We empower our engineers to take ownership, innovate, and
                  deliver solutions that have a tangible impact on global energy
                  security."
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
                alt="Engineers working"
                className="w-full h-[600px] object-cover shadow-2xl" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
function BenefitsSection() {
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
              What We Offer
            </span>
            <div className="w-8 h-[2px] bg-brand-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900">
            Benefits & Perks
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) =>
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
            className="p-8 bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 group">
            
              <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function OpenPositionsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = [
  'All',
  'Engineering',
  'Project Management',
  'Operations',
  'Corporate'];

  const filteredJobs = jobs.filter((job) => {
    if (activeFilter === 'All') return true;
    return job.dept === activeFilter;
  });
  const getDeptColor = (dept: string) => {
    switch (dept) {
      case 'Engineering':
        return 'bg-blue-500 text-white';
      case 'Project Management':
        return 'bg-purple-500 text-white';
      case 'Operations':
        return 'bg-green-500 text-white';
      case 'Corporate':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-neutral-800 text-white';
    }
  };
  return (
    <section id="open-positions" className="py-32 bg-white min-h-screen">
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
          
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8">
            Current Openings
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-8 border-b border-neutral-200">
            {filters.map((filter) =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative pb-4 text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${activeFilter === filter ? 'text-brand-pink' : 'text-neutral-500 hover:text-neutral-900'}`}>
              
                {filter}
                {activeFilter === filter &&
              <motion.div
                layoutId="jobTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              </button>
            )}
          </div>
        </motion.div>

        {/* Job List */}
        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) =>
            <motion.div
              key={job.id}
              layout
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.2
                }
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
              whileHover={{
                y: -4
              }}
              className="group p-8 bg-white border border-neutral-200 hover:border-brand-pink/50 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getDeptColor(job.dept)}`}>
                    
                      {job.dept}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                      <MapPinIcon size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                      <BriefcaseIcon size={14} />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900 mb-2 group-hover:text-brand-pink transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-neutral-600">{job.desc}</p>
                </div>

                <div className="flex-shrink-0">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-bold tracking-wider uppercase hover:bg-brand-pink transition-colors duration-300">
                    Apply Now
                    <ArrowRightIcon size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {filteredJobs.length === 0 &&
        <div className="py-20 text-center text-neutral-500">
            No open positions found for this department.
          </div>
        }
      </div>
    </section>);

}
function CultureGallery() {
  return (
    <section className="py-32 bg-neutral-900 text-white overflow-hidden">
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
              Inside Encotec
            </span>
            <div className="w-8 h-[2px] bg-brand-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Life at Encotec
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item, i) =>
          <motion.div
            key={i}
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
              duration: 0.6,
              delay: i * 0.1
            }}
            className="group relative h-72 overflow-hidden bg-neutral-800">
            
              <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-lg font-bold tracking-wider uppercase text-brand-pink transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function ApplicationProcess() {
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
          
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            How to Join Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-[2px] bg-neutral-200 z-0" />

          {processSteps.map((step, i) =>
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
            className="relative z-10 text-center">
            
              <div className="w-24 h-24 mx-auto bg-white border-4 border-neutral-100 rounded-full flex items-center justify-center text-brand-pink mb-6 shadow-xl">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-black text-neutral-100 mb-4">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function CTASection() {
  const scrollToJobs = () => {
    const element = document.getElementById('open-positions');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
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
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            We're always looking for talented engineers and energy
            professionals. Send us your resume and we'll keep you in mind for
            future opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@encotec.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
              
              Send Your Resume
              <ArrowRightIcon size={16} />
            </a>
            <button
              onClick={scrollToJobs}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300">
              
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

}
export function Careers() {
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
          <Link to="/careers" className="text-sm font-medium text-brand-pink">
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

      <CareersHero />
      <WhyEncotecSection />
      <BenefitsSection />
      <OpenPositionsSection />
      <CultureGallery />
      <ApplicationProcess />
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