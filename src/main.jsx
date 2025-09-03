import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import ProtectRoutes from "./components/Validation/ProtectRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route element={<ProtectRoutes />}>
        <Route path="/form" element={<Form />} />
      </Route>
      
      <Route path="/route" element={<ProtectRoutes />} />
    </Routes>
  </BrowserRouter>
);
