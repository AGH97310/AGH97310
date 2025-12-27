import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Lock, HardDrive, Laptop, Shield, RotateCcw, Wifi, Phone, MessageCircle, Smartphone } from 'lucide-react';
import './IndividualServices.css';

export const IndividualServices = () => {
  const services = [
    {
      icon: Lock,
      title: 'Sécurité & Déverrouillage Mobile',
      price: '50€',
      quote: '"Mon tel est bloqué / J\'ai perdu accès"',
      features: [
        'Déblocage code / schéma / PIN (Android & iOS)',
        'Suppression compte Google (FRP)',
        'Désimlockage opérateur (selon éligibilité)'
      ]
    },
    {
      icon: HardDrive,
      title: 'Migration & Sauvegarde Données',
      price: '80€',
      quote: '"Je change de tel / J\'ai peur de perdre mes photos"',
      features: [
        'Migration iPhone ↔ Android / tel → tel',
        'Sauvegarde clé USB ou disque',
        'Récupération données (étude + devis)'
      ]
    },
    {
      icon: Laptop,
      title: 'Configuration & Support Utilisateur',
      price: '60€',
      quote: '"Je viens d\'acheter un PC/tel, je sais pas m\'en servir"',
      features: [
        'Mise en route smartphone / tablette / PC',
        'Paramétrage comptes (email, WhatsApp, sécurité)',
        'Installation logiciels essentiels'
      ]
    },
    {
      icon: Shield,
      title: 'Maintenance & Sécurisation Windows',
      price: '50€',
      quote: '"Mon PC est lent / J\'ai des virus"',
      features: [
        'Nettoyage complet + optimisation',
        'Suppression virus / malwares',
        'Restauration système (selon diagnostic)'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Réinstallation & Restauration Système',
      price: '80€',
      quote: '"Mon PC ne démarre plus"',
      features: [
        'Réinstallation Windows + pilotes',
        'Sauvegarde / restauration fichiers personnels',
        'Paramétrage prêt à l\'emploi'
      ]
    },
    {
      icon: Wifi,
      title: 'Solutions Complémentaires',
      price: 'Devis gratuit',
      quote: 'Problèmes :',
      features: [
        'Réseau & Wi-Fi : box, imprimantes, partage',
        'Clonage disque (HDD → SSD)',
        'Cloud : installation & configuration'
      ]
    }
  ];

  const repairService = {
    icon: Smartphone,
    title: 'Réparation Smartphone & Tablette',
    price: 'Sur devis',
    quote: '"Mon téléphone / ma tablette a un problème"',
    features: [
      'Réparation téléphone portable',
      'Réparation tablette',
      '1er diagnostic offert',
      'Contrat de maintenance disponible'
    ],
    special: true
  };

  return (
    <section className="individual-section">
      <div className="individual-container">
        <div className="individual-header">
          <div className="individual-badge">
            <span className="mono-text">OFFRES PARTICULIERS</span>
          </div>
          <h2 className="individual-title">Services IT à Tarifs Fixes</h2>
          <p className="individual-subtitle">
            Contactez-nous pour réserver votre intervention
          </p>
        </div>

        <div className="individual-grid">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="individual-card hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="service-icon-wrapper">
                  <service.icon className="service-icon" />
                </div>
                <CardTitle className="service-title">{service.title}</CardTitle>
                <CardDescription className="service-price">{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="service-quote">{service.quote}</p>
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className="service-btn"
                >
                  <a href="tel:0694458584">
                    <Phone className="mr-2 h-4 w-4" />
                    Réserver
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Repair Service - Special Card */}
          <Card className="individual-card special-card hover-lift fade-in-up">
            <CardHeader>
              <div className="service-icon-wrapper special">
                <repairService.icon className="service-icon" />
              </div>
              <CardTitle className="service-title">{repairService.title}</CardTitle>
              <CardDescription className="service-price">{repairService.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="service-quote">{repairService.quote}</p>
              <ul className="service-features-list">
                {repairService.features.map((feature, idx) => (
                  <li key={idx} className={idx === 2 ? 'highlighted-feature' : ''}>
                    <CheckCircle className="feature-check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                className="service-btn special"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfSvkl06QsIhrjcoef6z9z63x3KWiREMm58FlS1os6lRTLLzg/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contrat de maintenance
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
