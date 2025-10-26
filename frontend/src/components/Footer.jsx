import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pourquoi Nous', href: '#pourquoi' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Récupération Compte',
    'Réinstallation Windows',
    'Nettoyage PC',
    'Suppression Virus',
    'Site Vitrine',
    'Abonnement PME'
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
              Luxe. Digital. Local.
            </p>
            <p className="footer-description">
              Votre partenaire tech de confiance pour l'assistance IT et digitale à distance à Kourou et dans toute la Guyane.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
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

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} NEOTECH T+LEWUYU. Tous droits réservés.
            </p>
            <p className="footer-credit">
              Fait avec ❤️ à Kourou
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};