import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, MessageCircle, Briefcase } from 'lucide-react';
import './BusinessServices.css';

export const BusinessServices = () => {
  const services = [
    {
      service: 'Maintenance poste informatique (unité)',
      price: '45 € HT',
      details: 'Nettoyage, MAJ, antivirus, optimisations'
    },
    {
      service: 'Installation réseau, WiFi pro, box, partage fichiers',
      price: 'à partir de 69 € HT',
      details: "Jusqu'à 5 postes + imprimantes"
    },
    {
      service: 'Installation & configuration imprimante pro',
      price: '39 € HT / unité',
      details: 'Tous modèles'
    },
    {
      service: 'Installation & paramétrage suite bureautique (Office)',
      price: '25 € HT / poste',
      details: 'Compte Microsoft/Google pro compris'
    },
    {
      service: 'Sécurisation données, antivirus pro, cloud',
      price: 'sur devis',
      details: 'Selon volume, type de structure'
    },
    {
      service: 'Assistance bureautique externalisée (à distance ou sur site)',
      price: '35 € HT / h',
      details: 'Création docs, formulaires, saisies'
    }
  ];

  const forfait = {
    name: 'Forfait "Maintenance régulière"',
    subtitle: '1 visite/mois',
    price: '129 € HT / mois',
    details: 'Pour structures 1 à 5 postes',
    highlighted: true
  };

  const additionalServices = [
    {
      title: 'Gestion de parc informatique',
      price: 'Sur devis'
    },
    {
      title: 'Installation VPN / accès à distance sécurisé',
      price: 'Sur devis'
    },
    {
      title: 'Tableau de bord automatisé / Google Sheets',
      price: '49 à 99 € HT'
    },
    {
      title: 'Mise en place e-mail pro (nom de domaine)',
      price: '45 € HT'
    }
  ];

  const advantages = [
    'Interlocuteur unique et réactif',
    'RDV rapides (sous 48h)',
    'Devis & facture sur demande',
    'Accompagnement pédagogique et simplifié',
    'Tarifs dégressifs pour contrats longue durée'
  ];

  return (
    <section className="business-section">
      <div className="business-container">
        <div className="business-header">
          <div className="business-badge">
            <Briefcase className="h-4 w-4" />
            OFFRES PROFESSIONNELLES
          </div>
          <h2 className="business-title">Prestations TPE / PME / Indépendants</h2>
          <p className="business-subtitle">
            Tarifs sur devis • Interlocuteur unique • RDV sous 48h
          </p>
        </div>

        <Card className="business-table-card">
          <CardContent className="business-table-content">
            <div className="business-table-wrapper">
              <table className="business-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Tarif HT / Intervention</th>
                    <th>Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index}>
                      <td>{service.service}</td>
                      <td className="price-cell">{service.price}</td>
                      <td className="details-cell">{service.details}</td>
                    </tr>
                  ))}
                  <tr className="forfait-row">
                    <td>
                      <span className="forfait-name">{forfait.name}</span>
                      <span className="forfait-subtitle"> ({forfait.subtitle})</span>
                    </td>
                    <td className="price-cell forfait-price">{forfait.price}</td>
                    <td className="details-cell">{forfait.details}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Services */}
            <div className="additional-services">
              <h3 className="additional-title">Services complémentaires & sur mesure</h3>
              <div className="additional-grid">
                {additionalServices.map((service, index) => (
                  <div key={index} className="additional-item">
                    <span className="additional-service-name">{service.title}</span>
                    <span className="additional-service-price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="business-advantages">
              <h4 className="advantages-title">🟦 Points forts pour les professionnels :</h4>
              <ul className="advantages-list">
                {advantages.map((advantage, index) => (
                  <li key={index}>
                    <CheckCircle className="advantage-icon" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="business-cta">
              <Button 
                asChild
                size="lg"
                className="business-cta-btn"
              >
                <a 
                  href="https://wa.me/594694458584" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Demander un devis professionnel
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
