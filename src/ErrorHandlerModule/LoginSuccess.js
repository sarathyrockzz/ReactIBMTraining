import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../Utils/StorageHelper";

function LoginSuccess() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Retrieve the logged-in user's email from localStorage using storageHelper
    const loggedInUserEmail = getDataFromLocalStorage("loggedInUser");
    setEmail(loggedInUserEmail);
  }, []);

  const manageUsersClick = () => {
    navigate("/manage-users");
  };

  const handleLogoutClick = () => {
    // Clear the logged-in user from localStorage using storageHelper
    setDataToLocalStorage("loggedInUser", null);
    navigate("/home", { state: { logoutMsg: "You have been logged out" } });
  };

  return (
    <>
      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center bg-secondary py-2">
        <button className="btn btn-light mx-2">Group Chat</button>
        <button className="btn btn-light mx-2" onClick={manageUsersClick}>
          Manage Users
        </button>
        <button className="btn btn-light mx-2">Manage Documents</button>
        <button className="btn btn-light mx-2" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>

      {/* Login Success Message */}
      <div className="text-center mt-5">
        <h2 className="fw-bold">Login Successful</h2>
        <p className="fs-5">
          <strong>Welcome!</strong> {email}
        </p>
      </div>
    </>
  );
}

export default LoginSuccess;