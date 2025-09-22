// src/components/ValueProposition.jsx
import React from "react";

const ValueProposition = () => {
  const cards = [
    {
      id: 1,
      title: "Multi-Specialist Consultations",
      description: "Get integrated opinions from multiple healthcare specialists in one comprehensive session.",
      image: "https://img.freepik.com/premium-photo/multi-ethnic-specialists-consulting-patient-with-illness-give-prescription-treatment-medicine-medical-team-doctor-nurse-doing-healthcare-examination-cure-disease_482257-43772.jpg",
      alt: "Doctors consulting together"
    },
    {
      id: 2,
      title: "AI-Powered Health Insights",
      description: "Our advanced AI analyzes your health data to provide personalized recommendations and insights.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "AI technology in healthcare"
    },
    {
      id: 3,
      title: "Cost-Effective Care",
      description: "Access premium healthcare services at affordable prices with our innovative pricing model.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Affordable healthcare"
    }
  ];

  return (
    <section className="w-full bg-green-50 py-16"> {/* Light green background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Why Choose Saarthi?
          </h2>
          <p className="text-lg text-green-800 max-w-3xl mx-auto">
            We're revolutionizing healthcare with innovative solutions that put your well-being first
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              
              {/* Card Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-green-800 mb-6 flex-grow">
                  {card.description}
                </p>
                
                {/* Learn More Link */}
                <a 
                  href="#" 
                  className="text-green-600 font-medium hover:text-green-800 inline-flex items-center transition-colors duration-200"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Discover All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;