// src/components/HealthcareServices.jsx
import React from "react";

const HealthcareServices = () => {
  const services = [
    {
      id: 1,
      title: "Cardiology",
      description: "Expert heart care with advanced diagnostics and treatment plans",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ["EKG Analysis", "Echocardiography", "Cardiac Consultation"]
    },
    {
      id: 2,
      title: "Endocrinology",
      description: "Comprehensive diabetes and hormone disorder management",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      features: ["Diabetes Management", "Thyroid Treatment", "Hormone Therapy"]
    },
    {
      id: 3,
      title: "Orthopedics",
      description: "Bone and joint care with personalized treatment approaches",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: ["Joint Pain Relief", "Fracture Care", "Physical Therapy"]
    },
    {
      id: 4,
      title: "Pediatrics",
      description: "Specialized healthcare for children from infancy to adolescence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Child Wellness", "Vaccinations", "Growth Monitoring"]
    },
    {
      id: 5,
      title: "Dermatology",
      description: "Skin health and treatment for various dermatological conditions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      features: ["Acne Treatment", "Skin Allergy Care", "Cosmetic Dermatology"]
    },
    {
      id: 6,
      title: "Mental Wellness",
      description: "Comprehensive mental health support and counseling services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Stress Management", "Anxiety Treatment", "Therapy Sessions"]
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access specialized medical care across multiple disciplines through our integrated platform
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow duration-300">
              
              {/* Service Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>
              
              {/* Service Content */}
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {service.title}
              </h3>
              <p className="text-green-800 mb-4">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-green-800">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Learn More Button */}
              <button className="text-green-700 hover:text-green-900 font-medium text-sm inline-flex items-center transition-colors duration-200">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-green-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            Can't Find Your Specialty?
          </h3>
          <p className="text-green-800 mb-6 max-w-2xl mx-auto">
            We work with hundreds of specialists across various medical fields. Contact us to find the right doctor for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Browse All Specialties
            </button>
            <button className="bg-white hover:bg-green-200 text-green-700 border border-green-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareServices;