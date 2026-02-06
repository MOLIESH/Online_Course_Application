import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { AppContext } from "../context/AppContext.jsx";

import "../assets/styles/auth.css";

function Login() {

  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  // Form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // UI state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };


  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const res = await axios.post(
        "http://localhost:5000/users/login",
        form
      );

      if (res.data.token && res.data.user) {

        // Save session
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );

        // Update context
        setUser(res.data.user);

        // Redirect
        navigate("/");

      } else {

        setError("Login failed");

      }

    } catch (err) {

      console.error(err);

      setError(
        err.response?.data?.message ||
        "Server Error"
      );

    } finally {

      setLoading(false);

    }
  };


  /* ================= UI ================= */
  return (
    <div className="auth-container">

      <div className="auth-card">

        {/* LEFT PANEL */}
        <div className="auth-left">

          <h2>Welcome Back</h2>

          <p>
            Login to access your dashboard
            and manage your courses.
          </p>

          <Link to="/register">
            Create Account
          </Link>

        </div>


        {/* RIGHT PANEL */}
        <div className="auth-right">

          <h2>LOGIN</h2>

          <form
            onSubmit={handleSubmit}
            className="auth-form"
          >

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
            />


            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
            />


            {/* Button */}
            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>


            {/* Error */}
            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;
