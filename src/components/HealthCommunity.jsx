// src/components/HealthCommunity.jsx
import React from "react";

const HealthCommunity = () => {
  const communityStories = [
    {
      id: 1,
      name: "Diabetes Support Group",
      members: "1.2k+ members",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      activity: "Active now",
      description: "Share experiences and get support from others managing diabetes"
    },
    {
      id: 2,
      name: "Heart Health Community",
      members: "850+ members",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      activity: "25+ online",
      description: "Cardiac patients and caregivers sharing recovery journeys"
    },
    {
      id: 3,
      name: "Mental Wellness Circle",
      members: "2.3k+ members",
      image: "https://images.unsplash.com/photo-1590065480004-477ef6d4d5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      activity: "Active now",
      description: "Safe space for discussing mental health challenges and solutions"
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Anita Mehta",
      role: "Lost 15kg with our diabetes program",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      story: "The community support kept me motivated throughout my weight loss journey"
    },
    {
      id: 2,
      name: "Rohan Desai",
      role: "Managed hypertension naturally",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      story: "Lifestyle changes suggested by community members changed my life"
    },
    {
      id: 3,
      name: "Sunita Patel",
      role: "Recovered from cardiac surgery",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      story: "The recovery tips and emotional support made all the difference"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Join Our Healing Community
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with others who understand your journey and get the support you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Community Groups */}
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-8 text-center lg:text-left">
              Support Groups & Communities
            </h3>
            
            <div className="space-y-6">
              {communityStories.map((group) => (
                <div key={group.id} className="bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={group.image} 
                        alt={group.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="mt-2 text-center">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-xs text-green-700 ml-1">{group.activity}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-900 mb-2">
                        {group.name}
                      </h4>
                      <p className="text-green-800 mb-3">
                        {group.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-green-700">{group.members}</span>
                        <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                          Join Group
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Success Stories */}
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-8 text-center lg:text-left">
              Success Stories
            </h3>
            
            <div className="space-y-6">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white border border-green-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-900 mb-1">
                        {story.name}
                      </h4>
                      <p className="text-green-700 text-sm mb-3">
                        {story.role}
                      </p>
                      <p className="text-gray-700 text-sm italic mb-4">
                        "{story.story}"
                      </p>
                      <button className="text-green-700 hover:text-green-900 text-sm font-medium transition-colors duration-200 inline-flex items-center">
                        Read full story
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="bg-green-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center">
            Why Join Our Community?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Peer Support</h4>
              <p className="text-green-800">Connect with others who share similar health journeys and challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Expert Guidance</h4>
              <p className="text-green-800">Get advice from healthcare professionals and experienced community moderators</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Live Sessions</h4>
              <p className="text-green-800">Participate in live Q&A sessions, webinars, and wellness workshops</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 mr-4">
              Join Community
            </button>
            <button className="bg-white hover:bg-green-200 text-green-700 border border-green-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCommunity;