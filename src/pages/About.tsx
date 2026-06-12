import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  AwardIcon,
  UsersIcon,
  ZapIcon,
  GlobeIcon,
  TrendingUpIcon,
  HeartHandshakeIcon,
  LeafIcon,
  BriefcaseIcon,
} from "lucide-react";
import { useSectionData } from "../store/useCMSStore";
import { useSEO } from "../hooks/useSEO";

// --- Default Data ---
const defaultAboutHeroData = {
  heroTitle: "Engineering Excellence, Delivered with Ownership",
  heroSubtitle: "A full-spectrum engineering and services company operating across power generation, transmission & distribution, and renewable energy sectors.",
};
const defaultWhoWeAreData = {
  heading: "Energy is More Than Just Infrastructure",
  para1: "At Encotec, we believe that energy infrastructure is about more than just steel and circuits — it is about the responsibility of keeping the world moving. We have evolved from a traditional consulting firm into a Global Service Provider that offers end-to-end solutions for the entire life of your project.",
  para2: "We approach every plant, every substation, and every utility we manage with what we call an \"Owner's Mindset\". This means we don't just provide a service; we take total responsibility for your assets, treating them with the same care, accountability, and long-term vision as if they were our own.",
};
const defaultMVVData = {
  missionText: "To deliver error-free, high-standard services through continuous innovation and a relentless commitment to \"finding new ways to energy solutions\".",
  visionText: "To be the most trusted global partner in energy stewardship, leading the transition from traditional power to a sustainable future.",
  valuesList: [
    { title: "Accountability", description: "We treat every site with the care of an owner, taking full responsibility for outcomes." },
    { title: "Innovation", description: "We constantly find new ways to improve energy solutions for reliability and efficiency." },
    { title: "Safety First", description: "We ensure excellence isn't just a goal — it's our standard at every project site." },
    { title: "Quality Standards", description: "Triple ISO Certified in Quality (9001), Environment (14001), and Safety (45001)." },
    { title: "Client Partnership", description: "We work as trusted partners, aligning our solutions with client objectives." },
    { title: "Sustainability", description: "Bridging the gap between traditional power and the renewable future." },
  ],
};
const defaultScaleData = {
  stat1Value: "1,800+", stat1Label: "Dedicated Staff", stat1Desc: "Working across global sites",
  stat2Value: "300+", stat2Label: "Specialized Engineers", stat2Desc: "Providing high-level expert advisory and diagnostics",
  stat3Value: "8,000+", stat3Label: "MW Managed", stat3Desc: "Total power capacity under our stewardship",
  stat4Value: "Triple ISO", stat4Label: "Certified", stat4Desc: "Quality (9001), Environment (14001), Safety (45001)",
  stat5Value: "65+", stat5Label: "Global OEMs", stat5Desc: "Tie-ups across China, Vietnam, Korea, and India",
};
const defaultTimelineData = {
  phasesList: [
    { title: "2011–2012: Construction Beginnings", description: "We began our major journey with complex IBR piping erection and commissioning for the massive 2x660 MW Obra 'C' project." },
    { title: "2013: Renewable Expansion", description: "Expanded into the green frontier, successfully commissioning 10 MWp Solar PV projects in Gujarat and Solar Thermal projects in Rajasthan." },
    { title: "2014–2021: O&M Leadership", description: "Solidified our reputation as top-tier stewards with the long-term O&M management of 2x600 MW units at Tuticorin." },
    { title: "2018: Supercritical Excellence", description: "Embarked on our flagship O&M partnership for the 2x700 MW Supercritical Power Plant at Jhajjar." },
    { title: "2021: Going Global", description: "Took our expertise global, managing critical commissioning projects internationally." },
    { title: "2025 & Beyond: New Chapters", description: "We are currently providing specialized utility management for international hubs like Delhi (DIAL) and Noida (YIAPL) International Airports." },
  ],
};
const defaultSustainabilityData = {
  para1: "Sustainability is not a policy at Encotec; it is our promise. We are committed to sustainable development by integrating high standards of environmental management into everything we do.",
  para2: "Our in-house Encotec-Dornier team conducts specialized energy audits to identify savings and reduce the carbon footprints of operational plants. Through our expert advisory and Residual Life Assessments (RLA), we help owners revitalize old plants, making them more efficient and environmentally compliant.",
  focusList: [
    "Specialized energy audits by our in-house Encotec-Dornier team to identify savings and reduce carbon footprints",
    "Residual Life Assessments (RLA) to help owners revitalize older plants for improved efficiency and environmental compliance",
    "ISO 14001 environmental management integrated into daily operations across all sites",
    "Supporting the transition from traditional power to a sustainable, renewable future",
  ],
};
const defaultGlobalPresenceData = {
  para: "While our headquarters is in Noida, our footprints span the world. In India, we are present in 13+ key cities from Jamshedpur to Vizag. Internationally, we have established strong roots in Turkey, Bahrain, and Greece, ensuring that wherever infrastructure needs stewardship, Encotec is there.",
  areasList: [
    { title: "International Operations", desc: "Turkey, Bahrain, Greece" },
    { title: "Headquarters", desc: "Noida, India" },
    { title: "Eastern & Central India", desc: "Jamshedpur, Haldia, Khandwa" },
    { title: "Coastal & Southern India", desc: "Vizag and expanding regions" },
  ],
};
const defaultAboutLeadershipData = {
  leader1Role: "Managing Director",
  leader1Name: "[Name]",
  leader1Bio: "Brings extensive leadership experience in engineering, project execution, and energy infrastructure development.",
  leader2Role: "Director – Operations",
  leader2Name: "[Name]",
  leader2Bio: "Leads operational delivery across multiple projects, ensuring efficient execution, adherence to quality standards, and optimal resource utilization.",
};
const mvvIconMap = [HeartHandshakeIcon, AwardIcon, ShieldCheckIcon, TrendingUpIcon, UsersIcon, LeafIcon];

