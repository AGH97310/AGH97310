import React from 'react';
import { Header } from '../components/Header';
import { ScrollingLogo } from '../components/ScrollingLogo';
import { SiteVitrineSection } from '../components/SiteVitrineSection';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const CreationSiteVitrinePage = () => {
  return (
    <div>
      <ScrollingLogo />
      <Header />
      <main>
        <SiteVitrineSection />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
