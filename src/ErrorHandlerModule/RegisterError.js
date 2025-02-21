import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterError = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

export default RegisterError;
