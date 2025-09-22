// src/components/MobileApp.jsx
import React from "react";

const MobileApp = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Healthcare in Your Pocket
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Download our mobile app for seamless access to doctors, health records, and personalized care
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side - App Mockup */}
          <div className="lg:w-2/5 mb-10 lg:mb-0 flex justify-center">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-72 h-[500px] bg-gray-800 rounded-[40px] p-3 shadow-2xl border-4 border-gray-900">
                <div className="h-full bg-white rounded-[32px] overflow-hidden">
                  {/* App Header */}
                  <div className="bg-green-700 p-4 text-white">
                    <h3 className="font-semibold text-center">Saarthi Health</h3>
                    <p className="text-xs text-center text-green-100">Your health companion</p>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="font-medium text-green-900">Hello, Rajesh!</h4>
                        <p className="text-xs text-gray-500">How can we help today?</p>
                      </div>
                      <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                        <span className="text-green-800 font-bold">R</span>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-green-800">Consult</span>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-blue-800">Records</span>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg text-center">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg xmlns="http://www.w3.org2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-purple-800">Appointments</span>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg text-center">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-orange-800">Reports</span>
                      </div>
                    </div>
                    
                    {/* Upcoming Appointment */}
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-green-800">Next Appointment</span>
                        <span className="text-xs text-green-600">Tomorrow, 10:00 AM</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-2">
                          <span className="text-green-800 text-xs font-bold">DS</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-900">Dr. Sharma</p>
                          <p className="text-xs text-green-700">Cardiologist</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Health Tips */}
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-800 font-medium mb-1">Health Tip</p>
                      <p className="text-xs text-blue-900">Remember to take your medication and stay hydrated today!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Features & Download Options */}
          <div className="lg:w-1/2">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">
                All Your Health Needs in One App
              </h3>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Secure Health Records</h4>
                    <p className="text-gray-700">Access your medical history, prescriptions, and test results anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Instant Doctor Chat</h4>
                    <p className="text-gray-700">Connect with healthcare professionals in real-time for quick advice</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Medication Reminders</h4>
                    <p className="text-gray-700">Never miss a dose with smart alerts and tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Health Analytics</h4>
                    <p className="text-gray-700">Track your health metrics and progress with visual charts</p>
                  </div>
                </div>
              </div>
              
              {/* Download Buttons */}
              <div>
                <h4 className="font-medium text-green-900 mb-4">Download Now</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button>
                  
                  <button className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;