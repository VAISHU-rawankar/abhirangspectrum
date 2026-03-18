"use client";

import React, { useState } from 'react';
import Link from 'next/link';
;

export default function Contact() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    energy: '',
    challenge: '',
    purpose: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          from_name: "Abhirang Spectrum Assessment Site",
          subject: "New Soul-Led Path Assessment Submission",
          ...formData
        }),
      });
      const result = await response.json();
      if (result.success) {
        nextStep();
      } else {
        alert("Something went wrong! Please try again later.");
      }
    } catch (err) {
      alert("Network error! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div className="form-step active" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
            <h1 style={{ fontFamily: '"DM Sans", serif', fontSize: '24px', fontWeight: '600', color: '#F2DA91', marginBottom: '8px' }}>The Soul-Led Path</h1>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '32px' }}>Some kind of small introduction about what the form is about</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '15px', fontWeight: '500', color: '#E4AEF2' }}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={{ background: '#371435', border: 'none', borderRadius: '12px', padding: '16px 20px', color: 'white', fontSize: '15px', outline: 'none' }}
                  />
                </div>
                <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '15px', fontWeight: '500', color: '#E4AEF2' }}>Email ID</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={{ background: '#371435', border: 'none', borderRadius: '12px', padding: '16px 20px', color: 'white', fontSize: '15px', outline: 'none' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="whatsapp" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '15px', fontWeight: '500', color: '#E4AEF2' }}>WhatsApp Number</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp" 
                  value={formData.whatsapp} 
                  onChange={handleChange} 
                  required 
                  style={{ background: '#371435', border: 'none', borderRadius: '12px', padding: '16px 20px', color: 'white', fontSize: '15px', outline: 'none', width: '100%' }}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px' }}>
              <button 
                type="button" 
                onClick={nextStep}
                style={{ 
                  background: 'white', 
                  color: '#30112E', 
                  border: 'none', 
                  borderRadius: '24px', 
                  padding: '12px 24px', 
                  fontSize: '15px', 
                  fontWeight: '600', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  fontFamily: '"DM Sans", sans-serif'
                }}
              >
                Continue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-step active" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
            <h1 className="form-title">Age Frequency</h1>
            <p className="step-indicator">Step 1/4</p>
            <div className="question-section">
              <h3 className="question">Choose your current soul-stage:</h3>
              <div className="radio-group" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['13-24', '25-34', '35-44', '45-54', '55+'].map(val => (
                  <label key={val} className="radio-option" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '16px' }}>
                    <input type="radio" name="age" value={val} checked={formData.age === val} onChange={() => handleRadioChange('age', val)} style={{ display: 'none' }} />
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #E4AEF2', background: formData.age === val ? '#fff' : 'transparent', marginRight: '16px', flexShrink: 0 }}></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <button type="button" onClick={prevStep} style={{ background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '24px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Previous</button>
              <button type="button" onClick={nextStep} style={{ background: 'white', color: '#30112E', border: 'none', borderRadius: '24px', padding: '12px 32px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step active" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
            <h1 className="form-title">Energy Check-In</h1>
            <p className="step-indicator">Step 2/4</p>
            <div className="question-section">
              <h3 className="question">What are you currently feeling?</h3>
              <div className="radio-group" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Foggy', 'Stuck', 'Low drive', 'Fearful', 'Confused'].map(val => (
                  <label key={val} className="radio-option" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '16px' }}>
                    <input type="radio" name="energy" value={val.toLowerCase()} checked={formData.energy === val.toLowerCase()} onChange={() => handleRadioChange('energy', val.toLowerCase())} style={{ display: 'none' }} />
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #E4AEF2', background: formData.energy === val.toLowerCase() ? '#fff' : 'transparent', marginRight: '16px', flexShrink: 0 }}></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <button type="button" onClick={prevStep} style={{ background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '24px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Previous</button>
              <button type="button" onClick={nextStep} style={{ background: 'white', color: '#30112E', border: 'none', borderRadius: '24px', padding: '12px 32px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step active" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
            <h1 className="form-title">Life Area Needing Healing</h1>
            <p className="step-indicator">Step 3/4</p>
            <div className="question-section">
              <h3 className="question">Choose your challenge:</h3>
              <div className="radio-group" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Academics', 'Career', 'Finances', 'Relationships', 'Health', 'Purpose'].map(val => (
                  <label key={val} className="radio-option" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '16px' }}>
                    <input type="radio" name="challenge" value={val.toLowerCase()} checked={formData.challenge === val.toLowerCase()} onChange={() => handleRadioChange('challenge', val.toLowerCase())} style={{ display: 'none' }} />
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #E4AEF2', background: formData.challenge === val.toLowerCase() ? '#fff' : 'transparent', marginRight: '16px', flexShrink: 0 }}></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <button type="button" onClick={prevStep} style={{ background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '24px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Previous</button>
              <button type="button" onClick={nextStep} style={{ background: 'white', color: '#30112E', border: 'none', borderRadius: '24px', padding: '12px 32px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Next</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step active" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
            <h1 className="form-title">Purpose</h1>
            <p className="step-indicator">Step 4/4</p>
            <div className="question-section">
              <h3 className="question">What do you wish to feel more of?</h3>
              <div className="radio-group" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Calm', 'Confidence', 'Clarity', 'Abundance', 'Self-Love'].map(val => (
                  <label key={val} className="radio-option" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '16px' }}>
                    <input type="radio" name="purpose" value={val.toLowerCase()} checked={formData.purpose === val.toLowerCase()} onChange={() => handleRadioChange('purpose', val.toLowerCase())} style={{ display: 'none' }} />
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #E4AEF2', background: formData.purpose === val.toLowerCase() ? '#fff' : 'transparent', marginRight: '16px', flexShrink: 0 }}></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <button type="button" onClick={prevStep} disabled={isSubmitting} style={{ background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '24px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.5 : 1 }}>Previous</button>
              <button type="button" onClick={submitForm} disabled={isSubmitting} style={{ background: '#F2DA91', color: '#30112E', border: 'none', borderRadius: '24px', padding: '12px 32px', fontSize: '15px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

          </div>
        );
      case 5:
        return (
          <div className="form-step active align-center" style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease-in-out' }}>
            <h1 className="form-title" style={{ color: '#F2DA91' }}>Thank You</h1>
            <div className="thank-you-content" style={{ margin: '30px 0', color: 'white', lineHeight: '1.6' }}>
              <p>Your journey to self-discovery is about to begin! We've received your Soul-Led Path assessment.</p>
              <p>Our team is carefully reviewing your responses to create personalized guidance tailored just for you.</p>
              <p>You'll receive an email with next steps within 24-48 hours.</p>
            </div>
            <Link href="/" style={{ background: 'white', color: '#30112E', border: 'none', borderRadius: '24px', padding: '12px 32px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Done</Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper contact-wrapper cosmic-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '110px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px', overflow: 'hidden', position: 'relative' }}>
      <div className="container" style={{ width: '100%', maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ 
            background: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(20px)', 
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)', 
            padding: '50px', 
            borderRadius: '20px', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
        }}>
            {renderStep()}
        </div>
      </div>
    </div>
  );
}
