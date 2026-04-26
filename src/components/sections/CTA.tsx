import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink/20 rounded-full blur-[100px]" />
      

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-4">
          
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">
            Partner With Us
          </span>
        </motion.div>

        <motion.h2
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
          className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6 tracking-tight leading-[1.1]">
          
          Experience Global{' '}
          <span className="text-transparent bg-clip-text bg-gradient-brand">
            Engineering Excellence.
          </span>
        </motion.h2>

        <motion.p
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
            delay: 0.1
          }}
          className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
          
          From India to Turkey, see how we are setting new standards in power
          infrastructure. Join the 13+ cities that rely on Encotec for their
          critical power needs.
        </motion.p>

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
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 text-lg px-10 py-5 bg-gradient-brand text-white shadow-2xl shadow-brand-pink/30 hover:shadow-brand-pink/40 hover:scale-[1.02] font-medium transition-all duration-300 rounded-full">
            
            Start Your Project
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center text-lg px-10 py-5 bg-white text-neutral-900 border border-neutral-200 hover:border-brand-pink/30 hover:bg-brand-panel font-medium transition-all duration-300 rounded-full">
            
            Talk to an Expert
          </Link>
        </motion.div>

        <motion.p
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
            delay: 0.4
          }}
          className="mt-8 text-sm text-neutral-400">
          
          Looking for precision and reliability? Get in touch to learn more
          about our certified quality and safety-first approach.
        </motion.p>

        <footer className="mt-32 border-t border-neutral-200 pt-12 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
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
        </footer>
      </div>
    </section>);

}