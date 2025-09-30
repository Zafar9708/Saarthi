// import React, { useState } from 'react';

// const CalendarStep = ({ 
//     doctor, 
//     selectedDate, 
//     selectedTime, 
//     appointmentType, 
//     onDateChange, 
//     onTimeChange, 
//     onAppointmentTypeChange,
//     onNext, 
//     onBack 
// }) => {
//     const [currentMonth, setCurrentMonth] = useState(new Date());

//     // Generate time slots based on doctor's availability
//     const generateTimeSlots = () => {
//         const slots = [];
//         // Morning slots: 9:30 AM - 1:00 PM
//         for (let hour = 9; hour <= 12; hour++) {
//             for (let minute of [30, 0]) {
//                 if (hour === 9 && minute === 0) continue; // Start at 9:30
//                 if (hour === 12 && minute === 30) break; // End at 12:30
//                 const timeString = `${hour}:${minute === 0 ? '00' : minute} AM`;
//                 slots.push(timeString);
//             }
//         }
        
//         // Evening slots: 2:00 PM - 4:00 PM
//         for (let hour = 2; hour <= 4; hour++) {
//             for (let minute of [0, 30]) {
//                 if (hour === 4 && minute === 30) break; // End at 4:00 PM
//                 const timeString = `${hour}:${minute === 0 ? '00' : minute} PM`;
//                 slots.push(timeString);
//             }
//         }
//         return slots;
//     };

//     const timeSlots = generateTimeSlots();

//     // Generate calendar days for current month
//     const getDaysInMonth = () => {
//         const year = currentMonth.getFullYear();
//         const month = currentMonth.getMonth();
//         const firstDay = new Date(year, month, 1);
//         const lastDay = new Date(year, month + 1, 0);
//         const days = [];

//         // Add empty cells for days before the first day of the month
//         for (let i = 0; i < firstDay.getDay(); i++) {
//             days.push(null);
//         }

//         // Add days of the month
//         for (let i = 1; i <= lastDay.getDate(); i++) {
//             days.push(new Date(year, month, i));
//         }

//         return days;
//     };

//     const navigateMonth = (direction) => {
//         setCurrentMonth(prev => {
//             const newMonth = new Date(prev);
//             newMonth.setMonth(prev.getMonth() + direction);
//             return newMonth;
//         });
//     };

//     const isDateAvailable = (date) => {
//         // Simple availability check - make weekends unavailable
//         const day = date.getDay();
//         return day !== 0 && day !== 6; // Sunday = 0, Saturday = 6
//     };

//     const formatDate = (date) => {
//         return date.toLocaleDateString('en-US', { 
//             weekday: 'short', 
//             month: 'short', 
//             day: 'numeric' 
//         });
//     };

//     const days = getDaysInMonth();
//     const monthYear = currentMonth.toLocaleDateString('en-US', { 
//         month: 'long', 
//         year: 'numeric' 
//     });

//     return (
//         <div>
//             <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-green-900 mb-4">
//                     Select Date & Time
//                 </h2>
//                 <p className="text-lg text-green-700">
//                     Choose your preferred slot for consultation with Dr. {doctor.name}
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Calendar */}
//                 <div>
//                     {/* Appointment Type Selection */}
//                     <div className="bg-green-50 rounded-2xl p-6 mb-6 border border-green-200">
//                         <h3 className="text-lg font-semibold text-green-900 mb-4">Appointment Type</h3>
//                         <div className="grid grid-cols-2 gap-4">
//                             <button
//                                 onClick={() => onAppointmentTypeChange('video')}
//                                 className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                                     appointmentType === 'video' 
//                                         ? 'border-green-900 bg-green-100' 
//                                         : 'border-green-200 hover:border-green-300'
//                                 }`}
//                             >
//                                 <svg className="w-8 h-8 text-green-900 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                                 </svg>
//                                 <span className="font-medium text-green-900">Video Call</span>
//                                 <p className="text-sm text-green-700 mt-1">Google Meet</p>
//                             </button>
//                             <button
//                                 onClick={() => onAppointmentTypeChange('clinic')}
//                                 className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                                     appointmentType === 'clinic' 
//                                         ? 'border-green-900 bg-green-100' 
//                                         : 'border-green-200 hover:border-green-300'
//                                 }`}
//                             >
//                                 <svg className="w-8 h-8 text-green-900 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                 </svg>
//                                 <span className="font-medium text-green-900">Clinic Visit</span>
//                                 <p className="text-sm text-green-700 mt-1">In-person</p>
//                             </button>
//                         </div>
//                     </div>

