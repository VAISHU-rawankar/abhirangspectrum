import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const reikiFAQs = [
  {
    question: "What is Quantum Reiki and how is it different from traditional Reiki?",
    answer: "Traditional Reiki channels universal life-force energy through specific hand positions to heal the physical body. Quantum Reiki at Abhirang Spectrum elevates this by incorporating sacred geometry, Siddha healing symbols, and quantum field principles to work simultaneously across multiple dimensions—healing the physical, emotional, mental, and karmic bodies all at once for faster, deeper transformation."
  },
  {
    question: "How does distance Reiki healing work if I am not physically present?",
    answer: "Energy, like quantum particles, is non-local—it is not bound by space or time. During a distance Reiki session at Abhirang Spectrum, our practitioners use the Hon Sha Ze Sho Nen distance healing symbol to create a quantum-entangled channel between themselves and the recipient. This allows the full intensity of healing energy to be transmitted effectively across any geographical distance."
  },
  {
    question: "What does '24x7 Reiki Grid' mean and how does it benefit me?",
    answer: "The 24x7 Quantum Reiki Grid at Abhirang Spectrum is a continuously active, programmed crystal energy grid that is set up and maintained by our practitioners. Once you are enrolled, your name and intention are placed within the grid, allowing you to receive a steady stream of healing Reiki energy round the clock—including during your sleep—for restoration, protection, and manifestation support."
  },
  {
    question: "How many Quantum Reiki sessions will I need to see results?",
    answer: "Results vary depending on the depth of the issue being addressed. Many Abhirang Spectrum clients report feeling lighter, calmer, and more energized after their very first session. For deep-seated emotional trauma, chronic health challenges, or karmic blockages, a recommended course of 4-8 sessions conducted weekly provides lasting and transformative healing effects."
  },
  {
    question: "Can Quantum Reiki be combined with medical treatment?",
    answer: "Yes, absolutely. Quantum Reiki at Abhirang Spectrum is a complementary healing modality, not a replacement for conventional medical care. It works synergistically alongside allopathic medicine, Ayurveda, or any other treatment protocol by reducing stress, strengthening the immune response, accelerating recovery, and restoring emotional balance during treatment."
  },
  {
    question: "What is the 24/7 Quantum Reiki Healing Grid?",
    answer: "This is a specialized service where your name and intention are placed in a sacred crystal grid at Abhirang Spectrum. This grid continuously transmits high-frequency healing energy to you 24/7, providing constant energetic support for health, abundance, and protection."
  }
];

const howItWorks = [
  { title: "Energy Channels", desc: "Opening and clearing the Nadis (energy meridians) for smooth flow.", icon: "🌊" },
  { title: "Chakra Healing", desc: "Balancing the seven major energy centers of the body.", icon: "☸️" },
  { title: "Aura Balancing", desc: "Strengthening and sealing the bio-magnetic field.", icon: "✨" }
];

const processSteps = [
  { step: "1", title: "Energy scanning", desc: "We identify blockages in your physical and emotional aura." },
  { step: "2", title: "Distance healing session", desc: "High-frequency energy is transmitted to you no matter where you are." },
  { step: "3", title: "Chakra balancing", desc: "Specific focus on aligning and activating your dormant energy centers." },
  { step: "4", title: "Energy protection", desc: "Final seal to protect your field from external negative influences." }
];



const QuantumReiki = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#FDF7FE' }}>
      {/* === HERO === */}
      <section className="service-hero" style={{ backgroundImage: 'url(/reiki_hero_bg.png)' }}>
        <div className="hero-overlay" />
        <div className="container-wide" style={{ padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(242, 218, 145, 0.15)', border: '1px solid rgba(242, 218, 145, 0.35)', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', color: '#F2DA91', textTransform: 'uppercase', marginBottom: '22px' }}>Divine Healing</div>
          <h1 style={{ color: '#F2DA91' }}>Quantum Reiki</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '38px', maxWidth: '750px' }}>
            Experience the transformative power of Quantum Reiki, an advanced energy healing science that works at a multidimensional level. Our healing sessions focus on balancing your body's subtle energy systems, removing deep-seated energetic blockages, and revitalizing your spirit. Whether you are dealing with chronic stress, emotional trauma, or physical fatigue, Quantum Reiki helps restore your natural state of harmony and health. Dive into a journey of profound relaxation and spiritual growth as you align with high-frequency life-force energy.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#F2DA91', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform='scale(1)'}>Start Your Healing</Link>
        </div>
      </section>

      {/* === What is Quantum Reiki === */}
      <section className="responsive-section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)' }}>What is Quantum Reiki Healing?</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Quantum Reiki is a modernized and high-frequency evolution of traditional Reiki. While traditional Reiki focuses on the physical and etheric bodies, Quantum Reiki works on the multidimensional level—accessing the quantum field to rewrite energy patterns at the source.
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            It uses sacred geometry, Siddha healing symbols, and programmed intention to deliver rapid and profound results. At Abhirang Spectrum, we specialize in distance healing, ensuring you receive this divine energy no matter where you are in the world.
          </p>
        </div>
      </section>

      {/* === How it Works === */}
      <section className="responsive-section" style={{ background: 'var(--bg-pale)' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>How Reiki Energy Works</h2>
          <div className="responsive-grid">
            {howItWorks.map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--primary-purple)', fontSize: '18px', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Process === */}
      <section className="responsive-section">
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>The Healing Process</h2>
          <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))' }}>
            {processSteps.map((step, i) => (
              <div key={i} className="glass-card flex-responsive" style={{ gap: '20px', alignItems: 'center' }}>
                <div style={{ minWidth: '60px', height: '60px', background: 'var(--primary-purple)', color: 'var(--accent-yellow)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '20px' }}>{step.step}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: 'var(--primary-purple)', fontSize: '18px', marginBottom: '5px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Benefits === */}
      <section className="responsive-section" style={{ background: 'var(--primary-purple)', color: 'white' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '60px' }}>Benefits of Reiki</h2>
          <div className="responsive-grid">
            {[
              "Deep emotional healing and trauma release", "Significant stress and anxiety reduction", "Energy balance and chakra alignment",
              "Rapid spiritual growth and awareness", "Improved sleep and physical recovery", "Protection from negative psychic energy"
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--accent-yellow)', fontSize: '20px' }}>✔</div>
                <p style={{ fontSize: '18px', margin: 0 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ questions={reikiFAQs} title="Quantum Reiki FAQs" />
    </div>
  );
};

export default QuantumReiki;
