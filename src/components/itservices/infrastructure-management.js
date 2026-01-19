import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import "./android-app.css";

export default function ITInfrastructureManagement() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length; // ✅ FIX
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= HERO SLIDESHOW ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]); // ✅ FIXED DEPENDENCY

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
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add("visible")
        ),
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
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
          <h1>IT Infrastructure Management</h1>
          <p>
            We deliver comprehensive IT infrastructure management services
            covering help desk support, device management, Microsoft 365,
            cloud services, and network monitoring to ensure secure and
            high-performance IT environments.
          </p>

          <a href="#services" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our IT infrastructure management services help organizations
            streamline operations, support end users, manage devices,
            and maintain reliable cloud and on-premise systems.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Help Desk & IT Support</h3>
              <p>
                Reliable service desk, incident resolution, remote support,
                and end-user assistance to reduce downtime.
              </p>
            </div>

            <div className="card animate">
              <h3>Device & Endpoint Management</h3>
              <p>
                Centralized device monitoring, asset tracking, patch
                management, and endpoint security.
              </p>
            </div>

            <div className="card animate">
              <h3>Cloud & Microsoft 365 Management</h3>
              <p>
                Secure management of Microsoft 365, cloud infrastructure,
                collaboration tools, and digital workplaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Infrastructure Management Approach</h2>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment & Planning</span>
              <h3>Infrastructure Analysis</h3>
              <p>
                We analyze infrastructure, devices, cloud resources, and
                service desk operations.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Implementation</span>
              <h3>Managed Services Deployment</h3>
              <p>
                Deployment of help desk tools, monitoring systems, and
                automation workflows.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Monitoring</span>
              <h3>Continuous Optimization</h3>
              <p>
                Ongoing monitoring, patching, compliance support, and
                performance optimization.
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
              <h3>End-to-End Managed IT</h3>
              <p>
                Complete infrastructure, help desk, and cloud management
                services.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Operational Efficiency</h3>
              <p>
                Reduced downtime, optimized costs, and automated workflows.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Scalable Systems</h3>
              <p>
                Enterprise-grade security and scalable infrastructure
                solutions.
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
              Optimize your IT infrastructure with our managed IT
              services.
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
                placeholder="Tell us about your IT requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="IT Infrastructure Management"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
