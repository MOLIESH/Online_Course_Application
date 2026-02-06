import "../assets/styles/courses.css";
import { Link } from "react-router-dom";

function Courses() {

  const courses = [
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript, React & Backend",
      img: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
      price: "₹4,999",
      level: "Beginner"
    },
    {
      title: "MERN Stack",
      desc: "MongoDB, Express, React, Node",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      price: "₹7,999",
      level: "Advanced"
    },
    {
      title: "Python & AI",
      desc: "Data Science, ML & AI",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      price: "₹6,499",
      level: "Intermediate"
    },
    {
      title: "Cloud Computing",
      desc: "AWS, DevOps & Deployment",
      img: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
      price: "₹5,999",
      level: "Advanced"
    },
  ];


  return (
    <section className="courses-page">


      {/* HERO */}
      <div className="courses-hero">

        <div className="courses-hero-text">

          <h1>Online Education</h1>

          <p>
            Learn Skills Like Real Classroom.
            Build your career with experts.
          </p>

          <div className="hero-btns">

            <Link to = "/enroll" className="primary-btn">
              Course Registration
            </Link>

            <Link to="/contact" className="outline-btn">
              Contact Us
            </Link>

          </div>

        </div>


        <div className="courses-hero-img">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Student"
          />

        </div>

      </div>



      {/* FEATURES */}
      <div className="course-features">

        <div className="feature-box">🎓 Live Classes</div>
        <div className="feature-box">📚 Lifetime Access</div>
        <div className="feature-box">💼 Job Support</div>
        <div className="feature-box">🤝 Community</div>

      </div>



      {/* TITLE */}
      <div className="courses-title">

        <h2>Our Popular Courses</h2>

        <p>
          Choose the best course for your future
        </p>

      </div>



      {/* COURSE GRID */}
      <div className="courses-grid">

        {courses.map((course, i) => (

          <div className="course-card" key={i}>


            {/* IMAGE */}
            <div className="course-img">
              <img src={course.img} alt={course.title} />
            </div>


            {/* BODY */}
            <div className="course-body">

              <span className="level">
                {course.level}
              </span>

              <h3>{course.title}</h3>

              <p>{course.desc}</p>


              {/* FOOTER */}
              <div className="course-footer">

                <span className="price">
                  {course.price}
                </span>


                {/* LINK TO COURSE REGISTER */}
                <Link
                  to="/enroll" 
                  state={{
                    course: course.title,
                    price: course.price,
                  }}
                  className="enroll-btn primary-btn"
                >
                  Enroll Now
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Courses;
