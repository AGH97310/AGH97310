import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ConsoleSection } from './components/ConsoleSection';
import { PerfumeSection } from './components/PerfumeSection';
import { IndividualServices } from './components/IndividualServices';
import { BusinessServices } from './components/BusinessServices';
import { WhyUs } from './components/WhyUs';
import { AboutSection } from './components/AboutSection';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import './App.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <ConsoleSection />
        <PerfumeSection />
        <IndividualServices />
        <BusinessServices />
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
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;