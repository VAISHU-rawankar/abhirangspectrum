import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const graphologyFAQs = [
  {
    question: "What exactly is Graphology and how does Abhirang Spectrum use it?",
    answer: "Graphology is the scientific analysis of handwriting to determine an individual's psychological state, behavioral traits, and emotional health. At Abhirang Spectrum, we analyze the pressure, slant, size, and spacing of your handwriting to uncover deep-seated subconscious patterns and help you initiate positive life changes."
  },
  {
    question: "Can signature analysis really affect my confidence and public image?",
    answer: "Yes, your signature acts as your public badge or outward persona. Graphology shows that an upward-slanting, legible signature with specific structural elements can project and reinforce confidence. The experts at Abhirang Spectrum can help you redesign your signature to attract better opportunities and project self-assurance."
  },
  {
    question: "How long does a handwriting analysis session at Abhirang Spectrum take?",
    answer: "A comprehensive Graphology initial analysis at Abhirang Spectrum usually takes about 60 minutes. During this session, our specialists will evaluate your provided handwriting samples, discuss your current emotional and professional blocks, and recommend specific graphotherapy exercises to rewire your subconscious."
  },
  {
    question: "Is Graphology accurate for understanding deeply hidden stress or trauma?",
    answer: "Our subconscious mind controls muscle movements, which directly influence handwriting strokes. Heavy pressure, constricted loops, or abrupt baselines often indicate internalized stress, anxiety, or past trauma. Abhirang Spectrum uses these precise indicators in Graphology to bring these issues to light for healing."
  },
  {
    question: "What is Graphotherapy and how soon can I see results?",
    answer: "Graphotherapy is the practice of consciously altering your handwriting strokes to create new neural pathways in the brain. Clients at Abhirang Spectrum practicing their customized Graphotherapy exercises for 15-20 minutes daily often report noticeable shifts in their mood, focus, and emotional resilience within 30 to 45 days."
  },
  {
    question: "Does Abhirang Spectrum provide online Graphology consultations?",
    answer: "Yes, we conduct distance consultations globally. You simply need to provide a high-resolution scan of your handwriting on unruled paper according to our specific guidelines, and our specialists will analyze it with the same precision as an in-person session."
  }
];

const revealCards = [
  { title: "Personality Traits", icon: "👤" },
  { title: "Emotional Stability", icon: "⚖️" },
  { title: "Confidence Level", icon: "💪" },
  { title: "Leadership Qualities", icon: "👑" },
  { title: "Hidden Fears", icon: "🌑" },
  { title: "Communication Patterns", icon: "💬" },
  { title: "Decision Making Ability", icon: "🎯" }
];

const processSteps = [
  { step: "Step 1", title: "Submit handwriting sample", desc: "Provide a sample of your normal handwriting on unruled paper." },
  { step: "Step 2", title: "Stroke pattern evaluation", desc: "Our experts analyze pressure, slants, and curvature of each letter." },
  { step: "Step 3", title: "Psychological trait mapping", desc: "We link handwriting patterns to specific psychological profiles." },
  { step: "Step 4", title: "Personalized insights report", desc: "Receive a detailed report explaining your core personality." },
  { step: "Step 5", title: "Guidance for improvement", desc: "Practical tips and exercises to overcome identified blocks." }
];



