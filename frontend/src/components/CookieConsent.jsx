import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Settings, Check, Shield } from 'lucide-react';
import './CookieConsent.css';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always enabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(consent);
        setPreferences(savedPrefs);
      } catch (e) {
        setShowBanner(true);
      }
    }

    // Listen for cookie settings open event
    const handleOpenSettings = () => {
      setShowSettings(true);
      setShowBanner(true);
    };
    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const savePreferences = (prefs) => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Disable analytics if not consented
    if (!prefs.analytics && window.posthog) {
      window.posthog.opt_out_capturing();
    } else if (prefs.analytics && window.posthog) {
      window.posthog.opt_in_capturing();
    }
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cookie-overlay" onClick={() => !showSettings && setShowBanner(false)} />
      
      {/* Main Banner */}
      <div className={`cookie-banner ${showSettings ? 'expanded' : ''}`}>
        <div className="cookie-banner-header">
          <div className="cookie-icon-wrapper">
            <Cookie size={24} />
          </div>
          <h3>🍪 Gestion des cookies</h3>
          <button 
            className="cookie-close-btn"
            onClick={() => setShowBanner(false)}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {!showSettings ? (
          <>
            <div className="cookie-content">
              <p>
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                Certains sont essentiels au fonctionnement du site (panier, sécurité), 
                d'autres nous aident à comprendre comment vous l'utilisez.
              </p>
              <p className="cookie-payment-notice">
                <Shield size={16} />
                <span>
                  <strong>Paiements sécurisés :</strong> Les cookies PayPal sont nécessaires 
                  pour sécuriser vos transactions et ne stockent aucune donnée bancaire sur notre site.
                </span>
              </p>
            </div>

            <div className="cookie-actions">
              <button className="cookie-btn accept-all" onClick={acceptAll}>
                <Check size={18} />
                Tout accepter
              </button>
              <button className="cookie-btn reject" onClick={rejectNonEssential}>
                Refuser les non-essentiels
              </button>
              <button className="cookie-btn settings" onClick={() => setShowSettings(true)}>
                <Settings size={18} />
                Personnaliser
              </button>
            </div>

            <div className="cookie-links">
              <Link to="/politique-cookies">Politique de cookies</Link>
              <span>•</span>
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-settings-content">
              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-info">
                    <h4>Cookies essentiels</h4>
                    <p>Indispensables au fonctionnement du site (panier, session, sécurité, paiement PayPal)</p>
                  </div>
                  <div className="category-toggle always-on">
                    <span>Toujours actif</span>
                  </div>
                </div>
              </div>

              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-info">
                    <h4>Cookies analytiques</h4>
                    <p>Nous aident à comprendre comment vous utilisez le site (PostHog)</p>
                  </div>
                  <label className="category-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              <div className="cookie-category">
                <div className="category-header">
                  <div className="category-info">
                    <h4>Cookies marketing</h4>
                    <p>Permettent de vous proposer des publicités ciblées (non utilisés actuellement)</p>
                  </div>
                  <label className="category-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="cookie-actions">
              <button className="cookie-btn accept-all" onClick={acceptAll}>
                Tout accepter
              </button>
              <button className="cookie-btn save" onClick={saveCustomPreferences}>
                Enregistrer mes choix
              </button>
              <button className="cookie-btn back" onClick={() => setShowSettings(false)}>
                Retour
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
