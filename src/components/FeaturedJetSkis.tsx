import React from 'react';
import { Eye, Gauge, Calendar } from 'lucide-react';

const FeaturedJetSkis = () => {
  const featuredJetSkis = [
    {
      id: 1,
      year: 2024,
      brand: 'Sea-Doo',
      model: 'RXP-X 325 RS',
      image: 'https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg',
      hours: 12,
      price: 18999,
      features: ['Supercharged Engine', 'Racing Performance', 'Professional Grade']
    },
    {
      id: 2,
      year: 2023,
      brand: 'Yamaha',
      model: 'FX Cruiser HO',
      image: 'https://ugc.same-assets.com/_RC3RLZV-TgbHvp5HbNXTfUs55VggWnS.png',
      hours: 45,
      price: 15299,
      features: ['Luxury Touring', 'Extended Range', 'Comfort Package']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Jet Skis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Some of our jet skis just can't help but draw a little more attention. These are our featured models.
            Every couple of weeks we refresh our listings with a few great deals that we feel deserve a little more
            attention than the rest. But don't linger too long if you see something you like—someone else might be
            eyeing your prize!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredJetSkis.map((jetski) => (
            <div key={jetski.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative">
                <img
                  src={jetski.image}
                  alt={`${jetski.year} ${jetski.brand} ${jetski.model}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {jetski.year} {jetski.brand} {jetski.model}
                </h3>

                {/* Specs */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{jetski.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="h-4 w-4 mr-1" />
                    <span>{jetski.hours} Hours</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {jetski.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ${jetski.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">+ Sales Taxes</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#inventory"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            View All Inventory
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJetSkis;
