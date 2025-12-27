import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Music2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pourquoi Nous', href: '#pourquoi' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Site Vitrine Pro',
    'Dépannage IT',
    'Parfums Orientaux',
    'Console Gaming',
    'Services Particuliers',
    'Services Professionnels'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/bpvlgzxo_3.png" 
                alt="NEOTECH T+LEWUYU" 
                className="footer-logo-image"
              />
            </div>
            <p className="footer-tagline">
              <Zap className="inline h-4 w-4 mr-2" />
              Votre tech, livrée chez vous
            </p>
            <p className="footer-slogan">
              Luxe. Digital. Local.
            </p>
            <p className="footer-description">
              Assistance IT & digitale à distance pour particuliers et professionnels à Kourou et toute la Guyane.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/16D7VxUKWL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/neotech_tilewuyu?igsh=b3Fwa2ZoZGt5c3hy&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@neotech.tilewuyu?_t=ZN-90vbGNeNm3q&_r=1" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-title">Nos Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <a href="tel:+594694458584" className="contact-link">
                <Phone size={18} />
                +594 694 45 85 84
              </a>
              <a href="mailto:neotech.tilewuyu@gmail.com" className="contact-link">
                <Mail size={18} />
                neotech.tilewuyu@gmail.com
              </a>
              <div className="contact-link">
                <MapPin size={18} />
                Kourou, Guyane Française
              </div>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="footer-legal-section">
          <div className="footer-legal-header">
            <h4 className="footer-legal-title">Informations légales</h4>
          </div>
          <div className="footer-legal-grid">
            <div className="footer-legal-block">
              <p className="footer-legal-company"><strong>NEOTECH TILEWUYU</strong></p>
              <p className="footer-legal-text">Micro-entreprise</p>
              <p className="footer-legal-text"><strong>SIRET:</strong> 940 487 747 00013</p>
              <p className="footer-legal-text"><strong>Code APE:</strong> 4619B</p>
              <p className="footer-legal-text footer-legal-address">
                <strong>Domiciliation:</strong> LegalPlace, 60 rue François 1er, 75008 Paris
              </p>
            </div>

            <div className="footer-legal-block">
              <h5 className="footer-legal-subtitle">Propriété intellectuelle</h5>
              <p className="footer-legal-text footer-legal-small">
                Le contenu du site (textes, images, logo, éléments graphiques, etc.) est la propriété exclusive 
                de NEOTECH TILEWUYU, sauf mention contraire. Toute reproduction ou utilisation non autorisée 
                est strictement interdite.
              </p>
            </div>

            <div className="footer-legal-block">
              <h5 className="footer-legal-subtitle">Protection des données (RGPD)</h5>
              <p className="footer-legal-text footer-legal-small">
                Les informations collectées via le site sont utilisées uniquement pour répondre aux demandes 
                de contact et ne sont jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de 
                rectification et de suppression de vos données (article 34 de la loi Informatique et Libertés).
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span>© {currentYear} NEOTECH T+LEWUYU</span>
            <span className="footer-separator">•</span>
            <span>Tous droits réservés</span>
            <span className="footer-separator">•</span>
            <Link to="/cgv" className="footer-bottom-link">
              CGV
            </Link>
            <span className="footer-separator">•</span>
            <Link to="/mentions-legales" className="footer-bottom-link">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};