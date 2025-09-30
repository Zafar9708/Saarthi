


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

// // Icons (you can replace with actual icon components or SVG)
// import {
//     BarChart2,
//     Users,
//     UserCheck,
//     Calendar,
//     Settings,
//     TrendingUp,
//     LogOut,
//     Bell,
//     User,
//     DollarSign
// } from "lucide-react";

// const DashboardIcon = () => <BarChart2 className="w-5 h-5" />;
// const UsersIcon = () => <Users className="w-5 h-5" />;
// const DoctorsIcon = () => <UserCheck className="w-5 h-5" />; // can also use User or UserDoctor if available
// const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
// const SettingsIcon = () => <Settings className="w-5 h-5" />;
// const ReportsIcon = () => <TrendingUp className="w-5 h-5" />;
// const LogoutIcon = () => <LogOut className="w-5 h-5" />;
// const NotificationIcon = () => <Bell className="w-5 h-5" />;
// const ProfileIcon = () => <User className="w-5 h-5" />;


// const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

// const AdminDashboard = () => {
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();
//     const [sidebarOpen, setSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard');
//     const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [formError, setFormError] = useState('');
//     const [formSuccess, setFormSuccess] = useState('');

//     // State for real data
//     const [patients, setPatients] = useState([]);
//     const [doctors, setDoctors] = useState([]);
//     const [stats, setStats] = useState({
//         totalPatients: 0,
//         totalDoctors: 0,
//         totalAppointments: 0,
//         totalRevenue: 0
//     });
//     const [dataLoading, setDataLoading] = useState({
//         patients: false,
//         doctors: false
//     });

//     // Doctor form state
//     const [doctorForm, setDoctorForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         specialization: '',
//         qualifications: [''],
//         experience: '',
//         licenseNumber: '',
//         hospital: '',
//         contactNumber: '',
//         bio: '',
//         consultationFee: '',
//         address: {
//             street: '',
//             city: '',
//             state: '',
//             zipCode: ''
//         }
//     });

//     const handleLogout = () => {
//         logout();
//         navigate('/signin');
//     };

//     const menuItems = [
//         { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
//         { id: 'patients', label: 'Patients', icon: <UsersIcon /> },
//         { id: 'doctors', label: 'Doctors', icon: <DoctorsIcon /> },
//         { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon /> },
//         { id: 'reports', label: 'Reports', icon: <ReportsIcon /> },
//         { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
//     ];

//     // Fetch patients data
//     const fetchPatients = async () => {
//         setDataLoading(prev => ({ ...prev, patients: true }));
//         try {
//             const token = localStorage.getItem('saarthi_token');
//             const response = await fetch(`${API_BASE_URL}/auth/all`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             if (data.success) {
//                 // Filter only regular users (patients) - exclude admins and guests if needed
//                 const regularUsers = data.data.filter(user => user.role === 'user');
//                 setPatients(regularUsers);
//             }
//         } catch (error) {
//             console.error('Error fetching patients:', error);
//         } finally {
//             setDataLoading(prev => ({ ...prev, patients: false }));
//         }
//     };

//     // Fetch doctors data
//     const fetchDoctors = async () => {
//         setDataLoading(prev => ({ ...prev, doctors: true }));
//         try {
//             const token = localStorage.getItem('saarthi_token');
//             const response = await fetch(`${API_BASE_URL}/admin/doctors`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             if (data.success) {
//                 setDoctors(data.data);
//                 // Update stats
//                 setStats(prev => ({
//                     ...prev,
//                     totalDoctors: data.count
//                 }));
//             }
//         } catch (error) {
//             console.error('Error fetching doctors:', error);
//         } finally {
//             setDataLoading(prev => ({ ...prev, doctors: false }));
//         }
//     };

//     // Update stats when data changes
//     useEffect(() => {
//         setStats(prev => ({
//             ...prev,
//             totalPatients: patients.length
//         }));
//     }, [patients]);

//     // Fetch data when section changes
//     useEffect(() => {
//         if (activeSection === 'patients') {
//             fetchPatients();
//         } else if (activeSection === 'doctors') {
//             fetchDoctors();
//         } else if (activeSection === 'dashboard') {
//             fetchPatients();
//             fetchDoctors();
//         }
//     }, [activeSection]);

//     // Mock data for recent activities
//     const recentActivities = [
//         { user: 'John Doe', action: 'Booked an appointment', time: '2 min ago' },
//         { user: 'Dr. Sarah Smith', action: 'Joined the platform', time: '1 hour ago' },
//         { user: 'Mike Johnson', action: 'Completed profile', time: '3 hours ago' },
//         { user: 'Dr. Alex Brown', action: 'Updated availability', time: '5 hours ago' },
//     ];

//     // Handle doctor form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setDoctorForm(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // Handle address input changes
//     const handleAddressChange = (e) => {
//         const { name, value } = e.target;
//         setDoctorForm(prev => ({
//             ...prev,
//             address: {
//                 ...prev.address,
//                 [name]: value
//             }
//         }));
//     };

//     // Handle qualifications array
//     const handleQualificationChange = (index, value) => {
//         const updatedQualifications = [...doctorForm.qualifications];
//         updatedQualifications[index] = value;
//         setDoctorForm(prev => ({
//             ...prev,
//             qualifications: updatedQualifications
//         }));
//     };

//     const addQualificationField = () => {
//         setDoctorForm(prev => ({
//             ...prev,
//             qualifications: [...prev.qualifications, '']
//         }));
//     };

//     const removeQualificationField = (index) => {
//         if (doctorForm.qualifications.length > 1) {
//             const updatedQualifications = doctorForm.qualifications.filter((_, i) => i !== index);
//             setDoctorForm(prev => ({
//                 ...prev,
//                 qualifications: updatedQualifications
//             }));
//         }
//     };

//     // Handle add doctor form submission
//     const handleAddDoctor = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setFormError('');
//         setFormSuccess('');

//         try {
//             const token = localStorage.getItem('saarthi_token');

//             // Filter out empty qualifications
//             const filteredQualifications = doctorForm.qualifications.filter(qual => qual.trim() !== '');

//             const doctorData = {
//                 ...doctorForm,
//                 qualifications: filteredQualifications,
//                 experience: parseInt(doctorForm.experience),
//                 consultationFee: parseFloat(doctorForm.consultationFee) || 0
//             };

//             const response = await fetch(`${API_BASE_URL}/admin/doctors`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify(doctorData)
//             });

//             const data = await response.json();

//             if (data.success) {
//                 setFormSuccess('Doctor added successfully!');
//                 // Refresh doctors list
//                 fetchDoctors();
//                 // Reset form
//                 setDoctorForm({
//                     name: '',
//                     email: '',
//                     password: '',
//                     specialization: '',
//                     qualifications: [''],
//                     experience: '',
//                     licenseNumber: '',
//                     hospital: '',
//                     contactNumber: '',
//                     bio: '',
//                     consultationFee: '',
//                     address: {
//                         street: '',
//                         city: '',
//                         state: '',
//                         zipCode: ''
//                     }
//                 });
//                 // Close modal after 2 seconds
//                 setTimeout(() => {
//                     setShowAddDoctorModal(false);
//                     setFormSuccess('');
//                 }, 2000);
//             } else {
//                 setFormError(data.message || 'Failed to add doctor');
//             }
//         } catch (error) {
//             setFormError('Network error. Please try again.');
//             console.error('Add doctor error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Reset form when modal closes
//     const handleCloseModal = () => {
//         setShowAddDoctorModal(false);
//         setFormError('');
//         setFormSuccess('');
//         setDoctorForm({
//             name: '',
//             email: '',
//             password: '',
//             specialization: '',
//             qualifications: [''],
//             experience: '',
//             licenseNumber: '',
//             hospital: '',
//             contactNumber: '',
//             bio: '',
//             consultationFee: '',
//             address: {
//                 street: '',
//                 city: '',
//                 state: '',
//                 zipCode: ''
//             }
//         });
//     };

//     // Format date
//     const formatDate = (dateString) => {
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

//     return (
//         <div className="flex h-screen bg-green-50">
//             {/* Sidebar - Reduced width */}
//             <div className={`${sidebarOpen ? 'w-56' : 'w-16'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
//                 {/* Logo */}
//                 <div className="p-4 border-b border-green-700">
//                     <div className="flex items-center space-x-3">
//                         <img
//                             src="/saarthi.png"
//                             alt="Saarthi Logo"
//                             className="h-8 w-8 object-contain"
//                         />
//                         {sidebarOpen && (
//                             <h1 className="text-xl font-bold text-white">Saarthi Admin</h1>
//                         )}
//                     </div>
//                 </div>

//                 {/* Menu Items */}
//                 <nav className="flex-1 p-4 space-y-2">
//                     {menuItems.map((item) => (
//                         <button
//                             key={item.id}
//                             onClick={() => setActiveSection(item.id)}
//                             className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${activeSection === item.id
//                                     ? 'bg-green-700 text-white shadow-lg'
//                                     : 'text-green-100 hover:bg-green-700 hover:text-white'
//                                 }`}
//                         >
//                             <span className="text-lg">{item.icon}</span>
//                             {sidebarOpen && (
//                                 <span className="font-medium">{item.label}</span>
//                             )}
//                         </button>
//                     ))}
//                 </nav>

//                 {/* User Profile & Logout */}
//                 <div className="p-4 border-t border-green-700">
//                     <div className="flex items-center space-x-3 mb-4">
//                         <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
//                             <ProfileIcon />
//                         </div>
//                         {sidebarOpen && (
//                             <div className="flex-1 min-w-0">
//                                 <p className="text-sm font-medium text-white truncate">
//                                     {user?.name || 'Admin User'}
//                                 </p>
//                                 <p className="text-xs text-green-200 truncate">
//                                     {user?.email || 'admin@saarthi.com'}
//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                     <button
//                         onClick={handleLogout}
//                         className="w-full flex items-center space-x-3 p-3 text-green-100 hover:bg-green-700 rounded-lg transition-all duration-200"
//                     >
//                         <LogoutIcon />
//                         {sidebarOpen && <span>Logout</span>}
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
//                                 {activeSection}
//                             </h1>
//                         </div>

//                         <div className="flex items-center space-x-4">
//                             <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
//                                 <NotificationIcon />
//                                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//                             </button>
//                             <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
//                                 {user?.name?.charAt(0) || 'A'}
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Main Content Area */}
//                 <main className="flex-1 overflow-y-auto p-6 bg-green-50">
//                     {activeSection === 'dashboard' && (
//                         <div className="space-y-6">
//                             {/* Welcome Section */}
//                             <div className="bg-white rounded-2xl shadow-sm p-6">
//                                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                                     Welcome back, {user?.name || 'Admin'}! 👋
//                                 </h2>
//                                 <p className="text-gray-600">
//                                     Here's what's happening with your platform today.
//                                 </p>
//                             </div>

//                             {/* Stats Grid */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                                 {/* Total Patients */}
//                                 <div className="bg-white rounded-2xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Total Patients</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalPatients}</p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
//                                             <Users className="w-6 h-6" />
//                                         </div>
//                                     </div>
//                                     <div className="mt-4">
//                                         <span className="text-sm text-green-600 font-medium">+12%</span>
//                                         <span className="text-sm text-gray-500 ml-1">from last week</span>
//                                     </div>
//                                 </div>

//                                 {/* Total Doctors */}
//                                 <div className="bg-white rounded-2xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Total Doctors</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalDoctors}</p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
//                                             <UserCheck className="w-6 h-6" />
//                                         </div>
//                                     </div>
//                                     <div className="mt-4">
//                                         <span className="text-sm text-green-600 font-medium">+5%</span>
//                                         <span className="text-sm text-gray-500 ml-1">from last week</span>
//                                     </div>
//                                 </div>

//                                 {/* Appointments */}
//                                 <div className="bg-white rounded-2xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Appointments</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">456</p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
//                                             <Calendar className="w-6 h-6" />
//                                         </div>
//                                     </div>
//                                     <div className="mt-4">
//                                         <span className="text-sm text-green-600 font-medium">+23%</span>
//                                         <span className="text-sm text-gray-500 ml-1">from last week</span>
//                                     </div>
//                                 </div>

//                                 {/* Revenue */}
//                                 <div className="bg-white rounded-2xl shadow-sm p-6">
//                                     <div className="flex items-center justify-between">
//                                         <div>
//                                             <p className="text-sm font-medium text-gray-600">Revenue</p>
//                                             <p className="text-2xl font-bold text-gray-900 mt-1">${stats.revenue}</p>
//                                         </div>
//                                         <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
//                                             <DollarSign className="w-6 h-6" />
//                                         </div>
//                                     </div>
//                                     <div className="mt-4">
//                                         <span className="text-sm text-green-600 font-medium">+18%</span>
//                                         <span className="text-sm text-gray-500 ml-1">from last week</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Recent Activities & Quick Actions */}
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                                 {/* Recent Activities */}
//                                 <div className="bg-white rounded-2xl shadow-sm p-6">
//                                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
//                                     <div className="space-y-4">
//                                         {recentActivities.map((activity, index) => (
//                                             <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                                                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                                                     <span className="text-green-600">👤</span>
//                                                 </div>
//                                                 <div className="flex-1">
//                                                     <p className="text-sm font-medium text-gray-800">{activity.user}</p>
//                                                     <p className="text-sm text-gray-600">{activity.action}</p>
//                                                 </div>
//                                                 <span className="text-xs text-gray-500">{activity.time}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Quick Actions */}
//                                 <div className="bg-white rounded-2xl shadow-sm p-6">
//                                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-200 text-center">
//                                             <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
//                                                 <UsersIcon />
//                                             </div>
//                                             <span className="text-sm font-medium text-gray-800">View Patients</span>
//                                         </button>
//                                         <button
//                                             onClick={() => setShowAddDoctorModal(true)}
//                                             className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 text-center"
//                                         >
//                                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
//                                                 <DoctorsIcon />
//                                             </div>
//                                             <span className="text-sm font-medium text-gray-800">Add Doctor</span>
//                                         </button>
//                                         <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors duration-200 text-center">
//                                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
//                                                 <AppointmentsIcon />
//                                             </div>
//                                             <span className="text-sm font-medium text-gray-800">View Appointments</span>
//                                         </button>
//                                         <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors duration-200 text-center">
//                                             <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
//                                                 <ReportsIcon />
//                                             </div>
//                                             <span className="text-sm font-medium text-gray-800">Generate Report</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Patients Section */}
//                     {activeSection === 'patients' && (
//                         <div className="bg-white rounded-2xl shadow-sm p-6">
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-2xl font-bold text-gray-800">Patients Management</h2>
//                                 <button
//                                     onClick={fetchPatients}
//                                     disabled={dataLoading.patients}
//                                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
//                                 >
//                                     {dataLoading.patients ? 'Refreshing...' : 'Refresh'}
//                                 </button>
//                             </div>

//                             {dataLoading.patients ? (
//                                 <div className="flex justify-center py-8">
//                                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
//                                 </div>
//                             ) : (
//                                 <div className="overflow-x-auto">
//                                     <table className="w-full">
//                                         <thead>
//                                             <tr className="border-b border-gray-200">
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined Date</th>
//                                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {patients.map((patient) => (
//                                                 <tr key={patient._id} className="border-b border-gray-100 hover:bg-gray-50">
//                                                     <td className="py-3 px-4">
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
//                                                                 {patient.name.charAt(0)}
//                                                             </div>
//                                                             <span className="font-medium text-gray-800">{patient.name}</span>
//                                                         </div>
//                                                     </td>
//                                                     <td className="py-3 px-4 text-gray-600">{patient.email}</td>
//                                                     <td className="py-3 px-4">
//                                                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${patient.isGuest
//                                                                 ? 'bg-yellow-100 text-yellow-800'
//                                                                 : 'bg-green-100 text-green-800'
//                                                             }`}>
//                                                             {patient.isGuest ? 'Guest' : 'Registered'}
//                                                         </span>
//                                                     </td>
//                                                     <td className="py-3 px-4 text-gray-600">{formatDate(patient.createdAt)}</td>
//                                                     <td className="py-3 px-4">
//                                                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${patient.profileCompleted
//                                                                 ? 'bg-green-100 text-green-800'
//                                                                 : 'bg-gray-100 text-gray-800'
//                                                             }`}>
//                                                             {patient.profileCompleted ? 'Profile Complete' : 'Incomplete'}
//                                                         </span>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                     {patients.length === 0 && (
//                                         <div className="text-center py-8 text-gray-500">
//                                             No patients found.
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Doctors Section */}
//                     {activeSection === 'doctors' && (
//                         <div className="bg-white rounded-2xl shadow-sm p-6">
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-2xl font-bold text-gray-800">Doctors Management</h2>
//                                 <div className="flex space-x-3">
//                                     <button
//                                         onClick={fetchDoctors}
//                                         disabled={dataLoading.doctors}
//                                         className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
//                                     >
//                                         {dataLoading.doctors ? 'Refreshing...' : 'Refresh'}
//                                     </button>
//                                     <button
//                                         onClick={() => setShowAddDoctorModal(true)}
//                                         className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
//                                     >
//                                         Add Doctor
//                                     </button>
//                                 </div>
//                             </div>

