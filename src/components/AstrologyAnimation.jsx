"use client";

import React from 'react';
import '../styles/astrology-animation.css';

const AstrologyAnimation = ({ side = 'left' }) => {
  const signs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const planets = ['☉', '☽', '☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇'];
  
  const containerClass = `astrology-animation-container astrology-side-${side}`;

  return (
    <div className={containerClass}>
      <div className="astrology-wheel">
        {signs.map((sign, index) => {
          const rotation = index * 30;
          return (
            <div 
              key={index} 
              className="zodiac-sign-container"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="zodiac-sign">{sign}</div>
            </div>
          );
        })}
      </div>
      
      <div className="astrology-wheel-inner">
        {planets.map((planet, index) => {
          const rotation = index * 36;
          return (
            <div 
              key={index} 
              className="planet-container"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="planet-symbol">{planet}</div>
            </div>
          );
        })}
        
        {/* Subtle geometric connecting lines */}
        <div className="sacred-geometry inner-geom-1"></div>
        <div className="sacred-geometry inner-geom-2"></div>
        <div className="sacred-geometry inner-geom-3"></div>
      </div>
      
      <div className="astrology-sun-center">
        <div className="center-glow"></div>
      </div>
    </div>
  );
};

export default AstrologyAnimation;
