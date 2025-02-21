import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterFormDisplay from "./RegisterFormDisplay";
import RegisterError from "../ErrorHandlerModule/RegisterError";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../Utils/StorageHelper";

function RegisterForm() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(newPassword.length < 6 ? "Weak" : "Strong");
    setPasswordMismatch(
      newPassword !== confirmPassword ? "do not match" : "Matched"
    );
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMismatch(
      password !== newConfirmPassword ? "do not match" : "Matched"
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (password === confirmPassword && password.length >= 6) {
      if (!isSameUserRegistered()) {
        registerUsersWithLocalStorage();
        navigate("/register-success");
      } else {
        setErrorMessage("User already registered with the same email");
      }
    }
  };

  const registerUsersWithLocalStorage = () => {
    // Retrieve existing users from localStorage using storageHelper
    const existingUsers = getDataFromLocalStorage("users") || [];

    // Create a new user object
    const newUser = {
      uniqueId: Number(new Date()),
      fullName: fullName,
      email: email,
      password: password,
    };

    // Add the new user to the existing users array
    existingUsers.push(newUser);

    // Save the updated users array back to localStorage using storageHelper
    setDataToLocalStorage("users", existingUsers);
  };

  const isSameUserRegistered = () => {
    const users = getDataFromLocalStorage("users") || [];
    return users.some(user => user.email === email);
  };

  return (
    <div>
      {errorMessage && <RegisterError message={errorMessage} />}
      <RegisterFormDisplay
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        fullName={fullName}
        setFullName={setFullName}
        passwordStrength={passwordStrength}
        passwordMismatch={passwordMismatch}
        formSubmitted={formSubmitted}
        handleRegister={handleRegister}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        goBack={goBack}
      />
    </div>
  );
}

export default RegisterForm;