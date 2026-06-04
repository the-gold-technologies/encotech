import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
const ctaBlocks = [
{
  headline: 'Ready to Move from Consultancy to Partnership?',
  text: 'Discover how our "Owner\'s Mindset" can transform your project\'s performance.'
},
{
  headline: "Let's Build Your Project's Future Together.",
  text: 'Contact us for end-to-end solutions, from conceptualization to commissioning.'
},
{
  headline: 'Is Your Asset Reaching Its Full Potential?',
  text: 'Speak with our 300+ engineers about our expert advisory and performance audits.'
},
{
  headline: "Sourcing Critical Spares? We've Got the Global Reach.",
  text: 'Access our network of major OEMs in China, Vietnam, and beyond for your spare part needs.'
},
{
  headline: 'Join the 13+ Cities That Trust Encotec.',
  text: 'Experience the peace of mind that comes with a top-tier O&M partner.'
},
{
  headline: 'Planning an Asset Relocation?',
  text: 'Let our experts manage the complex transition of your plant from one site — or country — to another.'
}];

export function WhyEncotec() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Typography Reveal */}
        <div className="mb-24">
          <div className="space-y-6 md:space-y-10">
            {[
            'Engineering Precision.',
            'Global Execution.',
            'Reliable Energy Solutions.'].
            map((word, index) =>
            <motion.h2
              key={index}
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-80px'
              }}
              transition={{
                duration: 1,
                delay: index * 0.25,
                ease: 'easeOut'
              }}
              className="text-4xl md:text-7xl lg:text-8xl font-black text-neutral-900 tracking-tighter">
              
                {word}
              </motion.h2>
            )}
          </div>
        </div>

        {/* CTA Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ctaBlocks.map((block, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.15
            }}
            className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-brand-pink/20 transition-colors duration-300 group">
            
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-brand-pink transition-colors">
                {block.headline}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                {block.text}
              </p>
              <Button variant="ghost" size="sm" withArrow>
                Get in Touch
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}