import React, { useState } from 'react';
import { CreditCard, DollarSign, User, Briefcase, Home, Shield, CheckCircle, Calculator } from 'lucide-react';

const FinancingApplication = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    housingStatus: 'own',
    timeAtCurrentAddress: '',

    // Employment Information
    employerName: '',
    jobTitle: '',
    employmentStatus: 'full-time',
    yearsAtCurrentJob: '',
    employerPhone: '',
    monthlyIncome: '',
    otherIncome: '',

    // Financing Details
    requestedLoanAmount: '',
    downPayment: '',
    desiredTermMonths: '60',
    jetSkiModel: '',
    purchaseTimeframe: 'immediate',

    // Additional Information
    coApplicant: 'no',
    hasTradeIn: 'no',
    tradeInValue: '',
    creditScore: 'excellent',
    bankruptcy: 'no',
    additionalComments: '',
    agreeToTerms: false,
    contactPermission: false
  });

  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';

    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Financing application submitted:', formData);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(formData.requestedLoanAmount) - parseFloat(formData.downPayment || '0');
    const months = parseInt(formData.desiredTermMonths);
    const interestRate = 0.099 / 12; // 9.9% annual rate converted to monthly

    if (principal > 0 && months > 0) {
      const payment = (principal * interestRate * Math.pow(1 + interestRate, months)) /
        (Math.pow(1 + interestRate, months) - 1);
      return payment.toFixed(2);
    }
    return '0.00';
  };

  // Render form based on current step
  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-600" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-4 mt-8">
              Current Address
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Province *
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Province</option>
                  <option value="AB">Alberta</option>
                  <option value="BC">British Columbia</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">New Brunswick</option>
                  <option value="NL">Newfoundland and Labrador</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="ON">Ontario</option>
                  <option value="PE">Prince Edward Island</option>
                  <option value="QC">Quebec</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="NT">Northwest Territories</option>
                  <option value="NU">Nunavut</option>
                  <option value="YT">Yukon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  placeholder="A1A 1A1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Housing Status *
                </label>
                <select
                  name="housingStatus"
                  value={formData.housingStatus}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="own">Own</option>
                  <option value="rent">Rent</option>
                  <option value="live_with_parents">Live with Parents</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time at Current Address *
                </label>
                <select
                  name="timeAtCurrentAddress"
                  value={formData.timeAtCurrentAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Time</option>
                  <option value="less_than_1_year">Less than 1 year</option>
                  <option value="1_to_2_years">1-2 years</option>
                  <option value="3_to_5_years">3-5 years</option>
                  <option value="more_than_5_years">More than 5 years</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center"
              >
                Next Step <CheckCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
              Employment & Income
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employer Name *
                </label>
                <input
                  type="text"
                  name="employerName"
                  value={formData.employerName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Status *
                </label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="retired">Retired</option>
                  <option value="student">Student</option>
                  <option value="unemployed">Unemployed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years at Current Job *
                </label>
                <select
                  name="yearsAtCurrentJob"
                  value={formData.yearsAtCurrentJob}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Years</option>
                  <option value="less_than_1_year">Less than 1 year</option>
                  <option value="1_to_2_years">1-2 years</option>
                  <option value="3_to_5_years">3-5 years</option>
                  <option value="more_than_5_years">More than 5 years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employer Phone Number
                </label>
                <input
                  type="tel"
                  name="employerPhone"
                  value={formData.employerPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income * (CAD)
                </label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  required
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Monthly Income (CAD)
                </label>
                <input
                  type="number"
                  name="otherIncome"
                  value={formData.otherIncome}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center"
              >
                Next Step <CheckCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
              Financing Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requested Loan Amount * (CAD)
                </label>
                <input
                  type="number"
                  name="requestedLoanAmount"
                  value={formData.requestedLoanAmount}
                  onChange={handleChange}
                  required
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment Amount (CAD)
                </label>
                <input
                  type="number"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Term (Months) *
                </label>
                <select
                  name="desiredTermMonths"
                  value={formData.desiredTermMonths}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="24">24 months (2 years)</option>
                  <option value="36">36 months (3 years)</option>
                  <option value="48">48 months (4 years)</option>
                  <option value="60">60 months (5 years)</option>
                  <option value="72">72 months (6 years)</option>
                  <option value="84">84 months (7 years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jet Ski Model Interested In
                </label>
                <input
                  type="text"
                  name="jetSkiModel"
                  value={formData.jetSkiModel}
                  onChange={handleChange}
                  placeholder="e.g., Sea-Doo GTX 170, Yamaha FX Cruiser"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purchase Timeframe *
                </label>
                <select
                  name="purchaseTimeframe"
                  value={formData.purchaseTimeframe}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="immediate">Immediate (Within 2 weeks)</option>
                  <option value="30days">Within 30 days</option>
                  <option value="60days">Within 60 days</option>
                  <option value="90days">Within 90 days</option>
                  <option value="researching">Just researching</option>
                </select>
              </div>
            </div>

            {formData.requestedLoanAmount && (
              <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Estimated Monthly Payment
                </h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  ${calculateMonthlyPayment()}<span className="text-sm text-gray-500 font-normal">/month</span>
                </p>
                <p className="text-sm text-gray-600">
                  This is an estimate based on a {formData.desiredTermMonths}-month term at 9.9% APR.
                  Your actual rate may vary based on credit approval.
                </p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center"
              >
                Next Step <CheckCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              Credit Information & Additional Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you want to add a co-applicant? *
                </label>
                <select
                  name="coApplicant"
                  value={formData.coApplicant}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have a trade-in? *
                </label>
                <select
                  name="hasTradeIn"
                  value={formData.hasTradeIn}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {formData.hasTradeIn === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Trade-In Value (CAD)
                  </label>
                  <input
                    type="number"
                    name="tradeInValue"
                    value={formData.tradeInValue}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Credit Score Range *
                </label>
                <select
                  name="creditScore"
                  value={formData.creditScore}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="excellent">Excellent (760+)</option>
                  <option value="good">Good (700-759)</option>
                  <option value="fair">Fair (640-699)</option>
                  <option value="poor">Poor (639 or less)</option>
                  <option value="unknown">I don't know</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Have you filed for bankruptcy in the past 7 years? *
                </label>
                <select
                  name="bankruptcy"
                  value={formData.bankruptcy}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Comments or Questions
              </label>
              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Include any additional information that might help us process your application..."
              ></textarea>
            </div>

            <div className="mb-6">
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the terms and conditions *
                  </label>
                  <p className="text-gray-500">
                    I authorize Aqua Motors to obtain my credit report to process this application and understand this
                    is not a commitment to lend. I certify that all information provided is accurate.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="contactPermission"
                    name="contactPermission"
                    type="checkbox"
                    checked={formData.contactPermission}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="contactPermission" className="font-medium text-gray-700">
                    I would like to receive updates
                  </label>
                  <p className="text-gray-500">
                    Receive promotional offers, new inventory alerts, and financing specials via email or text message.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center"
              >
                Submit Application <CreditCard className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="financing-application" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {formSubmitted ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for submitting your financing application. Our finance team will review your information and contact you within 24 hours.
            </p>
            <p className="text-gray-600 mb-8">
              Application Reference: <span className="font-semibold">FIN-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/inventory"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Browse Inventory
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Jet Ski Financing Application</h2>
              <p className="text-gray-600">
                Complete this secure application to get pre-approved for jet ski financing. Our process is quick, secure, and designed to get you on the water as soon as possible.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${step <= formStep ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    >
                      {step}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {step === 1 && 'Personal'}
                      {step === 2 && 'Employment'}
                      {step === 3 && 'Financing'}
                      {step === 4 && 'Finalize'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="h-1 w-full bg-gray-200 rounded"></div>
                <div
                  className="h-1 bg-blue-600 rounded absolute top-0 left-0 transition-all duration-300"
                  style={{ width: `${(formStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {renderFormStep()}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinancingApplication;
