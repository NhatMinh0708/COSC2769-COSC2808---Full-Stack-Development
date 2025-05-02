import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';

import AdminDashboard from './pages/Admin/AdminDashBoard.jsx';
import Settings from './pages/Admin/Settings.jsx';

import AttendeeDashboard from './pages/User/AttendeeDashboard.jsx';
import OrganizerDashboard from './pages/User/OrganizerDashboard.jsx'; 
import LandingPage from './pages/LandingPage.jsx';
import { useNavigate } from 'react-router-dom';


import { UserContextProvider } from './pages/User/UserContext';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/settings" element={<Settings />} />

        {/* Organizer */}
        <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />

        {/* Attendee */}
        <Route path="/attendee/dashboard" element={<AttendeeDashboard />} />
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
