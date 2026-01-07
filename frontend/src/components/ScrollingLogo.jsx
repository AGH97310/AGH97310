import React from 'react';
import './ScrollingLogo.css';

export const ScrollingLogo = () => {
  const welcomeMessage = "Bienvenue chez NEOTECH TILEWUYU • Services IT • Produits High-Tech & Parfums orientaux";
  
  return (
    <div className="scrolling-logo-banner">
      <div className="scrolling-logo-track">
        {/* Multiple messages for seamless loop */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="welcome-item">
            <span className="welcome-text">{welcomeMessage}</span>
            <span className="welcome-separator">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
