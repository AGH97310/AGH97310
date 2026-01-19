import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Globe, CheckCircle, Shield, Clock, Users, Smartphone, 
  Lock, Server, Zap, FileText, MessageCircle, ArrowRight,
  Palette, Search, HeadphonesIcon, Rocket, Key, Crown,
  Settings, RefreshCcw, AlertCircle, XCircle, Wrench,
  Star, PhoneCall, TrendingUp, Info, Cpu
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

        {/* Two Commercial Offers */}
        <div className="sv-offers-intro">
          <h2 className="sv-section-title centered">Nos Offres</h2>
          <p className="sv-offers-tagline">
            « Vous avez deux options : soit je vous livre le site avec accès complet, 
            soit je m'occupe de tout pour que vous n'ayez jamais à vous soucier de la technique. »
          </p>
        </div>

        <div className="sv-offers-grid">
          {/* Offre 1 - Clé en Main */}
          <Card className="sv-offer-card offer-standard">
            <CardContent className="sv-offer-content">
              <div className="sv-offer-header">
                <div className="sv-offer-icon-wrapper standard">
                  <Key size={28} />
                </div>
                <span className="sv-offer-badge standard">OFFRE 1</span>
                <h3 className="sv-offer-title">Site Clé en Main</h3>
                <p className="sv-offer-subtitle">Accès transféré</p>
              </div>
              
              <div className="sv-offer-target">
                <Users size={16} />
                <span>Pour clients autonomes ou techniques</span>
              </div>

              <p className="sv-offer-description">
                Site vitrine professionnel clé en main. Conception, mise en ligne et livraison 
                complète du site avec <strong>accès administrateur</strong>.
              </p>

              <div className="sv-offer-price-box standard">
                <span className="sv-offer-price">790 €</span>
                <span className="sv-offer-price-detail">HT • Paiement unique</span>
              </div>

              <div className="sv-offer-section">
                <h4 className="sv-offer-section-title included">
                  <CheckCircle size={18} />
                  Inclus
                </h4>
                <ul className="sv-offer-list included">
                  {offer1Inclus.map((item, index) => (
                    <li key={index}>
                      <CheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sv-offer-section">
                <h4 className="sv-offer-section-title excluded">
                  <XCircle size={18} />
                  Non inclus
                </h4>
                <ul className="sv-offer-list excluded">
                  {offer1NonInclus.map((item, index) => (
                    <li key={index}>
                      <XCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Offre 2 - Géré + Maintenance */}
          <Card className="sv-offer-card offer-premium">
            <CardContent className="sv-offer-content">
              <div className="sv-offer-popular">
                <Star size={14} />
                RECOMMANDÉ
              </div>
              <div className="sv-offer-header">
                <div className="sv-offer-icon-wrapper premium">
                  <Crown size={28} />
                </div>
                <span className="sv-offer-badge premium">OFFRE 2</span>
                <h3 className="sv-offer-title">Site Géré + Maintenance</h3>
                <p className="sv-offer-subtitle">Premium • Tranquillité totale</p>
              </div>
              
              <div className="sv-offer-target premium">
                <Users size={16} />
                <span>Pour clients non techniques</span>
              </div>

              <p className="sv-offer-description">
                Site clé en main avec <strong>gestion complète</strong>. 
                Nous gérons la technique, la sécurité et les mises à jour pour vous.
              </p>

              <div className="sv-offer-price-box premium">
                <div className="sv-offer-price-row">
                  <span className="sv-offer-price">790 €</span>
                  <span className="sv-offer-price-label">Création</span>
                </div>
                <div className="sv-offer-price-plus">+</div>
                <div className="sv-offer-price-row">
                  <span className="sv-offer-price monthly">49 €</span>
                  <span className="sv-offer-price-label">/mois maintenance</span>
                </div>
              </div>

              <div className="sv-offer-section">
                <h4 className="sv-offer-section-title included">
                  <CheckCircle size={18} />
                  Inclus
                </h4>
                <ul className="sv-offer-list included">
                  {offer2Inclus.map((item, index) => (
                    <li key={index}>
                      <CheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transfer Clause */}
        <Card className="sv-transfer-card">
          <CardContent className="sv-transfer-content">
            <div className="sv-transfer-header">
              <div className="sv-transfer-icon">
                <FileText size={24} />
              </div>
              <h3>Transfert de Propriété et d'Accès</h3>
            </div>
            <div className="sv-transfer-text">
              <p>
                À la livraison du site et après règlement complet, les <strong>accès administrateur sont transmis au client</strong>.
              </p>
              <p>
                Le client devient responsable de l'hébergement, des mises à jour, des modifications 
                et de la sécurité du site, <strong>sauf en cas de souscription à une offre de maintenance</strong>.
              </p>
              <p className="sv-transfer-note">
                Toute intervention ultérieure fera l'objet d'un devis ou d'un abonnement distinct.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Delivery and Administrative Access - Legal Section */}
        <Card className="sv-delivery-card">
          <CardContent className="sv-delivery-content">
            <div className="sv-delivery-header">
              <div className="sv-delivery-badge">
                <Lock size={16} />
                CLAUSE CONTRACTUELLE
              </div>
              <h2 className="sv-delivery-title">Livraison et Accès Administratif</h2>
              <p className="sv-delivery-subtitle">
                Conditions standard de l'industrie pour une relation de confiance
              </p>
            </div>

            <div className="sv-delivery-main">
              <div className="sv-delivery-principle">
                <p>
                  À la livraison du site web et après règlement intégral, le client reçoit un 
                  <strong> accès administratif strictement limité à l'utilisation et à la gestion 
                  du site web livré</strong>, tel que défini dans l'offre souscrite.
                </p>
              </div>

              <div className="sv-delivery-section">
                <h3>
                  <CheckCircle size={18} />
                  Accès administratif fourni
                </h3>
                <p className="sv-delivery-section-intro">
                  Selon l'offre choisie, l'accès administratif peut inclure, le cas échéant :
                </p>
                <ul className="sv-delivery-list included">
                  <li>
                    <FileText size={16} />
                    <span><strong>Accès au contenu du site</strong> — modification des textes, images et médias publiés</span>
                  </li>
                  <li>
                    <MessageCircle size={16} />
                    <span><strong>Accès aux formulaires de contact</strong> — réception des messages et notifications par email</span>
                  </li>
                  <li>
                    <Globe size={16} />
                    <span><strong>Accès au nom de domaine ou configuration DNS</strong> — lorsque celui-ci est géré pour le compte du client</span>
                  </li>
                </ul>
              </div>

              <div className="sv-delivery-section exclusive">
                <h3>
                  <Shield size={18} />
                  Outils et infrastructure exclusifs du prestataire
                </h3>
                <p className="sv-delivery-section-intro">
                  Les éléments suivants restent la propriété exclusive du prestataire et ne sont 
                  ni transférés, ni partagés avec le client :
                </p>
                <ul className="sv-delivery-list exclusive">
                  <li>
                    <Wrench size={16} />
                    <span><strong>Outils de développement</strong> — logiciels, frameworks et environnements de création</span>
                  </li>
                  <li>
                    <Server size={16} />
                    <span><strong>Plateformes d'hébergement</strong> — infrastructure cloud et serveurs de production</span>
                  </li>
                  <li>
                    <RefreshCcw size={16} />
                    <span><strong>Systèmes de déploiement</strong> — processus de mise en ligne et d'actualisation</span>
                  </li>
                  <li>
                    <Cpu size={16} />
                    <span><strong>Infrastructure technique interne</strong> — architectures et configurations serveur</span>
                  </li>
                </ul>
              </div>

              <div className="sv-delivery-additional">
                <AlertCircle size={20} />
                <div>
                  <h4>Accès technique élargi ou code source</h4>
                  <p>
                    Toute demande d'accès technique plus étendu ou de livraison du code source 
                    doit être <strong>explicitement formulée et convenue par écrit</strong> avant 
                    le début du projet. Ces demandes peuvent faire l'objet de conditions 
                    spécifiques et d'une tarification adaptée.
                  </p>
                </div>
              </div>

              <div className="sv-delivery-standard">
                <Info size={16} />
                <p>
                  Ces conditions constituent une <strong>pratique standard de l'industrie</strong> et 
                  visent à garantir la qualité, la sécurité et la pérennité de votre site web, 
                  tout en assurant une relation transparente entre le client et le prestataire.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Options */}
        <div className="sv-maintenance-section">
          <h2 className="sv-section-title centered">
            <Wrench className="h-6 w-6" />
            Options de Maintenance
          </h2>
          <p className="sv-maintenance-intro">
            Des formules claires et transparentes pour garder votre site performant et sécurisé.
          </p>

          <div className="sv-maintenance-grid">
            {/* Maintenance Essentielle */}
            <Card className="sv-maintenance-card essentielle">
              <CardContent className="sv-maintenance-content">
                <div className="sv-maintenance-badge essentielle">ESSENTIELLE</div>
                <div className="sv-maintenance-price">
                  <span className="price">49 €</span>
                  <span className="period">/mois</span>
                </div>
                <ul className="sv-maintenance-list">
                  {maintenanceEssentielle.map((item, index) => (
                    <li key={index}>
                      <CheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance Avancée */}
            <Card className="sv-maintenance-card avancee">
              <CardContent className="sv-maintenance-content">
                <div className="sv-maintenance-badge avancee">AVANCÉE</div>
                <div className="sv-maintenance-price">
                  <span className="price">79 €</span>
                  <span className="period">/mois</span>
                </div>
                <ul className="sv-maintenance-list">
                  {maintenanceAvancee.map((item, index) => (
                    <li key={index}>
                      <CheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="sv-maintenance-disclaimer">
            <Info size={18} />
            <p>
              <strong>À noter :</strong> La maintenance ne comprend pas la refonte graphique, 
              les nouvelles fonctionnalités majeures ou le référencement avancé, sauf devis spécifique.
            </p>
          </div>
        </div>

        {/* Access & Responsibilities Section */}
        <Card className="sv-access-card">
          <CardContent className="sv-access-content">
            <div className="sv-access-header">
              <div className="sv-access-icon">
                <Shield size={28} />
              </div>
              <div>
                <h2 className="sv-access-title">Accès et Responsabilités</h2>
                <p className="sv-access-subtitle">Transparence totale sur ce qui vous est livré</p>
              </div>
            </div>

            <div className="sv-access-intro">
              <p>
                En choisissant nos services, vous achetez un <strong>site web fini et une solution clé en main</strong>, 
                et non les outils internes ou l'infrastructure technique utilisés pour le créer.
              </p>
              <p>
                Votre site est livré <strong>100% fonctionnel et prêt à l'emploi</strong>, hébergé sur une 
                infrastructure cloud moderne et sécurisée, gérée par nos soins.
              </p>
            </div>

            <div className="sv-access-grid">
              {/* What You Receive */}
              <div className="sv-access-block provided">
                <h3>
                  <CheckCircle size={20} />
                  Ce qui vous est fourni
                </h3>
                <ul>
                  <li>
                    <Globe size={16} />
                    <div>
                      <strong>URL publique de votre site</strong>
                      <span>Votre adresse web accessible à tous vos visiteurs</span>
                    </div>
                  </li>
                  <li>
                    <Key size={16} />
                    <div>
                      <strong>Accès au nom de domaine</strong>
                      <span>Gestion de votre adresse web (si applicable à votre offre)</span>
                    </div>
                  </li>
                  <li>
                    <FileText size={16} />
                    <div>
                      <strong>Accès au contenu du site</strong>
                      <span>Modification des textes, images et formulaires (selon l'offre)</span>
                    </div>
                  </li>
                  <li>
                    <MessageCircle size={16} />
                    <div>
                      <strong>Données des formulaires</strong>
                      <span>Réception des messages et demandes de vos visiteurs</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What We Manage */}
              <div className="sv-access-block managed">
                <h3>
                  <Settings size={20} />
                  Ce que nous gérons
                </h3>
                <ul>
                  <li>
                    <Server size={16} />
                    <div>
                      <strong>Infrastructure technique</strong>
                      <span>Serveurs, hébergement et configuration cloud</span>
                    </div>
                  </li>
                  <li>
                    <RefreshCcw size={16} />
                    <div>
                      <strong>Systèmes de déploiement</strong>
                      <span>Mise en ligne et mises à jour techniques</span>
                    </div>
                  </li>
                  <li>
                    <Lock size={16} />
                    <div>
                      <strong>Sécurité et certificats</strong>
                      <span>Protection SSL/HTTPS et surveillance</span>
                    </div>
                  </li>
                  <li>
                    <Wrench size={16} />
                    <div>
                      <strong>Outils de développement</strong>
                      <span>Technologies et processus internes de création</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sv-access-note">
              <Info size={18} />
              <div>
                <p>
                  <strong>Besoin d'un accès technique supplémentaire ?</strong>
                </p>
                <p>
                  Un accès administratif ou technique complet peut être fourni s'il est 
                  <strong> explicitement inclus dans l'offre</strong> ou demandé par le client. 
                  Toute demande d'accès supplémentaire ou de modifications futures pourra faire 
                  l'objet d'un accord distinct.
                </p>
              </div>
            </div>

            <div className="sv-access-trust">
              <Shield size={16} />
              <span>Notre engagement : transparence, professionnalisme et confiance à chaque étape.</span>
            </div>
          </CardContent>
        </Card>

        {/* Original Price Card - Now as Summary */}
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
