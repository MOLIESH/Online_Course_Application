import "../../assets/styles/services.css";

function Services() {
  return (
    <section className="services">

      <h2>Our Services</h2>

      <p className="services-subtitle">
        We offer high-quality digital services
      </p>

      <div className="services-grid">

        <div className="service-card">
          <h3>Web Development</h3>
          <p>Modern websites using React & MERN</p>
        </div>

        <div className="service-card">
          <h3>App Development</h3>
          <p>Mobile apps for Android & iOS</p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>Clean and user-friendly designs</p>
        </div>

        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Rank higher on Google search</p>
        </div>

        <div className="service-card">
          <h3>Cloud Hosting</h3>
          <p>Fast and secure cloud servers</p>
        </div>

        <div className="service-card">
          <h3>IT Support</h3>
          <p>24/7 technical assistance</p>
        </div>

      </div>

    </section>
  );
}

export default Services;
