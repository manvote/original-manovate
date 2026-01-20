import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function CrossPlatformAppDevelopment() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "Cross-Platform App Development Services | iOS & Android Apps";

    const content =
      "Cross-platform app development services to build high-performance mobile applications for iOS and Android using a single codebase. We deliver scalable, secure, and cost-effective cross-platform mobile solutions.";

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
          <h1>Cross-Platform App Development Services</h1>
          <p>
            Manovate Technologies builds high-performance cross-platform mobile
            applications that run seamlessly on both iOS and Android using a
            single codebase. Our solutions reduce development cost while
            delivering consistent user experiences.
          </p>
          <a href="#services" className="btn-primary">
            Build Your App
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our cross-platform app development services help businesses launch
            feature-rich mobile apps faster using a unified development approach.
            We focus on scalability, security, and performance across platforms.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Single Codebase Development</h3>
              <p>
                Develop once and deploy on iOS and Android with shared business
                logic and reusable components.
              </p>
            </div>

            <div className="card animate">
              <h3>Native-Like Performance</h3>
              <p>
                Optimized UI and smooth performance delivering native-like
                experiences across devices.
              </p>
            </div>

            <div className="card animate">
              <h3>Scalable & Secure Architecture</h3>
              <p>
                Robust app architecture designed to support future growth,
                integrations, and security needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Cross-Platform Development Process</h2>
          <p className="section-intro">
            A proven approach to delivering reliable and cost-effective
            cross-platform mobile applications.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Planning</span>
              <h3>App Strategy & Requirements</h3>
              <p>
                Define app goals, target users, and platform requirements to
                design the right cross-platform strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development</span>
              <h3>Cross-Platform App Build</h3>
              <p>
                Develop, test, and optimize apps with shared logic and
                platform-specific enhancements.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch & Scale</span>
              <h3>Deployment & Optimization</h3>
              <p>
                Publish apps, monitor performance, and continuously optimize
                for scalability and long-term success.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our Cross-Platform Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Cost-Effective Development</h3>
              <p>
                Reduced development and maintenance costs with a unified
                codebase.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Faster Time-to-Market</h3>
              <p>
                Launch apps on multiple platforms simultaneously.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable Mobile Solutions</h3>
              <p>
                Apps designed to grow alongside your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your Cross-Platform App</h2>
            <p>
              Planning to build an app for both iOS and Android? Talk to our
              experts today.
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
                placeholder="Tell us about your app idea..."
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
              alt="Cross-Platform Mobile App Development"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
