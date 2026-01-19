import React from 'react';
import { Header } from '../components/Header';
import { ScrollingLogo } from '../components/ScrollingLogo';
import { SmartphoneSection } from '../components/SmartphoneSection';
import { MiniSmartphoneSection } from '../components/MiniSmartphoneSection';
import { TabletSection } from '../components/TabletSection';
import { WhyUs } from '../components/WhyUs';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const SmartphonesTablettesPage = () => {
  return (
    <div>
      <Header />
      <ScrollingLogo />
      <main>
        <SmartphoneSection />
        <MiniSmartphoneSection />
        <TabletSection />
        <WhyUs />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
