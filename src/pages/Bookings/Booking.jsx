

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import UploadStep from "../../components/BookingSteps/UploadStep";
// import VisitPrepStep from "../../components/BookingSteps/VisitPrepStep";
// import CalendarStep from "../../components/BookingSteps/CalendarStep";
// import PaymentStep from "../../components/BookingSteps/PaymentStep";

// const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

// const Booking = () => {
//   const { doctorId } = useParams();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [appointmentType, setAppointmentType] = useState("video");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const steps = [
//     { number: 1, title: "Upload", description: "Medical Reports" },
//     { number: 2, title: "Visit Prep", description: "Health Goals" },
//     { number: 3, title: "Schedule", description: "Date & Time" },
//     { number: 4, title: "Payment", description: "Secure Payment" },
//   ];

//   // Fetch doctor details from API
//   useEffect(() => {
//     const fetchDoctorDetails = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const token = localStorage.getItem('saarthi_token');
        
//         const response = await fetch(`${API_BASE_URL}/admin/doctors`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         const data = await response.json();

//         if (data.success) {
//           // Find the specific doctor by ID
//           const doctor = data.data.find(doc => doc.id === doctorId);
//           if (doctor) {
//             setSelectedDoctor(doctor);
//           } else {
//             setError("Doctor not found");
//             setTimeout(() => navigate("/doctors"), 2000);
//           }
//         } else {
//           setError("Failed to fetch doctor details");
//         }
//       } catch (error) {
//         console.error('Error fetching doctor details:', error);
//         setError("Network error. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (doctorId) {
//       fetchDoctorDetails();
//     } else {
//       navigate("/doctors");
//     }
//   }, [doctorId, navigate]);

//   const handleNextStep = () => {
//     if (currentStep < 4) setCurrentStep(currentStep + 1);
//     else handleCompleteBooking();
//   };

//   const handlePreviousStep = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   const handleSkip = () => {
//     if (currentStep < 4) setCurrentStep(currentStep + 1);
//   };

