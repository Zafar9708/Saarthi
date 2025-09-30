// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Diagnostics = () => {
//     const [activeStep, setActiveStep] = useState('upload');
//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [fileType, setFileType] = useState('pdf');
//     const [isCameraOpen, setIsCameraOpen] = useState(false);
//     const fileInputRef = useRef(null);
//     const videoRef = useRef(null);
//     const navigate = useNavigate();

//     const handleFileSelect = (event) => {
//         const files = Array.from(event.target.files);
//         setSelectedFiles(files);
//         setActiveStep('review');
//     };

//     const handleTakePhoto = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             if (videoRef.current) {
//                 videoRef.current.srcObject = stream;
//             }
//             setIsCameraOpen(true);
//         } catch (error) {
//             alert('Unable to access camera. Please check permissions.');
//         }
//     };

//     const capturePhoto = () => {
//         if (videoRef.current) {
//             const canvas = document.createElement('canvas');
//             canvas.width = videoRef.current.videoWidth;
//             canvas.height = videoRef.current.videoHeight;
//             const context = canvas.getContext('2d');
//             context.drawImage(videoRef.current, 0, 0);
            
//             canvas.toBlob((blob) => {
//                 const file = new File([blob], `photo-${Date.now()}.jpg`, { type: 'image/jpeg' });
//                 setSelectedFiles([file]);
//                 setActiveStep('review');
//                 setIsCameraOpen(false);
                
//                 // Stop camera stream
//                 if (videoRef.current.srcObject) {
//                     videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//                 }
//             }, 'image/jpeg');
//         }
//     };

//     const handleUpload = () => {
//         // Simulate upload process
//         alert('Files uploaded successfully! Analysis in progress...');
//         setActiveStep('analysis');
        
//         // Simulate analysis completion
//         setTimeout(() => {
//             setActiveStep('results');
//         }, 3000);
//     };

//     const removeFile = (index) => {
//         setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
//             {/* Header */}
//             {/* <header className="bg-white shadow-lg border-b border-green-200">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-20">
//                         <div className="flex items-center">
//                             <button 
//                                 onClick={() => navigate('/dashboard')}
//                                 className="flex items-center text-green-900 hover:text-green-700 mr-6"
//                             >
//                                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                 </svg>
//                                 Back to Dashboard
//                             </button>
//                             <img
//                                 src="/saarthi.png"
//                                 alt="Saarthi Logo"
//                                 className="h-8 w-8 mr-3"
//                             />
//                             <h1 className="text-2xl font-bold text-green-900">Understand Your Diagnostics</h1>
//                         </div>
//                     </div>
//                 </div>
//             </header> */}

//             {/* Main Content */}
//             <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Progress Steps */}

//                 <h1 className="text-2xl justify-center content-center ml-60 mb-8 font-bold text-green-900">Understand Your Diagnostics</h1>


//                 <div className="flex justify-center mb-12">
//                     <div className="flex items-center space-x-8">
//                         {['upload', 'review', 'analysis', 'results'].map((step, index) => (
//                             <div key={step} className="flex items-center">
//                                 <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
//                                     activeStep === step 
//                                         ? 'bg-green-900 border-green-900 text-white' 
//                                         : activeStep > step 
//                                         ? 'bg-green-500 border-green-500 text-white'
//                                         : 'border-green-300 text-green-300'
//                                 } font-semibold`}>
//                                     {index + 1}
//                                 </div>
//                                 <span className={`ml-3 font-medium ${
//                                     activeStep >= step ? 'text-green-900' : 'text-green-300'
//                                 }`}>
//                                     {step.charAt(0).toUpperCase() + step.slice(1)}
//                                 </span>
//                                 {index < 3 && (
//                                     <div className={`w-16 h-1 mx-4 ${
//                                         activeStep > step ? 'bg-green-500' : 'bg-green-200'
//                                     }`} />
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Upload Section */}
//                 {activeStep === 'upload' && (
//                     <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-200">
//                         <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
//                             <svg className="w-16 h-16 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                             </svg>
//                         </div>
                        
