import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, CheckCircle, Smartphone, MessageCircle, Phone, FileText,
  Users, Store, Wrench, Heart, Building, Zap, Search, TrendingUp,
  Palette, Rocket, MapPin, Headphones, RefreshCcw, Layout, Target,
  ShoppingBag, Star, ArrowLeft
} from 'lucide-react';
import './SiteVitrineSection.css';

export const SiteVitrineSection = () => {
  // À qui s'adresse cette offre ?
  const targetAudience = [
    { icon: Users, label: 'Entrepreneurs' },
    { icon: Store, label: 'Commerçants' },
    { icon: Wrench, label: 'Artisans' },
    { icon: Building, label: 'Indépendants' },
    { icon: Heart, label: 'Associations' }
  ];

  // Ce que tu obtiens (bénéfices)
  const benefits = [
    { icon: Globe, text: 'Site web professionnel clé en main' },
    { icon: Smartphone, text: 'Parfaitement adapté mobile & tablette' },
    { icon: Zap, text: 'Rapide et optimisé' },
    { icon: Search, text: 'Pensé pour le référencement (SEO)' },
    { icon: TrendingUp, text: 'Conçu pour générer des contacts' }
  ];

  // Types de sites proposés
  const siteTypes = [
    { 
      icon: Layout, 
      title: 'Site vitrine', 
      desc: 'Présentez votre activité et attirez des clients'
    },
    { 
      icon: Building, 
      title: 'Site professionnel', 
      desc: 'Image de marque solide et crédibilité'
    },
    { 
      icon: Target, 
      title: 'Landing page', 
      desc: 'Page de vente optimisée pour convertir'
    },
    { 
      icon: RefreshCcw, 
      title: 'Refonte de site', 
      desc: 'Modernisez votre site existant'
    }
  ];

  // Méthode de travail
  const methodSteps = [
    { number: '1', title: 'Analyse du besoin', desc: 'On discute de votre projet et vos objectifs' },
    { number: '2', title: 'Proposition claire', desc: 'Structure et devis détaillé' },
    { number: '3', title: 'Design moderne', desc: 'Création responsive et sur mesure' },
    { number: '4', title: 'Mise en ligne', desc: 'Livraison et accompagnement' }
  ];

  // Pourquoi nous choisir
  const whyChooseUs = [
    { icon: Headphones, title: 'Accompagnement humain', desc: 'Écoute et conseils personnalisés' },
    { icon: MapPin, title: 'Prestataire local', desc: 'Réactif et disponible en Guyane' },
    { icon: Palette, title: 'Sur mesure', desc: 'Adapté à votre activité' },
    { icon: MessageCircle, title: 'Communication simple', desc: 'Pas de jargon, que du concret' }
  ];

  // Composant CTA réutilisable
  const CTAButtons = ({ variant = 'default' }) => (
    <div className={`sv-cta-buttons ${variant}`} data-testid="sv-cta-buttons">
      <Button 
        asChild
        size="lg"
        className="sv-cta-devis"
        data-testid="sv-devis-btn"
      >
        <a 
          href="https://wa.me/594694458584?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20un%20site%20web" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FileText className="h-5 w-5" />
          <span>Demande de devis</span>
        </a>
      </Button>
      <Button 
        asChild
        size="lg"
        className="sv-cta-whatsapp"
        data-testid="sv-whatsapp-btn"
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
    </div>
  );

  return (
    <section className="sv-section" data-testid="site-vitrine-section">
      
      {/* ========== HERO - VISIBLE SANS SCROLL ========== */}
      <div className="sv-hero" data-testid="sv-hero">
        <div className="sv-hero-content">
          <h1 className="sv-hero-title" data-testid="sv-hero-title">
            Création de site web
            <span>professionnel et sur mesure</span>
          </h1>
          <p className="sv-hero-subtitle">
            Un site moderne, rapide et pensé pour <strong>attirer des clients</strong>.
          </p>
          <CTAButtons variant="hero" />
        </div>
      </div>

      {/* ========== À QUI S'ADRESSE CETTE OFFRE ? ========== */}
      <div className="sv-block" data-testid="sv-audience-block">
        <h2 className="sv-block-title">
          <Users className="h-5 w-5" />
          À qui s'adresse cette offre ?
        </h2>
        <p className="sv-block-subtitle">Ce service est fait pour vous si vous êtes :</p>
        <div className="sv-audience-grid">
          {targetAudience.map((item, index) => (
            <div key={index} className="sv-audience-item" data-testid={`sv-audience-${index}`}>
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== CE QUE TU OBTIENS ========== */}
      <div className="sv-block sv-benefits" data-testid="sv-benefits-block">
        <h2 className="sv-block-title">
          <CheckCircle className="h-5 w-5" />
          Ce que vous obtenez
        </h2>
        <ul className="sv-benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} data-testid={`sv-benefit-${index}`}>
              <benefit.icon className="h-5 w-5" />
              <span>{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== CTA MILIEU ========== */}
      <div className="sv-cta-section" data-testid="sv-cta-middle">
        <p className="sv-cta-text">Prêt à booster votre visibilité ?</p>
        <CTAButtons variant="middle" />
      </div>

      {/* ========== TYPES DE SITES PROPOSÉS ========== */}
      <div className="sv-block sv-types" data-testid="sv-types-block">
        <h2 className="sv-block-title">
          <Layout className="h-5 w-5" />
          Types de sites proposés
        </h2>
        <div className="sv-types-grid">
          {siteTypes.map((type, index) => (
            <div key={index} className="sv-type-card" data-testid={`sv-type-${index}`}>
              <div className="sv-type-icon">
                <type.icon className="h-6 w-6" />
              </div>
              <div className="sv-type-content">
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== MÉTHODE DE TRAVAIL ========== */}
      <div className="sv-block sv-method" data-testid="sv-method-block">
        <h2 className="sv-block-title">
          <Rocket className="h-5 w-5" />
          Comment ça se passe ?
        </h2>
        <p className="sv-method-subtitle">Une méthode simple et rassurante</p>
        <div className="sv-method-steps">
          {methodSteps.map((step, index) => (
            <div key={index} className="sv-method-step" data-testid={`sv-step-${index}`}>
              <div className="sv-step-number">{step.number}</div>
              <div className="sv-step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== POURQUOI NEOTECH TILEWUYU ? ========== */}
      <div className="sv-block sv-why" data-testid="sv-why-block">
        <h2 className="sv-block-title">
          <Star className="h-5 w-5" />
          Pourquoi choisir NEOTECH ?
        </h2>
        <div className="sv-why-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="sv-why-item" data-testid={`sv-why-${index}`}>
              <div className="sv-why-icon">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="sv-why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== RÉASSURANCE ========== */}
      <div className="sv-reassurance" data-testid="sv-reassurance">
        <p>
          <Star className="h-4 w-4" />
          Chaque site est pensé pour répondre à un vrai besoin métier.
        </p>
      </div>

      {/* ========== TARIF INDICATIF ========== */}
      <div className="sv-block sv-pricing" data-testid="sv-pricing-block">
        <div className="sv-pricing-card">
          <div className="sv-pricing-header">
            <span className="sv-pricing-label">À partir de</span>
            <span className="sv-pricing-amount">790 €</span>
            <span className="sv-pricing-detail">HT • Site vitrine complet</span>
          </div>
          <ul className="sv-pricing-includes">
            <li><CheckCircle className="h-4 w-4" /> Site clé en main</li>
            <li><CheckCircle className="h-4 w-4" /> Design responsive</li>
            <li><CheckCircle className="h-4 w-4" /> Optimisation SEO</li>
            <li><CheckCircle className="h-4 w-4" /> Mise en ligne incluse</li>
          </ul>
          <p className="sv-pricing-note">Devis gratuit et personnalisé selon vos besoins</p>
        </div>
      </div>

      {/* ========== CTA FINAL ========== */}
      <div className="sv-cta-final" data-testid="sv-cta-final">
        <h2>Lancez votre projet web !</h2>
        <p>Discutons de votre site en quelques minutes</p>
        <CTAButtons variant="final" />
        <Button 
          asChild
          variant="outline"
          size="lg"
          className="sv-cta-phone"
          data-testid="sv-phone-btn"
        >
          <a href="tel:+594694458584">
            <Phone className="h-5 w-5" />
            Appeler maintenant
          </a>
        </Button>
      </div>

      {/* ========== MENTION LÉGALE ========== */}
      <div className="sv-legal" data-testid="sv-legal">
        <p>
          Tarifs indicatifs. Devis personnalisé sur demande. 
          Paiement sécurisé. Prestataire basé en Guyane.
        </p>
      </div>

    </section>
  );
};
