import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  AwardIcon,
  CheckCircle2Icon,
  FileTextIcon,
  BuildingIcon,
  GlobeIcon,
} from "lucide-react";
import { useSectionData } from "../store/useCMSStore";
import { useSEO } from "../hooks/useSEO";
// --- Animated Counter Component ---
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Icon mapping for certifications grid
const certIconMap: Record<string, React.ComponentType<any>> = {
  "ISO 9001:2015": ShieldCheckIcon,
  "ISO 14001:2015": GlobeIcon,
  "ISO 45001:2018": CheckCircle2Icon,
  "ASME 'U' & 'S' Stamps": AwardIcon,
  "NABL Accreditation": FileTextIcon,
  "IBR Certification": BuildingIcon,
};

// --- Sections ---
function CertificationsHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const { data } = useSectionData<any>("certifications", "CertificationsHero", {
    heroTitle: "CERTIFICATIONS & PARTNERS",
    heroSubtitle:
      "Our commitment to global standards of quality, safety, and environmental management, backed by strategic alliances with industry leaders.",
    tagline: "Trust & Excellence",
    backgroundImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2400",
    badge1Text: "ISO Certified",
    badge2Text: "ASME Compliant",
    badge3Text: "15+ Years Excellence",
  });
  return (
    <section className="relative min-h-screen w-full bg-neutral-900 text-white overflow-hidden flex items-center">
      {/* Parallax Background */}
      <motion.div
        style={{
          y,
        }}
        className="absolute inset-0"
      >
        <img
          src={data.backgroundImage}
          alt="Certifications and Quality Assurance"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/70 to-neutral-900" />
      </motion.div>

      {/* Grid Overlay */}
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
        >
          {/* Label */}
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
              delay: 0.3,
            }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[3px] bg-brand-pink" />
            <span className="text-sm font-bold tracking-[0.25em] text-brand-pink uppercase">
              {data.tagline}
            </span>
          </motion.div>

          {/* Headline */}
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
              delay: 0.4,
            }}
            className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8 max-w-5xl"
          >
            {data.heroTitle}
          </motion.h1>

          {/* Subtitle */}
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
              duration: 0.8,
              delay: 0.6,
            }}
            className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-3xl mb-12"
          >
            {data.heroSubtitle}
          </motion.p>

          {/* Floating Stat Badges */}
          <div className="flex flex-wrap gap-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="px-6 py-3 bg-brand-pink/90 backdrop-blur-sm text-white font-bold text-sm tracking-wider uppercase"
            >
              {data.badge1Text}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
              className="px-6 py-3 bg-white/90 backdrop-blur-sm text-neutral-900 font-bold text-sm tracking-wider uppercase"
            >
              {data.badge2Text}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1.0,
              }}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm tracking-wider uppercase"
            >
              {data.badge3Text}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Official ISO Certificates Showcase Section (Fully Dynamic CMS)
function OfficialCertificatesShowcase() {
  const [activeCertificate, setActiveCertificate] = React.useState<any | null>(null);

  const { data } = useSectionData<any>("certifications", "CertificationsGrid");

  const officialCertificates = data?.certificationsList || [];

  // Hide section completely if no certificates exist
  if (!officialCertificates || officialCertificates.length === 0) {
    return null;
  }

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-brand-pink" />
            <span className="text-xs font-bold tracking-[0.25em] text-brand-pink uppercase">
              {data?.tagline || "QUALITY POLICY & ACCREDITATION"}
            </span>
            <div className="w-10 h-[3px] bg-brand-pink" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
            {data?.heading || "Triple ISO Integrated Management System"}
          </h2>

          {data?.description && (
            <p className="text-lg text-neutral-600 leading-relaxed font-light">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Certificates Document Grid - Full Vertical Certificate Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {officialCertificates.map((cert: any, index: number) => (
            <motion.div
              key={cert.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col justify-between group cursor-pointer h-full"
              onClick={() => setActiveCertificate(cert)}
            >
              <div>
                {/* Document Header Tag - Fixed Height Layout to Prevent Distortions */}
                <div className="flex flex-col justify-between gap-1.5 mb-4 px-1 min-h-[68px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-brand-pink uppercase tracking-widest truncate max-w-[200px]" title={cert.category}>
                      {cert.category || "Accreditation"}
                    </span>
                    {cert.certNumber && (
                      <span className="text-[10px] font-mono font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 shrink-0">
                        {cert.certNumber}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-lg md:text-xl font-black text-neutral-900 tracking-tight leading-snug line-clamp-2"
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* Framed Certificate Document Preview Container */}
                <div className="relative aspect-[1/1.38] bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden shadow-xl shadow-neutral-200/60 group-hover:shadow-2xl group-hover:shadow-brand-pink/15 group-hover:border-brand-pink/40 transition-all duration-500 flex flex-col p-2 bg-gradient-to-b from-neutral-50 to-white">
                  <div className="relative w-full h-full overflow-hidden rounded-xl border border-neutral-100 bg-white">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6 text-center backdrop-blur-[2px]">
                      <span className="w-12 h-12 rounded-full bg-white text-brand-pink flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </span>
                      <span className="text-xs font-bold text-white uppercase tracking-wider bg-neutral-900/80 px-4 py-2 rounded-full border border-white/20 shadow-lg">
                        Click to View Full Certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Certificate Meta Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 px-1 pt-2 border-t border-neutral-100">
                <span className="font-medium text-neutral-600">
                  {cert.issueDate || cert.expiryDate ? (
                    <>Valid: <strong className="text-neutral-900">{cert.issueDate} &ndash; {cert.expiryDate}</strong></>
                  ) : (
                    <strong className="text-neutral-900">Official Certification</strong>
                  )}
                </span>
                <span className="font-bold text-brand-pink flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Enlarge Document
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Official Document Preview */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-neutral-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveCertificate(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-900/80 text-white hover:bg-brand-pink flex items-center justify-center transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image View */}
            <div className="flex-1 bg-neutral-950 p-4 md:p-8 flex items-center justify-center overflow-auto min-h-[350px]">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Document Details Sidebar */}
            <div className="w-full md:w-96 p-8 bg-white flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-neutral-100">
              <div>
                <span className={`inline-block px-3 py-1 text-[11px] font-bold rounded-full border mb-4 ${activeCertificate.badgeColor}`}>
                  {activeCertificate.category}
                </span>

                <h3 className="text-3xl font-black text-neutral-900 tracking-tight mb-2">
                  {activeCertificate.title}
                </h3>
                <p className="text-sm font-semibold text-neutral-600 mb-6">
                  {activeCertificate.subtitle}
                </p>

                <div className="space-y-4 border-t border-b border-neutral-100 py-6 mb-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Certified Company</label>
                    <p className="text-sm font-bold text-neutral-900">Encotec Energy (India) Private Limited</p>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Certificate Number</label>
                    <p className="text-sm font-mono font-bold text-neutral-800">{activeCertificate.certNumber}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Issued On</label>
                      <p className="text-sm font-semibold text-neutral-800">{activeCertificate.issueDate}</p>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Valid Until</label>
                      <p className="text-sm font-semibold text-neutral-800">{activeCertificate.expiryDate}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Certification Body</label>
                    <p className="text-xs font-semibold text-neutral-700">{activeCertificate.issuer || "Universal Certification Services Private Limited (UCSPL)"}</p>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Accreditation</label>
                    <p className="text-xs font-bold text-brand-pink">{activeCertificate.accreditation || "IAF & KAB"}</p>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Scope of Registration</label>
                    <p className="text-xs text-neutral-600 leading-relaxed mt-1">{activeCertificate.scope || activeCertificate.desc}</p>
                  </div>
                </div>
              </div>

              <a
                href={activeCertificate.image}
                target="_blank"
                rel="noreferrer"
                download
                className="w-full py-3.5 px-4 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase rounded-2xl hover:bg-[#a0004f] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-pink/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Open Full Resolution
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StrategicPartners() {
  const { data } = useSectionData<any>("certifications", "StrategicPartners", {
    tagline: "Strategic Alliances",
    heading: "Trusted by Industry Leaders",
    description:
      "We collaborate with the world's leading technology providers and energy conglomerates to deliver state-of-the-art solutions.",
    partnersList: [
      {
        name: "Siemens Energy",
        monogram: "SE",
        role: "Gas Turbine Technology",
      },
      { name: "GE Vernova", monogram: "GE", role: "Power Generation Systems" },
      { name: "BHEL", monogram: "BH", role: "Heavy Electrical Equipment" },
      { name: "NTPC", monogram: "NT", role: "Thermal Power Operations" },
      { name: "L&T Energy", monogram: "LT", role: "EPC & Construction" },
      {
        name: "Tata Power",
        monogram: "TP",
        role: "Integrated Power Solutions",
      },
      { name: "Adani Power", monogram: "AP", role: "Private Sector Energy" },
      {
        name: "JSW Energy",
        monogram: "JW",
        role: "Diversified Energy Portfolio",
      },
    ],
  });
  const partners: Array<{ name: string; monogram: string; role: string }> =
    data.partnersList || [];

  return (
    <section className="py-32 bg-dark-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-pink/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
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
              duration: 0.8,
            }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                {data.tagline}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              {data.heading}
            </h2>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              x: 30,
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
            className="text-neutral-400 max-w-md leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
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
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-brand-pink/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-xl font-black text-white/50 group-hover:text-brand-pink group-hover:bg-brand-pink/10 transition-colors duration-300">
                {partner.monogram}
              </div>
              <span className="text-sm font-bold tracking-wider text-center">
                {partner.name}
              </span>
              <span className="text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 text-center">
                {partner.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function IndustryMemberships() {
  const { data } = useSectionData<any>(
    "certifications",
    "IndustryMemberships",
    {
      heading: "INDUSTRY MEMBERSHIPS",
      description:
        "Active participation in shaping the future of India's energy sector through key industry bodies and associations.",
      membershipsList: [
        { name: "Confederation of Indian Industry (CII)", year: "2010" },
        {
          name: "Federation of Indian Chambers of Commerce (FICCI)",
          year: "2012",
        },
        {
          name: "Indian Electrical & Electronics Mfrs. Assoc. (IEEMA)",
          year: "2014",
        },
        { name: "Central Board of Irrigation and Power (CBIP)", year: "2015" },
        { name: "Independent Power Producers Assoc. (IPPAI)", year: "2016" },
        { name: "Associated Chambers of Commerce (ASSOCHAM)", year: "2018" },
      ],
    },
  );
  const memberships: Array<{ name: string; year: string }> =
    data.membershipsList || [];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
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
            duration: 0.8,
          }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            {data.heading}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full flex overflow-x-hidden border-y border-neutral-100 py-8 bg-neutral-50 mb-16">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...memberships, ...memberships].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-8 text-xl font-bold text-neutral-300 uppercase tracking-widest"
            >
              <span>{item.name}</span>
              <span className="w-2 h-2 rounded-full bg-brand-pink" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberships.map((item, index) => (
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="p-6 border border-neutral-200 flex justify-between items-center hover:border-brand-pink transition-colors duration-300"
            >
              <span className="font-bold text-neutral-900 text-sm pr-4">
                {item.name}
              </span>
              <span className="text-xs font-bold text-brand-pink bg-brand-panel px-3 py-1">
                Since {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function TrustStats() {
  const { data } = useSectionData<any>("certifications", "TrustStats", {
    stats1Value: "15",
    stats1Label: "Years of Excellence",
    stats1Suffix: "+",
    stats2Value: "100",
    stats2Label: "Compliance Rate",
    stats2Suffix: "%",
    stats3Value: "50",
    stats3Label: "Global Audits Passed",
    stats3Suffix: "+",
    stats4Value: "23",
    stats4Label: "Countries Recognized",
    stats4Suffix: "+",
  });
  const stats = [
    data.stats1Label && {
      value: parseInt(data.stats1Value) || 15,
      label: data.stats1Label,
      suffix: data.stats1Suffix,
    },
    data.stats2Label && {
      value: parseInt(data.stats2Value) || 100,
      label: data.stats2Label,
      suffix: data.stats2Suffix,
    },
    data.stats3Label && {
      value: parseInt(data.stats3Value) || 50,
      label: data.stats3Label,
      suffix: data.stats3Suffix,
    },
    data.stats4Label && {
      value: parseInt(data.stats4Value) || 23,
      label: data.stats4Label,
      suffix: data.stats4Suffix,
    },
  ].filter(Boolean);
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-${stats.length} gap-12 md:gap-8 divide-x divide-white/10`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-6xl font-black text-brand-pink mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold tracking-wider uppercase text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTASection() {
  const { data } = useSectionData<any>("certifications", "CertificationsCTA", {
    ctaHeading: "Partner With Excellence",
    ctaSubtitle:
      "Experience engineering services backed by global certifications and a commitment to uncompromising quality.",
    ctaLabel: "Discuss Your Project",
    ctaUrl: "/contact",
  });
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
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
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight">
            {data.ctaHeading}
          </h2>
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
            {data.ctaSubtitle}
          </p>
          <Link
            to={data.ctaUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300"
          >
            {data.ctaLabel}
            <ArrowRightIcon size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
export function Certifications() {
  useSEO("certifications");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
      <Navigation />

      <CertificationsHero />
      <OfficialCertificatesShowcase />
      <StrategicPartners />
      <IndustryMemberships />
      <TrustStats />
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
