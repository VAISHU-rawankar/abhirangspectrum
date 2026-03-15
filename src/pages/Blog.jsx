import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 'graphology-traits',
      category: "Graphology",
      title: "The Silent Language: What Your Handwriting Reveals About Your Character",
      excerpt: "Handwriting is more than just traces of ink on paper. It is a biological expression of the subconscious mind. Discover how slant, pressure, and letter spacing indicate personality traits, emotional health, and hidden potential.",
      date: "May 12, 2026",
      image: "/graphology_blog.png",
      tags: ["Personality", "Subconscious", "Analysis"]
    },
    {
      id: 'astrology-planets',
      category: "Astrology",
      title: "Planetary Alignments: Navigating Life's Cycles with Vedic Wisdom",
      excerpt: "Understanding the influence of the Navagrahas on your life can provide a powerful roadmap. Learn how to align your actions with the cosmic rhythm for career growth, relationships, and spiritual evolution.",
      date: "May 10, 2026",
      image: "/astrology_blog.png",
      tags: ["Vedic", "Planets", "Guidance"]
    },
    {
      id: 'numerology-destiny',
      category: "Numerology",
      title: "Decoding Destiny: Finding Your Life Path Through Sacred Numbers",
      excerpt: "Every number carries a specific vibration. Calculate your life path number and understand the unique challenges, strengths, and divine purpose that shape your journey through this lifetime.",
      date: "May 08, 2026",
      image: "/numerology_blog.png",
      tags: ["Numbers", "Destiny", "Life-Path"]
    },
    {
      id: 'vastu-harmony',
      category: "Vastu Shastra",
      title: "The Architecture of Peace: Designing a Home That Heals",
      excerpt: "Your environment is an extension of your energy body. Vastu Shastra provides timeless principles to balance the five elements in your home for health, wealth, and family harmony.",
      date: "May 05, 2026",
      image: "/vastu_blog.png",
      tags: ["Architecture", "Balance", "Prosperity"]
    },
    {
      id: 'reiki-distance',
      category: "Reiki",
      title: "Quantum Healing: The Science Behind Distance Reiki Therapy",
      excerpt: "Energy knows no boundaries. Explore how Reiki can be transmitted across any distance to bring deep healing to your physical, emotional, and spiritual layers through sacred symbols and intention.",
      date: "May 02, 2026",
      image: "/reiki_blog.png",
      tags: ["Energy", "Healing", "Quantum"]
    }
  ];

  const categoryColors = {
    "Graphology": "#8B5E3C",
    "Astrology": "#4A2D7A",
    "Numerology": "#1A6B4A",
    "Vastu Shastra": "#6B4A1A",
    "Reiki": "#6A1A6B"
  };

  return (
    <>
      <style>{`
        .blog-page {
          font-family: 'DM Sans', sans-serif;
          background: #FDF7FE;
          min-height: 100vh;
        }

        .blog-hero {
          padding: 140px 20px 80px;
          text-align: center;
          color: white;
        }


        .blog-hero h1 {
          font-family: 'DM Sans', serif;
          font-size: 52px;
          color: #F2DA91;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
          line-height: 1.2;
        }

        .blog-hero p {
          font-size: 20px;
          max-width: 650px;
          margin: 0 auto;
          opacity: 0.85;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        .blog-grid-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 35px;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(79, 28, 76, 0.06);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(79, 28, 76, 0.12);
        }

        .blog-card-img {
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .blog-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-card-img img {
          transform: scale(1.05);
        }

        .blog-card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: white;
          backdrop-filter: blur(6px);
        }

        .blog-card-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-card-tags {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }

        .blog-card-tags span {
          font-size: 11px;
          color: #8a4a8a;
          font-weight: 600;
        }

        .blog-card-body h3 {
          font-family: 'DM Sans', serif;
          font-size: 21px;
          color: #2D0D2D;
          margin: 0 0 14px;
          line-height: 1.4;
        }

        .blog-card-body p {
          color: #6D436A;
          font-size: 15px;
          line-height: 1.7;
          margin: 0 0 20px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #F4E8F4;
          padding-top: 18px;
          margin-top: auto;
        }

        .blog-card-footer span {
          font-size: 13px;
          color: #aaa;
        }

        .blog-card-footer .read-btn {
          background: none;
          border: none;
          color: #4F1C4C;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.3s ease;
        }

        .blog-card-footer .read-btn:hover {
          color: #8a4a8a;
        }

        /* Philosophy Section */
        .philosophy-section {
          background: #FAF0D2;
          padding: 100px 20px;
          text-align: center;
        }

        .philosophy-section h2 {
          font-family: 'DM Sans', serif;
          font-size: 40px;
          color: #6B4A1A;
          margin-bottom: 25px;
        }

        .philosophy-section > div > p {
          font-size: 18px;
          line-height: 1.8;
          color: #6D436A;
          max-width: 850px;
          margin: 0 auto 45px;
        }

        .philosophy-pills {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .philosophy-pill {
          background: white;
          padding: 22px 35px;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
        }

        .philosophy-pill:hover {
          transform: translateY(-4px);
        }

        .philosophy-pill h4 {
          color: #4F1C4C;
          margin: 0 0 6px;
          font-size: 16px;
        }

        .philosophy-pill p {
          font-size: 13px;
          color: #999;
          margin: 0;
        }

        /* Newsletter */
        .newsletter-section {
          background: linear-gradient(135deg, #2D0D2D 0%, #4F1C4C 100%);
          padding: 80px 20px;
          color: white;
          text-align: center;
        }

        .newsletter-section h2 {
          font-family: 'DM Sans', serif;
          font-size: 36px;
          color: #F2DA91;
          margin-bottom: 18px;
        }

        .newsletter-section > p {
          font-size: 17px;
          max-width: 560px;
          margin: 0 auto 35px;
          opacity: 0.8;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 12px;
          max-width: 480px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .newsletter-form input {
          padding: 14px 24px;
          border-radius: 50px;
          border: 2px solid rgba(242, 218, 145, 0.3);
          background: rgba(255,255,255,0.08);
          color: white;
          flex: 1;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          min-width: 200px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .newsletter-form input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .newsletter-form input:focus {
          border-color: #F2DA91;
        }

        .newsletter-form button {
          background: #F2DA91;
          color: #4F1C4C;
          padding: 14px 35px;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .newsletter-form button:hover {
          background: #e8cc7a;
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          .blog-hero h1 {
            font-size: 32px;
          }
          .blog-hero p {
            font-size: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .philosophy-section h2 {
            font-size: 28px;
          }
          .newsletter-section h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="blog-page">
        {/* Hero */}
        <section className="blog-hero cosmic-hero">
          <h1>Insights Into Your Soul's Journey</h1>
          <p>
            Explore the intersection of ancient sciences and conscious living through our latest articles and guides.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="blog-grid-section">
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card" style={{ background: '#F0D4F3', borderRadius: '15px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(79, 28, 76, 0.1)' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ background: '#A177A1', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{blog.category}</span>
                  </div>
                  <h4 style={{ margin: '0 0 20px 0', fontSize: '20px', color: '#4F1C4C', fontWeight: '700', lineHeight: '1.4' }}>
                    {blog.title}
                  </h4>
                  <div style={{ display: 'flex', gap: '20px', color: '#8A678A', fontSize: '13px', marginBottom: '30px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {blog.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      5 min Read
                    </span>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(79, 28, 76, 0.1)', paddingTop: '20px' }}>
                    <span style={{ fontSize: '13px', color: '#6D436A' }}>By Abhirang Spectrum</span>
                    <Link to={`/blog/${blog.id}`} style={{ padding: '6px 14px', border: '1px solid #4F1C4C', borderRadius: '6px', color: '#4F1C4C', fontSize: '13px', textDecoration: 'none', transition: 'background 0.3s ease' }}>Read More</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section">
          <div>
            <h2>The Abhirang Spectrum Philosophy</h2>
            <p>
              We believe that physical ailments, emotional distress, and life's obstacles are all rooted in energy imbalances.
              Our approach combines the analytical science of <strong>Graphology</strong>, the celestial guidance of <strong>Astrology</strong>, the vibrational power of <strong>Numerology</strong>, the environmental harmony of <strong>Vastu</strong>, and the pure channeling of <strong>Reiki</strong>.
            </p>
            <div className="philosophy-pills">
              <div className="philosophy-pill">
                <h4>✍️ Analytical</h4>
                <p>Rooted in Science</p>
              </div>
              <div className="philosophy-pill">
                <h4>🌌 Celestial</h4>
                <p>Guided by Stars</p>
              </div>
              <div className="philosophy-pill">
                <h4>🧘 Integrated</h4>
                <p>Healing for All</p>
              </div>
              <div className="philosophy-pill">
                <h4>🏠 Environmental</h4>
                <p>Balanced Spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section cosmic-hero">
          <h2>Join the Wisdom Circle</h2>
          <p>
            Receive monthly insights, cosmic forecasts, and healing tips directly in your inbox.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;



