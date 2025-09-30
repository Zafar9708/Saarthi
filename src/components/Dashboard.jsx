// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';

// const Dashboard = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Check if user is logged in
//         const userData = localStorage.getItem('saarthi_user');
//         const token = localStorage.getItem('saarthi_token');

//         if (!userData || !token) {
//             navigate('/signin');
//             return;
//         }

//         try {
//             const userObj = JSON.parse(userData);
//             setUser(userObj);
//         } catch (error) {
//             console.error('Error parsing user data:', error);
//             navigate('/signin');
//         } finally {
//             setLoading(false);
//         }
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('saarthi_token');
//         localStorage.removeItem('saarthi_user');
//         navigate('/signin');
//     };

//     const handleBookAppointment = () => {
//         navigate('/doctors-list');
//     };

//     const handleDiagnosticsReports = () => {
//         navigate('/diagnostics');
//     };

//     const handlePrepareVisit = () => {
//         navigate('/prepare-visit');
//     };

//     const handleTrackActivities = () => {
//         navigate('/activities');
//     };

//     if (loading) {
//         return (
//             <div className="min-h-screen bg-green-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900 mx-auto"></div>
//                     <p className="mt-4 text-green-900">Loading dashboard...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-green-50">
//             {/* Header */}
//             <header className="bg-white shadow-sm border-b border-green-200">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="flex items-center">
//                             <img
//                                 src="/saarthi.png"
//                                 alt="Saarthi Logo"
//                                 className="h-8 w-8 mr-3"
//                             />
//                             <h1 className="text-xl font-bold text-green-900">Saarthi</h1>
//                         </div>
                        
//                         <div className="flex items-center space-x-4">
//                             <span className="text-green-800">
//                                 Welcome, {user?.name || 'User'}
//                             </span>
//                             <button
//                                 onClick={handleLogout}
//                                 className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Welcome Section */}
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold text-green-900 mb-4">
//                         Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋
//                     </h1>
//                     <p className="text-lg text-green-700 max-w-2xl mx-auto">
//                         Manage your healthcare journey efficiently. Book appointments, track reports, 
//                         and stay prepared for your medical visits.
//                     </p>
//                 </div>

