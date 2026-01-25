import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { 
  Monitor, Shield, Lock, Zap, MessageCircle, Phone, FileText,
  CheckCircle, Eye, XCircle, Clock, Home, DollarSign, Users,
  MapPin, Headphones, Wrench, RefreshCcw, Mail, Bug, Settings,
  Laptop, AlertTriangle, ArrowLeft
} from 'lucide-react';
import './RemoteITServices.css';

export const RemoteITServices = () => {
  // Dans quels cas intervenir à distance ?
  const useCases = [
    { icon: Laptop, text: 'Ordinateur lent ou bloqué' },
    { icon: Monitor, text: 'Problèmes Windows ou macOS' },
    { icon: AlertTriangle, text: 'Erreurs logicielles' },
    { icon: Settings, text: 'Installation de logiciels' },
    { icon: RefreshCcw, text: 'Problèmes de mises à jour' },
    { icon: Mail, text: 'Paramétrage e-mails' },
    { icon: Bug, text: 'Suppression virus / malwares' }
  ];

  // Comment fonctionne le dépannage ?
  const processSteps = [
    { number: '1', title: 'Prise de contact', desc: 'Analyse rapide du problème' },
    { number: '2', title: 'Connexion sécurisée', desc: 'Accès avec votre accord' },
    { number: '3', title: 'Diagnostic & intervention', desc: 'Résolution en direct' },
    { number: '4', title: 'Explications & conseils', desc: 'Vous comprenez tout' }
  ];

  // Sécurité & confidentialité
  const securityPoints = [
    { icon: Lock, text: 'Connexion sécurisée', highlight: true },
    { icon: Eye, text: 'Vous voyez tout en temps réel', highlight: true },
    { icon: XCircle, text: 'Aucun accès sans votre autorisation', highlight: false },
    { icon: Shield, text: 'Confidentialité totale des données', highlight: false }
  ];

  // Avantages du dépannage à distance
  const advantages = [
    { icon: Zap, title: 'Intervention rapide', desc: 'Résolution souvent en moins d\'1h' },
    { icon: Home, title: 'Pas de déplacement', desc: 'Restez chez vous' },
    { icon: DollarSign, title: 'Coût réduit', desc: 'Pas de frais de déplacement' },
    { icon: Clock, title: 'Gain de temps', desc: 'Disponible rapidement' }
  ];

  // Pourquoi nous choisir
  const whyChooseUs = [
    { icon: Headphones, title: 'Accompagnement humain', desc: 'Écoute et patience' },
    { icon: Wrench, title: 'Expertise technique', desc: 'Problèmes Windows & Mac' },
    { icon: MapPin, title: 'Service local', desc: 'Réactif en Guyane' },
    { icon: MessageCircle, title: 'Explications claires', desc: 'Pas de jargon' }
  ];

  // Composant CTA réutilisable
  const CTAButtons = ({ variant = 'default' }) => (
    <div className={`rit-cta-buttons ${variant}`} data-testid="rit-cta-buttons">
      <Button 
        asChild
        size="lg"
        className="rit-cta-whatsapp"
        data-testid="rit-whatsapp-btn"
      >
        <a 
          href="https://wa.me/594694458584?text=Bonjour,%20j'ai%20besoin%20d'aide%20pour%20un%20problème%20informatique" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
          <small>Assistance rapide</small>
        </a>
      </Button>
      <Button 
        asChild
        size="lg"
        className="rit-cta-phone"
        data-testid="rit-phone-btn"
      >
        <a href="tel:+594694458584">
          <Phone className="h-5 w-5" />
          <span>Appeler</span>
          <small>Maintenant</small>
        </a>
      </Button>
    </div>
  );

  return (
    <section className="rit-section" data-testid="remote-it-section">
      
      {/* ========== HERO - VISIBLE SANS SCROLL ========== */}
      <div className="rit-hero" data-testid="rit-hero">
        <div className="rit-hero-content">
          <h1 className="rit-hero-title" data-testid="rit-hero-title">
            Dépannage informatique
            <span>à distance</span>
          </h1>
          <p className="rit-hero-tagline">Assistance rapide et sécurisée</p>
          <p className="rit-hero-subtitle">
            Un problème informatique ? Nous intervenons <strong>à distance</strong>, 
            rapidement et en toute sécurité.
          </p>
          <CTAButtons variant="hero" />
        </div>
      </div>

      {/* ========== DANS QUELS CAS INTERVENIR ? ========== */}
      <div className="rit-block" data-testid="rit-usecases-block">
        <h2 className="rit-block-title">
          <Monitor className="h-5 w-5" />
          Dans quels cas intervenir à distance ?
        </h2>
        <div className="rit-usecases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="rit-usecase-item" data-testid={`rit-usecase-${index}`}>
              <useCase.icon className="h-5 w-5" />
              <span>{useCase.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== COMMENT ÇA FONCTIONNE ? ========== */}
      <div className="rit-block rit-process" data-testid="rit-process-block">
        <h2 className="rit-block-title">
          <Settings className="h-5 w-5" />
          Comment ça fonctionne ?
        </h2>
        <p className="rit-block-subtitle">Un processus simple et rassurant</p>
        <div className="rit-process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="rit-process-step" data-testid={`rit-step-${index}`}>
              <div className="rit-step-number">{step.number}</div>
              <div className="rit-step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== CTA MILIEU ========== */}
      <div className="rit-cta-section" data-testid="rit-cta-middle">
        <p className="rit-cta-text">Besoin d'aide maintenant ?</p>
        <CTAButtons variant="middle" />
      </div>

      {/* ========== SÉCURITÉ & CONFIDENTIALITÉ ========== */}
      <div className="rit-block rit-security" data-testid="rit-security-block">
        <h2 className="rit-block-title">
          <Shield className="h-5 w-5" />
          Sécurité & Confidentialité
        </h2>
        <p className="rit-block-subtitle">Votre tranquillité est notre priorité</p>
        <div className="rit-security-grid">
          {securityPoints.map((point, index) => (
            <div 
              key={index} 
              className={`rit-security-item ${point.highlight ? 'highlight' : ''}`}
              data-testid={`rit-security-${index}`}
            >
              <point.icon className="h-5 w-5" />
              <span>{point.text}</span>
            </div>
          ))}
        </div>
        <div className="rit-security-note">
          <Eye className="h-4 w-4" />
          <p>Vous gardez le contrôle total pendant toute l'intervention.</p>
        </div>
      </div>

      {/* ========== AVANTAGES DU DÉPANNAGE À DISTANCE ========== */}
      <div className="rit-block rit-advantages" data-testid="rit-advantages-block">
        <h2 className="rit-block-title">
          <Zap className="h-5 w-5" />
          Pourquoi choisir le dépannage à distance ?
        </h2>
        <div className="rit-advantages-grid">
          {advantages.map((adv, index) => (
            <div key={index} className="rit-advantage-item" data-testid={`rit-advantage-${index}`}>
              <div className="rit-advantage-icon">
                <adv.icon className="h-5 w-5" />
              </div>
              <div className="rit-advantage-content">
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== POURQUOI NEOTECH ? ========== */}
      <div className="rit-block rit-why" data-testid="rit-why-block">
        <h2 className="rit-block-title">
          <Users className="h-5 w-5" />
          Pourquoi choisir NEOTECH ?
        </h2>
        <div className="rit-why-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="rit-why-item" data-testid={`rit-why-${index}`}>
              <div className="rit-why-icon">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="rit-why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== PROMESSE ========== */}
      <div className="rit-promise" data-testid="rit-promise">
        <p>
          <CheckCircle className="h-4 w-4" />
          "Je me connecte, je diagnostique, je règle. Paiement après résultat."
        </p>
      </div>

      {/* ========== CTA FINAL ========== */}
      <div className="rit-cta-final" data-testid="rit-cta-final">
        <h2>Un problème informatique ?</h2>
        <p>Contactez-nous pour une assistance immédiate</p>
        <CTAButtons variant="final" />
        <Button 
          asChild
          variant="outline"
          size="lg"
          className="rit-cta-devis"
          data-testid="rit-devis-btn"
        >
          <a 
            href="https://wa.me/594694458584?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20un%20dépannage%20informatique" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FileText className="h-5 w-5" />
            Demande de devis rapide
          </a>
        </Button>
      </div>

      {/* ========== MENTION LÉGALE ========== */}
      <div className="rit-legal" data-testid="rit-legal">
        <p>
          Intervention à distance uniquement. Pour les pannes matérielles, 
          contactez-nous pour un diagnostic.
        </p>
      </div>

    </section>
  );
};
