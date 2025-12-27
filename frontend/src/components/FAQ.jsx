import React from 'react';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import './FAQ.css';

export const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQ – Questions fréquentes</h2>
          <p className="faq-subtitle">Tout ce que vous devez savoir sur nos services</p>
        </div>

        <Card className="faq-card">
          <CardContent className="faq-content">
            <Accordion type="single" collapsible className="faq-accordion">
              <AccordionItem value="item-1">
                <AccordionTrigger className="faq-trigger">
                  1️⃣ Comment se passe l'intervention à distance ?
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  Toutes nos interventions à distance se font via un logiciel sécurisé (ex. TeamViewer).
                  Vous n'avez aucun déplacement à effectuer, nous nous connectons directement à votre appareil pour diagnostiquer et résoudre le problème.
                  Le tout en toute sécurité et avec votre autorisation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="faq-trigger">
                  2️⃣ Quels appareils sont pris en charge ?
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  <p className="mb-2">Nous intervenons sur :</p>
                  <ul className="faq-list">
                    <li>Ordinateurs Windows 10/11 (PC portables et fixes)</li>
                    <li>Smartphones et tablettes (iPhone, Samsung, autres Android)</li>
                    <li>Création et maintenance de sites web pour TPE, PME et administrations</li>
                    <li>Applications et comptes en ligne (Gmail, Facebook, Instagram, autres)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="faq-trigger">
                  3️⃣ Quels sont les délais pour un dépannage ou un site web ?
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  <ul className="faq-list">
                    <li><span className="faq-highlight">Dépannage IT à distance :</span> intervention immédiate ou sous 48h selon la complexité.</li>
                    <li><span className="faq-highlight">Création de site vitrine :</span> site complet livré en 10 jours, prêt à être publié.</li>
                    <li><span className="faq-highlight">Maintenance smartphone :</span> interventions express ou selon planning convenu.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="faq-trigger">
                  4️⃣ Comment se déroule le paiement ?
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  Le paiement est effectué uniquement après résultat.
                  Modes de paiement acceptés : virement bancaire, carte bancaire ou espèces (sur rendez-vous).
                  Pas de frais cachés, pas d'avance obligatoire pour les interventions à distance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="faq-trigger">
                  5️⃣ Puis-je bénéficier d'un diagnostic gratuit ?
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  Oui ! Chaque client bénéficie d'un diagnostic gratuit de 15 minutes à distance, pour évaluer rapidement le problème ou le besoin avant toute intervention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="faq-trigger">
                  6️⃣ Est-ce que vous intervenez sur toute la Guyane ?
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  Oui ! Nos interventions à distance couvrent l'ensemble de la Guyane française.
                  Pour les interventions sur site, nous sommes basés à Kourou et nous nous déplaçons dans les zones voisines (Ouest Guyanais, Cayenne).
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="faq-cta">
              <Button 
                asChild
                size="lg" 
                className="faq-whatsapp-btn"
              >
                <a 
                  href="https://wa.me/594694458584" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Besoin d'aide ? Contactez-nous sur WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
