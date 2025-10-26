import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './Contact.css';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Form submitted:', formData);
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+594 694 45 85 84',
      link: 'tel:+594694458584',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'neotech.tilewuyu@gmail.com',
      link: 'mailto:neotech.tilewuyu@gmail.com',
      color: 'gray'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Kourou & Guyane entière',
      link: null,
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-badge mono-text">Contact</span>
          <h2 className="heading-1">Commençons Votre Projet</h2>
          <p className="body-large section-subtitle">
            Diagnostic GRATUIT 15 min • Réponse rapide garantie
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="heading-3">Contactez-Nous</h3>
              <p className="contact-intro">
                Besoin d'assistance IT ou d'un devis ? Notre équipe est disponible pour répondre à toutes vos questions.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className={`contact-icon-wrapper ${info.color}`}>
                      <info.icon size={20} />
                    </div>
                    <div className="contact-info-details">
                      <div className="contact-info-title">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="contact-info-value">
                          {info.value}
                        </a>
                      ) : (
                        <div className="contact-info-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="whatsapp-cta">
                <a 
                  href="https://wa.me/594694458584" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary btn-whatsapp"
                >
                  <Phone size={20} />
                  Contacter via WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+594 ..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service souhaité *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="recuperation">Récupération Compte - 25€</option>
                  <option value="reinstallation">Réinstallation Windows - 45€</option>
                  <option value="nettoyage">Nettoyage & Optimisation - 40€</option>
                  <option value="virus">Suppression Virus - 45€</option>
                  <option value="site">Site Vitrine Pro - 150€</option>
                  <option value="smartphone">Maintenance Smartphone - 10-15€/mois</option>
                  <option value="abonnement">Abonnement PME - 99€/mois</option>
                  <option value="autre">Autre / Devis personnalisé</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Décrivez votre besoin ou problème..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-submit">
                <Send size={20} />
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};