import { Link } from 'react-router-dom';

function RegisterSuccess() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="fw-bold text-success">Registration Successful</h1>
        <p className="text-muted">Thank you for your registration.</p>
        <Link to="/" className="btn btn-primary mt-3">Return to Home Page</Link>
      </div>
    </div>
  );
}

export default RegisterSuccess;
