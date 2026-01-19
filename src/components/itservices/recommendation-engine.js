import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import "./android-app.css";

export default function AIRecommendationSystems() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "AI Recommendation Systems | Personalized Recommendation Solutions";

    const content =
      "We build AI-powered recommendation systems that deliver personalized product, content, and service recommendations. Our solutions leverage machine learning, collaborative filtering, and behavioral analytics to increase engagement, conversions, and customer satisfaction.";

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
          <h1>AI Recommendation Systems</h1>
          <p>
            Manovate Technologies builds intelligent recommendation systems that
            personalize user experiences and drive engagement. Our AI-powered
            solutions deliver accurate product, content, and service
            recommendations using machine learning and behavioral insights.
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
            Our recommendation system solutions help businesses personalize
            interactions, increase conversions, and improve customer retention
            by delivering relevant recommendations at the right time.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Product Recommendation Engines</h3>
              <p>
                Personalized product recommendations based on user behavior,
                purchase history, and preferences.
              </p>
            </div>

            <div className="card animate">
              <h3>Content & Media Recommendations</h3>
              <p>
                AI-driven content recommendations for videos, articles, music,
                and learning platforms.
              </p>
            </div>

            <div className="card animate">
              <h3>Customer Personalization</h3>
              <p>
                Tailored experiences using predictive analytics, segmentation,
                and real-time recommendation models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Build Recommendation Systems</h2>
          <p className="section-intro">
            A structured framework for designing scalable and intelligent
            recommendation engines.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Use Case & Data Analysis</h3>
              <p>
                Analyze user behavior, business goals, and data sources to define
                the right recommendation strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Model Development</span>
              <h3>Recommendation Model Design</h3>
              <p>
                Build collaborative filtering, content-based, and hybrid
                recommendation models.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment</span>
              <h3>Deployment & Optimization</h3>
              <p>
                Integrate systems into production with continuous optimization
                and performance monitoring.
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
              <h3>Recommendation Expertise</h3>
              <p>
                Strong expertise in machine learning, data science, and AI-based
                recommendation algorithms.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Real-Time Systems</h3>
              <p>
                Designed to handle millions of users with real-time
                personalization.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Focused Outcomes</h3>
              <p>
                Focused on measurable impact such as engagement, conversions,
                and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our AI Experts</h2>
            <p>
              Transform your platform with AI-powered recommendation systems.
              Get started today.
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
                placeholder="Tell us about your recommendation system..."
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
              alt="AI Recommendation System"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
