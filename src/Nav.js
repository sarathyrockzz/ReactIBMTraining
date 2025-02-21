import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginAndRegisterModule/LoginForm";
import RegisterForm from "./LoginAndRegisterModule/RegisterForm";
import PageNotFound from "./ErrorHandlerModule/PageNotFound";
import ManageUsers from "./UsersManagementModule/ManageUsers";
import LoginSuccess from "./ErrorHandlerModule/LoginSuccess";
import RegisterSuccess from "./ErrorHandlerModule/RegisterSuccess";
import InvalidLogin from "./ErrorHandlerModule/InvalidLogin";
import Dashboard from "./LoginAndRegisterModule/Dashboard";

function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/welcome" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/invalid-login" element={<InvalidLogin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Nav;