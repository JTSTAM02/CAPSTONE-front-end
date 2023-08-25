import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoggedInNavigation = () => {
  return (
    <div className="d-flex align-items-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Movie Mixer</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li><li className="nav-item">
                <a className="nav-link" href="/form">Movie Finder</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">Community</a>
              </li>              
              <li className="nav-item">
                <a className="nav-link" href="/profile">My Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoggedInNavigation;
