import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Welcome to Event Management System
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Effortlessly manage events, track attendees, and gain insights with our powerful dashboard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-xl shadow hover:bg-blue-50 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2">
          <img
            src="EventManagement/public/assets/hero-event.svg"
            alt="Event management illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
