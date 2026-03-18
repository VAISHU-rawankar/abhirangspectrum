"use client";

import React, { useEffect } from 'react';
import FAQ from '@/src/components/FAQ';
import Link from 'next/link';
;

const astrologyFAQs = [
  {
    question: "What is the difference between Vedic and Western Astrology?",
    answer: "Vedic Astrology (Jyotish) is rooted in the ancient Vedic scriptures of India and uses the sidereal zodiac, which is based on the actual positions of stars in the sky. Western Astrology uses the tropical zodiac, which is based on the seasons. At Abhirang Spectrum, we practice Vedic Astrology as it accounts for karmic influences and planetary periods (Dashas), giving deeply accurate life forecasts."
  },
  {
    question: "How can my birth chart reading help with major life decisions?",
    answer: "Your Kundali (birth chart) is a cosmic blueprint of your soul's journey. At Abhirang Spectrum, we analyze the planetary positions, houses, and their interrelations to identify the most auspicious and challenging periods in your life. This allows you to time major decisions like career changes, marriage, investments, and travel for the best outcomes."
  },
  {
    question: "What details do I need to provide for a Vedic Astrology reading?",
    answer: "For an accurate Kundali analysis at Abhirang Spectrum, you need to provide your exact date of birth, precise time of birth (even to the minute is important), and place of birth. The birth time is particularly critical as it determines the Ascendant (Lagna), which is the foundation of the entire chart."
  },
  {
    question: "Can Vedic Astrology predict and prevent obstacles in my career?",
    answer: "Yes, Vedic Astrology can reveal which planetary periods (Dashas and Antardashas) are unfavorable for your career and when opportunity windows will open. The experts at Abhirang Spectrum suggest specific gemstones, mantras, yantras, and charitable acts as remedies to mitigate negative planetary influences and strengthen favorable ones for professional growth."
  },
  {
    question: "How often should I get an astrology reading updated?",
    answer: "An in-depth birth chart reading from Abhirang Spectrum is a one-time foundation. However, we recommend an annual transit reading at the start of each new year to understand the specific planetary transits and their impact on your current life cycle—helping you plan the upcoming months with clarity and confidence."
  },
  {
    question: "How long is an Abhirang Spectrum astrology report valid?",
    answer: "A Natal Chart analysis is valid for a lifetime as it represents your core blueprint. However, for timing specific life events, our 'Varshphal' or transit reports are typically valid for one year, providing detailed guidance for the current phase of your journey."
  }
];

const revealCards = [
  { title: "Zodiac Signs Influence", icon: "♈" },
  { title: "Planetary Positions", icon: "🪐" },
  { title: "Karmic Patterns", icon: "🕉️" },
  { title: "Life Cycle (Dashas)", icon: "⏳" },
  { title: "Auspicious Timing", icon: "📅" },
  { title: "Remedial Measures", icon: "📿" }
];

const processSteps = [
  { step: "1", title: "Birth details submission", desc: "Provide your exact date, time, and place of birth for precise calculations." },
  { step: "2", title: "Planetary chart generation", desc: "We use high-precision astronomical data to create your Vedic Kundali." },
  { step: "3", title: "Expert analysis", desc: "Our astrologers study the house placements, aspects, and planetary strengths." },
  { step: "4", title: "Remedies & guidance", desc: "Practical solutions including mantras, gems, and lifestyle changes are shared." }
];

const Astrology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#FDF7FE' }}>
      {/* === HERO === */}
      <section className="service-hero" style={{ backgroundImage: 'url(/astrology_hero_bg.png)' }}>
        <div className="hero-overlay" />
        <div className="container-wide" style={{ padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(242, 218, 145, 0.15)', border: '1px solid rgba(242, 218, 145, 0.35)', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', color: '#F2DA91', textTransform: 'uppercase', marginBottom: '22px' }}>Cosmic Alignment</div>
          <h1 style={{ color: '#F2DA91' }}>Vedic Astrology</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '38px', maxWidth: '750px' }}>
            Vedic Astrology is a powerful ancient science that studies the alignment of planets and their profound influence on human life and destiny. Through a detailed analysis of your birth chart, we provide customized guidance to help you navigate your career, strengthen relationships, and achieve financial success. At Abhirang Spectrum, we combine celestial wisdom with practical life advice, identifying auspicious timings and offering remedial measures that bring balance, prosperity, and cosmic harmony to your life path.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#F2DA91', color: '#1a0a2e', textDecoration: 'none', borderRadius: '50px', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform='scale(1)'}>Book a Session</Link>
        </div>
      </section>

      {/* === What is Vedic Astrology === */}
      <section className="responsive-section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)' }}>What is Vedic Astrology?</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Vedic Astrology, also known as Jyotish, is the 'Science of Light.' It is an ancient Indian system that studies the positions of celestial bodies and their impact on human life. Unlike Western astrology, it uses the sidereal zodiac, accounting for the actual positions of the stars in the night sky.
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            By studying your birth chart, we can understand the planetary influences that govern your health, wealth, relationships, and spiritual path. At Abhirang Spectrum, we use these insights to help you navigate life with wisdom and foresight.
          </p>
        </div>
      </section>

      {/* === Birth Chart Analysis === */}
      <section className="responsive-section" style={{ background: 'var(--bg-pale)' }}>
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>Birth Chart (Kundali) Analysis</h2>
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

      {/* === Process === */}
      <section className="responsive-section">
        <div className="container-wide">
          <h2 style={{ color: 'var(--primary-purple)', textAlign: 'center', marginBottom: '60px' }}>Astrology Consultation Process</h2>
          <div className="responsive-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center', position: 'relative', paddingTop: '45px' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '40px', background: 'var(--accent-yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', border: '3px solid white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>{step.step}</div>
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
          <h2 style={{ color: 'var(--accent-yellow)', textAlign: 'center', marginBottom: '60px' }}>Benefits of Astrology</h2>
          <div className="responsive-grid">
            {[
              "Career clarity and best paths", "Deep relationship & compatibility insights", "Financial timing and prosperity windows",
              "Life direction and spiritual growth", "Predictive insights into upcoming life phases", "Practical remedies for planetary blocks"
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ color: 'var(--accent-yellow)', fontSize: '20px' }}>✔</div>
                <p style={{ fontSize: '18px', margin: 0 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Astrology Remedies === */}
      <section className="responsive-section">
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-purple)', marginBottom: '30px' }}>Astrology Remedies</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
            We provide traditional and practical remedies to mitigate negative planetary influences and strengthen favorable ones. This includes:
          </p>
          <div className="flex-responsive" style={{ justifyContent: 'center', gap: '15px' }}>
            {["Gemstones", "Vedic Mantras", "Energized Yantras", "Specific Rituals", "Charity Guidelines"].map((rem, i) => (
              <div key={i} style={{ padding: '15px 30px', background: 'var(--bg-pale)', borderRadius: '50px', color: 'var(--primary-purple)', fontWeight: '700' }}>{rem}</div>
            ))}
          </div>
        </div>
      </section>

      <FAQ questions={astrologyFAQs} title="Vedic Astrology FAQs" />
    </div>
  );
};

export default Astrology;
