"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const symbols = [
  '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓',
  '☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇',
  '✧', '✦', '⚝', '☪', '❂'
];

export default function FloatingAstrologyBackground() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random positions only on the client to avoid hydration mismatch
    const isMobile = window.innerWidth <= 768;
    const numElements = isMobile ? 18 : 40;

    const generated = Array.from({ length: numElements }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: isMobile ? (Math.random() * 15 + 12) : (Math.random() * 25 + 15), // smaller on mobile
      duration: Math.random() * 15 + 15, // between 15s and 30s
      delay: Math.random() * 5,
      opacity: isMobile ? (Math.random() * 0.25 + 0.05) : (Math.random() * 0.4 + 0.1) // lower opacity on mobile
    }));
    setElements(generated);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0, // Behind the gradient
      pointerEvents: 'none'
    }}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: el.opacity,
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360]
          }}
          transition={{
            opacity: { duration: 1, delay: el.delay },
            y: { duration: el.duration, repeat: Infinity, ease: "easeInOut" },
            x: { duration: el.duration * 1.2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: el.duration * 2, repeat: Infinity, ease: "linear" }
          }}
          style={{
            position: 'absolute',
            left: el.left,
            top: el.top,
            fontSize: `${el.size}px`,
            color: '#F2DA91', // Match theme gold
            textShadow: '0 0 10px rgba(242, 218, 145, 0.4)',
            userSelect: 'none'
          }}
        >
          {el.symbol}
        </motion.div>
      ))}
    </div>
  );
}
