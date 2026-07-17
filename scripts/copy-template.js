import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.resolve(__dirname, '../dist/index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('Error: dist/index.html not found! Make sure to run vite build first.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const apiDir = path.resolve(__dirname, '../api');
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Write directly as static HTML file
fs.writeFileSync(path.resolve(apiDir, 'template.html'), html);
console.log('Successfully copied dist/index.html to api/template.html');

// Delete dist/index.html to force Vercel to route clean URL paths through /api/render
if (fs.existsSync(htmlPath)) {
  fs.unlinkSync(htmlPath);
  console.log('Deleted dist/index.html to enable serverless render rewrites');
}
