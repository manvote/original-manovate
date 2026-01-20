import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function CustomEnterpriseSoftware() {
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
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
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

  /* ================= FADE-UP ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("visible")
        ),
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
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="service-hero-content animate">
          <h1>Custom Enterprise Software Development</h1>
          <p>
            Manovate Technologies delivers custom enterprise software solutions
            including CRM, ERP, HRMS, and internal business systems built for
            scalability, security, and long-term performance.
          </p>

          <a href="#services" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Enterprise Software Overview</h2>

          <p className="section-intro">
            Our enterprise software development services help organizations
            streamline operations, automate workflows, and improve
            decision-making through secure, high-performance custom systems.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Enterprise CRM & Business Applications</h3>
              <p>
                Custom CRM and business applications that centralize customer
                data, automate processes, and improve operational visibility.
              </p>
            </div>

            <div className="card animate">
              <h3>ERP & Process Automation Software</h3>
              <p>
                ERP solutions for finance, inventory, supply chain, and
                operations built using agile and DevOps-driven development.
              </p>
            </div>

            <div className="card animate">
              <h3>HRMS & Internal Management Systems</h3>
              <p>
                Secure HRMS platforms for payroll, employee management,
                compliance, and performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Building Reliable Enterprise Software Systems</h2>

          <p className="section-intro">
            Our enterprise SDLC ensures predictable delivery, quality assurance,
            and long-term maintainability for mission-critical systems.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">
                Requirements Analysis & Planning
              </span>
              <h3>Enterprise Software Strategy</h3>
              <p>
                Requirements engineering, system analysis, and technology
                selection aligned with business and compliance needs.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design & Development</span>
              <h3>Custom Software Engineering</h3>
              <p>
                Architecture design and development using modern tech stacks,
                agile methods, and secure coding practices.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">
                Testing, Deployment & Support
              </span>
              <h3>Quality Assurance & Lifecycle Management</h3>
              <p>
                Comprehensive testing, deployment, monitoring, and continuous
                improvement across the software lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Enterprise Software Engineering Expertise</h3>
              <p>
                Proven methodologies, DevOps practices, and scalable
                architectures for enterprise-grade systems.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Scalable Systems</h3>
              <p>
                Robust authentication, data protection, and compliance-ready
                enterprise software solutions.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Driven Development</h3>
              <p>
                ROI-focused development approach aligned with operational
                efficiency and automation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Contact Manovate Technologies</h2>
            <p>
              Discuss your enterprise software requirements and explore how
              custom CRM, ERP, and HRMS solutions can transform operations.
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
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Project
              </button>
            </form>
          </div>

          <div className="contact-right">
            <p className="interest-title">I'm interested in…</p>
            <div className="interest-tags">
              {[
                "CRM",
                "ERP",
                "HRMS",
                "Enterprise Software",
                "Automation",
                "Internal Systems",
                "Custom Applications",
                "Other",
              ].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
