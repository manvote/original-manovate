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
    Operational Efficiency Consulting Services | Process Optimization & Cost Reduction | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides operational efficiency consulting services to help organizations optimize processes, reduce operational costs, improve productivity, and implement data-driven performance improvements for sustainable business growth."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/operational-efficiency-consulting"
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
          <h1>Operational Efficiency Consulting</h1>
          <p>
            Manovate Technologies helps organizations optimize operations,
            eliminate inefficiencies, and maximize productivity through
            data-driven operational consulting.
          </p>

          <a href="#services" className="btn-primary">
            Explore Consulting Services
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our operational efficiency consulting services identify bottlenecks,
            streamline workflows, and implement sustainable improvements that
            drive measurable business results.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Process Optimization</h3>
              <p>
                Analyze and redesign business processes to reduce waste, improve
                execution speed, and increase operational clarity.
              </p>
            </div>

            <div className="card animate">
              <h3>Cost Reduction</h3>
              <p>
                Identify cost-saving opportunities while maintaining quality,
                compliance, and service performance.
              </p>
            </div>

            <div className="card animate">
              <h3>Performance Measurement</h3>
              <p>
                Define KPIs, dashboards, and metrics to monitor efficiency and
                enable continuous improvement.
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
            A structured methodology to improve operational performance across
            teams and processes.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assess</span>
              <h3>Current State Analysis</h3>
              <p>
                Evaluate existing processes, systems, resource utilization, and
                operational challenges.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimize</span>
              <h3>Process Improvement</h3>
              <p>
                Design optimized workflows, eliminate inefficiencies, and define
                improvement initiatives.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Implement</span>
              <h3>Execution & Change Management</h3>
              <p>
                Implement solutions, support teams through change, and embed
                continuous improvement practices.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Driving Operational Excellence</h2>
          <p className="dt-subtitle">
            Transforming inefficiencies into measurable competitive advantages.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Efficiency Consulting</h3>
              <ul>
                <li>Inefficient processes</li>
                <li>High operational costs</li>
                <li>Low productivity</li>
                <li>Limited performance visibility</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Analyze</span>
                <p>Process and performance analysis</p>
              </div>
              <div className="dt-core-item">
                <span>Improve</span>
                <p>Optimized workflows and systems</p>
              </div>
              <div className="dt-core-item">
                <span>Measure</span>
                <p>Continuous performance tracking</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Efficiency Consulting</h3>
              <ul>
                <li>Streamlined operations</li>
                <li>Reduced costs</li>
                <li>Improved productivity</li>
                <li>Data-driven decision making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Improve Your Operational Performance</h2>
            <p>
              Ready to enhance efficiency and reduce costs? Our consultants are
              here to help you achieve operational excellence.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our consulting team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your operational challenges..."
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
              alt="Operational Efficiency Consulting Services"
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
