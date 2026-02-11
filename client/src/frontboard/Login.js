import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Login({ setisAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setisAuthenticated(true);
        setMessage("✅ Login Successful!");

        
        setTimeout(() => {
          setMessage("");
          navigate("/chatpage");
        }, 1500);
      } else {
        setMessage(res.data.message || "Login Failed");
        setTimeout(() => setMessage(""), 1500);
      }
    } catch (err) {
      setMessage("❌ Login failed: " + (err.response?.data?.message || err.message));
      setTimeout(() => setMessage(""), 1500);
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;