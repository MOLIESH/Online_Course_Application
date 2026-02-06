import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext.jsx";

import "../../assets/styles/navbar.css";

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  // Global State
  const { user, setUser, theme } = useContext(AppContext);

  /* ===========================
     Check Login on Load
  =========================== */
  useEffect(() => {

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }

  }, [setUser]);


  /* ===========================
     Close Mobile Menu
  =========================== */
  const closeMenu = () => {
    setMobileOpen(false);
  };


  /* ===========================
     Logout
  =========================== */
  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };


  return (
    <nav className={`saas-navbar ${theme}`}>

      {/* ================= LEFT ================= */}
      <div className="nav-left">

        {/* LOGO */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          <span className="logo-dot red"></span>
          <span className="logo-dot green"></span>
          <span className="logo-dot blue"></span>
          <span className="logo-dot yellow"></span>
          <span className="logo-text">Digitivity</span>
        </div>


        {/* MENU */}
        <ul className={mobileOpen ? "nav-menu active" : "nav-menu"}>

          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/course"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

      </div>



      {/* ================= RIGHT ================= */}
      <div className="nav-right">

        {/* USER / LOGIN */}
        {user ? (
          <div className="nav-user">

            <span className="user-name">
              Hi, {user.name}
            </span>

            <button
              onClick={logout}
              className="login-btn"
            >
              Logout
            </button>

          </div>
        ) : (
          <NavLink
            to="/login"
            className="login-btn"
            onClick={closeMenu}
          >
            Login
          </NavLink>
        )}


        {/* MOBILE ICON */}
        <div
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
