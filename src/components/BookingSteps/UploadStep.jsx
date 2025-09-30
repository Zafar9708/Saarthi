// import React, { useState, useRef } from 'react';

// const UploadStep = ({ doctor, onNext }) => {
//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [isCameraOpen, setIsCameraOpen] = useState(false);
//     const fileInputRef = useRef(null);
//     const videoRef = useRef(null);

//     const handleFileSelect = (event) => {
//         const files = Array.from(event.target.files);
//         setSelectedFiles(files);
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
//                 const file = new File([blob], `medical-document-${Date.now()}.jpg`, { type: 'image/jpeg' });
//                 setSelectedFiles([file]);
//                 setIsCameraOpen(false);
                
//                 if (videoRef.current.srcObject) {
//                     videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//                 }
//             }, 'image/jpeg');
//         }
//     };

//     const removeFile = (index) => {
//         setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
//     };

//     return (
//         <div>
//             <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-green-900 mb-4">
//                     Upload Your Medical Reports
//                 </h2>
//                 <p className="text-lg text-green-700">
//                     Share your reports with Dr. {doctor.name} to help prepare for your consultation
//                 </p>
//             </div>

//             {/* Upload Options */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {/* File Upload */}
//                 <div className="bg-green-50 rounded-2xl p-6 border-2 border-dashed border-green-300 hover:border-green-500 transition-colors duration-200 text-center">
//                     <svg className="w-16 h-16 text-green-900 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                     </svg>
//                     <h3 className="text-xl font-semibold text-green-900 mb-2">Select Files to Upload</h3>
//                     <p className="text-green-700 mb-4">Upload PDF, JPG, PNG files</p>
//                     <button
//                         onClick={() => fileInputRef.current?.click()}
//                         className="bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium transition duration-200"
//                     >
//                         Choose Files
//                     </button>
//                     <input
//                         ref={fileInputRef}
//                         type="file"
//                         multiple
//                         accept=".pdf,.jpg,.jpeg,.png"
//                         onChange={handleFileSelect}
//                         className="hidden"
//                     />
//                 </div>

//                 {/* Camera Option */}
//                 <div className="bg-green-50 rounded-2xl p-6 border-2 border-dashed border-green-300 hover:border-green-500 transition-colors duration-200 text-center">
//                     <svg className="w-16 h-16 text-green-900 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     <h3 className="text-xl font-semibold text-green-900 mb-2">Take a Photo</h3>
//                     <p className="text-green-700 mb-4">Capture documents with camera</p>
//                     <button
//                         onClick={handleTakePhoto}
//                         className="bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium transition duration-200"
//                     >
//                         Open Camera
//                     </button>
//                 </div>
//             </div>

//             {/* Selected Files */}
//             {selectedFiles.length > 0 && (
//                 <div className="mb-8">
//                     <h4 className="text-lg font-semibold text-green-900 mb-4">Selected Files:</h4>
//                     <div className="space-y-3">
//                         {selectedFiles.map((file, index) => (
//                             <div key={index} className="flex items-center justify-between bg-green-100 rounded-xl p-4">
//                                 <div className="flex items-center">
//                                     <svg className="w-8 h-8 text-green-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                     <div>
//                                         <p className="text-green-900 font-medium">{file.name}</p>
//                                         <p className="text-green-700 text-sm">{(file.size / 1024).toFixed(2)} KB</p>
//                                     </div>
//                                 </div>
//                                 <button
//                                     onClick={() => removeFile(index)}
//                                     className="text-red-600 hover:text-red-800"
//                                 >
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Camera Modal */}
//             {isCameraOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4">
//                         <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Take a Photo</h3>
//                         <video 
//                             ref={videoRef} 
//                             autoPlay 
//                             playsInline 
//                             className="w-full h-64 object-cover rounded-xl mb-4 bg-gray-900"
//                         />
//                         <div className="flex justify-center space-x-4">
//                             <button
//                                 onClick={capturePhoto}
//                                 className="bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium"
//                             >
//                                 Capture Photo
//                             </button>
//                             <button
//                                 onClick={() => {
//                                     setIsCameraOpen(false);
//                                     if (videoRef.current.srcObject) {
//                                         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//                                     }
//                                 }}
//                                 className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Next Button */}
//             <div className="text-center">
//                 <button
//                     onClick={onNext}
//                     className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-200 shadow-lg hover:shadow-xl"
//                 >
//                     Continue to Visit Preparation
//                     <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default UploadStep;


