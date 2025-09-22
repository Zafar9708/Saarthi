import React from "react";
import heroImage from "../assets/hero-image.jpg"; // replace with your image path

const HeroSection = () => {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 md:ml-24">
                <div className="relative flex flex-col md:flex-row items-center">
                    
                    {/* Left Image (overlaps on right) */}
                    <div className="relative md:w-1/4 w-5 h-48 md:-mr-16 z-10 mb-8 md:mb-0">
                        <img
                            src={heroImage}
                            alt="Holding hands"
                            className="rounded-xl shadow-xl object-cover w-full h-full"
                        />
                    </div>

                    {/* Right Green Box – width slightly increased */}
                    <div className="bg-green-950 rounded-xl text-white p-8 md:p-12 md:w-[70%] w-full shadow-lg md:pl-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                            The <em className="italic font-normal">In-between care</em> simplified
                        </h1>
                        <p className="mt-4 text-gray-200 text-lg">
                            An AI enabled platform for integrated opinions from multiple specialists at the cost of one
                        </p>

                        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-green-950 font-medium rounded-md transition-colors duration-200">
                            Book Appointment
                        </button>
                    </div>
                </div>

                {/* Slider Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    <span className="h-2 w-2 bg-green-950 rounded-full"></span>
                    <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                    <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