//                         <h2 className="text-3xl font-bold text-green-900 mb-4">
//                             Upload Your Diagnostics Reports
//                         </h2>
//                         <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto">
//                             Upload prescriptions, lab reports, discharge summaries, or any medical documents for AI-powered analysis and insights.
//                         </p>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//                             {/* File Upload Option */}
//                             <div className="bg-green-50 rounded-2xl p-6 border-2 border-dashed border-green-300 hover:border-green-500 transition-colors duration-200">
//                                 <svg className="w-12 h-12 text-green-900 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                                 </svg>
//                                 <h3 className="text-xl font-semibold text-green-900 mb-2">Select Files to Upload</h3>
//                                 <p className="text-green-700 mb-4">Upload PDF, Image, or Audio files</p>
//                                 <button
//                                     onClick={() => fileInputRef.current?.click()}
//                                     className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-xl font-medium transition duration-200"
//                                 >
//                                     Choose Files
//                                 </button>
//                                 <input
//                                     ref={fileInputRef}
//                                     type="file"
//                                     multiple
//                                     accept=".pdf,.jpg,.jpeg,.png,.mp3,.wav"
//                                     onChange={handleFileSelect}
//                                     className="hidden"
//                                 />
//                             </div>

//                             {/* Camera Option */}
//                             <div className="bg-green-50 rounded-2xl p-6 border-2 border-dashed border-green-300 hover:border-green-500 transition-colors duration-200">
//                                 <svg className="w-12 h-12 text-green-900 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//                                 </svg>
//                                 <h3 className="text-xl font-semibold text-green-900 mb-2">Take a Photo</h3>
//                                 <p className="text-green-700 mb-4">Capture documents using camera</p>
//                                 <button
//                                     onClick={handleTakePhoto}
//                                     className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-xl font-medium transition duration-200"
//                                 >
//                                     Open Camera
//                                 </button>
//                             </div>
//                         </div>

//                         {/* File Type Selection */}
//                         <div className="mt-8 max-w-2xl mx-auto">
//                             <h4 className="text-lg font-semibold text-green-900 mb-4">Supported File Types:</h4>
//                             <div className="grid grid-cols-3 gap-4">
//                                 {['PDF Documents', 'Images (JPG, PNG)', 'Audio Recordings'].map((type) => (
//                                     <div key={type} className="bg-white rounded-lg p-3 border border-green-200 text-center">
//                                         <span className="text-green-900 font-medium">{type}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Camera View */}
//                 {isCameraOpen && (
//                     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//                         <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4">
//                             <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Take a Photo</h3>
//                             <video 
//                                 ref={videoRef} 
//                                 autoPlay 
//                                 playsInline 
//                                 className="w-full h-64 object-cover rounded-xl mb-4 bg-gray-900"
//                             />
//                             <div className="flex justify-center space-x-4">
//                                 <button
//                                     onClick={capturePhoto}
//                                     className="bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium"
//                                 >
//                                     Capture Photo
//                                 </button>
//                                 <button
//                                     onClick={() => {
//                                         setIsCameraOpen(false);
//                                         if (videoRef.current.srcObject) {
//                                             videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//                                         }
//                                     }}
//                                     className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* File Review Section */}
//                 {activeStep === 'review' && (
//                     <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-200">
//                         <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Review Your Files</h2>
                        
//                         <div className="mb-8">
//                             <h3 className="text-lg font-semibold text-green-900 mb-4">Selected Files:</h3>
//                             <div className="space-y-3">
//                                 {selectedFiles.map((file, index) => (
//                                     <div key={index} className="flex items-center justify-between bg-green-50 rounded-xl p-4">
//                                         <div className="flex items-center">
//                                             <svg className="w-8 h-8 text-green-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                             </svg>
//                                             <div>
//                                                 <p className="text-green-900 font-medium">{file.name}</p>
//                                                 <p className="text-green-700 text-sm">{(file.size / 1024).toFixed(2)} KB</p>
//                                             </div>
//                                         </div>
//                                         <button
//                                             onClick={() => removeFile(index)}
//                                             className="text-red-600 hover:text-red-800"
//                                         >
//                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="text-center">
//                             <button
//                                 onClick={handleUpload}
//                                 className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-200"
//                             >
//                                 Upload & Analyze Files
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Analysis Section */}
//                 {activeStep === 'analysis' && (
//                     <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-200">
//                         <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
//                             <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-900"></div>
//                         </div>
//                         <h2 className="text-3xl font-bold text-green-900 mb-4">Analyzing Your Reports</h2>
//                         <p className="text-lg text-green-700 mb-8">Our AI is processing your documents to provide meaningful insights...</p>
//                         <div className="w-full bg-green-200 rounded-full h-2 mb-4">
//                             <div className="bg-green-900 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
//                         </div>
//                         <p className="text-green-600">This may take a few moments</p>
//                     </div>
//                 )}

