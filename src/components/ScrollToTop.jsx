"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // Scroll to top on route change
    useEffect(() => {
        // Prevent aggressive browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const forceScroll = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // Fire 1: Immediate
        forceScroll();
        
        // Fire subsequent scrolls handling potential Suspense load times
        const timeouts = [
            setTimeout(forceScroll, 10),
            setTimeout(forceScroll, 50),
            setTimeout(forceScroll, 150),
            setTimeout(forceScroll, 300),
            setTimeout(forceScroll, 600)
        ];

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [pathname]);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div 
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 1000,
                cursor: 'pointer',
                background: '#4F1C4C',
                color: '#F2DA91',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: isVisible ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                fontSize: '24px'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = '#6D436A';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#4F1C4C';
            }}
        >
            ↑
        </div>
    );
};

export default ScrollToTop;
