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
    Brand Identity Design Services | Logo Design, Brand Strategy & Visual Identity | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies offers brand identity design services including logo design, brand strategy, visual identity systems, and brand guidelines to help businesses build strong, recognizable, and consistent brands."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/brand-identity-design"
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
          <h1>Brand Identity Design</h1>
          <p>
            Manovate Technologies helps businesses create distinctive and
            consistent brand identities that connect emotionally with audiences
            and stand out in competitive markets.
          </p>

          <a href="#services" className="btn-primary">
            Explore Branding Services
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our brand identity design services combine strategy, creativity, and
            visual design to build brands that are recognizable, meaningful, and
            scalable across all touchpoints.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Logo & Visual Identity</h3>
              <p>
                Create memorable logos and visual systems that reflect your
                brand’s personality, values, and positioning.
              </p>
            </div>

            <div className="card animate">
              <h3>Brand Strategy</h3>
              <p>
                Define brand positioning, messaging frameworks, and tone of
                voice to guide consistent communication.
              </p>
            </div>

            <div className="card animate">
              <h3>Brand Guidelines</h3>
              <p>
                Develop comprehensive brand guidelines to ensure consistency
                across digital, marketing, and physical assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Brand Identity Process</h2>

          <p className="section-intro">
            A structured and creative approach to building strong brand
            foundations.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discover</span>
              <h3>Brand Research</h3>
              <p>
                Understand your business, target audience, competitors, and
                market positioning.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design</span>
              <h3>Visual Identity Creation</h3>
              <p>
                Design logos, color systems, typography, and supporting brand
                assets.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Define</span>
              <h3>Guidelines & Rollout</h3>
              <p>
                Deliver brand guidelines and support implementation across
                platforms and teams.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Building Brands with Purpose</h2>
          <p className="dt-subtitle">
            From visual identity to lasting brand recognition.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Brand Identity Design</h3>
              <ul>
                <li>Inconsistent brand visuals</li>
                <li>Low brand recognition</li>
                <li>Unclear brand messaging</li>
                <li>Weak market differentiation</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Strategy</span>
                <p>Clear positioning and brand direction</p>
              </div>
              <div className="dt-core-item">
                <span>Design</span>
                <p>Consistent and recognizable visual identity</p>
              </div>
              <div className="dt-core-item">
                <span>Consistency</span>
                <p>Unified brand experience across all channels</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Brand Identity Design</h3>
              <ul>
                <li>Strong and consistent brand presence</li>
                <li>Improved customer trust</li>
                <li>Clear brand positioning</li>
                <li>Scalable brand system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Build a Brand That Stands Out</h2>
            <p>
              Ready to create or refresh your brand identity? Let’s design a
              brand that truly represents your business.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our branding team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your brand or design needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Branding Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Brand Identity Design Services"
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
