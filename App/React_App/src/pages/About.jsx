import "../assets/styles/about.css";

function About() {
  return (
    <section className="about">

      {/* ================= HEADER ================= */}
      <div className="about-header">

        <h1>About Digitivity</h1>

        <p>
          We help students and professionals build
          real-world skills for the digital future.
        </p>

      </div>


      {/* ================= IMPACT ================= */}
      <div className="about-impact">

        <div className="impact-box">
          <h2>500+</h2>
          <p>Students Trained</p>
        </div>

        <div className="impact-box">
          <h2>120+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="impact-box">
          <h2>15+</h2>
          <p>Expert Trainers</p>
        </div>

        <div className="impact-box">
          <h2>10+</h2>
          <p>Partner Companies</p>
        </div>

      </div>



      {/* ================= STORY ================= */}
      <div className="about-story">

        {/* LEFT */}
        <div className="story-left">

          <h2>Our Journey</h2>

          <p>
            Digitivity was founded to bridge the gap
            between education and industry.
            We focus on practical learning and
            career-oriented training.
          </p>

          <p>
            Our mission is to empower students
            with modern technologies and
            job-ready skills.
          </p>

        </div>


        {/* RIGHT - TIMELINE */}
        <div className="story-right">

          <div className="story-item">
            <span>2019</span>
            <h4>Founded</h4>
            <p>Started as a small training center</p>
          </div>

          <div className="story-item">
            <span>2021</span>
            <h4>Online Platform</h4>
            <p>Launched digital learning system</p>
          </div>

          <div className="story-item">
            <span>2023</span>
            <h4>Industry Partners</h4>
            <p>Collaborated with tech companies</p>
          </div>

          <div className="story-item">
            <span>Today</span>
            <h4>Growing Community</h4>
            <p>Serving students across India</p>
          </div>

        </div>

      </div>



      {/* ================= VALUES ================= */}
      <div className="about-values">

        <h2>Why Choose Us?</h2>

        <div className="values-grid">

          <div className="value-card">
            <h4>Practical Learning</h4>
            <p>Hands-on projects & real case studies</p>
          </div>

          <div className="value-card">
            <h4>Expert Mentors</h4>
            <p>Learn from industry professionals</p>
          </div>

          <div className="value-card">
            <h4>Job Support</h4>
            <p>Placement guidance & interview prep</p>
          </div>

          <div className="value-card">
            <h4>Lifetime Access</h4>
            <p>Access courses anytime</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;


