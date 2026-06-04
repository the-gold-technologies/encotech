import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
const heroStats = [
{
  value: '2011',
  label: 'FOUNDED YEAR'
},
{
  value: '13+',
  label: 'CITIES IN INDIA'
},
{
  value: '300+',
  label: 'SPECIALIZED ENGINEERS'
},
{
  value: '8000+',
  label: 'MW UNDER STEWARDSHIP'
}];

const serviceTags = [
'STEWARDSHIP',
'COMMISSIONING',
'ADVISORY',
'GLOBAL SOURCING'];

export function Hero() {
  return (
    <section className="relative w-full bg-white pt-28 pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Content — spans 6 cols */}
          <div className="lg:col-span-6 pt-4 lg:pt-8">
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
                duration: 0.6
              }}
              className="flex items-center gap-3 mb-8">
              
              <div className="w-8 h-[2px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                Global Energy Stewardship
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
                delay: 0.1
              }}
              className="text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] font-black text-neutral-900 leading-[1.05] tracking-tight uppercase mb-8">
              
              Your Assets. Our{' '}
              <span className="text-brand-pink">Stewardship.</span> End-to-End
              Solutions for a Global Future
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
                duration: 0.7,
                delay: 0.25
              }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg mb-8">
              
              We are more than consultants; we are your partners in progress. By
              adopting an "Owner's Mindset," we take total responsibility for
              your infrastructure — from the first feasibility study to
              long-term operational excellence.
            </motion.p>

            {/* Service Tags */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.35
              }}
              className="flex flex-wrap gap-2.5 mb-8">
              
              {serviceTags.map((tag, i) =>
              <span
                key={i}
                className="px-4 py-2 border border-neutral-300 text-[11px] font-bold tracking-wider text-neutral-700 uppercase hover:border-brand-pink hover:text-brand-pink transition-colors duration-300 cursor-default">
                
                  {tag}
                </span>
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.45
              }}
              className="flex flex-wrap gap-4 mb-16">
              
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300">
                
                Our Services
                <ArrowRightIcon size={14} />
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-neutral-900 text-neutral-900 text-xs font-bold tracking-wider uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300">
                
                View Case Studies
              </Link>
            </motion.div>

            {/* Stats Row */}
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
                duration: 0.7,
                delay: 0.55
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-200">
              
              {heroStats.map((stat, i) =>
              <div key={i}>
                  <div className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-neutral-400 tracking-[0.15em] uppercase mt-2 leading-tight">
                    {stat.label}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Image Area — spans 6 cols */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                rotate: 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 3
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: 'easeOut'
              }}
              className="relative">
              
              {/* Main Image */}
              <div
                className="relative overflow-hidden shadow-2xl shadow-black/20"
                style={{
                  transform: 'rotate(3deg)'
                }}>
                
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200"
                  alt="Wind turbines at sunset"
                  className="w-full h-[420px] md:h-[520px] lg:h-[580px] object-cover" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* 150+ Projects Badge */}
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
                  duration: 0.5,
                  delay: 1
                }}
                className="absolute -bottom-6 left-4 md:left-8 z-20"
                style={{
                  transform: 'rotate(-3deg)'
                }}>
                
                <div className="bg-white px-6 py-4 shadow-xl border border-neutral-100">
                  <div className="text-3xl font-black text-neutral-900 leading-none">
                    150+
                  </div>
                  <div className="text-[10px] font-bold text-neutral-400 tracking-[0.15em] uppercase mt-1">
                    Projects Delivered
                  </div>
                  <div className="w-10 h-[3px] bg-brand-pink mt-2" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}