import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
  MailIcon,
} from "lucide-react";
import { useSectionData } from "../store/useCMSStore";
import { useSEO } from "../hooks/useSEO";

// Animated Counter Component
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
// Data

// Hero Section
function InsightsHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const { data } = useSectionData<any>("insights", "InsightsHero", {
    tagline: "Insights & Resources",
    heroTitle: "INSIGHTS, CASE STUDIES & INDUSTRY PERSPECTIVES",
    heroSubtitle:
      "Explore our thought leadership, project successes, and the latest updates from the forefront of global energy engineering.",
    tab1Label: "Case Studies",
    tab2Label: "News & Updates",
    tab3Label: "Blog & Articles",
  });
  return (
    <section className="relative min-h-[80vh] w-full bg-neutral-900 text-white overflow-hidden flex items-center">
      {/* Parallax Background */}
      <motion.div
        style={{
          y,
        }}
        className="absolute inset-0"
      >
        <img
          src={data.backgroundImage}
          alt="Energy infrastructure"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-32">
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
              delay: 0.2,
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
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8"
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
            className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12"
          >
            {data.heroSubtitle}
          </motion.p>

          {/* Category Pills */}
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
            className="flex flex-wrap gap-4"
          >
            <div className="px-6 py-2.5 bg-brand-pink/20 border border-brand-pink/30 text-brand-pink font-bold text-sm tracking-wider uppercase rounded-full">
              {data.tab1Label}
            </div>
            <div className="px-6 py-2.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold text-sm tracking-wider uppercase rounded-full">
              {data.tab2Label}
            </div>
            <div className="px-6 py-2.5 bg-green-500/20 border border-green-500/30 text-green-400 font-bold text-sm tracking-wider uppercase rounded-full">
              {data.tab3Label}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
// Featured Insight Section
function FeaturedInsight() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const { data } = useSectionData<any>("insights", "FeaturedInsight", {
    badgeLabel: "Featured Case Study",
    btnLabel: "Read Full Case Study",
  });

  if (!data.latestArticleTitle) return null;

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="group relative w-full h-[600px] overflow-hidden bg-neutral-900 cursor-pointer"
        >
          {/* Parallax Image */}
          <motion.div
            style={{
              y,
            }}
            className="absolute inset-0 h-[120%] -top-[10%]"
          >
            <img
              src={data.latestArticleImage}
              alt={data.latestArticleTitle}
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <Link
            to={`/insights/${data.latestArticleSlug}`}
            className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-pink text-white text-xs font-bold tracking-wider uppercase mb-6">
                {data.badgeLabel}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight group-hover:text-brand-pink/90 transition-colors duration-300">
                {data.latestArticleTitle}
              </h2>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
                {data.latestArticleSummary}
              </p>

              <div className="flex items-center gap-6 text-sm font-medium text-neutral-400 mb-8">
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  {data.latestArticleDate}
                </div>
                {data.latestArticleLocation && (
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={16} />
                    {data.latestArticleLocation}
                  </div>
                )}
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all duration-300 uppercase tracking-wider">
                {data.btnLabel}
                <ArrowRightIcon size={16} className="text-brand-pink" />
              </button>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
// Content Grid Section
function ContentGrid() {
  const { data: articlesData } = useSectionData<any>(
    "insights",
    "ArticlesList",
    {
      emptyMessage: "No insights found for this category.",
      articles: [],
    },
  );
  const { data: relatedData } = useSectionData<any>(
    "insights",
    "RelatedInsights",
    { readMoreLabel: "Read Article" },
  );
  const displayArticles = articlesData.articles;

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Case Studies", "News", "Blogs"];
  const filteredData = displayArticles.filter((item: any) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Case Studies") return item.category === "Case Study";
    if (activeFilter === "News") return item.category === "News";
    if (activeFilter === "Blogs") return item.category === "Blog";
    return true;
  });
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Case Study":
        return "bg-brand-pink text-white";
      case "News":
        return "bg-blue-500 text-white";
      case "Blog":
        return "bg-green-500 text-white";
      default:
        return "bg-neutral-800 text-white";
    }
  };
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-8 mb-16 border-b border-neutral-200">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative pb-4 text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${activeFilter === filter ? "text-brand-pink" : "text-neutral-500 hover:text-neutral-900"}`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item: any, index: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: {
                    duration: 0.2,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 overflow-hidden flex flex-col ${index === 0 && activeFilter !== "All" ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <Link
                  to={`/insights/${item.slug}`}
                  className="flex flex-col h-full"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${index === 0 && activeFilter !== "All" ? "h-80" : "h-60"}`}
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon size={14} />
                        {item.date}
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPinIcon size={14} />
                          {item.location}
                        </div>
                      )}
                      {item.readTime && (
                        <div className="flex items-center gap-1.5">
                          <ClockIcon size={14} />
                          {item.readTime}
                        </div>
                      )}
                    </div>

                    <h3
                      className={`font-black text-neutral-900 mb-4 uppercase tracking-tight group-hover:text-brand-pink transition-colors duration-300 ${index === 0 && activeFilter !== "All" ? "text-3xl" : "text-xl"}`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 group-hover:text-brand-pink group-hover:gap-3 transition-all duration-300 uppercase tracking-wider mt-auto">
                      {relatedData.readMoreLabel}
                      <ChevronRightIcon size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="py-20 text-center text-neutral-500">
            {articlesData.emptyMessage}
          </div>
        )}
      </div>
    </section>
  );
}
// Stats Banner
function StatsBanner() {
  const { data } = useSectionData<any>("insights", "InsightsStats");
  const stats = [
    { value: data.stat1Value, suffix: "+", label: data.stat1Label },
    { value: data.stat2Value, suffix: "+", label: data.stat2Label },
    { value: data.stat3Value, suffix: "", label: data.stat3Label },
    { value: data.stat4Value, suffix: "K+", label: data.stat4Label },
  ];

  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-pink blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-pink mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Newsletter Section
function NewsletterSection() {
  const { data } = useSectionData<any>("insights", "NewsletterSection", {
    privacyNote: "We respect your privacy. Unsubscribe at any time.",
  });

  if (!data.heading) return null;

  return (
    <section className="py-32 bg-white">
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
          <div className="w-16 h-16 bg-brand-panel rounded-2xl flex items-center justify-center text-brand-pink mx-auto mb-8">
            <MailIcon size={32} strokeWidth={1.5} />
          </div>

          {data.tagline && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-pink" />
              <span className="text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">
                {data.tagline}
              </span>
              <div className="w-8 h-[2px] bg-brand-pink" />
            </div>
          )}

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
            {data.heading}
          </h2>
          <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all duration-300"
              required
            />

            <button
              type="submit"
              className="px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-neutral-400 mt-4">{data.privacyNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
// CTA Section
function CTASection() {
  const { data } = useSectionData<any>("insights", "InsightsCTA", {
    primaryBtnLabel: "Start Your Project",
    primaryBtnUrl: "/contact",
    secondaryBtnLabel: "View Our Services",
    secondaryBtnUrl: "/services",
  });

  if (!data.ctaHeading) return null;

  return (
    <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
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
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {data.ctaHeading}
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            {data.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={data.primaryBtnUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300"
            >
              {data.primaryBtnLabel}
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              to={data.secondaryBtnUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300"
            >
              {data.secondaryBtnLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// Main Component
export function Insights() {
  useSEO("insights");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
      <Navigation />

      <InsightsHero />
      <FeaturedInsight />
      <ContentGrid />
      <StatsBanner />
      <NewsletterSection />
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
