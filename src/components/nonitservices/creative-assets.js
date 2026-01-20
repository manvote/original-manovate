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
      "Creative Assets Services | Visual Design, Branding & Digital Creatives";

    const content =
      "Professional creative assets services including graphic design, brand visuals, marketing creatives, digital assets, UI graphics, illustrations, and multimedia content to support brand consistency and marketing growth.";

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
          <h1>Creative Assets Services</h1>
          <p>
            Manovate Technologies delivers high-quality creative assets that help
            brands communicate visually, maintain consistency, and stand out
            across digital platforms. We design impactful visuals that support
            marketing, branding, and product experiences.
          </p>

          <a href="#services" className="btn-primary">
            Create Visual Impact
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our creative assets services provide businesses with scalable visual
            resources including brand graphics, marketing creatives, digital
            illustrations, UI assets, and multimedia designs tailored to your
            brand identity.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Brand & Marketing Creatives</h3>
              <p>
                Logos, banners, ads, social media creatives, and promotional
                visuals designed to enhance brand recognition and engagement.
              </p>
            </div>

            <div className="card animate">
              <h3>UI & Digital Assets</h3>
              <p>
                Design of icons, UI elements, illustrations, and interface
                graphics optimized for web and mobile applications.
              </p>
            </div>

            <div className="card animate">
              <h3>Multimedia Assets</h3>
              <p>
                Creative visuals, motion graphics, and presentation assets that
                bring digital experiences to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Creative Process</h2>

          <p className="section-intro">
            A structured workflow for designing creative assets aligned with
            brand goals and marketing needs.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Brand & Requirement Analysis</h3>
              <p>
                We understand your brand identity, target audience, and creative
                objectives before designing visual assets.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design</span>
              <h3>Creative Asset Production</h3>
              <p>
                Our designers craft high-quality creative assets following brand
                guidelines and visual best practices.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Delivery</span>
              <h3>Review & Optimization</h3>
              <p>
                We refine designs based on feedback and deliver ready-to-use
                creative assets for digital and marketing use.
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
            <h2>Request Creative Assets</h2>
            <p>
              Need professional creative assets for your brand or campaigns?
              Let’s design visuals that elevate your business.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our creative team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your creative requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Creative Assets
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Creative Assets Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
