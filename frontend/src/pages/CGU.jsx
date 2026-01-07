import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, User, Shield, AlertTriangle } from 'lucide-react';
import './LegalPages.css';

export const CGU = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="legal-title">Conditions Générales d'Utilisation (CGU)</h1>
        <p className="legal-subtitle">Règles d'utilisation du site neotech.tilewuyu.fr</p>
        
        <div className="legal-update">Dernière mise à jour : Janvier 2026</div>

        <section className="legal-section">
          <h2><FileText className="section-icon" /> Article 1 - Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) définissent les règles d'accès et 
            d'utilisation du site neotech.tilewuyu.fr (ci-après "le Site") édité par NEOTECH TILEWUYU.
          </p>
          <p>
            L'accès au Site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez 
            pas ces conditions, veuillez ne pas utiliser le Site.
          </p>
        </section>

        <section className="legal-section">
          <h2><User className="section-icon" /> Article 2 - Accès au site</h2>
          <p>
            Le Site est accessible gratuitement à tout utilisateur disposant d'un accès Internet. 
            Tous les coûts relatifs à l'accès (matériel, logiciels, connexion Internet) sont à la charge de l'utilisateur.
          </p>
          <p>
            NEOTECH TILEWUYU met en œuvre tous les moyens raisonnables pour assurer un accès de qualité au Site, 
            sans obligation de résultat. L'accès peut être suspendu pour maintenance, mise à jour ou toute autre raison technique.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 3 - Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments du Site (textes, images, logos, vidéos, graphismes, icônes, sons, logiciels, etc.) 
            sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, 
            des éléments du Site, par quelque moyen que ce soit, est strictement interdite sans autorisation 
            écrite préalable de NEOTECH TILEWUYU.
          </p>
          <p>
            Les marques et logos présents sur le Site sont des marques déposées. Leur reproduction est interdite.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 4 - Compte utilisateur</h2>
          <p>
            Certaines fonctionnalités du Site peuvent nécessiter la création d'un compte. L'utilisateur s'engage à :
          </p>
          <ul>
            <li>Fournir des informations exactes et à jour</li>
            <li>Maintenir la confidentialité de ses identifiants</li>
            <li>Notifier immédiatement toute utilisation non autorisée de son compte</li>
            <li>Ne pas céder ou partager son compte avec des tiers</li>
          </ul>
          <p>
            NEOTECH TILEWUYU se réserve le droit de suspendre ou supprimer tout compte en cas de non-respect des présentes CGU.
          </p>
        </section>

        <section className="legal-section">
          <h2><Shield className="section-icon" /> Article 5 - Comportement de l'utilisateur</h2>
          <p>L'utilisateur s'engage à utiliser le Site de manière loyale et conformément aux lois en vigueur. Il s'interdit notamment de :</p>
          <ul>
            <li>Diffuser des contenus illicites, diffamatoires, injurieux ou portant atteinte aux droits d'autrui</li>
            <li>Perturber ou tenter de perturber le fonctionnement du Site</li>
            <li>Collecter ou extraire des données du Site sans autorisation</li>
            <li>Utiliser des robots, scripts ou autres outils automatisés</li>
            <li>Usurper l'identité d'un tiers</li>
            <li>Transmettre des virus ou tout code malveillant</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2><AlertTriangle className="section-icon" /> Article 6 - Fraude aux paiements</h2>
          <div className="warning-box">
            <AlertTriangle className="warning-icon" />
            <div>
              <p><strong>Interdiction formelle de toute fraude liée aux paiements</strong></p>
              <p>
                Toute tentative de fraude au paiement (utilisation de cartes volées, usurpation d'identité, 
                chargeback abusif, etc.) fera l'objet de poursuites judiciaires.
              </p>
            </div>
          </div>
          <p>
            En cas de soupçon de fraude, NEOTECH TILEWUYU se réserve le droit de :
          </p>
          <ul>
            <li>Annuler la commande sans préavis</li>
            <li>Suspendre le compte utilisateur</li>
            <li>Signaler l'incident aux autorités compétentes et à PayPal</li>
            <li>Engager des poursuites judiciaires</li>
          </ul>
          <p>
            Les paiements sont traités par PayPal qui dispose de systèmes de détection de fraude avancés. 
            Toute transaction suspecte sera automatiquement bloquée et signalée.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 7 - Liens hypertextes</h2>
          <p>
            Le Site peut contenir des liens vers des sites tiers. NEOTECH TILEWUYU n'exerce aucun contrôle 
            sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou 
            leur politique de confidentialité.
          </p>
          <p>
            La création de liens hypertextes vers le Site est soumise à autorisation préalable, 
            sauf pour les liens pointant vers la page d'accueil.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 8 - Responsabilité</h2>
          <p>
            NEOTECH TILEWUYU ne saurait être tenu responsable :
          </p>
          <ul>
            <li>Des dommages directs ou indirects résultant de l'utilisation du Site</li>
            <li>Des interruptions temporaires du Site pour maintenance</li>
            <li>De l'impossibilité d'accéder au Site due à des facteurs externes</li>
            <li>Des contenus publiés par les utilisateurs</li>
            <li>Des pertes de données</li>
          </ul>
          <p>
            L'utilisateur est seul responsable de l'utilisation qu'il fait du Site et des services proposés.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 9 - Données personnelles</h2>
          <p>
            L'utilisation du Site implique le traitement de données personnelles. Pour plus d'informations 
            sur la collecte, le traitement et la protection de vos données, consultez notre{' '}
            <Link to="/politique-confidentialite">Politique de Confidentialité</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 10 - Cookies</h2>
          <p>
            Le Site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, 
            consultez notre <Link to="/politique-cookies">Politique de Cookies</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 11 - Modification des CGU</h2>
          <p>
            NEOTECH TILEWUYU se réserve le droit de modifier les présentes CGU à tout moment. 
            Les modifications entrent en vigueur dès leur publication sur le Site.
          </p>
          <p>
            L'utilisateur est invité à consulter régulièrement les CGU. La poursuite de l'utilisation 
            du Site après modification vaut acceptation des nouvelles conditions.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 12 - Droit applicable et juridiction</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige relatif à l'interprétation 
            ou l'exécution des présentes, et à défaut de résolution amiable, les tribunaux français 
            seront seuls compétents.
          </p>
        </section>

        <div className="legal-footer">
          <p>
            Pour toute question concernant ces CGU, contactez-nous à : <strong>neotech.tilewuyu@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
