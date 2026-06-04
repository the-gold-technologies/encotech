import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  GlobeIcon,
  UsersIcon,
  ZapIcon,
  ArrowRightIcon } from
'lucide-react';
const stats = [
{
  value: '2011',
  label: 'FOUNDED YEAR',
  icon: CalendarIcon
},
{
  value: '13+',
  label: 'KEY LOCATIONS',
  icon: GlobeIcon
},
{
  value: '1800+',
  label: 'INDUSTRY SPECIALISTS',
  icon: UsersIcon
},
{
  value: '8000+',
  label: 'MW POWER CAPACITY',
  icon: ZapIcon
}];

export function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="flex items-center gap-3 mb-6">
              
              <div className="w-8 h-[2px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.1
              }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-neutral-900 leading-[1.08] tracking-tight uppercase mb-8">
              
              Human-Centric Engineering{' '}
              <span className="text-brand-pink">Since 2011</span>
            </motion.h2>

            {/* Body Text */}
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
                duration: 0.7,
                delay: 0.2
              }}
              className="space-y-5 mb-8">
              
              <p className="text-neutral-500 leading-relaxed">
                Encotec Energy brings an owner's mindset to every project.
                Founded in 2011, we have grown into a team of 1800+ industry
                specialists operating across 13+ key locations.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                From thermal power plants to cutting-edge solar installations,
                our engineering DNA drives precision, reliability, and
                sustainable outcomes for clients worldwide.
              </p>
            </motion.div>

            {/* Learn More Link */}
            <motion.a
              href="#"
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-pink uppercase hover:gap-3 transition-all duration-300 mb-12">
              
              Learn More
              <ArrowRightIcon size={14} />
            </motion.a>

            {/* Stats Grid */}
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
                duration: 0.7,
                delay: 0.35
              }}
              className="grid grid-cols-2 gap-4">
              
              {stats.map((stat, i) =>
              <div
                key={i}
                className="p-5 border border-neutral-200 hover:border-brand-pink/30 transition-colors duration-300 group">
                
                  <div className="mb-4">
                    <stat.icon
                    size={22}
                    className="text-brand-pink/60 group-hover:text-brand-pink transition-colors duration-300"
                    strokeWidth={1.5} />
                  
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-neutral-400 tracking-[0.15em] uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
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
              duration: 0.9,
              delay: 0.2
            }}
            className="relative">
            
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="Engineer working on advanced equipment"
                className="w-full h-[500px] lg:h-[620px] object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Est. 2011 Badge */}
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
                duration: 0.5,
                delay: 0.7
              }}
              className="absolute -bottom-5 left-6 z-20">
              
              <div className="flex items-center gap-3 bg-neutral-800 text-white pl-3 pr-6 py-3 shadow-xl">
                <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center">
                  <ZapIcon size={18} className="text-brand-pink" />
                </div>
                <div>
                  <div className="text-sm font-black leading-none">
                    Est. 2011
                  </div>
                  <div className="text-[9px] font-bold text-neutral-400 tracking-[0.15em] uppercase mt-0.5">
                    Pioneering Energy
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Global Excellence CTA Banner */}
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
            duration: 0.7
          }}
          className="mt-28 py-20 bg-neutral-50 -mx-6 lg:-mx-10 px-6 lg:px-10 text-center">
          
          <h3 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight uppercase mb-4">
            Experience Global Engineering Excellence.
          </h3>
          <p className="text-neutral-500 max-w-lg mx-auto mb-8">
            From India to Turkey, see how we are setting new standards in power
            infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
            
            View Our Global Reach
            <ArrowRightIcon size={14} />
          </Link>
        </motion.div>
      </div>
    </section>);

}
// Keep backward-compatible export
export { AboutSection as TrustStrip };