import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const item = params.get('item');
  const itemId = params.get('id');

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email'
  });

  const [testRideForm, setTestRideForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    jetskiInterest: '',
    experience: 'beginner'
  });

  useEffect(() => {
    if (item && itemId) {
      setContactForm((prev) => ({
        ...prev,
        subject: 'sales',
        message: `I'm interested in Jet Ski ID: ${itemId}. Please provide more details.`
      }));
    }
  }, [item, itemId]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: '',
      preferredContact: 'email'
    });
  };

  const handleTestRideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test ride form submitted:', testRideForm);
    // Handle form submission
    alert('Test ride request submitted! We\'ll confirm your appointment within 2 hours.');
    setTestRideForm({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      jetskiInterest: '',
      experience: 'beginner'
    });
  };

  const locations = [
    {
      name: 'Toronto Showroom (Head Office)',
      address: '1234 Waterfront Dr, Toronto ON, M5V 3A8',
      phone: '(416) 555-AQUA',
      email: 'toronto@aquamotors.ca',
      hours: {
        weekdays: 'Mon-Thu: 9:00 AM - 7:00 PM, Fri: 9:00 AM - 6:00 PM',
        weekend: 'Sat: 9:00 AM - 5:00 PM, Sun: Closed'
      },
      services: ['Sales', 'Service', 'Parts', 'Financing'],
      manager: 'John Mitchell'
    },
    {
      name: 'Mississauga Showroom',
      address: '5678 Lakeshore Rd, Mississauga ON, L5B 2T4',
      phone: '(905) 555-AQUA',
      email: 'mississauga@aquamotors.ca',
      hours: {
        weekdays: 'Mon-Thu: 10:00 AM - 6:00 PM, Fri: 10:00 AM - 5:00 PM',
        weekend: 'Sat: 10:00 AM - 4:00 PM, Sun: Closed'
      },
      services: ['Sales', 'Service', 'Financing'],
      manager: 'Sarah Chen'
    },
    {
      name: 'Oakville Service Center',
      address: '9012 Marine Dr, Oakville ON, L6H 3M2',
      phone: '(905) 555-SERV',
      email: 'oakville@aquamotors.ca',
      hours: {
        weekdays: 'Mon-Fri: 8:00 AM - 5:00 PM',
        weekend: 'Sat: 9:00 AM - 3:00 PM, Sun: Closed'
      },
      services: ['Service', 'Parts', 'Repairs'],
      manager: 'Mike Rodriguez'
    }
  ];

  const teamMembers = [
    {
      name: 'David Thompson',
      role: 'General Manager',
      phone: '(416) 555-AQUA ext. 101',
      email: 'david@aquamotors.ca',
      specialties: ['Business Operations', 'Customer Experience']
    },
    {
      name: 'Lisa Parker',
      role: 'Sales Director',
      phone: '(416) 555-AQUA ext. 102',
      email: 'lisa@aquamotors.ca',
      specialties: ['New Sales', 'Trade-ins', 'Customer Consultation']
    },
    {
      name: 'Tony Garcia',
      role: 'Finance Manager',
      phone: '(416) 555-AQUA ext. 103',
      email: 'tony@aquamotors.ca',
      specialties: ['Financing', 'Insurance', 'Extended Warranties']
    },
    {
      name: 'Emma Wilson',
      role: 'Service Manager',
      phone: '(416) 555-SERV ext. 201',
      email: 'emma@aquamotors.ca',
      specialties: ['Maintenance', 'Repairs', 'Parts']
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Aqua Motors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your water adventure? Get in touch with our expert team for sales,
            service, financing, or any questions about our jet ski selection.
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-blue-600 font-medium">(416) 555-AQUA</p>
            <p className="text-sm text-gray-600">Mon-Fri 9AM-7PM</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-green-600 font-medium">sales@aquamotors.ca</p>
            <p className="text-sm text-gray-600">Response within 24hrs</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-purple-600 font-medium">3 GTA Locations</p>
            <p className="text-sm text-gray-600">See details below</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Book Test Ride</h3>
            <p className="text-orange-600 font-medium">Try Before You Buy</p>
            <p className="text-sm text-gray-600">Same day available</p>
          </div>
        </div>

        {/* Contact Forms */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* General Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-3 text-blue-600" />
              Send Us a Message
            </h2>
            <form onSubmit={handleContactSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
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
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="service">Service Request</option>
                    <option value="financing">Financing</option>
                    <option value="trade-in">Trade-in Appraisal</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="email"
                      checked={contactForm.preferredContact === 'email'}
                      onChange={(e) => setContactForm({ ...contactForm, preferredContact: e.target.value })}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="phone"
                      checked={contactForm.preferredContact === 'phone'}
                      onChange={(e) => setContactForm({ ...contactForm, preferredContact: e.target.value })}
                      className="mr-2"
                    />
                    Phone
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Test Ride Form */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-orange-600" />
              Book a Test Ride
            </h2>
            <form onSubmit={handleTestRideSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={testRideForm.name}
                    onChange={(e) => setTestRideForm({ ...testRideForm, name: e.target.value })}
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
                    value={testRideForm.email}
                    onChange={(e) => setTestRideForm({ ...testRideForm, email: e.target.value })}
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
                  value={testRideForm.phone}
                  onChange={(e) => setTestRideForm({ ...testRideForm, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={testRideForm.preferredDate}
                    onChange={(e) => setTestRideForm({ ...testRideForm, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={testRideForm.preferredTime}
                    onChange={(e) => setTestRideForm({ ...testRideForm, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-4PM)</option>
                    <option value="evening">Evening (4PM-7PM)</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jet Ski of Interest
                </label>
                <input
                  type="text"
                  value={testRideForm.jetskiInterest}
                  onChange={(e) => setTestRideForm({ ...testRideForm, jetskiInterest: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Sea-Doo RXP-X, Yamaha FX Cruiser"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={testRideForm.experience}
                  onChange={(e) => setTestRideForm({ ...testRideForm, experience: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="beginner">Beginner (New to jet skis)</option>
                  <option value="intermediate">Intermediate (Some experience)</option>
                  <option value="advanced">Advanced (Very experienced)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Test Ride
              </button>

              <p className="text-sm text-gray-600 mt-3">
                * Valid driver's license and boating safety certificate required for test rides.
              </p>
            </form>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Locations</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{location.name}</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{location.email}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                  <p className="text-sm text-gray-600 mb-1">{location.hours.weekdays}</p>
                  <p className="text-sm text-gray-600">{location.hours.weekend}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Manager:</strong> {location.manager}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <div className="text-sm text-gray-600 mb-3">
                  <p className="mb-1">{member.phone}</p>
                  <p>{member.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span key={specialtyIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
