import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect} from "react";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

 
function Navbar({isAuthenticated , setisAuthenticated}) {
 //const [isAuthenticated , setisAuthenticated]= useState(false);
 useEffect(()=>{
   const token=localStorage.getItem("token");
   if(token){
    setisAuthenticated(true);
   }
   else{
    setisAuthenticated(false)
   }
 },[]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setisAuthenticated(false);
    window.location.href = "/login"; 
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm position-sticky top-0"
      style={{ zIndex: "9999" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Shubh GPT
        </Link>

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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>Contact Us</NavLink>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={`${BACKEND_URL}/auth/login`}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-primary text-white px-3 ms-2"
                    href={`${BACKEND_URL}/auth/signup`}
                  >
                    Sign Up
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger px-3 ms-2"
                  >
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