//                     {/* Calendar */}
//                     <div className="bg-white rounded-2xl p-6 border border-green-200">
//                         <div className="flex items-center justify-between mb-4">
//                             <button
//                                 onClick={() => navigateMonth(-1)}
//                                 className="p-2 hover:bg-green-100 rounded-lg transition duration-200"
//                             >
//                                 <svg className="w-5 h-5 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                                 </svg>
//                             </button>
//                             <h3 className="text-xl font-semibold text-green-900">{monthYear}</h3>
//                             <button
//                                 onClick={() => navigateMonth(1)}
//                                 className="p-2 hover:bg-green-100 rounded-lg transition duration-200"
//                             >
//                                 <svg className="w-5 h-5 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* Week days header */}
//                         <div className="grid grid-cols-7 gap-1 mb-2">
//                             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//                                 <div key={day} className="text-center text-sm font-medium text-green-700 py-2">
//                                     {day}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Calendar grid */}
//                         <div className="grid grid-cols-7 gap-1">
//                             {days.map((date, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => date && isDateAvailable(date) && onDateChange(date.toISOString().split('T')[0])}
//                                     disabled={!date || !isDateAvailable(date)}
//                                     className={`h-12 rounded-lg transition-all duration-200 ${
//                                         date 
//                                             ? isDateAvailable(date)
//                                                 ? selectedDate === date.toISOString().split('T')[0]
//                                                     ? 'bg-green-900 text-white'
//                                                     : 'bg-green-50 text-green-900 hover:bg-green-100'
//                                                 : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                                             : 'bg-transparent'
//                                     }`}
//                                 >
//                                     {date ? date.getDate() : ''}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column - Time Slots */}
//                 <div>
//                     <div className="bg-green-50 rounded-2xl p-6 border border-green-200 sticky top-4">
//                         <h3 className="text-xl font-semibold text-green-900 mb-4">
//                             {selectedDate ? `Available Slots for ${formatDate(new Date(selectedDate))}` : 'Select a Date First'}
//                         </h3>
                        
//                         {selectedDate ? (
//                             <div>
//                                 <p className="text-green-700 mb-4">
//                                     <strong>Duration:</strong> 30 minutes • <strong>Fee:</strong> {doctor.fee}
//                                 </p>
                                
//                                 <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
//                                     {timeSlots.map((time) => (
//                                         <button
//                                             key={time}
//                                             onClick={() => onTimeChange(time)}
//                                             className={`p-3 rounded-xl text-center transition-all duration-200 ${
//                                                 selectedTime === time
//                                                     ? 'bg-green-900 text-white shadow-lg'
//                                                     : 'bg-white text-green-900 hover:bg-green-100 border border-green-200'
//                                             }`}
//                                         >
//                                             {time}
//                                         </button>
//                                     ))}
//                                 </div>

//                                 {appointmentType === 'video' && (
//                                     <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                                         <div className="flex items-center text-blue-900">
//                                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                                             </svg>
//                                             <span className="text-sm font-medium">Google Meet video conference link will be provided after booking</span>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ) : (
//                             <div className="text-center py-8">
//                                 <svg className="w-16 h-16 text-green-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                                 <p className="text-green-700">Please select a date to see available time slots</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8">
//                 <button
//                     onClick={onBack}
//                     className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-3 rounded-xl font-medium transition duration-200"
//                 >
//                     <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                     </svg>
//                     Back to Visit Prep
//                 </button>
                
//                 <button
//                     onClick={onNext}
//                     disabled={!selectedDate || !selectedTime}
//                     className="bg-green-900 hover:bg-green-800 disabled:bg-green-300 text-white px-8 py-3 rounded-xl font-medium transition duration-200 disabled:cursor-not-allowed"
//                 >
//                     Continue to Payment
//                     <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CalendarStep;

