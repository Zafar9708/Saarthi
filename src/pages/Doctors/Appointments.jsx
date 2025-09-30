

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  ClipboardList, 
  Bell, 
  User, 
  Search, 
  LogOut, 
  Plus,         // ➕ Add
  LayoutGrid,   // 🟰 Card View
  Table2        // 📊 Table View
} from "lucide-react";

// Icons
const HomeIcon = () => <Home className="w-5 h-5" />;
const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
const PatientRecordsIcon = () => <ClipboardList className="w-5 h-5" />;
const LogoutIcon = () => <LogOut className="w-5 h-5" />;
const NotificationIcon = () => <Bell className="w-5 h-5" />;
const ProfileIcon = () => <User className="w-5 h-5" />;
const SearchIcon = () => <Search className="w-5 h-5" />;
const AddIcon = () => <Plus className="w-5 h-5" />;
const CardViewIcon = () => <LayoutGrid className="w-5 h-5" />;
const TableViewIcon = () => <Table2 className="w-5 h-5" />;

const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

const Appointments = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'
    const [loading, setLoading] = useState(false);
    
    // State for appointments data
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    const menuItems = [
        { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/doctor/dashboard' },
        { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon />, path: '/doctor/appointments' },
        { id: 'patient-records', label: 'Patient Records', icon: <PatientRecordsIcon />, path: '/doctor/patient-records' },
    ];

    // Mock data for all appointments
    const mockAppointments = [
        {
            id: 1,
            patientName: 'John Doe',
            age: 45,
            dob: '1978-05-15',
            phone: '+1234567890',
            status: 'Confirmed',
            scheduledAt: '2024-01-20T09:00:00',
            diagnosis: 'Hypertension Management',
            type: 'Consultation'
        },
        {
            id: 2,
            patientName: 'Sarah Smith',
            age: 32,
            dob: '1991-08-22',
            phone: '+1234567891',
            status: 'Completed',
            scheduledAt: '2024-01-20T10:30:00',
            diagnosis: 'Diabetes Checkup',
            type: 'Follow-up'
        },
        {
            id: 3,
            patientName: 'Mike Johnson',
            age: 58,
            dob: '1965-12-10',
            phone: '+1234567892',
            status: 'Pending',
            scheduledAt: '2024-01-20T14:00:00',
            diagnosis: 'Arthritis Review',
            type: 'Check-up'
        },
        {
            id: 4,
            patientName: 'Emily Brown',
            age: 29,
            dob: '1994-03-25',
            phone: '+1234567893',
            status: 'Confirmed',
            scheduledAt: '2024-01-21T11:15:00',
            diagnosis: 'Migraine Treatment',
            type: 'Consultation'
        },
        {
            id: 5,
            patientName: 'Robert Wilson',
            age: 67,
            dob: '1956-11-30',
            phone: '+1234567894',
            status: 'Cancelled',
            scheduledAt: '2024-01-21T15:45:00',
            diagnosis: 'Heart Disease',
            type: 'Consultation'
        },
        {
            id: 6,
            patientName: 'Lisa Anderson',
            age: 41,
            dob: '1982-07-18',
            phone: '+1234567895',
            status: 'Confirmed',
            scheduledAt: '2024-01-22T08:30:00',
            diagnosis: 'Thyroid Issues',
            type: 'Follow-up'
        }
    ];

    // Load initial data
    useEffect(() => {
        setAppointments(mockAppointments);
        setFilteredAppointments(mockAppointments);
    }, []);

    // Handle search
    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setFilteredAppointments(appointments);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = appointments.filter(appointment =>
            appointment.patientName.toLowerCase().includes(query) ||
            appointment.diagnosis.toLowerCase().includes(query) ||
            appointment.phone.includes(query)
        );
        setFilteredAppointments(filtered);
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
        setFilteredAppointments(appointments);
    };

    // Add new appointment
    const handleAddAppointment = () => {
        alert('Add new appointment functionality would open a form here');
    };

    // Navigate to different pages
    const handleNavigate = (path) => {
        navigate(path);
    };

    // Get status color and text
    const getStatusInfo = (status) => {
        switch (status.toLowerCase()) {
            case 'confirmed':
                return { color: 'bg-green-100 text-green-800', text: 'Confirmed' };
            case 'completed':
                return { color: 'bg-blue-100 text-blue-800', text: 'Completed' };
            case 'pending':
                return { color: 'bg-yellow-100 text-yellow-800', text: 'Pending' };
            case 'cancelled':
                return { color: 'bg-red-100 text-red-800', text: 'Cancelled' };
            default:
                return { color: 'bg-gray-100 text-gray-800', text: status };
        }
    };

    // Format date and time
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return {
            date: date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            }),
            time: date.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            })
        };
    };

    // Format DOB
    const formatDOB = (dobString) => {
        return new Date(dobString).toLocaleDateString('en-US', { 
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
                            onClick={() => handleNavigate(item.path)}
                            className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                                location.pathname === item.path
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
                            <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
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
                    <div className="space-y-6">
                        {/* Header with Search and Actions */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">All Appointments</h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Manage and view all patient appointments
                                    </p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                                    {/* Search Bar */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search appointments..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
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

                                    {/* View Mode Toggle */}
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => setViewMode('card')}
                                            className={`p-2 rounded-lg transition-colors duration-200 ${
                                                viewMode === 'card' 
                                                    ? 'bg-blue-600 text-white' 
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                            title="Card View"
                                        >
                                            <CardViewIcon />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('table')}
                                            className={`p-2 rounded-lg transition-colors duration-200 ${
                                                viewMode === 'table' 
                                                    ? 'bg-blue-600 text-white' 
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                            title="Table View"
                                        >
                                            <TableViewIcon />
                                        </button>
                                    </div>

                                    {/* Add Appointment Button */}
                                    <button
                                        onClick={handleAddAppointment}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                                    >
                                        <AddIcon />
                                        <span>Add New</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Appointments Count */}
                        <div className="bg-blue-50 rounded-xl p-4">
                            <p className="text-blue-800 font-medium">
                                Showing {filteredAppointments.length} appointment{filteredAppointments.length !== 1 ? 's' : ''}
                            </p>
                        </div>

                        {/* Card View */}
                        {viewMode === 'card' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                                {filteredAppointments.map((appointment) => {
                                    const statusInfo = getStatusInfo(appointment.status);
                                    const scheduled = formatDateTime(appointment.scheduledAt);
                                    
                                    return (
                                        <div key={appointment.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                            {/* Patient Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-lg">
                                                        {appointment.patientName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-800 text-lg">{appointment.patientName}</h3>
                                                        <p className="text-sm text-gray-600">{appointment.phone}</p>
                                                    </div>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                                                    {statusInfo.text}
                                                </span>
                                            </div>

                                            {/* Patient Details */}
                                            <div className="space-y-3 mb-4">
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Age:</span>
                                                    <span className="font-medium text-gray-800">{appointment.age} years</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">DOB:</span>
                                                    <span className="font-medium text-gray-800">{formatDOB(appointment.dob)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Diagnosis:</span>
                                                    <span className="font-medium text-gray-800 text-right max-w-[120px] truncate" title={appointment.diagnosis}>
                                                        {appointment.diagnosis}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Type:</span>
                                                    <span className="font-medium text-gray-800">{appointment.type}</span>
                                                </div>
                                            </div>

                                            {/* Scheduled Time */}
                                            <div className="border-t border-gray-200 pt-4">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Scheduled at</p>
                                                        <p className="font-semibold text-gray-800">{scheduled.date}</p>
                                                        <p className="text-sm text-gray-600">{scheduled.time}</p>
                                                    </div>
                                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Table View */}
                        {viewMode === 'table' && (
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Patient Name</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Age</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">DOB</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Scheduled At</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredAppointments.map((appointment) => {
                                                const statusInfo = getStatusInfo(appointment.status);
                                                const scheduled = formatDateTime(appointment.scheduledAt);
                                                
                                                return (
                                                    <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                                                        <td className="py-3 px-4">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                                                                    {appointment.patientName.charAt(0)}
                                                                </div>
                                                                <span className="font-medium text-gray-800">{appointment.patientName}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4 text-gray-600">{appointment.age}</td>
                                                        <td className="py-3 px-4 text-gray-600">{formatDOB(appointment.dob)}</td>
                                                        <td className="py-3 px-4 text-gray-600">{appointment.phone}</td>
                                                        <td className="py-3 px-4">
                                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                                                                {statusInfo.text}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <div>
                                                                <p className="font-medium text-gray-800">{scheduled.date}</p>
                                                                <p className="text-sm text-gray-600">{scheduled.time}</p>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                                                                View
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {filteredAppointments.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        {searchQuery ? 'No appointments found matching your search.' : 'No appointments available.'}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Appointments;