// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

// // Icons
// const HomeIcon = () => <span>🏠</span>;
// const AppointmentsIcon = () => <span>📅</span>;
// const PatientRecordsIcon = () => <span>📋</span>;
// const LogoutIcon = () => <span>🚪</span>;
// const NotificationIcon = () => <span>🔔</span>;
// const ProfileIcon = () => <span>👤</span>;
// const SearchIcon = () => <span>🔍</span>;

// const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

// const DoctorDashboard = () => {
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();
//     const [sidebarOpen, setSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('home');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [loading, setLoading] = useState(false);
    
//     // State for data
//     const [todayAppointments, setTodayAppointments] = useState([]);
//     const [patientRecords, setPatientRecords] = useState([]);
//     const [filteredRecords, setFilteredRecords] = useState([]);

//     const handleLogout = () => {
//         logout();
//         navigate('/signin');
//     };

//     const menuItems = [
//         { id: 'home', label: 'Home', icon: <HomeIcon /> },
//         { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon /> },
//         { id: 'patient-records', label: 'Patient Records', icon: <PatientRecordsIcon /> },
//     ];

//     // Mock data for today's appointments
//     const mockAppointments = [
//         {
//             id: 1,
//             patientName: 'John Doe',
//             time: '09:00 AM',
//             type: 'Consultation',
//             status: 'Confirmed',
//             contact: '+1234567890'
//         },
//         {
//             id: 2,
//             patientName: 'Sarah Smith',
//             time: '10:30 AM',
//             type: 'Follow-up',
//             status: 'Confirmed',
//             contact: '+1234567891'
//         },
//         {
//             id: 3,
//             patientName: 'Mike Johnson',
//             time: '02:00 PM',
//             type: 'Check-up',
//             status: 'Pending',
//             contact: '+1234567892'
//         },
//         {
//             id: 4,
//             patientName: 'Emily Brown',
//             time: '04:15 PM',
//             type: 'Consultation',
//             status: 'Confirmed',
//             contact: '+1234567893'
//         }
//     ];

//     // Mock data for patient records
//     const mockPatientRecords = [
//         {
//             id: 1,
//             patientId: 'P001',
//             name: 'John Doe',
//             age: 45,
//             gender: 'Male',
//             lastVisit: '2024-01-15',
//             condition: 'Hypertension',
//             status: 'Stable',
//             contact: '+1234567890'
//         },
//         {
//             id: 2,
//             patientId: 'P002',
//             name: 'Sarah Smith',
//             age: 32,
//             gender: 'Female',
//             lastVisit: '2024-01-14',
//             condition: 'Diabetes',
//             status: 'Improving',
//             contact: '+1234567891'
//         },
//         {
//             id: 3,
//             patientId: 'P003',
//             name: 'Mike Johnson',
//             age: 58,
//             gender: 'Male',
//             lastVisit: '2024-01-13',
//             condition: 'Arthritis',
//             status: 'Stable',
//             contact: '+1234567892'
//         },
//         {
//             id: 4,
//             patientId: 'P004',
//             name: 'Emily Brown',
//             age: 29,
//             gender: 'Female',
//             lastVisit: '2024-01-12',
//             condition: 'Migraine',
//             status: 'Recovered',
//             contact: '+1234567893'
//         },
//         {
//             id: 5,
//             patientId: 'P005',
//             name: 'Robert Wilson',
//             age: 67,
//             gender: 'Male',
//             lastVisit: '2024-01-11',
//             condition: 'Heart Disease',
//             status: 'Monitoring',
//             contact: '+1234567894'
//         }
//     ];

//     // Load initial data
//     useEffect(() => {
//         setTodayAppointments(mockAppointments);
//         setPatientRecords(mockPatientRecords);
//         setFilteredRecords(mockPatientRecords);
//     }, []);

//     // Handle search
//     const handleSearch = () => {
//         if (!searchQuery.trim()) {
//             setFilteredRecords(patientRecords);
//             return;
//         }

//         const query = searchQuery.toLowerCase();
//         const filtered = patientRecords.filter(record =>
//             record.name.toLowerCase().includes(query) ||
//             record.patientId.toLowerCase().includes(query) ||
//             record.condition.toLowerCase().includes(query)
//         );
//         setFilteredRecords(filtered);
//     };

