import { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles/contact.css";

function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");


  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {

    let { name, value } = e.target;

    // Limits
    if (name === "name") value = value.slice(0, 50);
    if (name === "email") value = value.slice(0, 100);
    if (name === "subject") value = value.slice(0, 150);
    if (name === "message") value = value.slice(0, 250);

    if (name === "contact") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm({ ...form, [name]: value });
    setTouched({ ...touched, [name]: true });
  };


  /* ================= VALIDATION ================= */

  useEffect(() => {

    let newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    else if (form.name.length < 5) {
      newErrors.name = "Minimum 5 characters";
    }
    else if (form.name.length > 50) {
      newErrors.name = "Maximum 50 characters";
    }


    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Invalid email format";
    }


    // Subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }


    // Contact
    if (!form.contact.trim()) {
      newErrors.contact = "Contact is required";
    }
    else if (form.contact.length !== 10) {
      newErrors.contact = "Enter 10 digits";
    }


    // Category
    if (!form.category) {
      newErrors.category = "Select category";
    }


    // Message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    else if (form.message.length < 10) {
      newErrors.message = "Minimum 10 characters";
    }


    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);

  }, [form]);


  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!isValid) return;

    setLoading(true);
    setServerError("");

    try {

      const res = await axios.post(
        "http://localhost:5000/contacts",
        form
      );

      if (res.data.message) {
        setSubmitted(true);
      }

    } catch {

      setServerError("Server error. Try again.");

    } finally {

      setLoading(false);

    }
  };


  /* ================= SUCCESS ================= */

  if (submitted) {
    return (
      <div className="success-container">

        <h2>✅ Submitted</h2>
        <p>Thank you for contacting us!</p>

        <button onClick={() => window.location.reload()}>
          Submit Again
        </button>

      </div>
    );
  }


  /* ================= UI ================= */

  return (
    <section className="contact-page">


      {/* BANNER */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </div>


      {/* MAIN */}
      <div className="contact-main">


        {/* LEFT INFO */}
        <div className="contact-info">

          <div className="info-box">
            📍 Chennai, India
          </div>

          <div className="info-box active">
            📧 support@digitivity.com
          </div>

          <div className="info-box">
            📞 +91 98765 43210
          </div>

        </div>


        {/* FORM */}
        <div className="contact-form-box">

          <h2>Drop Your Message</h2>

          <form onSubmit={handleSubmit}>


            {/* NAME */}
            <div className="form-field">

              <label>
                Name <span>*</span>
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name && touched.name ? "error" : ""}
              />

              {touched.name && errors.name &&
                <small>{errors.name}</small>
              }

            </div>


            {/* EMAIL */}
            <div className="form-field">

              <label>
                Email <span>*</span>
              </label>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email && touched.email ? "error" : ""}
              />

              {touched.email && errors.email &&
                <small>{errors.email}</small>
              }

            </div>


            {/* SUBJECT */}
            <div className="form-field">

              <label>
                Subject <span>*</span>
              </label>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={errors.subject && touched.subject ? "error" : ""}
              />

              {touched.subject && errors.subject &&
                <small>{errors.subject}</small>
              }

            </div>


            {/* CONTACT */}
            <div className="form-field">

              <label>
                Contact <span>*</span>
              </label>

              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className={errors.contact && touched.contact ? "error" : ""}
              />

              {touched.contact && errors.contact &&
                <small>{errors.contact}</small>
              }

            </div>


            {/* CATEGORY */}
            <div className="form-field">

              <label>
                Category <span>*</span>
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={errors.category && touched.category ? "error" : ""}
              >
                <option value="">Select Category</option>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </select>

              {touched.category && errors.category &&
                <small>{errors.category}</small>
              }

            </div>


            {/* MESSAGE */}
            <div className="form-field full">

              <label>
                Message <span>*</span>
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={errors.message && touched.message ? "error" : ""}
              />

              {touched.message && errors.message &&
                <small>{errors.message}</small>
              }

            </div>


            {/* SERVER ERROR */}
            {serverError &&
              <p className="error-text">{serverError}</p>
            }


            {/* BUTTON */}
            <button disabled={!isValid || loading}>

              {loading ? "Submitting..." : "Send Message"}

            </button>


          </form>

        </div>

      </div>


      {/* MAP */}
      <div className="contact-map">

        <iframe
          title="map"
          src="https://www.google.com/maps?q=chennai&output=embed"
        ></iframe>

      </div>

    </section>
  );
}

export default ContactForm;
