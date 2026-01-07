import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Eye, Lock, Mail, Clock, UserCheck } from 'lucide-react';
import './LegalPages.css';

export const PolitiqueConfidentialite = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="legal-title">Politique de Confidentialité</h1>
        <p className="legal-subtitle">
          Conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) 
          et à la loi Informatique et Libertés
        </p>
        
        <div className="legal-update">Dernière mise à jour : Janvier 2026</div>

        <section className="legal-section">
          <h2><Shield className="section-icon" /> 1. Responsable du traitement</h2>
          <div className="info-card">
            <p><strong>NEOTECH TILEWUYU</strong></p>
            <p>Micro-entreprise</p>
            <p>Adresse de domiciliation : 60 rue François 1er, 75008 Paris</p>
            <p>Lieu d'activité : Kourou, 97310 Guyane française</p>
            <p>SIRET : 994 048 774 700 013</p>
            <p>Email : neotech.tilewuyu@gmail.com</p>
            <p>Téléphone : +594 694 45 85 84</p>
          </div>
          <p>
            <strong>Délégué à la Protection des Données (DPO) :</strong> Non applicable (micro-entreprise)
          </p>
        </section>

        <section className="legal-section">
          <h2><Database className="section-icon" /> 2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          
          <h3>2.1 Données d'identification</h3>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale (pour la livraison)</li>
          </ul>

          <h3>2.2 Données de commande</h3>
          <ul>
            <li>Historique des commandes</li>
            <li>Produits achetés</li>
            <li>Montants des transactions</li>
            <li>Adresses de livraison</li>
          </ul>

          <h3>2.3 Données de paiement</h3>
          <div className="info-card highlight">
            <Lock className="section-icon" />
            <div>
              <p><strong>Important : NEOTECH TILEWUYU ne stocke AUCUNE donnée de carte bancaire.</strong></p>
              <p>
                Tous les paiements sont traités directement par PayPal. Vos informations de paiement 
                (numéro de carte, date d'expiration, CVV) sont transmises de manière sécurisée à PayPal 
                et ne transitent jamais par nos serveurs.
              </p>
              <p>
                Seule la confirmation de paiement (succès/échec) et l'identifiant de transaction PayPal 
                sont conservés pour le suivi des commandes.
              </p>
            </div>
          </div>

          <h3>2.4 Données de navigation</h3>
          <ul>
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Pages visitées</li>
            <li>Durée de visite</li>
            <li>Cookies (voir notre <Link to="/politique-cookies">Politique de Cookies</Link>)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2><Eye className="section-icon" /> 3. Finalités et bases légales</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Finalité</th>
                <th>Base légale (RGPD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Traitement et suivi des commandes</td>
                <td>Exécution du contrat (Art. 6.1.b)</td>
              </tr>
              <tr>
                <td>Paiement via PayPal</td>
                <td>Exécution du contrat (Art. 6.1.b)</td>
              </tr>
              <tr>
                <td>Livraison des produits</td>
                <td>Exécution du contrat (Art. 6.1.b)</td>
              </tr>
              <tr>
                <td>Service client</td>
                <td>Exécution du contrat (Art. 6.1.b)</td>
              </tr>
              <tr>
                <td>Obligations comptables et fiscales</td>
                <td>Obligation légale (Art. 6.1.c)</td>
              </tr>
              <tr>
                <td>Envoi de newsletters</td>
                <td>Consentement (Art. 6.1.a)</td>
              </tr>
              <tr>
                <td>Amélioration du site</td>
                <td>Intérêt légitime (Art. 6.1.f)</td>
              </tr>
              <tr>
                <td>Prévention de la fraude</td>
                <td>Intérêt légitime (Art. 6.1.f)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="legal-section">
          <h2><Clock className="section-icon" /> 4. Durée de conservation</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Type de données</th>
                <th>Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Données de compte client</td>
                <td>3 ans après la dernière activité</td>
              </tr>
              <tr>
                <td>Données de commande/factures</td>
                <td>10 ans (obligation comptable)</td>
              </tr>
              <tr>
                <td>Données de paiement (ID transaction)</td>
                <td>10 ans (obligation comptable)</td>
              </tr>
              <tr>
                <td>Données de navigation</td>
                <td>13 mois maximum</td>
              </tr>
              <tr>
                <td>Cookies</td>
                <td>13 mois maximum</td>
              </tr>
              <tr>
                <td>Demandes de contact</td>
                <td>3 ans</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="legal-section">
          <h2>5. Destinataires des données</h2>
          <p>Vos données peuvent être transmises à :</p>
          <ul>
            <li><strong>PayPal :</strong> Pour le traitement des paiements (voir leur{' '}
              <a href="https://www.paypal.com/fr/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">
                politique de confidentialité
              </a>)
            </li>
            <li><strong>Services de livraison :</strong> Pour l'acheminement des colis</li>
            <li><strong>Hébergeur (Emergent.sh) :</strong> Pour l'hébergement technique du site</li>
            <li><strong>Autorités compétentes :</strong> En cas d'obligation légale ou de fraude</li>
          </ul>
          <p>
            <strong>Transferts hors UE :</strong> PayPal peut transférer des données vers les États-Unis. 
            Ces transferts sont encadrés par les Clauses Contractuelles Types de la Commission Européenne.
          </p>
        </section>

        <section className="legal-section">
          <h2><UserCheck className="section-icon" /> 6. Vos droits (Articles 15-22 RGPD)</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          
          <div className="rights-grid">
            <div className="right-card">
              <h4>Droit d'accès</h4>
              <p>Obtenir confirmation du traitement de vos données et en recevoir une copie</p>
            </div>
            <div className="right-card">
              <h4>Droit de rectification</h4>
              <p>Corriger des données inexactes ou compléter des données incomplètes</p>
            </div>
            <div className="right-card">
              <h4>Droit à l'effacement</h4>
              <p>Demander la suppression de vos données ("droit à l'oubli")</p>
            </div>
            <div className="right-card">
              <h4>Droit à la limitation</h4>
              <p>Limiter le traitement de vos données dans certains cas</p>
            </div>
            <div className="right-card">
              <h4>Droit à la portabilité</h4>
              <p>Recevoir vos données dans un format structuré et lisible</p>
            </div>
            <div className="right-card">
              <h4>Droit d'opposition</h4>
              <p>Vous opposer au traitement de vos données pour prospection</p>
            </div>
          </div>

          <h3>Comment exercer vos droits ?</h3>
          <div className="info-card">
            <p>Envoyez votre demande par email à : <strong>neotech.tilewuyu@gmail.com</strong></p>
            <p>Joignez une copie d'un justificatif d'identité pour les demandes d'accès, rectification ou suppression.</p>
            <p>Nous répondrons dans un délai d'un mois maximum.</p>
          </div>

          <h3>Réclamation auprès de la CNIL</h3>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
            auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
          </p>
          <p>
            <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
              www.cnil.fr/fr/plaintes
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2><Lock className="section-icon" /> 7. Sécurité des données</h2>
          <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
          <ul>
            <li>Chiffrement SSL/TLS pour toutes les communications</li>
            <li>Pare-feu et systèmes de détection d'intrusion</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Formation du personnel à la protection des données</li>
          </ul>
          <div className="info-card highlight">
            <p>
              <strong>Conformité PCI-DSS :</strong> Les paiements étant traités par PayPal (certifié PCI-DSS Level 1), 
              vos données bancaires bénéficient du plus haut niveau de sécurité.
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>8. Cookies</h2>
          <p>
            Pour plus d'informations sur l'utilisation des cookies, consultez notre{' '}
            <Link to="/politique-cookies">Politique de Cookies</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Traitement des données par PayPal</h2>
          <p>
            Lors du paiement, vous êtes redirigé vers la plateforme PayPal qui traite vos données de paiement 
            selon sa propre politique de confidentialité. PayPal agit en tant que responsable de traitement 
            indépendant pour ces données.
          </p>
          <p>
            <strong>Politique de confidentialité PayPal :</strong>{' '}
            <a href="https://www.paypal.com/fr/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">
              https://www.paypal.com/fr/webapps/mpp/ua/privacy-full
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour. En cas de modification substantielle, 
            nous vous en informerons par email ou par une notification sur le site.
          </p>
        </section>

        <div className="legal-footer">
          <p>
            <Mail className="footer-icon" /> Pour toute question : <strong>neotech.tilewuyu@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