//                 {/* Results Section */}
//                 {activeStep === 'results' && (
//                     <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-200">
//                         <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Analysis Complete</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             <div className="bg-green-50 rounded-2xl p-6">
//                                 <h3 className="text-xl font-semibold text-green-900 mb-4">Key Findings</h3>
//                                 <ul className="space-y-3">
//                                     {['Normal blood pressure range', 'Slightly elevated cholesterol', 'Healthy glucose levels', 'Recommend follow-up in 3 months'].map((item, index) => (
//                                         <li key={index} className="flex items-center text-green-800">
//                                             <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="bg-blue-50 rounded-2xl p-6">
//                                 <h3 className="text-xl font-semibold text-blue-900 mb-4">Recommendations</h3>
//                                 <ul className="space-y-3">
//                                     {['Maintain current diet', 'Increase physical activity', 'Monitor blood pressure weekly', 'Consult cardiologist if symptoms persist'].map((item, index) => (
//                                         <li key={index} className="flex items-center text-blue-800">
//                                             <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                             </svg>
//                                             {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="text-center mt-8">
//                             <button
//                                 onClick={() => navigate('/dashboard')}
//                                 className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-medium mr-4"
//                             >
//                                 Back to Dashboard
//                             </button>
//                             <button
//                                 onClick={() => setActiveStep('upload')}
//                                 className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-3 rounded-xl font-medium"
//                             >
//                                 Upload More Files
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </main>
//         </div>
//     );
// };

// export default Diagnostics;

import React, { useState, useRef } from 'react';
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
    Upload as UploadIcon,
    Camera,
    FileText,
    X,
    CheckCircle,
    AlertCircle,
    Download,
    Share2,
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Brain,
    Target,
    TrendingUp
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

