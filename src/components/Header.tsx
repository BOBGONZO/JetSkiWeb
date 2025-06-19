import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
              <a href="#" className="hover:text-blue-300 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="no-underline">
              <h1 className="text-3xl font-bold text-blue-600">Aqua Motors</h1>
              <p className="text-sm text-gray-600">
                Premium Jet Ski Sales & Service
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/inventory"
                className={`${location.pathname === "/inventory" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
              >
                Inventory
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    to="/inventory"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    All Jet Skis
                  </Link>
                  <Link
                    to="/inventory?featured=true"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Featured Models
                  </Link>
                  <Link
                    to="/inventory?sold=true"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Sold Inventory
                  </Link>
                  <Link
                    to="/contact?service=test-ride"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Book a Test Ride
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/trade-in"
              className={`${location.pathname === "/trade-in" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
            >
              Trade-In
            </Link>
            <div className="relative group">
              <Link
                to="/financing"
                className={`${location.pathname === "/financing" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
              >
                Financing
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    to="/financing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Finance Department
                  </Link>
                  <Link
                    to="/financing/apply"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Apply for Financing
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/service"
              className={`${location.pathname === "/service" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
            >
              Service
            </Link>
            <Link
              to="/about"
              className={`${location.pathname === "/about" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${location.pathname === "/contact" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 font-medium transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:(416)555-AQUA"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
            <Link
              to="/financing"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Get Financed
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 ${location.pathname === "/" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/inventory"
              className={`block px-3 py-2 ${location.pathname === "/inventory" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              to="/trade-in"
              className={`block px-3 py-2 ${location.pathname === "/trade-in" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trade-In
            </Link>
            <Link
              to="/financing"
              className={`block px-3 py-2 ${location.pathname === "/financing" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Financing
            </Link>
            <Link
              to="/service"
              className={`block px-3 py-2 ${location.pathname === "/service" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 ${location.pathname === "/about" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 ${location.pathname === "/contact" ? "text-blue-600" : "text-gray-700"} hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t pt-4 mt-4">
              <a
                href="tel:(416)555-AQUA"
                className="block bg-blue-600 text-white text-center px-3 py-2 rounded-md mb-2"
              >
                Call Now
              </a>
              <Link
                to="/financing"
                className="block bg-green-600 text-white text-center px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Financed
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
