import React from 'react';
import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-900 text-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-pink/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated logo/spinner */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 border-4 border-white/10 border-t-brand-pink rounded-full mb-6"
        />
        
        {/* Loading text with float effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold tracking-[0.2em] uppercase text-white mb-2">
            Encotec
          </h2>
          <p className="text-xs tracking-[0.1em] text-neutral-400 uppercase">
            Loading energy stewardship...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