const Diagnostics = () => {
    const [activeStep, setActiveStep] = useState('upload');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('diagnostics');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const dropAreaRef = useRef(null);
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

    const handleLogout = () => {
        localStorage.removeItem('saarthi_token');
        localStorage.removeItem('saarthi_user');
        navigate('/signin');
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        if (!dropAreaRef.current.contains(e.relatedTarget)) {
            setIsDragging(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles(prev => [...prev, ...files]);
        setActiveStep('review');
    };

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
        setActiveStep('review');
    };

    const handleTakePhoto = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'environment' } 
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraOpen(true);
        } catch (error) {
            alert('Unable to access camera. Please check permissions.');
        }
    };

    const capturePhoto = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoRef.current, 0, 0);
            
            canvas.toBlob((blob) => {
                const file = new File([blob], `medical-document-${Date.now()}.jpg`, { type: 'image/jpeg' });
                setSelectedFiles(prev => [...prev, file]);
                setIsCameraOpen(false);
                
                if (videoRef.current.srcObject) {
                    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
                }
            }, 'image/jpeg', 0.8);
        }
    };

    const handleUpload = () => {
        // Simulate upload process
        setActiveStep('analysis');
        
        // Simulate analysis completion
        setTimeout(() => {
            setActiveStep('results');
        }, 4000);
    };

    const removeFile = (index) => {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };

    const getFileIcon = (file) => {
        if (file.type.startsWith('image/')) {
            return <FileText className="w-6 h-6 text-green-600" />;
        } else if (file.type === 'application/pdf') {
            return <FileText className="w-6 h-6 text-red-500" />;
        }
        return <FileText className="w-6 h-6 text-green-600" />;
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const steps = [
        { id: 'upload', label: 'Upload', description: 'Add your files' },
        { id: 'review', label: 'Review', description: 'Check your files' },
        { id: 'analysis', label: 'Analysis', description: 'AI Processing' },
        { id: 'results', label: 'Results', description: 'Get insights' }
    ];

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
                            <h1 className="text-2xl font-bold text-gray-800">AI Diagnostics Analysis</h1>
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
                    {/* Enhanced Progress Steps */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex justify-between items-center">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center text-center flex-1">
                                        <div className={`flex items-center justify-center w-16 h-16 rounded-2xl border-2 transition-all duration-500 ${
                                            activeStep === step.id 
                                                ? 'bg-green-900 border-green-900 text-white shadow-lg scale-110' 
                                                : activeStep > step.id 
                                                ? 'bg-green-500 border-green-500 text-white shadow-md'
                                                : 'border-green-300 text-green-300 bg-white'
                                        }`}>
                                            {activeStep > step.id ? (
                                                <CheckCircle className="w-7 h-7" />
                                            ) : (
                                                <span className="text-xl font-bold">{index + 1}</span>
                                            )}
                                        </div>
                                        <div className="mt-3">
                                            <div className={`font-semibold transition-all duration-300 ${
                                                activeStep >= step.id ? 'text-green-900' : 'text-green-300'
                                            }`}>
                                                {step.label}
                                            </div>
                                            <div className={`text-sm transition-all duration-300 ${
                                                activeStep >= step.id ? 'text-green-700' : 'text-green-300'
                                            }`}>
                                                {step.description}
                                            </div>
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`flex-1 h-1 mx-4 transition-all duration-500 ${
                                            activeStep > step.id ? 'bg-green-500' : 'bg-green-200'
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="max-w-6xl mx-auto">
                        {/* Upload Section */}
                        {activeStep === 'upload' && (
                            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-200">
                                <div className="text-center mb-12">
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <UploadIcon className="w-12 h-12 text-green-900" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-green-900 mb-4">
                                        Upload Medical Reports
                                    </h2>
                                    <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
                                        Share your medical documents, lab reports, or prescriptions for AI-powered analysis and personalized insights.
                                    </p>
                                </div>

                                <div 
                                    ref={dropAreaRef}
                                    className={`border-3 border-dashed rounded-3xl p-12 text-center transition-all duration-300 mb-8 ${
                                        isDragging 
                                            ? 'border-green-500 bg-green-50 scale-105' 
                                            : 'border-green-300 hover:border-green-400 bg-green-25'
                                    }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <UploadIcon className="w-20 h-20 text-green-400 mx-auto mb-6" />
                                    <h3 className="text-2xl font-semibold text-green-900 mb-3">
                                        {isDragging ? 'Drop your files here' : 'Drag & drop your files'}
                                    </h3>
                                    <p className="text-green-700 text-lg mb-6">
                                        or click to browse your device
                                    </p>
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        Browse Files
                                    </button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                        onChange={handleFileSelect}
                                        className="hidden"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                                        <div className="flex items-center mb-4">
                                            <Camera className="w-8 h-8 text-green-900 mr-3" />
                                            <h4 className="text-xl font-semibold text-green-900">Take Photos</h4>
                                        </div>
                                        <p className="text-green-700 mb-4">
                                            Use your camera to capture prescriptions, lab reports, or medical documents
                                        </p>
                                        <button
                                            onClick={handleTakePhoto}
                                            className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-xl font-medium transition duration-200 flex items-center justify-center"
                                        >
                                            <Camera className="w-5 h-5 mr-2" />
                                            Open Camera
                                        </button>
                                    </div>

                                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                                        <div className="flex items-center mb-4">
                                            <FileText className="w-8 h-8 text-blue-900 mr-3" />
                                            <h4 className="text-xl font-semibold text-blue-900">Supported Formats</h4>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['PDF Documents', 'JPG/PNG Images', 'Word Documents', 'Text Files'].map((format) => (
                                                <div key={format} className="bg-white rounded-lg p-3 text-center border border-blue-200">
                                                    <span className="text-blue-900 font-medium text-sm">{format}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Review Section */}
                        {activeStep === 'review' && (
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-200">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <FileText className="w-10 h-10 text-green-900" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-green-900 mb-4">
                                        Review Your Files
                                    </h2>
                                    <p className="text-xl text-green-700">
                                        Please verify your documents before analysis
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-semibold text-green-900">
                                            Selected Files ({selectedFiles.length})
                                        </h3>
                                        <button
                                            onClick={() => setSelectedFiles([])}
                                            className="text-green-700 hover:text-green-900 font-medium flex items-center"
                                        >
                                            <X className="w-5 h-5 mr-2" />
                                            Clear All
                                        </button>
                                    </div>

                                    <div className="grid gap-4">
                                        {selectedFiles.map((file, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-center justify-between bg-green-50 rounded-2xl p-6 border border-green-200 hover:border-green-300 transition-all duration-200"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-green-200 shadow-sm">
                                                        {getFileIcon(file)}
                                                    </div>
                                                    <div>
                                                        <p className="text-green-900 font-semibold text-lg mb-1">
                                                            {file.name}
                                                        </p>
                                                        <div className="flex items-center space-x-4 text-sm text-green-700">
                                                            <span>{formatFileSize(file.size)}</span>
                                                            <span>•</span>
                                                            <span>{file.type.split('/')[1]?.toUpperCase() || 'FILE'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <button
                                                    onClick={() => removeFile(index)}
                                                    className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors duration-200"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => setActiveStep('upload')}
                                        className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                                    >
                                        <ArrowLeft className="w-5 h-5 mr-2" />
                                        Back to Upload
                                    </button>

                                    <button
                                        onClick={handleUpload}
                                        disabled={selectedFiles.length === 0}
                                        className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                            selectedFiles.length > 0
                                                ? 'bg-green-900 hover:bg-green-800 text-white'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        Start Analysis
                                        <Sparkles className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Analysis Section */}
                        {activeStep === 'analysis' && (
                            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-200 text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                                    <Brain className="w-16 h-16 text-green-900 animate-pulse" />
                                </div>
                                
                                <h2 className="text-4xl font-bold text-green-900 mb-4">
                                    AI Analysis in Progress
                                </h2>
                                <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
                                    Our advanced AI is carefully analyzing your medical documents to provide personalized insights and recommendations.
                                </p>

                                <div className="max-w-2xl mx-auto mb-8">
                                    <div className="w-full bg-green-200 rounded-full h-4 mb-4 overflow-hidden">
                                        <div 
                                            className="bg-gradient-to-r from-green-500 to-green-700 h-4 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: '75%' }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-green-700 text-sm">
                                        <span>Processing documents...</span>
                                        <span>75%</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                                    {[
                                        { icon: FileText, text: 'Document Processing' },
                                        { icon: Target, text: 'Pattern Recognition' },
                                        { icon: TrendingUp, text: 'Generating Insights' }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-green-50 rounded-2xl p-4 border border-green-200">
                                            <item.icon className="w-8 h-8 text-green-900 mx-auto mb-2" />
                                            <p className="text-green-900 font-medium">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Results Section */}
                        {activeStep === 'results' && (
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-200">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-900" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-green-900 mb-4">
                                        Analysis Complete
                                    </h2>
                                    <p className="text-xl text-green-700">
                                        Here are your personalized health insights
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    {/* Key Findings */}
                                    <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                                        <div className="flex items-center mb-4">
                                            <Target className="w-6 h-6 text-green-900 mr-3" />
                                            <h3 className="text-2xl font-semibold text-green-900">Key Findings</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { text: 'Blood pressure within normal range (120/80 mmHg)', status: 'good' },
                                                { text: 'Cholesterol levels slightly elevated (210 mg/dL)', status: 'warning' },
                                                { text: 'Blood glucose levels optimal (95 mg/dL)', status: 'good' },
                                                { text: 'Liver function tests normal', status: 'good' }
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-green-100">
                                                    {item.status === 'good' ? (
                                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    ) : (
                                                        <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                                    )}
                                                    <span className="text-green-900">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recommendations */}
                                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                                        <div className="flex items-center mb-4">
                                            <TrendingUp className="w-6 h-6 text-blue-900 mr-3" />
                                            <h3 className="text-2xl font-semibold text-blue-900">Recommendations</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                'Continue current exercise routine (30 mins daily)',
                                                'Reduce saturated fat intake for cholesterol management',
                                                'Schedule follow-up test in 3 months',
                                                'Maintain hydration and balanced diet',
                                                'Consider consulting a nutritionist'
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-blue-100">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-blue-900">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <button
                                        onClick={() => navigate('/dashboard')}
                                        className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                                    >
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        Back to Dashboard
                                    </button>
                                    <button
                                        onClick={() => setActiveStep('upload')}
                                        className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                                    >
                                        <UploadIcon className="w-5 h-5 mr-2" />
                                        Analyze More Files
                                    </button>
                                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Report
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Camera Modal */}
                    {isCameraOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full">
                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold text-green-900 mb-2">
                                        Capture Document
                                    </h3>
                                    <p className="text-green-700">
                                        Position your document clearly in the frame
                                    </p>
                                </div>
                                
                                <div className="relative bg-black rounded-2xl overflow-hidden mb-6">
                                    <video 
                                        ref={videoRef} 
                                        autoPlay 
                                        playsInline 
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 border-2 border-white border-dashed rounded-2xl m-4 pointer-events-none"></div>
                                </div>
                                
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={capturePhoto}
                                        className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
                                    >
                                        <Camera className="w-5 h-5 mr-2" />
                                        Capture Photo
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsCameraOpen(false);
                                            if (videoRef.current?.srcObject) {
                                                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
                                            }
                                        }}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Diagnostics;