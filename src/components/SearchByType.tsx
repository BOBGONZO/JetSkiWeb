import React from 'react';

const SearchByType = () => {
  const jetskiTypes = [
    {
      name: 'Personal',
      image: 'https://ugc.same-assets.com/TFTS6WI-HPxXrvDgmpsLezpfxTG7zH3O.png',
      description: 'Compact and agile for solo adventures',
      href: '#personal'
    },
    {
      name: 'Recreation',
      image: 'https://ugc.same-assets.com/D3OY8EuvQiL3AKd8l0OYW32GFKba0z8L.png',
      description: 'Perfect for family fun and beginners',
      href: '#recreation'
    },
    {
      name: 'Touring',
      image: 'https://ugc.same-assets.com/_RC3RLZV-TgbHvp5HbNXTfUs55VggWnS.png',
      description: 'Comfort and luxury for extended rides',
      href: '#touring'
    },
    {
      name: 'Performance',
      image: 'https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg',
      description: 'High-speed thrills and racing capability',
      href: '#performance'
    },
    {
      name: 'Luxury',
      image: 'https://ugc.same-assets.com/Hal65SkrVC9h3Ih_XcTcyyG9Pgzeb2i8.jpeg',
      description: 'Premium features and ultimate comfort',
      href: '#luxury'
    },
    {
      name: 'Sport',
      image: 'https://ugc.same-assets.com/KHz6vI9-XMPZBh3leUzn4mh0WFoCP3mk.jpeg',
      description: 'Athletic performance and maneuverability',
      href: '#sport'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search By Jet Ski Type
          </h2>
          <p className="text-lg text-gray-600">
            Find the perfect jet ski for your water adventure style
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {jetskiTypes.map((type, index) => (
            <a
              key={index}
              href={type.href}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {type.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#inventory"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            View All Models
          </a>
        </div>
      </div>
    </section>
  );
};

export default SearchByType;