//   const handleCompleteBooking = () => {
//     alert(
//       `Appointment booked successfully with ${selectedDoctor?.name} on ${selectedDate} at ${selectedTime} (${appointmentType})`
//     );
//     navigate("/dashboard");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-green-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900 mx-auto"></div>
//           <p className="mt-4 text-green-900">Loading doctor details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-green-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto">
//             <svg
//               className="w-16 h-16 text-red-300 mx-auto mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className="text-xl font-bold text-red-900 mb-2">
//               Error
//             </h3>
//             <p className="text-red-700 mb-4">{error}</p>
//             <button
//               onClick={() => navigate("/doctors")}
//               className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
//             >
//               Back to Doctors
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!selectedDoctor) {
//     return (
//       <div className="min-h-screen bg-green-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-green-900">Doctor not found.</p>
//           <button
//             onClick={() => navigate("/doctors")}
//             className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             Back to Doctors
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
//       {/* Header */}
//       <header className="bg-green-50 top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center">
//               <img src="/saarthi.png" alt="Saarthi Logo" className="h-8 w-8 mr-3" />
//               <h1 className="text-2xl font-bold text-green-900">Book Appointment</h1>
//             </div>

//             <button onClick={handleSkip} className="text-green-700 hover:text-green-900 font-medium">
//               {currentStep === 4 ? "Complete Later" : "Skip"}
//             </button>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center mb-4">
//             <div className="flex items-center space-x-8">
//               {steps.map((step, index) => (
//                 <div key={step.number} className="flex items-center">
//                   <div
//                     className={`flex flex-col items-center ${
//                       currentStep >= step.number ? "text-green-900" : "text-green-300"
//                     }`}
//                   >
//                     <div
//                       className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
//                         currentStep > step.number
//                           ? "bg-green-500 border-green-500 text-white"
//                           : currentStep === step.number
//                           ? "bg-green-900 border-green-900 text-white"
//                           : "border-green-300 text-green-300"
//                       } font-semibold`}
//                     >
//                       {step.number}
//                     </div>
//                     <span className="text-xs mt-1 font-medium">{step.title}</span>
//                     <span className="text-xs">{step.description}</span>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <div
//                       className={`w-16 h-1 mx-4 ${
//                         currentStep > step.number ? "bg-green-500" : "bg-green-200"
//                       }`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Doctor Info */}
//         <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-green-200">
//           <div className="flex items-center space-x-4">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//               <span className="text-2xl font-bold text-green-900">
//                 {selectedDoctor.name.split(" ").map((n) => n[0]).join("")}
//               </span>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-xl font-bold text-green-900">{selectedDoctor.name}</h2>
//               <p className="text-green-700">{selectedDoctor.degree || 'Medical Doctor'} | {selectedDoctor.department || 'General Medicine'}</p>
//               <p className="text-green-600 text-sm">Fee: {selectedDoctor.fee || '₹500'} • {selectedDoctor.experience} years experience</p>
//             </div>
//           </div>
//         </div>

//         {/* Step Content */}
//         <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-200">
//           {currentStep === 1 && <UploadStep doctor={selectedDoctor} onNext={handleNextStep} />}
//           {currentStep === 2 && <VisitPrepStep doctor={selectedDoctor} onNext={handleNextStep} onBack={handlePreviousStep} />}
//           {currentStep === 3 && (
//             <CalendarStep
//               doctor={selectedDoctor}
//               selectedDate={selectedDate}
//               selectedTime={selectedTime}
//               appointmentType={appointmentType}
//               onDateChange={setSelectedDate}
//               onTimeChange={setSelectedTime}
//               onAppointmentTypeChange={setAppointmentType}
//               onNext={handleNextStep}
//               onBack={handlePreviousStep}
//             />
//           )}
//           {currentStep === 4 && (
//             <PaymentStep
//               doctor={selectedDoctor}
//               selectedDate={selectedDate}
//               selectedTime={selectedTime}
//               appointmentType={appointmentType}
//               onBack={handlePreviousStep}
//               onComplete={handleCompleteBooking}
//             />
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Booking;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UploadStep from "../../components/BookingSteps/UploadStep";
import VisitPrepStep from "../../components/BookingSteps/VisitPrepStep";
import CalendarStep from "../../components/BookingSteps/CalendarStep";
import PaymentStep from "../../components/BookingSteps/PaymentStep";
import { 
    Home,
    Calendar,
    Heart,
    ClipboardList,
    Settings,
    LogOut,
    User,
    Bell
} from 'lucide-react';

// Icon Components
const DashboardIcon = () => <Home className="w-5 h-5" />;
const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
const HealthIcon = () => <Heart className="w-5 h-5" />;
const ReportsIcon = () => <ClipboardList className="w-5 h-5" />;
const SettingsIcon = () => <Settings className="w-5 h-5" />;
const LogoutIcon = () => <LogOut className="w-5 h-5" />;
const NotificationIcon = () => <Bell className="w-5 h-5" />;
const ProfileIcon = () => <User className="w-5 h-5" />;

const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

const Booking = () => {
  const { doctorId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("video");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('booking');
  const navigate = useNavigate();

  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('saarthi_user') || '{}');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { id: 'doctors', label: 'Doctors', icon: <AppointmentsIcon />, path: '/doctors' },
    { id: 'health', label: 'Health', icon: <HealthIcon />, path: '/health' },
    { id: 'reports', label: 'Reports', icon: <ReportsIcon />, path: '/reports' },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  const steps = [
    { number: 1, title: "Upload", description: "Medical Reports" },
    { number: 2, title: "Visit Prep", description: "Health Goals" },
    { number: 3, title: "Schedule", description: "Date & Time" },
    { number: 4, title: "Payment", description: "Secure Payment" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('saarthi_token');
    localStorage.removeItem('saarthi_user');
    navigate('/signin');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Fetch doctor details from API
  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        setLoading(true);
        setError("");
        const token = localStorage.getItem('saarthi_token');
        
        const response = await fetch(`${API_BASE_URL}/admin/doctors`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        if (data.success) {
          // Find the specific doctor by ID
          const doctor = data.data.find(doc => doc.id === doctorId);
          if (doctor) {
            setSelectedDoctor(doctor);
          } else {
            setError("Doctor not found");
            setTimeout(() => navigate("/doctors"), 2000);
          }
        } else {
          setError("Failed to fetch doctor details");
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) {
      fetchDoctorDetails();
    } else {
      navigate("/doctors");
    }
  }, [doctorId, navigate]);

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else handleCompleteBooking();
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSkip = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleCompleteBooking = () => {
    alert(
      `Appointment booked successfully with ${selectedDoctor?.name} on ${selectedDate} at ${selectedTime} (${appointmentType})`
    );
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-green-50">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
          {/* Logo */}
          <div className="p-6 border-b border-green-700">
            <div className="flex items-center space-x-3">
              <img
                src="/saarthi.png"
                alt="Saarthi Logo"
                className="h-10 w-10 object-contain"
              />
              {sidebarOpen && (
                <h1 className="text-xl font-bold text-white">Saarthi</h1>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 lg:hidden"
                >
                  <span className="text-2xl">☰</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-800">Book Appointment</h1>
              </div>
            </div>
          </header>

          {/* Loading Content */}
          <main className="flex-1 overflow-y-auto p-6 bg-green-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900 mx-auto"></div>
              <p className="mt-4 text-green-900">Loading doctor details...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-green-50">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
          {/* Logo */}
          <div className="p-6 border-b border-green-700">
            <div className="flex items-center space-x-3">
              <img
                src="/saarthi.png"
                alt="Saarthi Logo"
                className="h-10 w-10 object-contain"
              />
              {sidebarOpen && (
                <h1 className="text-xl font-bold text-white">Saarthi</h1>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-green-700 text-white shadow-lg'
                    : 'text-green-100 hover:bg-green-700 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-green-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <ProfileIcon />
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {userData?.name || 'Patient'}
                  </p>
                  <p className="text-xs text-green-200 truncate">
                    {userData?.email || 'patient@saarthi.com'}
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 text-green-100 hover:bg-green-700 rounded-lg transition-all duration-200"
            >
              <LogoutIcon />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 lg:hidden"
                >
                  <span className="text-2xl">☰</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-800">Book Appointment</h1>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                  <NotificationIcon />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="hidden md:flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">Welcome, {userData?.name?.split(' ')[0]}</p>
                    <p className="text-xs text-gray-600">Patient</p>
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                    {userData?.name?.charAt(0) || 'P'}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Error Content */}
          <main className="flex-1 overflow-y-auto p-6 bg-green-50 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-red-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-red-900 mb-2">
                  Error
                </h3>
                <p className="text-red-700 mb-4">{error}</p>
                <button
                  onClick={() => navigate("/doctors")}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Back to Doctors
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!selectedDoctor) {
    return (
      <div className="flex h-screen bg-green-50">
        {/* Similar structure as error state */}
        {/* ... */}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-green-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-green-700">
          <div className="flex items-center space-x-3">
            <img
              src="/saarthi.png"
              alt="Saarthi Logo"
              className="h-10 w-10 object-contain"
            />
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-white">Saarthi</h1>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'text-green-100 hover:bg-green-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-green-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <ProfileIcon />
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {userData?.name || 'Patient'}
                </p>
                <p className="text-xs text-green-200 truncate">
                  {userData?.email || 'patient@saarthi.com'}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 p-3 text-green-100 hover:bg-green-700 rounded-lg transition-all duration-200"
          >
            <LogoutIcon />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 lg:hidden"
              >
                <span className="text-2xl">☰</span>
              </button>
              <h1 className="text-2xl font-bold text-gray-800">Book Appointment</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                <NotificationIcon />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="hidden md:flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">Welcome, {userData?.name?.split(' ')[0]}</p>
                  <p className="text-xs text-gray-600">Patient</p>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                  {userData?.name?.charAt(0) || 'P'}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="px-4 pb-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex flex-col items-center ${
                        currentStep >= step.number ? "text-green-900" : "text-green-300"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          currentStep > step.number
                            ? "bg-green-500 border-green-500 text-white"
                            : currentStep === step.number
                            ? "bg-green-900 border-green-900 text-white"
                            : "border-green-300 text-green-300"
                        } font-semibold`}
                      >
                        {step.number}
                      </div>
                      <span className="text-xs mt-1 font-medium">{step.title}</span>
                      <span className="text-xs">{step.description}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 h-1 mx-4 ${
                          currentStep > step.number ? "bg-green-500" : "bg-green-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-green-50">
          {/* Doctor Info */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-green-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-900">
                  {selectedDoctor.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-green-900">{selectedDoctor.name}</h2>
                <p className="text-green-700">{selectedDoctor.degree || 'Medical Doctor'} | {selectedDoctor.department || 'General Medicine'}</p>
                <p className="text-green-600 text-sm">Fee: {selectedDoctor.fee || '₹500'} • {selectedDoctor.experience} years experience</p>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-200">
            {currentStep === 1 && <UploadStep doctor={selectedDoctor} onNext={handleNextStep} />}
            {currentStep === 2 && <VisitPrepStep doctor={selectedDoctor} onNext={handleNextStep} onBack={handlePreviousStep} />}
            {currentStep === 3 && (
              <CalendarStep
                doctor={selectedDoctor}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                appointmentType={appointmentType}
                onDateChange={setSelectedDate}
                onTimeChange={setSelectedTime}
                onAppointmentTypeChange={setAppointmentType}
                onNext={handleNextStep}
                onBack={handlePreviousStep}
              />
            )}
            {currentStep === 4 && (
              <PaymentStep
                doctor={selectedDoctor}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                appointmentType={appointmentType}
                onBack={handlePreviousStep}
                onComplete={handleCompleteBooking}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Booking;