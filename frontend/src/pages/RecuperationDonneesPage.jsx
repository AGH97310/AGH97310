import React from 'react';
import { Header } from '../components/Header';
import { ScrollingLogo } from '../components/ScrollingLogo';
import { DataRecoverySection } from '../components/DataRecoverySection';
import { WhyUs } from '../components/WhyUs';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const RecuperationDonneesPage = () => {
  return (
    <div>
      <Header />
      <ScrollingLogo />
      <main>
        <DataRecoverySection />
        <WhyUs />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
