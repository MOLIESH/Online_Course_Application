import { Link } from "react-router-dom";
import "../../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/course">Courses</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <p>© 2026 MyWebsite. All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;