//     // Handle search on enter key
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     // Clear search
//     const handleClearSearch = () => {
//         setSearchQuery('');
//         setFilteredRecords(patientRecords);
//     };

//     // Add new patient record (mock function)
//     const handleAddPatientRecord = () => {
//         alert('Add new patient record functionality would open a form here');
//         // In real implementation, this would open a modal/form
//     };

//     // Get status color
//     const getStatusColor = (status) => {
//         switch (status.toLowerCase()) {
//             case 'confirmed':
//             case 'stable':
//             case 'recovered':
//                 return 'bg-green-100 text-green-800';
//             case 'pending':
//             case 'monitoring':
//                 return 'bg-yellow-100 text-yellow-800';
//             case 'improving':
//                 return 'bg-blue-100 text-blue-800';
//             default:
//                 return 'bg-gray-100 text-gray-800';
//         }
//     };

//     // Get appointment type color
//     const getAppointmentTypeColor = (type) => {
//         switch (type.toLowerCase()) {
//             case 'consultation':
//                 return 'bg-purple-100 text-purple-800';
//             case 'follow-up':
//                 return 'bg-indigo-100 text-indigo-800';
//             case 'check-up':
//                 return 'bg-teal-100 text-teal-800';
//             default:
//                 return 'bg-gray-100 text-gray-800';
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-50">
//             {/* White Sidebar */}
//             <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
//                 {/* Logo */}
//                 <div className="p-6 border-b border-gray-200">
//                     <div className="flex items-center space-x-3">
//                         <img
//                             src="/saarthi.png"
//                             alt="Saarthi Logo"
//                             className="h-10 w-10 object-contain"
//                         />
//                         {sidebarOpen && (
//                             <div>
//                                 <h1 className="text-xl font-bold text-gray-800">Dr. {user?.name || 'Dashboard'}</h1>
//                                 <p className="text-sm text-gray-600">Medical Practitioner</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Menu Items */}
//                 <nav className="flex-1 p-4 space-y-2">
//                     {menuItems.map((item) => (
//                         <button
//                             key={item.id}
//                             onClick={() => setActiveSection(item.id)}
//                             className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
//                                 activeSection === item.id
//                                     ? 'bg-blue-50 text-blue-700 border border-blue-200'
//                                     : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//                             }`}
//                         >
//                             <span className="text-lg">{item.icon}</span>
//                             {sidebarOpen && (
//                                 <span className="font-medium">{item.label}</span>
//                             )}
//                         </button>
//                     ))}
//                 </nav>

//                 {/* Doctor Profile & Logout */}
//                 <div className="p-4 border-t border-gray-200">
//                     <div className="flex items-center space-x-3 mb-4">
//                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
//                             {user?.name?.charAt(0) || 'D'}
//                         </div>
//                         {sidebarOpen && (
//                             <div className="flex-1 min-w-0">
//                                 <p className="text-sm font-semibold text-gray-800 truncate">
//                                     Dr. {user?.name || 'Doctor Name'}
//                                 </p>
//                                 <p className="text-xs text-gray-600 truncate">
//                                     {user?.specialization || 'Cardiology'}
//                                 </p>
//                                 <p className="text-xs text-gray-500 truncate">
//                                     {user?.email || 'doctor@saarthi.com'}
//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                     <button
//                         onClick={handleLogout}
//                         className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
//                     >
//                         <LogoutIcon />
//                         {sidebarOpen && <span className="font-medium">Logout</span>}
//                     </button>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 flex flex-col overflow-hidden">
//                 {/* Header */}
//                 <header className="bg-white shadow-sm border-b border-gray-200">
//                     <div className="flex items-center justify-between p-4">
//                         <div className="flex items-center space-x-4">
//                             <button
//                                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                                 className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//                             >
//                                 <span className="text-2xl">☰</span>
//                             </button>
//                             <h1 className="text-2xl font-bold text-gray-800 capitalize">
//                                 {activeSection === 'home' ? 'Dashboard' : 
//                                  activeSection === 'patient-records' ? 'Patient Records' : 
//                                  activeSection}
//                             </h1>
//                         </div>