//                             {dataLoading.doctors ? (
//                                 <div className="flex justify-center py-8">
//                                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
//                                 </div>
//                             ) : (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {doctors.map((doctor) => (
//                                         <div key={doctor._id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
//                                             <div className="flex items-center space-x-3 mb-3">
//                                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg">
//                                                     {doctor.name.charAt(0)}
//                                                 </div>
//                                                 <div>
//                                                     <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
//                                                     <p className="text-sm text-gray-600">{doctor.specialization}</p>
//                                                 </div>
//                                             </div>
//                                             <div className="space-y-2 text-sm">
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Email:</span>
//                                                     <span className="text-gray-800">{doctor.email}</span>
//                                                 </div>
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Hospital:</span>
//                                                     <span className="text-gray-800">{doctor.hospital}</span>
//                                                 </div>
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Experience:</span>
//                                                     <span className="text-gray-800">{doctor.experience} years</span>
//                                                 </div>
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Fee:</span>
//                                                     <span className="text-gray-800">${doctor.consultationFee}</span>
//                                                 </div>
//                                                 <div className="flex justify-between">
//                                                     <span className="text-gray-600">Status:</span>
//                                                     <span className={`px-2 py-1 rounded-full text-xs ${doctor.isVerified
//                                                             ? 'bg-green-100 text-green-800'
//                                                             : 'bg-yellow-100 text-yellow-800'
//                                                         }`}>
//                                                         {doctor.isVerified ? 'Verified' : 'Pending'}
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                     {doctors.length === 0 && (
//                                         <div className="col-span-full text-center py-8 text-gray-500">
//                                             No doctors found. Click "Add Doctor" to get started.
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Other sections */}
//                     {activeSection === 'appointments' && (
//                         <div className="bg-white rounded-2xl shadow-sm p-6">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
//                             <p className="text-gray-600">Appointments content goes here...</p>
//                         </div>
//                     )}

//                     {activeSection === 'reports' && (
//                         <div className="bg-white rounded-2xl shadow-sm p-6">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Analytics</h2>
//                             <p className="text-gray-600">Reports content goes here...</p>
//                         </div>
//                     )}

//                     {activeSection === 'settings' && (
//                         <div className="bg-white rounded-2xl shadow-sm p-6">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
//                             <p className="text-gray-600">Settings content goes here...</p>
//                         </div>
//                     )}
//                 </main>
//             </div>

//             {/* Add Doctor Modal - Keep the same modal code from previous version */}
//             {showAddDoctorModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//                     <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                         <div className="p-6 border-b border-gray-200">
//                             <div className="flex items-center justify-between">
//                                 <h2 className="text-2xl font-bold text-gray-800">Add New Doctor</h2>
//                                 <button
//                                     onClick={handleCloseModal}
//                                     className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                                 >
//                                     <span className="text-2xl">×</span>
//                                 </button>
//                             </div>
//                         </div>

//                         <form onSubmit={handleAddDoctor} className="p-6">
//                             {formError && (
//                                 <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//                                     {formError}
//                                 </div>
//                             )}

//                             {formSuccess && (
//                                 <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
//                                     {formSuccess}
//                                 </div>
//                             )}

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* Personal Information */}
//                                 <div className="space-y-4">
//                                     <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={doctorForm.name}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="Dr. John Doe"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={doctorForm.email}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="doctor@example.com"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
//                                         <input
//                                             type="password"
//                                             name="password"
//                                             value={doctorForm.password}
//                                             onChange={handleInputChange}
//                                             required
//                                             minLength="6"
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="Minimum 6 characters"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
//                                         <input
//                                             type="tel"
//                                             name="contactNumber"
//                                             value={doctorForm.contactNumber}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="+1234567890"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Professional Information */}
//                                 <div className="space-y-4">
//                                     <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Professional Information</h3>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Specialization *</label>
//                                         <input
//                                             type="text"
//                                             name="specialization"
//                                             value={doctorForm.specialization}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="Cardiology, Neurology, etc."
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">License Number *</label>
//                                         <input
//                                             type="text"
//                                             name="licenseNumber"
//                                             value={doctorForm.licenseNumber}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="MED123456"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Hospital *</label>
//                                         <input
//                                             type="text"
//                                             name="hospital"
//                                             value={doctorForm.hospital}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="Hospital Name"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years) *</label>
//                                         <input
//                                             type="number"
//                                             name="experience"
//                                             value={doctorForm.experience}
//                                             onChange={handleInputChange}
//                                             required
//                                             min="0"
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="5"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Qualifications */}
//                             <div className="mt-6">
//                                 <div className="flex items-center justify-between mb-4">
//                                     <h3 className="text-lg font-semibold text-gray-800">Qualifications *</h3>
//                                     <button
//                                         type="button"
//                                         onClick={addQualificationField}
//                                         className="text-sm text-green-600 hover:text-green-800 font-medium"
//                                     >
//                                         + Add Qualification
//                                     </button>
//                                 </div>
//                                 {doctorForm.qualifications.map((qual, index) => (
//                                     <div key={index} className="flex items-center space-x-2 mb-2">
//                                         <input
//                                             type="text"
//                                             value={qual}
//                                             onChange={(e) => handleQualificationChange(index, e.target.value)}
//                                             required={index === 0}
//                                             className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                             placeholder="MBBS, MD, PhD, etc."
//                                         />
//                                         {doctorForm.qualifications.length > 1 && (
//                                             <button
//                                                 type="button"
//                                                 onClick={() => removeQualificationField(index)}
//                                                 className="p-2 text-red-600 hover:text-red-800"
//                                             >
//                                                 ×
//                                             </button>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Additional Information */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Fee ($)</label>
//                                     <input
//                                         type="number"
//                                         name="consultationFee"
//                                         value={doctorForm.consultationFee}
//                                         onChange={handleInputChange}
//                                         min="0"
//                                         step="0.01"
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                         placeholder="100.00"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
//                                     <textarea
//                                         name="bio"
//                                         value={doctorForm.bio}
//                                         onChange={handleInputChange}
//                                         rows="3"
//                                         maxLength="500"
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                         placeholder="Brief description about the doctor..."
//                                     />
//                                     <p className="text-xs text-gray-500 mt-1">{doctorForm.bio.length}/500 characters</p>
//                                 </div>
//                             </div>

