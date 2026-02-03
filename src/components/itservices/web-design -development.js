import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function WebDevelopment() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <Helmet>
  <title>
    Web Development Services – Modern Websites & Web Applications | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides web development services including modern websites, custom web applications, frontend and backend development, and scalable full-stack solutions built for performance and security."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/web-development"
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
          <h1>Web Development Solutions</h1>
          <p>
            Manovate Technologies builds modern, scalable, and high-performing
            websites and web applications. We specialize in crafting secure,
            responsive, and user-focused digital experiences using the latest
            frontend and backend technologies.
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
            Our web development services empower businesses with fast,
            reliable, and scalable digital solutions. From custom websites to
            complex web applications, we design and develop platforms that
            drive engagement and growth.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Frontend Development</h3>
              <p>
                Responsive, interactive, and visually engaging user interfaces
                built with React, Next.js, and modern UI frameworks.
              </p>
            </div>

            <div className="card animate">
              <h3>Backend & API Development</h3>
              <p>
                Secure backend systems, REST & GraphQL APIs, and scalable
                databases built for performance.
              </p>
            </div>

            <div className="card animate">
              <h3>Full-Stack Web Applications</h3>
              <p>
                End-to-end web solutions combining frontend, backend, cloud,
                and DevOps best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Deliver Web Solutions</h2>
          <p className="section-intro">
            A structured and agile-driven process to build reliable,
            scalable, and future-ready web platforms.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Planning</span>
              <h3>Requirements & Architecture</h3>
              <p>
                We analyze business goals, users, and technical needs to
                define the right technology stack.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development</span>
              <h3>Design & Implementation</h3>
              <p>
                UI/UX design and full-stack development using modern best
                practices.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch</span>
              <h3>Deployment & Optimization</h3>
              <p>
                Secure deployment, SEO optimization, and continuous
                performance improvements.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Modern Web Expertise</h3>
              <p>
                Expertise in modern JavaScript frameworks and scalable web
                architectures.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Performance & Security Focus</h3>
              <p>
                Fast-loading, SEO-friendly, and secure web solutions.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Driven Solutions</h3>
              <p>
                Solutions aligned with business goals and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Build Your Web Platform</h2>
            <p>
              Ready to build or scale your web product? Talk to our experts
              today.
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
                placeholder="Tell us about your web project..."
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
              alt="Web Development Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <p className="service-backlink">
  Explore our complete range of{" "}
  <a href="/itservices">IT Services & Software Engineering Solutions</a>.
</p>
<br />
<br />
      <Footer />
    </>
  );
}
