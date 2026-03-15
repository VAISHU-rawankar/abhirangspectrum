import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

const numerologyFAQs = [
  {
    question: "How does Numerology work and what can it reveal about my life?",
    answer: "Numerology is the ancient science of numbers and their vibrational frequencies. At Abhirang Spectrum, we calculate core numbers like your Life Path, Expression, Soul Urge, and Personality Numbers from your birth date and full name. Each number carries a specific cosmic vibration that reveals your innate talents, karmic lessons, and ideal life direction."
  },
  {
    question: "Can changing my name really change my destiny?",
    answer: "The name you use daily carries a continuous vibrational frequency that shapes your personality and life events. At Abhirang Spectrum, if your current name's numerological vibration conflicts with your birth chart numbers, we recommend subtle adjustments—like adding or removing a letter—to align your personal vibration with more positive, abundant energies."
  },
  {
    question: "What is a Life Path Number and why is it important?",
    answer: "Your Life Path Number is the most significant number in Numerology, calculated from your complete date of birth. It defines the core traits, challenges, and opportunities you will encounter throughout your lifetime. At Abhirang Spectrum, understanding your Life Path is the cornerstone of our personalized numerological guidance."
  },
  {
    question: "How can Numerology help me choose the right business name or brand?",
    answer: "A business name carries its own numerological vibration that can either attract or repel prosperity. The experts at Abhirang Spectrum analyze the combined vibrational energy of a proposed business name—ensuring it is in harmony with the founder's personal numbers and the nature of the business, creating a powerful foundation for long-term success."
  },
  {
    question: "Is Numerology compatible with my existing religious or spiritual beliefs?",
    answer: "Absolutely. Numerology at Abhirang Spectrum is presented as a mathematical science, not a religious practice. It is rooted in universal mathematical laws that transcend religious boundaries. Our clients from all faiths—Hindu, Muslim, Christian, Jain, and more—use Numerology as a complementary tool for deeper self-understanding and life planning."
  },
  {
    question: "Do I need to believe in Numerology for it to work?",
    answer: "Numerology at Abhirang Spectrum is based on mathematical vibrations and energy frequencies that interact with your field regardless of belief. Much like gravity, these numerical archetypes influence your path constantly; understanding them simply allows you to navigate life more efficiently."
  }
];

const importantNumbers = [
  { title: "Life Path Number", desc: "Reveals your life's purpose and primary challenges.", icon: "🌱" },
  { title: "Destiny Number", desc: "Shows your aims, goals, and what you are destined to achieve.", icon: "🎯" },
  { title: "Soul Number", desc: "Reflects your inner desires and what truly makes you happy.", icon: "❤️" },
  { title: "Personality Number", desc: "Indicates how others perceive you and your outward persona.", icon: "🎭" }
];

const processSteps = [
  { step: "1", title: "Birth date analysis", desc: "We start with your full date of birth to find your primary life path vibrations." },
  { step: "2", title: "Name vibration analysis", desc: "We convert each letter of your full name into numerical values for deep analysis." },
  { step: "3", title: "Numerology chart creation", desc: "A comprehensive grid is created to see which numbers are dominant and which are missing." },
  { step: "4", title: "Personal recommendations", desc: "Get practical advice on name corrections, mobile numbers, and house numbers." }
];

const Numerology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#FDF7FE' }}>
      {/* === HERO === */}
      <section className="service-hero" style={{ backgroundImage: 'url(/numerology_hero_bg.png)' }}>
        <div className="hero-overlay" />
        <div className="container-wide" style={{ padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(242, 218, 145, 0.15)', border: '1px solid rgba(242, 218, 145, 0.35)', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', color: '#F2DA91', textTransform: 'uppercase', marginBottom: '22px' }}>Sacred Vibrations</div>
          <h1 style={{ color: '#F2DA91' }}>Numerology</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '38px', maxWidth: '750px' }}>
            Numerology is the ancient science of numbers that reveals the vibrational energy patterns of your soul. At Abhirang Spectrum, we delve deep into your Life Path, Destiny, and Soul numbers to provide a roadmap for your future. Whether you are seeking clarity in your career, harmony in relationships, or the perfect name vibration for your business, our expert numerology consultations help you align with the cosmic rhythms. Discover how the mathematical secrets of your birth date and name can unlock doors to success, prosperity, and emotional well-being.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#F2DA91', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform='scale(1)'}>Book a Session</Link>
        </div>
      </section>

      {/* === What is Numerology === */}
      <section className="responsive-section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)' }}>What is Numerology?</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Numerology is the ancient study of numbers and their vibrational frequencies. It is based on the belief that everything in the universe carries a specific vibration, and numbers are the most direct way to measure these energies. Your birth date and your name are not accidents; they are codes that define your potential.
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            At Abhirang Spectrum, we help you decode these numbers to understand your strengths, weaknesses, and the timing of your life cycles. Whether it's choosing a brand name or correcting your own name's spelling, numerology offers practical tools for alignment.
          </p>
        </div>
      </section>

      {/* === Important Numbers === */}
      <section className="responsive-section" style={{ background: 'var(--bg-pale)' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>Important Numerology Numbers</h2>
          <div className="responsive-grid">
            {importantNumbers.map((item, i) => (
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
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>Numerology Consultation Process</h2>
          <div className="responsive-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--primary-purple)', color: 'var(--accent-yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', margin: '0 auto 20px' }}>{step.step}</div>
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
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '60px' }}>Benefits of Numerology</h2>
          <div className="responsive-grid">
            {[
              "Clearer career direction and goals", "Optimal business name selection", "Deep compatibility insights for partners",
              "Life cycle and timing predictions", "Name spelling corrections for harmony", "Discovering lucky numbers and colors"
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--accent-yellow)', fontSize: '20px' }}>✔</div>
                <p style={{ fontSize: '18px', margin: 0 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ questions={numerologyFAQs} title="Numerology FAQs" />
    </div>
  );
};

export default Numerology;
