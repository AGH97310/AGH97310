import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ShoppingCart, CreditCard, Truck, AlertTriangle, Shield, Mail, Phone } from 'lucide-react';
import './LegalPages.css';

export const CGV = () => {
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
            <FileText className="legal-icon" />
            <h1 className="legal-title">Conditions Générales de Vente</h1>
          </div>
          <p className="legal-updated">Dernière mise à jour : Décembre 2025</p>
        </div>

        {/* Content */}
        <div className="legal-content">
          {/* Article 1 */}
          <section className="legal-section">
            <h2><span className="section-number">Article 1</span> - Objet et champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              <strong> NEOTECH TILEWUYU</strong>, micro-entreprise enregistrée sous le SIRET 940 487 747 00013, 
              et ses clients (ci-après "le Client").
            </p>
            <p>
              Elles s'appliquent à l'ensemble des prestations de services informatiques et des ventes de produits 
              proposés par NEOTECH TILEWUYU, notamment :
            </p>
            <ul>
              <li>Services d'assistance informatique à distance</li>
              <li>Création de sites web</li>
              <li>Vente de consoles de jeux vidéo</li>
              <li>Vente de parfums orientaux</li>
            </ul>
          </section>

          {/* Article 2 */}
          <section className="legal-section">
            <h2><ShoppingCart className="inline h-5 w-5 mr-2" /><span className="section-number">Article 2</span> - Commandes</h2>
            <p>
              Toute commande implique l'acceptation pleine et entière des présentes CGV. Le Client reconnaît 
              avoir pris connaissance des présentes conditions avant de passer commande.
            </p>
            <h3>2.1 - Processus de commande</h3>
            <p>
              Les commandes peuvent être passées via WhatsApp (+594 694 45 85 84), par email 
              (neotech.tilewuyu@gmail.com) ou via les formulaires du site web.
            </p>
            <h3>2.2 - Montant minimum</h3>
            <p>
              Pour les parfums, un montant minimum de commande de <strong>100€</strong> est requis.
            </p>
          </section>

          {/* Article 3 */}
          <section className="legal-section">
            <h2><CreditCard className="inline h-5 w-5 mr-2" /><span className="section-number">Article 3</span> - Prix et paiement</h2>
            <p>
              Les prix sont indiqués en euros (€) TTC. NEOTECH TILEWUYU n'est pas assujettie à la TVA 
              (article 293B du CGI).
            </p>
            <h3>3.1 - Modalités de paiement</h3>
            <p>Les paiements peuvent être effectués par :</p>
            <ul>
              <li>PayPal (paiement sécurisé en ligne)</li>
              <li>Virement bancaire</li>
              <li>Carte bancaire</li>
              <li>Espèces (sur rendez-vous uniquement)</li>
            </ul>
            <h3>3.2 - Confirmation de paiement</h3>
            <p>
              La commande n'est traitée qu'après réception du paiement intégral. Un récapitulatif de 
              commande est envoyé au Client par WhatsApp ou email.
            </p>
          </section>

          {/* Article 4 */}
          <section className="legal-section">
            <h2><Truck className="inline h-5 w-5 mr-2" /><span className="section-number">Article 4</span> - Livraison</h2>
            <h3>4.1 - Délais de livraison</h3>
            <p>
              Les commandes validées sont traitées chaque <strong>vendredi à 19h</strong>. La livraison 
              est effectuée généralement le mardi ou mercredi suivant.
            </p>
            <h3>4.2 - Zone de livraison</h3>
            <p>
              La livraison est <strong>gratuite à Kourou</strong>. Pour les autres communes de Guyane, 
              des frais de livraison peuvent s'appliquer selon la destination.
            </p>
            <h3>4.3 - Suivi de commande</h3>
            <p>
              Un suivi personnalisé est assuré via WhatsApp. Le Client est informé de l'avancement de 
              sa commande à chaque étape.
            </p>
          </section>

          {/* Article 5 */}
          <section className="legal-section">
            <h2><AlertTriangle className="inline h-5 w-5 mr-2" /><span className="section-number">Article 5</span> - Droit de rétractation</h2>
            <p>
              Conformément à l'article L221-18 du Code de la consommation, le Client dispose d'un délai 
              de <strong>14 jours</strong> à compter de la réception du produit pour exercer son droit 
              de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p>
              Ce droit ne s'applique pas aux produits ouverts, utilisés ou descellés (parfums notamment).
            </p>
            <p>
              Pour les services d'assistance informatique, le droit de rétractation ne peut être exercé 
              une fois la prestation commencée avec l'accord du Client.
            </p>
          </section>

          {/* Article 6 */}
          <section className="legal-section">
            <h2><Shield className="inline h-5 w-5 mr-2" /><span className="section-number">Article 6</span> - Garantie</h2>
            <h3>6.1 - Services informatiques</h3>
            <p>
              NEOTECH TILEWUYU offre une garantie de <strong>48 heures</strong> sur les interventions 
              d'assistance informatique. En cas de problème lié à l'intervention, une nouvelle assistance 
              gratuite sera proposée.
            </p>
            <h3>6.2 - Produits</h3>
            <p>
              Les produits vendus bénéficient de la garantie légale de conformité (articles L217-4 et suivants 
              du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du 
              Code civil).
            </p>
          </section>

          {/* Article 7 */}
          <section className="legal-section">
            <h2><span className="section-number">Article 7</span> - Réclamations</h2>
            <p>Pour toute réclamation, le Client peut contacter NEOTECH TILEWUYU :</p>
            <div className="contact-info">
              <p><Phone className="inline h-4 w-4 mr-2" /> +594 694 45 85 84 (WhatsApp)</p>
              <p><Mail className="inline h-4 w-4 mr-2" /> neotech.tilewuyu@gmail.com</p>
            </div>
            <p>
              Toute réclamation sera traitée dans un délai de 48 heures ouvrées.
            </p>
          </section>

          {/* Article 8 */}
          <section className="legal-section">
            <h2><span className="section-number">Article 8</span> - Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, et après tentative 
              de résolution amiable, le tribunal compétent sera celui du lieu de domiciliation de 
              NEOTECH TILEWUYU (Paris).
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