//                 {/* Dashboard Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Left Column */}
//                     <div className="space-y-8">
//                         {/* Book Appointment Card */}
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-green-200">
//                             <div className="flex items-start justify-between mb-6">
//                                 <div>
//                                     <h2 className="text-2xl font-bold text-green-900 mb-2">
//                                         Book Appointment
//                                     </h2>
//                                     <p className="text-green-700">
//                                         Schedule your next doctor's appointment with ease
//                                     </p>
//                                 </div>
//                                 <div className="bg-green-100 p-3 rounded-full">
//                                     <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={handleBookAppointment}
//                                 className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
//                             >
//                                 Book Now
//                                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Understand Diagnostics Reports Card */}
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-green-200">
//                             <div className="flex items-start justify-between mb-6">
//                                 <div>
//                                     <h2 className="text-2xl font-bold text-green-900 mb-2">
//                                         Understand Diagnostics Reports
//                                     </h2>
//                                     <p className="text-green-700">
//                                         Get insights into your lab reports and medical tests
//                                     </p>
//                                 </div>
//                                 <div className="bg-green-100 p-3 rounded-full">
//                                     <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={handleDiagnosticsReports}
//                                 className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
//                             >
//                                 View Reports
//                                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Column */}
//                     <div className="space-y-8">
//                         {/* Prepare for a Visit Card */}
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-green-200">
//                             <div className="flex items-start justify-between mb-6">
//                                 <div>
//                                     <h2 className="text-2xl font-bold text-green-900 mb-2">
//                                         Prepare for a Visit
//                                     </h2>
//                                     <p className="text-green-700">
//                                         Everything you need to know before your doctor's appointment
//                                     </p>
//                                 </div>
//                                 <div className="bg-green-100 p-3 rounded-full">
//                                     <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className="space-y-4 mb-6">
//                                 <div className="flex items-center text-green-800">
//                                     <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                     Medical history checklist
//                                 </div>
//                                 <div className="flex items-center text-green-800">
//                                     <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                     Questions to ask your doctor
//                                 </div>
//                                 <div className="flex items-center text-green-800">
//                                     <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                     Medication list preparation
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={handlePrepareVisit}
//                                 className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
//                             >
//                                 Prepare Now
//                                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Track Daily Activities Card */}
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-green-200">
//                             <div className="flex items-start justify-between mb-6">
//                                 <div>
//                                     <h2 className="text-2xl font-bold text-green-900 mb-2">
//                                         Track Daily Activities
//                                     </h2>
//                                     <p className="text-green-700">
//                                         Monitor your health metrics and daily wellness activities
//                                     </p>
//                                 </div>
//                                 <div className="bg-green-100 p-3 rounded-full">
//                                     <svg className="w-8 h-8 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-2 gap-4 mb-6">
//                                 <div className="text-center p-3 bg-green-50 rounded-lg">
//                                     <div className="text-2xl font-bold text-green-900">7,500</div>
//                                     <div className="text-sm text-green-700">Steps Today</div>
//                                 </div>
//                                 <div className="text-center p-3 bg-green-50 rounded-lg">
//                                     <div className="text-2xl font-bold text-green-900">8</div>
//                                     <div className="text-sm text-green-700">Glasses Water</div>
//                                 </div>
//                                 <div className="text-center p-3 bg-green-50 rounded-lg">
//                                     <div className="text-2xl font-bold text-green-900">7h 30m</div>
//                                     <div className="text-sm text-green-700">Sleep</div>
//                                 </div>
//                                 <div className="text-center p-3 bg-green-50 rounded-lg">
//                                     <div className="text-2xl font-bold text-green-900">3/5</div>
//                                     <div className="text-sm text-green-700">Medications</div>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={handleTrackActivities}
//                                 className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
//                             >
//                                 Track Activities
//                                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Quick Stats Section */}
//                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="bg-white rounded-xl p-6 shadow-md border border-green-200">
//                         <div className="flex items-center">
//                             <div className="bg-green-100 p-3 rounded-lg mr-4">
//                                 <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-green-600">Upcoming Appointments</p>
//                                 <p className="text-2xl font-bold text-green-900">2</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl p-6 shadow-md border border-green-200">
//                         <div className="flex items-center">
//                             <div className="bg-green-100 p-3 rounded-lg mr-4">
//                                 <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-green-600">Pending Reports</p>
//                                 <p className="text-2xl font-bold text-green-900">3</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl p-6 shadow-md border border-green-200">
//                         <div className="flex items-center">
//                             <div className="bg-green-100 p-3 rounded-lg mr-4">
//                                 <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-green-600">Health Score</p>
//                                 <p className="text-2xl font-bold text-green-900">85%</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* Footer */}
//             {/* <footer className="bg-white border-t border-green-200 mt-12">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                     <div className="text-center text-green-700">
//                         <p>&copy; 2024 Saarthi. Taking care of your health journey.</p>
//                     </div>
//                 </div>
//             </footer> */}
//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Calendar, 
    FileText, 
    Activity, 
    Stethoscope, 
    LogOut, 
    User,
    Bell,
    ChevronRight,
    Plus,
    CheckCircle,
    Upload,
    BarChart3,
    Clock,
    ArrowRight,
    Download,
    Pill,
    Droplets,
    Moon,
    Footprints,
    Home,
    Heart,
    ClipboardList,
    Settings
} from 'lucide-react';
import Footer from './Footer';

