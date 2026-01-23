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
    Digital Transformation Consulting Services | Strategy, Technology & Process Modernisation | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides digital transformation consulting services to help organizations modernize business processes, technology ecosystems, and operating models through strategy, cloud, automation, data, and enterprise transformation initiatives."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/digital-transformation-consulting"
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
          <h1>Digital Transformation Consulting</h1>
          <p>
            Manovate Technologies delivers digital transformation consulting
            services that help organizations modernize business processes,
            operational models, and technology ecosystems. We guide enterprises,
            public sector organizations, and growing businesses through
            strategic transformation.
          </p>

          <a href="#services" className="btn-primary">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our digital transformation consulting services combine management
            consulting, IT consulting, and technology strategy to help businesses
            adapt, innovate, and scale through enterprise transformation,
            automation, cloud, data, and customer experience initiatives.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Strategy & Management Consulting</h3>
              <p>
                Business and management consulting aligned with people,
                processes, and technology for long-term growth.
              </p>
            </div>

            <div className="card animate">
              <h3>Technology & Digital Solutions</h3>
              <p>
                Cloud transformation, automation, data analytics, AI, and modern
                digital platforms enabling enterprise transformation.
              </p>
            </div>

            <div className="card animate">
              <h3>Operational Transformation</h3>
              <p>
                Redesign operating models, optimize workflows, and modernize
                service delivery for efficiency and agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Consulting Approach</h2>

          <p className="section-intro">
            A structured end-to-end approach to successful digital
            transformation.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assess</span>
              <h3>Business & Technology Evaluation</h3>
              <p>
                Assess processes, systems, and digital maturity to identify
                transformation opportunities.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Plan</span>
              <h3>Strategy & Roadmap</h3>
              <p>
                Define transformation strategy, roadmap, and governance aligned
                with business goals.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Execute</span>
              <h3>Delivery & Optimization</h3>
              <p>
                Support execution, change enablement, and continuous improvement
                for long-term success.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= TRANSFORMATION FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Digital Transformation Framework</h2>
          <p className="dt-subtitle">
            Aligning strategy, technology, and operations for sustainable growth.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Transformation</h3>
              <ul>
                <li>Legacy systems and disconnected processes</li>
                <li>Manual operations and limited visibility</li>
                <li>Slow innovation and high costs</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Strategy</span>
                <p>Digital roadmap and governance</p>
              </div>
              <div className="dt-core-item">
                <span>Technology</span>
                <p>Cloud, automation, data & AI</p>
              </div>
              <div className="dt-core-item">
                <span>Operations</span>
                <p>Optimized processes & service delivery</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Transformation</h3>
              <ul>
                <li>Integrated digital operations</li>
                <li>Improved agility and scalability</li>
                <li>Data-driven decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your Digital Transformation</h2>
            <p>
              Ready to modernize your business? Talk to our digital
              transformation consultants today.
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
                placeholder="Tell us about your transformation goals..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Digital Transformation Consulting"
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
