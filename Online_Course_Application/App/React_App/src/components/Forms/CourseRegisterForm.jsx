// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../assets/styles/courseRegister.css"; // create later

// function CourseRegisterForm() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     course: "",
//     price: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   /* ================= COURSES ================= */

//   const courses = {
//     "Python & AI": 12000,
//     "MERN Stack": 15000,
//     "Cloud Computing": 10000,
//     "Web Development": 8000,
//   };

//   /* ================= HANDLE CHANGE ================= */

//   const handleChange = (e) => {

//     let { name, value } = e.target;

//     // Name max 50
//     if (name === "name") value = value.slice(0, 50);

//     // Email max 50
//     if (name === "email") value = value.slice(0, 50);

//     // Mobile only numbers 10
//     if (name === "mobile") {
//       value = value.replace(/\D/g, "").slice(0, 10);
//     }

//     // Course change → set price
//     if (name === "course") {
//       setForm({
//         ...form,
//         course: value,
//         price: courses[value] || "",
//       });
//       return;
//     }

//     setForm({ ...form, [name]: value });
//   };

//   /* ================= VALIDATION ================= */

//   useEffect(() => {

//     let newErrors = {};

//     // Name
//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (form.name.length < 3) {
//       newErrors.name = "Minimum 3 characters";
//     }

//     // Email
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
//     ) {
//       newErrors.email = "Invalid email";
//     }

//     // Mobile
//     if (!form.mobile) {
//       newErrors.mobile = "Mobile required";
//     } else if (form.mobile.length !== 10) {
//       newErrors.mobile = "Enter 10 digits";
//     }

//     // Course
//     if (!form.course) {
//       newErrors.course = "Select course";
//     }

//     setErrors(newErrors);

//   }, [form]);

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     if (Object.keys(errors).length > 0) return;

//     setLoading(true);

//     try {

//       await axios.post(
//         "http://localhost:5000/courses/register",
//         form
//       );

//       setSubmitted(true);

//     } catch (err) {

//       alert("Server Error!");

//     } finally {

//       setLoading(false);

//     }
//   };

//   /* ================= SUCCESS ================= */

//   if (submitted) {
//     return (
//       <div className="course-success">

//         <h2>✅ Registration Successful</h2>
//         <p>We will contact you soon.</p>

//         <button onClick={() => navigate("/courses")}>
//           Register Again
//         </button>

//       </div>
//     );
//   }

//   /* ================= UI ================= */

//   return (
//     <section className="course-register">

//       <div className="course-box">

//         <h2>Course Registration</h2>

//         <form onSubmit={handleSubmit}>

//           {/* Name */}
//           <div className="form-group">
//             <label>Name *</label>

//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//             />

//             {errors.name && <small>{errors.name}</small>}
//           </div>


//           {/* Email */}
//           <div className="form-group">
//             <label>Email *</label>

//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter email"
//             />

//             {errors.email && <small>{errors.email}</small>}
//           </div>


//           {/* Mobile */}
//           <div className="form-group">
//             <label>Mobile *</label>

//             <input
//               type="text"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               placeholder="10 digit number"
//             />

//             {errors.mobile && <small>{errors.mobile}</small>}
//           </div>


//           {/* Course */}
//           <div className="form-group">
//             <label>Select Course *</label>

//             <select
//               name="course"
//               value={form.course}
//               onChange={handleChange}
//             >

//               <option value="">-- Select --</option>

//               {Object.keys(courses).map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}

//             </select>

//             {errors.course && <small>{errors.course}</small>}
//           </div>


//           {/* Price */}
//           <div className="form-group">
//             <label>Course Price</label>

//             <input
//               type="text"
//               value={
//                 form.price
//                   ? `₹ ${form.price}`
//                   : ""
//               }
//               disabled
//             />
//           </div>


//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Enroll Now"}
//           </button>

//         </form>

//       </div>

//     </section>
//   );
// }

// export default CourseRegisterForm;



import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/courseRegister.css";

function CourseRegisterForm() {
  const navigate = useNavigate();

  /* ================= FORM STATE ================= */

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    price: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= COURSE LIST ================= */

  const courses = {
    "Python & AI": 12000,
    "MERN Stack": 15000,
    "Cloud Computing": 10000,
    "Web Development": 8000,
  };

  /* ================= HANDLE INPUT ================= */

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Name max 50
    if (name === "name") value = value.slice(0, 50);

    // Email max 50
    if (name === "email") value = value.slice(0, 50);

    // Mobile only 10 digits
    if (name === "mobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    // Course → set price
    if (name === "course") {
      setForm({
        ...form,
        course: value,
        price: courses[value] || "",
      });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  /* ================= VALIDATION ================= */

  const validate = () => {
    let newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Minimum 3 characters";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Mobile
    if (!form.mobile) {
      newErrors.mobile = "Mobile is required";
    } else if (form.mobile.length !== 10) {
      newErrors.mobile = "Enter 10 digits";
    }

    // Course
    if (!form.course) {
      newErrors.course = "Select a course";
    }

    return newErrors;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/courses/register",
        form
      );

      // Reset after success
      setForm({
        name: "",
        email: "",
        mobile: "",
        course: "",
        price: "",
      });

      setErrors({});
      setSubmitted(false);

      alert("Registration Successful ✅");

      navigate("/");

    } catch (err) {
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <section className="course-register">

      <div className="course-box">

        <h2>Course Registration</h2>

        <form onSubmit={handleSubmit} noValidate>

          {/* Name */}
          <div className="form-group">
            <label>Name *</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            {submitted && errors.name && (
              <small>{errors.name}</small>
            )}
          </div>


          {/* Email */}
          <div className="form-group">
            <label>Email *</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {submitted && errors.email && (
              <small>{errors.email}</small>
            )}
          </div>


          {/* Mobile */}
          <div className="form-group">
            <label>Mobile *</label>

            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="10 digit number"
            />

            {submitted && errors.mobile && (
              <small>{errors.mobile}</small>
            )}
          </div>


          {/* Course */}
          <div className="form-group">
            <label>Select Course *</label>

            <select
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              <option value="">-- Select Course --</option>

              {Object.keys(courses).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}

            </select>

            {submitted && errors.course && (
              <small>{errors.course}</small>
            )}
          </div>


          {/* Price */}
          <div className="form-group">
            <label>Course Price</label>

            <input
              type="text"
              value={
                form.price ? `₹ ${form.price}` : ""
              }
              disabled
            />
          </div>


          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Enroll Now"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default CourseRegisterForm;
