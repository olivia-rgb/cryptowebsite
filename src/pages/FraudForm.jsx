import React, { useState } from "react";

const FraudForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    fraudType: "",
    fraudDate: "",
    description: "",
    evidence: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formData);
  };

  return (
    <div>
        <Navbar />
    <div 
    className="flex flex-col min-h-screen mb-5 md:flex-row items-center justify-center p-4 md:py-10 bg-cover bg-center" 
    style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }} // Replace with your background image source
  >
    <section id="fraudForm" className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center">
          File a Fraud Complaint
        </h2>
        <p className="text-center mb-8">
          Please provide as much information as possible to help our tracking
          team investigate your report.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="p-3 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="p-3 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="p-3 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Fraud Type */}
          <div className="flex flex-col">
            <label htmlFor="fraudType" className="mb-2 font-semibold">
              Type of Fraud
            </label>
            <select
              id="fraudType"
              name="fraudType"
              value={formData.fraudType}
              onChange={handleInputChange}
              required
              className="p-3 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select fraud type</option>
              <option value="Identity Theft">Identity Theft</option>
              <option value="Investment Scam">Investment Scam</option>
              <option value="Phishing">Phishing</option>
              <option value="Account Takeover">Account Takeover</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Fraud Date */}
          <div className="flex flex-col">
            <label htmlFor="fraudDate" className="mb-2 font-semibold">
              Date of Fraud
            </label>
            <input
              type="date"
              id="fraudDate"
              name="fraudDate"
              value={formData.fraudDate}
              onChange={handleInputChange}
              required
              className="p-3 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2 font-semibold">
              Description of the Incident
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="p-3 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide a detailed description of the incident"
              rows="5"
            />
          </div>

          {/* Upload Evidence */}
          <div className="flex flex-col">
            <label htmlFor="evidence" className="mb-2 font-semibold">
              Upload Evidence (Optional)
            </label>
            <input
              type="file"
              id="evidence"
              name="evidence"
              onChange={handleInputChange}
              className="p-3 bg-gray-800 rounded-md outline-none"
              accept="image/*,application/pdf"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
    
    </div>
  );
};

export default FraudForm;