// Icon Components
const DashboardIcon = () => <Home className="w-5 h-5" />;
const AppointmentsIcon = () => <Calendar className="w-5 h-5" />;
const HealthIcon = () => <Heart className="w-5 h-5" />;
const ReportsIcon = () => <ClipboardList className="w-5 h-5" />;
const SettingsIcon = () => <Settings className="w-5 h-5" />;
const LogoutIcon = () => <LogOut className="w-5 h-5" />;
const NotificationIcon = () => <Bell className="w-5 h-5" />;
const ProfileIcon = () => <User className="w-5 h-5" />;

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('dashboard');
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('saarthi_user');
        const token = localStorage.getItem('saarthi_token');

        if (!userData || !token) {
            navigate('/signin');
            return;
        }

        try {
            const userObj = JSON.parse(userData);
            setUser(userObj);
        } catch (error) {
            console.error('Error parsing user data:', error);
            navigate('/signin');
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('saarthi_token');
        localStorage.removeItem('saarthi_user');
        navigate('/signin');
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
        { id: 'appointments', label: 'Appointments', icon: <AppointmentsIcon /> },
        { id: 'health', label: 'Health', icon: <HealthIcon /> },
        { id: 'reports', label: 'Reports', icon: <ReportsIcon /> },
        { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    ];

    const handleBookAppointment = () => {
        navigate('/doctors');
    };

    const handleDiagnosticsReports = () => {
        navigate('/diagnostics');
    };

    const handlePrepareVisit = () => {
        navigate('/prepare-visit');
    };

    const handleTrackActivities = () => {
        navigate('/activities');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600 mx-auto"></div>
                    <p className="mt-4 text-green-800 text-lg font-medium">Loading your dashboard...</p>
                </div>
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
                            onClick={() => setActiveSection(item.id)}
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
                                    {user?.name || 'Patient'}
                                </p>
                                <p className="text-xs text-green-200 truncate">
                                    {user?.email || 'patient@saarthi.com'}
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
                            <h1 className="text-2xl font-bold text-gray-800 capitalize">
                                {activeSection === 'dashboard' ? 'Dashboard' : activeSection}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                                <NotificationIcon />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="hidden md:flex items-center space-x-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-800">Welcome, {user?.name?.split(' ')[0]}</p>
                                    <p className="text-xs text-gray-600">Patient</p>
                                </div>
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                                    {user?.name?.charAt(0) || 'P'}
                                </div>
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
                                    Welcome back, {user?.name?.split(' ')[0] || 'Patient'}! 👋
                                </h2>
                                <p className="text-gray-600">
                                    Ready to take charge of your health journey? Here's your healthcare overview.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Upcoming Appointments</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
                                        </div>
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">+1 this week</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Medical Reports</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
                                        </div>
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">2 new</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Health Score</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">85%</p>
                                        </div>
                                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">+5% this month</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Activities</p>
                                            <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
                                        </div>
                                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                                            <BarChart3 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-sm text-green-600 font-medium">All caught up</span>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Dashboard Grid */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                {/* Left Column - Main Actions */}
                                <div className="space-y-6">
                                    {/* Book Appointment Card */}
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-200 group">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-green-100 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                                        <Calendar className="w-8 h-8 text-green-900" />
                                                    </div>
                                                    <h2 className="text-xl font-bold text-gray-800">Book Appointment</h2>
                                                </div>
                                                <p className="text-gray-600 mb-4">
                                                    Schedule your next doctor's appointment with our verified healthcare professionals
                                                </p>
                                                <button
                                                    onClick={handleBookAppointment}
                                                    className="w-full bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                                                >
                                                    <span>Find Doctors & Book Now</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Prepare for a Visit Card */}
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-200 group">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-green-100 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                                        <Plus className="w-8 h-8 text-green-900" />
                                                    </div>
                                                    <h2 className="text-xl font-bold text-gray-800">Prepare for a Visit</h2>
                                                </div>
                                                <div className="space-y-3 mb-4">
                                                    {[
                                                        'Medical history checklist',
                                                        'Questions to ask your doctor', 
                                                        'Medication list preparation',
                                                        'Insurance documents'
                                                    ].map((item, index) => (
                                                        <div key={index} className="flex items-center text-gray-700">
                                                            <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={handlePrepareVisit}
                                                    className="w-full bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                                                >
                                                    <span>Get Prepared</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    {/* Diagnostics Reports Card */}
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-200 group">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-green-100 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                                        <FileText className="w-8 h-8 text-green-900" />
                                                    </div>
                                                    <h2 className="text-xl font-bold text-gray-800">Diagnostics Reports</h2>
                                                </div>
                                                <p className="text-gray-600 mb-4">
                                                    Upload and understand your medical reports with AI-powered insights
                                                </p>
                                                <button
                                                    onClick={handleDiagnosticsReports}
                                                    className="w-full bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                                                >
                                                    <Upload className="w-5 h-5" />
                                                    <span>Upload & Analyze Reports</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Health Tracking Card */}
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-200 group">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-green-100 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                                        <Activity className="w-8 h-8 text-green-900" />
                                                    </div>
                                                    <h2 className="text-xl font-bold text-gray-800">Health Tracking</h2>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    {[
                                                        { value: '7,500', label: 'Steps Today', icon: Footprints, color: 'green' },
                                                        { value: '8/10', label: 'Water Intake', icon: Droplets, color: 'blue' },
                                                        { value: '7h 30m', label: 'Sleep', icon: Moon, color: 'purple' },
                                                        { value: '3/5', label: 'Medications', icon: Pill, color: 'yellow' }
                                                    ].map((item, index) => {
                                                        const IconComponent = item.icon;
                                                        return (
                                                            <div key={index} className={`bg-${item.color}-50 rounded-xl p-3 text-center`}>
                                                                <IconComponent className={`w-6 h-6 text-${item.color}-900 mx-auto mb-2`} />
                                                                <div className={`text-lg font-bold text-${item.color}-900`}>{item.value}</div>
                                                                <div className={`text-xs text-${item.color}-700`}>{item.label}</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <button
                                                    onClick={handleTrackActivities}
                                                    className="w-full bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                                                >
                                                    <BarChart3 className="w-5 h-5" />
                                                    <span>Track Health Metrics</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity Section */}
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
                                    <button className="text-green-700 hover:text-green-900 font-medium flex items-center space-x-1">
                                        <span>View All</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { 
                                            type: 'Appointment', 
                                            desc: 'Dr. Sharma - Cardiology', 
                                            date: 'Today, 2:30 PM', 
                                            status: 'Upcoming',
                                            icon: Stethoscope
                                        },
                                        { 
                                            type: 'Report', 
                                            desc: 'Blood Test Results', 
                                            date: 'Yesterday', 
                                            status: 'Ready',
                                            icon: FileText
                                        },
                                        { 
                                            type: 'Medication', 
                                            desc: 'Prescription Renewal', 
                                            date: '2 days ago', 
                                            status: 'Completed',
                                            icon: Pill
                                        }
                                    ].map((activity, index) => {
                                        const IconComponent = activity.icon;
                                        return (
                                            <div key={index} className="bg-green-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-200 group">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="bg-white p-2 rounded-xl shadow-sm">
                                                            <IconComponent className="w-5 h-5 text-green-700" />
                                                        </div>
                                                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                                                            {activity.type}
                                                        </span>
                                                    </div>
                                                    <Clock className="w-4 h-4 text-green-600" />
                                                </div>
                                                <p className="text-green-900 font-semibold mb-3 text-lg">{activity.desc}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                                                        activity.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
                                                        activity.status === 'Ready' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-green-100 text-green-800'
                                                    }`}>
                                                        {activity.status}
                                                    </span>
                                                    <span className="text-green-600 text-sm font-medium">{activity.date}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Sections */}
                    {activeSection === 'appointments' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h2>
                            <p className="text-gray-600">Appointments content goes here...</p>
                        </div>
                    )}

                    {activeSection === 'health' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Tracking</h2>
                            <p className="text-gray-600">Health tracking content goes here...</p>
                        </div>
                    )}

                    {activeSection === 'reports' && (
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Medical Reports</h2>
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
        </div>
    );
};

export default Dashboard;