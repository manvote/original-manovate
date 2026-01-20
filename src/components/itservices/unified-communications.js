import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function UnifiedCommunicationsSolutions() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length; // ✅ FIX
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "Unified Communications Solutions | VoIP, IP PBX & Business Communication Systems";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Enterprise unified communications solutions including VoIP phones, IP PBX systems, Grandstream IP phones, call management, unified collaboration platforms, and business telephony solutions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Enterprise unified communications solutions including VoIP phones, IP PBX systems, Grandstream IP phones, call management, unified collaboration platforms, and business telephony solutions.";
      document.head.appendChild(meta);
    }
  }, []);

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
          <h1>Unified Communications Solutions</h1>
          <p>
            Integrated VoIP, IP PBX, and enterprise communication systems
            designed to improve collaboration, call quality, and business
            efficiency.
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
            Our unified communications solutions combine VoIP telephony,
            IP PBX systems, collaboration tools, and enterprise devices
            into a single, scalable communication platform.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>VoIP & Business Telephony</h3>
              <p>
                Secure, scalable VoIP and IP PBX solutions for high-quality
                business communication.
              </p>
            </div>

            <div className="card animate">
              <h3>Unified Communication Platforms</h3>
              <p>
                Centralized platforms integrating voice, messaging,
                routing, and collaboration.
              </p>
            </div>

            <div className="card animate">
              <h3>Enterprise Communication Devices</h3>
              <p>
                Deployment of Grandstream IP phones and enterprise
                communication hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Implement Unified Communications</h2>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment</span>
              <h3>Communication Needs Analysis</h3>
              <p>
                Evaluation of call flows, systems, and business
                communication requirements.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment</span>
              <h3>VoIP & IP PBX Implementation</h3>
              <p>
                Deployment of VoIP systems, IP PBX platforms, and
                unified communication tools.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimization</span>
              <h3>Ongoing Management & Support</h3>
              <p>
                Monitoring, optimization, and support for reliable,
                high-performance communication.
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
              <h3>Unified Communications Expertise</h3>
              <p>
                Deep expertise in VoIP, IP PBX, and enterprise
                communication systems.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable Business Communication</h3>
              <p>
                Systems designed to scale with business growth and
                multi-location operations.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Reliable Solutions</h3>
              <p>
                High-availability and secure communication solutions
                ensuring business continuity.
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
              Upgrade your business communication with a modern
              unified communications platform.
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
                placeholder="Tell us about your communication needs..."
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
              alt="Unified Communications Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
