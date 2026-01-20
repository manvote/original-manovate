import { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function AndroidAppDevelopment() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "Android App Development Services | Custom Android Applications";

    const content =
      "Professional Android app development services to build secure, scalable, and high-performance Android applications. We develop custom Android apps using Kotlin, Java, and modern Android frameworks.";

    const metaDescription = document.querySelector(
      "meta[name='description']"
    );

    if (metaDescription) {
      metaDescription.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  /* ================= HERO SLIDESHOW (HOOK FIXED) ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  /* ================= TIMELINE PROGRESS ================= */
  useEffect(() => {
    const timeline = document.getElementById("brand-timeline");
    if (!timeline) return;

    const line = timeline.querySelector(".timeline-line");
    const items = timeline.querySelectorAll(".timeline-item");

    const onScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(
          (windowHeight - rect.top) / (rect.height + windowHeight),
          0
        ),
        1
      );

      const lineHeight = progress * rect.height;
      line.style.height = `${lineHeight}px`;

      items.forEach((item) => {
        const itemOffset = item.offsetTop;
        if (lineHeight >= itemOffset + 20) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= FADE-UP ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Navbar />
      {/* ================= HERO ================= */}
      <section className="hero-modern">
        <div className="hero-slideshow">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="service-hero-content animate">
          <h1>Android App Development Services</h1>
          <p>
            Manovate Technologies builds secure, scalable, and high-performance
            Android applications tailored to your business needs. We deliver
            intuitive mobile experiences across smartphones, tablets, and
            Android devices.
          </p>

          <a href="#services" className="btn-primary">
            Build Android App
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our Android app development services help businesses design,
            develop, and deploy powerful mobile applications using modern
            Android technologies with a strong focus on performance,
            security, and scalability.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Custom Android App Development</h3>
              <p>
                Tailor-made Android applications built with Kotlin and Java
                to match business goals and user needs.
              </p>
            </div>

            <div className="card animate">
              <h3>Android UI/UX Design</h3>
              <p>
                Intuitive and engaging user interfaces following Material
                Design principles.
              </p>
            </div>

            <div className="card animate">
              <h3>API & Backend Integration</h3>
              <p>
                Seamless integration with APIs, backend systems, and cloud
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Android App Development Process</h2>
          <p className="section-intro">
            A structured approach ensuring performance, quality, and Google
            Play Store compliance.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Planning</span>
              <h3>Strategy & Architecture</h3>
              <p>
                Define app requirements, user journeys, and technical
                architecture.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development</span>
              <h3>Android Engineering</h3>
              <p>
                Secure and scalable Android app development using best
                practices.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch</span>
              <h3>Testing & Deployment</h3>
              <p>
                Quality testing and successful publishing to the Google Play
                Store.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our Android App Development Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Android Expertise</h3>
              <p>
                Skilled Android developers using modern tools and frameworks.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Secure Apps</h3>
              <p>
                Apps built for performance, security, and future growth.
              </p>
            </div>

            <div className="why-box animate">
              <h3>End-to-End Delivery</h3>
              <p>
                Complete Android app lifecycle from planning to Play Store
                launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your Android App Project</h2>
            <p>
              Ready to build an Android application? Talk to our Android
              experts and bring your idea to life.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our Android team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your Android app requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Android Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Android App Development Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
