import React from 'react';
import { motion } from 'framer-motion';
const logos = [
'Siemens Energy',
'General Electric',
'Vestas',
'NextEra',
'Orsted',
'Enel',
'Iberdrola'];

export function LogoStrip() {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="flex relative overflow-hidden">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap px-8"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}>
          
          {[...logos, ...logos, ...logos].map((logo, i) =>
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold text-neutral-300 hover:text-neutral-900 transition-colors duration-300 cursor-default select-none">
            
              {logo}
            </span>
          )}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
      </div>
    </section>);

}