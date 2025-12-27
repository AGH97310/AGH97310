import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServicePosters } from './components/ServicePosters';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

// Note: Mise à jour en cours - Le site actuel utilise les composants modulaires
// Une version avec page unique complète peut être ajoutée plus tard

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicePosters />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
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