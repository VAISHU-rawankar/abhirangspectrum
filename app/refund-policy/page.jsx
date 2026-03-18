"use client";

import React from 'react';

const RefundPolicy = () => {
  return (
    <div style={{ background: '#FDF7FE', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(79, 28, 76, 0.05)' }}>
        <h1 style={{ color: '#4F1C4C', fontSize: '36px', marginBottom: '20px', fontWeight: '800' }}>Refund & Cancellation Policy</h1>
        
        <h2 style={{ color: '#4F1C4C', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>1. Consultations and Sessions</h2>
        <p style={{ color: '#6D436A', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
          Because our services (such as Astrology readings, Numerology reports, Graphology analysis, and Reiki sessions) involve direct time, energetic investment, and personal dedication from our practitioners, <strong>all sales for completed consultations are final and non-refundable</strong>.
        </p>

        <h2 style={{ color: '#4F1C4C', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>2. Cancellations and Rescheduling</h2>
        <p style={{ color: '#6D436A', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
          We respect your time and ours. If you need to cancel or reschedule a booked consultation, please notify us at least <strong>24 hours in advance</strong>. Appointments canceled with 24-hour notice can be rescheduled to a future available date without penalty.
        </p>

        <h2 style={{ color: '#4F1C4C', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>3. Missed Appointments</h2>
        <p style={{ color: '#6D436A', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
          If you fail to attend a scheduled session without any prior notice ("no-show"), the appointment will be considered completed, and the fee will be fully forfeited.
        </p>

        <h2 style={{ color: '#4F1C4C', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>4. Exceptions</h2>
        <p style={{ color: '#6D436A', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
          If an emergency arises and we must cancel your session on our end, we will offer a full refund or happily accommodate a swift reschedule according to your preference.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
