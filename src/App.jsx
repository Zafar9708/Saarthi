// import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import SignIn from './pages/SignIn'
// import Dashboard from './components/Dashboard'
// import Register from './pages/Register'
// import {Doctors} from './pages/Doctors/DoctorsList'
// import Diagnostics from './pages/Diagnostics/Diagnostics'
// import Booking from './pages/Bookings/Booking'

// function App() {
//   return (
//     <>
//       <Routes>
//         {/* Each route must be declared directly */}
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/booking/:doctorId" element={<Booking />} />
//         <Route path="/diagnostics" element={<Diagnostics />} />
//       </Routes>
//     </>
//   )
// }

// export default App


// App.js
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoutes';
import SignIn from './pages/SignIn';
import Register from './pages/Register'
import Dashboard from './components/Dashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import DoctorDashboard from './pages/Doctors/DoctorDashboard';
import Appointments from './pages/Doctors/Appointments';
import PatientRecordsPage from './pages/Doctors/PatientRecords';
import PatientDetailsPage from './pages/Patient/PatientDetailsPage';
import { Doctors } from './pages/Doctors/DoctorsList';
import Home from './components/Home'
import Diagnostics from './pages/Diagnostics/Diagnostics'
import Booking from './pages/Bookings/Booking'





function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
       <Route path="/diagnostics" element={<Diagnostics />} />
       <Route path="/booking/:doctorId" element={<Booking />} />


        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/doctor/dashboard" 
          element={
            <ProtectedRoute requiredRole="doctor">
              <DoctorDashboard />
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/doctor/appointments" 
          element={
            <ProtectedRoute requiredRole="doctor">
              <Appointments />
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/doctor/patient-records" 
          element={
            <ProtectedRoute requiredRole="doctor">
              <PatientRecordsPage />
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/patient/patient-details/:id" 
          element={
            <ProtectedRoute requiredRole="doctor">
              <PatientDetailsPage />
            </ProtectedRoute>
          } 
        />

         <Route 
          path="/doctors" 
          element={
            
              <Doctors />
          
          } 
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
