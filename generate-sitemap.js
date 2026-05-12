import fs from 'fs';
import { tools } from './src/toolsData.js';

const BASE_URL = 'https://sulemanjaam.com';

const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/tools</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blog</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/contact</loc>
    <priority>0.7</priority>
  </url>`;

  tools.forEach(tool => {
    xml += `
  <url>
    <loc>${BASE_URL}${tool.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += '\n</urlset>';

  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated successfully in /public/sitemap.xml');
};

generateSitemap();
