import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const cmsApiUrl = process.env.VITE_CMS_API_URL || 'http://localhost:3000';
  try {
    const response = await fetch(`${cmsApiUrl}/api/seo/sitemap`);
    if (!response.ok) {
      res.setHeader('Content-Type', 'text/plain');
      return res.status(response.status).send('Sitemap not found');
    }
    const xml = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    return res.status(200).send(xml);
  } catch (error) {
    console.error('Error fetching sitemap.xml:', error);
    res.setHeader('Content-Type', 'text/plain');
    return res.status(500).send('Error compiling sitemap');
  }
}
