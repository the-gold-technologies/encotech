import { create } from "zustand";
import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "https://cms-encotec.vercel.app";

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

interface GlobalSEOData {
  siteTitle?: string | null;
  siteDescription?: string | null;
  favicon?: string | null;
  googleAnalyticsId?: string | null;
  gtmId?: string | null;
  searchConsoleId?: string | null;
  customHeaderScripts?: string | null;
  customFooterScripts?: string | null;
}

interface CMSState {
  pages: Record<string, PageState>;
  globalSEO: GlobalSEOData | null;
  globalSEOFetched: boolean;
  fetchPage: (slug: string) => Promise<void>;
  fetchGlobalSEO: () => Promise<void>;
}

export const useCMSStore = create<CMSState>((set, get) => ({
  pages: {},
  globalSEO: null,
  globalSEOFetched: false,
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
      if (Array.isArray(json.data.sections)) {
        for (const section of json.data.sections) {
          sectionsMap[section.type] = section.content;
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
  fetchGlobalSEO: async () => {
    if (get().globalSEOFetched) return;
    try {
      const response = await fetch(`${API_BASE_URL}/api/seo/global`);
      if (!response.ok) {
        throw new Error(`Failed to fetch global SEO: ${response.statusText}`);
      }
      const json = await response.json();
      if (json.success && json.data) {
        set({
          globalSEO: json.data,
          globalSEOFetched: true,
        });
      }
    } catch (err: any) {
      console.warn("CMS Global SEO Fetch Error:", err.message);
      set({ globalSEOFetched: true });
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

