import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const QuantumReiki = lazy(() => import('./pages/QuantumReiki'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// New Service Pages
const Graphology = lazy(() => import('./pages/Graphology'));
const Astrology = lazy(() => import('./pages/Astrology'));
const Numerology = lazy(() => import('./pages/Numerology'));
const VastuShastra = lazy(() => import('./pages/VastuShastra'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Import Global Styles
import './styles/land.css';
import './styles/home.css';
import './styles/final-cta.css';
import './styles/form.css';
import './styles/mobile-menu-fix.css';
import './index.css';

import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quantum-reiki" element={<QuantumReiki />} />
          
          <Route path="/graphology" element={<Graphology />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/vastu-shastra" element={<VastuShastra />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTop />
        <WhatsAppButton />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;