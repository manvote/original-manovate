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
    Accounting Management Services | Bookkeeping, Financial Reporting & Compliance | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides accounting management services including bookkeeping, general ledger management, accounts payable and receivable, payroll accounting, financial reporting, and statutory compliance for businesses of all sizes."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/accounting-management-services"
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
          <h1>Accounting Management Services</h1>
          <p>
            Manovate Technologies provides end-to-end accounting management
            services that help businesses maintain accurate financial records,
            ensure compliance, and gain complete visibility into financial
            performance.
          </p>

          <a href="#services" className="btn-primary">
            Get Accounting Support
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our accounting management services cover the complete financial
            lifecycle of a business. From bookkeeping and general ledger
            management to financial reporting and compliance, we ensure your
            accounts remain accurate and audit-ready.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Bookkeeping & General Ledger</h3>
              <p>
                Systematic bookkeeping, journal entries, and ledger maintenance
                for accurate and real-time financial tracking.
              </p>
            </div>

            <div className="card animate">
              <h3>Accounts Payable & Receivable</h3>
              <p>
                Invoice processing, billing, collections, vendor payments, and
                receivable management.
              </p>
            </div>

            <div className="card animate">
              <h3>Financial Reporting & Compliance</h3>
              <p>
                Balance sheets, income statements, cash flow reports, and
                regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Accounting Management Process</h2>

          <p className="section-intro">
            A structured accounting workflow designed to deliver accuracy,
            transparency, and financial control.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Setup</span>
              <h3>Accounting Setup & Review</h3>
              <p>
                Review existing records, chart of accounts, and accounting
                systems to establish a compliant foundation.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Processing</span>
              <h3>Daily Accounting Operations</h3>
              <p>
                Handle bookkeeping, reconciliations, payroll accounting, and
                ledger updates.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Reporting</span>
              <h3>Financial Reporting & Review</h3>
              <p>
                Prepare financial statements and management reports for informed
                decision-making.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="container">
          <h2 className="dt-title">Accounting Management Transformation</h2>
          <p className="dt-subtitle">
            From manual accounting challenges to structured and compliant
            financial management.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Accounting Management</h3>
              <ul>
                <li>Inconsistent financial records</li>
                <li>Delayed reconciliations</li>
                <li>Compliance risks</li>
                <li>Limited financial visibility</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Records</span>
                <p>Accurate bookkeeping and ledger control</p>
              </div>
              <div className="dt-core-item">
                <span>Compliance</span>
                <p>Statutory and accounting standard adherence</p>
              </div>
              <div className="dt-core-item">
                <span>Insights</span>
                <p>Clear financial reporting and analysis</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Accounting Management</h3>
              <ul>
                <li>Clean and accurate accounts</li>
                <li>Timely financial statements</li>
                <li>Improved compliance</li>
                <li>Better decision-making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our Accounting Experts</h2>
            <p>
              Need reliable accounting management for your business? Our experts
              are here to help.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our accounting team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your accounting requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Accounting Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Accounting Management Services"
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
