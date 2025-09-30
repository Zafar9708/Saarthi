// import React, { useState, useRef } from 'react';

// const VisitPrepStep = ({ doctor, onNext, onBack }) => {
//     const [isRecording, setIsRecording] = useState(false);
//     const [recordedAudio, setRecordedAudio] = useState(null);
//     const [recordingTime, setRecordingTime] = useState(0);
//     const mediaRecorderRef = useRef(null);
//     const audioChunksRef = useRef([]);
//     const timerRef = useRef(null);

//     const startRecording = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             mediaRecorderRef.current = new MediaRecorder(stream);
//             audioChunksRef.current = [];

//             mediaRecorderRef.current.ondataavailable = (event) => {
//                 audioChunksRef.current.push(event.data);
//             };

//             mediaRecorderRef.current.onstop = () => {
//                 const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
//                 const audioUrl = URL.createObjectURL(audioBlob);
//                 setRecordedAudio(audioUrl);
//             };

//             mediaRecorderRef.current.start();
//             setIsRecording(true);
//             setRecordingTime(0);

//             timerRef.current = setInterval(() => {
//                 setRecordingTime(prev => prev + 1);
//             }, 1000);

//         } catch (error) {
//             alert('Unable to access microphone. Please check permissions.');
//         }
//     };

//     const stopRecording = () => {
//         if (mediaRecorderRef.current && isRecording) {
//             mediaRecorderRef.current.stop();
//             mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
//             setIsRecording(false);
//             clearInterval(timerRef.current);
//         }
//     };

//     const formatTime = (seconds) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     };

//     return (
//         <div>
//             <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-green-900 mb-4">
//                     Set Goals for Your Visit
//                 </h2>
//                 <p className="text-lg text-green-700">
//                     Help Dr. {doctor.name} understand your health concerns better
//                 </p>
//             </div>

//             {/* Health Situation Card */}
//             <div className="bg-green-50 rounded-2xl p-6 mb-8 border border-green-200">
//                 <h3 className="text-xl font-semibold text-green-900 mb-4">
//                     What is your understanding of your current health situation?
//                 </h3>
                
//                 {/* Recording Section */}
//                 <div className="text-center">
//                     {!recordedAudio ? (
//                         <div>
//                             <button
//                                 onMouseDown={startRecording}
//                                 onMouseUp={stopRecording}
//                                 onTouchStart={startRecording}
//                                 onTouchEnd={stopRecording}
//                                 className={`w-32 h-32 rounded-full border-4 flex items-center justify-center mx-auto mb-4 transition-all duration-200 ${
//                                     isRecording 
//                                         ? 'bg-red-500 border-red-600 text-white animate-pulse' 
//                                         : 'bg-green-900 border-green-900 text-white hover:bg-green-800'
//                                 }`}
//                             >
//                                 {isRecording ? (
//                                     <div className="text-center">
//                                         <div className="text-sm">Recording</div>
//                                         <div className="text-lg font-bold">{formatTime(recordingTime)}</div>
//                                     </div>
//                                 ) : (
//                                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
//                                         <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
//                                     </svg>
//                                 )}
//                             </button>
//                             <p className="text-green-700">
//                                 {isRecording ? 'Release to stop recording' : 'Tap and Hold to Record'}
//                             </p>
//                         </div>
//                     ) : (
//                         <div>
//                             <audio controls className="mx-auto mb-4">
//                                 <source src={recordedAudio} type="audio/wav" />
//                                 Your browser does not support the audio element.
//                             </audio>
//                             <button
//                                 onClick={() => setRecordedAudio(null)}
//                                 className="text-green-700 hover:text-green-900"
//                             >
//                                 Record Again
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Additional Notes */}
//                 <div className="mt-6">
//                     <label className="block text-sm font-medium text-green-900 mb-2">
//                         Additional Notes (Optional)
//                     </label>
//                     <textarea
//                         placeholder="Add any additional information about your health concerns..."
//                         rows="4"
//                         className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                     />
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between">
//                 <button
//                     onClick={onBack}
//                     className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-3 rounded-xl font-medium transition duration-200"
//                 >
//                     <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                     </svg>
//                     Back
//                 </button>
                
//                 <button
//                     onClick={onNext}
//                     className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-medium transition duration-200"
//                 >
//                     Continue to Appointment Booking
//                     <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default VisitPrepStep;


import React, { useState, useRef } from 'react';
import { 
    Mic, 
    Square, 
    Play, 
    SquareIcon,
    Trash2, 
    ChevronLeft, 
    ChevronRight,
    Target,
    Heart,
    Clock,
    Edit3,
    CheckCircle
} from 'lucide-react';

const VisitPrepStep = ({ doctor, onNext, onBack }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const [recordingTime, setRecordingTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [healthGoals, setHealthGoals] = useState(['']);
    const [symptoms, setSymptoms] = useState(['']);
    const [currentTab, setCurrentTab] = useState('recording');
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const timerRef = useRef(null);
    const audioRef = useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                audio: { 
                    echoCancellation: true,
                    noiseSuppression: true 
                } 
            });
            mediaRecorderRef.current = new MediaRecorder(stream, {
                mimeType: 'audio/webm;codecs=opus'
            });
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudio(audioUrl);
            };

            mediaRecorderRef.current.start(1000); // Collect data every 1 second
            setIsRecording(true);
            setRecordingTime(0);

            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);

        } catch (error) {
            alert('Unable to access microphone. Please check permissions.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
            clearInterval(timerRef.current);
        }
    };

    const playRecordedAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
    };

    const addHealthGoal = () => {
        setHealthGoals(prev => [...prev, '']);
    };

    const updateHealthGoal = (index, value) => {
        const updatedGoals = [...healthGoals];
        updatedGoals[index] = value;
        setHealthGoals(updatedGoals);
    };

    const removeHealthGoal = (index) => {
        if (healthGoals.length > 1) {
            setHealthGoals(prev => prev.filter((_, i) => i !== index));
        }
    };

    const addSymptom = () => {
        setSymptoms(prev => [...prev, '']);
    };

    const updateSymptom = (index, value) => {
        const updatedSymptoms = [...symptoms];
        updatedSymptoms[index] = value;
        setSymptoms(updatedSymptoms);
    };

    const removeSymptom = (index) => {
        if (symptoms.length > 1) {
            setSymptoms(prev => prev.filter((_, i) => i !== index));
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const canProceed = () => {
        return recordedAudio || 
               healthGoals.some(goal => goal.trim() !== '') || 
               symptoms.some(symptom => symptom.trim() !== '');
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-green-900" />
                </div>
                <h2 className="text-4xl font-bold text-green-900 mb-4">
                    Prepare for Your Visit
                </h2>
                <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
                    Help Dr. {doctor.name} understand your health concerns and goals for better personalized care.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <div className="bg-green-100 rounded-2xl p-2 flex space-x-2">
                    {[
                        { id: 'recording', label: 'Voice Note', icon: Mic },
                        { id: 'goals', label: 'Health Goals', icon: Target },
                        { id: 'symptoms', label: 'Symptoms', icon: Heart }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setCurrentTab(tab.id)}
                            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                                currentTab === tab.id
                                    ? 'bg-green-900 text-white shadow-lg'
                                    : 'text-green-900 hover:bg-green-200'
                            }`}
                        >
                            <tab.icon className="w-5 h-5 mr-2" />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Recording Tab */}
            {currentTab === 'recording' && (
                <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-sm mb-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-green-900 mb-3">
                            Record Your Health Concerns
                        </h3>
                        <p className="text-green-700 text-lg">
                            Describe your symptoms, concerns, and what you hope to achieve from this consultation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        {!recordedAudio ? (
                            <div className="text-center">
                                <button
                                    onMouseDown={startRecording}
                                    onMouseUp={stopRecording}
                                    onTouchStart={startRecording}
                                    onTouchEnd={stopRecording}
                                    className={`w-40 h-40 rounded-full border-4 flex flex-col items-center justify-center mx-auto mb-6 transition-all duration-300 transform hover:scale-105 ${
                                        isRecording 
                                            ? 'bg-red-500 border-red-600 text-white shadow-2xl animate-pulse' 
                                            : 'bg-green-900 border-green-900 text-white hover:bg-green-800 shadow-2xl hover:shadow-3xl'
                                    }`}
                                >
                                    {isRecording ? (
                                        <>
                                            <Square className="w-8 h-8 mb-2" />
                                            <div className="text-lg font-bold">{formatTime(recordingTime)}</div>
                                            <div className="text-sm mt-1">Click to Stop</div>
                                        </>
                                    ) : (
                                        <>
                                            <Mic className="w-10 h-10 mb-3" />
                                            <div className="text-lg font-semibold">Hold to Record</div>
                                        </>
                                    )}
                                </button>
                                
                                <div className="bg-green-50 rounded-2xl p-6 max-w-md mx-auto">
                                    <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                                        <Edit3 className="w-5 h-5 mr-2" />
                                        Tips for Recording:
                                    </h4>
                                    <ul className="text-green-700 space-y-2 text-left">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Speak clearly and at a normal pace
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Describe when symptoms started
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Mention any triggers or patterns
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                            Share what you hope to achieve
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center w-full max-w-md">
                                <div className="bg-green-900 rounded-2xl p-6 mb-6">
                                    <div className="flex items-center justify-center space-x-4">
                                        <button
                                            onClick={playRecordedAudio}
                                            disabled={isPlaying}
                                            className="w-16 h-16 bg-white text-green-900 rounded-full flex items-center justify-center hover:bg-green-50 transition-colors duration-200 disabled:opacity-50"
                                        >
                                            <Play className="w-6 h-6 ml-1" />
                                        </button>
                                        <div className="text-white">
                                            <div className="text-2xl font-bold">{formatTime(recordingTime)}</div>
                                            <div className="text-green-200">Recording</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <audio
                                    ref={audioRef}
                                    src={recordedAudio}
                                    onEnded={handleAudioEnd}
                                    className="hidden"
                                />
                                
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={() => setRecordedAudio(null)}
                                        className="bg-green-100 hover:bg-green-200 text-green-900 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center"
                                    >
                                        <Mic className="w-5 h-5 mr-2" />
                                        Record Again
                                    </button>
                                    <button
                                        onClick={() => setCurrentTab('goals')}
                                        className="bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center"
                                    >
                                        Continue
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Health Goals Tab */}
            {currentTab === 'goals' && (
                <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-sm mb-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-green-900 mb-3">
                            Your Health Goals
                        </h3>
                        <p className="text-green-700 text-lg">
                            What do you hope to achieve from this consultation?
                        </p>
                    </div>

                    <div className="space-y-4 max-w-2xl mx-auto">
                        {healthGoals.map((goal, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-3 flex-shrink-0">
                                    <span className="text-green-900 font-semibold text-sm">{index + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="e.g., Manage my blood pressure better, Understand test results, Get treatment plan..."
                                        value={goal}
                                        onChange={(e) => updateHealthGoal(index, e.target.value)}
                                        className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                                    />
                                </div>
                                {healthGoals.length > 1 && (
                                    <button
                                        onClick={() => removeHealthGoal(index)}
                                        className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors duration-200 mt-3"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        
                        <button
                            onClick={addHealthGoal}
                            className="w-full border-2 border-dashed border-green-300 hover:border-green-500 text-green-700 hover:text-green-900 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-green-50"
                        >
                            + Add Another Goal
                        </button>
                    </div>
                </div>
            )}

            {/* Symptoms Tab */}
            {currentTab === 'symptoms' && (
                <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-sm mb-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-green-900 mb-3">
                            Current Symptoms
                        </h3>
                        <p className="text-green-700 text-lg">
                            Describe what you're currently experiencing
                        </p>
                    </div>

                    <div className="space-y-4 max-w-2xl mx-auto">
                        {symptoms.map((symptom, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-3 flex-shrink-0">
                                    <Heart className="w-4 h-4 text-green-900" />
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="e.g., Headache in the morning, Fatigue after lunch, Chest pain when exercising..."
                                        value={symptom}
                                        onChange={(e) => updateSymptom(index, e.target.value)}
                                        className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                                    />
                                </div>
                                {symptoms.length > 1 && (
                                    <button
                                        onClick={() => removeSymptom(index)}
                                        className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors duration-200 mt-3"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        
                        <button
                            onClick={addSymptom}
                            className="w-full border-2 border-dashed border-green-300 hover:border-green-500 text-green-700 hover:text-green-900 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-green-50"
                        >
                            + Add Another Symptom
                        </button>
                    </div>
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back to Upload
                </button>
                
                <div className="text-center">
                    <div className="flex items-center text-green-700 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Step 2 of 4</span>
                    </div>
                </div>

                <button
                    onClick={onNext}
                    disabled={!canProceed()}
                    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 ${
                        canProceed()
                            ? 'bg-green-900 hover:bg-green-800 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Continue to Schedule
                    <ChevronRight className="w-5 h-5 ml-2" />
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 bg-green-100 rounded-full h-2">
                <div 
                    className="bg-green-900 h-2 rounded-full transition-all duration-500"
                    style={{ width: '50%' }}
                ></div>
            </div>
        </div>
    );
};

export default VisitPrepStep;