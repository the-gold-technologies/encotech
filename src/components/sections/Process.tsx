import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  SearchIcon,
  PenToolIcon,
  HardHatIcon,
  CheckCircle2Icon,
  ActivityIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
const steps = [
{
  id: 1,
  title: 'Logical Foundation',
  description:
  'We start by conceptualizing the project through rigorous feasibility studies and Detailed Project Reports (DPR).',
  icon: SearchIcon,
  accent: 'from-pink-500/20 to-rose-500/20'
},
{
  id: 2,
  title: 'Strategic Alignment',
  description:
  'Our team develops technical specifications and assists in the selection of the right partners to ensure a solid start.',
  icon: PenToolIcon,
  accent: 'from-fuchsia-500/20 to-pink-500/20'
},
{
  id: 3,
  title: 'Technical Realization',
  description:
  'We manage the precision erection and commissioning of assets, whether they are new builds or relocated plants.',
  icon: HardHatIcon,
  accent: 'from-rose-500/20 to-orange-500/20'
},
{
  id: 4,
  title: "Owner's O&M",
  description:
  'We transition into long-term stewardship, providing operation and maintenance with the same care as the asset owner.',
  icon: CheckCircle2Icon,
  accent: 'from-pink-500/20 to-purple-500/20'
},
{
  id: 5,
  title: 'Continuous Improvement',
  description:
  'Through regular performance diagnostics and energy audits, we ensure your asset remains efficient and reliable for its entire lifecycle.',
  icon: ActivityIcon,
  accent: 'from-fuchsia-500/20 to-violet-500/20'
}];

export function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    // Calculate active index based on scroll position
    const cardWidth = 360;
    const gap = 24;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, steps.length - 1));
  };
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, {
      passive: true
    });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const gap = 24;
    const amount = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  };
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const gap = 24;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
  };
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
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
            
            <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">
              Our Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-2">
              Workflow Followed <br className="hidden md:block" />
              for Each Project
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            className="flex items-center gap-3">
            
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-brand-pink hover:text-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
              
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-brand-pink hover:text-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
              
              <ChevronRightIcon size={20} />
            </button>
          </motion.div>
        </div>

        {/* Progress Line */}
        <div className="mb-10 relative">
          <div className="h-px w-full bg-neutral-100" />
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-brand origin-left"
            style={{
              width: `${(activeIndex + 1) / steps.length * 100}%`
            }}
            initial={{
              width: '0%'
            }}
            animate={{
              width: `${(activeIndex + 1) / steps.length * 100}%`
            }}
            transition={{
              duration: 0.4,
              ease: 'easeOut'
            }} />
          
          {/* Step indicators on the line */}
          <div className="absolute top-0 left-0 w-full flex justify-between -translate-y-1/2">
            {steps.map((step, i) =>
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className="relative group">
              
                <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${i <= activeIndex ? 'bg-brand-pink border-brand-pink scale-125' : 'bg-white border-neutral-300 hover:border-brand-pink/50'}`} />
              
                <span
                className={`absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${i <= activeIndex ? 'text-brand-pink' : 'text-neutral-400'}`}>
                
                  0{step.id}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative mt-14">
          {/* Fade edges */}
          {canScrollLeft &&
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          }
          {canScrollRight &&
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          }

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 no-scrollbar scroll-smooth"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}>
            
            {steps.map((step, index) =>
            <motion.div
              key={step.id}
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
              className="flex-shrink-0 w-[320px] md:w-[360px] scroll-snap-align-start"
              style={{
                scrollSnapAlign: 'start'
              }}>
              
                <div
                className={`h-full p-8 rounded-2xl border transition-all duration-500 group cursor-pointer ${index === activeIndex ? 'bg-neutral-900 border-brand-pink/30 shadow-2xl shadow-brand-pink/10' : 'bg-neutral-50 border-neutral-100 hover:border-brand-pink/20 hover:shadow-lg'}`}>
                
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                    className={`text-5xl font-black tracking-tighter transition-colors duration-500 ${index === activeIndex ? 'text-brand-pink' : 'text-neutral-200'}`}>
                    
                      0{step.id}
                    </span>
                    <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${index === activeIndex ? 'bg-brand-pink/20 text-brand-pink' : 'bg-brand-panel text-brand-pink'}`}>
                    
                      <step.icon size={26} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-500 ${index === activeIndex ? 'text-white' : 'text-neutral-900'}`}>
                  
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                  className={`text-sm leading-relaxed transition-colors duration-500 ${index === activeIndex ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                  className={`mt-8 h-1 rounded-full transition-all duration-500 ${index === activeIndex ? 'w-full bg-gradient-brand' : 'w-8 bg-neutral-200 group-hover:w-16 group-hover:bg-brand-pink/40'}`} />
                
                </div>
              </motion.div>
            )}

            {/* Spacer at end for scroll padding */}
            <div className="flex-shrink-0 w-4" />
          </div>
        </div>
      </div>
    </section>);

}