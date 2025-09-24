'use client';

import { useState } from 'react';
import { QrCode, CreditCard, DollarSign, Shield, CheckCircle, Heart, Users, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PaymentsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'card'>('qr');

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your generous donation helps us continue serving international students at ODU, 
              creating community, and sharing God's love across cultures.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Building</h3>
              <p className="text-gray-600 text-sm">Connecting students with host families and creating lasting friendships</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Events & Programs</h3>
              <p className="text-gray-600 text-sm">Weekly Bible studies, welcome banquets, and cultural celebrations</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student Care</h3>
              <p className="text-gray-600 text-sm">Providing support, guidance, and care for students far from home</p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <DollarSign className="w-7 h-7 mr-3" />
                Make a Donation
              </h2>
              <p className="text-blue-100 mt-2">Every contribution makes a difference in a student's life</p>
            </div>

            <div className="p-8">
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Select Amount
                </label>
                
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-50 text-blue-700 scale-105'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Payment Method
                </label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('qr')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === 'qr'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <QrCode className={`w-8 h-8 ${paymentMethod === 'qr' ? 'text-blue-600' : 'text-gray-600'}`} />
                    </div>
                    <h3 className={`font-semibold ${paymentMethod === 'qr' ? 'text-blue-900' : 'text-gray-900'}`}>
                      QR Code Payment
                    </h3>
                    <p className={`text-sm mt-1 ${paymentMethod === 'qr' ? 'text-blue-700' : 'text-gray-600'}`}>
                      Scan with your mobile banking app
                    </p>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <CreditCard className={`w-8 h-8 ${paymentMethod === 'card' ? 'text-blue-600' : 'text-gray-600'}`} />
                    </div>
                    <h3 className={`font-semibold ${paymentMethod === 'card' ? 'text-blue-900' : 'text-gray-900'}`}>
                      Credit/Debit Card
                    </h3>
                    <p className={`text-sm mt-1 ${paymentMethod === 'card' ? 'text-blue-700' : 'text-gray-600'}`}>
                      Secure online payment
                    </p>
                  </button>
                </div>
              </div>

              {/* Payment Content */}
              {paymentMethod === 'qr' && (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <div className="bg-white p-6 rounded-xl shadow-md inline-block mb-6">
                    {/* Temporary QR Code - Replace with actual QR code generation */}
                    <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-center">
                        <QrCode className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 font-medium">QR Code</p>
                        <p className="text-xs text-gray-500">Will be generated</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        ${getCurrentAmount().toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">Scan to pay this amount</p>
                    </div>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Pay:</h3>
                    <div className="text-left space-y-2">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Open your mobile banking or payment app</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Scan the QR code above</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">Confirm the amount and complete payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Donate ${getCurrentAmount().toFixed(2)}
                    </h3>
                    <p className="text-gray-600">Secure payment processing coming soon</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="text-center">
                      <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Payment Form</h4>
                      <p className="text-gray-600 mb-4">Integration with payment processor will be added here</p>
                      
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 px-8 py-3 rounded-xl font-semibold cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Notice */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-900 font-semibold mb-1">Secure Donation</h4>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Your donation is processed securely. We never store your payment information, 
                      and all transactions are encrypted and protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Donating?</h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Contact us if you have any questions about making a donation 
              or would like to learn more about our programs.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:info@iscf-odu.org" className="text-blue-600 hover:text-blue-800">info@iscf-odu.org</a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> <a href="tel:+1-757-XXX-XXXX" className="text-blue-600 hover:text-blue-800">+1 (757) XXX-XXXX</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}