"use client";

import React, { useState } from 'react';

const FAQ = ({ questions, title = "Frequently Asked Questions" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ backgroundColor: '#FAEFD4', padding: '80px 20px', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#4F1C4C', marginBottom: '50px', fontWeight: '800' }}>
          {title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {questions.map((q, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                padding: '25px', 
                cursor: 'pointer', 
                boxShadow: '0 4px 15px rgba(79, 28, 76, 0.05)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', color: '#3A1538', margin: 0, fontWeight: '700', paddingRight: '20px', lineHeight: '1.4' }}>
                  {q.question}
                </h3>
                <span style={{ 
                  fontSize: '28px', 
                  color: '#4F1C4C', 
                  fontWeight: '300', 
                  transform: activeIndex === index ? 'rotate(45deg)' : 'none', 
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  lineHeight: '1'
                }}>
                  +
                </span>
              </div>
              {activeIndex === index && (
                <div style={{ 
                  marginTop: '20px', 
                  color: '#6D436A', 
                  fontSize: '15px', 
                  lineHeight: '1.8',
                  borderTop: '1px solid rgba(79, 28, 76, 0.1)',
                  paddingTop: '20px'
                }}>
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

