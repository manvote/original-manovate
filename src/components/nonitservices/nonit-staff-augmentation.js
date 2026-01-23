import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./App.css";
import { Helmet } from "react-helmet-async";

export default function App() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);


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
    <Helmet>
  <title>
    Non-IT Staff Augmentation & Workforce Solutions | Manpower & Staffing Services | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies offers non-IT staff augmentation and workforce solutions including talent acquisition, manpower services, operational staffing, administrative staffing, and customer support hiring. We help businesses scale teams quickly with qualified professionals."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/non-it-staff-augmentation"
  />
</Helmet>

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
          <h1>Non-IT Staff Augmentation & Workforce Solutions</h1>
          <p>
            Manovate Technologies provides non-IT staff augmentation services to
            support talent acquisition, manpower services, operational staffing,
            administrative staffing, and customer support hiring. We help
            businesses scale teams quickly with qualified professionals across
            multiple functions.
          </p>

          <a href="#services" className="btn-primary">
            Explore Staffing Solutions
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our non-IT staffing and workforce augmentation solutions help
            organizations meet staffing requirements efficiently. We support
            operations, administration, customer service, logistics, sales
            support, and business management roles through flexible staffing
            models.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Talent Acquisition & Recruitment</h3>
              <p>
                End-to-end recruitment services including sourcing, screening,
                interviewing, and onboarding for non-IT roles.
              </p>
            </div>

            <div className="card animate">
              <h3>Staff Augmentation & Deployment</h3>
              <p>
                Flexible workforce deployment with temporary, contract, and
                long-term staffing models.
              </p>
            </div>

            <div className="card animate">
              <h3>Operational & Support Staffing</h3>
              <p>
                Administrative staff, customer support teams, operational
                personnel, and service industry staffing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Staff Augmentation Process</h2>

          <p className="section-intro">
            A structured staffing workflow to deliver qualified personnel on
            time.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Identify</span>
              <h3>Staffing Requirements</h3>
              <p>
                Understand role requirements, skills, experience levels, and
                workforce expectations.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Source</span>
              <h3>Talent Sourcing & Screening</h3>
              <p>
                Source qualified candidates through recruitment networks and
                staffing channels.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deploy</span>
              <h3>Staff Deployment & Management</h3>
              <p>
                Deploy staff with payroll support, compliance handling, and
                ongoing workforce management.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= TRANSFORMATION FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Flexible Workforce Augmentation</h2>
          <p className="dt-subtitle">
            Scaling teams efficiently through professional staffing solutions.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Staffing Support</h3>
              <ul>
                <li>Talent shortages</li>
                <li>Long hiring cycles</li>
                <li>Operational workload pressure</li>
                <li>Limited internal recruitment capacity</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Talent</span>
                <p>Qualified professionals and skilled personnel</p>
              </div>
              <div className="dt-core-item">
                <span>Staffing</span>
                <p>Workforce augmentation and rapid deployment</p>
              </div>
              <div className="dt-core-item">
                <span>Support</span>
                <p>Payroll, compliance, and workforce management</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Augmentation</h3>
              <ul>
                <li>On-time staff availability</li>
                <li>Improved operational efficiency</li>
                <li>Reduced hiring costs</li>
                <li>Scalable workforce</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Build Your Workforce</h2>
            <p>
              Looking for reliable non-IT staffing and workforce augmentation?
              Connect with our staffing experts today.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your staffing requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Staffing Support
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Non-IT Staff Augmentation and Workforce Solutions"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <p className="service-backlink">
  Explore our complete range of{" "}
  <a href="/nonitservices">Non-IT Services & Business Solutions</a>.
</p>
<br />
<br />
      <Footer />
    </>
  );
}
