import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    ArrowLeft,
    Plus,
    Settings,
    Search,
    Filter,
    FileText,
    MoreVertical,
    Copy,
    Download,
    ChevronDown,
    ChevronUp,
    Send,
    X
} from "lucide-react";


// Icons
const BackIcon = () => <ArrowLeft size={20} />;
const AddIcon = () => <Plus size={20} />;
const SettingsIcon = () => <Settings size={20} />;
const SearchIcon = () => <Search size={20} />;
const FilterIcon = () => <Filter size={20} />;
const FileIcon = () => <FileText size={20} />;
const MoreIcon = () => <MoreVertical size={20} />;
const CopyIcon = () => <Copy size={20} />;
const DownloadIcon = () => <Download size={20} />;
const ExpandIcon = () => <ChevronDown size={20} />;
const CollapseIcon = () => <ChevronUp size={20} />;
const SendIcon = () => <Send size={20} />;
const CrossIcon = () => <X size={20} />;


const PatientDetailsPage = () => {
    const navigate = useNavigate();
    const { patientId } = useParams();
    const [expandedSections, setExpandedSections] = useState({
        familyHistory: true,
        medication: true,
        labs: true,
        vitals: true
    });
    const [chatMessage, setChatMessage] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(Array(10).fill(false));

    // Mock patient data
    const patientData = {
        id: patientId,
        name: 'John Doe',
        age: 45,
        gender: 'Male',
        dob: '1978-05-15',
        phone: '+1234567890',
        email: 'john.doe@email.com',
        address: '123 Main St, City, State'
    };

    // Mock medical files
    const medicalFiles = [
        { id: 1, name: 'Medical File 1', type: 'pdf', date: '2024-01-15' },
        { id: 2, name: 'Blood Test Report', type: 'pdf', date: '2024-01-10' },
        { id: 3, name: 'X-Ray Results', type: 'image', date: '2024-01-08' },
        { id: 4, name: 'Prescription', type: 'doc', date: '2024-01-05' },
        { id: 5, name: 'Medical History', type: 'pdf', date: '2024-01-02' },
        { id: 6, name: 'Lab Results', type: 'pdf', date: '2023-12-28' },
        { id: 7, name: 'MRI Scan', type: 'image', date: '2023-12-25' },
        { id: 8, name: 'Consultation Notes', type: 'doc', date: '2023-12-20' },
        { id: 9, name: 'Treatment Plan', type: 'pdf', date: '2023-12-15' },
        { id: 10, name: 'Follow-up Report', type: 'pdf', date: '2023-12-10' }
    ];

    // Mock timeline events
    const timelineEvents = [
        {
            id: 1,
            title: 'Brain MRI',
            date: '2024-01-15',
            description: 'Routine brain MRI scan for headache evaluation',
            findings: 'No significant abnormalities detected. Mild sinusitis noted.',
            recommendations: 'Follow up in 6 months. Consider ENT consultation for sinusitis.',
            type: 'mri'
        },
        {
            id: 2,
            title: 'Blood Test',
            date: '2024-01-10',
            description: 'Complete blood count and metabolic panel',
            findings: 'Cholesterol levels slightly elevated. All other parameters within normal range.',
            recommendations: 'Diet modification recommended. Repeat test in 3 months.',
            type: 'lab'
        },
        {
            id: 3,
            title: 'Cardiology Consultation',
            date: '2024-01-08',
            description: 'Follow-up consultation for hypertension',
            findings: 'Blood pressure well controlled with current medication.',
            recommendations: 'Continue current medication. Monitor BP weekly.',
            type: 'consultation'
        }
    ];

    // Mock suggested queries
    const suggestedQueries = [
        "Summarize patient's medical history",
        "List current medications",
        "Show latest lab results",
        "Generate health report"
    ];

    const handleBackToHome = () => {
        navigate('/doctor/dashboard');
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleFileSelect = (index) => {
        const newSelectedFiles = [...selectedFiles];
        newSelectedFiles[index] = !newSelectedFiles[index];
        setSelectedFiles(newSelectedFiles);
    };

    const handleSelectAll = () => {
        const allSelected = selectedFiles.every(file => file);
        setSelectedFiles(Array(10).fill(!allSelected));
    };

    const handleSendMessage = () => {
        if (chatMessage.trim()) {
            console.log('Sending message:', chatMessage);
            setChatMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleSuggestedQuery = (query) => {
        setChatMessage(query);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* Left Side - Back button and Patient Info */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleBackToHome}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                            <BackIcon />
                            <span className="font-medium">Back to home</span>
                        </button>
                        <div className="flex items-center gap-8 text-1xl text-gray-950">
                            <span className="before:content-['·'] font-bold before:mr-2">{patientData.name}</span>
                            <span className="before:content-['·'] font-bold before:mr-2">{patientData.age} years Old</span>
                            <span className="before:content-['·'] font-bold before:mr-2">{patientData.gender}</span>
                            <span className="before:content-['·'] font-bold before:mr-2">{patientData.dob}</span>
                            <span className="before:content-['·'] font-bold before:mr-2">{patientData.phone}</span>
                        </div>

                    </div>

                    {/* Right Side - Action Buttons */}
                    <div className="flex items-center space-x-3">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" title="Add">
                            <AddIcon />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" title="Settings">
                            <SettingsIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Patient Records */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Patient Records</h2>
                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                    <AddIcon />
                                </button>
                                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                    <span>〈</span>
                                </button>
                            </div>
                        </div>

                        {/* Search and Filter */}
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search records..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon />
                                </div>
                            </div>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                                <FilterIcon />
                                <span>Filter</span>
                            </button>
                        </div>

                        {/* Select All Checkbox */}
                        <div className="mb-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedFiles.every(file => file)}
                                    onChange={handleSelectAll}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium text-gray-700">Select All</span>
                            </label>
                        </div>

                        {/* Files List with Checkboxes */}
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                            {medicalFiles.map((file, index) => (
                                <div key={file.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                    <div className="flex items-center space-x-3 flex-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedFiles[index]}
                                            onChange={() => handleFileSelect(index)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <FileIcon />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-800 truncate">{file.name}</p>
                                            <p className="text-sm text-gray-600">{file.date}</p>
                                        </div>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-2">
                                        <MoreIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Column - Patient Summary */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Patient Summary</h2>
                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" title="Copy">
                                    <CopyIcon />
                                </button>
                                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200" title="Download">
                                    <DownloadIcon />
                                </button>
                            </div>
                        </div>

                        <div className="prose max-w-none text-gray-700 mb-6">
                            <p>
                                Patient is a 45-year-old male with a history of hypertension managed with medication.
                                Recent MRI shows no significant abnormalities. Blood tests indicate slightly elevated
                                cholesterol levels. Patient maintains regular exercise and follows a balanced diet.
                                No family history of cardiovascular diseases. Current medications include Lisinopril
                                10mg daily for blood pressure control.
                            </p>
                        </div>

                        {/* Past Clinical Events */}
                        <div className="space-y-4">
                            {/* Family History */}
                            <div className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleSection('familyHistory')}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-semibold text-gray-800">Family History</span>
                                    {expandedSections.familyHistory ? <CollapseIcon /> : <ExpandIcon />}
                                </button>
                                {expandedSections.familyHistory && (
                                    <div className="p-4 border-t border-gray-200">
                                        <p className="text-gray-700">No significant family history of cardiovascular diseases. Mother has type 2 diabetes. Father deceased at age 78 due to natural causes.</p>
                                    </div>
                                )}
                            </div>

                            {/* All Historical Medication */}
                            <div className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleSection('medication')}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-semibold text-gray-800">All Historical Medication</span>
                                    {expandedSections.medication ? <CollapseIcon /> : <ExpandIcon />}
                                </button>
                                {expandedSections.medication && (
                                    <div className="p-4 border-t border-gray-200">
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Lisinopril 10mg - Current</li>
                                            <li>Atorvastatin 20mg - Current</li>
                                            <li>Metformin 500mg - 2020-2022</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Labs */}
                            <div className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleSection('labs')}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-semibold text-gray-800">Labs</span>
                                    {expandedSections.labs ? <CollapseIcon /> : <ExpandIcon />}
                                </button>
                                {expandedSections.labs && (
                                    <div className="p-4 border-t border-gray-200">
                                        <div className="space-y-2">
                                            <p><strong>Blood Test (2024-01-10):</strong> Cholesterol 220 mg/dL, Triglycerides 150 mg/dL</p>
                                            <p><strong>Urine Analysis (2023-12-15):</strong> Within normal limits</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Vitals */}
                            <div className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleSection('vitals')}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-semibold text-gray-800">Vitals</span>
                                    {expandedSections.vitals ? <CollapseIcon /> : <ExpandIcon />}
                                </button>
                                {expandedSections.vitals && (
                                    <div className="p-4 border-t border-gray-200">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div><strong>BP:</strong> 120/80 mmHg</div>
                                            <div><strong>Heart Rate:</strong> 72 bpm</div>
                                            <div><strong>Temperature:</strong> 98.6°F</div>
                                            <div><strong>SpO2:</strong> 98%</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Chat Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Type your query here..."
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                            >
                                <SendIcon />
                            </button>
                        </div>

                        {/* Suggested Queries */}
                        <div className="flex flex-wrap gap-2">
                            {suggestedQueries.map((query, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSuggestedQuery(query)}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                                >
                                    {query}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Patient Timeline */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Patient Timeline</h2>
                            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                <CrossIcon />
                            </button>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-400"></div>

                            {/* Timeline Events */}
                            <div className="space-y-8">
                                {timelineEvents.map((event, index) => (
                                    <div key={event.id} className="relative">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white z-10"></div>

                                        {/* Event Card */}
                                        <div className="ml-12">
                                            {/* Event Header */}
                                            <div className="bg-green-100 rounded-t-lg p-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-gray-800">{event.title}</h3>
                                                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                                                    </div>
                                                    <span className="text-sm text-gray-500 whitespace-nowrap">{event.date}</span>
                                                </div>
                                            </div>

                                            {/* Findings */}
                                            <div className="bg-gray-100 p-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">Findings</h4>
                                                <p className="text-sm text-gray-700">{event.findings}</p>
                                            </div>

                                            {/* Recommendations */}
                                            <div className="bg-red-100 rounded-b-lg p-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">Recommendations</h4>
                                                <p className="text-sm text-gray-700">{event.recommendations}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailsPage;