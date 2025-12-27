import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/594694458584"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-tooltip">
        Discutez avec nous !
      </span>
    </a>
  );
};
