import React from "react";
import "./index.css";
// Main App component
const App = () => {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-xl animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome to the User Management System
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Seamlessly manage your user data with our secure and easy-to-use system.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/signup">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
            Sign Up
          </button>
        </a>
        <a href="/login">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-lg">
            Log In
          </button>
        </a>
      </div>
    </div>
  );
};
export default App;
