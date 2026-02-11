import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Signup({ setisAuthenticated }) {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        { email, userName, password }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setisAuthenticated(true);
        setMessage("✅ Signup Successful!");

        setTimeout(() => {
          setMessage("");
          navigate("/chatpage");
        }, 1500);
      } else {
        setMessage(res.data.message || "Signup Failed");
        setTimeout(() => setMessage(""), 5500);
      }
    } catch (err) {
      setMessage("❌ Signup failed: " + (err.response?.data?.message || err.message));
      setTimeout(() => setMessage(""), 5500);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Shubh GPT</h2>

        {message && (
          <div
            className={`alert ${
              message.includes("Successful") ? "alert-success" : "alert-danger"
            } text-center mb-3`}
            role="alert"
          >
            {message}
          </div>
        )}

        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>

         
        <div className="text-center mt-3">
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Signup;