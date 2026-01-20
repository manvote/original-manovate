import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function InventoryAssetManagement() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length; // ✅ FIX
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= HERO SLIDESHOW ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]); // ✅ FIXED

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
          <h1>Inventory & Asset Management Systems</h1>
          <p>
            We build intelligent inventory and asset management systems that
            provide real-time visibility, control, and optimization across
            warehouses, offices, and distributed locations.
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
            Our inventory and asset management solutions help organizations
            track stock levels, manage assets efficiently, reduce losses, and
            improve operational control with real-time data and analytics.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Real-Time Inventory Tracking</h3>
              <p>
                Live inventory visibility across warehouses and locations to
                prevent stockouts and overstocking.
              </p>
            </div>

            <div className="card animate">
              <h3>Asset Lifecycle Management</h3>
              <p>
                End-to-end asset tracking from procurement to retirement for
                maximum utilization and cost control.
              </p>
            </div>

            <div className="card animate">
              <h3>Centralized Reporting & Analytics</h3>
              <p>
                Dashboards, analytics, and automated reporting for smarter
                inventory and asset decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Build Intelligent Inventory Systems</h2>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery & Planning</span>
              <h3>Requirements & System Design</h3>
              <p>
                Analysis of workflows, inventory challenges, and asset
                management requirements.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development & Integration</span>
              <h3>System Development & Automation</h3>
              <p>
                Scalable platforms with automation, integrations, and real-time
                synchronization.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment & Optimization</span>
              <h3>Launch & Continuous Improvement</h3>
              <p>
                Deployment, training, monitoring, and long-term optimization.
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
              <h3>Domain-Focused Solutions</h3>
              <p>
                Industry-aligned inventory and asset systems that deliver real
                operational value.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Future-Ready</h3>
              <p>
                Systems designed to scale across locations and business growth.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Data-Driven Optimization</h3>
              <p>
                Analytics, automation, and insights to reduce costs and improve
                efficiency.
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
              Transform your inventory and asset operations with a smart,
              real-time management system.
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

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Inventory and Asset Management"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
