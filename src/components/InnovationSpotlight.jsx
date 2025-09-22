// src/components/InnovationSpotlight.jsx
import React, { useState } from "react";

const InnovationSpotlight = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    {
      id: 1,
      title: "AI-Powered Diagnosis",
      description: "Our advanced AI algorithms analyze medical data to provide accurate preliminary diagnoses and recommend appropriate specialists.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQG_-799A0gnDA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697713030534?e=2147483647&v=beta&t=o0Q95dhYe8yx4pR-kpkNtXbVC_TFwOL7ApttTcOHZpw",
      stats: "95% accuracy rate in preliminary assessments",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Virtual Health Assistant",
      description: "24/7 virtual health assistant that answers your medical questions, reminds you about medications, and tracks your health metrics.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      stats: "Serves 10,000+ daily health queries",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Smart Health Monitoring",
      description: "Wearable integration and smart devices that continuously monitor vital signs and alert healthcare providers of any concerning changes.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      stats: "Reduces emergency visits by 40%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const activeData = features.find(feature => feature.id === activeFeature);

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Healthcare Innovation Spotlight
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the cutting-edge technologies that make Saarthi the future of healthcare
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Feature Selector */}
          <div className="lg:w-2/5 w-full">
            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id 
                      ? 'bg-white shadow-lg border-l-4 border-green-600' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg mr-4 ${
                      activeFeature === feature.id ? 'bg-green-100' : 'bg-white'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        activeFeature === feature.id ? 'text-green-900' : 'text-gray-800'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {feature.stats}
                      </p>
                    </div>
                    <div className={`ml-auto transform transition-transform ${
                      activeFeature === feature.id ? 'rotate-90' : ''
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-green-900 mb-4">Innovation Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">50K+</div>
                  <div className="text-sm text-gray-600">Lives Improved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">2.5M+</div>
                  <div className="text-sm text-gray-600">Health Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">98%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Display */}
          <div className="lg:w-3/5 w-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={activeData.image} 
                  alt={activeData.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Innovation
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {activeData.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {activeData.description}
                </p>
                
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-800 font-medium">{activeData.stats}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">24/7 Availability</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Secure & Private</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  Experience This Innovation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Partners */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-8">Trusted by Leading Healthcare Institutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "MedTech Innovations",
              "HealthCare Plus",
              "BioResearch Labs",
              "Future Medicine"
            ].map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-700 font-bold text-sm">{partner.split(' ')[0][0]}</span>
                </div>
                <div className="text-sm font-medium text-gray-800">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSpotlight;