import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  HardDrive, Monitor, Usb, SdCard, 
  Search, ShieldCheck, Lock, MessageSquare,
  MessageCircle, AlertTriangle, Clock
} from 'lucide-react';
import './DataRecoverySection.css';

export const DataRecoverySection = () => {
  const supportedDevices = [
    { icon: Monitor, label: 'PC et Mac' },
    { icon: HardDrive, label: 'Disques durs et SSD' },
    { icon: Usb, label: 'Clés USB et cartes mémoire' }
  ];

  const valueProps = [
    { icon: Search, title: 'Diagnostic rapide', description: 'Évaluation immédiate de la situation' },
    { icon: ShieldCheck, title: 'Méthode professionnelle', description: 'Outils et protocoles adaptés' },
    { icon: Lock, title: 'Confidentialité', description: 'Vos données restent privées' },
    { icon: MessageSquare, title: 'Explication claire', description: 'Transparence avant toute intervention' }
  ];

  return (
    <section className="data-recovery-section">
      <div className="data-recovery-container">
        {/* Header */}
        <div className="data-recovery-header">
          <div className="data-recovery-badge">
            <HardDrive className="h-4 w-4" />
            RÉCUPÉRATION
          </div>
          <h2 className="data-recovery-title">Récupération de données</h2>
          <p className="data-recovery-subtitle">
            Vos fichiers sont précieux. Nous faisons tout pour les retrouver.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="data-recovery-main-card">
          <CardContent className="data-recovery-main-content">
            {/* Explanation Text */}
            <div className="data-recovery-explanation">
              <div className="explanation-icon">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <div className="explanation-text">
                <p>
                  Une suppression accidentelle, une corbeille vidée par erreur, une panne système… 
                  les causes de perte de données sont nombreuses et souvent stressantes.
                </p>
                <p>
                  <strong>Plus l'intervention est rapide, plus les chances de récupération sont élevées.</strong> 
                  Nous utilisons des méthodes professionnelles pour analyser votre support et tenter 
                  de retrouver vos fichiers.
                </p>
                <p className="explanation-disclaimer">
                  <Clock className="inline h-4 w-4 mr-1" />
                  La récupération de données n'est jamais garantie à 100%, mais nous nous engageons 
                  à un diagnostic honnête et méthodique avant toute intervention.
                </p>
              </div>
            </div>

            {/* Supported Devices */}
            <div className="data-recovery-devices">
              <h3 className="devices-title">Supports pris en charge</h3>
              <div className="devices-grid">
                {supportedDevices.map((device, index) => (
                  <div key={index} className="device-item">
                    <div className="device-icon">
                      <device.icon className="h-6 w-6" />
                    </div>
                    <span className="device-label">{device.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Propositions */}
            <div className="data-recovery-values">
              <h3 className="values-title">Notre approche</h3>
              <div className="values-grid">
                {valueProps.map((prop, index) => (
                  <div key={index} className="value-item">
                    <div className="value-icon">
                      <prop.icon className="h-5 w-5" />
                    </div>
                    <div className="value-content">
                      <h4 className="value-title">{prop.title}</h4>
                      <p className="value-description">{prop.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="data-recovery-cta-wrapper">
              <Button 
                asChild
                size="lg"
                className="data-recovery-cta"
              >
                <a 
                  href="https://wa.me/594694458584" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Nous contacter
                </a>
              </Button>
              <p className="cta-disclaimer">
                Chaque minute compte après une perte de données
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
