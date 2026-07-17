import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "lucide-react";
import { useSectionData } from "../../store/useCMSStore";
// Dynamic Articles List from CMS
export function InsightDetail() {
  const { slug } = useParams();
  const { data: articlesData, loading } = useSectionData<any>(
    "insights",
    "ArticlesList",
    { articles: [] },
  );
  const { data: relatedData } = useSectionData<any>(
    "insights",
    "RelatedInsights",
    {
      heading: "Related Insights",
      viewAllLabel: "View All",
      readMoreLabel: "Read More",
    },
  );
  const { data: detailData } = useSectionData<any>(
    "insights",
    "InsightDetail",
    {
      backLabel: "Back to Insights",
      loadingText: "Loading insight details...",
      notFoundTitle: "Article Not Found",
      notFoundText:
        "The insight you are looking for doesn't exist or has been moved.",
      notFoundBtnLabel: "Back to Insights",
      shareLabel: "Share this article",
    },
  );
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Scroll to top on mount and when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const articlesList = articlesData.articles;
  const article = articlesList.find((item: any) => item.slug === slug);

  useSEO(
    "",
    article
      ? `${article.title} | Encotec`
      : `${detailData.notFoundTitle} | Encotec`,
    article ? article.description : "Encotec Insight and Case Study",
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white">
        <div className="w-16 h-16 border-4 border-brand-pink border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-neutral-400">{detailData.loadingText}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-6">
        <h1 className="text-4xl font-black text-neutral-900 mb-4">
          {detailData.notFoundTitle}
        </h1>
        <p className="text-neutral-600 mb-8 text-center max-w-md">
          {detailData.notFoundText}
        </p>
        <Link
          to="/insights"
          className="px-8 py-4 bg-brand-pink text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a0004f] transition-colors duration-300"
        >
          {detailData.notFoundBtnLabel}
        </Link>
      </div>
    );
  }

  // Get 3 related articles (excluding current)
  const relatedArticles = articlesList
    .filter((item: any) => item.id !== article.id)
    .slice(0, 3);
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
    <main className="w-full bg-white min-h-screen overflow-x-hidden selection:bg-brand-pink selection:text-white pb-20">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-neutral-900 text-white overflow-hidden flex items-end pb-20">
        <motion.div
          style={{
            y,
          }}
          className="absolute inset-0"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 w-full">
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
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:gap-3 transition-all duration-300 mb-8"
            >
              <ArrowLeftIcon size={16} />
              {detailData.backLabel}
            </Link>

            <div className="mb-6">
              <span
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${getCategoryColor(article.category)}`}
              >
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-neutral-300">
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} />
                {article.date}
              </div>
              {article.location && (
                <div className="flex items-center gap-2">
                  <MapPinIcon size={16} />
                  {article.location}
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center gap-2">
                  <ClockIcon size={16} />
                  {article.readTime}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="prose prose-lg prose-neutral max-w-none"
          >
            {/* Render Rich Content */}
            <div className="space-y-8 text-neutral-700 leading-relaxed text-lg">
              {article.content.map((block: any, index: number) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? "text-xl text-neutral-900 font-medium leading-relaxed"
                          : ""
                      }
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-black text-neutral-900 mt-12 mb-6 tracking-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="p-8 my-12 bg-brand-panel border-l-4 border-brand-pink"
                    >
                      <p className="text-xl text-neutral-900 font-medium italic m-0">
                        "{block.text}"
                      </p>
                    </blockquote>
                  );
                }
                if (block.type === "list" && block.items) {
                  return (
                    <ul key={index} className="space-y-4 my-8">
                      {block.items.map((item: any, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>

          {/* Share / Tags section could go here */}
          <div className="mt-16 pt-8 border-t border-neutral-200 flex justify-between items-center">
            <div className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              {detailData.shareLabel}
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                in
              </button>
              <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                tw
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tight">
              {relatedData.heading}
            </h2>
            <Link
              to="/insights"
              className="text-sm font-bold text-brand-pink hover:text-[#a0004f] transition-colors uppercase tracking-wider"
            >
              {relatedData.viewAllLabel}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((item: any, index: number) => (
              <motion.div
                key={item.id}
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group bg-white border border-neutral-200 hover:border-brand-pink/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <Link
                  to={`/insights/${item.slug}`}
                  className="flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />

                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-black text-neutral-900 mb-3 uppercase tracking-tight group-hover:text-brand-pink transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:text-brand-pink transition-colors uppercase tracking-wider mt-auto">
                      {relatedData.readMoreLabel}
                      <ArrowRightIcon size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer className="mt-auto" />
    </main>
  );
}
