import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const cmsApiUrl = process.env.VITE_CMS_API_URL || 'http://localhost:3000';
  try {
    const response = await fetch(`${cmsApiUrl}/api/seo/robots`);
    if (!response.ok) {
      res.setHeader('Content-Type', 'text/plain');
      return res.status(response.status).send('Robots config not found');
    }
    const text = await response.text();
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(text);
  } catch (error) {
    console.error('Error fetching robots.txt:', error);
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send('User-agent: *\nAllow: /');
  }
}
