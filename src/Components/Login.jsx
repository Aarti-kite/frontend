import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

const Login = () => {
  const [username, setUsername] = useState(""); // ✅ Corrected `useState`
  const [password, setPassword] = useState(""); // ✅ Corrected `useState`
  const navigate = useNavigate(); // ✅ Corrected `useNavigate`

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", { username, password })
      .then((result) => {
        window.localStorage.setItem("id", result.data.id);
        navigate("/");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="mt-1 btn btn-success w-100">
            Login
          </button>
          <Link to="/auth/register">
            <button type="button" className="btn btn-default w-100 mt-2 border">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

