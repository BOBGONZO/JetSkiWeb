import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedJetSkis from "./components/FeaturedJetSkis";
import ServiceBlocks from "./components/ServiceBlocks";
import SearchByType from "./components/SearchByType";
import Financing from "./components/Financing";
import FinancingApplication from "./components/FinancingApplication";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import InventoryPage from "./components/InventoryPage";
import TradeInPage from "./components/TradeInPage";
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import JetSkiDetailPage from "./components/JetSkiDetailPage";

// Home page component that contains all the sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedJetSkis />
      <ServiceBlocks />
      <SearchByType />
      <Financing />
      <About />
      <Reviews />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<JetSkiDetailPage />} />
          <Route path="/trade-in" element={<TradeInPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/financing/apply" element={<FinancingApplication />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
