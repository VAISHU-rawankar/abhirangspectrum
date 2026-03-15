import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Graphology', path: '/graphology' },
        { name: 'Astrology', path: '/astrology' },
        { name: 'Numerology', path: '/numerology' },
        { name: 'Vastu Shastra', path: '/vastu-shastra' },
        { name: 'Reiki', path: '/quantum-reiki' },
        { name: 'Blogs', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header>
            <div className={`mobile-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} 
                 style={{ 
                    position: 'fixed', 
                    top: '15px', 
                    right: '15px', 
                    zIndex: 1000, 
                    cursor: 'pointer', 
                    width: '40px', 
                    height: '40px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    background: 'var(--primary-purple)', 
                    borderRadius: '8px', 
                    padding: '8px', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' 
                 }}>
                <img src={isMenuOpen ? "/close.svg" : "/ham.svg"} alt="Menu" width="24" height="24" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
                 style={{ 
                    display: isMenuOpen ? 'flex' : 'none', 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    background: 'var(--primary-purple)', 
                    zIndex: 999, 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    boxSizing: 'border-box', 
                    overflowY: 'auto',
                    transition: 'all 0.3s ease'
                 }}>
                <ul className="mobile-nav-links" style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%', textAlign: 'center' }}>
                    {navItems.map(item => (
                        <li key={item.path} style={{ margin: '15px 0' }}>
                            <Link to={item.path} onClick={closeMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <nav className="desktop-nav" style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(244, 222, 250, 0.95)', backdropFilter: 'blur(10px)', zIndex: 10, padding: '0 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div className="nav-container" style={{ display: 'flex', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', height: '70px', justifyContent: 'space-between' }}>
                    <div className="logo-container">
                        <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src="/favicon/abhirang.jpeg" alt="Abhirang Spectrum" style={{ height: '45px', width: 'auto', borderRadius: '4px' }} />
                            <span style={{ color: 'var(--primary-purple)', fontSize: '20px', fontWeight: '800' }}>Abhirang Spectrum</span>
                        </Link>
                    </div>
                    <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
                        {navItems.map(item => (
                            <li key={item.path}>
                                <Link to={item.path} style={{ 
                                    textDecoration: 'none', 
                                    color: 'var(--primary-purple)', 
                                    fontWeight: location.pathname === item.path ? '800' : '500', 
                                    fontSize: '15px',
                                    padding: '10px 0',
                                    borderBottom: location.pathname === item.path ? '2px solid var(--primary-purple)' : '2px solid transparent',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;


