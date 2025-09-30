


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // Import useAuth

// const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth(); // Get login function from AuthContext

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         // Basic validation
//         if (!email || !password) {
//             setError('Please enter both email and password');
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await fetch(`${API_BASE_URL}/auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (data.success) {
//                 // Save token and user data to localStorage
//                 localStorage.setItem('saarthi_token', data.data.token);
//                 localStorage.setItem('saarthi_user', JSON.stringify(data.data));
                
//                 // IMPORTANT: Update AuthContext state
//                 login(data.data);
                
//                 console.log('Login successful:', data.data);
                
//                 // Redirect based on user role
//                 if (data.data.role === 'admin') {
//                     navigate('/admin/dashboard');
//                 } else if (data.data.role === 'doctor') {
//                     navigate('/doctor/dashboard');
//                 } else {
//                     navigate('/dashboard');
//                 }
//             } else {
//                 setError(data.message || 'Login failed');
//             }
//         } catch (error) {
//             setError('Network error. Please try again.');
//             console.error('Login error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleContinueAsGuest = async () => {
//         setLoading(true);
//         setError('');

//         try {
//             const response = await fetch(`${API_BASE_URL}/auth/guest`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             const data = await response.json();

//             if (data.success) {
//                 // Save guest token to localStorage
//                 localStorage.setItem('saarthi_token', data.data.token);
//                 localStorage.setItem('saarthi_user', JSON.stringify(data.data));
                
//                 // IMPORTANT: Update AuthContext state for guest user too
//                 login(data.data);
                
//                 console.log('Guest session created:', data.data);
//                 navigate('/booking');
//             } else {
//                 setError(data.message || 'Guest session creation failed');
//             }
//         } catch (error) {
//             setError('Network error. Please try again.');
//             console.error('Guest session error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleGoogleSignIn=()=>{
//         console.log("Google Sign In")
//     }

//     const handleSignUp = () => {
//         navigate('/register');
//     };

//     const handleForgotPassword = () => {
//         navigate('/forgot-password');
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md mx-auto">

//                 {/* Logo and Welcome Section */}
//                 <div className="text-center mb-8">
//                     <div className="flex justify-center mb-4">
//                         <img
//                             src="/saarthi.png"
//                             alt="Saarthi Logo"
//                             className="h-16 w-16 object-contain"
//                         />
//                     </div>
//                     <h1 className="text-3xl font-bold text-green-900 mb-2">Welcome to Saarthi</h1>
//                     <p className="text-gray-600">
//                         Login or sign up with Saarthi to start booking an appointment
//                     </p>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                     <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//                         {error}
//                     </div>
//                 )}

//                 {/* Sign In Form */}
//                 <div className="bg-white rounded-2xl shadow-md p-8">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Email Field */}
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Email address
//                             </label>
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//                                 placeholder="Enter your email"
//                                 disabled={loading}
//                             />
//                         </div>

//                         {/* Password Field */}
//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//                                 placeholder="Enter your password"
//                                 disabled={loading}
//                             />
//                         </div>

//                         {/* Forgot Password Link */}
//                         <div className="text-right">
//                             <button 
//                                 type="button"
//                                 onClick={handleForgotPassword}
//                                 className="text-sm text-green-700 hover:text-green-900 transition duration-200"
//                             >
//                                 Forgot password?
//                             </button>
//                         </div>

//                         {/* Continue Button */}
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                         >
//                             {loading ? (
//                                 <div className="flex items-center justify-center">
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Signing In...
//                                 </div>
//                             ) : (
//                                 'Continue'
//                             )}
//                         </button>
//                     </form>

//                     {/* Sign Up Link */}
//                     <div className="text-center mt-6">
//                         <p className="text-sm text-gray-600">
//                             Not already a user?{' '}
//                             <button 
//                                 onClick={handleSignUp}
//                                 className="text-green-700 hover:text-green-900 font-medium transition duration-200"
//                                 disabled={loading}
//                             >
//                                 Sign Up
//                             </button>
//                         </p>
//                     </div>

//                     {/* Divider */}
//                     <div className="relative my-8">
//                         <div className="absolute inset-0 flex items-center">
//                             <div className="w-full border-t border-gray-300" />
//                         </div>
//                         <div className="relative flex justify-center text-sm">
//                             <span className="px-2 bg-white text-gray-500">Or</span>
//                         </div>
//                     </div>

//                     {/* Google Sign In Button */}
//                     <button
//                         onClick={handleGoogleSignIn}
//                         disabled={loading}
//                         className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
//                             <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                             <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                             <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//                             <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//                         </svg>
//                         Continue with Google
//                     </button>

//                     {/* Continue as Guest Button */}
//                     <button
//                         onClick={handleContinueAsGuest}
//                         disabled={loading}
//                         className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium mt-4 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         {loading ? 'Creating Guest Session...' : 'Continue as Guest'}
//                     </button>
//                 </div>

//                 {/* Additional Information */}
//                 <div className="text-center mt-8">
//                     <p className="text-sm text-gray-600">
//                         By continuing, you agree to our{' '}
//                         <a href="/terms" className="text-green-700 hover:text-green-900 transition duration-200">
//                             Terms of Service
//                         </a>{' '}
//                         and{' '}
//                         <a href="/privacy" className="text-green-700 hover:text-green-900 transition duration-200">
//                             Privacy Policy
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth

const API_BASE_URL = 'https://saarthibackend-epk8.onrender.com/api/v1';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // Added for success message
    const navigate = useNavigate();
    const { login } = useAuth(); // Get login function from AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Save token and user data to localStorage
                localStorage.setItem('saarthi_token', data.data.token);
                localStorage.setItem('saarthi_user', JSON.stringify(data.data));
                
                // Update AuthContext state
                login(data.data);
                
                // Show success message
                setSuccess('✅ Successfully logged in! Redirecting...');
                console.log('Login successful:', data.data);

                // Redirect after 3 seconds
                setTimeout(() => {
                    if (data.data.role === 'admin') {
                        navigate('/admin/dashboard');
                    } else if (data.data.role === 'doctor') {
                        navigate('/doctor/dashboard');
                    } else {
                        navigate('/dashboard');
                    }
                }, 3000);
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('Network error. Please try again.');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleContinueAsGuest = async () => {
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${API_BASE_URL}/auth/guest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('saarthi_token', data.data.token);
                localStorage.setItem('saarthi_user', JSON.stringify(data.data));
                
                login(data.data);
                console.log('Guest session created:', data.data);
                navigate('/booking');
            } else {
                setError(data.message || 'Guest session creation failed');
            }
        } catch (error) {
            setError('Network error. Please try again.');
            console.error('Guest session error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        console.log("Google Sign In");
    }

    const handleSignUp = () => {
        navigate('/register');
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">

                {/* Logo and Welcome Section */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/saarthi.png"
                            alt="Saarthi Logo"
                            className="h-16 w-16 object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-green-900 mb-2">Welcome to Saarthi</h1>
                    <p className="text-gray-600">
                        Login or sign up with Saarthi to start booking an appointment
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                {/* Success Message */}
                {success && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                        {success}
                    </div>
                )}

                {/* Sign In Form */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                                placeholder="Enter your email"
                                disabled={loading}
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                                placeholder="Enter your password"
                                disabled={loading}
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <button 
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-sm text-green-700 hover:text-green-900 transition duration-200"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Continue Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing In...
                                </div>
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Not already a user?{' '}
                            <button 
                                onClick={handleSignUp}
                                className="text-green-700 hover:text-green-900 font-medium transition duration-200"
                                disabled={loading}
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or</span>
                        </div>
                    </div>

                    {/* Google Sign In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Continue as Guest Button */}
                    <button
                        onClick={handleContinueAsGuest}
                        disabled={loading}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium mt-4 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating Guest Session...' : 'Continue as Guest'}
                    </button>
                </div>

                {/* Additional Information */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-600">
                        By continuing, you agree to our{' '}
                        <a href="/terms" className="text-green-700 hover:text-green-900 transition duration-200">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-green-700 hover:text-green-900 transition duration-200">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
