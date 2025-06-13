import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Home, 
  User, 
  Calendar, 
  MapPin, 
  MessageSquareText,
  Banknote,
  ClipboardList
} from 'lucide-react';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('enquiry');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    dob: '',
    location: '',
    description: '',
    accountType: '',
    loanPurpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('enquiry')}
          className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${activeTab === 'enquiry' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <MessageSquareText size={18} />
          Make Enquiry
        </button>
        <button
          onClick={() => setActiveTab('loan')}
          className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${activeTab === 'loan' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <Banknote size={18} />
          Request Loan
        </button>
        <button
          onClick={() => setActiveTab('account')}
          className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${activeTab === 'account' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <ClipboardList size={18} />
          Open Account
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
        {/* Common Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <User size={16} className="text-purple-600" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Phone size={16} className="text-purple-600" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Mail size={16} className="text-purple-600" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Calendar size={16} className="text-purple-600" />
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Home size={16} className="text-purple-600" />
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <MapPin size={16} className="text-purple-600" />
              Location (Nearest Branch)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
        </div>

        {/* Dynamic Fields */}
        {activeTab === 'enquiry' && (
          <div className="mb-8">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <MessageSquareText size={16} className="text-purple-600" />
              Description of Enquiry/Complaint
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            />
          </div>
        )}

        {activeTab === 'account' && (
          <div className="mb-8">
            <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <ClipboardList size={16} className="text-purple-600" />
              Account Type
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            >
              <option value="">Select account type</option>
              <option value="susu">Susu</option>
              <option value="nkosuo">Nkosuo</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>
        )}

        {activeTab === 'loan' && (
          <div className="mb-8">
            <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Banknote size={16} className="text-purple-600" />
              Loan Purpose
            </label>
            <select
              id="loanPurpose"
              name="loanPurpose"
              value={formData.loanPurpose}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              required
            >
              <option value="">Select loan purpose</option>
              <option value="increase stock">Increase my stock</option>
              <option value="working capital">Working capital</option>
              <option value="purchase equipment">Purchase new equipment</option>
            </select>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center gap-2 mx-auto"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;