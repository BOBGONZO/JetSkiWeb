import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images - using the jet ski images we found
  const slides = [
    {
      image: 'https://ugc.same-assets.com/Hal65SkrVC9h3Ih_XcTcyyG9Pgzeb2i8.jpeg',
      title: 'Premium Jet Ski Experience',
      subtitle: 'At a price you can easily afford',
      description: 'Regardless of your credit score'
    },
    {
      image: 'https://ugc.same-assets.com/-OHncaFtcYDtQvhJKNHIeH2xs8cxqt_w.jpeg',
      title: 'Performance & Adventure',
      subtitle: 'Feel the thrill on the water',
      description: 'High-performance models available'
    },
    {
      image: 'https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg',
      title: 'Your Water Adventure Awaits',
      subtitle: 'Quality jet skis for every lifestyle',
      description: 'Sales, service, and financing'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="text-white">
              <p className="text-lg sm:text-xl mb-2 font-medium text-blue-300">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-base sm:text-lg mb-6 text-gray-200">
                {slides[currentSlide].description}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Welcome to Aqua Motors
              </h1>
              <p className="text-xl sm:text-2xl mb-10 text-gray-200 font-light">
                We don't just sell jet skis, We build water adventures
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#inventory"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors text-center"
                >
                  View Inventory
                </a>
                <a
                  href="#financing"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors text-center"
                >
                  Get Approved
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md text-lg font-semibold transition-colors text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
