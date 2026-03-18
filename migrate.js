import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');
const appDir = path.join(__dirname, 'app');

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir);
}

const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const page of pages) {
  const pageName = page.replace('.jsx', '');
  if (pageName === 'Home') continue;
  
  let targetFolder;
  if (pageName === 'BlogPost') {
    targetFolder = path.join(appDir, 'blog', '[id]');
  } else {
    let slug = pageName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    targetFolder = path.join(appDir, slug);
  }

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  const oldPath = path.join(pagesDir, page);
  const newPath = path.join(targetFolder, 'page.jsx');

  let content = fs.readFileSync(oldPath, 'utf-8');
  
  if (!content.startsWith('"use client"')) {
    content = `"use client";\n\n` + content;
  }

  content = content.replace(/import\s+\{(.*?)\}\s+from\s+['"]react-router-dom['"]/g, (match, p1) => {
    let hasLink = p1.includes('Link');
    let hasNavigate = p1.includes('useNavigate');
    let hasParams = p1.includes('useParams');
    let hasLocation = p1.includes('useLocation');
    
    let res = "";
    if (hasLink) res += `import Link from 'next/link';\n`;
    
    let navImports = [];
    if (hasNavigate) navImports.push('useRouter');
    if (hasParams) navImports.push('useParams');
    if (hasLocation) navImports.push('usePathname');
    
    if (navImports.length > 0) {
      res += `import { ${navImports.join(', ')} } from 'next/navigation';\n`;
    }
    return res;
  });

  content = content.replace(/useNavigate\(/g, 'useRouter(');
  content = content.replace(/<Link(.*?)to=/g, '<Link$1href=');
  
  fs.writeFileSync(newPath, content, 'utf-8');
}

const componentsDir = path.join(__dirname, 'src', 'components');
if (fs.existsSync(componentsDir)) {
  const components = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));
  for (const comp of components) {
    const compPath = path.join(componentsDir, comp);
    let content = fs.readFileSync(compPath, 'utf-8');

    if (!content.startsWith('"use client"')) {
      content = `"use client";\n\n` + content;
    }

    content = content.replace(/import\s+\{(.*?)\}\s+from\s+['"]react-router-dom['"]/g, (match, p1) => {
      let hasLink = p1.includes('Link');
      let hasNavigate = p1.includes('useNavigate');
      let hasParams = p1.includes('useParams');
      let hasLocation = p1.includes('useLocation');
      
      let res = "";
      if (hasLink) res += `import Link from 'next/link';\n`;
      
      let navImports = [];
      if (hasNavigate) navImports.push('useRouter');
      if (hasParams) navImports.push('useParams');
      if (hasLocation) navImports.push('usePathname');
      
      if (navImports.length > 0) {
        res += `import { ${navImports.join(', ')} } from 'next/navigation';\n`;
      }
      return res;
    });

    content = content.replace(/useNavigate\(/g, 'useRouter(');
    content = content.replace(/<Link(.*?)to=/g, '<Link$1href=');

    fs.writeFileSync(compPath, content, 'utf-8');
  }
}
console.log("Migration script complete");
