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
      "Content Management Services | Content Strategy, Publishing & Optimization";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional content management services including content strategy, creation, publishing, governance, optimization, and lifecycle management to ensure consistent, accurate, and scalable digital content."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Professional content management services including content strategy, creation, publishing, governance, optimization, and lifecycle management to ensure consistent, accurate, and scalable digital content.";
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
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="service-hero-content animate">
          <h1>Content Management Services</h1>
          <p>
            Manovate Technologies provides end-to-end content management services
            to help businesses organize, manage, publish, and optimize digital
            content across platforms with accuracy and consistency.
          </p>

          <a href="#services" className="btn-primary">
            Manage Content Effectively
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our content management services ensure your digital content remains
            structured, relevant, up-to-date, and optimized across websites,
            applications, and marketing channels.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Content Strategy & Planning</h3>
              <p>
                We define content frameworks, workflows, and governance models
                aligned with business goals and audience needs.
              </p>
            </div>

            <div className="card animate">
              <h3>Content Publishing & Maintenance</h3>
              <p>
                Manage content updates, formatting, publishing schedules, and
                version control across platforms.
              </p>
            </div>

            <div className="card animate">
              <h3>Content Optimization & Governance</h3>
              <p>
                Ensure content accuracy, compliance, SEO optimization, and
                lifecycle management for long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Content Management Workflow</h2>

          <p className="section-intro">
            A structured process for managing content efficiently and
            consistently.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Planning</span>
              <h3>Content Structuring & Strategy</h3>
              <p>
                Define content architecture, workflows, and publishing
                guidelines.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Execution</span>
              <h3>Publishing & Updates</h3>
              <p>
                Publish, update, and manage content across digital platforms
                efficiently.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimization</span>
              <h3>Content Review & Improvement</h3>
              <p>
                Monitor content performance, ensure compliance, and continuously
                improve quality.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our Content Specialists</h2>
            <p>
              Looking for reliable content management support? Let our experts
              handle your content lifecycle.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our content team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your content management needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Content Support
              </button>
            </form>
          </div>

          <div className="contact-right gif-service-
container">
            <img
              src={inventoryGif}
              alt="Content Management Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
<Footer />
    </>
  );
}
