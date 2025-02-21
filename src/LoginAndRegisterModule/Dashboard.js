import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Dashboard() {
  // useNavigate hook from react-router-dom to 
  // programmatically navigate to different routes
  const navigate = useNavigate();

  // Function to handle login button click, 
  // navigates to the login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Function to handle register button click, 
  // navigates to the register page
  const handleRegisterClick = () => {
    navigate("/register");
  };

  // useLocation hook from react-router-dom 
  // to access the location object, which contains 
  // the state passed via navigation
  const location = useLocation();

  // useState hook to manage the logout message state, 
  // initialized with the state passed from the location object
  const [logoutMsg, setLogoutMsg] = useState(location.state?.logoutMsg);

  // useEffect hook to set a timer that clears the 
  // logout message after 3 seconds
  useEffect(() => {
    if (logoutMsg) {
      const timer = setTimeout(() => {
        setLogoutMsg(null);
      }, 3000);
      // Cleanup function to clear the timer if 
      // the component unmounts or if logoutMsg changes
      return () => clearTimeout(timer);
    }
  }, [logoutMsg]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Welcome to Users Module</h2>

      {/* Display the logout message if it exists */}
      {logoutMsg && (
        <div className="alert alert-info text-center" role="alert">
          {logoutMsg}
        </div>
      )}

      <div className="row justify-content-center">
        {/* Existing Users Section */}
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3 text-center">Existing Users</h4>
            <button className="btn btn-primary" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {/* New Users Section */}
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3 text-center">New Users</h4>
            <button className="btn btn-success" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
