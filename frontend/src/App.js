import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ScrollingLogo } from './components/ScrollingLogo';
import { Hero } from './components/Hero';
import { HomeOverview } from './components/HomeOverview';
import { WhyUs } from './components/WhyUs';
import { AboutSection } from './components/AboutSection';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsent } from './components/CookieConsent';
import { UnifiedCart } from './components/UnifiedCart';

// Category Pages
import { DepannageDistancePage } from './pages/DepannageDistancePage';
import { RecuperationDonneesPage } from './pages/RecuperationDonneesPage';
import { CreationSiteVitrinePage } from './pages/CreationSiteVitrinePage';
import { GamingAccessoiresPage } from './pages/GamingAccessoiresPage';
import { SmartphonesTablettesPage } from './pages/SmartphonesTablettesPage';
import { ParfumerieOrientalePage } from './pages/ParfumerieOrientalePage';

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
        <HomeOverview />
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
        <CartProvider>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            
            {/* Service Pages */}
            <Route path="/depannage-distance" element={<DepannageDistancePage />} />
            <Route path="/recuperation-donnees" element={<RecuperationDonneesPage />} />
            <Route path="/creation-site-vitrine" element={<CreationSiteVitrinePage />} />
            
            {/* Product Pages */}
            <Route path="/gaming-accessoires" element={<GamingAccessoiresPage />} />
            <Route path="/smartphones-tablettes" element={<SmartphonesTablettesPage />} />
            <Route path="/parfumerie-orientale" element={<ParfumerieOrientalePage />} />
            
            {/* Legal Pages */}
            <Route path="/cgv" element={<CGV />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/politique-cookies" element={<PolitiqueCookies />} />
          </Routes>
          <UnifiedCart />
          <CookieConsent />
        </CartProvider>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
