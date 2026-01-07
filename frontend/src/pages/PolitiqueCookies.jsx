import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, BarChart, Shield, CheckCircle, XCircle } from 'lucide-react';
import './LegalPages.css';

export const PolitiqueCookies = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="legal-title">Politique de Cookies</h1>
        <p className="legal-subtitle">
          Conformément à la directive ePrivacy (2002/58/CE) et au RGPD
        </p>
        
        <div className="legal-update">Dernière mise à jour : Janvier 2026</div>

        <section className="legal-section">
          <h2><Cookie className="section-icon" /> 1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
            lors de votre visite sur un site web. Il permet au site de mémoriser des informations sur votre 
            visite, comme votre langue préférée ou vos articles dans le panier.
          </p>
        </section>

        <section className="legal-section">
          <h2><Settings className="section-icon" /> 2. Types de cookies utilisés</h2>
          
          <h3>2.1 Cookies strictement nécessaires</h3>
          <div className="cookie-card essential">
            <CheckCircle className="cookie-icon green" />
            <div>
              <p><strong>Ces cookies sont indispensables au fonctionnement du site.</strong></p>
              <p>Ils ne peuvent pas être désactivés.</p>
            </div>
          </div>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Finalité</th>
                <th>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Maintien de la session utilisateur</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>cart_items</td>
                <td>Sauvegarde du panier d'achat</td>
                <td>7 jours</td>
              </tr>
              <tr>
                <td>csrf_token</td>
                <td>Protection contre les attaques CSRF</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>cookie_consent</td>
                <td>Mémorisation de vos préférences cookies</td>
                <td>12 mois</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Cookies analytiques</h3>
          <div className="cookie-card optional">
            <BarChart className="cookie-icon blue" />
            <div>
              <p><strong>Ces cookies nous aident à comprendre comment les visiteurs utilisent le site.</strong></p>
              <p>Ils nécessitent votre consentement.</p>
            </div>
          </div>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Fournisseur</th>
                <th>Finalité</th>
                <th>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ph_*</td>
                <td>PostHog</td>
                <td>Analyse du comportement utilisateur</td>
                <td>12 mois</td>
              </tr>
              <tr>
                <td>ph_*</td>
                <td>PostHog</td>
                <td>Identification anonyme</td>
                <td>12 mois</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3 Cookies de paiement (PayPal)</h3>
          <div className="cookie-card payment">
            <Shield className="cookie-icon purple" />
            <div>
              <p><strong>Ces cookies sont déposés par PayPal lors du paiement.</strong></p>
              <p>Ils sont nécessaires pour sécuriser votre transaction.</p>
            </div>
          </div>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Fournisseur</th>
                <th>Finalité</th>
                <th>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PYPF</td>
                <td>PayPal</td>
                <td>Détection de fraude</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>ts</td>
                <td>PayPal</td>
                <td>Sécurité des transactions</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>tsrce</td>
                <td>PayPal</td>
                <td>Traçabilité de la source</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>x-pp-s</td>
                <td>PayPal</td>
                <td>Session de paiement</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>
          <p>
            Pour plus d'informations sur les cookies PayPal :{' '}
            <a href="https://www.paypal.com/fr/webapps/mpp/ua/cookie-full" target="_blank" rel="noopener noreferrer">
              Politique cookies PayPal
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Votre consentement</h2>
          <p>
            Conformément à la réglementation, les cookies non essentiels ne sont déposés qu'après votre 
            consentement explicite. Lors de votre première visite, une bannière vous permet de :
          </p>
          <ul>
            <li><strong>Accepter tous les cookies</strong></li>
            <li><strong>Refuser les cookies non essentiels</strong></li>
            <li><strong>Personnaliser vos préférences</strong></li>
          </ul>
          <p>
            Vous pouvez modifier vos préférences à tout moment en utilisant le lien "Gérer les cookies" 
            disponible en bas de chaque page.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Comment gérer les cookies ?</h2>
          
          <h3>4.1 Via notre site</h3>
          <p>
            Cliquez sur le bouton ci-dessous pour modifier vos préférences de cookies :
          </p>
          <button className="cookie-settings-btn" onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}>
            <Settings size={20} />
            Gérer mes préférences cookies
          </button>

          <h3>4.2 Via votre navigateur</h3>
          <p>Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies :</p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                Microsoft Edge
              </a>
            </li>
          </ul>

          <div className="warning-box">
            <XCircle className="warning-icon" />
            <div>
              <p>
                <strong>Attention :</strong> Le blocage de certains cookies peut affecter le fonctionnement 
                du site, notamment le panier d'achat et le processus de paiement.
              </p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Durée de conservation</h2>
          <p>
            Conformément aux recommandations de la CNIL, les cookies ont une durée de vie maximale de 
            <strong> 13 mois</strong>. Votre consentement est valable pour cette même durée, après quoi 
            il vous sera redemandé.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Vos droits</h2>
          <p>
            Vous disposez des droits prévus par le RGPD concernant les données collectées via les cookies. 
            Pour plus d'informations, consultez notre{' '}
            <Link to="/politique-confidentialite">Politique de Confidentialité</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Modifications</h2>
          <p>
            Cette politique de cookies peut être mise à jour. Toute modification sera publiée sur cette page 
            avec la date de mise à jour.
          </p>
        </section>

        <div className="legal-footer">
          <p>
            Pour toute question : <strong>neotech.tilewuyu@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
