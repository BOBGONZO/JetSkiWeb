import React, { useState } from 'react';
import { DollarSign, Camera, CheckCircle, TrendingUp, FileText, Clock } from 'lucide-react';

const TradeInPage = () => {
  const [tradeInForm, setTradeInForm] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',

    // Current Jet Ski Info
    currentMake: '',
    currentModel: '',
    currentYear: '',
    currentHours: '',
    currentCondition: 'good',

    // Purchase Details
    originalPrice: '',
    purchaseYear: '',

    // Condition Details
    hasAccidents: 'no',
    hasModifications: 'no',
    serviceHistory: 'yes',
    storageType: 'indoor',

    // New Jet Ski Interest
    interestedInNew: 'yes',
    newJetskiInterest: '',

    // Additional Info
    additionalInfo: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trade-in form submitted:', tradeInForm);
    alert('Trade-in appraisal request submitted! We\'ll provide your valuation within 24 hours.');
    // Reset form or handle submission
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Maximum Trade Value',
      description: 'Get the highest possible value for your current jet ski with our competitive appraisal process.'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'We use current market data and trends to ensure you receive a fair and accurate valuation.'
    },
    {
      icon: Clock,
      title: 'Quick Process',
      description: 'Get your appraisal within 24 hours and complete your trade in just one visit.'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Offer',
      description: 'Our appraisal is good for 7 days and includes a guaranteed purchase offer.'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Online Appraisal',
      description: 'Fill out our detailed form with your jet ski information and condition details.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Professional Inspection',
      description: 'Bring your jet ski in for a comprehensive inspection by our certified technicians.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Instant Offer',
      description: 'Receive your final trade-in value and apply it immediately to your new purchase.',
      icon: DollarSign
    }
  ];

  const conditionGuide = [
    {
      condition: 'Excellent',
      description: 'Like new condition, minimal hours, no visible wear, complete service history',
      valueImpact: '+15-20%'
    },
    {
      condition: 'Good',
      description: 'Normal wear for age, well maintained, minor cosmetic issues, regular service',
      valueImpact: 'Base Value'
    },
    {
      condition: 'Fair',
      description: 'Some wear and tear, may need minor repairs, irregular service history',
      valueImpact: '-10-15%'
    },
    {
      condition: 'Poor',
      description: 'Significant wear, needs repairs, high hours, limited service history',
      valueImpact: '-20-30%'
    }
  ];

  return (
    <section id="trade-in" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trade-In Appraisal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the maximum value for your current jet ski. Our expert appraisers use current market data
            to provide fair, competitive valuations. Trade up to your dream watercraft today!
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trade-In Form */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Trade-In Appraisal</h2>
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={tradeInForm.name}
                        onChange={(e) => setTradeInForm({...tradeInForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={tradeInForm.email}
                        onChange={(e) => setTradeInForm({...tradeInForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={tradeInForm.phone}
                        onChange={(e) => setTradeInForm({...tradeInForm, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Current Jet Ski Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Jet Ski Details</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Make *
                      </label>
                      <select
                        required
                        value={tradeInForm.currentMake}
                        onChange={(e) => setTradeInForm({...tradeInForm, currentMake: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Make</option>
                        <option value="Sea-Doo">Sea-Doo</option>
                        <option value="Yamaha">Yamaha</option>
                        <option value="Kawasaki">Kawasaki</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Model *
                      </label>
                      <input
                        type="text"
                        required
                        value={tradeInForm.currentModel}
                        onChange={(e) => setTradeInForm({...tradeInForm, currentModel: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., RXP-X"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Year *
                      </label>
                      <input
                        type="number"
                        required
                        value={tradeInForm.currentYear}
                        onChange={(e) => setTradeInForm({...tradeInForm, currentYear: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2024"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hours *
                      </label>
                      <input
                        type="number"
                        required
                        value={tradeInForm.currentHours}
                        onChange={(e) => setTradeInForm({...tradeInForm, currentHours: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Overall Condition *
                      </label>
                      <select
                        required
                        value={tradeInForm.currentCondition}
                        onChange={(e) => setTradeInForm({...tradeInForm, currentCondition: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Storage Type
                      </label>
                      <select
                        value={tradeInForm.storageType}
                        onChange={(e) => setTradeInForm({...tradeInForm, storageType: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="indoor">Indoor Storage</option>
                        <option value="covered">Covered Outdoor</option>
                        <option value="outdoor">Outdoor Uncovered</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Purchase Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Purchase Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Original Purchase Price
                      </label>
                      <input
                        type="number"
                        value={tradeInForm.originalPrice}
                        onChange={(e) => setTradeInForm({...tradeInForm, originalPrice: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="15000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Year Purchased
                      </label>
                      <input
                        type="number"
                        value={tradeInForm.purchaseYear}
                        onChange={(e) => setTradeInForm({...tradeInForm, purchaseYear: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2023"
                      />
                    </div>
                  </div>
                </div>

                {/* Condition Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Condition Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Any accidents or damage? *
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="no"
                            checked={tradeInForm.hasAccidents === 'no'}
                            onChange={(e) => setTradeInForm({...tradeInForm, hasAccidents: e.target.value})}
                            className="mr-2"
                          />
                          No
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="yes"
                            checked={tradeInForm.hasAccidents === 'yes'}
                            onChange={(e) => setTradeInForm({...tradeInForm, hasAccidents: e.target.value})}
                            className="mr-2"
                          />
                          Yes
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Any modifications? *
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="no"
                            checked={tradeInForm.hasModifications === 'no'}
                            onChange={(e) => setTradeInForm({...tradeInForm, hasModifications: e.target.value})}
                            className="mr-2"
                          />
                          No
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="yes"
                            checked={tradeInForm.hasModifications === 'yes'}
                            onChange={(e) => setTradeInForm({...tradeInForm, hasModifications: e.target.value})}
                            className="mr-2"
                          />
                          Yes
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Complete service history? *
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="yes"
                            checked={tradeInForm.serviceHistory === 'yes'}
                            onChange={(e) => setTradeInForm({...tradeInForm, serviceHistory: e.target.value})}
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="partial"
                            checked={tradeInForm.serviceHistory === 'partial'}
                            onChange={(e) => setTradeInForm({...tradeInForm, serviceHistory: e.target.value})}
                            className="mr-2"
                          />
                          Partial
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="no"
                            checked={tradeInForm.serviceHistory === 'no'}
                            onChange={(e) => setTradeInForm({...tradeInForm, serviceHistory: e.target.value})}
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Jet Ski Interest */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">New Purchase Interest</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested in purchasing a new jet ski?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          checked={tradeInForm.interestedInNew === 'yes'}
                          onChange={(e) => setTradeInForm({...tradeInForm, interestedInNew: e.target.value})}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="maybe"
                          checked={tradeInForm.interestedInNew === 'maybe'}
                          onChange={(e) => setTradeInForm({...tradeInForm, interestedInNew: e.target.value})}
                          className="mr-2"
                        />
                        Maybe
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          checked={tradeInForm.interestedInNew === 'no'}
                          onChange={(e) => setTradeInForm({...tradeInForm, interestedInNew: e.target.value})}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>

                  {tradeInForm.interestedInNew !== 'no' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What type of jet ski are you interested in?
                      </label>
                      <input
                        type="text"
                        value={tradeInForm.newJetskiInterest}
                        onChange={(e) => setTradeInForm({...tradeInForm, newJetskiInterest: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Sea-Doo RXP-X, Yamaha FX Cruiser, Performance model"
                      />
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    value={tradeInForm.additionalInfo}
                    onChange={(e) => setTradeInForm({...tradeInForm, additionalInfo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any additional details about condition, modifications, or special features..."
                  />
                </div>

                {/* Preferred Contact */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="email"
                        checked={tradeInForm.preferredContact === 'email'}
                        onChange={(e) => setTradeInForm({...tradeInForm, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="phone"
                        checked={tradeInForm.preferredContact === 'phone'}
                        onChange={(e) => setTradeInForm({...tradeInForm, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  Get My Trade-In Appraisal
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Condition Guide */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Condition Guide</h3>
              <div className="space-y-4">
                {conditionGuide.map((guide, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">{guide.condition}</h4>
                    <p className="text-sm text-gray-600 mb-1">{guide.description}</p>
                    <p className="text-sm font-medium text-green-600">Value Impact: {guide.valueImpact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips for Maximum Value */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tips for Maximum Value</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Clean your jet ski thoroughly inside and out
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Gather all service records and documentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Include original accessories and manuals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Address any minor cosmetic issues
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Be honest about condition and history
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Questions?</h3>
              <p className="text-gray-300 mb-4">
                Our trade-in specialists are here to help you get the best value for your jet ski.
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Trade-In Hotline: (416) 555-TRADE
                </p>
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Mon-Fri: 9AM-7PM, Sat: 9AM-5PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeInPage;
