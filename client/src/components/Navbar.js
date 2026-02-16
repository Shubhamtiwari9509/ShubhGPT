import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Navbar({ isAuthenticated, setisAuthenticated }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setisAuthenticated(false);
    navigate("/login");
  };

  const handelerUpgrade = ()=>{
   if(!isAuthenticated){
    navigate("/login");
   }else{
    navigate("/upgradepage");
   }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm position-sticky top-0" style={{ zIndex: "9999" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Shubh GPT
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>

            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href={`${BACKEND_URL}/auth/login`}>
                    Login
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="btn btn-primary text-white px-3 ms-2" href={`${BACKEND_URL}/auth/signup`}>
                    Sign Up
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={handelerUpgrade} className="btn btn-success px-3 ms-2">
                   Upgrade
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-danger px-3 ms-2">
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
