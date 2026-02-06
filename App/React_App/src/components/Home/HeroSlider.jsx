import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../../assets/styles/heroslider.css";


function HeroSlider() {

  const slides = [
    {
      title: "Learning That Gets You Ahead",
      desc: "Start learning today with industry experts and build your future.",
      btn: "Get Started",
      link: "/enroll",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },

    {
      title: "Master MERN Stack",
      desc: "Become a Full Stack Developer with real-world projects.",
      btn: "View Courses",
      link: "/course",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },

    {
      title: "Python & AI Training",
      desc: "Learn Data Science, ML and AI from professionals.",
      btn: "Join Now",
      link: "/course",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
  ];


  return (

    <section className="hero-container">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >

              {/* Overlay */}
              <div className="hero-overlay"></div>


              {/* Content */}
              <div className="hero-content">

                <h1>{slide.title}</h1>

                <p>{slide.desc}</p>

                <Link
                  to={slide.link}
                  className="hero-btn"
                >
                  {slide.btn}
                </Link>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default HeroSlider;
