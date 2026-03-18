import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Move Home.jsx to app/page.jsx
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
const pagePath = path.join(__dirname, 'app', 'page.jsx');

if (fs.existsSync(homePath)) {
  let homeContent = fs.readFileSync(homePath, 'utf8');
  if (!homeContent.startsWith('"use client"')) {
    homeContent = `"use client";\n\n` + homeContent;
  }
  // replace Link and useNavigate here too
  homeContent = homeContent.replace(/import\s+\{\s*Link.*\s*}\s+from\s+['"]react-router-dom['"]/g, "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';");
  homeContent = homeContent.replace(/useNavigate\(/g, 'useRouter(');
  homeContent = homeContent.replace(/<Link(.*?)to=/g, '<Link$1href=');
  
  // replace imports
  homeContent = homeContent.replace(/['"]\.\.\/components/g, "'@/src/components");
  homeContent = homeContent.replace(/['"]\.\.\/\.\.\/components/g, "'@/src/components");
  
  fs.writeFileSync(pagePath, homeContent, 'utf8');
  fs.unlinkSync(homePath);
}

// Fix CSS URL paths
const cssDir = path.join(__dirname, 'src', 'styles');
if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
  for (const file of cssFiles) {
    const filePath = path.join(cssDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace url('file.ext') with url('/file.ext') if it doesn't start with / or http
    content = content.replace(/url\(['"]?([^/'"()h][^'"()]+)['"]?\)/g, "url('/$1')");
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// Global JS imports replacement for app/
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'app'), function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Replace components paths
    if (content.includes('../components')) {
      content = content.replace(/['"]\.\.\/components/g, "'@/src/components");
      changed = true;
    }
    if (content.includes('../../components')) {
      content = content.replace(/['"]\.\.\/\.\.\/components/g, "'@/src/components");
      changed = true;
    }
    
    // Replace styles imports (if any relative styling import is used)
    // Actually no, styles were imported globally in app/layout.jsx
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});

// Update components internally
const compDir = path.join(__dirname, 'src', 'components');
if (fs.existsSync(compDir)) {
  const comps = fs.readdirSync(compDir).filter(f => f.endsWith('.jsx'));
  for (const c of comps) {
    const cPath = path.join(compDir, c);
    let content = fs.readFileSync(cPath, 'utf8');
    let changed = false;
    
    // Replace <img src="file" /> with absolute paths or similar, but for now just fix standard missing modules.
    // If components import each other, it uses `./FAQ` which is fine.

    if (content.includes('react-router-dom')) {
      // should have been done but let's be sure
      content = content.replace(/import\s+\{\s*Link.*\s*}\s+from\s+['"]react-router-dom['"]/g, "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';");
      content = content.replace(/useNavigate\(/g, 'useRouter(');
      content = content.replace(/<Link(.*?)to=/g, '<Link$1href=');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(cPath, content, 'utf8');
    }
  }
}
console.log('Fixed paths');
