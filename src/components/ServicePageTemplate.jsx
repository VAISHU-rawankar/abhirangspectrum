"use client";

import React from 'react';

const ServicePageTemplate = ({ title, subtitle, description, features, imageAlt, bgClass }) => {
  return (
    <div className={`service-page ${bgClass}`} style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Hero — Cosmic Starry Background */}
      <section className="cosmic-hero" style={{
        padding: '80px 20px',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="cosmic-glow-1"></div>
        <div className="cosmic-glow-2"></div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '50px',
          width: '100%',
          position: 'relative',
          zIndex: 3,
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h1 style={{ color: '#F2DA91', fontSize: '48px', marginBottom: '20px', lineHeight: '1.2' }}>{title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '20px', lineHeight: '1.6', marginBottom: '30px' }}>{subtitle}</p>
            <a href="/contact" style={{
              display: 'inline-block',
              padding: '15px 40px',
              background: '#F2DA91',
              color: '#4F1C4C',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'transform 0.3s ease'
            }}>Consult Now</a>
          </div>
          <div style={{ flex: 1, textAlign: 'center', minWidth: '300px' }}>
            <div style={{
              width: '350px',
              height: '350px',
              background: 'rgba(228, 174, 242, 0.15)',
              border: '2px solid rgba(242, 218, 145, 0.2)',
              borderRadius: '50%',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ fontSize: '100px' }}>
                {features && features[0] ? features[0].icon : '✨'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features — Cosmic Section */}
      <section className="cosmic-section" style={{ padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: '#F2DA91', fontSize: '36px', marginBottom: '20px' }}>How {title} Can Transform Your Life</h2>
          <p style={{ fontSize: '18px', marginBottom: '60px', opacity: 0.9 }}>{description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '40px 25px',
                borderRadius: '20px',
                border: '1px solid rgba(242, 218, 145, 0.15)',
                backdropFilter: 'blur(5px)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{feature.icon || '💎'}</div>
                <h3 style={{ color: '#F2DA91', marginBottom: '15px', fontSize: '20px' }}>{feature.name}</h3>
                <p style={{ fontSize: '16px', opacity: 0.8, lineHeight: '1.6' }}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;


