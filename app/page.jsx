"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AstrologyAnimation from '@/src/components/AstrologyAnimation';
import FloatingAstrologyBackground from '@/src/components/FloatingAstrologyBackground';
import { useRouter } from 'next/navigation';;
import FAQ from '@/src/components/FAQ';

const homeFAQs = [
  {
    question: "What services does Abhirang Spectrum provide?",
    answer: "Abhirang Spectrum offers a comprehensive range of spiritual and analytical services, including Vedic Astrology consultation, Numerology analysis, Graphology (handwriting analysis), Vastu Shastra consultation, and Quantum Reiki energy healing sessions."
  },
  {
    question: "Can I book an online consultation?",
    answer: "Yes, absolutely. All our consultations—Astrology, Numerology, Graphology, and Vastu—can be conducted online via video calls or detailed reports. Distance Quantum Reiki healing is also highly effective regardless of your geographical location."
  },
  {
    question: "How accurate are astrology and numerology readings?",
    answer: "When performed by experienced practitioners using authentic Vedic and Pythagorean systems, astrology and numerology provide exceptionally valuable insights into life patterns, personality traits, and timing of events. At Abhirang Spectrum, we focus on deep, data-driven analysis for the highest possible accuracy."
  },
  {
    question: "What is graphology?",
    answer: "Graphology is the scientific study of handwriting. It is based on the principle that handwriting is 'brain writing'—a physical expression of the subconscious mind. By analyzing strokes, slant, and pressure, we can reveal deep personality traits, behavioral patterns, and emotional characteristics."
  },
  {
    question: "What is quantum Reiki healing?",
    answer: "Quantum Reiki is an advanced energy healing technique that works on a multidimensional level. It aims to balance the body's subtle energy systems, remove energetic blockages, and promote profound emotional and spiritual well-being by channeling high-frequency life-force energy."
  },
  {
    question: "How do I choose which service—Astrology, Numerology, or Graphology—I need?",
    answer: "If you are unsure, we recommend starting with an Astrology consultation for the broad 'map' of your life, or Graphology for deep personality rewiring. Contact Abhirang Spectrum directly, and our team will guide you to the service that best addresses your current life challenges."
  }
];

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Pune",
    text: "My numerology consultation at Abhirang Spectrum gave me clarity about my career direction. The insights were extremely accurate and helped me make better professional decisions.",
    image: "/profile_rohit.png"
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    text: "The graphology analysis was fascinating. I learned so much about my personality and subconscious behavior patterns. It was a truly eye-opening experience.",
    image: "/profile_priya.png"
  },
  {
    name: "Ankit Verma",
    location: "Delhi",
    text: "The Vastu consultation helped improve the energy of our home. We started noticing positive changes in our family environment within a few weeks.",
    image: "/profile_ankit.png"
  },
  {
    name: "Sneha Kulkarni",
    location: "Nashik",
    text: "The quantum reiki healing session helped me feel calmer and more balanced. It was a powerful and peaceful experience.",
    image: "/profile_sneha.png"
  },
  {
    name: "Vikram Malhotra",
    location: "Bangalore",
    text: "The career guidance I received was transformative. The combination of astrology and practical advice really paved the way for my promotion.",
    image: "/profile_vikram.png"
  },
  {
    name: "Isha Kapoor",
    location: "Hyderabad",
    text: "I was struggling with emotional blocks for years. The Reiki sessions provided the release I needed to finally move forward and find peace.",
    image: "/profile_isha.png"
  }
];

const teaserBlogs = [
  {
    id: 'graphology-traits',
    category: "Graphology",
    title: "Handwriting & Character",
    image: "/graphology_blog.png",
    date: "May 12, 2026"
  },
  {
    id: 'astrology-planets',
    category: "Astrology",
    title: "Navigating Life's Cycles",
    image: "/astrology_blog.png",
    date: "May 10, 2026"
  },
  {
    id: 'numerology-destiny',
    category: "Numerology",
    title: "Decoding Your Destiny",
    image: "/numerology_blog.png",
    date: "May 08, 2026"
  }
];

