// import React, { useState } from 'react';

// const PaymentStep = ({ doctor, selectedDate, selectedTime, onDateChange, onTimeChange, onComplete, onBack }) => {
//     const [selectedPayment, setSelectedPayment] = useState('card');
//     const [appointmentType, setAppointmentType] = useState('video');

//     // Generate time slots
//     const timeSlots = [];
//     for (let hour = 9; hour <= 17; hour++) {
//         for (let minute = 0; minute < 60; minute += 30) {
//             if (hour === 17 && minute === 30) break;
//             const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//             timeSlots.push(timeString);
//         }
//     }

//     // Generate next 7 days
//     const getNextDays = () => {
//         const days = [];
//         const today = new Date();
//         for (let i = 0; i < 7; i++) {
//             const date = new Date(today);
//             date.setDate(today.getDate() + i);
//             days.push(date);
//         }
//         return days;
//     };

//     return (
//         <div>
//             <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-green-900 mb-4">
//                     Book Your Appointment
//                 </h2>
//                 <p className="text-lg text-green-700">
//                     Finalize your consultation with Dr. {doctor.name}
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Appointment Details */}
//                 <div>
//                     {/* Appointment Type */}
//                     <div className="bg-white rounded-2xl p-6 border border-green-200 mb-6">
//                         <h3 className="text-xl font-semibold text-green-900 mb-4">Appointment Type</h3>
//                         <div className="grid grid-cols-2 gap-4">
//                             <button
//                                 onClick={() => setAppointmentType('video')}
//                                 className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                                     appointmentType === 'video' 
//                                         ? 'border-green-900 bg-green-50' 
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
//                                 onClick={() => setAppointmentType('clinic')}
//                                 className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                                     appointmentType === 'clinic' 
//                                         ? 'border-green-900 bg-green-50' 
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
//                     <div className="bg-white rounded-2xl p-6 border border-green-200 mb-6">
//                         <h3 className="text-xl font-semibold text-green-900 mb-4">Select Date & Time</h3>
                        
//                         {/* Date Selection */}
//                         <div className="mb-6">
//                             <h4 className="font-medium text-green-900 mb-3">Select Date:</h4>
//                             <div className="grid grid-cols-7 gap-2">
//                                 {getNextDays().map((date, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => onDateChange(date.toISOString().split('T')[0])}
//                                         className={`p-3 rounded-lg text-center transition-all duration-200 ${
//                                             selectedDate === date.toISOString().split('T')[0]
//                                                 ? 'bg-green-900 text-white'
//                                                 : 'bg-green-50 text-green-900 hover:bg-green-100'
//                                         }`}
//                                     >
//                                         <div className="text-xs">{date.toLocaleDateString('en', { weekday: 'short' })}</div>
//                                         <div className="font-bold">{date.getDate()}</div>
//                                         <div className="text-xs">{date.toLocaleDateString('en', { month: 'short' })}</div>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Time Selection */}
//                         {selectedDate && (
//                             <div>
//                                 <h4 className="font-medium text-green-900 mb-3">Select Time (30-min appointments):</h4>
//                                 <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
//                                     {timeSlots.map((time) => (
//                                         <button
//                                             key={time}
//                                             onClick={() => onTimeChange(time)}
//                                             className={`p-2 rounded-lg text-center transition-all duration-200 ${
//                                                 selectedTime === time
//                                                     ? 'bg-green-900 text-white'
//                                                     : 'bg-green-50 text-green-900 hover:bg-green-100'
//                                             }`}
//                                         >
//                                             {time}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Right Column - Payment */}
//                 <div>
//                     <div className="bg-white rounded-2xl p-6 border border-green-200 sticky top-4">
//                         <h3 className="text-xl font-semibold text-green-900 mb-4">Payment Details</h3>
                        
