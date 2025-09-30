// components/ProtectedRoute.js
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-green-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900"></div>
            </div>
        );
    }

    if (!user) {
        // Redirect to signin page with return url
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    // If a specific role is required and user doesn't have it
    if (requiredRole && user.role !== requiredRole) {
        // Redirect to appropriate dashboard based on user's actual role
        if (user.role === 'admin') {
            return <Navigate to="/admin/dashboard" replace />;
        } else if (user.role === 'doctor') {
            return <Navigate to="/doctor/dashboard" replace />;
        } else {
            return <Navigate to="/dashboard" replace />;
        }
    }

    return children;
};

export default ProtectedRoute;