//                             {/* Address Information */}
//                             <div className="mt-6">
//                                 <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Address Information</h3>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <input
//                                         type="text"
//                                         name="street"
//                                         value={doctorForm.address.street}
//                                         onChange={handleAddressChange}
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                         placeholder="Street Address"
//                                     />
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         value={doctorForm.address.city}
//                                         onChange={handleAddressChange}
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                         placeholder="City"
//                                     />
//                                     <input
//                                         type="text"
//                                         name="state"
//                                         value={doctorForm.address.state}
//                                         onChange={handleAddressChange}
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                         placeholder="State"
//                                     />
//                                     <input
//                                         type="text"
//                                         name="zipCode"
//                                         value={doctorForm.address.zipCode}
//                                         onChange={handleAddressChange}
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                                         placeholder="ZIP Code"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Form Actions */}
//                             <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
//                                 <button
//                                     type="button"
//                                     onClick={handleCloseModal}
//                                     className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {loading ? 'Adding Doctor...' : 'Add Doctor'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// Icons
import {
    BarChart2,
    Users,
    UserCheck,
    Calendar,
    Settings,
    TrendingUp,
    LogOut,
    Bell,
    User,
    DollarSign
} from "lucide-react";

const DashboardIcon = () => <BarChart2 className="w-5 h-5" />;
const UsersIcon = () => <Users className="w-5 h-5" />;
const DoctorsIcon = () => <UserCheck className="w-5 h-5" />;
const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
const SettingsIcon = () => <Settings className="w-5 h-5" />;
const ReportsIcon = () => <TrendingUp className="w-5 h-5" />;
const LogoutIcon = () => <LogOut className="w-5 h-5" />;
const NotificationIcon = () => <Bell className="w-5 h-5" />;
const ProfileIcon = () => <User className="w-5 h-5" />;

const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

