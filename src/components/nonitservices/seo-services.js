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
      "SEO Services Company | Long-Term Organic Traffic & Brand Growth";

    const content =
      "Professional SEO services to improve search engine rankings, increase organic traffic, and build long-term brand visibility. We provide technical SEO, on-page SEO, local SEO, enterprise SEO, and data-driven SEO strategies.";

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
          <h1>SEO Services for Organic Growth</h1>
          <p>
            Manovate Technologies is an SEO agency delivering professional search
            engine optimization services that help businesses improve rankings,
            drive organic traffic, and build long-term brand visibility. Our SEO
            strategies focus on sustainable growth, not short-term gains.
          </p>

          <a href="#services" className="btn-primary">
            Get SEO Started
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our SEO services help businesses rank higher on Google, attract
            qualified organic traffic, and improve online visibility. We deliver
            technical SEO, on-page SEO, content optimization, local SEO,
            enterprise SEO, and ongoing SEO management.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Technical & On-Page SEO</h3>
              <p>
                Website structure, page speed, indexing, metadata, content, and
                internal linking optimized for search engine performance.
              </p>
            </div>

            <div className="card animate">
              <h3>Content & Keyword Strategy</h3>
              <p>
                Keyword research and content optimization targeting high-intent
                queries to drive qualified organic traffic.
              </p>
            </div>

            <div className="card animate">
              <h3>Local, Enterprise & Ecommerce SEO</h3>
              <p>
                Scalable SEO solutions for local businesses, enterprises, SaaS,
                and ecommerce platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How Our SEO Services Work</h2>

          <p className="section-intro">
            A structured SEO process designed for long-term rankings and
            sustainable organic growth.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Audit</span>
              <h3>SEO Audit & Research</h3>
              <p>
                Analyze website performance, competitors, keywords, technical
                issues, and content gaps.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimize</span>
              <h3>Technical & Content SEO</h3>
              <p>
                Implement technical fixes, on-page SEO improvements, content
                optimization, and internal linking.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Grow</span>
              <h3>Monitoring & SEO Growth</h3>
              <p>
                Track rankings, traffic, and performance while continuously
                refining SEO strategies.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= TRANSFORMATION FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Search Engine Optimization Strategy</h2>
          <p className="dt-subtitle">
            A long-term SEO approach focused on sustainable growth.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before SEO</h3>
              <ul>
                <li>Low search visibility</li>
                <li>Inconsistent traffic</li>
                <li>Poor keyword rankings</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Research</span>
                <p>Keyword research & SEO audits</p>
              </div>
              <div className="dt-core-item">
                <span>Optimization</span>
                <p>Technical & on-page SEO</p>
              </div>
              <div className="dt-core-item">
                <span>Growth</span>
                <p>Monitoring & continuous improvement</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After SEO</h3>
              <ul>
                <li>Higher Google rankings</li>
                <li>Consistent organic traffic</li>
                <li>Stronger brand authority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our SEO Experts</h2>
            <p>
              Ready to improve rankings and grow organic traffic? Speak with our
              SEO specialists today.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our SEO team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your SEO goals..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request SEO Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="SEO Services and Organic Traffic Growth"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
