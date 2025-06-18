import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(416) 555-AQUA</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>1234 Waterfront Dr, Toronto ON, M5V 3A8</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-blue-600">Aqua Motors</h1>
            <p className="text-sm text-gray-600">Premium Jet Ski Sales & Service</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Inventory
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="#all-inventory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">All Jet Skis</a>
                  <a href="#featured" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Featured Models</a>
                  <a href="#sold" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Sold Inventory</a>
                  <a href="#test-ride" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Book a Test Ride</a>
                </div>
              </div>
            </div>
            <a href="#trade-in" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trade-In</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Financing
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="#finance-dept" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Finance Department</a>
                  <a href="#calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Payment Calculator</a>
                  <a href="#apply" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Apply for Financing</a>
                </div>
              </div>
            </div>
            <a href="#service" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Service</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="#about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">About Us</a>
                  <a href="#team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Our Team</a>
                  <a href="#reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Reviews</a>
                </div>
              </div>
            </div>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:(416)555-AQUA" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Call Now
            </a>
            <a href="#financing" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Get Financed
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#inventory" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Inventory</a>
            <a href="#trade-in" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Trade-In</a>
            <a href="#financing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Financing</a>
            <a href="#service" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Service</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <div className="border-t pt-4 mt-4">
              <a href="tel:(416)555-AQUA" className="block bg-blue-600 text-white text-center px-3 py-2 rounded-md mb-2">
                Call Now
              </a>
              <a href="#financing" className="block bg-green-600 text-white text-center px-3 py-2 rounded-md">
                Get Financed
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
