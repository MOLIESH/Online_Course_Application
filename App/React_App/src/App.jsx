import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AppContext } from "./context/AppContext";

import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ProtectedRoute from "./components/Protected/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import ContactForm from "./components/Forms/ContactForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CourseRegister from "./pages/CourseRegister";
import ScrollToTop from "./components/Common/ScrollToTop";



function App() {

  // Get theme from global state
  const { theme } = useContext(AppContext);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app-container">

      {/* Auto Scroll */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content">

        <Routes>

          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/enroll" element={<CourseRegister />} />


          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Page */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
