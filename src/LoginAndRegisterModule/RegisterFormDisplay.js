import React from "react";

function RegisterFormDisplay(props) {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-6">
        <div className="card p-4 shadow-sm">
          <h2 className="mb-4 text-center">Register</h2>

          <form onSubmit={props.handleRegister} className="w-75 mx-auto">
            <div className="mb-3">
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                value={props.fullName}
                onChange={(e) => props.setFullName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={props.password}
                onChange={props.handlePasswordChange}
                required
              />
              {props.formSubmitted && (
                <div className={`alert ${props.passwordStrength === "Weak" ? "alert-danger" : "alert-success"} mt-2`} role="alert">
                  Password Strength: {props.passwordStrength}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={props.confirmPassword}
                onChange={props.handleConfirmPasswordChange}
                required
              />
              {props.formSubmitted && props.passwordMismatch && (
                <div className={`alert ${props.passwordMismatch === "do not match" ? "alert-danger" : "alert-success"} mt-2`} role="alert">
                  Password {props.passwordMismatch}
                </div>
              )}
            </div>

            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <button className="btn btn-secondary" onClick={props.goBack}>
              Back
            </button>
          </div>
          <div className="mt-4">
            <p className="text-muted small">
              <strong>Note:</strong> Password must be at least 6 characters long.
            </p>
            <p className="text-muted small">
              <strong>Note:</strong> Email should be in a valid format (e.g., user@example.com).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterFormDisplay;