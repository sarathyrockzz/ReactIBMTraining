import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormDisplay from "./LoginFormDisplay";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../Utils/StorageHelper";
function LoginForm() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login validation logic here
    const users = getDataFromLocalStorage("users") || [];
    const user = users.find(user => user.email === email && user.password === password);
   
    if (user) {
      // If login is successful, store the email in localStorage and navigate to the login success page
      setDataToLocalStorage("loggedInUser", user.email);
      navigate("/login-success");
    } else {
      // Navigate to the invalid login page if login fails
      navigate("/invalid-login");
    }
  };

  return (
    <LoginFormDisplay
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      goBack={goBack}
    />
  );
}

export default LoginForm;