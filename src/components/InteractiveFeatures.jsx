// src/components/InteractiveFeatures.jsx
import React from "react";

const InteractiveFeatures = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Empower Your Healthcare Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative tools designed to help you better understand and manage your health
          </p>
        </div>

        {/* First Feature - Left Card, Right Text */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          {/* Left Side - Card */}
          <div className="md:w-5/12 w-full mb-8 md:mb-0">
            <div className="bg-green-50 rounded-xl shadow-md p-6 border border-green-100">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-green-800">Patient Timeline</h3>
                  <span className="text-xs text-green-600">Today</span>
                </div>
                
                {/* Chat messages */}
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mr-3">
                        <span className="text-green-800 text-sm font-bold">D</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-900">Dr. Sharma</p>
                        <p className="text-xs text-gray-600">Your latest reports show improvement in vitamin D levels</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">10:30 AM</p>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm ml-8">
                    <p className="text-sm text-green-900">Should I continue with the same dosage?</p>
                    <p className="text-xs text-gray-500 mt-1 text-right">10:32 AM</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mr-3">
                        <span className="text-green-800 text-sm font-bold">D</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-900">Dr. Sharma</p>
                        <p className="text-xs text-gray-600">Yes, please continue for another month and then we'll re-test</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">10:35 AM</p>
                  </div>
                </div>
                
                {/* Timeline indicators */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-green-200">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto"></div>
                    <p className="text-xs text-green-700 mt-1">Medication</p>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-300 rounded-full mx-auto"></div>
                    <p className="text-xs text-green-700 mt-1">Tests</p>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mx-auto"></div>
                    <p className="text-xs text-green-700 mt-1">Appointments</p>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mx-auto"></div>
                    <p className="text-xs text-green-700 mt-1">Symptoms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="md:w-6/12 w-full md:pl-10">
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              Ask Questions to Understand Your Diagnosis Better
            </h3>
            <p className="text-gray-600 mb-6">
              Our platform allows you to directly communicate with healthcare professionals to clarify 
              any doubts about your diagnosis, treatment plans, or medications. Get clear explanations 
              in simple language that helps you make informed decisions about your health.
            </p>
            <p className="text-gray-600 mb-8">
              With our interactive timeline, you can track your health journey, view past conversations, 
              and monitor your progress over time—all in one place.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Second Feature - Right Card, Left Text */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          {/* Left Side - Text */}
          <div className="md:w-6/12 w-full md:pr-10 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              Efficient Virtual Consults
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with specialists from the comfort of your home through our secure video 
              consultation platform. Save time and avoid waiting rooms while receiving quality 
              medical advice from experienced healthcare professionals.
            </p>
            <p className="text-gray-600 mb-8">
              Our streamlined scheduling system ensures you get appointments at your convenience, 
              with reminders and follow-up care all integrated into one seamless experience.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right Side - Card */}
          <div className="md:w-5/12 w-full mb-8 md:mb-0 order-1 md:order-2">
            <div className="bg-green-50 rounded-xl shadow-md p-6 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900">Virtual Consultation</h3>
                  <p className="text-sm text-green-700">Scheduled: Today, 3:00 PM</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                      <span className="text-green-800 text-sm font-bold">RS</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-900">Dr. Rajesh Sharma</p>
                      <p className="text-xs text-gray-600">Cardiologist</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                      <span className="text-blue-800 text-sm font-bold">PK</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-900">Dr. Priya Kumar</p>
                      <p className="text-xs text-gray-600">Endocrinologist</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                      <span className="text-purple-800 text-sm font-bold">AM</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-900">Dr. Amit Mishra</p>
                      <p className="text-xs text-gray-600">Orthopedic Specialist</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-green-200 text-center">
                <button className="text-green-700 hover:text-green-900 text-sm font-medium transition-colors duration-200">
                  View All Consultations →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Feature - Left Card, Right Text */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Card */}
          <div className="md:w-5/12 w-full mb-8 md:mb-0">
            <div className="bg-green-50 rounded-xl shadow-md p-6 border border-green-100">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-green-800">Radiology Report</h3>
                  <span className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full">New</span>
                </div>
                
                {/* Report summary */}
                <div className="bg-white p-4 rounded-lg border border-green-100 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm font-medium text-green-900">CT Scan - Chest</p>
                      <p className="text-xs text-gray-600">Date: Oct 12, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-green-700">Completed</p>
                      <p className="text-xs text-gray-600">Dr. A. Gupta</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-xs text-green-800">No acute pulmonary embolism</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-xs text-green-800">Minimal atelectasis</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <p className="text-xs text-green-800">Small nodule in right lower lobe (follow-up recommended)</p>
                    </div>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-100 hover:bg-green-200 text-green-800 text-sm font-medium py-2 rounded transition-colors duration-200">
                    View Full Report
                  </button>
                  <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium py-2 rounded transition-colors duration-200">
                    Explain This Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="md:w-6/12 w-full md:pl-10">
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              Understand Your Radiology Reports Better
            </h3>
            <p className="text-gray-600 mb-6">
              Medical imaging reports can be difficult to interpret. Our platform translates complex 
              radiology findings into clear, understandable language with visual explanations of what 
              your results mean for your health.
            </p>
            <p className="text-gray-600 mb-8">
              Get personalized insights about your scans with highlighted areas of concern, 
              comparisons to previous imaging, and recommendations for next steps—all explained 
              in terms you can easily understand.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;