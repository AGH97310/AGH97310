import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { 
  HardDrive, Monitor, Usb, Cpu, 
  MessageCircle, Phone, FileText,
  CheckCircle, Lock, MapPin, Users,
  Zap, Search, Shield, RefreshCcw,
  Image, FileVideo, File, ArrowLeft
} from 'lucide-react';
import './DataRecoverySection.css';

export const DataRecoverySection = () => {
  // Ce que nous récupérons
  const supportedDevices = [
    { icon: HardDrive, label: 'Disques durs internes & externes' },
    { icon: Zap, label: 'SSD' },
    { icon: Usb, label: 'Clés USB' },
    { icon: Shield, label: 'Cartes SD / microSD' },
    { icon: Monitor, label: 'PC & Mac' },
    { icon: Image, label: 'Photos, vidéos, documents' }
  ];

  // Problèmes courants
  const commonProblems = [
    'Suppression accidentelle',
    'Disque dur non reconnu',
    'Ordinateur qui ne démarre plus',
    'Formatage par erreur',
    'Fichiers corrompus ou virus'
  ];

  // Notre méthode
  const methodSteps = [
    { number: '1', title: 'Diagnostic', desc: 'Analyse du support et des dégâts' },
    { number: '2', title: 'Évaluation', desc: 'Vérification des possibilités' },
    { number: '3', title: 'Récupération', desc: 'Processus sécurisé sans risque' },
    { number: '4', title: 'Restitution', desc: 'Données sur support sain' }
  ];

  // Pourquoi nous faire confiance
  const trustReasons = [
    { icon: Lock, title: 'Confidentialité totale', desc: 'Vos données restent privées' },
    { icon: Cpu, title: 'Méthodes professionnelles', desc: 'Outils adaptés à chaque cas' },
    { icon: MapPin, title: 'Intervention locale', desc: 'Basés en Guyane' },
    { icon: Users, title: 'Accompagnement humain', desc: 'Conseils clairs et honnêtes' }
  ];

  // Composant CTA réutilisable
  const CTAButtons = ({ variant = 'default' }) => (
    <div className={`dr-cta-buttons ${variant}`} data-testid="dr-cta-buttons">
      <Button 
        asChild
        size="lg"
        className="dr-cta-whatsapp"
        data-testid="dr-whatsapp-btn"
      >
        <a 
          href="https://wa.me/594694458584" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
          <small>Réponse rapide</small>
        </a>
      </Button>
      <Button 
        asChild
        size="lg"
        className="dr-cta-phone"
        data-testid="dr-phone-btn"
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
    <section className="dr-section" data-testid="data-recovery-section">
      
      {/* Back Navigation */}
      <Link to="/" className="dr-back-btn" data-testid="dr-back-btn">
        <ArrowLeft className="h-4 w-4" />
        <span>Retour à l'accueil</span>
      </Link>

      {/* ========== HERO - VISIBLE SANS SCROLL ========== */}
      <div className="dr-hero" data-testid="dr-hero">
        <div className="dr-hero-content">
          <h1 className="dr-hero-title" data-testid="dr-hero-title">
            Récupération de données
            <span>Disques, clés USB, SSD</span>
          </h1>
          <p className="dr-hero-subtitle">
            Fichiers supprimés, disque en panne ou non reconnu ?
            <strong> Nous analysons et récupérons vos données.</strong>
          </p>
          <CTAButtons variant="hero" />
        </div>
      </div>

      {/* ========== CE QUE NOUS RÉCUPÉRONS ========== */}
      <div className="dr-block" data-testid="dr-devices-block">
        <h2 className="dr-block-title">
          <HardDrive className="h-5 w-5" />
          Ce que nous récupérons
        </h2>
        <div className="dr-devices-grid">
          {supportedDevices.map((device, index) => (
            <div key={index} className="dr-device-item" data-testid={`dr-device-${index}`}>
              <device.icon className="h-5 w-5" />
              <span>{device.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== PROBLÈMES COURANTS ========== */}
      <div className="dr-block dr-problems" data-testid="dr-problems-block">
        <h2 className="dr-block-title">
          <Search className="h-5 w-5" />
          Problèmes courants
        </h2>
        <ul className="dr-problems-list">
          {commonProblems.map((problem, index) => (
            <li key={index} data-testid={`dr-problem-${index}`}>
              <CheckCircle className="h-4 w-4" />
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== CTA MILIEU ========== */}
      <div className="dr-cta-section" data-testid="dr-cta-middle">
        <p className="dr-cta-text">Besoin d'aide maintenant ?</p>
        <CTAButtons variant="middle" />
      </div>

      {/* ========== NOTRE MÉTHODE ========== */}
      <div className="dr-block dr-method" data-testid="dr-method-block">
        <h2 className="dr-block-title">
          <RefreshCcw className="h-5 w-5" />
          Notre méthode
        </h2>
        <p className="dr-method-subtitle">Simple & rassurante</p>
        <div className="dr-method-steps">
          {methodSteps.map((step, index) => (
            <div key={index} className="dr-method-step" data-testid={`dr-step-${index}`}>
              <div className="dr-step-number">{step.number}</div>
              <div className="dr-step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== POURQUOI NOUS FAIRE CONFIANCE ========== */}
      <div className="dr-block dr-trust" data-testid="dr-trust-block">
        <h2 className="dr-block-title">
          <Shield className="h-5 w-5" />
          Pourquoi nous faire confiance
        </h2>
        <div className="dr-trust-grid">
          {trustReasons.map((reason, index) => (
            <div key={index} className="dr-trust-item" data-testid={`dr-trust-${index}`}>
              <div className="dr-trust-icon">
                <reason.icon className="h-5 w-5" />
              </div>
              <div className="dr-trust-content">
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== CTA FINAL ========== */}
      <div className="dr-cta-final" data-testid="dr-cta-final">
        <h2>Vous avez perdu des données ?</h2>
        <p>Contactez-nous maintenant pour un diagnostic gratuit</p>
        <CTAButtons variant="final" />
        <Button 
          asChild
          variant="outline"
          size="lg"
          className="dr-cta-devis"
          data-testid="dr-devis-btn"
        >
          <a 
            href="https://wa.me/594694458584?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20une%20récupération%20de%20données" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FileText className="h-5 w-5" />
            Demande de devis gratuit
          </a>
        </Button>
      </div>

      {/* ========== MENTION LÉGALE ========== */}
      <div className="dr-legal" data-testid="dr-legal">
        <p>
          La récupération de données dépend de l'état du support. 
          Diagnostic professionnel avant toute intervention.
        </p>
      </div>

    </section>
  );
};
