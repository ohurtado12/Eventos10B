import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import UserDashboard from "views/User/UserDashboard";
import UserProfile from "views/User/UserProfile";
import Login from "views/examples/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/user/*" element={<UserDashboard />} />
      <Route path="/user-profile*" element={<UserProfile />} />
      <Route path="/auth*" element={<Login />} />
      <Route path="*" element={<Navigate to="/admin/admin-dashboard" replace />} />
    </Routes>
  </BrowserRouter>
);
