// src/components/Navbar.jsx
import React, { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);


    const navigate = useNavigate()

    return (
        <nav className="bg-white fixed w-full z-50 border-b border-gray-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left side - Logo and navigation items */}
                    <div className="flex items-center">
                        {/* Company Logo and Name */}
                        <div className="flex-shrink-0 flex items-center">
                            <div className="h-8 w-8 flex items-center justify-center">
                                <img
                                    src="/saarthi.png"   // ✅ Replace with actual logo path
                                    alt="Saarthi Logo"
                                    className="h-6 w-6 object-contain"  // Keeps it nicely inside the box
                                />
                            </div>
                            <span className="ml-2 text-xl font-bold text-gray-800">Saarthi</span>
                        </div>

                        {/* Desktop Navigation Items */}
                        <div className="hidden md:ml-64 md:flex md:items-center md:space-x-5">
                            <a
                                href="/"
                                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                            >
                                Home
                            </a>

                            {/* Our Solutions Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setIsSolutionsOpen(true)}
                                    onMouseLeave={() => setIsSolutionsOpen(false)}
                                    className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center focus:outline-none transition duration-150"
                                >
                                    <span>Our Solutions</span>
                                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                                </button>

                                {isSolutionsOpen && (
                                    <div
                                        className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                        onMouseEnter={() => setIsSolutionsOpen(true)}
                                        onMouseLeave={() => setIsSolutionsOpen(false)}
                                    >
                                        <div className="py-1" role="menu" aria-orientation="vertical">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                                                role="menuitem"
                                            >
                                                Telemedicine
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                                                role="menuitem"
                                            >
                                                Health Records
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                                                role="menuitem"
                                            >
                                                Appointment Booking
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                                                role="menuitem"
                                            >
                                                Pharmacy Delivery
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                                                role="menuitem"
                                            >
                                                Health Monitoring
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                            >
                                Doctors
                            </a>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                            >
                                Resources
                            </a>
                        </div>
                    </div>

                    {/* Right side - Buttons */}
                    <div className="flex items-center">
                        <div className="hidden md:flex items-center space-x-2">
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-150"
                            >
                                Sign Up
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/signin');
                                }}
                                className="bg-green-950 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 hover:bg-green-800 cursor-pointer"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                aria-expanded="false"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="block h-6 w-6" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    <a
                        href="/"
                        className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                    >
                        Home
                    </a>

                    <div>
                        <button
                            onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                            className="w-full text-left text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition duration-150"
                        >
                            <span>Our Solutions</span>
                            <ChevronDownIcon className={`h-4 w-4 transform transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`pl-4 mt-1 space-y-1 ${isMobileSolutionsOpen ? 'block' : 'hidden'}`}>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                            >
                                Telemedicine
                            </a>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                            >
                                Health Records
                            </a>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                            >
                                Appointment Booking
                            </a>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                            >
                                Pharmacy Delivery
                            </a>
                            <a
                                href="#"
                                className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                            >
                                Health Monitoring
                            </a>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                    >
                        Doctors
                    </a>

                    <a
                        href="#"
                        className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-gray-950 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                    >
                        Resources
                    </a>

                    <div className="pt-2 pb-3 border-t border-gray-200">
                        <a
                            href="#"
                            className="block w-full text-center text-gray-950 hover:text-green-950 px-3 py-2 rounded-md text-base font-medium transition duration-150"
                        >
                            Sign Up
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/signin');
                            }}
                            className="block w-full text-center bg-green-950 hover:bg-green-800 text-white px-3 py-2 rounded-md text-base font-medium mt-2 transition duration-150 cursor-pointer"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;