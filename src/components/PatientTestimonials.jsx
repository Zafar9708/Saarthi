// src/components/PatientTestimonials.jsx
import React from "react";

const PatientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: "42",
      condition: "Diabetes Management",
      content: "Saarthi's multi-specialist approach helped me get my diabetes under control for the first time in years. The integrated opinions saved me from visiting multiple doctors separately.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: "35",
      condition: "Thyroid Treatment",
      content: "The AI-powered insights were incredibly accurate. My treatment plan was personalized based on my specific needs, and I saw improvements within just a month.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Amit Patel",
      age: "58",
      condition: "Cardiac Care",
      content: "After my heart surgery, the continuous care and monitoring through Saarthi made my recovery smooth. The doctors were always available for my concerns.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Stories of Healing & Hope
          </h2>
          <p className="text-lg text-green-800 max-w-3xl mx-auto">
            Read how our patients have transformed their health journeys with Saarthi's integrated care approach
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
              {/* Testimonial Header */}
              <div className="p-6 border-b border-green-100">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-green-900">{testimonial.name}</h3>
                    <p className="text-sm text-green-700">{testimonial.age} years • {testimonial.condition}</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-green-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-900">5,000+</div>
              <div className="text-green-800 mt-2">Patients Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-900">96%</div>
              <div className="text-green-800 mt-2">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-900">250+</div>
              <div className="text-green-800 mt-2">Specialist Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-900">24/7</div>
              <div className="text-green-800 mt-2">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            Ready to Begin Your Health Journey?
          </h3>
          <p className="text-green-800 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have experienced better health outcomes through our integrated care platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book a Consultation
            </button>
            <button className="bg-white hover:bg-green-100 text-green-700 border border-green-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;