//                         <div className="flex items-center space-x-4">
//                             <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
//                                 <NotificationIcon />
//                                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//                             </button>
//                             <div className="flex items-center space-x-3">
//                                 <div className="text-right">
//                                     <p className="text-sm font-medium text-gray-800">Dr. {user?.name}</p>
//                                     <p className="text-xs text-gray-600">{user?.specialization || 'Cardiology'}</p>
//                                 </div>
//                                 <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
//                                     {user?.name?.charAt(0) || 'D'}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Main Content Area */}
//                 <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
//                     {/* Home/Dashboard Section */}
//                     {activeSection === 'home' && (
//                         <div className="space-y-6">
//                             {/* Welcome Section */}
//                             <div className="bg-white rounded-xl shadow-sm p-6">
//                                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                                     Welcome back, Dr. {user?.name || 'Doctor'}! 👋
//                                 </h2>
//                                 <p className="text-gray-600">
//                                     Here's your schedule and updates for today.
//                                 </p>
//                             </div>

//                             {/* Today's Appointments */}
//                             <div className="bg-white rounded-xl shadow-sm p-6">
//                                 <div className="flex justify-between items-center mb-6">
//                                     <h3 className="text-xl font-bold text-gray-800">Today's Appointments</h3>
//                                     <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                                 </div>

//                                 <div className="space-y-4">
//                                     {todayAppointments.map((appointment) => (
//                                         <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                                             <div className="flex items-center space-x-4">
//                                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
//                                                     {appointment.patientName.charAt(0)}
//                                                 </div>
//                                                 <div>
//                                                     <h4 className="font-semibold text-gray-800">{appointment.patientName}</h4>
//                                                     <p className="text-sm text-gray-600">{appointment.contact}</p>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-center space-x-4">
//                                                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAppointmentTypeColor(appointment.type)}`}>
//                                                     {appointment.type}
//                                                 </span>
//                                                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
//                                                     {appointment.status}
//                                                 </span>
//                                                 <span className="font-semibold text-gray-800">{appointment.time}</span>
//                                                 <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
//                                                     View Details
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {todayAppointments.length === 0 && (
//                                     <div className="text-center py-8 text-gray-500">
//                                         No appointments scheduled for today.
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Quick Stats */}
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                 <div className="bg-white rounded-xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Total Patients Today</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">{todayAppointments.length}</p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
//                                             <span className="text-lg">👥</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="bg-white rounded-xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Completed</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">
//                                                 {todayAppointments.filter(a => a.status === 'Confirmed').length}
//                                             </p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
//                                             <span className="text-lg">✅</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="bg-white rounded-xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Pending</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">
//                                                 {todayAppointments.filter(a => a.status === 'Pending').length}
//                                             </p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
//                                             <span className="text-lg">⏰</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Appointments Section */}
//                     {activeSection === 'appointments' && (
//                         <div className="bg-white rounded-xl shadow-sm p-6">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
//                             <div className="space-y-4">
//                                 {mockAppointments.map((appointment) => (
//                                     <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                                         <div className="flex items-center space-x-4">
//                                             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
//                                                 {appointment.patientName.charAt(0)}
//                                             </div>
//                                             <div>
//                                                 <h4 className="font-semibold text-gray-800">{appointment.patientName}</h4>
//                                                 <p className="text-sm text-gray-600">{appointment.contact}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center space-x-4">
//                                             <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAppointmentTypeColor(appointment.type)}`}>
//                                                 {appointment.type}
//                                             </span>
//                                             <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
//                                                 {appointment.status}
//                                             </span>
//                                             <span className="font-semibold text-gray-800">{appointment.time}</span>
//                                             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
//                                                 View Details
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* Patient Records Section */}
//                     {activeSection === 'patient-records' && (
//                         <div className="space-y-6">
//                             {/* Search and Actions Bar */}
//                             <div className="bg-white rounded-xl shadow-sm p-6">
//                                 <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
//                                     <div className="flex-1 max-w-md">
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Search for patient record..."
//                                                 value={searchQuery}
//                                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                                 onKeyPress={handleKeyPress}
//                                                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                                             />
//                                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                 <SearchIcon />
//                                             </div>
//                                             {searchQuery && (
//                                                 <button
//                                                     onClick={handleClearSearch}
//                                                     className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
//                                                 >
//                                                     ×
//                                                 </button>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="flex space-x-3">
//                                         <button
//                                             onClick={handleSearch}
//                                             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
//                                         >
//                                             <SearchIcon />
//                                             <span>Search Records</span>
//                                         </button>
//                                         <button
//                                             onClick={handleAddPatientRecord}
//                                             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
//                                         >
//                                             <span>+</span>
//                                             <span>Add New Record</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Patient Records Table */}
//                             <div className="bg-white rounded-xl shadow-sm p-6">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-6">
//                                     Patient Records ({filteredRecords.length})
//                                 </h3>

