// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { doctorsData } from '../../data/doctorsData';
// import { 
//     Home,
//     Calendar,
//     Heart,
//     ClipboardList,
//     Settings,
//     LogOut,
//     User,
//     Bell,
//     ChevronRight,
//     Search,
//     Filter
// } from 'lucide-react';

// // Icon Components
// const DashboardIcon = () => <Home className="w-5 h-5" />;
// const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
// const HealthIcon = () => <Heart className="w-5 h-5" />;
// const ReportsIcon = () => <ClipboardList className="w-5 h-5" />;
// const SettingsIcon = () => <Settings className="w-5 h-5" />;
// const LogoutIcon = () => <LogOut className="w-5 h-5" />;
// const NotificationIcon = () => <Bell className="w-5 h-5" />;
// const ProfileIcon = () => <User className="w-5 h-5" />;

// export const Doctors = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeSection, setActiveSection] = useState('doctors');
//   const navigate = useNavigate();

//   // Get user data from localStorage
//   const userData = JSON.parse(localStorage.getItem('saarthi_user') || '{}');

//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//     { id: 'doctors', label: 'Doctors', icon: <AppointmentsIcon />, path: '/doctors' },
//     { id: 'health', label: 'Health', icon: <HealthIcon />, path: '/health' },
//     { id: 'reports', label: 'Reports', icon: <ReportsIcon />, path: '/reports' },
//     { id: 'settings', label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem('saarthi_token');
//     localStorage.removeItem('saarthi_user');
//     navigate('/signin');
//   };

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   // Get unique departments for filter
//   const departments = ['All', ...new Set(doctorsData.map(doctor => doctor.department))];

//   // Filter doctors based on search and department
//   const filteredDoctors = doctorsData.filter(doctor => {
//     const matchesSearch =
//       doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       doctor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       doctor.specialization.some(spec =>
//         spec.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//     const matchesDepartment =
//       selectedDepartment === 'All' || doctor.department === selectedDepartment;

//     return matchesSearch && matchesDepartment;
//   });

//   const handleBookAppointment = (doctorId) => {
//     // Check if user is logged in
//     const token = localStorage.getItem('saarthi_token');
//     if (!token) {
//       navigate('/signin');
//       return;
//     }

//     // Navigate to booking page with doctor ID as route param
//     navigate(`/booking/${doctorId}`);
//   };

//   return (
//     <div className="flex h-screen bg-green-50">
//       {/* Sidebar */}
//       <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
//         {/* Logo */}
//         <div className="p-6 border-b border-green-700">
//           <div className="flex items-center space-x-3">
//             <img
//               src="/saarthi.png"
//               alt="Saarthi Logo"
//               className="h-10 w-10 object-contain"
//             />
//             {sidebarOpen && (
//               <h1 className="text-xl font-bold text-white">Saarthi</h1>
//             )}
//           </div>
//         </div>

//         {/* Menu Items */}
//         <nav className="flex-1 p-4 space-y-2">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleNavigate(item.path)}
//               className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
//                 activeSection === item.id
//                   ? 'bg-green-700 text-white shadow-lg'
//                   : 'text-green-100 hover:bg-green-700 hover:text-white'
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {sidebarOpen && (
//                 <span className="font-medium">{item.label}</span>
//               )}
//             </button>
//           ))}
//         </nav>

//         {/* User Profile & Logout */}
//         <div className="p-4 border-t border-green-700">
//           <div className="flex items-center space-x-3 mb-4">
//             <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
//               <ProfileIcon />
//             </div>
//             {sidebarOpen && (
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium text-white truncate">
//                   {userData?.name || 'Patient'}
//                 </p>
//                 <p className="text-xs text-green-200 truncate">
//                   {userData?.email || 'patient@saarthi.com'}
//                 </p>
//               </div>
//             )}
//           </div>
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center space-x-3 p-3 text-green-100 hover:bg-green-700 rounded-lg transition-all duration-200"
//           >
//             <LogoutIcon />
//             {sidebarOpen && <span>Logout</span>}
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b border-gray-200">
//           <div className="flex items-center justify-between p-4">
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 lg:hidden"
//               >
//                 <span className="text-2xl">☰</span>
//               </button>
//               <h1 className="text-2xl font-bold text-gray-800">Find Doctors</h1>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
//                 <NotificationIcon />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="hidden md:flex items-center space-x-3">
//                 <div className="text-right">
//                   <p className="text-sm font-medium text-gray-800">Welcome, {userData?.name?.split(' ')[0]}</p>
//                   <p className="text-xs text-gray-600">Patient</p>
//                 </div>
//                 <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
//                   {userData?.name?.charAt(0) || 'P'}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main Content Area */}
//         <main className="flex-1 overflow-y-auto p-6 bg-green-50">
//           {/* Page Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-green-900 mb-4">
//               Find the Right Doctor for You
//             </h1>
//             <p className="text-lg text-green-700 max-w-3xl mx-auto">
//               Book appointments with experienced healthcare professionals. Choose from
//               our verified doctors with detailed profiles and availability.
//             </p>
//           </div>

//           {/* Search and Filter Section */}
//           <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Search Input */}
//               <div>
//                 <label
//                   htmlFor="search"
//                   className="block text-sm font-medium text-green-900 mb-2"
//                 >
//                   Search Doctors
//                 </label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
//                   <input
//                     type="text"
//                     id="search"
//                     placeholder="Search by name, department, or specialization..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//                   />
//                 </div>
//               </div>

//               {/* Department Filter */}
//               <div>
//                 <label
//                   htmlFor="department"
//                   className="block text-sm font-medium text-green-900 mb-2"
//                 >
//                   Filter by Department
//                 </label>
//                 <div className="relative">
//                   <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
//                   <select
//                     id="department"
//                     value={selectedDepartment}
//                     onChange={(e) => setSelectedDepartment(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 appearance-none"
//                   >
//                     {departments.map((dept) => (
//                       <option key={dept} value={dept}>
//                         {dept}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Doctors Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {filteredDoctors.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-200"
//               >
//                 {/* Doctor Header */}
//                 <div className="p-6 border-b border-green-100">
//                   <div className="flex items-start space-x-4">
//                     {/* Doctor Image */}
//                     <div className="flex-shrink-0">
//                       <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
//                         <span className="text-2xl font-bold text-green-900">
//                           {doctor.name
//                             .split(' ')
//                             .map((n) => n[0])
//                             .join('')}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Doctor Info */}
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-green-900 mb-1">
//                         {doctor.name}
//                       </h3>
//                       <p className="text-green-700 text-sm mb-2">{doctor.degree}</p>
//                       <div className="flex items-center justify-between">
//                         <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                           {doctor.department}
//                         </span>
//                         <div className="flex items-center">
//                           <svg
//                             className="w-4 h-4 text-yellow-400 mr-1"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                           <span className="text-sm text-green-900 font-medium">
//                             {doctor.rating}
//                           </span>
//                           <span className="text-xs text-green-600 ml-1">
//                             ({doctor.reviews})
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Doctor Details */}
//                 <div className="p-6">
//                   {/* Experience and Fee */}
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="text-center p-3 bg-green-50 rounded-lg">
//                       <div className="text-sm text-green-600">Experience</div>
//                       <div className="font-bold text-green-900">
//                         {doctor.experience}
//                       </div>
//                     </div>
//                     <div className="text-center p-3 bg-green-50 rounded-lg">
//                       <div className="text-sm text-green-600">Consultation Fee</div>
//                       <div className="font-bold text-green-900">{doctor.fee}</div>
//                     </div>
//                   </div>

//                   {/* Availability */}
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-green-900 mb-2">Availability:</h4>
//                     <div className="space-y-1 text-sm text-green-700">
//                       <div className="flex justify-between">
//                         <span>{doctor.availability.days}</span>
//                         <span>{doctor.availability.morning}</span>
//                       </div>
//                       {doctor.availability.evening && (
//                         <div className="flex justify-between">
//                           <span>&</span>
//                           <span>{doctor.availability.evening}</span>
//                         </div>
//                       )}
//                       {doctor.availability.saturday && (
//                         <div className="flex justify-between">
//                           <span>Saturday</span>
//                           <span>{doctor.availability.saturday}</span>
//                         </div>
//                       )}
//                       {doctor.availability.sunday && (
//                         <div className="flex justify-between">
//                           <span>Sunday</span>
//                           <span>{doctor.availability.sunday}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Specialization */}
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-green-900 mb-2">Specialization:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {doctor.specialization.map((spec, index) => (
//                         <span
//                           key={index}
//                           className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
//                         >
//                           {spec}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Languages */}
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-green-900 mb-2">Languages:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {doctor.languages.map((lang, index) => (
//                         <span
//                           key={index}
//                           className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
//                         >
//                           {lang}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* About Doctor */}
//                   <div className="mb-6">
//                     <h4 className="font-semibold text-green-900 mb-2">About Doctor:</h4>
//                     <p className="text-sm text-green-700 line-clamp-3">
//                       {doctor.about}
//                     </p>
//                   </div>

//                   {/* Book Appointment Button */}
//                   <button
//                     onClick={() => handleBookAppointment(doctor.id)}
//                     className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
//                   >
//                     <Calendar className="w-5 h-5 mr-2" />
//                     Book Appointment
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* No Results Message */}
//           {filteredDoctors.length === 0 && (
//             <div className="text-center py-12">
//               <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto">
//                 <svg
//                   className="w-16 h-16 text-green-300 mx-auto mb-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <h3 className="text-xl font-bold text-green-900 mb-2">
//                   No doctors found
//                 </h3>
//                 <p className="text-green-700">
//                   Try adjusting your search criteria or filters
//                 </p>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Home,
    Calendar,
    Heart,
    ClipboardList,
    Settings,
    LogOut,
    User,
    Bell,
    ChevronRight,
    Search,
    Filter
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

export const Doctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('doctors');
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
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

  // Fetch doctors from API
  const fetchDoctors = async () => {
    try {
      setLoading(true);
      setError('');
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
        setDoctors(data.data);
        
        // Extract unique departments from API data
        const uniqueDepartments = ['All', ...new Set(data.data.map(doctor => doctor.department))];
        setDepartments(uniqueDepartments);
      } else {
        setError('Failed to fetch doctors data');
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('saarthi_token');
    localStorage.removeItem('saarthi_user');
    navigate('/signin');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Filter doctors based on search and department
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doctor.department && doctor.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (doctor.specialization && doctor.specialization.some(spec =>
        spec.toLowerCase().includes(searchTerm.toLowerCase())
      ));

    const matchesDepartment =
      selectedDepartment === 'All' || 
      (doctor.department && doctor.department === selectedDepartment);

    return matchesSearch && matchesDepartment;
  });

  const handleBookAppointment = (doctorId) => {
  console.log('Book appointment clicked for doctor:', doctorId);
  
  // Check if user is logged in
  const token = localStorage.getItem('saarthi_token');
  console.log('Token exists:', !!token);
  
  if (!token) {
    console.log('No token found, redirecting to signin');
    navigate('/signin');
    return;
  }

  console.log('Navigating to booking page with doctor ID:', doctorId);
  
  // Try different navigation approaches
  const bookingPath = `/booking/${doctorId}`;
  console.log('Target path:', bookingPath);
  
  // Method 1: Regular navigate
  navigate(bookingPath);
  console.log('Regular navigate called');
  
  // Method 2: Force navigation after a delay to see if it's a timing issue
  setTimeout(() => {
    console.log('Forcing navigation again...');
    navigate(bookingPath, { replace: true });
  }, 100);
};

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
    </div>
  );

  // Error component
  const ErrorMessage = () => (
    <div className="text-center py-12">
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
          Error Loading Doctors
        </h3>
        <p className="text-red-700 mb-4">{error}</p>
        <button
          onClick={fetchDoctors}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );

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
              <h1 className="text-2xl font-bold text-gray-800">Find Doctors</h1>
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

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-green-50">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-900 mb-4">
              Find the Right Doctor for You
            </h1>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Book appointments with experienced healthcare professionals. Choose from
              our verified doctors with detailed profiles and availability.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search Input */}
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-green-900 mb-2"
                >
                  Search Doctors
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by name, department, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  />
                </div>
              </div>

              {/* Department Filter */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-green-900 mb-2"
                >
                  Filter by Department
                </label>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                  <select
                    id="department"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 appearance-none"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept || 'Unknown Department'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && <LoadingSpinner />}

          {/* Error State */}
          {error && !loading && <ErrorMessage />}

          {/* Doctors Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-200"
                >
                  {/* Doctor Header */}
                  <div className="p-6 border-b border-green-100">
                    <div className="flex items-start space-x-4">
                      {/* Doctor Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-900">
                            {doctor.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                      </div>

                      {/* Doctor Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-green-900 mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-green-700 text-sm mb-2">{doctor.degree || 'Medical Doctor'}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {doctor.department || 'General Medicine'}
                          </span>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 text-yellow-400 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm text-green-900 font-medium">
                              {doctor.rating || '0'}
                            </span>
                            <span className="text-xs text-green-600 ml-1">
                              ({doctor.reviews || 0})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-6">
                    {/* Experience and Fee */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-600">Experience</div>
                        <div className="font-bold text-green-900">
                          {doctor.experience} years
                        </div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-600">Consultation Fee</div>
                        <div className="font-bold text-green-900">{doctor.fee || '₹500'}</div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-900 mb-2">Availability:</h4>
                      <div className="space-y-1 text-sm text-green-700">
                        <div className="flex justify-between">
                          <span>{doctor.availability?.days || 'Monday - Friday'}</span>
                          <span>{doctor.availability?.morning || '9:00 AM - 1:00 PM'}</span>
                        </div>
                        {doctor.availability?.evening && (
                          <div className="flex justify-between">
                            <span>&</span>
                            <span>{doctor.availability.evening}</span>
                          </div>
                        )}
                        {doctor.availability?.saturday && (
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span>{doctor.availability.saturday}</span>
                          </div>
                        )}
                        {doctor.availability?.sunday && (
                          <div className="flex justify-between">
                            <span>Sunday</span>
                            <span>{doctor.availability.sunday}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Specialization */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-900 mb-2">Specialization:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(doctor.specialization && doctor.specialization.length > 0 ? doctor.specialization : [doctor.department || 'General Medicine']).map((spec, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-900 mb-2">Languages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(doctor.languages && doctor.languages.length > 0 ? doctor.languages : ['English']).map((lang, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* About Doctor */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-900 mb-2">About Doctor:</h4>
                      <p className="text-sm text-green-700 line-clamp-3">
                        {doctor.about || `Experienced ${doctor.department || 'medical'} professional with ${doctor.experience} years of practice.`}
                      </p>
                    </div>

                    {/* Book Appointment Button */}
                    <button
                      onClick={() => handleBookAppointment(doctor.id)}
                      className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {!loading && !error && filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-green-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  No doctors found
                </h3>
                <p className="text-green-700">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );  
};