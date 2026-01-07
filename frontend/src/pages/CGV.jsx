import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, Scale, Leaf, AlertTriangle } from 'lucide-react';
import './LegalPages.css';

export const CGV = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="legal-title">Conditions Générales de Vente (CGV)</h1>
        <p className="legal-subtitle">
          Conformément aux articles L.111-1 et suivants du Code de la consommation
        </p>
        
        <div className="legal-update">Dernière mise à jour : Janvier 2026</div>

        <div className="legal-toc">
          <h3>Sommaire</h3>
          <ol>
            <li><a href="#article-1">Objet et champ d'application</a></li>
            <li><a href="#article-2">Produits et services</a></li>
            <li><a href="#article-3">Prix</a></li>
            <li><a href="#article-4">Commande</a></li>
            <li><a href="#article-5">Paiement via PayPal</a></li>
            <li><a href="#article-6">Livraison</a></li>
            <li><a href="#article-7">Droit de rétractation</a></li>
            <li><a href="#article-8">Garanties légales</a></li>
            <li><a href="#article-9">Produits électroniques</a></li>
            <li><a href="#article-10">Parfums</a></li>
            <li><a href="#article-11">Jeux vidéo</a></li>
            <li><a href="#article-12">Responsabilité</a></li>
            <li><a href="#article-13">Médiation et litiges</a></li>
          </ol>
        </div>

        <section id="article-1" className="legal-section">
          <h2><ShoppingCart className="section-icon" /> Article 1 - Objet et champ d'application</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
            NEOTECH TILEWUYU (ci-après "le Vendeur") et toute personne physique ou morale effectuant un achat 
            sur le site neotech.tilewuyu.fr (ci-après "le Client").
          </p>
          <p>
            Toute commande implique l'acceptation sans réserve des présentes CGV. Le Vendeur se réserve le 
            droit de modifier ces conditions à tout moment. Les CGV applicables sont celles en vigueur à la 
            date de la commande.
          </p>
        </section>

        <section id="article-2" className="legal-section">
          <h2>Article 2 - Produits et services</h2>
          <p>Les produits et services proposés sont :</p>
          <ul>
            <li><strong>Produits high-tech :</strong> Smartphones, tablettes, ordinateurs, consoles de jeux</li>
            <li><strong>Jeux vidéo :</strong> Jeux physiques et accessoires gaming</li>
            <li><strong>Parfums orientaux :</strong> Parfums et eaux de toilette premium</li>
            <li><strong>Services IT :</strong> Dépannage informatique, maintenance, création de sites web</li>
          </ul>
          <p>
            Les photographies et descriptions des produits sont fournies à titre indicatif. En cas de différence 
            mineure entre la photographie et le produit livré, la responsabilité du Vendeur ne saurait être engagée.
          </p>
          <p>
            <strong>Disponibilité :</strong> Les offres de produits sont valables dans la limite des stocks disponibles.
          </p>
        </section>

        <section id="article-3" className="legal-section">
          <h2>Article 3 - Prix</h2>
          <div className="info-card highlight">
            <p><strong>Tous les prix sont indiqués en Euros (€) TTC</strong> (Toutes Taxes Comprises), incluant la TVA applicable.</p>
          </div>
          <p>
            Les prix indiqués ne comprennent pas les frais de livraison, qui sont précisés avant la validation 
            de la commande et facturés en supplément.
          </p>
          <p>
            <strong>Éco-participation DEEE :</strong> Pour les produits électroniques et électriques, une éco-participation 
            est incluse dans le prix conformément à la réglementation sur les Déchets d'Équipements Électriques et 
            Électroniques (directive 2012/19/UE). Cette contribution est reversée à un éco-organisme agréé (Ecosystem).
          </p>
          <p>
            Le Vendeur se réserve le droit de modifier ses prix à tout moment, les produits étant facturés sur 
            la base du tarif en vigueur au moment de la validation de la commande.
          </p>
        </section>

        <section id="article-4" className="legal-section">
          <h2>Article 4 - Commande</h2>
          <h3>4.1 Processus de commande</h3>
          <ol>
            <li>Sélection des produits et ajout au panier</li>
            <li>Vérification du panier et des quantités</li>
            <li>Saisie des informations de livraison</li>
            <li>Choix du mode de livraison</li>
            <li>Acceptation des CGV (case à cocher obligatoire)</li>
            <li>Redirection vers PayPal pour le paiement sécurisé</li>
            <li>Confirmation de la commande</li>
          </ol>
          <h3>4.2 Confirmation</h3>
          <p>
            Un email de confirmation récapitulant la commande sera envoyé au Client. La vente n'est définitivement 
            conclue qu'après confirmation du paiement par PayPal et envoi de la confirmation de commande.
          </p>
          <h3>4.3 Montant minimum</h3>
          <p>
            <strong>Pour les parfums :</strong> Un montant minimum de commande de 100€ est requis.
          </p>
        </section>

        <section id="article-5" className="legal-section">
          <h2><CreditCard className="section-icon" /> Article 5 - Paiement via PayPal</h2>
          
          <div className="info-card highlight">
            <h3>5.1 Mode de paiement exclusif</h3>
            <p>
              Les paiements sont effectués <strong>exclusivement via PayPal</strong>, permettant le règlement par :
            </p>
            <ul>
              <li>Carte bancaire (Visa, Mastercard, American Express) via PayPal</li>
              <li>Compte PayPal</li>
              <li>Paiement en 4x sans frais PayPal (sous conditions d'éligibilité)</li>
            </ul>
          </div>

          <h3>5.2 Sécurité des paiements</h3>
          <div className="security-notice">
            <Shield className="security-icon" />
            <div>
              <p><strong>Conformité PCI-DSS :</strong> PayPal est certifié PCI-DSS Level 1.</p>
              <p><strong>NEOTECH TILEWUYU ne stocke aucune donnée de carte bancaire.</strong></p>
              <p>
                Lors du paiement, vous êtes redirigé vers la plateforme sécurisée de PayPal (connexion SSL/TLS 256 bits). 
                Vos informations bancaires sont transmises directement à PayPal et ne transitent jamais par nos serveurs.
              </p>
            </div>
          </div>

          <h3>5.3 Paiement en 4x sans frais</h3>
          <p>
            PayPal propose une option de paiement en 4 fois sans frais pour les commandes éligibles. 
            Cette option est soumise aux conditions de PayPal et à l'acceptation de votre dossier.
          </p>
          <p>
            <a href="https://www.paypal.com/fr/webapps/mpp/paypal-paylater" target="_blank" rel="noopener noreferrer">
              En savoir plus sur PayPal Paiement en 4X
            </a>
          </p>

          <h3>5.4 Validation du paiement</h3>
          <p>
            <strong>Le paiement est irrévocable une fois validé sur PayPal.</strong> La commande sera traitée 
            dès réception de la confirmation de paiement de PayPal.
          </p>
          <div className="warning-box">
            <AlertTriangle className="warning-icon" />
            <p>⚠️ Commande traitée uniquement après règlement complet.</p>
          </div>

          <h3>5.5 Conformité PSD2</h3>
          <p>
            Conformément à la Directive européenne sur les services de paiement (PSD2 - Directive 2015/2366), 
            PayPal applique une authentification forte du client (SCA) pour les paiements par carte, 
            renforçant la sécurité de vos transactions.
          </p>

          <h3>5.6 Litiges de paiement</h3>
          <p>
            En cas de contestation de paiement (chargeback), PayPal peut intervenir selon sa politique 
            de Protection des Achats. Le Vendeur se réserve le droit de contester tout chargeback abusif 
            avec les preuves de livraison.
          </p>
          <p>
            <a href="https://www.paypal.com/fr/webapps/mpp/ua/buyer-protection" target="_blank" rel="noopener noreferrer">
              Politique de Protection des Achats PayPal
            </a>
          </p>
        </section>

        <section id="article-6" className="legal-section">
          <h2><Truck className="section-icon" /> Article 6 - Livraison</h2>
          
          <h3>6.1 Zones de livraison</h3>
          <ul>
            <li><strong>Kourou et environs :</strong> Livraison gratuite ou remise en main propre</li>
            <li><strong>Guyane française :</strong> Frais selon distance</li>
            <li><strong>France métropolitaine :</strong> Frais calculés à la commande</li>
            <li><strong>Union Européenne :</strong> Frais calculés à la commande</li>
          </ul>

          <h3>6.2 Délais de livraison</h3>
          <p>
            Les délais de livraison indicatifs sont de <strong>4 à 7 jours ouvrés</strong> après confirmation du paiement, 
            sauf mention contraire sur la fiche produit.
          </p>
          <p>
            Ces délais peuvent varier en fonction de la disponibilité des produits et de la destination.
          </p>

          <h3>6.3 Transfert de propriété et risques</h3>
          <p>
            Le transfert de propriété et des risques s'effectue au moment de la livraison, c'est-à-dire 
            lors de la remise physique du bien au Client ou à son représentant.
          </p>

          <h3>6.4 Vente internationale</h3>
          <p>
            Pour les livraisons hors France, le Client est responsable du paiement des éventuels droits 
            de douane et taxes d'importation. PayPal gère automatiquement la conversion des devises si applicable.
          </p>
        </section>

        <section id="article-7" className="legal-section">
          <h2><RotateCcw className="section-icon" /> Article 7 - Droit de rétractation</h2>
          
          <div className="info-card highlight">
            <h3>Conformément à l'article L.221-18 du Code de la consommation</h3>
            <p>
              Vous disposez d'un délai de <strong>14 jours calendaires</strong> à compter de la réception 
              du produit pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
          </div>

          <h3>7.1 Exercice du droit</h3>
          <p>
            Pour exercer ce droit, vous devez notifier votre décision par :
          </p>
          <ul>
            <li>Email : neotech.tilewuyu@gmail.com</li>
            <li>Courrier à l'adresse du siège social</li>
          </ul>
          <p>
            Vous pouvez utiliser le formulaire type de rétractation disponible en annexe, mais ce n'est pas obligatoire.
          </p>

          <h3>7.2 Retour des produits</h3>
          <p>
            Vous devez retourner le produit dans son emballage d'origine, complet et en parfait état, 
            dans un délai de 14 jours suivant la notification de rétractation. Les frais de retour sont à votre charge.
          </p>

          <h3>7.3 Remboursement</h3>
          <p>
            Le remboursement sera effectué via PayPal (sur votre compte PayPal ou carte d'origine) dans un 
            délai de 14 jours suivant la réception du produit retourné ou la preuve d'expédition.
          </p>

          <h3>7.4 Exceptions au droit de rétractation</h3>
          <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas :</p>
          <ul>
            <li>Aux produits descellés après livraison ne pouvant être renvoyés pour des raisons d'hygiène (<strong>parfums ouverts</strong>)</li>
            <li>Aux enregistrements audio/vidéo ou logiciels descellés</li>
            <li>Aux biens personnalisés ou confectionnés selon vos spécifications</li>
            <li>Aux services pleinement exécutés avant la fin du délai de rétractation avec votre accord</li>
          </ul>
        </section>

        <section id="article-8" className="legal-section">
          <h2><Shield className="section-icon" /> Article 8 - Garanties légales</h2>
          
          <h3>8.1 Garantie légale de conformité</h3>
          <div className="info-card">
            <p>
              Conformément aux articles L.217-4 à L.217-14 du Code de la consommation, vous bénéficiez d'une 
              <strong> garantie légale de conformité de 2 ans</strong> à compter de la délivrance du bien.
            </p>
            <p>
              En cas de défaut de conformité, vous pouvez choisir entre la réparation et le remplacement du bien. 
              Si ces options sont impossibles, vous pouvez obtenir une réduction du prix ou la résolution de la vente.
            </p>
          </div>

          <h3>8.2 Garantie des vices cachés</h3>
          <p>
            Conformément aux articles 1641 à 1649 du Code civil, vous bénéficiez de la garantie des vices cachés 
            pendant 2 ans à compter de la découverte du vice.
          </p>

          <h3>8.3 Garantie commerciale (si applicable)</h3>
          <p>
            Certains produits bénéficient d'une garantie commerciale du fabricant. Les conditions sont détaillées 
            sur la fiche produit et dans la documentation fournie.
          </p>
        </section>

        <section id="article-9" className="legal-section">
          <h2><Leaf className="section-icon" /> Article 9 - Produits électroniques</h2>
          
          <h3>9.1 Normes et certifications</h3>
          <p>Tous nos produits électroniques sont :</p>
          <ul>
            <li><strong>Marquage CE :</strong> Conformes aux directives européennes applicables</li>
            <li><strong>RoHS :</strong> Conformes à la directive sur les substances dangereuses (2011/65/UE)</li>
            <li><strong>Garantie fabricant :</strong> Selon les conditions du constructeur</li>
          </ul>

          <h3>9.2 Éco-participation DEEE</h3>
          <div className="info-card">
            <p>
              Conformément à la réglementation DEEE (Déchets d'Équipements Électriques et Électroniques - Directive 2012/19/UE), 
              une éco-participation est incluse dans le prix de chaque produit électronique.
            </p>
            <p>
              Cette contribution finance la collecte et le recyclage des équipements en fin de vie via l'éco-organisme 
              <strong> Ecosystem</strong>.
            </p>
            <p>
              <a href="https://www.ecosystem.eco" target="_blank" rel="noopener noreferrer">www.ecosystem.eco</a>
            </p>
          </div>

          <h3>9.3 Reprise de l'ancien équipement</h3>
          <p>
            Pour tout achat d'un équipement neuf, vous pouvez nous retourner gratuitement l'équipement usagé équivalent 
            (reprise "1 pour 1" conformément à l'article L.541-10-8 du Code de l'environnement).
          </p>
        </section>

        <section id="article-10" className="legal-section">
          <h2>Article 10 - Parfums</h2>
          
          <h3>10.1 Conformité cosmétique</h3>
          <p>
            Tous nos parfums sont conformes au <strong>Règlement CE n°1223/2009</strong> relatif aux produits cosmétiques.
          </p>

          <h3>10.2 Informations produit</h3>
          <p>Chaque parfum est accompagné des informations obligatoires :</p>
          <ul>
            <li>Liste des ingrédients (INCI)</li>
            <li>Contenance</li>
            <li>Pays d'origine</li>
            <li>Date de durabilité minimale ou PAO (Période Après Ouverture)</li>
            <li>Précautions d'emploi</li>
          </ul>

          <h3>10.3 Allergènes</h3>
          <div className="warning-box">
            <AlertTriangle className="warning-icon" />
            <div>
              <p>
                <strong>Attention :</strong> Les parfums peuvent contenir des allergènes. 
                La liste des 26 allergènes à déclaration obligatoire est disponible sur chaque fiche produit.
              </p>
              <p>
                En cas de doute, consultez un professionnel de santé avant utilisation.
              </p>
            </div>
          </div>

          <h3>10.4 Conformité REACH</h3>
          <p>
            Nos parfums sont conformes au règlement REACH (CE n°1907/2006) concernant l'enregistrement, 
            l'évaluation et l'autorisation des substances chimiques.
          </p>
        </section>

        <section id="article-11" className="legal-section">
          <h2>Article 11 - Jeux vidéo</h2>
          
          <h3>11.1 Classification PEGI</h3>
          <div className="info-card">
            <p>
              Tous nos jeux vidéo portent la classification PEGI (Pan European Game Information) indiquant 
              l'âge minimum recommandé. Cette classification est visible sur chaque fiche produit.
            </p>
            <ul>
              <li><strong>PEGI 3 :</strong> Convient à tous les âges</li>
              <li><strong>PEGI 7 :</strong> À partir de 7 ans</li>
              <li><strong>PEGI 12 :</strong> À partir de 12 ans</li>
              <li><strong>PEGI 16 :</strong> À partir de 16 ans</li>
              <li><strong>PEGI 18 :</strong> Réservé aux adultes</li>
            </ul>
          </div>

          <h3>11.2 Vente aux mineurs</h3>
          <p>
            Les jeux classés PEGI 18 sont réservés aux personnes majeures. Nous nous réservons le droit 
            de demander une vérification d'âge pour ces produits.
          </p>

          <h3>11.3 Contenus numériques</h3>
          <p>
            Pour les codes de téléchargement, l'activation peut nécessiter une connexion internet et 
            la création d'un compte sur la plateforme du fabricant (Steam, PlayStation Network, etc.).
          </p>
        </section>

        <section id="article-12" className="legal-section">
          <h2>Article 12 - Responsabilité</h2>
          <p>
            NEOTECH TILEWUYU ne saurait être tenu responsable de l'inexécution du contrat en cas de force majeure, 
            de perturbation ou grève des services postaux, ou de tout autre événement indépendant de sa volonté.
          </p>
          <p>
            Les produits proposés sont conformes à la législation française en vigueur. La responsabilité de 
            NEOTECH TILEWUYU ne saurait être engagée en cas de non-respect de la législation du pays où le produit est livré.
          </p>
        </section>

        <section id="article-13" className="legal-section">
          <h2><Scale className="section-icon" /> Article 13 - Médiation et litiges</h2>
          
          <h3>13.1 Réclamations</h3>
          <p>
            Pour toute réclamation, contactez notre service client : <strong>neotech.tilewuyu@gmail.com</strong>
          </p>

          <h3>13.2 Médiation de la consommation</h3>
          <div className="info-card">
            <p>
              Conformément à l'article L.612-1 du Code de la consommation, en cas de litige non résolu, 
              vous pouvez recourir gratuitement à un médiateur de la consommation :
            </p>
            <p><strong>Médiateur :</strong> [À compléter]</p>
            <p><strong>Site :</strong> [À compléter]</p>
          </div>

          <h3>13.3 Plateforme européenne ODR</h3>
          <p>
            Conformément à l'article 14 du Règlement (UE) n°524/2013, vous pouvez également utiliser la 
            plateforme européenne de règlement en ligne des litiges (ODR) :
          </p>
          <p>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>

          <h3>13.4 Protection des Achats PayPal</h3>
          <p>
            En cas de litige concernant un paiement, vous pouvez également ouvrir un litige via le 
            Centre de résolution PayPal, qui peut intervenir en tant que tiers pour résoudre certains différends.
          </p>

          <h3>13.5 Droit applicable et juridiction</h3>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, et après échec de toute 
            tentative de résolution amiable, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <section className="legal-section">
          <h2>Annexe - Formulaire de rétractation</h2>
          <div className="info-card form-template">
            <p><strong>FORMULAIRE DE RÉTRACTATION</strong></p>
            <p>(À compléter et renvoyer uniquement si vous souhaitez vous rétracter du contrat)</p>
            <hr />
            <p>À l'attention de NEOTECH TILEWUYU</p>
            <p>Email : neotech.tilewuyu@gmail.com</p>
            <hr />
            <p>Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat 
            portant sur la vente du bien (*)/pour la prestation de services (*) ci-dessous :</p>
            <p>- Commandé le (*) / reçu le (*) : _______________</p>
            <p>- Numéro de commande : _______________</p>
            <p>- Nom du (des) consommateur(s) : _______________</p>
            <p>- Adresse du (des) consommateur(s) : _______________</p>
            <p>- Date : _______________</p>
            <p>- Signature (uniquement en cas de notification papier) : _______________</p>
            <p><em>(*) Rayez la mention inutile</em></p>
          </div>
        </section>

        <div className="legal-footer">
          <p>
            Ces CGV ont été mises à jour en janvier 2026 et sont conformes au Code de la consommation, 
            à la Directive 2011/83/UE sur les droits des consommateurs, et aux réglementations applicables 
            au commerce électronique.
          </p>
        </div>
      </div>
    </div>
  );
};
