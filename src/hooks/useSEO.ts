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

    // Canonical URL
    const canonicalUrl = seoData?.canonicalUrl || (window.location.origin + window.location.pathname);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      if (canonicalLink) {
        canonicalLink.remove();
      }
    }

    // Robots (noindex)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (seoData?.noIndex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    // OG Title
    const ogTitleVal = seoData?.ogTitle || title;
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleVal) {
      if (!ogTitleMeta) {
        ogTitleMeta = document.createElement('meta');
        ogTitleMeta.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleMeta);
      }
      ogTitleMeta.setAttribute('content', ogTitleVal);
    }

    // OG Description
    const ogDescVal = seoData?.ogDescription || description;
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescVal) {
      if (!ogDescMeta) {
        ogDescMeta = document.createElement('meta');
        ogDescMeta.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescMeta);
      }
      ogDescMeta.setAttribute('content', ogDescVal);
    }

    // OG Image
    const ogImageVal = seoData?.ogImage || seoData?.featuredImage || globalSEO?.favicon || "";
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageVal) {
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImageVal);
    } else {
      if (ogImageMeta) {
        ogImageMeta.remove();
      }
    }
    // Page-specific Schema JSON-LD
    const schemaScriptId = `page-schema-${slug.replace(/\//g, "-")}`;
    let schemaScript = document.getElementById(schemaScriptId);
    if (seoData?.schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = schemaScriptId;
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = seoData.schema;
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      const script = document.getElementById(schemaScriptId);
      if (script) {
        script.remove();
      }
    };
  }, [
    seoData?.metaTitle,
    seoData?.metaDescription,
    seoData?.canonicalUrl,
    seoData?.noIndex,
    seoData?.ogTitle,
    seoData?.ogDescription,
    seoData?.ogImage,
    seoData?.featuredImage,
    seoData?.schema,
    globalSEO?.siteTitle,
    globalSEO?.siteDescription,
    globalSEO?.favicon,
    defaultTitle,
    defaultDescription,
    slug
  ]);
}
