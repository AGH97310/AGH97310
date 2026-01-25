import React from 'react';
import { Header } from '../components/Header';
import { ScrollingLogo } from '../components/ScrollingLogo';
import { RemoteITServices } from '../components/RemoteITServices';
import { WhyUs } from '../components/WhyUs';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const DepannageDistancePage = () => {
  return (
    <div>
      <ScrollingLogo />
      <Header />
      <main>
        <RemoteITServices />
        <WhyUs />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
