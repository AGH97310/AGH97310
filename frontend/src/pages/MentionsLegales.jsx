import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Mail, Phone, Globe, Shield } from 'lucide-react';
import './LegalPages.css';

export const MentionsLegales = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="legal-title">Mentions Légales</h1>
        <p className="legal-subtitle">Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)</p>
        
        <div className="legal-update">Dernière mise à jour : Janvier 2026</div>

        <section className="legal-section">
          <h2><Building2 className="section-icon" /> 1. Éditeur du site</h2>
          <div className="info-card">
            <p><strong>Raison sociale :</strong> NEOTECH TILEWUYU</p>
            <p><strong>Forme juridique :</strong> [À compléter : Auto-entrepreneur / SARL / SAS]</p>
            <p><strong>Adresse du siège social :</strong> [À compléter], Kourou, 97310 Guyane française</p>
            <p><strong>SIRET :</strong> [À compléter - 14 chiffres]</p>
            <p><strong>SIREN :</strong> [À compléter - 9 chiffres]</p>
            <p><strong>RCS :</strong> Cayenne [À compléter]</p>
            <p><strong>N° TVA Intracommunautaire :</strong> FR [À compléter] (si applicable)</p>
            <p><strong>Capital social :</strong> [À compléter] € (si applicable)</p>
            <p><strong>Directeur de la publication :</strong> [Nom du responsable légal]</p>
          </div>
        </section>

        <section className="legal-section">
          <h2><Mail className="section-icon" /> 2. Contact</h2>
          <div className="info-card">
            <p><strong>Téléphone :</strong> +594 694 45 85 84</p>
            <p><strong>Email :</strong> neotech.tilewuyu@gmail.com</p>
            <p><strong>WhatsApp :</strong> +594 694 45 85 84</p>
          </div>
        </section>

        <section className="legal-section">
          <h2><Globe className="section-icon" /> 3. Hébergement</h2>
          <div className="info-card">
            <p><strong>Hébergeur :</strong> Emergent.sh</p>
            <p><strong>Société :</strong> Emergent Labs Inc.</p>
            <p><strong>Adresse :</strong> [Adresse Emergent Labs]</p>
            <p><strong>Site web :</strong> <a href="https://emergent.sh" target="_blank" rel="noopener noreferrer">https://emergent.sh</a></p>
          </div>
        </section>

        <section className="legal-section">
          <h2><Shield className="section-icon" /> 4. Prestataire de paiement</h2>
          <div className="info-card highlight">
            <p><strong>Service de paiement :</strong> PayPal (Europe) S.à r.l. et Cie, S.C.A.</p>
            <p><strong>Siège social :</strong> 22-24 Boulevard Royal, L-2449 Luxembourg</p>
            <p><strong>Agrément :</strong> Établissement de crédit agréé par la Commission de Surveillance du Secteur Financier (CSSF)</p>
            <p><strong>Conformité PCI-DSS :</strong> PayPal est certifié PCI-DSS Level 1, le plus haut niveau de certification de sécurité pour les paiements.</p>
            <p className="info-note">
              <strong>Important :</strong> NEOTECH TILEWUYU ne stocke aucune donnée de carte bancaire. 
              Tous les paiements par carte sont traités directement et exclusivement par PayPal via une connexion sécurisée SSL/TLS.
            </p>
            <p><strong>Politique de confidentialité PayPal :</strong> <a href="https://www.paypal.com/fr/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">privacy.paypal.com</a></p>
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Activité</h2>
          <p>NEOTECH TILEWUYU est spécialisé dans :</p>
          <ul>
            <li><strong>Services IT :</strong> Dépannage informatique, assistance technique, création de sites web</li>
            <li><strong>Vente de produits high-tech :</strong> Smartphones, tablettes, ordinateurs, jeux vidéo, consoles</li>
            <li><strong>Vente de parfums orientaux premium</strong></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
            les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement 
            interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) 
            et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, 
            de rectification, de suppression et d'opposition aux données vous concernant.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous à : <strong>neotech.tilewuyu@gmail.com</strong>
          </p>
          <p>
            Pour plus d'informations, consultez notre <Link to="/politique-confidentialite">Politique de Confidentialité</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur. 
            Pour en savoir plus, consultez notre <Link to="/politique-cookies">Politique de Cookies</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Litiges</h2>
          <p>
            Conformément à l'article L.612-1 du Code de la consommation, en cas de litige, vous pouvez 
            recourir gratuitement au service de médiation :
          </p>
          <div className="info-card">
            <p><strong>Médiateur de la consommation :</strong> [À compléter - nom du médiateur]</p>
            <p><strong>Site :</strong> [À compléter]</p>
          </div>
          <p>
            <strong>Plateforme européenne de règlement des litiges (ODR) :</strong>{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, 
            et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <div className="legal-footer">
          <p>Ces mentions légales peuvent être modifiées à tout moment. Nous vous invitons à les consulter régulièrement.</p>
        </div>
      </div>
    </div>
  );
};