// Hero Section
function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { data } = useSectionData("about", "AboutHero", defaultAboutHeroData);
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center">
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          y,
        }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899a9bd6a2?auto=format&fit=crop&q=80&w=2400"
          alt="Energy infrastructure"
          className="w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900" />
      </motion.div>

      {/* Animated Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(233,30,140,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-20">
        <motion.div
          style={{
            opacity,
          }}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              About Encotec Energy
            </span>
          </motion.div>

          <motion.h1
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
              delay: 0.3,
            }}
            className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8"
          >
            {data.heroTitle}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light"
          >
            {data.heroSubtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-brand-pink rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
// Who We Are Section
function WhoWeAre() {
  const { data } = useSectionData("about", "WhoWeAre", defaultWhoWeAreData);
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
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
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight mb-8">
            {data.heading}
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>{data.para1}</p>
            <p className="text-neutral-900 font-semibold">{data.para2}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// Mission, Vision & Values
function MissionVisionValues() {
  const { data } = useSectionData("about", "MissionVisionValues", defaultMVVData);
  const values = (data.valuesList || []).map((v: any, i: number) => ({ ...v, icon: mvvIconMap[i] || AwardIcon }));
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Our Heart and Soul
            </span>
            <div className="w-10 h-[3px] bg-brand-pink" />
          </div>
          <p className="text-2xl md:text-3xl font-light text-neutral-900 max-w-4xl mx-auto">
            Our purpose is to bridge the gap between technical complexity and
            business success.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="p-10 bg-white border-l-4 border-brand-pink"
          >
            <h3 className="text-2xl font-black text-neutral-900 mb-4 uppercase tracking-tight">
              Mission
            </h3>
            <p className="text-neutral-700 leading-relaxed">{data.missionText}</p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="p-10 bg-white border-l-4 border-brand-pink"
          >
            <h3 className="text-2xl font-black text-neutral-900 mb-4 uppercase tracking-tight">
              Vision
            </h3>
            <p className="text-neutral-700 leading-relaxed">{data.visionText}</p>
          </motion.div>
        </div>

        {/* Core Values */}
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
          className="mb-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            Core Values
          </h3>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            We are defined by Accountability, Innovation, and Total Care. By
            adopting the owner's perspective, we ensure that safety and
            efficiency are never compromised.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value: any, i: number) => (
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
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="p-8 bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-panel rounded-xl flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-3">
                {value.title}
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Scale & Impact (KPIs)
function ScaleImpact() {
  const { data } = useSectionData("about", "ScaleImpact", defaultScaleData);
  const stats = [
    { value: data.stat1Value, label: data.stat1Label, description: data.stat1Desc, icon: UsersIcon },
    { value: data.stat2Value, label: data.stat2Label, description: data.stat2Desc, icon: BriefcaseIcon },
    { value: data.stat3Value, label: data.stat3Label, description: data.stat3Desc, icon: ZapIcon },
    { value: data.stat4Value, label: data.stat4Label, description: data.stat4Desc, icon: ShieldCheckIcon },
    { value: data.stat5Value, label: data.stat5Label, description: data.stat5Desc, icon: GlobeIcon },
  ];

  return (
    <section className="py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl animate-pulse-slow"
          style={{
            animationDelay: "1s",
          }}
        />
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Encotec by the Numbers
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Our growth is a testament to the trust our partners place in us. As
            of 2025–26, our impact is felt across the industry.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, i) => (
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
              className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-pink/50 transition-all duration-300 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)]"
            >
              <div className="w-14 h-14 bg-brand-pink/20 rounded-xl flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={26} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-brand-pink uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <p className="text-neutral-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="text-center text-neutral-400 italic max-w-4xl mx-auto"
        >
          Our scale is not just a measure of size, but a reflection of our
          ability to consistently deliver high-performance outcomes across
          complex engineering environments.
        </motion.p>
      </div>
    </section>
  );
}
// Timeline
function Timeline() {
  const { data } = useSectionData("about", "Timeline", defaultTimelineData);
  const phases: Array<{ title: string; description: string }> = data.phasesList || [];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
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
              Our Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            A Timeline of Growth
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
            We have spent over a decade building a legacy of excellence, one
            project at a time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-200 hidden md:block" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="relative flex gap-8 items-start"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 hidden md:flex">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-pink flex items-center justify-center shadow-lg">
                    <span className="text-brand-pink font-black text-lg">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-black text-neutral-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// Sustainability Section
function Sustainability() {
  const { data } = useSectionData("about", "Sustainability", defaultSustainabilityData);
  const focuses: string[] = data.focusList || [];

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[3px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                ESG Commitment
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-8">
              Committed to a Greener Tomorrow
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>{data.para1}</p>
              <p>{data.para2}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Key Focus Areas:
            </h3>
            {focuses.map((focus, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="flex gap-4 items-start p-4 bg-white border border-neutral-200 hover:border-brand-pink/30 transition-colors duration-300"
              >
                <CheckCircle2Icon
                  size={24}
                  className="text-brand-pink flex-shrink-0 mt-0.5"
                  strokeWidth={2}
                />

                <span className="text-neutral-700">{focus}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="text-center text-neutral-600 italic max-w-4xl mx-auto mt-16 text-lg"
        >
          Our approach ensures that sustainability is not an afterthought, but
          an integral part of how we design, execute, and operate energy
          systems.
        </motion.p>
      </div>
    </section>
  );
}
// Global Presence
function GlobalPresence() {
  const { data } = useSectionData("about", "GlobalPresence", defaultGlobalPresenceData);
  const areas: Array<{ title: string; desc: string }> = data.areasList || [];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
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
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
              Our Reach
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight mb-8">
            A Global Presence <br />
            <span className="text-brand-pink">with a Local Touch</span>
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed mb-12">
            <p>{data.para}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {areas.map((area, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -20 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="flex gap-4 items-center p-5 bg-neutral-50 border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <GlobeIcon size={20} className="text-brand-pink" />
                </div>
                <div>
                  <div className="text-neutral-900 font-bold">{area.title}</div>
                  <div className="text-neutral-500 text-sm">{area.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

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
            transition={{
              delay: 0.3,
            }}
            className="p-8 bg-brand-panel border-l-4 border-brand-pink"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              Wherever Energy is Needed
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              We combine local execution strength with global engineering
              expertise, ensuring that we bring the same "Owner's Mindset" to
              every project, no matter the geography.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
// Leadership Section
function Leadership() {
  const { data } = useSectionData("about", "AboutLeadership", defaultAboutLeadershipData);
  const leaders = [
    { role: data.leader1Role, name: data.leader1Name, bio: data.leader1Bio },
    { role: data.leader2Role, name: data.leader2Name, bio: data.leader2Bio },
  ];

  return (
    <section className="py-28 bg-neutral-900 text-white">
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
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Leadership Team
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Experienced leaders driving operational excellence and strategic
            growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
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
                duration: 0.6,
                delay: i * 0.2,
              }}
              className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-pink/30 transition-all duration-300"
            >
              <div className="text-brand-pink text-sm font-bold tracking-wider uppercase mb-2">
                {leader.role}
              </div>
              <h3 className="text-2xl font-black mb-6">{leader.name}</h3>
              <p className="text-neutral-400 leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Closing Statement
function ClosingStatement() {
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
            Encotec integrates{" "}
            <span className="text-transparent bg-clip-text bg-gradient-brand">
              engineering expertise, execution capability, and operational
              excellence
            </span>{" "}
            to deliver solutions that perform
          </h2>
          <p className="text-2xl text-neutral-600 leading-relaxed font-light">
            — not just at commissioning, but throughout the lifecycle of every
            asset.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300 shadow-2xl shadow-brand-pink/30 mt-12"
          >
            Partner With Us
            <ArrowRightIcon size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
// Main About Page Component
export function About() {
  useSEO(
    "about",
    "About Encotec | Engineering Excellence & Energy Stewardship",
    "Learn about Encotec, our mission, vision, values, global presence, leadership team, and our commitment to finding new ways to energy solutions."
  );

  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
      <Navigation />

      <AboutHero />
      <WhoWeAre />
      <MissionVisionValues />
      <ScaleImpact />
      <Timeline />
      <Sustainability />
      <GlobalPresence />
      <Leadership />
      <ClosingStatement />

      {/* Footer */}
      <Footer />
    </main>
  );
}
