import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'www.healholistic.in');
const outDir = path.join(__dirname, 'src', 'pages');

const pagesToConvert = [
  { file: 'home.html', name: 'Home' },
  { file: 'services.html', name: 'Services' },
  { file: 'Quantum Reiki.html', name: 'QuantumReiki' },
  { file: 'Anhad Naad.html', name: 'AnhadNaad' },
  { file: 'about.html', name: 'About' },
  { file: 'blog.html', name: 'Blog' },
  { file: 'form.html', name: 'Contact' },
];

pagesToConvert.forEach(page => {
  const filePath = path.join(pagesDir, page.file);
  if (!fs.existsSync(filePath)) {
     console.log(`File not found: ${filePath}`);
     return;
  }
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);
  
  // Remove navigation and scripts
  $('script').remove();
  $('.desktop-nav, .mobile-hamburger, .mobile-menu-overlay, nav, header, footer').remove();
  
  // Extract custom styles but clean them
  let headStyles = '';
  $('head style').each((i, el) => {
    let styleText = $(el).text();
    // Remove body/html/font-face from component styles to avoid clashing
    styleText = styleText.replace(/body\s*\{[^}]*\}/gi, '');
    styleText = styleText.replace(/html\s*\{[^}]*\}/gi, '');
    headStyles += `<style>${styleText}</style>\n`;
  });

  // Fix image paths
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('/') && !src.startsWith('http')) {
      $(el).attr('src', '/' + src);
    }
  });

  // Fix links to use clean paths (will be handled by Link components usually, but good to have)
  $('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href) {
      if (href === 'index.html' || href === 'home.html') href = '/';
      else if (href === 'services.html') href = '/services';
      else if (href === 'Quantum Reiki.html') href = '/quantum-reiki';
      else if (href === 'Anhad Naad.html') href = '/anhad-naad';
      else if (href === 'about.html') href = '/about';
      else if (href === 'blog.html') href = '/blog';
      else if (href === 'form.html') href = '/contact';
      $(el).attr('href', href);
    }
  });

  let bodyHtml = $('body').html() || html;
  const bodyClass = $('body').attr('class') || '';
  const bodyStyle = $('body').attr('style') || '';
  
  // Wrap in page-wrapper for consistent layout
  bodyHtml = headStyles + `<div class="page-body ${bodyClass}" style="${bodyStyle}">` + bodyHtml + `</div>`;

  bodyHtml = bodyHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  
  const componentStr = `import React from 'react';
import parse from 'html-react-parser';

export default function ${page.name}() {
  const htmlContent = \`${bodyHtml}\`;
  return (
    <div className="page-wrapper ${page.name.toLowerCase()}-wrapper">
      {parse(htmlContent)}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(outDir, `${page.name}.jsx`), componentStr);
});
