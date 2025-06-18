import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedJetSkis from './components/FeaturedJetSkis';
import ServiceBlocks from './components/ServiceBlocks';
import SearchByType from './components/SearchByType';
import Financing from './components/Financing';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedJetSkis />
      <ServiceBlocks />
      <SearchByType />
      <Financing />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
