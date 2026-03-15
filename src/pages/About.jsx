import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Hero — Cosmic */}
      <section className="cosmic-hero" style={{ padding: '100px 20px', textAlign: 'center', color: 'white', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="cosmic-glow-1"></div>
        <div className="cosmic-glow-2"></div>
        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 3 }}>
          <h1 style={{ color: '#F2DA91', fontSize: '56px', marginBottom: '20px' }}>Empowering Your Life Journey</h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', opacity: 0.9 }}>
            We are a team of expert life coaches and energy healers dedicated to helping you achieve balance, clarity, and prosperity. 
            By combining ancient sciences with modern coaching techniques, we provide a roadmap for your physical, emotional, and spiritual well-being.
          </p>
        </div>
      </section>

      {/* Mission — Cosmic Section */}
      <section className="cosmic-section" style={{ padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: '#F2DA91', fontSize: '36px', textAlign: 'center', marginBottom: '50px' }}>Our Mission</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9, textAlign: 'center' }}>
            Our mission is to spread awareness about the profound impact of energy and cosmic vibrations on human life. 
            Through Graphology, Astrology, Numerology, Vastu Shastra, and Reiki, Abhirang Spectrum aims to guide individuals towards their true potential and help them overcome life's obstacles with grace and wisdom.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px', background: '#FDF7FE' }}>
        <h2 style={{ color: '#4F1C4C', fontSize: '36px', textAlign: 'center', marginBottom: '60px' }}>Why Choose Our Coaching?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>🎯</div>
            <h3 style={{ color: '#4F1C4C' }}>Personalized Solutions</h3>
            <p style={{ color: '#6D436A' }}>Every individual is unique. We provide customized remedies and coaching plans.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>⏳</div>
            <h3 style={{ color: '#4F1C4C' }}>Ancient Wisdom</h3>
            <p style={{ color: '#6D436A' }}>We use time-tested sciences like Vedic Astrology and Vastu Shastra.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>🌈</div>
            <h3 style={{ color: '#4F1C4C' }}>Integrated Approach</h3>
            <p style={{ color: '#6D436A' }}>We address the root causes of issues at the energy and subconscious levels.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



