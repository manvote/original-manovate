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
      "Lead Design & Product Design Strategy | Manovate Technologies";

    const content =
      "We provide lead design and product design strategy services that align business goals, user needs, and scalable design systems. From UX research and design leadership to enterprise-grade design systems, we help organizations build impactful digital products.";

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
          <h1>Lead Design & Product Experience Strategy</h1>
          <p>
            Manovate Technologies provides senior-level design leadership to help
            organizations craft meaningful digital experiences. We bridge
            business vision, user needs, and scalable design systems to deliver
            products that perform, scale, and inspire.
          </p>

          <a href="#services" className="btn-primary">
            Explore Our Approach
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Design Leadership Overview</h2>

          <p className="section-intro">
            Our lead design services go beyond visuals. We guide product teams
            through research, strategy, and execution to ensure every design
            decision supports long-term business outcomes and exceptional user
            experiences.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>UX Strategy & Research</h3>
              <p>
                User research, journey mapping, usability testing, and insight
                synthesis that inform strong, evidence-based design decisions.
              </p>
            </div>

            <div className="card animate">
              <h3>Product & Interaction Design</h3>
              <p>
                End-to-end product design including information architecture,
                interaction design, and refined user interfaces.
              </p>
            </div>

            <div className="card animate">
              <h3>Design Systems & Governance</h3>
              <p>
                Scalable design systems that improve consistency, speed, and
                cross-team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Lead Design Initiatives</h2>

          <p className="section-intro">
            A structured approach to building impactful, scalable, and
            high-performing digital products.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Business & User Alignment</h3>
              <p>
                Stakeholder alignment, success metrics definition, and deep user
                understanding to form a strong design foundation.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design</span>
              <h3>Experience & System Design</h3>
              <p>
                Prototyping, interaction design, and system creation that balance
                creativity, usability, and feasibility.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Delivery</span>
              <h3>Collaboration & Execution</h3>
              <p>
                Close collaboration with engineering and product teams to ensure
                design integrity through implementation.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Scale</span>
              <h3>Optimization & Growth</h3>
              <p>
                Continuous improvement, audits, and system evolution to support
                long-term product growth.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our Lead Design Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Senior Design Leadership</h3>
              <p>
                Embedded design leadership that guides teams, mentors designers,
                and drives strategic decisions.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Driven Design</h3>
              <p>
                Design decisions aligned with measurable business outcomes, not
                just aesthetics.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable Design Systems</h3>
              <p>
                Systems and processes built to scale with your product and
                organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Work With Our Lead Designers</h2>
            <p>
              Elevate your product experience with strategic design leadership.
              Let’s discuss how we can support your design and product goals.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our design team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your product or design challenge..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Start a Conversation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Design leadership illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
