import React from 'react';
import { Award, Users, Wrench, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: '500+',
      label: 'Jet Skis Sold',
      description: 'Since 2018'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Customers',
      description: 'Across Ontario'
    },
    {
      icon: Wrench,
      number: '15+',
      label: 'Years Experience',
      description: 'In Marine Industry'
    },
    {
      icon: MapPin,
      number: '3',
      label: 'Service Locations',
      description: 'GTA Coverage'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Aqua Motors
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We at Aqua Motors feel as though we are pioneers in the marine recreational industry,
              re-inventing the wheel. Our team feels as though the buying and selling process should be
              easier and more exclusive. You're spending a lot of money, why shouldn't it be? We specialize
              in both high-end performance jet skis and recreational family models!
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our special buying experience includes the sourcing, servicing, detailing and delivering of
              our clients' watercraft! We believe in the integrity of our work and are very prideful of the
              joy we bring to all of our customers!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We have been serving the Greater Toronto Area since 2018 and are a very integral part within
              the marine industry in the Ontario region! Our clients however reach as far as across Canada
              with our services in importing and exporting very rare or in-demand units. Aqua Motors is your
              one-stop shop for all things jet ski! Allow our highly trained specialists to take care of
              your needs today!
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img
              src="https://ugc.same-assets.com/mzja1LJ2c0-Z3Xx6mLELNGbFMV0_8pXD.jpeg"
              alt="Jet ski on water"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-white rounded-lg p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            "To provide exceptional jet ski sales and service experiences that exceed our customers'
            expectations, while building lasting relationships within the marine community. We are committed
            to offering quality watercraft, transparent pricing, and unmatched customer service that makes
            your water adventures memorable and worry-free."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
