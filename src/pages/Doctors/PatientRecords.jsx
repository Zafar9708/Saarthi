import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  ClipboardList, 
  LogOut, 
  Bell, 
  User, 
  Search, 
  Plus, 
  LayoutGrid, 
  Table2 
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

const PatientRecordsPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'
    const [loading, setLoading] = useState(false);
    
    // State for patient records data
    const [patientRecords, setPatientRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    const menuItems = [
        { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/doctor/dashboard' },
        { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon />, path: '/doctor/appointments' },
        { id: 'patient-records', label: 'Patient Records', icon: <PatientRecordsIcon />, path: '/doctor/patient-records' },
    ];

    // Mock data for patient records
    const mockPatientRecords = [
        {
            id: 1,
            patientId: 'P001',
            name: 'John Doe',
            age: 45,
            dob: '1978-05-15',
            phone: '+1234567890',
            noOfConsults: 12,
            lastVisit: '2024-01-15',
            condition: 'Hypertension',
            status: 'Active',
            email: 'john.doe@email.com',
            address: '123 Main St, City, State'
        },
        {
            id: 2,
            patientId: 'P002',
            name: 'Sarah Smith',
            age: 32,
            dob: '1991-08-22',
            phone: '+1234567891',
            noOfConsults: 8,
            lastVisit: '2024-01-14',
            condition: 'Diabetes',
            status: 'Active',
            email: 'sarah.smith@email.com',
            address: '456 Oak Ave, City, State'
        },
        {
            id: 3,
            patientId: 'P003',
            name: 'Mike Johnson',
            age: 58,
            dob: '1965-12-10',
            phone: '+1234567892',
            noOfConsults: 15,
            lastVisit: '2024-01-13',
            condition: 'Arthritis',
            status: 'Active',
            email: 'mike.johnson@email.com',
            address: '789 Pine Rd, City, State'
        },
        {
            id: 4,
            patientId: 'P004',
            name: 'Emily Brown',
            age: 29,
            dob: '1994-03-25',
            phone: '+1234567893',
            noOfConsults: 5,
            lastVisit: '2024-01-12',
            condition: 'Migraine',
            status: 'Inactive',
            email: 'emily.brown@email.com',
            address: '321 Elm St, City, State'
        },
        {
            id: 5,
            patientId: 'P005',
            name: 'Robert Wilson',
            age: 67,
            dob: '1956-11-30',
            phone: '+1234567894',
            noOfConsults: 22,
            lastVisit: '2024-01-11',
            condition: 'Heart Disease',
            status: 'Active',
            email: 'robert.wilson@email.com',
            address: '654 Maple Dr, City, State'
        },
        {
            id: 6,
            patientId: 'P006',
            name: 'Lisa Anderson',
            age: 41,
            dob: '1982-07-18',
            phone: '+1234567895',
            noOfConsults: 7,
            lastVisit: '2024-01-10',
            condition: 'Thyroid Issues',
            status: 'Active',
            email: 'lisa.anderson@email.com',
            address: '987 Birch Ln, City, State'
        }
    ];

    // Load initial data
    useEffect(() => {
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
            record.phone.includes(query) ||
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

    // Navigate to different pages
    const handleNavigate = (path) => {
        navigate(path);
    };

    // Navigate to patient details page
    const handleViewPatientDetails = (patientId) => {
        navigate(`/patient/patient-details/${patientId}`);
    };

    // Get status color and text
    const getStatusInfo = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
                return { color: 'bg-green-100 text-green-800', text: 'Active' };
            case 'inactive':
                return { color: 'bg-gray-100 text-gray-800', text: 'Inactive' };
            case 'recovered':
                return { color: 'bg-blue-100 text-blue-800', text: 'Recovered' };
            default:
                return { color: 'bg-gray-100 text-gray-800', text: status };
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
                            <h1 className="text-2xl font-bold text-gray-800">Patient Records</h1>
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
                                    <h2 className="text-xl font-bold text-gray-800">All Patient Records</h2>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Manage and view all patient medical records
                                    </p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                                    {/* Search Bar */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search patient records..."
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

                                    {/* Add Patient Record Button */}
                                    <button
                                        onClick={handleAddPatientRecord}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                                    >
                                        <AddIcon />
                                        <span>Add New</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Patient Records Count */}
                        <div className="bg-blue-50 rounded-xl p-4">
                            <p className="text-blue-800 font-medium">
                                Showing {filteredRecords.length} patient{filteredRecords.length !== 1 ? 's' : ''}
                            </p>
                        </div>

                        {/* Card View */}
                        {viewMode === 'card' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                                {filteredRecords.map((patient) => {
                                    const statusInfo = getStatusInfo(patient.status);
                                    
                                    return (
                                        <div 
                                            key={patient.id} 
                                            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                            onClick={() => handleViewPatientDetails(patient.patientId)}
                                        >
                                            {/* Patient Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-lg">
                                                        {patient.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-800 text-lg">{patient.name}</h3>
                                                        {/* <p className="text-sm text-gray-600">ID: {patient.patientId}</p> */}
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
                                                    <span className="font-medium text-gray-800">{patient.age} years</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">DOB:</span>
                                                    <span className="font-medium text-gray-800">{formatDOB(patient.dob)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Phone:</span>
                                                    <span className="font-medium text-gray-800">{patient.phone}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">No. of Consults:</span>
                                                    <span className="font-medium text-gray-800">{patient.noOfConsults}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-gray-600">Condition:</span>
                                                    <span className="font-medium text-gray-800 text-right max-w-[120px] truncate" title={patient.condition}>
                                                        {patient.condition}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Last Visit and Action */}
                                            <div className="border-t border-gray-200 pt-4">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Last visit</p>
                                                        <p className="font-semibold text-gray-800">{formatDate(patient.lastVisit)}</p>
                                                    </div>
                                                    <button 
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleViewPatientDetails(patient.patientId);
                                                        }}
                                                    >
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
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">No. of Consults</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredRecords.map((patient) => {
                                                const statusInfo = getStatusInfo(patient.status);
                                                
                                                return (
                                                    <tr 
                                                        key={patient.id} 
                                                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                                        onClick={() => handleViewPatientDetails(patient.patientId)}
                                                    >
                                                        <td className="py-3 px-4">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                                                                    {patient.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-gray-800">{patient.name}</p>
                                                                    {/* <p className="text-sm text-gray-600">ID: {patient.patientId}</p> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4 text-gray-600">{patient.age}</td>
                                                        <td className="py-3 px-4 text-gray-600">{formatDOB(patient.dob)}</td>
                                                        <td className="py-3 px-4 text-gray-600">{patient.phone}</td>
                                                        <td className="py-3 px-4 text-gray-600">
                                                            <span className="font-medium">{patient.noOfConsults}</span>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                                                                {statusInfo.text}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <button 
                                                                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleViewPatientDetails(patient.patientId);
                                                                }}
                                                            >
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {filteredRecords.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        {searchQuery ? 'No patient records found matching your search.' : 'No patient records available.'}
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

export default PatientRecordsPage;