import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Globe, CheckCircle, Shield, Clock, Users, Smartphone, 
  Lock, Server, Zap, FileText, MessageCircle, ArrowRight,
  Palette, Search, HeadphonesIcon, Rocket, Key, Crown,
  Settings, RefreshCcw, AlertCircle, XCircle, Wrench,
  Star, PhoneCall, TrendingUp, Info
} from 'lucide-react';
import './SiteVitrineSection.css';

export const SiteVitrineSection = () => {
  // Offre 1 - Site Clé en Main
  const offer1Inclus = [
    "Site web professionnel",
    "Design responsive (PC / mobile)",
    "Pages définies au devis",
    "Contenu intégré",
    "Sécurité HTTPS (SSL)",
    "Site livré prêt à l'emploi",
    "Accès complet transmis au client"
  ];
  
  const offer1NonInclus = [
    "Maintenance après livraison",
    "Mises à jour futures",
    "Support technique continu"
  ];

  // Offre 2 - Site Géré + Maintenance
  const offer2Inclus = [
    "Tout ce qui est dans l'offre standard",
    "Hébergement géré",
    "Maintenance technique",
    "Mises à jour mineures",
    "Surveillance sécurité",
    "Support prioritaire"
  ];

  // Maintenance options
  const maintenanceEssentielle = [
    "Mises à jour techniques",
    "Sécurité de base",
    "Sauvegardes régulières",
    "Disponibilité du site",
    "Corrections mineures"
  ];

  const maintenanceAvancee = [
    "Tout l'essentiel inclus",
    "Modifications de contenu (limité/mois)",
    "Assistance prioritaire",
    "Conseils d'évolution",
    "Optimisation légère"
  ];

  const inclusions = [
    { icon: FileText, text: "Jusqu'à 5 pages personnalisées (Accueil, Services, À propos, Contact, etc.)" },
    { icon: Palette, text: "Design professionnel adapté à votre image de marque" },
    { icon: Smartphone, text: "Site 100% responsive (mobile, tablette, ordinateur)" },
    { icon: Globe, text: "Configuration de votre nom de domaine" },
    { icon: Server, text: "Hébergement sécurisé configuré et prêt à l'emploi" },
    { icon: Lock, text: "Certificat SSL/HTTPS inclus (cadenas de sécurité)" },
    { icon: Rocket, text: "Mise en ligne complète et vérification finale" },
    { icon: Search, text: "Optimisation de base pour les moteurs de recherche (SEO)" }
  ];

  const steps = [
    { 
      number: "01", 
      title: "Premier Contact", 
      description: "Échange pour comprendre votre activité, vos besoins et vos objectifs.",
      duration: "Jour 1"
    },
    { 
      number: "02", 
      title: "Devis & Validation", 
      description: "Proposition détaillée avec le contenu attendu. Validation et acompte.",
      duration: "Jour 2-3"
    },
    { 
      number: "03", 
      title: "Création du Site", 
      description: "Design, intégration de vos contenus, configuration technique.",
      duration: "Jour 4-8"
    },
    { 
      number: "04", 
      title: "Révisions & Ajustements", 
      description: "Vous validez le site, nous ajustons selon vos retours (jusqu'à 2 révisions).",
      duration: "Jour 9-10"
    },
    { 
      number: "05", 
      title: "Mise en Ligne", 
      description: "Déploiement final, vérifications et remise des accès.",
      duration: "Jour 10"
    }
  ];

  const clientResponsibilities = [
    "Fournir les textes pour chaque page (nous pouvons vous guider)",
    "Fournir votre logo en haute qualité (ou nous créons un logo simple)",
    "Fournir les photos/images souhaitées (ou nous utilisons des images libres de droits)",
    "Valider les étapes clés dans les délais convenus",
    "Jusqu'à 2 révisions incluses après la première présentation"
  ];

  return (
    <section className="site-vitrine-section">
      <div className="site-vitrine-container">
        
        {/* Hero Section */}
        <div className="sv-hero">
          <div className="sv-hero-badge">
            <Globe className="h-4 w-4" />
            CRÉATION DE SITE VITRINE
          </div>
          <h1 className="sv-hero-title">
            Votre site web professionnel, <span className="highlight">clé en main</span>
          </h1>
          <p className="sv-hero-subtitle">
            Attirez plus de clients avec une présence en ligne professionnelle. 
            Nous créons votre site de A à Z, vous n'avez rien à faire techniquement.
          </p>
        </div>

        {/* Value Proposition */}
        <Card className="sv-value-card">
          <CardContent className="sv-value-content">
            <h2 className="sv-section-title">Pourquoi un site web professionnel ?</h2>
            <div className="sv-value-grid">
              <div className="sv-value-item">
                <div className="sv-value-icon cyan">
                  <Users size={24} />
                </div>
                <h3>Crédibilité Instantanée</h3>
                <p>Un site professionnel inspire confiance à vos clients potentiels dès le premier contact.</p>
              </div>
              <div className="sv-value-item">
                <div className="sv-value-icon purple">
                  <Clock size={24} />
                </div>
                <h3>Disponible 24h/24</h3>
                <p>Votre vitrine en ligne travaille pour vous, même quand vous dormez.</p>
              </div>
              <div className="sv-value-item">
                <div className="sv-value-icon green">
                  <Search size={24} />
                </div>
                <h3>Visibilité Google</h3>
                <p>Soyez trouvé par les clients qui recherchent vos services sur internet.</p>
              </div>
              <div className="sv-value-item">
                <div className="sv-value-icon orange">
                  <Smartphone size={24} />
                </div>
                <h3>Adapté Mobile</h3>
                <p>70% des recherches se font sur mobile. Votre site sera parfait sur tous les écrans.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clé en Main Explanation */}
        <div className="sv-cle-en-main">
          <div className="sv-cle-icon">
            <Zap size={40} />
          </div>
          <div className="sv-cle-content">
            <h2>Que signifie "Clé en Main" ?</h2>
            <p>
              <strong>Vous n'avez aucune action technique à réaliser.</strong> Nous nous occupons de tout : 
              création du design, configuration du domaine, mise en place de l'hébergement, sécurisation du site 
              et mise en ligne finale. Vous recevez un site <strong>100% fonctionnel, sécurisé et accessible en ligne</strong>, 
              prêt à accueillir vos premiers visiteurs.
            </p>
          </div>
        </div>

        {/* Price Offer */}
        <Card className="sv-price-card">
          <CardContent className="sv-price-content">
            <div className="sv-price-header">
              <span className="sv-price-badge">OFFRE COMPLÈTE</span>
              <h2 className="sv-price-title">Site Vitrine Professionnel</h2>
              <div className="sv-price-box">
                <span className="sv-price-amount">790 €</span>
                <span className="sv-price-ht">HT</span>
              </div>
              <p className="sv-price-subtitle">Paiement en 2 fois possible : 50% à la commande, 50% à la livraison</p>
            </div>

            <div className="sv-inclusions">
              <h3 className="sv-inclusions-title">
                <CheckCircle className="h-5 w-5" />
                Ce qui est inclus dans l'offre
              </h3>
              <div className="sv-inclusions-grid">
                {inclusions.map((item, index) => (
                  <div key={index} className="sv-inclusion-item">
                    <item.icon className="sv-inclusion-icon" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Section */}
        <Card className="sv-security-card">
          <CardContent className="sv-security-content">
            <h2 className="sv-section-title">
              <Shield className="h-6 w-6" />
              Sécurité & Fiabilité
            </h2>
            <p className="sv-security-intro">
              Votre site est hébergé sur une infrastructure professionnelle avec toutes les protections essentielles.
            </p>
            <div className="sv-security-grid">
              <div className="sv-security-item">
                <Lock className="sv-security-icon" />
                <div>
                  <h4>Certificat SSL/HTTPS</h4>
                  <p>Le cadenas vert dans la barre d'adresse, signe de confiance pour vos visiteurs.</p>
                </div>
              </div>
              <div className="sv-security-item">
                <Server className="sv-security-icon" />
                <div>
                  <h4>Hébergement Sécurisé</h4>
                  <p>Serveurs performants avec sauvegardes régulières et protection anti-intrusion.</p>
                </div>
              </div>
              <div className="sv-security-item">
                <Zap className="sv-security-icon" />
                <div>
                  <h4>Performance Optimisée</h4>
                  <p>Temps de chargement rapide pour une meilleure expérience utilisateur.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Timeline */}
        <div className="sv-process">
          <h2 className="sv-section-title centered">Processus de Création</h2>
          <p className="sv-process-intro">De la première prise de contact à la mise en ligne : environ 10 jours ouvrés</p>
          
          <div className="sv-timeline">
            {steps.map((step, index) => (
              <div key={index} className="sv-timeline-step">
                <div className="sv-step-number">{step.number}</div>
                <div className="sv-step-content">
                  <div className="sv-step-duration">{step.duration}</div>
                  <h3 className="sv-step-title">{step.title}</h3>
                  <p className="sv-step-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="sv-step-connector" />}
              </div>
            ))}
          </div>
        </div>

        {/* Client Responsibilities */}
        <Card className="sv-responsibilities-card">
          <CardContent className="sv-responsibilities-content">
            <h2 className="sv-section-title">
              <FileText className="h-6 w-6" />
              Ce que nous attendons de vous
            </h2>
            <p className="sv-responsibilities-intro">
              Pour créer un site qui vous ressemble, nous avons besoin de votre collaboration sur quelques éléments :
            </p>
            <ul className="sv-responsibilities-list">
              {clientResponsibilities.map((item, index) => (
                <li key={index}>
                  <CheckCircle className="sv-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="sv-responsibilities-note">
              <HeadphonesIcon className="h-4 w-4" />
              Pas d'inquiétude ! Nous vous accompagnons à chaque étape et pouvons vous aider à rédiger vos contenus.
            </p>
          </CardContent>
        </Card>

        {/* Target Audience */}
        <div className="sv-target">
          <h2 className="sv-section-title centered">Pour Qui ?</h2>
          <div className="sv-target-grid">
            <div className="sv-target-item">Artisans</div>
            <div className="sv-target-item">Indépendants</div>
            <div className="sv-target-item">Restaurants</div>
            <div className="sv-target-item">Commerces</div>
            <div className="sv-target-item">Consultants</div>
            <div className="sv-target-item">Professions libérales</div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="sv-cta-card">
          <CardContent className="sv-cta-content">
            <h2 className="sv-cta-title">Prêt à lancer votre site web ?</h2>
            <p className="sv-cta-subtitle">
              Contactez-nous dès maintenant pour discuter de votre projet. 
              Premier échange gratuit et sans engagement.
            </p>
            <div className="sv-cta-buttons">
              <Button 
                asChild
                size="lg"
                className="sv-cta-primary"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfhHhDEHFpv3REZQ7ncnxTlhJLPy04RjrYydSf9dvC_dvRMEg/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Demander un devis gratuit
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                className="sv-cta-secondary"
              >
                <a 
                  href="https://wa.me/594694458584" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Nous contacter sur WhatsApp
                </a>
              </Button>
            </div>
            <p className="sv-cta-guarantee">
              <Shield className="h-4 w-4" />
              Satisfaction garantie • Paiement sécurisé • Accompagnement personnalisé
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
