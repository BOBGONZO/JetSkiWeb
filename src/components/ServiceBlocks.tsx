import React from 'react';
import { Search, ArrowRightLeft, Waves, Phone } from 'lucide-react';

const ServiceBlocks = () => {
  const services = [
    {
      icon: Search,
      title: 'Used Inventory',
      description: 'Find your dream jet ski.',
      buttonText: 'View Inventory',
      href: '#inventory',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      icon: ArrowRightLeft,
      title: 'Trade-In Estimate',
      description: 'Shop with confidence.',
      buttonText: 'Trade-In',
      href: '#trade-in',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      icon: Waves,
      title: 'Book A Test Ride',
      description: 'Book your test ride now!',
      buttonText: 'Book Now',
      href: '#test-ride',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    },
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Contact Us for Information.',
      buttonText: 'Contact Now',
      href: '#contact',
      bgColor: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} text-white mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className={`inline-block ${service.bgColor} ${service.hoverColor} text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                >
                  {service.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocks;
