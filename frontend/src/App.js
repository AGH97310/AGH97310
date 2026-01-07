import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { ScrollingLogo } from './components/ScrollingLogo';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ConsoleSection } from './components/ConsoleSection';
import { PerfumeSectionWithCart } from './components/PerfumeSectionWithCart';
import { IndividualServices } from './components/IndividualServices';
import { BusinessServices } from './components/BusinessServices';
import { RemoteITServices } from './components/RemoteITServices';
import { WhyUs } from './components/WhyUs';
import { AboutSection } from './components/AboutSection';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SmartphoneSection } from './components/SmartphoneSection';
import { MiniSmartphoneSection } from './components/MiniSmartphoneSection';
import { CookieConsent } from './components/CookieConsent';

// Legal Pages
import { CGV } from './pages/CGV';
import { MentionsLegales } from './pages/MentionsLegales';
import { CGU } from './pages/CGU';
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite';
import { PolitiqueCookies } from './pages/PolitiqueCookies';

import './App.css';

const Home = () => {
  return (
    <div>
      <Header />
      <ScrollingLogo />
      <main>
        <Hero />
        <IndividualServices />
        <BusinessServices />
        <RemoteITServices />
        <Services />
        <ConsoleSection />
        <SmartphoneSection />
        <MiniSmartphoneSection />
        <PerfumeSectionWithCart />
        <WhyUs />
        <AboutSection />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Legal Pages */}
          <Route path="/cgv" element={<CGV />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/politique-cookies" element={<PolitiqueCookies />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
