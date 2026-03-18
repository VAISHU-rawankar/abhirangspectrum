"use client";

import React from 'react';
import Link from 'next/link';
;

const Footer = () => {
    return (
        <footer style={{ background: '#30112E', color: 'white', padding: '60px 20px 20px' }}>
            <div className="footer-main" style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', gap: '40px', flexWrap: 'wrap' }}>
                <div className="footer-col" style={{ flex: '1 1 300px' }}>
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img src="/favicon/abhirang.jpeg" alt="Abhirang Spectrum" style={{ height: '50px', width: 'auto', borderRadius: '5px' }} />
                        <span style={{ color: '#F2DA91', fontSize: '22px', fontWeight: '800' }}>Abhirang Spectrum</span>
                    </Link>
                    <p style={{ marginTop: '20px', opacity: 0.8, lineHeight: '1.6' }}>
                        Empowering souls through ancient wisdom and modern healing techniques. Your journey to complete transformation starts here.
                    </p>
                </div>
                <div className="footer-col" style={{ flex: '1 1 150px' }}>
                    <h3 style={{ color: '#F2DA91', marginBottom: '20px' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><Link href="/graphology" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Graphology</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/astrology" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Astrology</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/numerology" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Numerology</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/vastu-shastra" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Vastu Shastra</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/quantum-reiki" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Reiki</Link></li>
                    </ul>
                </div>
                <div className="footer-col" style={{ flex: '1 1 150px' }}>
                    <h3 style={{ color: '#F2DA91', marginBottom: '20px' }}>Legal & Information</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><Link href="/privacy-policy" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Privacy Policy</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/terms-of-service" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Terms of Service</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/refund-policy" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Refund Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-col" style={{ flex: '1 1 200px' }}>
                    <h3 style={{ color: '#F2DA91', marginBottom: '20px' }}>Contact</h3>
                    <div className="footer-contact-item" style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'transform 0.3s ease' }}>
                        <img src="/phone.svg" alt="Phone" width="18" style={{ filter: 'brightness(0) invert(1)' }} />
                        <a href="tel:+919309293155" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '15px' }}>+91 93092 93155</a>
                    </div>
                    <div className="footer-contact-item" style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'transform 0.3s ease' }}>
                        <img src="/mail.svg" alt="Mail" width="18" style={{ filter: 'brightness(0) invert(1)' }} />
                        <a href="mailto:abhirangspectrum@gmail.com" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '15px' }}>abhirangspectrum@gmail.com</a>
                    </div>
                </div>
                <div className="footer-col" style={{ flex: '1 1 100px' }}>
                    <h3 style={{ color: '#F2DA91', marginBottom: '20px' }}>Social</h3>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                         <a href="https://instagram.com/abhirang_spectrum" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s ease', display: 'inline-block' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src="/instagram.svg" alt="Instagram" width="24" style={{ filter: 'brightness(0) invert(1)' }} />
                         </a>
                         <a href="https://youtube.com/@abhirangspectrum" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s ease', display: 'inline-block' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src="/utube.svg" alt="YouTube" width="24" style={{ filter: 'brightness(0) invert(1)' }} />
                         </a>
                    </div>
                </div>
            </div>
            <hr style={{ border: 'none', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '40px 0 20px' }} />
            <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px', padding: '0 10px' }}>
                <div style={{ opacity: 0.5, fontSize: '13px', letterSpacing: '1px', textAlign: 'center' }}>
                    &copy; {new Date().getFullYear()} Abhirang Spectrum | All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;


