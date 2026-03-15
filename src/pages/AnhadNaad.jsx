import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const anhadnaadFAQs = [
  {
    question: "What is Anhad Naad and how is it different from a concert?",
    answer: "Anhad Naad is not a performance or a show; it is a sacred energy circle. While it involves music and chanting, the primary focus is on vibrational healing and energy transmission. It is an immersive experience designed to shift your internal frequency rather than just provide aural entertainment."
  },
  {
    question: "Do I need to be a musician or have musical knowledge to attend?",
    answer: "Not at all. Anhad Naad is for everyone. You don't need to sing or play an instrument. You simply need to be present and open to receiving the vibrations. The energy works on your subtle body regardless of your musical background."
  },
  {
    question: "Can I host an Anhad Naad session in my home or office?",
    answer: "Yes, we specialize in bringing the Anhad Naad Energy Circle to private spaces, corporate environments, and wellness centers. Hosting a session helps purify the energy of the space and creates a powerful collective healing experience for the participants."
  },
  {
    question: "What are the benefits of attending an Anhad Naad circle?",
    answer: "Participants often report deep stress relief, emotional release, mental clarity, and a profound sense of inner peace. It helps in balancing chakras, dissolving energetic blocks, and aligning your life with the frequency of abundance and joy."
  }
];

const AnhadNaad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper rekhi-page" style={{ minHeight: '100vh', background: '#F4DEFA' }}>
      {/* === HERO === */}
      <section className="service-hero" style={{ backgroundImage: 'url(/anhadnaad_hero_bg.png)' }}>
        <div className="hero-overlay" />
        <div className="container-wide" style={{ padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(242, 218, 145, 0.15)', border: '1px solid rgba(242, 218, 145, 0.35)', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', color: '#F2DA91', textTransform: 'uppercase', marginBottom: '22px' }}>Sacred Vibrations</div>
          <h1 style={{ color: '#F2DA91' }}>Anhad Naad Energy Circle</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '38px', maxWidth: '750px', margin: '0 auto 38px auto' }}>
            Anhad Naad is the unstruck, eternal sound, the pure, divine vibration that exists beyond thought and words. Join Abhirang Spectrum and her Divine Musical Ensemble for a soul-sound journey of abundance, alignment, and inner awakening.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#F2DA91', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform='scale(1)'}>Host Anhad Naad</Link>
        </div>
      </section>

      {/* === What is Anhad Naad === */}
      <section className="responsive-section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)' }}>What is Anhad Naad?</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            "Anhad Naad is the unstruck, eternal sound, the pure, divine vibration that exists beyond thought and words. It is the soundless sound of the universe. When awakened within you, it creates a powerful shift in your consciousness."
          </p>
          
          <div className="responsive-grid" style={{ marginTop: '50px' }}>
            {[
              { title: "Energetic Healing", icon: "✨", desc: "Dissolve blocks and restore flow." },
              { title: "Spiritual Alignment", icon: "🧘", desc: "Connect with your higher self." },
              { title: "Soul-Deep Abundance", icon: "💰", desc: "Manifest from within." },
              { title: "Chakra Balancing", icon: "☸️", desc: "Harmonize your energy." }
            ].map((item, i) => (
              <div key={i} className="glass-card">
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--primary-purple)', fontSize: '18px', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Why This Circle === */}
      <section className="responsive-section" style={{ background: 'linear-gradient(105.3deg, #4F1C4C 8.73%, #30112E 91.27%)', color: 'white' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '40px' }}>Why This Circle Was Created</h2>
          <div className="flex-responsive" style={{ gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                After years of guiding thousands of souls, Abhirang Spectrum received a divine calling to bring back the ancient power of sacred sound. This circle is pure vibrational medicine co-created with a devotional ensemble to dissolve blocks and awaken dormant energies.
              </p>
              <div style={{ marginTop: '30px', padding: '20px', borderLeft: '4px solid var(--accent-yellow)', background: 'rgba(255,255,255,0.05)' }}>
                "This is not a show. It is a prayer, a portal, and a powerful remembrance of your soul's divine frequency."
              </div>
            </div>
            <div style={{ flex: 1 }} className="responsive-grid">
              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', textAlign: 'center' }}>
                <div style={{ fontSize: '30px', marginBottom: '10px' }}>🌊</div>
                <p style={{ margin: 0 }}>Dissolve energetic blocks</p>
              </div>
              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', textAlign: 'center' }}>
                <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚡</div>
                <p style={{ margin: 0 }}>Awaken dormant chakras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Session Experience === */}
      <section className="responsive-section">
        <div className="container-wide">
          <h2 style={{ textAlign: 'center', color: 'var(--primary-purple)', marginBottom: '60px' }}>What Happens in the Session?</h2>
          <div className="responsive-grid">
            {[
              { title: "Aura Cleansing", t: "Intentional clearing of your energetic field." },
              { title: "Healing Bhajans", t: "Sacred chants to activate bliss and peace." },
              { title: "Guided Meditation", t: "A deep journey into soul awareness." },
              { title: "Energy Transmission", t: "Multidimensional healing energy flow." }
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'left' }}>
                <h3 style={{ color: 'var(--primary-purple)', fontSize: '20px', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Host Section === */}
      <section className="responsive-section" style={{ background: 'var(--primary-purple)', color: 'white' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '60px' }}>Host This Circle in Your Sacred Space</h2>
          <div className="responsive-grid">
            {[
              "Home or Community Centre", "Corporate Office gathering", "School or Wellness Institute", "Spiritual or Yoga Centre"
            ].map((place, i) => (
              <div key={i} className="glass-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: 'white', marginBottom: 0 }}>{place}</h3>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: 'var(--accent-yellow)', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700' }}>Inquire for Booking</Link>
          </div>
        </div>
      </section>

      <FAQ questions={anhadnaadFAQs} title="Anhad Naad FAQs" />
    </div>
  );
};

export default AnhadNaad;
