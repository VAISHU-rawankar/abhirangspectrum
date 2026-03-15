import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

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
          <div className="form-step active">
            <h1 className="form-title">The Soul-Led Path</h1>
            <p className="form-subtitle text-left">Begin your journey of self-discovery with our personalized assessment.</p>
            
            <div className="form-fields">
              <div className="row">
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="field-group">
                  <label htmlFor="email">Email ID</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="field-group">
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="button-group">
              <button type="button" className="btn btn-primary" onClick={nextStep}>
                Continue
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-step active">
            <h1 className="form-title">Age Frequency</h1>
            <p className="step-indicator">Step 1/4</p>
            <div className="question-section">
              <h3 className="question">Choose your current soul-stage:</h3>
              <div className="radio-group">
                {['13-24', '25-34', '35-44', '45-54', '55+'].map(val => (
                  <label key={val} className="radio-option">
                    <input type="radio" name="age" value={val} checked={formData.age === val} onChange={() => handleRadioChange('age', val)} />
                    <span className="radio-custom"></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>
              <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step active">
            <h1 className="form-title">Energy Check-In</h1>
            <p className="step-indicator">Step 2/4</p>
            <div className="question-section">
              <h3 className="question">What are you currently feeling?</h3>
              <div className="radio-group">
                {['Foggy', 'Stuck', 'Low drive', 'Fearful', 'Confused'].map(val => (
                  <label key={val} className="radio-option">
                    <input type="radio" name="energy" value={val.toLowerCase()} checked={formData.energy === val.toLowerCase()} onChange={() => handleRadioChange('energy', val.toLowerCase())} />
                    <span className="radio-custom"></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>
              <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step active">
            <h1 className="form-title">Life Area Needing Healing</h1>
            <p className="step-indicator">Step 3/4</p>
            <div className="question-section">
              <h3 className="question">Choose your challenge:</h3>
              <div className="radio-group">
                {['Academics', 'Career', 'Finances', 'Relationships', 'Health', 'Purpose'].map(val => (
                  <label key={val} className="radio-option">
                    <input type="radio" name="challenge" value={val.toLowerCase()} checked={formData.challenge === val.toLowerCase()} onChange={() => handleRadioChange('challenge', val.toLowerCase())} />
                    <span className="radio-custom"></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>
              <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step active">
            <h1 className="form-title">Purpose</h1>
            <p className="step-indicator">Step 4/4</p>
            <div className="question-section">
              <h3 className="question">What do you wish to feel more of?</h3>
              <div className="radio-group">
                {['Calm', 'Confidence', 'Clarity', 'Abundance', 'Self-Love'].map(val => (
                  <label key={val} className="radio-option">
                    <input type="radio" name="purpose" value={val.toLowerCase()} checked={formData.purpose === val.toLowerCase()} onChange={() => handleRadioChange('purpose', val.toLowerCase())} />
                    <span className="radio-custom"></span>
                    <span className="radio-text">{val}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>
              <button type="button" className="btn btn-submit" onClick={nextStep}>Submit</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-step active align-center" style={{ textAlign: 'center' }}>
            <h1 className="form-title">Thank You</h1>
            <div className="thank-you-content" style={{ margin: '30px 0' }}>
              <p>Your journey to self-discovery is about to begin! We've received your Soul-Led Path assessment.</p>
              <p>Our team is carefully reviewing your responses to create personalized guidance tailored just for you.</p>
              <p>You'll receive an email with next steps within 24-48 hours.</p>
            </div>
            <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Done</Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper contact-wrapper" style={{ padding: '120px 20px', minHeight: '80vh', background: 'var(--bg-pale)' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-container">
          <div className="form-card mobile-form-card" style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
