import { Link } from 'react-router-dom';

function InvalidLogin() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-5 text-danger fw-bold">Invalid Login</h1>
        <p className="text-muted">The email or password you entered is incorrect.</p>
        <Link to="/home" className="btn btn-primary mt-3">Try Again</Link>
      </div>
    </div>
  );
}

export default InvalidLogin;
