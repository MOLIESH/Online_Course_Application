import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "../assets/styles/auth.css"; // ✅ Same style as Login

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Change
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:5000/users/register",
        form
      );

      if (res.data.message === "Registered Successfully") {

        alert("Registration Successful ✅");

        // Redirect to login
        navigate("/login");

      } else {

        setError(res.data.message || "Register Failed");

      }

    } catch (err) {

      console.error(err);
      setError("Server Error");

    } finally {

      setLoading(false);

    }
  };

return (
  <div className="auth-container">

    <div className="auth-card">

      {/* LEFT PANEL */}
      <div className="auth-left">

        <h2>Welcome</h2>

        <p>
          Register now and start learning
          with our expert instructors.
        </p>

        <Link to="/login">
          Already Registered? Login
        </Link>

      </div>


      {/* RIGHT PANEL */}
      <div className="auth-right">

        <h2>REGISTER</h2>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />


          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Register"}
          </button>


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

export default Register;