import { Link } from "react-router-dom";
import { useEffect } from "react";
import HeroSlider from "./HeroSlider";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../../assets/styles/hero.css";


function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="hero">
    
    {/* Hero Slider */}
    <HeroSlider />

    {/* Start */}

    <div className="hero-wrapper">

        {/* LEFT CARD */}
        <div className="hero-card">

          <h1>Learning that gets you ahead</h1>

          <p>
            Skills for your present and your future.
            Start learning today with industry experts.
          </p>

          <Link to = "/enroll" className="primary-btn">
            Get Started
          </Link>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-image-box">

          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Student"
          />

        </div>

      </div>


      {/* ================= TITLE ================= */}

      <div className="hero-title">

        <h1>Our Courses</h1>
        <p>Learn modern skills and build your career</p>

      </div>



      {/* ================= SCROLL SECTIONS ================= */}

      {/* Section 1 */}
      <div className="hero-row">

        <div className="hero-image" data-aos="fade-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
            alt="Web"
          />
        </div>

        <div className="hero-text" data-aos="fade-left">
          <h2>Web Development</h2>
          <p>
            Learn HTML, CSS, JavaScript and build
            responsive websites.
          </p>
        </div>

      </div>


      {/* Section 2 */}
      <div className="hero-row reverse">

        <div className="hero-image rotate" data-aos="zoom-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="MERN"
          />
        </div>

        <div className="hero-text" data-aos="fade-up">
          <h2>MERN Stack</h2>
          <p>
            Master MongoDB, Express, React, Node
            to become Full Stack Developer.
          </p>
        </div>

      </div>


      {/* Section 3 */}
      <div className="hero-row">

        <div className="hero-image" data-aos="flip-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
            alt="Python"
          />
        </div>

        <div className="hero-text" data-aos="flip-right">
          <h2>Python Programming</h2>
          <p>
            Learn Python for Data Science,
            Automation and AI.
          </p>
        </div>

      </div>


      {/* Section 4 */}
      <div className="hero-row reverse">

        <div className="hero-image rotate-slow" data-aos="fade-up-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png"
            alt="AI"
          />
        </div>

        <div className="hero-text" data-aos="fade-up-left">
          <h2>AI & Machine Learning</h2>
          <p>
            Build intelligent systems using
            Machine Learning and Deep Learning.
          </p>
        </div>

      </div>

      {/* ================= MARQUEE ================= */}

      <div className="hero-marquee">

        {/* Row 1 */}
        <div className="marquee-row">

          <div className="marquee-track">

            {/* Set 1 */}
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />

            {/* Set 2 (Duplicate) */}
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />

            {/* Set 3 (Extra Duplicate) */}
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />

          </div>
        </div>


        {/* Row 2 */}
        <div className="marquee-row reverse">

          <div className="marquee-track">

            {/* Same 3 Sets Again */}

            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />

            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />

            <img src="https://cdn-icons-png.flaticon.com/512/2103/2103659.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" />

          </div>
        </div>

      </div>


{/* ================= TECH VERTICAL ================= */}

<div className="tech-vertical">

  {/* LEFT CONTENT */}
  <div className="tech-left">

    <h2>Master Python & Modern Technologies</h2>

    <p>
      Learn industry-level programming with Python,
      AI, Web Development and Cloud tools.
      Build real projects and grow your career.
    </p>

    <Link to="/course" className="primary-btn">
      Explore Courses
    </Link>

  </div>


  {/* RIGHT SLIDERS */}
  <div className="tech-right">

    {/* Column 1 */}
    <div className="tech-column scroll-down">

      {[
        "5968/5968350.png", // python
        "919/919827.png",   // web
        "5968/5968292.png", // mern
        "2103/2103659.png", // ai
        "873/873120.png",   // cloud
      ].map((img, i) => (
        <img
          key={i}
          src={`https://cdn-icons-png.flaticon.com/512/${img}`}
          alt=""
        />
      ))}

      {/* Duplicate */}
      {[
        "5968/5968350.png",
        "919/919827.png",
        "5968/5968292.png",
        "2103/2103659.png",
        "873/873120.png",
      ].map((img, i) => (
        <img
          key={i + 10}
          src={`https://cdn-icons-png.flaticon.com/512/${img}`}
          alt=""
        />
      ))}

    </div>


    {/* Column 2 */}
    <div className="tech-column scroll-up">

      {[
        "2103/2103659.png",
        "873/873120.png",
        "5968/5968292.png",
        "919/919827.png",
        "5968/5968350.png",
      ].map((img, i) => (
        <img
          key={i}
          src={`https://cdn-icons-png.flaticon.com/512/${img}`}
          alt=""
        />
      ))}

      {/* Duplicate */}
      {[
        "2103/2103659.png",
        "873/873120.png",
        "5968/5968292.png",
        "919/919827.png",
        "5968/5968350.png",
      ].map((img, i) => (
        <img
          key={i + 20}
          src={`https://cdn-icons-png.flaticon.com/512/${img}`}
          alt=""
        />
      ))}

    </div>

  </div>

</div>


      {/* ================= CTA ================= */}

      <div className="hero-cta" data-aos="zoom-in">

        <Link to = "/enroll" className="primary-btn">
          Enroll Now
        </Link>

      </div>

    </section>
  );
}

export default Hero;