//                         {/* Appointment Summary */}
//                         <div className="bg-green-50 rounded-xl p-4 mb-6">
//                             <h4 className="font-semibold text-green-900 mb-2">Appointment Summary</h4>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between">
//                                     <span>Consultation Fee</span>
//                                     <span>{doctor.fee}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Platform Fee</span>
//                                     <span>₹50</span>
//                                 </div>
//                                 <div className="flex justify-between font-semibold border-t border-green-200 pt-2">
//                                     <span>
//   ₹{(parseInt(doctor.fee?.replace('₹', '') || 0) + 50)}
// </span>

//                                 </div>
//                             </div>
//                         </div>

//                         {/* Payment Methods */}
//                         <div className="mb-6">
//                             <h4 className="font-medium text-green-900 mb-3">Payment Method</h4>
//                             <div className="space-y-3">
//                                 {[
//                                     { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
//                                     { id: 'upi', label: 'UPI Payment', icon: '📱' },
//                                     { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
//                                     { id: 'wallet', label: 'Wallet', icon: '👛' }
//                                 ].map((method) => (
//                                     <label key={method.id} className="flex items-center p-3 border border-green-200 rounded-lg cursor-pointer hover:bg-green-50">
//                                         <input
//                                             type="radio"
//                                             name="payment"
//                                             value={method.id}
//                                             checked={selectedPayment === method.id}
//                                             onChange={(e) => setSelectedPayment(e.target.value)}
//                                             className="text-green-900 focus:ring-green-500"
//                                         />
//                                         <span className="ml-3 text-lg mr-2">{method.icon}</span>
//                                         <span className="text-green-900">{method.label}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Complete Booking */}
//                         <button
//                             onClick={onComplete}
//                             disabled={!selectedDate || !selectedTime}
//                             className="w-full bg-green-900 hover:bg-green-800 disabled:bg-green-300 text-white py-4 rounded-xl font-semibold text-lg transition duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
//                         >
//                             {selectedDate && selectedTime ? `Pay ${doctor.fee} & Confirm Booking` : 'Select Date & Time'}
//                         </button>

//                         <p className="text-center text-green-700 text-sm mt-4">
//                             💻 Google Meet link will be shared after payment
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8">
//                 <button
//                     onClick={onBack}
//                     className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-3 rounded-xl font-medium transition duration-200"
//                 >
//                     Back to Visit Preparation
//                 </button>
//             </div>
//         </div>
//     );
// };


// export default PaymentStep;


// import React, { useState } from 'react';

// const PaymentStep = ({ doctor, onComplete, onBack }) => {
//     const [selectedPayment, setSelectedPayment] = useState('card');

//     return (
//         <div>
//             <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-green-900 mb-4">
//                     Payment
//                 </h2>
//                 <p className="text-lg text-green-700">
//                     Complete your consultation with Dr. {doctor.name}
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Payment Column */}
//                 <div>
//                     <div className="bg-white rounded-2xl p-6 border border-green-200 sticky top-4">
//                         <h3 className="text-xl font-semibold text-green-900 mb-4">Payment Details</h3>
                        
//                         {/* Consultation Summary */}
//                         <div className="bg-green-50 rounded-xl p-4 mb-6">
//                             <h4 className="font-semibold text-green-900 mb-2">Consultation Summary</h4>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between">
//                                     <span>Consultation Fee</span>
//                                     <span>{doctor.fee}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Platform Fee</span>
//                                     <span>₹50</span>
//                                 </div>
//                                 <div className="flex justify-between font-semibold border-t border-green-200 pt-2">
//                                     <span>Total</span>
//                                     <span>₹{(parseInt(doctor.fee?.replace('₹', '') || 0) + 50)}</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Payment Methods */}
//                         <div className="mb-6">
//                             <h4 className="font-medium text-green-900 mb-3">Payment Method</h4>
//                             <div className="space-y-3">
//                                 {[
//                                     { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
//                                     { id: 'upi', label: 'UPI Payment', icon: '📱' },
//                                     { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
//                                     { id: 'wallet', label: 'Wallet', icon: '👛' }
//                                 ].map((method) => (
//                                     <label
//                                         key={method.id}
//                                         className="flex items-center p-3 border border-green-200 rounded-lg cursor-pointer hover:bg-green-50"
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="payment"
//                                             value={method.id}
//                                             checked={selectedPayment === method.id}
//                                             onChange={(e) => setSelectedPayment(e.target.value)}
//                                             className="text-green-900 focus:ring-green-500"
//                                         />
//                                         <span className="ml-3 text-lg mr-2">{method.icon}</span>
//                                         <span className="text-green-900">{method.label}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Confirm Payment */}
//                         <button
//                             onClick={onComplete}
//                             className="w-full bg-green-900 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-lg transition duration-200 shadow-lg hover:shadow-xl"
//                         >
//                             Pay & Confirm Booking
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8">
//                 <button
//                     onClick={onBack}
//                     className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-3 rounded-xl font-medium transition duration-200"
//                 >
//                     Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PaymentStep;


import React, { useState } from 'react';
import { 
    CreditCard, 
    Smartphone, 
    Building, 
    Wallet,
    Eye,
    EyeOff,
    CheckCircle,
    Lock
} from 'lucide-react';

const PaymentStep = ({ doctor, onComplete, onBack }) => {
    const [selectedPayment, setSelectedPayment] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        name: '',
        expiry: '',
        cvv: '',
        saveCard: false
    });
    const [upiId, setUpiId] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [selectedWallet, setSelectedWallet] = useState('');
    const [showCvv, setShowCvv] = useState(false);
    const [processing, setProcessing] = useState(false);

    const paymentMethods = [
        { 
            id: 'card', 
            label: 'Credit/Debit Card', 
            icon: <CreditCard className="w-5 h-5" />,
            description: 'Pay using your credit or debit card'
        },
        { 
            id: 'upi', 
            label: 'UPI Payment', 
            icon: <Smartphone className="w-5 h-5" />,
            description: 'Instant payment using UPI ID'
        },
        { 
            id: 'netbanking', 
            label: 'Net Banking', 
            icon: <Building className="w-5 h-5" />,
            description: 'Transfer through your bank account'
        },
        { 
            id: 'wallet', 
            label: 'Digital Wallet', 
            icon: <Wallet className="w-5 h-5" />,
            description: 'Pay using digital wallets'
        }
    ];

    const banks = [
        'State Bank of India',
        'HDFC Bank',
        'ICICI Bank',
        'Axis Bank',
        'Punjab National Bank',
        'Bank of Baroda',
        'Canara Bank',
        'Union Bank of India'
    ];

    const wallets = [
        'Paytm Wallet',
        'PhonePe Wallet',
        'Google Pay',
        'Amazon Pay',
        'MobiKwik'
    ];

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        return parts.length ? parts.join(' ') : value;
    };

    const formatExpiry = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
        }
        return v;
    };

    const handleCardNumberChange = (e) => {
        const formatted = formatCardNumber(e.target.value);
        setCardDetails(prev => ({ ...prev, number: formatted }));
    };

    const handleExpiryChange = (e) => {
        const formatted = formatExpiry(e.target.value);
        setCardDetails(prev => ({ ...prev, expiry: formatted }));
    };

    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 3);
        setCardDetails(prev => ({ ...prev, cvv: value }));
    };

    const getCardType = (number) => {
        const cleanNumber = number.replace(/\s/g, '');
        if (/^4/.test(cleanNumber)) return 'Visa';
        if (/^5[1-5]/.test(cleanNumber)) return 'Mastercard';
        if (/^3[47]/.test(cleanNumber)) return 'American Express';
        if (/^6(?:011|5)/.test(cleanNumber)) return 'Discover';
        return 'Card';
    };

    const validateForm = () => {
        switch (selectedPayment) {
            case 'card':
                return cardDetails.number.replace(/\s/g, '').length === 16 &&
                       cardDetails.name.trim().length > 0 &&
                       cardDetails.expiry.length === 5 &&
                       cardDetails.cvv.length === 3;
            case 'upi':
                return upiId.includes('@') && upiId.length > 5;
            case 'netbanking':
                return selectedBank !== '';
            case 'wallet':
                return selectedWallet !== '';
            default:
                return false;
        }
    };

    const handlePayment = async () => {
        setProcessing(true);
        
        // Simulate payment processing
        setTimeout(() => {
            setProcessing(false);
            onComplete();
        }, 2000);
    };

    const totalAmount = (parseInt(doctor.fee?.replace('₹', '') || 0) + 50);

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-900 mb-4">
                    Secure Payment
                </h2>
                <p className="text-lg text-green-700">
                    Complete your consultation with Dr. {doctor.name}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Payment Methods Column */}
                <div className="space-y-6">
                    {/* Payment Methods */}
                    <div className="bg-white rounded-2xl p-6 border border-green-200">
                        <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                            <Lock className="w-5 h-5 mr-2" />
                            Choose Payment Method
                        </h3>
                        
                        <div className="space-y-3">
                            {paymentMethods.map((method) => (
                                <label
                                    key={method.id}
                                    className={`flex items-start p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                                        selectedPayment === method.id
                                            ? 'border-green-500 bg-green-50 shadow-sm'
                                            : 'border-green-200 hover:bg-green-50'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={method.id}
                                        checked={selectedPayment === method.id}
                                        onChange={(e) => setSelectedPayment(e.target.value)}
                                        className="text-green-900 focus:ring-green-500 mt-1"
                                    />
                                    <div className="ml-3 flex-1">
                                        <div className="flex items-center">
                                            <span className="text-green-900 mr-3">{method.icon}</span>
                                            <span className="font-semibold text-green-900">{method.label}</span>
                                        </div>
                                        <p className="text-sm text-green-600 mt-1">{method.description}</p>
                                    </div>
                                    {selectedPayment === method.id && (
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Payment Details Based on Selection */}
                    {selectedPayment === 'card' && (
                        <div className="bg-white rounded-2xl p-6 border border-green-200">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">Card Details</h3>
                            
                            {/* Card Preview */}
                            {cardDetails.number && (
                                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-4 mb-4 text-white">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-sm opacity-90">{getCardType(cardDetails.number)}</span>
                                        <div className="flex space-x-2">
                                            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                                            <div className="w-8 h-8 bg-red-400 rounded-full opacity-50"></div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-mono tracking-wider mb-2">
                                        {cardDetails.number || '•••• •••• •••• ••••'}
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>{cardDetails.name || 'CARD HOLDER'}</span>
                                        <span>{cardDetails.expiry || 'MM/YY'}</span>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-green-900 mb-2">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        value={cardDetails.number}
                                        onChange={handleCardNumberChange}
                                        maxLength={19}
                                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-green-900 mb-2">
                                        Card Holder Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={cardDetails.name}
                                        onChange={(e) => setCardDetails(prev => ({ ...prev, name: e.target.value }))}
                                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-green-900 mb-2">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            value={cardDetails.expiry}
                                            onChange={handleExpiryChange}
                                            maxLength={5}
                                            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-green-900 mb-2">
                                            CVV
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showCvv ? "text" : "password"}
                                                placeholder="123"
                                                value={cardDetails.cvv}
                                                onChange={handleCvvChange}
                                                maxLength={3}
                                                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCvv(!showCvv)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600"
                                            >
                                                {showCvv ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={cardDetails.saveCard}
                                        onChange={(e) => setCardDetails(prev => ({ ...prev, saveCard: e.target.checked }))}
                                        className="text-green-900 focus:ring-green-500"
                                    />
                                    <span className="ml-2 text-sm text-green-700">Save card for future payments</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {selectedPayment === 'upi' && (
                        <div className="bg-white rounded-2xl p-6 border border-green-200">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">UPI Payment</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-green-900 mb-2">
                                        UPI ID
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="yourname@upi"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                    <p className="text-sm text-green-600 mt-1">Enter your UPI ID (e.g., john@paytm, 9876543210@ybl)</p>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-green-900 mb-2">Popular UPI Apps</h4>
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        {['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay', 'WhatsApp Pay'].map(app => (
                                            <div key={app} className="bg-white rounded-lg p-2 border border-green-200">
                                                <span className="text-xs text-green-900">{app}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedPayment === 'netbanking' && (
                        <div className="bg-white rounded-2xl p-6 border border-green-200">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">Net Banking</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-green-900 mb-2">
                                        Select Bank
                                    </label>
                                    <select
                                        value={selectedBank}
                                        onChange={(e) => setSelectedBank(e.target.value)}
                                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option value="">Choose your bank</option>
                                        {banks.map(bank => (
                                            <option key={bank} value={bank}>{bank}</option>
                                        ))}
                                    </select>
                                </div>
                                {selectedBank && (
                                    <div className="bg-green-50 rounded-xl p-4">
                                        <p className="text-sm text-green-700">
                                            You will be redirected to {selectedBank}'s secure banking portal to complete your payment.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {selectedPayment === 'wallet' && (
                        <div className="bg-white rounded-2xl p-6 border border-green-200">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">Digital Wallet</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-green-900 mb-2">
                                        Select Wallet
                                    </label>
                                    <select
                                        value={selectedWallet}
                                        onChange={(e) => setSelectedWallet(e.target.value)}
                                        className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option value="">Choose your wallet</option>
                                        {wallets.map(wallet => (
                                            <option key={wallet} value={wallet}>{wallet}</option>
                                        ))}
                                    </select>
                                </div>
                                {selectedWallet && (
                                    <div className="bg-green-50 rounded-xl p-4">
                                        <p className="text-sm text-green-700">
                                            You will be redirected to {selectedWallet} to complete your payment.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Summary Column */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 border border-green-200 sticky top-4">
                        <h3 className="text-xl font-semibold text-green-900 mb-4">Order Summary</h3>
                        
                        {/* Consultation Summary */}
                        <div className="bg-green-50 rounded-xl p-4 mb-6">
                            <h4 className="font-semibold text-green-900 mb-3">Consultation Details</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-green-700">Doctor</span>
                                    <span className="font-medium text-green-900">Dr. {doctor.name}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-700">Specialization</span>
                                    <span className="text-green-900">{doctor.specialization?.[0] || doctor.department}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-700">Experience</span>
                                    <span className="text-green-900">{doctor.experience} years</span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Breakdown */}
                        <div className="space-y-3 mb-6">
                            <h4 className="font-semibold text-green-900">Payment Breakdown</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-green-700">Consultation Fee</span>
                                    <span className="text-green-900">{doctor.fee}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-green-700">Platform Fee</span>
                                    <span className="text-green-900">₹50</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-green-700">GST (18%)</span>
                                    <span className="text-green-900">₹{Math.round(totalAmount * 0.18)}</span>
                                </div>
                                <div className="flex justify-between font-semibold text-lg border-t border-green-200 pt-3">
                                    <span className="text-green-900">Total Amount</span>
                                    <span className="text-green-900">₹{totalAmount + Math.round(totalAmount * 0.18)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Security Features */}
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                            <div className="flex items-center mb-2">
                                <Lock className="w-4 h-4 text-blue-600 mr-2" />
                                <span className="text-sm font-semibold text-blue-900">Secure Payment</span>
                            </div>
                            <p className="text-xs text-blue-700">
                                Your payment is secured with 256-bit SSL encryption. We do not store your payment details.
                            </p>
                        </div>

                        {/* Pay Button */}
                        <button
                            onClick={handlePayment}
                            disabled={!validateForm() || processing}
                            className={`w-full mt-6 py-4 rounded-xl font-semibold text-lg transition duration-200 flex items-center justify-center ${
                                validateForm() && !processing
                                    ? 'bg-green-900 hover:bg-green-800 text-white shadow-lg hover:shadow-xl'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {processing ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Processing Payment...
                                </>
                            ) : (
                                `Pay ₹${totalAmount + Math.round(totalAmount * 0.18)}`
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
                <button
                    onClick={onBack}
                    className="bg-green-100 hover:bg-green-200 text-green-900 px-8 py-3 rounded-xl font-medium transition duration-200"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default PaymentStep;