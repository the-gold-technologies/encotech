import type { VercelRequest, VercelResponse } from '@vercel/node';
// @ts-ignore
import { template } from './template';

const slugMap: Record<string, string> = {
  "service/engineering": "engineering-services",
  "service/project-management": "project-management",
  "service/power-generation": "power-generation",
  "service/transmission-distribution": "transmission-distribution",
  "service/renewable-energy": "renewable-energy",
  "service/airport-services": "airport-services",
  "service/value-added": "value-added",
};

function getSlugFromPath(urlPath: string): string {
  // Extract path and clean up query params, leading/trailing slashes
  const pathPart = urlPath.split('?')[0] || '/';
  let cleanPath = pathPart.replace(/\/+$/, ''); // Remove trailing slashes
  
  if (cleanPath === '' || cleanPath === '/') {
    return 'home';
  }

  // Exact mappings
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/services') return 'services';
  if (cleanPath === '/insights') return 'insights';
  if (cleanPath === '/contact') return 'contact';
  if (cleanPath === '/careers') return 'careers';
  if (cleanPath === '/certifications') return 'certifications';
  if (cleanPath === '/leadership') return 'leadership';

  // Sub-services
  if (cleanPath === '/services/engineering') return 'service/engineering';
  if (cleanPath === '/services/project-management') return 'service/project-management';
  if (cleanPath === '/services/power-generation') return 'service/power-generation';
  if (cleanPath === '/services/transmission-distribution') return 'service/transmission-distribution';
  if (cleanPath === '/services/renewable-energy') return 'service/renewable-energy';
  if (cleanPath === '/services/airport-services') return 'service/airport-services';
  if (cleanPath === '/services/value-added') return 'service/value-added';

  return '';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const cmsApiUrl = process.env.VITE_CMS_API_URL || 'https://cms-encotec.vercel.app';
  const urlPath = req.url || '/';
  const slug = getSlugFromPath(urlPath);

  let globalSEO: any = {
    siteTitle: "Encotech",
    siteDescription: "Engineering & Project Management Services - Member of Dornier Group",
    favicon: null,
    googleAnalyticsId: "G-CT894VPLS1",
    gtmId: "GTM-59DCSVDV",
    searchConsoleId: "4kD9H2fqRgqKEk",
    customHeaderScripts: null,
    customFooterScripts: null,
    schema: null
  };

  let pageSEO: any = null;

  // 1. Fetch Global SEO
  try {
    const globalResponse = await fetch(`${cmsApiUrl}/api/seo/global`);
    if (globalResponse.ok) {
      const globalJson = await globalResponse.json();
      if (globalJson.success && globalJson.data) {
        globalSEO = { ...globalSEO, ...globalJson.data };
      }
    }
  } catch (error) {
    console.error('Error fetching global SEO from CMS for SSR:', error);
  }

  // 2. Fetch Page SEO if slug is valid
  if (slug) {
    try {
      const pageResponse = await fetch(`${cmsApiUrl}/api/seo/pages/${slug}`);
      if (pageResponse.ok) {
        const pageJson = await pageResponse.json();
        if (pageJson.success && pageJson.data) {
          pageSEO = pageJson.data;
        }
      }
    } catch (error) {
      console.error(`Error fetching page SEO for ${slug} from CMS for SSR:`, error);
    }
  }

  // Determine Title & Description
  let title = '';
  let description = '';

  if (slug === 'home') {
    title = globalSEO.siteTitle || pageSEO?.metaTitle || 'Encotech';
    description = globalSEO.siteDescription || pageSEO?.metaDescription || 'Encotech | Asset Stewardship & Engineering';
  } else {
    title = pageSEO?.metaTitle || globalSEO.siteTitle || 'Encotech';
    description = pageSEO?.metaDescription || globalSEO.siteDescription || 'Encotech | Asset Stewardship & Engineering';
  }

  // Fallback default format if title doesn't contain site name
  if (slug && slug !== 'home' && !title.includes('Encotech') && !title.includes('Encotec')) {
    title = `${title} | Encotec`;
  }

  // Build head injections
  let headInjections = '\n    <!-- Server-Side SEO & Schema Injection -->\n';
  
  // Title
  headInjections += `    <title>${title}</title>\n`;

  // Meta Description
  headInjections += `    <meta name="description" content="${description}" />\n`;

  // Canonical URL
  const canonical = pageSEO?.canonicalUrl || `https://encotech-six.vercel.app${urlPath.split('?')[0]}`;
  headInjections += `    <link rel="canonical" href="${canonical}" />\n`;

  // Robots
  if (pageSEO?.noIndex) {
    headInjections += `    <meta name="robots" content="noindex, nofollow" />\n`;
  }

  // Google Site Verification
  if (globalSEO.searchConsoleId) {
    headInjections += `    <meta name="google-site-verification" content="${globalSEO.searchConsoleId}" />\n`;
  }

  // Favicon
  if (globalSEO.favicon) {
    headInjections += `    <link rel="shortcut icon" href="${globalSEO.favicon}" />\n`;
  }

  // OG Title
  const ogTitle = pageSEO?.ogTitle || title;
  headInjections += `    <meta property="og:title" content="${ogTitle}" />\n`;

  // OG Description
  const ogDescription = pageSEO?.ogDescription || description;
  headInjections += `    <meta property="og:description" content="${ogDescription}" />\n`;

  // OG Image
  const ogImage = pageSEO?.ogImage || pageSEO?.featuredImage || globalSEO.favicon || '';
  if (ogImage) {
    headInjections += `    <meta property="og:image" content="${ogImage}" />\n`;
  }

  // Google Analytics (GA4)
  if (globalSEO.googleAnalyticsId) {
    headInjections += `    <script async src="https://www.googletagmanager.com/gtag/js?id=${globalSEO.googleAnalyticsId}"></script>\n`;
    headInjections += `    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${globalSEO.googleAnalyticsId}');
    </script>\n`;
  }

  // Google Tag Manager (GTM)
  if (globalSEO.gtmId) {
    headInjections += `    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${globalSEO.gtmId}');
    </script>\n`;
  }

  // Global Schema JSON-LD
  if (globalSEO.schema) {
    headInjections += `    <script type="application/ld+json" id="global-schema-jsonld">${globalSEO.schema}</script>\n`;
  }

  // Page-specific Schema JSON-LD
  if (pageSEO?.schema) {
    const schemaScriptId = `page-schema-${slug.replace(/\//g, "-")}`;
    headInjections += `    <script type="application/ld+json" id="${schemaScriptId}">${pageSEO.schema}</script>\n`;
  }

  // Custom Header Scripts
  if (globalSEO.customHeaderScripts) {
    headInjections += `    ${globalSEO.customHeaderScripts}\n`;
  }

  // Body injections (Custom Footer Scripts)
  let bodyInjections = '';
  if (globalSEO.customFooterScripts) {
    bodyInjections += `\n    ${globalSEO.customFooterScripts}\n`;
  }

  // Perform injection into HTML template
  let html = template;

  // Remove existing title tag if any to avoid duplication
  html = html.replace(/<title>[^]*?<\/title>/gi, '');

  // Insert headInjections right after <head>
  html = html.replace(/<head>/i, `<head>${headInjections}`);

  // Insert bodyInjections right before </body>
  if (bodyInjections) {
    html = html.replace(/<\/body>/i, `${bodyInjections}</body>`);
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(html);
}
