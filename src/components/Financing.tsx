import React from 'react';
import { CreditCard, Shield, Clock, CheckCircle } from 'lucide-react';

const Financing = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: 'All Credit Types Welcome',
      description: 'Good credit, bad credit, or no credit - we work with everyone'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Your financial information is protected with bank-level security'
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get pre-approved in minutes, not hours or days'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Terms',
      description: 'Customizable payment plans to fit your budget'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Good Credit, Bad Credit, No Credit?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All types of credit, from good to bad, can qualify for a jet ski loan. No credit, no problem!
              We will work with you to secure a no credit jet ski loan if your situation demands it.
              Aqua Motors has strong relationships and is committed to finding you the perfect loan company
              to suit your financing needs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Low interest jet ski loans are available for customers with existing loans. We can help you
              refinance your loan or adjust the term of the contract. You're just a step away from approved
              jet ski financing!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors text-center"
              >
                Apply Now
              </a>
              <a
                href="#calculator"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors text-center"
              >
                Payment Calculator
              </a>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get on the Water?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't let financing hold you back from your dream jet ski. Our finance team is here to help
            you navigate the process and get you approved quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Start Application
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Speak with Finance Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
