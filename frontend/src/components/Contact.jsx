import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import { 
  sanitizeObject, 
  validateForm, 
  contactFormSchema,
  containsInjection 
} from '../utils/security';
import './Contact.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Configure axios defaults for security
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000; // 10 second timeout

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Secure input handler with sanitization
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // Check for potential injection attempts
    if (containsInjection(value)) {
      toast({
        title: "Erreur de sécurité",
        description: "Caractères non autorisés détectés",
        variant: "destructive"
      });
      return;
    }
    
    // Clear error for this field
    setErrors(prev => ({ ...prev, [name]: undefined }));
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Validate form data with Zod
      const validation = validateForm(formData, contactFormSchema);
      
      if (!validation.success) {
        setErrors(validation.errors);
        toast({
          title: "Erreur de validation",
          description: "Veuillez corriger les erreurs dans le formulaire",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      // Sanitize the validated data
      const sanitizedData = sanitizeObject(validation.data);
      
      // Send to API
      const response = await axios.post(`${API}/contact`, sanitizedData, {
        headers: {
          'Content-Type': 'application/json',
        },
        validateStatus: (status) => status < 500, // Don't throw on 4xx
      });
      
      if (response.status === 429) {
        toast({
          title: "Trop de requêtes",
          description: "Veuillez patienter quelques minutes avant de réessayer.",
          variant: "destructive"
        });
        return;
      }
      
      if (response.data.success) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous contacterons dans les plus brefs délais.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setErrors({});
      } else {
        throw new Error(response.data.detail || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      // Handle validation errors from server
      if (error.response?.status === 400) {
        toast({
          title: "Erreur de validation",
          description: error.response.data.detail || "Données invalides",
          variant: "destructive"
        });
      } else if (error.response?.status === 429) {
        toast({
          title: "Trop de requêtes",
          description: "Veuillez patienter avant de réessayer.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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

  // Service options (should match backend ALLOWED_SERVICES)
  const serviceOptions = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'recuperation', label: 'Récupération Compte - 25€' },
    { value: 'reinstallation', label: 'Réinstallation Windows - 45€' },
    { value: 'nettoyage', label: 'Nettoyage & Optimisation - 40€' },
    { value: 'virus', label: 'Suppression Virus - 45€' },
    { value: 'site', label: 'Site Vitrine Pro - 390€' },
    { value: 'smartphone', label: 'Maintenance Smartphone - 10-15€/mois' },
    { value: 'abonnement', label: 'Abonnement PME - 99€/mois' },
    { value: 'autre', label: 'Autre / Devis personnalisé' },
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
                        <a 
                          href={info.link} 
                          className="contact-info-value"
                          rel="noopener noreferrer"
                        >
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
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Votre nom"
                  autoComplete="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="error-message">
                    <AlertCircle size={14} /> {errors.name}
                  </span>
                )}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  placeholder="votre.email@exemple.com"
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="error-message">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>

              <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  placeholder="+594 ..."
                  autoComplete="tel"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className="error-message">
                    <AlertCircle size={14} /> {errors.phone}
                  </span>
                )}
              </div>

              <div className={`form-group ${errors.service ? 'has-error' : ''}`}>
                <label htmlFor="service">Service souhaité *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.service ? 'true' : 'false'}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span id="service-error" className="error-message">
                    <AlertCircle size={14} /> {errors.service}
                  </span>
                )}
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  maxLength={2000}
                  placeholder="Décrivez votre besoin ou problème..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <span id="message-error" className="error-message">
                    <AlertCircle size={14} /> {errors.message}
                  </span>
                )}
                <small className="char-count">
                  {formData.message.length}/2000 caractères
                </small>
              </div>

              <button 
                type="submit" 
                className="btn-primary btn-submit" 
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                <Send size={20} />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
