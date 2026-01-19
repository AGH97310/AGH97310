import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProduitsOpen, setIsProduitsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsProduitsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_cyberpunk-store-2/artifacts/8l81voq2_3.png" 
            alt="NEOTECH TILEWUYU Logo" 
            className="logo-image"
          />
        </Link>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              Services
              <ChevronDown size={16} className="dropdown-arrow" />
            </button>
            <div className="dropdown-menu">
              <Link to="/depannage-distance" className="dropdown-item">
                Dépannage à Distance
              </Link>
              <Link to="/recuperation-donnees" className="dropdown-item">
                Récupération de Données
              </Link>
              <Link to="/creation-site-vitrine" className="dropdown-item">
                Création Site Vitrine
              </Link>
            </div>
          </div>

          {/* Produits Dropdown */}
          <div 
            className={`nav-dropdown ${isProduitsOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsProduitsOpen(true)}
            onMouseLeave={() => setIsProduitsOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              Produits
              <ChevronDown size={16} className="dropdown-arrow" />
            </button>
            <div className="dropdown-menu">
              <Link to="/gaming-accessoires" className="dropdown-item">
                Gaming & Accessoires
              </Link>
              <Link to="/smartphones-tablettes" className="dropdown-item">
                Smartphones & Tablettes
              </Link>
              <Link to="/parfumerie-orientale" className="dropdown-item">
                Parfumerie Orientale
              </Link>
            </div>
          </div>

          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <a href="tel:+594694458584" className="btn-primary header-cta">
            <Phone size={18} />
            Appeler
          </a>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-link">Accueil</Link>
          
          <div className="mobile-nav-group">
            <span className="mobile-nav-group-title">Services</span>
            <Link to="/depannage-distance" className="mobile-nav-link sub">Dépannage à Distance</Link>
            <Link to="/recuperation-donnees" className="mobile-nav-link sub">Récupération de Données</Link>
            <Link to="/creation-site-vitrine" className="mobile-nav-link sub">Création Site Vitrine</Link>
          </div>

          <div className="mobile-nav-group">
            <span className="mobile-nav-group-title">Produits</span>
            <Link to="/gaming-accessoires" className="mobile-nav-link sub">Gaming & Accessoires</Link>
            <Link to="/smartphones-tablettes" className="mobile-nav-link sub">Smartphones & Tablettes</Link>
            <Link to="/parfumerie-orientale" className="mobile-nav-link sub">Parfumerie Orientale</Link>
          </div>

          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
        </div>
      )}
    </header>
  );
};