// Beautiful Loader Component
const BeautifulLoader = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4">
                {/* Animated Medical Icon */}
                <div className="relative">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                        <svg 
                            className="w-8 h-8 text-green-600 animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                            />
                        </svg>
                    </div>
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-ping"></div>
                </div>
                
                {/* Loading text */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Adding Doctor</h3>
                    <p className="text-gray-600 text-sm">Please wait while we create the doctor profile...</p>
                </div>
                
                {/* Progress animation */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full animate-pulse w-3/4"></div>
                </div>
                
                {/* Dots animation */}
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>
        </div>
    </div>
);

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('dashboard');
    const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    // State for real data
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [stats, setStats] = useState({
        totalPatients: 0,
        totalDoctors: 0,
        totalAppointments: 0,
        totalRevenue: 0
    });
    const [dataLoading, setDataLoading] = useState({
        patients: false,
        doctors: false
    });

    // Doctor form state
    const [doctorForm, setDoctorForm] = useState({
        name: '',
        email: '',
        password: '',
        specialization: '',
        specializations: [],
        degree: '',
        qualifications: [''],
        experience: '',
        licenseNumber: '',
        hospital: '',
        contactNumber: '',
        bio: '',
        consultationFee: '',
        languages: ['English'],
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: ''
        }
    });

    const [availableSpecializations, setAvailableSpecializations] = useState([]);

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
        { id: 'patients', label: 'Patients', icon: <UsersIcon /> },
        { id: 'doctors', label: 'Doctors', icon: <DoctorsIcon /> },
        { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon /> },
        { id: 'reports', label: 'Reports', icon: <ReportsIcon /> },
        { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    ];

    // Fetch available specializations
    useEffect(() => {
        const fetchSpecializations = async () => {
            try {
                const token = localStorage.getItem('saarthi_token');
                const response = await fetch(`${API_BASE_URL}/admin/specializations`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setAvailableSpecializations(data.data);
                }
            } catch (error) {
                console.error('Error fetching specializations:', error);
            }
        };
        
        fetchSpecializations();
    }, []);

    // Fetch patients data
    const fetchPatients = async () => {
        setDataLoading(prev => ({ ...prev, patients: true }));
        try {
            const token = localStorage.getItem('saarthi_token');
            const response = await fetch(`${API_BASE_URL}/auth/all`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (data.success) {
                const regularUsers = data.data.filter(user => user.role === 'user');
                setPatients(regularUsers);
            }
        } catch (error) {
            console.error('Error fetching patients:', error);
        } finally {
            setDataLoading(prev => ({ ...prev, patients: false }));
        }
    };

    // Fetch doctors data
    const fetchDoctors = async () => {
        setDataLoading(prev => ({ ...prev, doctors: true }));
        try {
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
                setStats(prev => ({
                    ...prev,
                    totalDoctors: data.data.length
                }));
            }
        } catch (error) {
            console.error('Error fetching doctors:', error);
        } finally {
            setDataLoading(prev => ({ ...prev, doctors: false }));
        }
    };

    // Update stats when data changes
    useEffect(() => {
        setStats(prev => ({
            ...prev,
            totalPatients: patients.length
        }));
    }, [patients]);

    // Fetch data when section changes
    useEffect(() => {
        if (activeSection === 'patients') {
            fetchPatients();
        } else if (activeSection === 'doctors') {
            fetchDoctors();
        } else if (activeSection === 'dashboard') {
            fetchPatients();
            fetchDoctors();
        }
    }, [activeSection]);

    // Mock data for recent activities
    const recentActivities = [
        { user: 'John Doe', action: 'Booked an appointment', time: '2 min ago' },
        { user: 'Dr. Sarah Smith', action: 'Joined the platform', time: '1 hour ago' },
        { user: 'Mike Johnson', action: 'Completed profile', time: '3 hours ago' },
        { user: 'Dr. Alex Brown', action: 'Updated availability', time: '5 hours ago' },
    ];

    // Handle doctor form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDoctorForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle address input changes
    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setDoctorForm(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }));
    };

    // Handle qualifications array
    const handleQualificationChange = (index, value) => {
        const updatedQualifications = [...doctorForm.qualifications];
        updatedQualifications[index] = value;
        setDoctorForm(prev => ({
            ...prev,
            qualifications: updatedQualifications
        }));
    };

    const addQualificationField = () => {
        setDoctorForm(prev => ({
            ...prev,
            qualifications: [...prev.qualifications, '']
        }));
    };

    const removeQualificationField = (index) => {
        if (doctorForm.qualifications.length > 1) {
            const updatedQualifications = doctorForm.qualifications.filter((_, i) => i !== index);
            setDoctorForm(prev => ({
                ...prev,
                qualifications: updatedQualifications
            }));
        }
    };

    // Handle language changes
    const handleLanguageChange = (index, value) => {
        const updatedLanguages = [...doctorForm.languages];
        updatedLanguages[index] = value;
        setDoctorForm(prev => ({
            ...prev,
            languages: updatedLanguages
        }));
    };

    const addLanguageField = () => {
        setDoctorForm(prev => ({
            ...prev,
            languages: [...prev.languages, '']
        }));
    };

    const removeLanguageField = (index) => {
        if (doctorForm.languages.length > 1) {
            const updatedLanguages = doctorForm.languages.filter((_, i) => i !== index);
            setDoctorForm(prev => ({
                ...prev,
                languages: updatedLanguages
            }));
        }
    };

    // Handle add doctor form submission
    const handleAddDoctor = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormError('');
        setFormSuccess('');

        try {
            const token = localStorage.getItem('saarthi_token');

            // Filter out empty qualifications and languages
            const filteredQualifications = doctorForm.qualifications.filter(qual => qual.trim() !== '');
            const filteredLanguages = doctorForm.languages.filter(lang => lang.trim() !== '');

            // Prepare data for backend
            const doctorData = {
                name: doctorForm.name,
                email: doctorForm.email,
                password: doctorForm.password,
                specialization: doctorForm.specialization,
                specializations: [doctorForm.specialization],
                degree: doctorForm.degree || 'MBBS, MD',
                qualifications: filteredQualifications,
                experience: doctorForm.experience.toString(),
                licenseNumber: doctorForm.licenseNumber,
                hospital: doctorForm.hospital,
                contactNumber: doctorForm.contactNumber,
                bio: doctorForm.bio || `Experienced ${doctorForm.specialization} specialist with ${doctorForm.experience} years of practice.`,
                consultationFee: parseFloat(doctorForm.consultationFee) || 0,
                languages: filteredLanguages.length > 0 ? filteredLanguages : ['English'],
                address: doctorForm.address
            };

            const response = await fetch(`${API_BASE_URL}/admin/doctors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(doctorData)
            });

            const data = await response.json();

            if (data.success) {
                setFormSuccess('Doctor added successfully!');
                // Refresh doctors list
                fetchDoctors();
                // Reset form
                setDoctorForm({
                    name: '',
                    email: '',
                    password: '',
                    specialization: '',
                    specializations: [],
                    degree: '',
                    qualifications: [''],
                    experience: '',
                    licenseNumber: '',
                    hospital: '',
                    contactNumber: '',
                    bio: '',
                    consultationFee: '',
                    languages: ['English'],
                    address: {
                        street: '',
                        city: '',
                        state: '',
                        zipCode: ''
                    }
                });
                // Close modal after 2 seconds
                setTimeout(() => {
                    setShowAddDoctorModal(false);
                    setFormSuccess('');
                }, 3000);
            } else {
                setFormError(data.message || 'Failed to add doctor');
            }
        } catch (error) {
            setFormError('Network error. Please try again.');
            console.error('Add doctor error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Reset form when modal closes
    const handleCloseModal = () => {
        if (!loading) {
            setShowAddDoctorModal(false);
            setFormError('');
            setFormSuccess('');
            setDoctorForm({
                name: '',
                email: '',
                password: '',
                specialization: '',
                specializations: [],
                degree: '',
                qualifications: [''],
                experience: '',
                licenseNumber: '',
                hospital: '',
                contactNumber: '',
                bio: '',
                consultationFee: '',
                languages: ['English'],
                address: {
                    street: '',
                    city: '',
                    state: '',
                    zipCode: ''
                }
            });
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
        <div className="flex h-screen bg-green-50">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-56' : 'w-16'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
                {/* Logo */}
                <div className="p-4 border-b border-green-700">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/saarthi.png"
                            alt="Saarthi Logo"
                            className="h-8 w-8 object-contain"
                        />
                        {sidebarOpen && (
                            <h1 className="text-xl font-bold text-white">Saarthi Admin</h1>
                        )}
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${activeSection === item.id
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
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <ProfileIcon />
                        </div>
                        {sidebarOpen && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">
                                    {user?.name || 'Admin User'}
                                </p>
                                <p className="text-xs text-green-200 truncate">
                                    {user?.email || 'admin@saarthi.com'}
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
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                                <span className="text-2xl">☰</span>
                            </button>
                            <h1 className="text-2xl font-bold text-gray-800 capitalize">
                                {activeSection}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                                <NotificationIcon />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                                {user?.name?.charAt(0) || 'A'}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-6 bg-green-50">
                    {activeSection === 'dashboard' && (
                        <div className="space-y-6">
                            {/* Welcome Section */}
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    Welcome back, {user?.name || 'Admin'}! 👋
                                </h2>
                                <p className="text-gray-600">
                                    Here's what's happening with your platform today.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Total Patients */}
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Total Patients</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalPatients}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                            <Users className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">+12%</span>
                                        <span className="text-sm text-gray-500 ml-1">from last week</span>
                                    </div>
                                </div>

                                {/* Total Doctors */}
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Total Doctors</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalDoctors}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                                            <UserCheck className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">+5%</span>
                                        <span className="text-sm text-gray-500 ml-1">from last week</span>
                                    </div>
                                </div>

                                {/* Appointments */}
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Appointments</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">456</p>
                                        </div>
                                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">+23%</span>
                                        <span className="text-sm text-gray-500 ml-1">from last week</span>
                                    </div>
                                </div>

                                {/* Revenue */}
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Revenue</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">${stats.totalRevenue}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">+18%</span>
                                        <span className="text-sm text-gray-500 ml-1">from last week</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activities & Quick Actions */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Recent Activities */}
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
                                    <div className="space-y-4">
                                        {recentActivities.map((activity, index) => (
                                            <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                    <span className="text-green-600">👤</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-800">{activity.user}</p>
                                                    <p className="text-sm text-gray-600">{activity.action}</p>
                                                </div>
                                                <span className="text-xs text-gray-500">{activity.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button 
                                            onClick={() => setActiveSection('patients')}
                                            className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-200 text-center"
                                        >
                                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                                                <UsersIcon />
                                            </div>
                                            <span className="text-sm font-medium text-gray-800">View Patients</span>
                                        </button>
                                        <button
                                            onClick={() => setShowAddDoctorModal(true)}
                                            className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 text-center"
                                        >
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                                                <DoctorsIcon />
                                            </div>
                                            <span className="text-sm font-medium text-gray-800">Add Doctor</span>
                                        </button>
                                        <button 
                                            onClick={() => setActiveSection('appointments')}
                                            className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors duration-200 text-center"
                                        >
                                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                                                <AppointmentsIcon />
                                            </div>
                                            <span className="text-sm font-medium text-gray-800">View Appointments</span>
                                        </button>
                                        <button 
                                            onClick={() => setActiveSection('reports')}
                                            className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors duration-200 text-center"
                                        >
                                            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                                                <ReportsIcon />
                                            </div>
                                            <span className="text-sm font-medium text-gray-800">Generate Report</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Patients Section */}
                    {activeSection === 'patients' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Patients Management</h2>
                                <button
                                    onClick={fetchPatients}
                                    disabled={dataLoading.patients}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
                                >
                                    {dataLoading.patients ? 'Refreshing...' : 'Refresh'}
                                </button>
                            </div>

                            {dataLoading.patients ? (
                                <div className="flex justify-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined Date</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patients.map((patient) => (
                                                <tr key={patient._id} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                                                                {patient.name?.charAt(0) || 'U'}
                                                            </div>
                                                            <span className="font-medium text-gray-800">{patient.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600">{patient.email}</td>
                                                    <td className="py-3 px-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${patient.isGuest
                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                : 'bg-green-100 text-green-800'
                                                            }`}>
                                                            {patient.isGuest ? 'Guest' : 'Registered'}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-gray-600">{formatDate(patient.createdAt)}</td>
                                                    <td className="py-3 px-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${patient.profileCompleted
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-gray-100 text-gray-800'
                                                            }`}>
                                                            {patient.profileCompleted ? 'Profile Complete' : 'Incomplete'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {patients.length === 0 && (
                                        <div className="text-center py-8 text-gray-500">
                                            No patients found.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Doctors Section */}
                    {activeSection === 'doctors' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Doctors Management</h2>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={fetchDoctors}
                                        disabled={dataLoading.doctors}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
                                    >
                                        {dataLoading.doctors ? 'Refreshing...' : 'Refresh'}
                                    </button>
                                    <button
                                        onClick={() => setShowAddDoctorModal(true)}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                                    >
                                        Add Doctor
                                    </button>
                                </div>
                            </div>

                            {dataLoading.doctors ? (
                                <div className="flex justify-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {doctors.map((doctor) => (
                                        <div key={doctor._id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg">
                                                    {doctor.name?.charAt(0) || 'D'}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                                                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Email:</span>
                                                    <span className="text-gray-800">{doctor.email}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Hospital:</span>
                                                    <span className="text-gray-800">{doctor.hospital}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Experience:</span>
                                                    <span className="text-gray-800">{doctor.experience} years</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Fee:</span>
                                                    <span className="text-gray-800">${doctor.consultationFee}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Status:</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs ${doctor.isVerified
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {doctor.isVerified ? 'Verified' : 'Pending'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {doctors.length === 0 && (
                                        <div className="col-span-full text-center py-8 text-gray-500">
                                            No doctors found. Click "Add Doctor" to get started.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Other sections */}
                    {activeSection === 'appointments' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
                            <p className="text-gray-600">Appointments content goes here...</p>
                        </div>
                    )}

                    {activeSection === 'reports' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Analytics</h2>
                            <p className="text-gray-600">Reports content goes here...</p>
                        </div>
                    )}

                    {activeSection === 'settings' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                            <p className="text-gray-600">Settings content goes here...</p>
                        </div>
                    )}
                </main>
            </div>

            {/* Add Doctor Modal */}
            {showAddDoctorModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-800">Add New Doctor</h2>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    disabled={loading}
                                >
                                    <span className="text-2xl">×</span>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleAddDoctor} className="p-6">
                            {formError && (
                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                                    {formError}
                                </div>
                            )}

                            {formSuccess && (
                                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                                    {formSuccess}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={doctorForm.name}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="Dr. John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={doctorForm.email}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="doctor@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={doctorForm.password}
                                            onChange={handleInputChange}
                                            required
                                            minLength="6"
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="Minimum 6 characters"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                                        <input
                                            type="tel"
                                            name="contactNumber"
                                            value={doctorForm.contactNumber}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="+1234567890"
                                        />
                                    </div>
                                </div>

                                {/* Professional Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Professional Information</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Specialization *</label>
                                        <select
                                            name="specialization"
                                            value={doctorForm.specialization}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        >
                                            <option value="">Select Specialization</option>
                                            {availableSpecializations.map((spec) => (
                                                <option key={spec} value={spec}>{spec}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
                                        <input
                                            type="text"
                                            name="degree"
                                            value={doctorForm.degree}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="MBBS, MD, etc."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">License Number *</label>
                                        <input
                                            type="text"
                                            name="licenseNumber"
                                            value={doctorForm.licenseNumber}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="MED123456"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Hospital *</label>
                                        <input
                                            type="text"
                                            name="hospital"
                                            value={doctorForm.hospital}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="Hospital Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years) *</label>
                                        <input
                                            type="number"
                                            name="experience"
                                            value={doctorForm.experience}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                            disabled={loading}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="5"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Qualifications *</h3>
                                    <button
                                        type="button"
                                        onClick={addQualificationField}
                                        disabled={loading}
                                        className="text-sm text-green-600 hover:text-green-800 font-medium disabled:opacity-50"
                                    >
                                        + Add Qualification
                                    </button>
                                </div>
                                {doctorForm.qualifications.map((qual, index) => (
                                    <div key={index} className="flex items-center space-x-2 mb-2">
                                        <input
                                            type="text"
                                            value={qual}
                                            onChange={(e) => handleQualificationChange(index, e.target.value)}
                                            required={index === 0}
                                            disabled={loading}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="MBBS, MD, PhD, etc."
                                        />
                                        {doctorForm.qualifications.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeQualificationField(index)}
                                                disabled={loading}
                                                className="p-2 text-red-600 hover:text-red-800 disabled:opacity-50"
                                            >
                                                ×
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Languages */}
                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
                                    <button
                                        type="button"
                                        onClick={addLanguageField}
                                        disabled={loading}
                                        className="text-sm text-green-600 hover:text-green-800 font-medium disabled:opacity-50"
                                    >
                                        + Add Language
                                    </button>
                                </div>
                                {doctorForm.languages.map((lang, index) => (
                                    <div key={index} className="flex items-center space-x-2 mb-2">
                                        <input
                                            type="text"
                                            value={lang}
                                            onChange={(e) => handleLanguageChange(index, e.target.value)}
                                            disabled={loading}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                            placeholder="English, Hindi, etc."
                                        />
                                        {doctorForm.languages.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeLanguageField(index)}
                                                disabled={loading}
                                                className="p-2 text-red-600 hover:text-red-800 disabled:opacity-50"
                                            >
                                                ×
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Additional Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Fee ($)</label>
                                    <input
                                        type="number"
                                        name="consultationFee"
                                        value={doctorForm.consultationFee}
                                        onChange={handleInputChange}
                                        min="0"
                                        step="0.01"
                                        disabled={loading}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        placeholder="100.00"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                    <textarea
                                        name="bio"
                                        value={doctorForm.bio}
                                        onChange={handleInputChange}
                                        rows="3"
                                        maxLength="500"
                                        disabled={loading}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        placeholder="Brief description about the doctor..."
                                    />
                                    <p className="text-xs text-gray-500 mt-1">{doctorForm.bio.length}/500 characters</p>
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Address Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="street"
                                        value={doctorForm.address.street}
                                        onChange={handleAddressChange}
                                        disabled={loading}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        placeholder="Street Address"
                                    />
                                    <input
                                        type="text"
                                        name="city"
                                        value={doctorForm.address.city}
                                        onChange={handleAddressChange}
                                        disabled={loading}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        placeholder="City"
                                    />
                                    <input
                                        type="text"
                                        name="state"
                                        value={doctorForm.address.state}
                                        onChange={handleAddressChange}
                                        disabled={loading}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        placeholder="State"
                                    />
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={doctorForm.address.zipCode}
                                        onChange={handleAddressChange}
                                        disabled={loading}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50"
                                        placeholder="ZIP Code"
                                    />
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    disabled={loading}
                                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Adding Doctor...</span>
                                        </>
                                    ) : (
                                        <span>Add Doctor</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Show beautiful loader when loading */}
            {loading && <BeautifulLoader />}
        </div>
    );
};

export default AdminDashboard;