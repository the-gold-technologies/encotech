import { useEffect } from "react";
import { useCMSStore } from "../store/useCMSStore";

export function useSEO(
  slug: string,
  defaultTitle?: string,
  defaultDescription?: string
) {
  const pageState = useCMSStore((state) => state.pages[slug]);
  const fetchPage = useCMSStore((state) => state.fetchPage);
  const globalSEO = useCMSStore((state) => state.globalSEO);
  const fetchGlobalSEO = useCMSStore((state) => state.fetchGlobalSEO);

  useEffect(() => {
    fetchGlobalSEO();
  }, [fetchGlobalSEO]);

  useEffect(() => {
    if (slug && !pageState) {
      fetchPage(slug);
    }
  }, [slug, pageState, fetchPage]);

  const seoData = pageState?.seo;

  useEffect(() => {
    const title = (slug === "home"
      ? (globalSEO?.siteTitle || seoData?.metaTitle)
      : (seoData?.metaTitle || globalSEO?.siteTitle)
    ) || defaultTitle || "Encotec";

    const description = (slug === "home"
      ? (globalSEO?.siteDescription || seoData?.metaDescription)
      : (seoData?.metaDescription || globalSEO?.siteDescription)
    ) || defaultDescription || "Encotec | Asset Stewardship & Engineering";

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [
    seoData?.metaTitle,
    seoData?.metaDescription,
    globalSEO?.siteTitle,
    globalSEO?.siteDescription,
    defaultTitle,
    defaultDescription,
    slug
  ]);
}
