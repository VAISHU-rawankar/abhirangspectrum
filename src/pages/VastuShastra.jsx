import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const vastuFAQs = [
  {
    question: "Is Vastu Shastra applicable to modern apartments and rented homes?",
    answer: "Yes, Vastu Shastra principles can be adapted for any type of dwelling, including modern apartments and rented spaces. At Abhirang Spectrum, we focus on non-structural, non-destructive Vastu remedies — like placement of furniture, use of specific colors, energy-correcting crystals, pyramids, and yantras — that don't require any construction or renovation."
  },
  {
    question: "Can Vastu Shastra remedies help improve financial problems in a household?",
    answer: "Financial stagnation is often linked to imbalances in the North (direction of Kubera, the god of wealth) and North-East zones of a property. At Abhirang Spectrum, we conduct a comprehensive Vastu audit to identify these specific imbalances and prescribe targeted remedies to activate the wealth zones of your home or office for improved financial flow."
  },
  {
    question: "How does Abhirang Spectrum conduct a Vastu audit remotely?",
    answer: "Our Vastu Shastra consultants at Abhirang Spectrum can conduct a thorough analysis remotely using your property's floor plan or layout sketch, along with the direction of the main entrance. We analyze the placement of each room relative to the cardinal directions and identify energy blockages, providing you with a detailed remediation report."
  },
  {
    question: "Can Vastu corrections help with recurring health issues within a family?",
    answer: "Imbalances in specific zones of a home—particularly the South-West (health, stability) and South-East (fire, metabolism) directions—can create energetic disturbances that manifest as recurring illness in family members. An Abhirang Spectrum Vastu analysis can identify and correct these zones to support better health and vitality for all residents."
  },
  {
    question: "Does Vastu Shastra conflict with interior design or Feng Shui principles?",
    answer: "Vastu Shastra and Feng Shui both aim to create harmonious living spaces using natural energy flow, but they originate from different ancient traditions (Indian and Chinese respectively) with distinct methodologies. At Abhirang Spectrum, we practice authentic Vastu Shastra and can complement it with modern interior design principles to create spaces that are both aesthetically beautiful and energetically powerful."
  },
  {
    question: "What is 'Vastu without Demolition'?",
    answer: "At Abhirang Spectrum, we specialize in non-invasive Vastu. This means we fix energetic imbalances using space-clearing, color therapy, crystal placements, and directional enhancements, so you don't have to break walls or make structural changes to your home or office."
  }
];

const fiveElements = [
  { title: "Earth", desc: "For stability, patience, and confidence.", icon: "🧱" },
  { title: "Water", desc: "For financial flow, clarity, and new ideas.", icon: "💧" },
  { title: "Fire", desc: "For fame, vitality, and power.", icon: "🔥" },
  { title: "Air", desc: "For social connections and better communication.", icon: "🌬️" },
  { title: "Space", desc: "For expansion, manifestation, and mental peace.", icon: "🌌" }
];

const processSteps = [
  { step: "1", title: "Property analysis", desc: "We evaluate the floor plan and cardinal directions of your home or office." },
  { step: "2", title: "Directional energy study", desc: "Analysis of which zones are active and which are blocked." },
  { step: "3", title: "Energy imbalance detection", desc: "Identifying the root causes of financial or health stagnation." },
  { step: "4", title: "Remedies suggestion", desc: "Applying non-invasive tools like colors, crystals, and mirrors." }
];

const VastuShastra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#FDF7FE' }}>
      {/* === HERO === */}
      <section className="service-hero" style={{ backgroundImage: 'url(/vastu_hero_bg.png)' }}>
        <div className="hero-overlay" />
        <div className="container-wide" style={{ padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(242, 218, 145, 0.15)', border: '1px solid rgba(242, 218, 145, 0.35)', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', color: '#F2DA91', textTransform: 'uppercase', marginBottom: '22px' }}>Sacred Spaces</div>
          <h1 style={{ color: '#F2DA91' }}>Vastu Shastra</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '38px', maxWidth: '750px' }}>
            Vastu Shastra is the ancient Indian science of architecture that harmonizes living and working spaces with the natural elements of the universe. By balancing the five core energies—Earth, Water, Fire, Air, and Space—proper Vastu alignment improves health, prosperity, and success. At Abhirang Spectrum, we provide expert consultations for homes and businesses, offering non-destructive remedies to remove energetic blocks and invite positive flow. Transform your environment into a sanctuary of peace, productivity, and overall growth.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#F2DA91', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform='scale(1)'}>Book Consultation</Link>
        </div>
      </section>

      {/* === What is Vastu Shastra === */}
      <section className="responsive-section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)' }}>What is Vastu Shastra?</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Vastu Shastra is an ancient Indian system of architecture and design. It translates to 'Science of Construction' and focuses on bringing structural design in harmony with the laws of nature. It involves balancing the directional energies of a property to ensure that the inhabitants lead a peaceful, prosperous, and healthy life.
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            At Abhirang Spectrum, we specialize in 'Vastu without Demolition.' Our remedies are non-invasive and aim to correct energy imbalances using elemental forces and sacred tools without breaking a single wall.
          </p>
        </div>
      </section>

      {/* === Five Elements === */}
      <section className="responsive-section" style={{ background: 'var(--bg-pale)' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>The Five Elements of Vastu</h2>
          <div className="responsive-grid">
            {fiveElements.map((item, i) => (
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
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>Vastu Consultation Process</h2>
          <div className="responsive-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="glass-card" style={{ borderLeft: '5px solid var(--accent-yellow)' }}>
                <div style={{ color: 'var(--accent-yellow)', fontWeight: '800', fontSize: '24px', marginBottom: '10px' }}>0{step.step}</div>
                <h3 style={{ color: 'var(--primary-purple)', fontSize: '20px', marginBottom: '15px' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Benefits === */}
      <section className="responsive-section" style={{ background: 'var(--primary-purple)', color: 'white' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '60px' }}>Benefits of Vastu</h2>
          <div className="responsive-grid">
            {[
              "Financial stability and wealth accumulation", "Positive home energy for family peace", "Health improvement and reduced illness",
              "Business success and smoother operations", "Career growth and removal of obstacles", "Mental clarity and emotional well-being"
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--accent-yellow)', fontSize: '20px' }}>✔</div>
                <p style={{ fontSize: '18px', margin: 0 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ questions={vastuFAQs} title="Vastu Shastra FAQs" />
    </div>
  );
};

export default VastuShastra;