import React, { useState, useRef } from 'react';
import { 
    Upload, 
    Camera, 
    FileText, 
    X, 
    ChevronRight,
    Image,
    File
} from 'lucide-react';

const UploadStep = ({ doctor, onNext }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const dropAreaRef = useRef(null);

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
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

    const removeFile = (index) => {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };

    const getFileIcon = (file) => {
        if (file.type.startsWith('image/')) {
            return <Image className="w-6 h-6 text-green-600" />;
        } else if (file.type === 'application/pdf') {
            return <FileText className="w-6 h-6 text-red-500" />;
        }
        return <File className="w-6 h-6 text-green-600" />;
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-10 h-10 text-green-900" />
                </div>
                <h2 className="text-4xl font-bold text-green-900 mb-4">
                    Share Your Medical Reports
                </h2>
                <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
                    Help Dr. {doctor.name} understand your health better by uploading your medical documents, prescriptions, or lab reports.
                </p>
            </div>

            {/* Upload Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* File Upload Card */}
                <div 
                    ref={dropAreaRef}
                    className={`bg-white rounded-3xl p-8 border-2 border-dashed transition-all duration-300 ${
                        isDragging 
                            ? 'border-green-500 bg-green-50 shadow-lg' 
                            : 'border-green-200 hover:border-green-400 hover:shadow-md'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Upload className="w-8 h-8 text-green-900" />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-900 mb-3">
                            Upload Files
                        </h3>
                        <p className="text-green-700 mb-6 leading-relaxed">
                            Drag & drop your files here or click to browse
                        </p>
                        
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Choose Files
                        </button>
                        
                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={handleFileSelect}
                            className="hidden"
                        />

                        {/* Supported Formats */}
                        <div className="mt-6 pt-6 border-t border-green-100">
                            <p className="text-sm text-green-600 mb-3 font-medium">Supported Formats:</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['PDF', 'JPG', 'PNG', 'DOC'].map(format => (
                                    <span 
                                        key={format}
                                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                        {format}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Camera Card */}
                <div className="bg-white rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all duration-300">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Camera className="w-8 h-8 text-green-900" />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-900 mb-3">
                            Take Photos
                        </h3>
                        <p className="text-green-700 mb-6 leading-relaxed">
                            Use your camera to capture prescriptions, lab reports, or any medical documents
                        </p>
                        
                        <button
                            onClick={handleTakePhoto}
                            className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Open Camera
                        </button>

                        {/* Camera Tips */}
                        <div className="mt-6 pt-6 border-t border-green-100">
                            <p className="text-sm text-green-600 mb-3 font-medium">Tips for best results:</p>
                            <ul className="text-xs text-green-600 space-y-1">
                                <li>• Ensure good lighting</li>
                                <li>• Keep the document flat</li>
                                <li>• Avoid shadows and glare</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Selected Files Section */}
            {selectedFiles.length > 0 && (
                <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-sm mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-green-900">
                            Selected Files ({selectedFiles.length})
                        </h3>
                        <button
                            onClick={() => setSelectedFiles([])}
                            className="text-green-700 hover:text-green-900 text-sm font-medium flex items-center"
                        >
                            Clear All
                            <X className="w-4 h-4 ml-1" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {selectedFiles.map((file, index) => (
                            <div 
                                key={index}
                                className="flex items-center justify-between bg-green-50 rounded-2xl p-5 border border-green-200 hover:border-green-300 transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-green-200">
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
                                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

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
                                className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
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
                                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Next Button */}
            <div className="text-center">
                <button
                    onClick={onNext}
                    disabled={selectedFiles.length === 0}
                    className={`px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                        selectedFiles.length > 0
                            ? 'bg-green-900 hover:bg-green-800 text-white shadow-2xl hover:shadow-3xl'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Continue to Visit Preparation
                    <ChevronRight className="w-5 h-5 ml-3 inline" />
                </button>
                
                {selectedFiles.length === 0 && (
                    <p className="text-green-600 mt-4 text-sm">
                        Please upload at least one file to continue
                    </p>
                )}
            </div>
        </div>
    );
};

export default UploadStep;