import React, { useState } from 'react';
import { 
    ChevronLeft, 
    ChevronRight, 
    Video, 
    MapPin, 
    Clock, 
    Calendar as CalendarIcon,
    CheckCircle,
    DollarSign,
    Users,
    Shield
} from 'lucide-react';

const CalendarStep = ({ 
    doctor, 
    selectedDate, 
    selectedTime, 
    appointmentType, 
    onDateChange, 
    onTimeChange, 
    onAppointmentTypeChange,
    onNext, 
    onBack 
}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [view, setView] = useState('calendar'); // 'calendar' or 'timeslots'

    // Generate time slots based on doctor's availability
    const generateTimeSlots = () => {
        const slots = [];
        
        // Morning slots: 9:00 AM - 1:00 PM
        for (let hour = 9; hour <= 12; hour++) {
            for (let minute of [0, 30]) {
                if (hour === 12 && minute === 30) break; // End at 12:30
                const timeString = `${hour}:${minute === 0 ? '00' : minute} AM`;
                slots.push({
                    time: timeString,
                    available: Math.random() > 0.3 // 70% availability
                });
            }
        }
        
        // Evening slots: 2:00 PM - 6:00 PM
        for (let hour = 2; hour <= 6; hour++) {
            for (let minute of [0, 30]) {
                if (hour === 6 && minute === 30) break;
                const timeString = `${hour}:${minute === 0 ? '00' : minute} PM`;
                slots.push({
                    time: timeString,
                    available: Math.random() > 0.2 // 80% availability
                });
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    // Generate calendar days for current month
    const getDaysInMonth = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null);
        }

        // Add days of the month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const navigateMonth = (direction) => {
        setCurrentMonth(prev => {
            const newMonth = new Date(prev);
            newMonth.setMonth(prev.getMonth() + direction);
            return newMonth;
        });
    };

    const isDateAvailable = (date) => {
        // Make weekends and past dates unavailable
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const targetDate = new Date(date);
        targetDate.setHours(0, 0, 0, 0);
        
        const day = date.getDay();
        return day !== 0 && day !== 6 && targetDate >= today;
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatTimeDisplay = (time) => {
        return time.replace(' AM', '').replace(' PM', '');
    };

    const getDayAvailability = (date) => {
        if (!date) return 'empty';
        if (!isDateAvailable(date)) return 'unavailable';
        const availableSlots = timeSlots.filter(slot => slot.available).length;
        if (availableSlots === 0) return 'unavailable';
        if (availableSlots <= 3) return 'limited';
        return 'available';
    };

    const days = getDaysInMonth();
    const monthYear = currentMonth.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
    });

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CalendarIcon className="w-10 h-10 text-green-900" />
                </div>
                <h2 className="text-4xl font-bold text-green-900 mb-4">
                    Schedule Your Appointment
                </h2>
                <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
                    Choose your preferred date and time for consultation with Dr. {doctor.name}
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column - Appointment Type & Doctor Info */}
                <div className="space-y-6">
                    {/* Doctor Info Card */}
                    <div className="bg-white rounded-3xl p-6 border border-green-200 shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl font-bold text-green-900">
                                    {doctor.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-green-900">Dr. {doctor.name}</h3>
                                <p className="text-green-700">{doctor.specialization?.[0] || doctor.department}</p>
                                <div className="flex items-center text-sm text-green-600 mt-1">
                                    <Users className="w-4 h-4 mr-1" />
                                    {doctor.experience} years experience
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center py-2 border-b border-green-100">
                                <span className="text-green-700">Consultation Fee</span>
                                <span className="font-semibold text-green-900">{doctor.fee}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-green-100">
                                <span className="text-green-700">Duration</span>
                                <span className="font-semibold text-green-900">30 minutes</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-green-700">Availability</span>
                                <span className="font-semibold text-green-900">Mon - Fri</span>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Type Selection */}
                    <div className="bg-white rounded-3xl p-6 border border-green-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-green-900 mb-4">Appointment Type</h3>
                        <div className="space-y-4">
                            {[
                                {
                                    type: 'video',
                                    label: 'Video Consultation',
                                    description: 'Secure video call from anywhere',
                                    icon: Video,
                                    features: ['Google Meet', 'No travel needed', 'Record available']
                                },
                                {
                                    type: 'clinic',
                                    label: 'Clinic Visit',
                                    description: 'In-person consultation',
                                    icon: MapPin,
                                    features: ['Face-to-face', 'Physical examination', doctor.hospital]
                                }
                            ].map((option) => (
                                <button
                                    key={option.type}
                                    onClick={() => onAppointmentTypeChange(option.type)}
                                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                                        appointmentType === option.type 
                                            ? 'border-green-900 bg-green-50 shadow-lg' 
                                            : 'border-green-200 hover:border-green-400 hover:shadow-md'
                                    }`}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            appointmentType === option.type ? 'bg-green-900' : 'bg-green-100'
                                        }`}>
                                            <option.icon className={`w-6 h-6 ${
                                                appointmentType === option.type ? 'text-white' : 'text-green-900'
                                            }`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className={`font-semibold text-lg ${
                                                    appointmentType === option.type ? 'text-green-900' : 'text-green-900'
                                                }`}>
                                                    {option.label}
                                                </h4>
                                                {appointmentType === option.type && (
                                                    <CheckCircle className="w-5 h-5 text-green-900" />
                                                )}
                                            </div>
                                            <p className="text-green-700 mb-3">{option.description}</p>
                                            <div className="space-y-1">
                                                {option.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center text-sm text-green-600">
                                                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Appointment Summary */}
                    {(selectedDate || selectedTime) && (
                        <div className="bg-green-50 rounded-3xl p-6 border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Appointment Summary
                            </h4>
                            <div className="space-y-3">
                                {selectedDate && (
                                    <div className="flex items-center text-green-800">
                                        <CalendarIcon className="w-4 h-4 mr-3 text-green-600" />
                                        <span>{formatDate(new Date(selectedDate))}</span>
                                    </div>
                                )}
                                {selectedTime && (
                                    <div className="flex items-center text-green-800">
                                        <Clock className="w-4 h-4 mr-3 text-green-600" />
                                        <span>{selectedTime}</span>
                                    </div>
                                )}
                                {appointmentType && (
                                    <div className="flex items-center text-green-800">
                                        {appointmentType === 'video' ? 
                                            <Video className="w-4 h-4 mr-3 text-green-600" /> :
                                            <MapPin className="w-4 h-4 mr-3 text-green-600" />
                                        }
                                        <span>{appointmentType === 'video' ? 'Video Consultation' : 'Clinic Visit'}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Middle Column - Calendar */}
                <div className="bg-white rounded-3xl p-6 border border-green-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={() => navigateMonth(-1)}
                            className="p-3 hover:bg-green-100 rounded-xl transition duration-200 text-green-700 hover:text-green-900"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <h3 className="text-2xl font-semibold text-green-900">{monthYear}</h3>
                        <button
                            onClick={() => navigateMonth(1)}
                            className="p-3 hover:bg-green-100 rounded-xl transition duration-200 text-green-700 hover:text-green-900"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Week days header */}
                    <div className="grid grid-cols-7 gap-2 mb-4">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                            <div key={day} className="text-center text-sm font-semibold text-green-700 py-3">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-2">
                        {days.map((date, index) => {
                            const availability = getDayAvailability(date);
                            const isSelected = date && selectedDate === date.toISOString().split('T')[0];
                            
                            return (
                                <button
                                    key={index}
                                    onClick={() => date && availability !== 'unavailable' && onDateChange(date.toISOString().split('T')[0])}
                                    disabled={!date || availability === 'unavailable'}
                                    className={`aspect-square rounded-xl transition-all duration-200 flex flex-col items-center justify-center relative ${
                                        date 
                                            ? availability !== 'unavailable'
                                                ? isSelected
                                                    ? 'bg-green-900 text-white shadow-lg scale-105'
                                                    : isToday(date)
                                                    ? 'bg-green-100 text-green-900 border-2 border-green-900'
                                                    : 'bg-green-50 text-green-900 hover:bg-green-100 hover:shadow-md'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-transparent'
                                    }`}
                                >
                                    {date && (
                                        <>
                                            <span className={`text-lg font-semibold ${
                                                isSelected ? 'text-white' : 
                                                availability === 'limited' ? 'text-orange-600' : 'text-green-900'
                                            }`}>
                                                {date.getDate()}
                                            </span>
                                            {availability === 'limited' && !isSelected && (
                                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-1"></div>
                                            )}
                                            {availability === 'available' && !isSelected && (
                                                <div className="w-1 h-1 bg-green-500 rounded-full mt-1"></div>
                                            )}
                                        </>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Calendar Legend */}
                    <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-green-100">
                        <div className="flex items-center text-xs text-green-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Available
                        </div>
                        <div className="flex items-center text-xs text-green-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                            Limited
                        </div>
                        <div className="flex items-center text-xs text-green-700">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                            Unavailable
                        </div>
                    </div>
                </div>

                {/* Right Column - Time Slots */}
                <div className="bg-white rounded-3xl p-6 border border-green-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-green-900">
                            Available Time Slots
                        </h3>
                        {selectedDate && (
                            <div className="text-green-700 text-sm bg-green-100 px-3 py-1 rounded-full">
                                {formatDate(new Date(selectedDate))}
                            </div>
                        )}
                    </div>
                    
                    {selectedDate ? (
                        <div>
                            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                                {timeSlots.map((slot, index) => (
                                    <button
                                        key={index}
                                        onClick={() => slot.available && onTimeChange(slot.time)}
                                        disabled={!slot.available}
                                        className={`p-4 rounded-2xl text-center transition-all duration-200 border-2 ${
                                            selectedTime === slot.time
                                                ? 'bg-green-900 text-white border-green-900 shadow-lg scale-105'
                                                : slot.available
                                                ? 'bg-green-50 text-green-900 border-green-200 hover:bg-green-100 hover:border-green-300 hover:shadow-md'
                                                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                        }`}
                                    >
                                        <div className="font-semibold text-lg mb-1">
                                            {formatTimeDisplay(slot.time)}
                                        </div>
                                        <div className={`text-xs ${
                                            selectedTime === slot.time ? 'text-green-200' : 
                                            slot.available ? 'text-green-600' : 'text-gray-500'
                                        }`}>
                                            {slot.available ? 'Available' : 'Booked'}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Appointment Type Notice */}
                            <div className={`mt-6 p-4 rounded-2xl border ${
                                appointmentType === 'video' 
                                    ? 'bg-blue-50 border-blue-200' 
                                    : 'bg-orange-50 border-orange-200'
                            }`}>
                                <div className="flex items-start space-x-3">
                                    {appointmentType === 'video' ? (
                                        <>
                                            <Video className="w-5 h-5 text-blue-600 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-blue-900 mb-1">Video Consultation</h4>
                                                <p className="text-blue-700 text-sm">
                                                    Google Meet link will be sent to your email and SMS 30 minutes before your appointment.
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-orange-900 mb-1">Clinic Visit</h4>
                                                <p className="text-orange-700 text-sm">
                                                    Please arrive 15 minutes early at {doctor.hospital} for your appointment.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <CalendarIcon className="w-16 h-16 text-green-300 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-green-900 mb-2">Select a Date</h4>
                            <p className="text-green-700">Choose a date from the calendar to see available time slots</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-green-200">
                <button
                    onClick={onBack}
                    className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back to Health Goals
                </button>

                <div className="text-center">
                    <div className="flex items-center text-green-700 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Step 3 of 4 - Scheduling</span>
                    </div>
                    <div className="w-48 bg-green-100 rounded-full h-2">
                        <div className="bg-green-900 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                    </div>
                </div>

                <button
                    onClick={onNext}
                    disabled={!selectedDate || !selectedTime}
                    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 ${
                        selectedDate && selectedTime
                            ? 'bg-green-900 hover:bg-green-800 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Continue to Payment
                    <ChevronRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default CalendarStep;