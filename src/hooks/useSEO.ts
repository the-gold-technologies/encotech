import { useEffect, useState } from "react";

const API_BASE_URL = (import.meta as any).env?.VITE_CMS_API_URL || "https://cms-encotec.vercel.app";

export interface SEOData {
  metaTitle?: string | null;
  metaDescription?: string | null;
  targetKeywords?: string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean;
}

export function useSEO(
  slug: string,
  defaultTitle?: string,
  defaultDescription?: string
) {
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;
    async function fetchSEO() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/seo/pages/${slug}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch SEO: ${response.statusText}`);
        }
        const json = await response.json();
        if (json.success && json.data && isMounted) {
          setSeoData(json.data);
        }
      } catch (err: any) {
        console.warn(`CMS SEO Fetch Error for "${slug}":`, err.message);
      }
    }

    fetchSEO();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    const title = seoData?.metaTitle || defaultTitle || "Encotec";
    const description = seoData?.metaDescription || defaultDescription || "Encotec | Asset Stewardship & Engineering";

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [seoData?.metaTitle, seoData?.metaDescription, defaultTitle, defaultDescription]);
}