const Graphology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#FDF7FE' }}>
      {/* === HERO === */}
      <section className="service-hero" style={{ backgroundImage: 'url(/graphology_hero_bg.png)' }}>
        <div className="hero-overlay" />
        <div className="container-wide" style={{ padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(242, 218, 145, 0.15)', border: '1px solid rgba(242, 218, 145, 0.35)', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', color: '#F2DA91', textTransform: 'uppercase', marginBottom: '22px' }}>Handwriting Analysis</div>
          <h1 style={{ color: '#F2DA91' }}>Graphology</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '38px', maxWidth: '750px' }}>
            Handwriting is more than just recorded thoughts—it is a powerful expression of the human mind and personality. The science of graphology studies handwriting to reveal hidden personality traits, emotional patterns, and behavioral characteristics. At Abhirang Spectrum, we use graphology as a tool for self-awareness and personal development. By analyzing handwriting and signatures, we help you uncover subconscious habits, gain deeper insight into your character, and chart a path toward meaningful transformation and clarity.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#F2DA91', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform='scale(1)'}>Consult Now</Link>
        </div>
      </section>

      {/* === Section 1: What is Graphology === */}
      <section className="responsive-section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)' }}>The Science of Handwriting</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Graphology is the study of handwriting that reveals insights about an individual’s personality, emotional state, subconscious habits, and behavioral tendencies. Every stroke reflects unique psychological traits.
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            At Abhirang Spectrum, we use this diagnostic tool to help you understand your strengths and identify blocks that might be holding you back professionally or personally.
          </p>
        </div>
      </section>

      {/* === Section 2: Graphotherapy === */}
      <section className="responsive-section" style={{ background: 'var(--primary-purple)', color: 'white' }}>
        <div className="container-wide">
          <div className="flex-responsive" style={{ gap: '60px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ color: 'var(--accent-yellow)', marginBottom: '30px' }}>Graphotherapy: Rewire Your Brain</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '25px' }}>
                Graphotherapy is the practice of consciously changing your handwriting strokes to influence your psychological state. By altering how you form certain letters, you can create new neural pathways that foster confidence, reduce anxiety, and improve emotional stability.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {["Boost confidence through T-bars", "Release trauma through loop adjustments", "Improve focus through dot placements", "Enhance social skills through slants"].map((item, i) => (
                   <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ color: 'var(--accent-yellow)', fontSize: '20px' }}>✦</span>
                      <span>{item}</span>
                   </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
               <img src="/graphology_blog.png" alt="Graphotherapy" style={{ borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* === Section 3: Signature Analysis === */}
      <section className="responsive-section">
        <div className="container-wide text-center">
          <h2 style={{ color: 'var(--primary-purple)', marginBottom: '50px' }}>Your Signature: Your Public Badge</h2>
          <div className="flex-responsive" style={{ justifyContent: 'center', gap: '30px' }}>
            <div className="glass-card" style={{ maxWidth: '350px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Public Persona</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Your signature represents how you want the world to see you. We help you align it with your true self.</p>
            </div>
            <div className="glass-card" style={{ maxWidth: '350px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Confidence Marker</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Specific flourishes and slants in a signature can indicate your level of self-worth and authority.</p>
            </div>
            <div className="glass-card" style={{ maxWidth: '350px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Correction Service</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Our experts redesign your signature to attract success, prosperity, and respect in your professional life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === What it Reveals === */}
      <section className="responsive-section" style={{ background: 'var(--bg-pale)' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>What Your Handwriting Can Reveal</h2>
          <div className="responsive-grid">
            {revealCards.map((card, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{card.icon}</div>
                <h3 style={{ color: 'var(--primary-purple)', fontSize: '18px' }}>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* === FAQ === */}
      <FAQ questions={graphologyFAQs} title="Graphology FAQs" />
      
      {/* === Who Should Try === */}
      <section className="responsive-section" style={{ background: 'var(--bg-pale)' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)', marginBottom: '50px' }}>Who Should Try Graphology?</h2>
          <div className="flex-responsive" style={{ justifyContent: 'center', gap: '15px' }}>
            {["Students", "Professionals", "Entrepreneurs", "Self-Seekers", "Stressed Individuals"].map((person, i) => (
              <div key={i} style={{ padding: '12px 25px', background: 'white', border: '2px solid var(--primary-purple)', borderRadius: '50px', color: 'var(--primary-purple)', fontWeight: '700', fontSize: '14px' }}>{person}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Graphology;
