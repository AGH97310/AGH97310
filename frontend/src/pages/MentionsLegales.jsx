import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Globe, Server, Shield, Mail, Phone, MapPin } from 'lucide-react';
import './LegalPages.css';

export const MentionsLegales = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* Header */}
        <div className="legal-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
          <div className="legal-title-section">
            <Building2 className="legal-icon" />
            <h1 className="legal-title">Mentions Légales</h1>
          </div>
          <p className="legal-updated">Dernière mise à jour : Décembre 2025</p>
        </div>

        {/* Content */}
        <div className="legal-content">
          {/* Éditeur du site */}
          <section className="legal-section">
            <h2><Building2 className="inline h-5 w-5 mr-2" /> Éditeur du site</h2>
            <div className="info-card">
              <h3>NEOTECH TILEWUYU</h3>
              <p><strong>Statut juridique :</strong> Micro-entreprise</p>
              <p><strong>SIRET :</strong> 940 487 747 00013</p>
              <p><strong>Code APE :</strong> 4619B - Intermédiaires du commerce en autres produits spécifiques</p>
              <p><strong>Domiciliation :</strong> LegalPlace, 60 rue François 1er, 75008 Paris</p>
              <p><strong>Zone d'activité :</strong> Kourou, Guyane Française</p>
            </div>
          </section>

          {/* Responsable de publication */}
          <section className="legal-section">
            <h2><Shield className="inline h-5 w-5 mr-2" /> Responsable de publication</h2>
            <p>
              Le responsable de la publication du site est le gérant de NEOTECH TILEWUYU.
            </p>
          </section>

          {/* Contact */}
          <section className="legal-section">
            <h2><Mail className="inline h-5 w-5 mr-2" /> Contact</h2>
            <div className="contact-info">
              <p><Phone className="inline h-4 w-4 mr-2" /> <strong>Téléphone :</strong> +594 694 45 85 84</p>
              <p><Mail className="inline h-4 w-4 mr-2" /> <strong>Email :</strong> neotech.tilewuyu@gmail.com</p>
              <p><MapPin className="inline h-4 w-4 mr-2" /> <strong>Adresse :</strong> Kourou, Guyane Française</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="legal-section">
            <h2><Server className="inline h-5 w-5 mr-2" /> Hébergement</h2>
            <div className="info-card">
              <p><strong>Hébergeur :</strong> Emergent.sh</p>
              <p>
                Le site est hébergé sur une infrastructure cloud sécurisée, garantissant la disponibilité 
                et la protection des données.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="legal-section">
            <h2><Globe className="inline h-5 w-5 mr-2" /> Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu présent sur le site (textes, images, logo, éléments graphiques, 
              vidéos, etc.) est la propriété exclusive de NEOTECH TILEWUYU, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
              même partielle, de ces différents éléments est strictement interdite sans l'accord exprès 
              par écrit de NEOTECH TILEWUYU.
            </p>
            <p>
              Conformément aux dispositions du Code de la propriété intellectuelle, seule l'utilisation 
              pour un usage privé est autorisée sous réserve de dispositions différentes voire plus 
              restrictives du Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Protection des données */}
          <section className="legal-section">
            <h2><Shield className="inline h-5 w-5 mr-2" /> Protection des données personnelles (RGPD)</h2>
            <h3>Collecte des données</h3>
            <p>
              Les informations personnelles collectées via le site (formulaire de contact, commandes) 
              sont destinées uniquement à NEOTECH TILEWUYU et ne sont jamais transmises à des tiers.
            </p>
            <h3>Finalité de la collecte</h3>
            <p>Les données collectées sont utilisées pour :</p>
            <ul>
              <li>Répondre aux demandes de contact</li>
              <li>Traiter les commandes</li>
              <li>Assurer le suivi des prestations</li>
              <li>Améliorer nos services</li>
            </ul>
            <h3>Durée de conservation</h3>
            <p>
              Les données personnelles sont conservées pendant une durée maximale de 3 ans à compter 
              du dernier contact avec le Client, conformément à la réglementation en vigueur.
            </p>
            <h3>Droits des utilisateurs</h3>
            <p>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au 
              Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées</li>
              <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>neotech.tilewuyu@gmail.com</strong>
            </p>
          </section>

          {/* Cookies */}
          <section className="legal-section">
            <h2>Cookies</h2>
            <p>
              Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. 
              Ces cookies ne collectent aucune donnée personnelle et ne sont pas utilisés à des 
              fins publicitaires.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, cela 
              pourrait affecter le fonctionnement de certaines fonctionnalités du site.
            </p>
          </section>

          {/* Limitation de responsabilité */}
          <section className="legal-section">
            <h2>Limitation de responsabilité</h2>
            <p>
              NEOTECH TILEWUYU s'efforce d'assurer l'exactitude et la mise à jour des informations 
              diffusées sur ce site. Toutefois, NEOTECH TILEWUYU ne peut garantir l'exactitude, 
              la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              NEOTECH TILEWUYU décline toute responsabilité pour toute imprécision, inexactitude 
              ou omission portant sur des informations disponibles sur le site, ainsi que pour 
              tous dommages résultant d'une intrusion frauduleuse d'un tiers.
            </p>
          </section>

          {/* Liens hypertextes */}
          <section className="legal-section">
            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites internet. NEOTECH TILEWUYU 
              n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à 
              leur contenu ou aux services proposés.
            </p>
          </section>

          {/* Droit applicable */}
          <section className="legal-section">
            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, 
              et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="legal-footer">
          <p><strong>NEOTECH TILEWUYU</strong></p>
          <p>SIRET : 940 487 747 00013 | Code APE : 4619B</p>
          <p>Domiciliation : LegalPlace, 60 rue François 1er, 75008 Paris</p>
        </div>
      </div>
    </div>
  );
};
