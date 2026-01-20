import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./App.css";

export default function App() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "UI/UX Design Services | User Experience & Interface Design";

    const content =
      "Professional UI/UX design services focused on creating intuitive, engaging, and user-centered digital experiences across web and mobile platforms.";

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

  /* ================= HERO SLIDESHOW ================= */
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
          <h1>UI/UX Design Services</h1>
          <p>
            Manovate Technologies designs intuitive, engaging, and user-focused
            digital experiences that improve usability, increase conversions,
            and strengthen brand perception.
          </p>

          <a href="#services" className="btn-primary">
            Explore UI/UX Services
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our UI/UX design services combine research, strategy, and creative
            design to deliver seamless digital experiences across web and mobile
            platforms.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>User Research & Analysis</h3>
              <p>
                Understand user behavior, needs, and pain points through
                research-driven insights.
              </p>
            </div>

            <div className="card animate">
              <h3>Interface Design</h3>
              <p>
                Design visually appealing, intuitive interfaces aligned with
                usability best practices.
              </p>
            </div>

            <div className="card animate">
              <h3>Usability Testing</h3>
              <p>
                Validate designs through testing, feedback, and continuous
                improvement cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our UI/UX Design Process</h2>

          <p className="section-intro">
            A user-centered design process focused on clarity, usability, and
            results.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Research</span>
              <h3>User & Market Insights</h3>
              <p>
                Research users, competitors, and product goals to define the
                design direction.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design</span>
              <h3>Wireframes & Visual Design</h3>
              <p>
                Create wireframes, prototypes, and high-fidelity UI designs.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Validate</span>
              <h3>Testing & Refinement</h3>
              <p>
                Test usability, gather feedback, and refine designs for optimal
                user experience.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Designing Experiences Users Love</h2>
          <p className="dt-subtitle">
            Turning user needs into intuitive digital experiences.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before UI/UX Design</h3>
              <ul>
                <li>Confusing user interfaces</li>
                <li>Poor user engagement</li>
                <li>High bounce rates</li>
                <li>Low conversion rates</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Research</span>
                <p>User-centered insights</p>
              </div>
              <div className="dt-core-item">
                <span>Design</span>
                <p>Clean and intuitive interfaces</p>
              </div>
              <div className="dt-core-item">
                <span>Test</span>
                <p>Validated usability improvements</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After UI/UX Design</h3>
              <ul>
                <li>Improved usability</li>
                <li>Higher user engagement</li>
                <li>Increased conversions</li>
                <li>Stronger brand experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Create Better User Experiences</h2>
            <p>
              Ready to improve your digital product’s usability and design?
              Let’s build experiences your users will love.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our UI/UX design team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your product or design needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request UI/UX Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="UI UX Design Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
