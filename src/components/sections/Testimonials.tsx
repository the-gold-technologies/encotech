import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const testimonials = [
{
  quote:
  "Encotec's O&M team transformed our plant's performance. Their owner's mindset approach meant they treated our 700 MW facility as if it were their own — uptime improved by 12% in the first year alone.",
  name: 'Rajesh Mehta',
  title: 'Senior Vice President, Operations',
  company: 'National Thermal Power Corp.',
  initials: 'RM'
},
{
  quote:
  'From feasibility to commissioning, Encotec delivered our 200 MW solar project on schedule and under budget. Their engineering precision and attention to detail set a new benchmark for our portfolio.',
  name: 'Sarah Al-Rashid',
  title: 'Project Director, Renewable Energy',
  company: 'Gulf Energy Solutions',
  initials: 'SA'
},
{
  quote:
  'Working with Encotec on our 765 kV substation was exceptional. Their deep expertise in transmission infrastructure and commitment to safety standards gave us complete confidence throughout the project.',
  name: 'Dr. Klaus Werner',
  title: 'Chief Engineer, Grid Infrastructure',
  company: 'European Power Networks',
  initials: 'KW'
},
{
  quote:
  "Encotec's project management capabilities are world-class. They coordinated complex multi-disciplinary teams across three countries, delivering our airport MEP systems with zero safety incidents.",
  name: 'Priya Sharma',
  title: 'Managing Director',
  company: 'Apex Infrastructure Group',
  initials: 'PS'
}];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);
  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0
    })
  };
  const t = testimonials[current];
  return (
    <section className="py-28 bg-neutral-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-panel/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
          
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-2">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Testimonial Card */}
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
          className="relative">
          
          <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-black/[0.03] p-8 md:p-14 relative overflow-hidden min-h-[320px] flex flex-col justify-center">
            {/* Large decorative quote */}
            <div className="absolute top-6 left-8 md:left-12">
              <QuoteIcon
                size={48}
                className="text-brand-pink/15"
                strokeWidth={1.5} />
              
            </div>

            {/* Pink accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-[0.04] rounded-bl-full" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative z-10">
                
                {/* Quote */}
                <blockquote className="text-lg md:text-2xl text-neutral-800 leading-relaxed font-light mb-10 max-w-3xl">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-base">
                      {t.name}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {t.title},{' '}
                      <span className="text-brand-pink font-medium">
                        {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="relative p-1 group"
                aria-label={`Go to testimonial ${i + 1}`}>
                
                  <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-brand-pink' : 'w-1.5 bg-neutral-300 group-hover:bg-brand-pink/50'}`} />
                
                </button>
              )}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
                aria-label="Previous testimonial">
                
                <ChevronLeftIcon size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
                aria-label="Next testimonial">
                
                <ChevronRightIcon size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}