export default function Home() {
  return (
    <div className="home-container" style={{ paddingTop: '0px', background: '#FDF7FE', fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* 1. Hero Section */}
      <section className="home-hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '120px 20px 60px 20px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#2D0D2D'
      }}>
        <FloatingAstrologyBackground />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(45, 13, 45, 0.4) 0%, rgba(15, 5, 15, 0.85) 100%)',
          zIndex: 1
        }}></div>

        <AstrologyAnimation side="left" />
        <AstrologyAnimation side="right" />

        <motion.div className="hero-content" 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 3 }}>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800', lineHeight: '1.2', color: '#f2da91', marginBottom: '24px' }}>
            Transform Your Life with Ancient Wisdom at Abhirang Spectrum
          </h1>
          <p style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: '400', lineHeight: '1.6', opacity: 0.9, marginBottom: '40px' }}>
            At Abhirang Spectrum, we guide individuals toward clarity, balance, and success using the powerful sciences of Vedic Astrology, Numerology, Graphology, Vastu Shastra, and Quantum Reiki Healing. Our holistic approach combines ancient wisdom with modern insights to help you understand your life path, overcome challenges, and unlock your true potential.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              padding: '15px 40px',
              background: '#f2da91',
              color: '#4a1a4a',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '16px'
            }}>Book a Consultation</Link>
            <Link href="/blog" style={{
              padding: '15px 40px',
              border: '2px solid #f2da91',
              color: '#f2da91',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '16px'
            }}>Explore Our Blogs</Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Services Section */}
      <section className="services-overview" style={{ padding: 'clamp(40px, 8vw, 80px) 20px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--primary-purple)', marginBottom: '12px', fontWeight: '800' }}>Our Wisdom Streams</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.5vw, 16px)', maxWidth: '650px', margin: '0 auto 40px', lineHeight: '1.5', opacity: 0.85 }}>
            Expert spiritual and analytical services designed to bring clarity and transformation to your life path.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
            gap: '30px', 
            justifyContent: 'center'
          }}>
            {[
              {
                title: "Graphology",
                desc: "Scientific handwriting analysis revealing personality traits and subconscious patterns.",
                img: "/graphology_blog.png",
                link: "/graphology",
                category: "Analysis"
              },
              {
                title: "Astrology",
                desc: "Vedic chart analysis providing guidance on career, relationships, and life decisions.",
                img: "/astrology_blog.png",
                link: "/astrology",
                category: "Celestial"
              },
              {
                title: "Numerology",
                desc: "Harnessing number vibrations to uncover strengths, purpose, and favorable energies.",
                img: "/numerology_blog.png",
                link: "/numerology",
                category: "Vibration"
              },
              {
                title: "Vastu Shastra",
                desc: "Aligning living spaces with natural energies to improve prosperity and harmony.",
                img: "/vastu_blog.png",
                link: "/vastu-shastra",
                category: "Harmony"
              },
              {
                title: "Quantum Reiki",
                desc: "Advanced energy healing to balance spirit and restore inner peace and vitality.",
                img: "/reiki_blog.png",
                link: "/quantum-reiki",
                category: "Healing"
              }
            ].map((service, index) => (
              <div key={index} className="service-card floating-card" style={{ 
                background: '#F0D4F3', 
                borderRadius: '16px', 
                textAlign: 'left',
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: '0 8px 24px rgba(79, 28, 76, 0.08)',
                transition: 'all 0.4s ease',
                position: 'relative'
              }}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                  <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ color: '#A177A1', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{service.category}</span>
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#4F1C4C', fontWeight: '800' }}>{service.title}</h3>
                  <p style={{ color: '#6D436A', fontSize: '13px', lineHeight: '1.4', marginBottom: '15px', opacity: 0.9 }}>{service.desc}</p>
                  
                  <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid rgba(79, 28, 76, 0.08)' }}>
                    <Link href={service.link} style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#4F1C4C', 
                      fontSize: '13px', 
                      textDecoration: 'none', 
                      fontWeight: '800'
                    }} className="card-link-hover">
                      Learn More 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 20px', background: '#F0D4F3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#4F1C4C', marginBottom: '40px', fontWeight: '800' }}>About Abhirang Spectrum</h2>
          <div style={{ color: '#4F1C4C', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '20px', textAlign: 'left' }}>
              Abhirang Spectrum is a holistic spiritual guidance platform dedicated to helping individuals discover clarity, purpose, and balance in life. Our approach blends the wisdom of astrology, numerology, graphology, vastu shastra, and energy healing to provide deep insights into the forces that shape our lives.
            </p>
            <p style={{ marginBottom: '20px', textAlign: 'left' }}>
              Every person carries a unique energetic blueprint influenced by planetary movements, numbers, environment, and subconscious patterns. At Abhirang Spectrum, we analyze these elements to help you understand your strengths, challenges, and opportunities.
            </p>
            <p style={{ textAlign: 'left' }}>
              Our mission is to empower individuals to make confident decisions, build meaningful relationships, and create a balanced life filled with positivity and growth.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 20px', background: '#FDF7FE' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: ' clamp(30px, 5vw, 60px)', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#4F1C4C', marginBottom: '30px', fontWeight: '800' }}>How Spiritual Sciences Can Transform Your Life</h2>
              <p style={{ color: '#6D436A', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.7', marginBottom: '30px' }}>
                Ancient spiritual sciences have guided individuals for thousands of years by providing deeper understanding of life’s patterns and energies. Through the combined power of astrology, numerology, graphology, and energy healing, individuals can gain valuable insights into their personal and professional lives.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6D436A', fontSize: '17px' }}>
                {[
                  "Understanding personality and behavior patterns",
                  "Making confident career and business decisions",
                  "Improving relationships and emotional connections",
                  "Creating harmony in living spaces through Vastu",
                  "Reducing stress and achieving inner balance",
                  "Discovering life purpose and personal strengths"
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: '#A177A1', fontWeight: '800', marginTop: '4px' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', background: '#F0D4F3', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '30px', boxShadow: '0 20px 40px rgba(79, 28, 76, 0.1)' }}>
              <img src="/astrology_hero_bg.png" alt="Transformation" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detailed Service Explanation */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 20px', background: '#F0D4F3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#4F1C4C', marginBottom: '30px', fontWeight: '800' }}>Our Approach to Holistic Guidance</h2>
          <div style={{ color: '#4F1C4C', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.8', textAlign: 'left' }}>
            <p style={{ marginBottom: '25px', textAlign: 'center' }}>
              At Abhirang Spectrum, our consultations follow a structured and personalized approach to ensure meaningful and accurate guidance.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '30px', marginTop: '40px' }}>
              <div style={{ background: 'white', padding: 'clamp(25px, 5vw, 40px)', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '30px', marginBottom: '20px', color: '#A177A1', fontWeight: '800' }}>01</div>
                <h4 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '700' }}>Analyze</h4>
                <p style={{ fontSize: '15px', color: '#6D436A', lineHeight: '1.6' }}>We analyze your birth details, handwriting samples, or personal information to understand the energetic patterns influencing your life.</p>
              </div>
              <div style={{ background: 'white', padding: 'clamp(25px, 5vw, 40px)', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '30px', marginBottom: '20px', color: '#A177A1', fontWeight: '800' }}>02</div>
                <h4 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '700' }}>Insight</h4>
                <p style={{ fontSize: '15px', color: '#6D436A', lineHeight: '1.6' }}>We provide detailed insights and interpretations based on astrological charts, numerology calculations, or energy assessments.</p>
              </div>
              <div style={{ background: 'white', padding: 'clamp(25px, 5vw, 40px)', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '30px', marginBottom: '20px', color: '#A177A1', fontWeight: '800' }}>03</div>
                <h4 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '700' }}>Recommendation</h4>
                <p style={{ fontSize: '15px', color: '#6D436A', lineHeight: '1.6' }}>Finally, we offer practical recommendations and remedies designed to bring positive transformation and balance to your life.</p>
              </div>
            </div>
            <p style={{ marginTop: '40px', textAlign: 'center', fontWeight: '700', color: '#4F1C4C' }}>Our goal is not just prediction, but empowerment through knowledge and awareness.</p>
          </div>
        </div>
      </section>

      {/* 7. Testimonial */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) 0', background: '#FDF7FE', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: '#4F1C4C', marginBottom: '40px', fontWeight: '800' }}>Testimonials</h2>
        </div>
        
        <div style={{ position: 'relative', width: '100%' }}>
          <div className="testimonial-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} style={{ 
                background: '#F0D4F3', 
                padding: 'clamp(25px, 5vw, 40px)', 
                borderRadius: '20px', 
                textAlign: 'left',
                boxShadow: '0 10px 25px rgba(79, 28, 76, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                width: 'clamp(280px, 80vw, 350px)',
                margin: '0 15px',
                flexShrink: 0
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <img src={t.image} alt={t.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ color: '#4F1C4C', fontSize: '16px', margin: 0, fontWeight: '800' }}>{t.name}</h4>
                    <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="/star-rating.svg" alt="star" style={{ width: '12px', height: '12px' }} />
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ color: '#6D436A', fontSize: '14px', fontStyle: 'italic', marginBottom: '0', lineHeight: '1.6', flexGrow: 1 }}>"{t.text}"</p>
                <p style={{ color: '#8A678A', fontSize: '13px', margin: '5px 0 0' }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Blog Teaser */}
      <section style={{ padding: 'clamp(40px, 8vw, 80px) 20px', background: '#FDF7FE' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: '#4F1C4C', marginBottom: '40px', fontWeight: '800' }}>Latest Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px', textAlign: 'left' }}>
            {teaserBlogs.map((blog) => (
              <article key={blog.id} className="floating-card" style={{ background: '#F0D4F3', borderRadius: '15px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '100%' }}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: '#4F1C4C', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px', display: 'block', letterSpacing: '1px' }}>{blog.category}</span>
                  <h4 style={{ margin: '0 0 15px 0', fontSize: '18px', color: '#4F1C4C', lineHeight: '1.3', fontWeight: '700' }}>{blog.title}</h4>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(79, 28, 76, 0.1)', paddingTop: '15px' }}>
                    <span style={{ fontSize: '11px', color: '#8A678A' }}>{blog.date}</span>
                    <Link href={`/blog/${blog.id}`} style={{ color: '#4F1C4C', fontSize: '13px', textDecoration: 'none', fontWeight: '800' }}>Read More →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '60px' }}>
             <Link href="/blog" style={{ display: 'inline-block', padding: '16px 40px', border: '2px solid #4F1C4C', borderRadius: '50px', color: '#4F1C4C', textDecoration: 'none', fontWeight: '800', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {e.currentTarget.style.background = '#4F1C4C'; e.currentTarget.style.color='white'}} onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color='#4F1C4C'}}>View All Articles</Link>
          </div>
        </div>
      </section>

      <FAQ questions={homeFAQs} title="Frequently Asked Questions" />

      {/* 9. CTA */}
      <section className="cosmic-section" style={{
        padding: 'clamp(80px, 15vw, 150px) 20px',
        color: 'white',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #2D0D2D 0%, #4F1C4C 100%)'
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', color: '#F2DA91', marginBottom: '25px', fontWeight: '800' }}>Your Path to Clarity Begins Here</h2>
        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', marginBottom: '45px', opacity: 0.9, maxWidth: '750px', margin: '0 auto 45px', lineHeight: '1.6' }}>
          Take the first step toward understanding your life’s direction and unlocking your true potential. Connect with the experts at Abhirang Spectrum and experience the power of holistic guidance.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '20px 60px',
          background: '#F2DA91',
          color: '#4a1a4a',
          textDecoration: 'none',
          borderRadius: '50px',
          fontWeight: '800',
          fontSize: 'clamp(16px, 2vw, 18px)',
          boxShadow: '0 10px 30px rgba(242, 218, 145, 0.4)',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Begin Your Journey</Link>
      </section>
    </div>
  );
}
