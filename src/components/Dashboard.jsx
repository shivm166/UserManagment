import React, { useEffect } from "react"; // useEffect ને import કરો
import { useNavigate } from "react-router-dom";
import Form from './Form';

const Dashboard = () => {
  const currentUserString = localStorage.getItem("currentUser");
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!currentUserString) {
      navigate("/login");
    }
  }, [currentUserString, navigate]);   

  
  if (!currentUserString) {
    return null;
  }


  // Removed unused variable assignment for currentUser

  const handleLogout = () => {
    
    localStorage.removeItem("currentUser");
    
    navigate("/login");
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-300 p-4">
      <div className="bg-white container mx-auto rounded-lg shadow-lg max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to  Dashboard!
        </h1>
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
        <Form/>
      </div>
    </div>
  );
};

export default Dashboard;
