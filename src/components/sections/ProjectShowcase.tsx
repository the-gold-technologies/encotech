import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
const projects = [
{
  title: 'Supercritical Mastery at Rajpura',
  location: 'Rajpura, Punjab',
  category: 'Asset Stewardship',
  description:
  "Providing comprehensive O&M for a 2x700 MW Supercritical plant, ensuring long-term reliability for Punjab's energy heart.",
  image:
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000'
},
{
  title: "Powering India's Gateway (DIAL)",
  location: 'New Delhi',
  category: 'Airport Utility Management',
  description:
  'Five years of flawless utility management at Delhi International Airport, recently renewed for another five years due to exceptional performance.',
  image:
  'https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&q=80&w=2000',
  backgroundImage:
  'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=2000'
}];

export function ProjectShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <section
      ref={containerRef}
      className="py-24 bg-neutral-900 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2">
              Stewardship in Action
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-lg">
            Delivering critical energy infrastructure with precision engineering
            and an owner's mindset.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((project, index) =>
        <Link key={index} to="/insights">
            <div className="group relative h-[60vh] w-full overflow-hidden border-t border-white/10">
              <motion.div
              style={{
                y
              }}
              className="absolute inset-0 w-full h-[120%]">
              
                <img
                src={project.backgroundImage || project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end">
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
                className="max-w-2xl">
                
                  <span className="text-brand-pink font-medium mb-2 block text-sm tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-base md:text-lg mb-2 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-neutral-500 text-sm">{project.location}</p>
                </motion.div>

                <motion.div
                whileHover={{
                  scale: 1.1
                }}
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 cursor-pointer mt-6 md:mt-0 group-hover:bg-brand-pink group-hover:border-brand-pink transition-colors duration-300">
                
                  <ArrowUpRightIcon size={32} />
                </motion.div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>);

}