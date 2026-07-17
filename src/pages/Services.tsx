import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  TargetIcon,
  HardHatIcon,
  SettingsIcon,
  PackageIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  FlameIcon,
  NetworkIcon,
  BuildingIcon,
  PlaneIcon,
  ZapIcon,
} from "lucide-react";
import { useSectionData } from "../store/useCMSStore";
import { useSEO } from "../hooks/useSEO";

const industryIconMap = [
  FlameIcon,
  NetworkIcon,
  BuildingIcon,
  PlaneIcon,
  ZapIcon,
];
const serviceIconMap = [
  TargetIcon,
  HardHatIcon,
  SettingsIcon,
  ClipboardCheckIcon,
  ShieldCheckIcon,
  PackageIcon,
];

// Hero Section
function ServicesHero() {
  const { data } = useSectionData<any>("services", "ServicesHero");
  return (
    <section className="relative w-full bg-neutral-900 text-white pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(233,30,140,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-900" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              {data.tagline}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
            {data.headingPart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-brand">
              {data.headingItalicHighlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-10">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
// Intro Section
function IntroSection() {
  const { data } = useSectionData<any>("services", "IntroSection");
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center space-y-6"
        >
          <p className="text-xl text-neutral-700 leading-relaxed">
            {data.paragraph1}
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {data.paragraph2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
// Service Card Component with Expandable Details
function ServiceCard({
  service,
  index,
  labels,
}: {
  service: any;
  index: number;
  labels: {
    showLessLabel: string;
    viewDetailsLabel: string;
    keyCapabilitiesLabel: string;
    valueDeliveredLabel: string;
    exploreServiceLabel: string;
  };
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 overflow-hidden group"
    >
      {/* Header */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink group-hover:scale-110 transition-transform duration-300">
            <service.icon size={28} strokeWidth={1.5} />
          </div>
          <span className="text-5xl font-black text-neutral-100 group-hover:text-brand-pink/10 transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-black text-neutral-900 mb-3 uppercase tracking-tight">
          {service.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed mb-6">
          {service.overview}
        </p>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300"
        >
          {isExpanded ? labels.showLessLabel : labels.viewDetailsLabel}
          <ChevronDownIcon
            size={16}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 pt-4 border-t border-neutral-100 bg-neutral-50">
          {/* Key Capabilities */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
              {labels.keyCapabilitiesLabel}
            </h4>
            <ul className="space-y-2">
              {service.capabilities.map((cap: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2Icon
                    size={18}
                    className="text-brand-pink flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />

                  <span className="text-neutral-700 text-sm">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value Delivered */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
              {labels.valueDeliveredLabel}
            </h4>
            <div className="space-y-2">
              {service.value.map((val: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-neutral-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Explore Service Link */}
          {service.link && (
            <Link
              to={service.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] hover:gap-3 transition-all duration-300"
            >
              {labels.exploreServiceLabel}
              <ArrowRightIcon size={16} />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
// Core Services Section
function CoreServices() {
  const { data } = useSectionData<any>("services", "CoreServices");

  if (!data.services) return null;

  const services = data.services.map((s: any, i: number) => ({
    ...s,
    icon: serviceIconMap[i] || TargetIcon,
    capabilities:
      typeof s.capabilities === "string"
        ? s.capabilities.split("|")
        : s.capabilities,
    value: typeof s.value === "string" ? s.value.split("|") : s.value,
  }));

  const labels = {
    showLessLabel: data.showLessLabel,
    viewDetailsLabel: data.viewDetailsLabel,
    keyCapabilitiesLabel: data.keyCapabilitiesLabel,
    valueDeliveredLabel: data.valueDeliveredLabel,
    exploreServiceLabel: data.exploreServiceLabel,
  };

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              {labels.keyCapabilitiesLabel}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight">
            {data.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service: any, index: number) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              labels={labels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
// Industries Section
function IndustriesSection() {
  const { data } = useSectionData<any>("services", "IndustriesSection");

  if (!data.industries) return null;

  const industries = data.industries.map((ind: any, i: number) => ({
    ...ind,
    icon: industryIconMap[i] || ZapIcon,
  }));

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            {data.heading}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry: any, i: number) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="p-6 bg-neutral-50 border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-pink mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <industry.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-1 text-sm">
                {industry.name}
              </h3>
              <p className="text-xs text-neutral-500">{industry.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Process Section
function ProcessSection() {
  const { data } = useSectionData<any>("services", "ProcessSection");

  if (!data.steps) return null;
  const steps: Array<{ title: string; description: string; number: string }> =
    data.steps;

  return (
    <section className="py-28 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">
            {data.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 mt-2">
            {data.heading}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
              }}
              className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-pink/50 transition-all duration-300 group"
            >
              <div className="text-6xl font-black text-brand-pink/20 group-hover:text-brand-pink/40 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Closing Statement
function ClosingSection() {
  const { data } = useSectionData<any>("services", "ClosingSection");

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight mb-8">
            {data.headingPart1}
            <span className="text-transparent bg-clip-text bg-gradient-brand">
              {data.headingHighlight}
            </span>
            {data.headingPart2}
          </h2>

          <Link
            to={data.ctaUrl}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300 shadow-2xl shadow-brand-pink/30 mt-8"
          >
            {data.ctaLabel}
            <ArrowRightIcon size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
// Main Services Page
export function Services() {
  useSEO("services");

  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
      <Navigation />

      <ServicesHero />
      <IntroSection />
      <CoreServices />
      <IndustriesSection />
      <ProcessSection />
      <ClosingSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
