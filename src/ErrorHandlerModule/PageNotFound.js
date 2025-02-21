import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-3 fw-bold text-danger">404</h1>
      <h2 className="text-dark">Oops! Page Not Found</h2>
      <p className="text-muted">The page you are looking for does not exist.</p>
      <Link to="/home" className="btn btn-primary mt-3">
        Go to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
