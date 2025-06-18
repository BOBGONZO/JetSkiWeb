import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const importantLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Finance', href: '#finance' },
    { name: 'Trade-In Appraisal', href: '#trade-in' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const quickLinks = [
    { name: 'Inventory', href: '#inventory' },
    { name: 'Book A Service Appointment', href: '#service' },
    { name: 'Book A Test Ride', href: '#test-ride' },
    { name: 'About Us', href: '#about' }
  ];

  const hours = [
    { day: 'Monday', time: '9:00 AM to 7:00 PM' },
    { day: 'Tuesday', time: '9:00 AM to 7:00 PM' },
    { day: 'Wednesday', time: '9:00 AM to 7:00 PM' },
    { day: 'Thursday', time: '9:00 AM to 7:00 PM' },
    { day: 'Friday', time: '9:00 AM to 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM to 5:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Aqua Motors</h3>
            <p className="text-gray-400 mb-4">
              Premium Jet Ski Sales & Service
            </p>
            <p className="text-gray-400 mb-6">
              Your one-stop shop for all things jet ski. Quality watercraft,
              transparent pricing, and unmatched customer service.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Our Hours</h4>
            <div className="space-y-2 mb-6">
              {hours.map((hour, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-400">{hour.day}</span>
                  <span className="text-gray-300">{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-blue-400" />
              <div>
                <p className="text-gray-300">1234 Waterfront Dr</p>
                <p className="text-gray-300">Toronto, ON, M5V 3A8</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-blue-400" />
              <div>
                <p className="text-gray-300">Sales: <a href="tel:(416)555-AQUA" className="hover:text-white">(416) 555-AQUA</a></p>
                <p className="text-gray-300">Service: <a href="tel:(416)555-SERV" className="hover:text-white">(416) 555-SERV</a></p>
              </div>
            </div>

            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-blue-400" />
              <div>
                <p className="text-gray-300">
                  <a href="mailto:sales@aquamotors.ca" className="hover:text-white">sales@aquamotors.ca</a>
                </p>
                <p className="text-gray-300">
                  <a href="mailto:service@aquamotors.ca" className="hover:text-white">service@aquamotors.ca</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Aqua Motors. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
