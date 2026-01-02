import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Zap, Shield, Key, Monitor, Wifi, Printer, 
  HardDrive, Mail, AppWindow, Lock, MessageCircle,
  Clock, DollarSign, Heart, Car
} from 'lucide-react';
import './RemoteITServices.css';

export const RemoteITServices = () => {
  const services = [
    {
      icon: '🧠',
      number: '1️⃣',
      title: 'PROBLÈMES DE PERFORMANCE & LENTEUR',
      features: [
        'PC lent / qui rame',
        'Démarrage très long',
        'Nettoyage fichiers inutiles',
        'Optimisation disque (HDD / SSD)',
        'Gestion des programmes au démarrage',
        'Nettoyage registre (selon OS)'
      ]
    },
    {
      icon: '🛡️',
      number: '2️⃣',
      title: 'VIRUS, MALWARES & SÉCURITÉ',
      features: [
        'Détection et suppression de virus',
        'Suppression malwares / adwares',
        'Analyse antivirus approfondie',
        'Installation antivirus pro',
        'Sécurisation navigateur',
        'Paramétrage pare-feu logiciel',
        'Conseils cybersécurité personnalisés'
      ]
    },
    {
      icon: '🔑',
      number: '3️⃣',
      title: 'COMPTES & ACCÈS BLOQUÉS',
      subtitle: '(HORS PIRATAGE COMPLEXE)',
      warning: 'Uniquement sur preuve de propriété',
      features: [
        'Récupération Gmail',
        'Récupération Facebook',
        'Récupération Instagram',
        'Problèmes mot de passe Windows',
        'Problèmes session utilisateur',
        'Problèmes compte Microsoft / Google'
      ]
    },
    {
      icon: '🪟',
      number: '4️⃣',
      title: 'SYSTÈMES D\'EXPLOITATION',
      subtitle: '(WINDOWS / MAC / LINUX)',
      features: [
        'Installation Windows à distance',
        'Réinstallation Windows',
        'Mise à jour système',
        'Réparation erreurs Windows',
        'Problèmes écran bleu (BSOD – analyse)',
        'Création / gestion comptes utilisateurs',
        'Paramétrage OS après installation'
      ]
    },
    {
      icon: '🌐',
      number: '5️⃣',
      title: 'RÉSEAU & INTERNET',
      subtitle: '(NIVEAU LOGICIEL)',
      features: [
        'Problème Wi-Fi (logiciel)',
        'Paramétrage carte réseau',
        'Conflit IP',
        'DNS / DHCP (poste client)',
        'VPN client',
        'Accès réseau entreprise',
        'Dépannage imprimante réseau'
      ]
    },
    {
      icon: '🖨️',
      number: '6️⃣',
      title: 'IMPRIMANTES & PÉRIPHÉRIQUES',
      features: [
        'Installation imprimante',
        'Problème impression',
        'File d\'attente bloquée',
        'Pilotes imprimante',
        'Scanner non reconnu'
      ]
    },
    {
      icon: '📂',
      number: '7️⃣',
      title: 'DONNÉES & SAUVEGARDES',
      features: [
        'Sauvegarde fichiers',
        'Restauration données',
        'Configuration cloud (Drive, OneDrive)',
        'Synchronisation dossiers',
        'Migration données (PC → PC)'
      ]
    },
    {
      icon: '📧',
      number: '8️⃣',
      title: 'EMAIL & OUTILS PRO',
      features: [
        'Configuration email pro',
        'Problème Outlook / Gmail',
        'Synchronisation mobile / PC',
        'Sécurité email (spam, phishing)',
        'Configuration nom de domaine email'
      ]
    },
    {
      icon: '🧑‍💻',
      number: '9️⃣',
      title: 'LOGICIELS & APPLICATIONS',
      features: [
        'Installation logiciels',
        'Mise à jour applications',
        'Problèmes licences',
        'Paramétrage logiciels métiers',
        'Désinstallation propre'
      ]
    },
    {
      icon: '🔐',
      number: '1️⃣0️⃣',
      title: 'ACCÈS DISTANT & TÉLÉTRAVAIL',
      features: [
        'Installation TeamViewer / AnyDesk',
        'Paramétrage accès sécurisé',
        'Dépannage session distante',
        'Assistance télétravail'
      ]
    }
  ];

  const advantages = [
    { icon: Clock, text: 'Rapide' },
    { icon: DollarSign, text: 'Moins cher' },
    { icon: Heart, text: 'Zéro stress' },
    { icon: Car, text: 'Pas besoin de se déplacer' }
  ];

  return (
    <section className="remote-it-section">
      <div className="remote-it-container">
        {/* Header */}
        <div className="remote-it-header">
          <div className="remote-it-badge">
            <Monitor className="h-4 w-4" />
            REMOTE
          </div>
          <h2 className="remote-it-title">Assistance IT & Digitale à Distance</h2>
          <p className="remote-it-subtitle">(sur devis)</p>
          <div className="remote-it-tagline">
            <span className="tagline-icon">💻</span>
            <span>DÉPANNAGE IT POSSIBLE À DISTANCE</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="remote-it-grid">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`remote-it-card fade-in-up ${service.highlight ? 'highlighted' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="remote-it-card-content">
                <div className="service-header">
                  <span className="service-emoji">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                {service.subtitle && (
                  <p className="service-subtitle">{service.subtitle}</p>
                )}
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <span className="feature-check">✔️</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.highlight && (
                  <div className="service-highlight">
                    👉 {service.highlight}
                  </div>
                )}
                {service.warning && (
                  <div className="service-warning">
                    ⚠️ {service.warning}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promise Section */}
        <Card className="promise-card">
          <CardContent className="promise-content">
            <h3 className="promise-title">🧠 Notre Promesse</h3>
            <p className="promise-text">
              "Je me connecte, je diagnostique, je règle. Sans déplacement. Paiement après résultat."
            </p>
            
            <div className="advantages-grid">
              {advantages.map((adv, index) => (
                <div key={index} className="advantage-item">
                  <div className="advantage-icon">
                    <adv.icon className="h-6 w-6" />
                  </div>
                  <span className="advantage-text">{adv.text}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              size="lg"
              className="remote-it-cta"
            >
              <a 
                href="https://wa.me/594694458584" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Demander un devis
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
