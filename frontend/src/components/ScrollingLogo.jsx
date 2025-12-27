import React from 'react';
import './ScrollingLogo.css';

const logoVideoUrl = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/952qyhz5_48470EA1-E974-4306-959F-0DDF72AE3B2E-video%202.MP4";

export const ScrollingLogo = () => {
  return (
    <div className="scrolling-logo-banner">
      <div className="scrolling-logo-track">
        {/* Multiple logos for seamless loop */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="logo-item">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="logo-video"
            >
              <source src={logoVideoUrl} type="video/mp4" />
            </video>
            <span className="logo-separator">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
