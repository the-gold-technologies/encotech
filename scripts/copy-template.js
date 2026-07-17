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
const safeHtml = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
const code = `export const template = \`${safeHtml}\`;\n`;

const apiDir = path.resolve(__dirname, '../api');
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

fs.writeFileSync(path.resolve(apiDir, 'template.ts'), code);
console.log('Successfully generated api/template.ts from dist/index.html');
