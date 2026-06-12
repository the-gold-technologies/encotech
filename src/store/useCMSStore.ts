import { create } from "zustand";
import { useEffect } from "react";

const API_BASE_URL = (import.meta as any).env?.VITE_CMS_API_URL || "https://cms-encotec.vercel.app";

interface PageState {
  loading: boolean;
  error: string | null;
  sections: Record<string, any>;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    targetKeywords?: string | null;
    canonicalUrl?: string | null;
    noIndex?: boolean;
    featuredImage?: string | null;
    ogTitle?: string | null;
    ogDescription?: string | null;
    ogImage?: string | null;
    headingOptions?: any;
  } | null;
  fetched: boolean;
}

interface CMSState {
  pages: Record<string, PageState>;
  fetchPage: (slug: string) => Promise<void>;
}

export const useCMSStore = create<CMSState>((set, get) => ({
  pages: {},
  fetchPage: async (slug: string) => {
    const currentPage = get().pages[slug];
    // If already loading or already fetched, don't refetch
    if (currentPage?.loading || currentPage?.fetched) return;

    set((state) => ({
      pages: {
        ...state.pages,
        [slug]: {
          loading: true,
          error: null,
          sections: currentPage?.sections || {},
          seo: currentPage?.seo || null,
          fetched: false,
        },
      },
    }));

    const apiSlug = slug === "value-added-services" ? "value-added" : slug;

    try {
      const response = await fetch(`${API_BASE_URL}/api/pages/${apiSlug}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch page data: ${response.statusText}`);
      }
      const json = await response.json();
      if (!json.success || !json.data) {
        throw new Error(json.error || "Invalid API response format");
      }

      // Transform sections array into a Record<string, any>
      const sectionsMap: Record<string, any> = {};

      const mapSection = (type: string, content: any) => {
        if (!content) return;

        // 1. Home Section Mappings
        if (type === "HeroSection") {
          sectionsMap["HomeHero"] = {
            heroLabel: content.tagline,
            heroTitle: content.headlineLine1,
            heroSubtitle: content.description,
            serviceTags: content.serviceTags,
            projectsCount: content.projectsBadgeNumber,
            projectsLabel: content.projectsBadgeLabel,
            heroStats: [
              { label: content.stat1Label, value: content.stat1Value },
              { label: content.stat2Label, value: content.stat2Value },
              { label: content.stat3Label, value: content.stat3Value },
              { label: content.stat4Label, value: content.stat4Value }
            ].filter((s: any) => s.label && s.value)
          };
        } else if (type === "AboutUs") {
          sectionsMap["HomeTrustStrip"] = {
            aboutLabel: content.upperTag,
            aboutTitle: content.headingLabel + (content.headingItalicHighlight ? " " + content.headingItalicHighlight : ""),
            aboutPara1: content.paragraphs?.[0],
            aboutPara2: content.paragraphs?.[1],
            badgeTitle: content.badgeLabel,
            badgeSubtitle: content.badgeValue,
            bannerTitle: content.bannerHeading,
            bannerSubtitle: content.bannerDescription,
            statsList: content.stats
          };
        } else if (type === "ServicesSection") {
          sectionsMap["HomeServices"] = {
            servicesLabel: content.tagline,
            servicesTitle: content.heading,
            servicesSubtitle: content.description,
            servicesList: content.services
          };
        } else if (type === "ProcessSection" && slug === "home") {
          sectionsMap["HomeProcess"] = {
            workflowLabel: content.tagline,
            workflowTitle: content.heading,
            stepsList: content.steps
          };
        } else if (type === "ProjectShowcaseSection") {
          sectionsMap["HomeProjectShowcase"] = {
            showcaseLabel: content.tagline,
            showcaseTitle: content.heading,
            showcaseSubtitle: content.description,
            projectsList: content.projects
          };
        } else if (type === "GlobalFootprintSection") {
          sectionsMap["HomeGlobalFootprint"] = {
            footprintLabel: content.tagline,
            footprintTitle: content.heading,
            footprintSubtitle: content.description,
            statsList: content.stats
          };
        } else if (type === "WhyEncotecSection") {
          sectionsMap["HomeWhyEncotec"] = {
            wordsList: [content.revealWord1, content.revealWord2, content.revealWord3].filter(Boolean),
            ctaBlocks: content.ctaBlocks
          };
        } else if (type === "Testimonials") {
          sectionsMap["HomeTestimonials"] = {
            testimonialsLabel: content.tagline,
            testimonialsTitle: content.heading,
            testimonialsList: content.testimonials
          };
        } else if (type === "LogoStripSection") {
          sectionsMap["HomeLogoStrip"] = {
            logoStripTitle: content.tagline,
            logos: content.logos
          };
        } else if (type === "CTASection" && slug === "home") {
          sectionsMap["HomeCTA"] = {
            ctaLabel: content.tagline,
            ctaTitle: content.heading,
            ctaDescription: content.description,
            primaryBtnLabel: content.primaryBtnLabel,
            primaryBtnUrl: content.primaryBtnUrl,
            secondaryBtnLabel: content.secondaryBtnLabel,
            secondaryBtnUrl: content.secondaryBtnUrl
          };
        }
        // 2. Power Generation / Stewardship Section Mappings
        else if (type === "StewardshipHero") {
          sectionsMap["PGHero"] = content;
        } else if (type === "StewardshipFeatures") {
          sectionsMap["PGFeatures"] = content;
        } else if (type === "StewardshipPhilosophy") {
          sectionsMap["PGPhilosophy"] = content;
        } else if (type === "CTASection" && slug === "power-generation") {
          sectionsMap["PGCTA"] = content;
        }
        // 3. Transmission & Distribution Section Mappings
        else if (type === "ConstructionHero") {
          sectionsMap["TDHero"] = content;
        } else if (type === "CapabilitiesSection" && slug === "transmission-distribution") {
          sectionsMap["TDCapabilities"] = content;
        }
        // 4. Renewable Energy Section Mappings
        else if (type === "AdvisoryHero") {
          sectionsMap["REHero"] = content;
        } else if (type === "AdvisoryFeatures") {
          sectionsMap["REFeatures"] = content;
        } else if (type === "CTASection" && slug === "renewable-energy") {
          sectionsMap["RECTA"] = content;
        }
        // 5. Airport Services Section Mappings
        else if (type === "DueDiligenceHero") {
          sectionsMap["AirportHero"] = content;
        } else if (type === "HealthFeatures") {
          sectionsMap["AirportFeatures"] = content;
        }
        // 6. Value Added Services Section Mappings
        else if (type === "SourcingHero") {
          sectionsMap["VASHero"] = content;
        } else if (type === "SourcingFeatures") {
          sectionsMap["VASFeatures"] = content;
        }
        // 7. Project Management Section Mappings
        else if (type === "CoreOfferings") {
          sectionsMap["PMOfferings"] = content;
        }
        // 8. About Section Mappings
        else if (type === "Leadership" && slug === "about") {
          sectionsMap["AboutLeadership"] = content;
        }
        // Fallback: copy directly
        else {
          sectionsMap[type] = content;
        }
      };

      if (Array.isArray(json.data.sections)) {
        for (const section of json.data.sections) {
          mapSection(section.type, section.content);
        }
      }

      set((state) => ({
        pages: {
          ...state.pages,
          [slug]: {
            loading: false,
            error: null,
            sections: sectionsMap,
            seo: json.data.seo || null,
            fetched: true,
          },
        },
      }));
    } catch (err: any) {
      console.warn(
        `CMS Fetch Error for "${slug}":`,
        err.message,
        "- Falling back to mock data"
      );
      set((state) => ({
        pages: {
          ...state.pages,
          [slug]: {
            loading: false,
            error: err.message || "Unknown error",
            sections: currentPage?.sections || {},
            seo: currentPage?.seo || null,
            fetched: true, // Mark as fetched even on error to prevent infinite retries
          },
        },
      }));
    }
  },
}));

export function useSectionData<T>(
  pageSlug: string,
  sectionType: string,
  defaultData?: T
): { data: T; loading: boolean; error: string | null } {
  const pageState = useCMSStore((state) => state.pages[pageSlug]);
  const fetchPage = useCMSStore((state) => state.fetchPage);

  useEffect(() => {
    if (!pageState) {
      fetchPage(pageSlug);
    }
  }, [pageSlug, pageState, fetchPage]);

  const loading = pageState?.loading ?? true;
  const error = pageState?.error ?? null;
  const sectionContent = pageState?.sections?.[sectionType];

  // Merge default data with CMS content if content is found, otherwise return defaultData
  // If defaultData is not provided, return sectionContent or a safe fallback empty object.
  const data = (sectionContent
    ? (defaultData ? { ...defaultData, ...sectionContent } : sectionContent)
    : (defaultData || {})) as T;

  return { data, loading, error };
}

export function usePageLoading(pageSlug: string): { loading: boolean; error: string | null } {
  const pageState = useCMSStore((state) => state.pages[pageSlug]);
  const fetchPage = useCMSStore((state) => state.fetchPage);

  useEffect(() => {
    if (!pageState) {
      fetchPage(pageSlug);
    }
  }, [pageSlug, pageState, fetchPage]);

  const loading = pageState?.loading ?? true;
  const error = pageState?.error ?? null;

  return { loading, error };
}

