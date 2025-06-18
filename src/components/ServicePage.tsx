import React, { useState } from 'react';
import { Wrench, Calendar, CheckCircle, Clock, Shield, Star, Phone, Settings } from 'lucide-react';

const ServicePage = () => {
  const [serviceForm, setServiceForm] = useState({
    name: '',
    email: '',
    phone: '',
    jetskiMake: '',
    jetskiModel: '',
    jetskiYear: '',
    serviceType: 'maintenance',
    description: '',
    preferredDate: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service form submitted:', serviceForm);
    alert('Service appointment request submitted! We\'ll contact you within 2 hours to confirm your appointment.');
    setServiceForm({
      name: '',
      email: '',
      phone: '',
      jetskiMake: '',
      jetskiModel: '',
      jetskiYear: '',
      serviceType: 'maintenance',
      description: '',
      preferredDate: '',
      urgency: 'normal'
    });
  };

  const serviceCategories = [
    {
      title: 'Routine Maintenance',
      icon: Settings,
      color: 'blue',
      services: [
        { name: 'Oil Change', price: 'From $89', description: 'Engine oil and filter replacement' },
        { name: 'Spark Plug Replacement', price: 'From $45', description: 'High-quality spark plugs installation' },
        { name: 'Impeller Inspection', price: 'From $75', description: 'Impeller and wear ring inspection' },
        { name: 'Cooling System Service', price: 'From $120', description: 'Cooling system flush and inspection' },
        { name: 'Annual Tune-Up', price: 'From $299', description: 'Comprehensive 50-point inspection' }
      ]
    },
    {
      title: 'Engine Services',
      icon: Wrench,
      color: 'red',
      services: [
        { name: 'Engine Diagnostics', price: 'From $150', description: 'Computer diagnostics and trouble codes' },
        { name: 'Supercharger Service', price: 'From $450', description: 'Supercharger inspection and maintenance' },
        { name: 'Fuel System Cleaning', price: 'From $180', description: 'Fuel injector and system cleaning' },
        { name: 'Engine Rebuild', price: 'Quote', description: 'Complete engine overhaul service' },
        { name: 'Warranty Repairs', price: 'Covered', description: 'Manufacturer warranty work' }
      ]
    },
    {
      title: 'Seasonal Services',
      icon: Calendar,
      color: 'green',
      services: [
        { name: 'Spring Preparation', price: 'From $199', description: 'Get ready for boating season' },
        { name: 'Winterization', price: 'From $249', description: 'Protect your investment during storage' },
        { name: 'Storage Prep', price: 'From $149', description: 'Preparation for long-term storage' },
        { name: 'Pre-Season Inspection', price: 'From $99', description: 'Safety check before first ride' },
        { name: 'Mid-Season Service', price: 'From $179', description: 'Keep running smoothly all season' }
      ]
    },
    {
      title: 'Repairs & Parts',
      icon: Shield,
      color: 'purple',
      services: [
        { name: 'Hull Repair', price: 'Quote', description: 'Fiberglass and gel coat repairs' },
        { name: 'Electrical Repair', price: 'From $125', description: 'Wiring and electrical system fixes' },
        { name: 'Steering System', price: 'From $200', description: 'Steering cable and system repairs' },
        { name: 'Genuine Parts', price: 'Varies', description: 'OEM and aftermarket parts available' },
        { name: 'Emergency Repairs', price: 'Quote', description: '24/7 emergency service available' }
      ]
    }
  ];

  const servicePackages = [
    {
      name: 'Basic Care Package',
      price: '$299',
      frequency: 'Annual',
      includes: [
        'Oil and filter change',
        'Spark plug inspection',
        'Basic safety inspection',
        'Cooling system check',
        'Battery test'
      ],
      recommended: 'Recreational riders'
    },
    {
      name: 'Premium Care Package',
      price: '$499',
      frequency: 'Annual',
      includes: [
        'Everything in Basic Care',
        'Impeller inspection',
        'Fuel system cleaning',
        'Computer diagnostics',
        'Winterization service'
      ],
      recommended: 'Regular riders',
      popular: true
    },
    {
      name: 'Performance Package',
      price: '$799',
      frequency: 'Annual',
      includes: [
        'Everything in Premium Care',
        'Supercharger service',
        'Performance tuning',
        'Wear parts replacement',
        'Priority scheduling'
      ],
      recommended: 'Performance enthusiasts'
    }
  ];

  const warranties = [
    {
      name: 'Basic Warranty',
      duration: '6 Months',
      coverage: 'Parts and Labor',
      price: 'Included'
    },
    {
      name: 'Extended Warranty',
      duration: '2 Years',
      coverage: 'Comprehensive Coverage',
      price: 'From $199'
    },
    {
      name: 'Performance Warranty',
      duration: '1 Year',
      coverage: 'Performance Modifications',
      price: 'From $299'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600 text-white',
      red: 'bg-red-600 text-white',
      green: 'bg-green-600 text-white',
      purple: 'bg-purple-600 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-600 text-white';
  };

  return (
    <section id="service" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expert Jet Ski Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your watercraft in peak condition with our certified technicians and genuine parts.
            From routine maintenance to major repairs, we're your trusted service partner.
          </p>
        </div>

        {/* Service Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
            <p className="text-gray-600">Service Rating</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Same Day</h3>
            <p className="text-gray-600">Service Available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">2 Year</h3>
            <p className="text-gray-600">Warranty Available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`p-6 ${getColorClasses(category.color)}`}>
                    <div className="flex items-center">
                      <IconComponent className="h-8 w-8 mr-4" />
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="font-bold text-green-600">{service.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Packages</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.frequency}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Recommended for: {pkg.recommended}</p>

                  <div className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full mt-6 px-4 py-2 rounded-md font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Information */}
        <div className="mb-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Warranties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {warranties.map((warranty, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{warranty.name}</h3>
                <p className="text-gray-600 mb-2">{warranty.duration}</p>
                <p className="text-sm text-gray-600 mb-4">{warranty.coverage}</p>
                <p className="font-bold text-green-600">{warranty.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Booking Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Service</h2>
            <p className="text-gray-600 mb-8">
              Schedule your jet ski service appointment online. Our certified technicians will have your watercraft
              running like new. We service all major brands including Sea-Doo, Yamaha, and Kawasaki.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Service Hotline</p>
                  <p className="text-gray-600">(416) 555-SERV</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold">Service Hours</p>
                  <p className="text-gray-600">Mon-Fri: 8AM-5PM, Sat: 9AM-3PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold">Emergency Service</p>
                  <p className="text-gray-600">24/7 for urgent repairs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={serviceForm.name}
                    onChange={(e) => setServiceForm({...serviceForm, name: e.target.value})}
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
                    value={serviceForm.email}
                    onChange={(e) => setServiceForm({...serviceForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={serviceForm.phone}
                  onChange={(e) => setServiceForm({...serviceForm, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make
                  </label>
                  <select
                    value={serviceForm.jetskiMake}
                    onChange={(e) => setServiceForm({...serviceForm, jetskiMake: e.target.value})}
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
                    Model
                  </label>
                  <input
                    type="text"
                    value={serviceForm.jetskiModel}
                    onChange={(e) => setServiceForm({...serviceForm, jetskiModel: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., RXP-X"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    value={serviceForm.jetskiYear}
                    onChange={(e) => setServiceForm({...serviceForm, jetskiYear: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="2024"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    value={serviceForm.serviceType}
                    onChange={(e) => setServiceForm({...serviceForm, serviceType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="maintenance">Routine Maintenance</option>
                    <option value="repair">Repair</option>
                    <option value="winterization">Winterization</option>
                    <option value="spring-prep">Spring Preparation</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={serviceForm.preferredDate}
                    onChange={(e) => setServiceForm({...serviceForm, preferredDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="normal"
                      checked={serviceForm.urgency === 'normal'}
                      onChange={(e) => setServiceForm({...serviceForm, urgency: e.target.value})}
                      className="mr-2"
                    />
                    Normal
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="urgent"
                      checked={serviceForm.urgency === 'urgent'}
                      onChange={(e) => setServiceForm({...serviceForm, urgency: e.target.value})}
                      className="mr-2"
                    />
                    Urgent
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="emergency"
                      checked={serviceForm.urgency === 'emergency'}
                      onChange={(e) => setServiceForm({...serviceForm, urgency: e.target.value})}
                      className="mr-2"
                    />
                    Emergency
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Description
                </label>
                <textarea
                  rows={4}
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({...serviceForm, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe the issue or service needed..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Service Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
