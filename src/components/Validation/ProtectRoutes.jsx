import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const currentUserString = localStorage.getItem("currentUser");
  const isAuthenticated = !!currentUserString; // Check if the user exists

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;