//                                 <div className="overflow-x-auto">
//                                     <table className="w-full">
//                                         <thead>
//                                             <tr className="border-b border-gray-200">
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Patient ID</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Age</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Gender</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Condition</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Visit</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredRecords.map((record) => (
//                                                 <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
//                                                     <td className="py-3 px-4 font-medium text-gray-800">{record.patientId}</td>
//                                                     <td className="py-3 px-4">
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">
//                                                                 {record.name.charAt(0)}
//                                                             </div>
//                                                             <span className="font-medium text-gray-800">{record.name}</span>
//                                                         </div>
//                                                     </td>
//                                                     <td className="py-3 px-4 text-gray-600">{record.age}</td>
//                                                     <td className="py-3 px-4 text-gray-600">{record.gender}</td>
//                                                     <td className="py-3 px-4 text-gray-600">{record.condition}</td>
//                                                     <td className="py-3 px-4 text-gray-600">{record.lastVisit}</td>
//                                                     <td className="py-3 px-4">
//                                                         <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
//                                                             {record.status}
//                                                         </span>
//                                                     </td>
//                                                     <td className="py-3 px-4">
//                                                         <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
//                                                             View
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                     {filteredRecords.length === 0 && (
//                                         <div className="text-center py-8 text-gray-500">
//                                             {searchQuery ? 'No patient records found matching your search.' : 'No patient records available.'}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default DoctorDashboard;


import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Home, Calendar, ClipboardList, Bell, User, Search, LogOut } from "lucide-react";


// Icons
// Icons
const HomeIcon = () => <Home className="w-5 h-5" />;
const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
const PatientRecordsIcon = () => <ClipboardList className="w-5 h-5" />;
const LogoutIcon = () => <LogOut className="w-5 h-5" />;
const NotificationIcon = () => <Bell className="w-5 h-5" />;
const ProfileIcon = () => <User className="w-5 h-5" />;
const SearchIcon = () => <Search className="w-5 h-5" />;


const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

const DoctorDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'
    
    // State for data
    const [todayAppointments, setTodayAppointments] = useState([]);
    const [patientRecords, setPatientRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    const menuItems = [
        { id: 'home', label: 'Home', icon: <HomeIcon /> },
        { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon /> },
        { id: 'patient-records', label: 'Patient Records', icon: <PatientRecordsIcon /> },
    ];

    // Mock data for today's appointments
    const mockAppointments = [
        {
            id: 1,
            patientName: 'John Doe',
            time: '09:00 AM',
            type: 'Consultation',
            status: 'Confirmed',
            contact: '+1234567890',
            diagnosis: 'Hypertension Management',
            lastVisited: '2024-01-15',
            startTime: 'Starting now',
            isOnline: true
        },
        {
            id: 2,
            patientName: 'Sarah Smith',
            time: '10:30 AM',
            type: 'Follow-up',
            status: 'Confirmed',
            contact: '+1234567891',
            diagnosis: 'Diabetes Checkup',
            lastVisited: '2024-01-14',
            startTime: '10:30 AM',
            isOnline: true
        },
        {
            id: 3,
            patientName: 'Mike Johnson',
            time: '02:00 PM',
            type: 'Check-up',
            status: 'Pending',
            contact: '+1234567892',
            diagnosis: 'Arthritis Review',
            lastVisited: '2024-01-13',
            startTime: '02:00 PM',
            isOnline: false
        },
        {
            id: 4,
            patientName: 'Emily Brown',
            time: '04:15 PM',
            type: 'Consultation',
            status: 'Confirmed',
            contact: '+1234567893',
            diagnosis: 'Migraine Treatment',
            lastVisited: '2024-01-12',
            startTime: '04:15 PM',
            isOnline: true
        }
    ];

    // Mock data for patient records
    const mockPatientRecords = [
        {
            id: 1,
            patientId: 'P001',
            name: 'John Doe',
            age: 45,
            gender: 'Male',
            lastVisit: '2024-01-15',
            condition: 'Hypertension',
            status: 'Stable',
            contact: '+1234567890'
        },
        {
            id: 2,
            patientId: 'P002',
            name: 'Sarah Smith',
            age: 32,
            gender: 'Female',
            lastVisit: '2024-01-14',
            condition: 'Diabetes',
            status: 'Improving',
            contact: '+1234567891'
        },
        {
            id: 3,
            patientId: 'P003',
            name: 'Mike Johnson',
            age: 58,
            gender: 'Male',
            lastVisit: '2024-01-13',
            condition: 'Arthritis',
            status: 'Stable',
            contact: '+1234567892'
        }
    ];

    // Load initial data
    useEffect(() => {
        setTodayAppointments(mockAppointments);
        setPatientRecords(mockPatientRecords);
        setFilteredRecords(mockPatientRecords);
    }, []);

    // Handle search
    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setFilteredRecords(patientRecords);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = patientRecords.filter(record =>
            record.name.toLowerCase().includes(query) ||
            record.patientId.toLowerCase().includes(query) ||
            record.condition.toLowerCase().includes(query)
        );
        setFilteredRecords(filtered);
    };

    // Handle search on enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Clear search
    const handleClearSearch = () => {
        setSearchQuery('');
        setFilteredRecords(patientRecords);
    };

    // Add new patient record
    const handleAddPatientRecord = () => {
        alert('Add new patient record functionality would open a form here');
    };

    // Navigate to appointments page
    const handleNavigateToAppointments = () => {
        navigate('/doctor/appointments');
    };

    // Navigate to patient records page
    const handleNavigateToPatientRecords = () => {
        navigate('/doctor/patient-records');
    };

    // Get status color
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'confirmed':
            case 'stable':
            case 'recovered':
                return 'bg-green-100 text-green-800';
            case 'pending':
            case 'monitoring':
                return 'bg-yellow-100 text-yellow-800';
            case 'improving':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* White Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/saarthi.png"
                            alt="Saarthi Logo"
                            className="h-10 w-10 object-contain"
                        />
                        {sidebarOpen && (
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">Dr. {user?.name || 'Dashboard'}</h1>
                                <p className="text-sm text-gray-600">Medical Practitioner</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveSection(item.id);
                                if (item.id === 'appointments') {
                                    handleNavigateToAppointments();
                                } else if (item.id === 'patient-records') {
                                    handleNavigateToPatientRecords();
                                }
                            }}
                            className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                                activeSection === item.id
                                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {sidebarOpen && (
                                <span className="font-medium">{item.label}</span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Doctor Profile & Logout */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                            {user?.name?.charAt(0) || 'D'}
                        </div>
                        {sidebarOpen && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-800 truncate">
                                    Dr. {user?.name || 'Doctor Name'}
                                </p>
                                <p className="text-xs text-gray-600 truncate">
                                    {user?.specialization || 'Cardiology'}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {user?.email || 'doctor@saarthi.com'}
                                </p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    >
                        <LogoutIcon />
                        {sidebarOpen && <span className="font-medium">Logout</span>}
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
                            <h1 className="text-2xl font-bold text-gray-800 capitalize">
                                {activeSection === 'home' ? 'Dashboard' : 
                                 activeSection === 'patient-records' ? 'Patient Records' : 
                                 activeSection}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                <NotificationIcon />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="hidden md:flex items-center space-x-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-800">Dr. {user?.name}</p>
                                    <p className="text-xs text-gray-600">{user?.specialization || 'Cardiology'}</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                    {user?.name?.charAt(0) || 'D'}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50">
                    {/* Home/Dashboard Section */}
                    {activeSection === 'home' && (
                        <div className="space-y-6">
                            {/* Welcome Section */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    Welcome back, Dr. {user?.name || 'Doctor'}! 👋
                                </h2>
                                <p className="text-gray-600">
                                    Here's your schedule and updates for today.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                                    <div className="flex-1 max-w-lg">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search for patient record..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            />
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SearchIcon />
                                            </div>
                                            {searchQuery && (
                                                <button
                                                    onClick={handleClearSearch}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                                >
                                                    ×
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                        <button
                                            onClick={handleSearch}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                                        >
                                            <SearchIcon />
                                            <span>Search Records</span>
                                        </button>
                                        <button
                                            onClick={handleAddPatientRecord}
                                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                                        >
                                            <span>+</span>
                                            <span>Add New Record</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                                <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Total Patients Today</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{todayAppointments.length}</p>
                                        </div>
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <span className="text-lg">👥</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Completed</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">
                                                {todayAppointments.filter(a => a.status === 'Confirmed').length}
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                            <span className="text-lg">✅</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Pending</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">
                                                {todayAppointments.filter(a => a.status === 'Pending').length}
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                                            <span className="text-lg">⏰</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Today's Appointments Header */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                                    <h3 className="text-xl font-bold text-gray-800">Today's Appointments</h3>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm text-gray-500 hidden lg:block">
                                            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => setViewMode('card')}
                                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                                    viewMode === 'card' 
                                                        ? 'bg-blue-600 text-white' 
                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                            >
                                                Card View
                                            </button>
                                            <button
                                                onClick={() => setViewMode('table')}
                                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                                    viewMode === 'table' 
                                                        ? 'bg-blue-600 text-white' 
                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                            >
                                                Table View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Appointments - Card View */}
                            {viewMode === 'card' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                                    {todayAppointments.map((appointment) => (
                                        <div key={appointment.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                            {/* Patient Name */}
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-lg">
                                                    {appointment.patientName.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 text-lg">{appointment.patientName}</h4>
                                                    <p className="text-sm text-gray-600">{appointment.contact}</p>
                                                </div>
                                            </div>

                                            {/* Diagnosis */}
                                            <div className="mb-3">
                                                <p className="text-sm text-gray-600">Diagnosis:</p>
                                                <p className="font-medium text-gray-800">{appointment.diagnosis}</p>
                                            </div>

                                            {/* Last Visited */}
                                            <div className="mb-3">
                                                <p className="text-sm text-gray-600">Last visited:</p>
                                                <p className="font-medium text-gray-800">{formatDate(appointment.lastVisited)}</p>
                                            </div>

                                            {/* Start Time */}
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-600">{appointment.startTime}</p>
                                            </div>

                                            {/* Online Status and Actions */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <span className={`w-2 h-2 rounded-full ${appointment.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                                    <span className="text-sm text-gray-600">
                                                        {appointment.isOnline ? 'Online' : 'Offline'}
                                                    </span>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button className="px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
                                                        View Summary
                                                    </button>
                                                    <button className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                                        appointment.isOnline 
                                                            ? 'bg-green-600 text-white hover:bg-green-700' 
                                                            : 'bg-gray-400 text-white cursor-not-allowed'
                                                    }`}>
                                                        Join the Call
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Appointments - Table View */}
                            {viewMode === 'table' && (
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Patient</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Diagnosis</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Visit</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {todayAppointments.map((appointment) => (
                                                    <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                                                        <td className="py-3 px-4">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                                                                    {appointment.patientName.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-gray-800">{appointment.patientName}</p>
                                                                    <p className="text-sm text-gray-600">{appointment.contact}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4 text-gray-600">{appointment.diagnosis}</td>
                                                        <td className="py-3 px-4 text-gray-600">{formatDate(appointment.lastVisited)}</td>
                                                        <td className="py-3 px-4 text-gray-600">{appointment.time}</td>
                                                        <td className="py-3 px-4">
                                                            <div className="flex items-center space-x-2">
                                                                <span className={`w-2 h-2 rounded-full ${appointment.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                                                <span className="text-sm text-gray-600">
                                                                    {appointment.isOnline ? 'Online' : 'Offline'}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <div className="flex space-x-2">
                                                                <button className="px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
                                                                    Summary
                                                                </button>
                                                                <button className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                                                    appointment.isOnline 
                                                                        ? 'bg-green-600 text-white hover:bg-green-700' 
                                                                        : 'bg-gray-400 text-white cursor-not-allowed'
                                                                }`}>
                                                                    Join Call
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {todayAppointments.length === 0 && (
                                <div className="text-center py-8 text-gray-500 bg-white rounded-xl shadow-sm">
                                    No appointments scheduled for today.
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DoctorDashboard;