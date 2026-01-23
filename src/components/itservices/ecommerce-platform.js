import { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function EcommerceDevelopment() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "E-Commerce Development Services | Scalable Online Stores & Marketplaces";

    const content =
      "Professional e-commerce development services for scalable, secure, and high-converting online stores. Build powerful shopping experiences with modern technologies.";

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

  /* ================= HERO SLIDESHOW (FIXED) ================= */
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

  /* ================= FADE-UP ================= */
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
          <h1>E-Commerce Development Services</h1>
          <p>
            Manovate Technologies builds secure, scalable, and high-performing
            e-commerce platforms that drive sales and enhance customer
            experiences. From startups to enterprises, we deliver solutions
            designed for growth.
          </p>

          <a href="#services" className="btn-primary">
            Explore E-Commerce Solutions
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our e-commerce development services help businesses launch and scale
            online stores with seamless shopping experiences, secure payments,
            and powerful management tools.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Custom Store Development</h3>
              <p>
                Fully customized online stores built for performance, branding,
                and high conversion rates.
              </p>
            </div>

            <div className="card animate">
              <h3>Multi-Channel Selling</h3>
              <p>
                Sell across web, mobile, marketplaces, and social platforms
                using a unified commerce system.
              </p>
            </div>

            <div className="card animate">
              <h3>Scalable Infrastructure</h3>
              <p>
                Architected to handle traffic spikes, large product catalogs,
                and long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>E-Commerce Development Process</h2>
          <p className="section-intro">
            A proven approach to building, launching, and scaling successful
            e-commerce platforms.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Plan</span>
              <h3>Strategy & Requirements</h3>
              <p>
                Understand business goals, customer journeys, and define the
                right e-commerce architecture.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Build</span>
              <h3>Store Design & Development</h3>
              <p>
                Develop responsive storefronts, secure payment flows, and
                powerful admin dashboards.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch</span>
              <h3>Testing & Go-Live</h3>
              <p>
                Test performance, security, and customer journeys before
                launching your online store.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our E-Commerce Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>E-Commerce Expertise</h3>
              <p>
                Experience building scalable e-commerce platforms across
                industries and markets.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Reliable</h3>
              <p>
                Secure payment gateways, data protection, and performance
                optimization.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Growth-Focused Solutions</h3>
              <p>
                Platforms designed to support marketing, analytics, and
                long-term revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your E-Commerce Project</h2>
            <p>
              Ready to launch or scale your online store? Connect with our
              e-commerce experts today.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our e-commerce team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your e-commerce idea..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="E-Commerce Development Services"
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
