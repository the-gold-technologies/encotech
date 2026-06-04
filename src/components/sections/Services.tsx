import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  FlameIcon,
  NetworkIcon,
  SunIcon,
  ClipboardCheckIcon,
  WrenchIcon,
  SearchIcon } from
'lucide-react';
const services = [
{
  title: 'Project Conceptualisation & Development',
  description:
  'From pre-feasibility and financial assessments to finalizing EPC contractors and developing technical specifications.',
  icon: ClipboardCheckIcon,
  delay: 0,
  image:
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
},
{
  title: 'Construction, Commissioning & Relocation',
  description:
  'Expert installation of complex power and process industries, including specialized asset shifting and relocation services across borders.',
  icon: NetworkIcon,
  delay: 0.1,
  image:
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
},
{
  title: 'Asset Stewardship (O&M)',
  description:
  'Specialized management of thermal power plants, international airports, and critical utilities like STPs.',
  icon: FlameIcon,
  delay: 0.2,
  image:
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800'
},
{
  title: 'Expert Advisory & Performance Audits',
  description:
  'High-level problem solving, energy efficiency audits, and specialized testing (NDT) for operational plants.',
  icon: SearchIcon,
  delay: 0.3,
  image:
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
},
{
  title: 'Global Trading & Spare Parts',
  description:
  'Strategic sourcing of critical equipment and spares from major OEMs in China, Vietnam, Korea, and India.',
  icon: WrenchIcon,
  delay: 0.4,
  image:
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
}];

export function Services() {
  return (
    <section className="py-28 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 mt-2">
            Integrated Solutions Across the Asset Lifecycle
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            We bridge the gap between technical complexity and commercial
            success. Whether you are conceptualizing a new plant or optimizing
            an existing one, we provide the end-to-end expertise required to
            keep your world running.
          </p>
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) =>
          <ServiceCard key={index} service={service} index={index} />
          )}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) =>
          <ServiceCard key={index + 3} service={service} index={index + 3} />
          )}
        </div>
      </div>
    </section>);

}
function ServiceCard({
  service,
  index



}: {service: (typeof services)[number];index: number;}) {
  return (
    <Link to="/services">
      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: 0.8,
          delay: service.delay,
          ease: 'easeOut'
        }}
        whileHover={{
          y: -8
        }}
        className="relative h-[340px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
          
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

        {/* Pink accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 p-7 flex flex-col justify-end relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 group-hover:bg-brand-pink/80 group-hover:border-brand-pink transition-all duration-300">
            <service.icon size={24} />
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
            {service.description}
          </p>

          <div className="flex items-center text-sm font-bold text-white/80 group-hover:text-brand-light transition-colors duration-300">
            Learn more
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </motion.div>
    </Link>);

}