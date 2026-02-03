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
    <Helmet>
  <title>
    Financial Reporting Services | Balance Sheet, P&L & Cash Flow Statements | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides professional financial reporting services including balance sheets, profit and loss statements, cash flow statements, management reporting, financial analysis, and compliance with GAAP, IFRS, and statutory requirements."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/financial-reporting-services"
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
          <h1>Financial Reporting Services</h1>
          <p>
            Manovate Technologies delivers accurate and compliant financial
            reporting services, helping businesses prepare balance sheets,
            income statements, profit and loss accounts, and cash flow
            statements with clarity and transparency.
          </p>

          <a href="#services" className="btn-primary">
            Explore Financial Reporting
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our financial reporting services support businesses with accurate
            financial statements, trial balance review, statutory compliance,
            and financial analysis to deliver clear insights into performance
            and profitability.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Financial Statements</h3>
              <p>
                Income statements, profit & loss accounts, balance sheets, and
                cash flow statements prepared as per accounting standards.
              </p>
            </div>

            <div className="card animate">
              <h3>Management & Corporate Reporting</h3>
              <p>
                Management accounting, consolidated reports, and internal
                performance reporting.
              </p>
            </div>

            <div className="card animate">
              <h3>Compliance & Financial Analysis</h3>
              <p>
                Financial analysis, ratio analysis, and compliance with GAAP,
                IFRS, and statutory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Financial Reporting Process</h2>

          <p className="section-intro">
            A structured process to deliver timely, accurate, and compliant
            financial reports.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Collect</span>
              <h3>Financial Data Collection</h3>
              <p>
                Collect trial balances, general ledger data, and accounting
                records.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Prepare</span>
              <h3>Statement Preparation</h3>
              <p>
                Prepare balance sheets, income statements, and cash flow
                statements.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Review</span>
              <h3>Analysis & Compliance</h3>
              <p>
                Perform financial analysis and ensure compliance with reporting
                standards.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">From Accounting Data to Insights</h2>
          <p className="dt-subtitle">
            Turning financial records into meaningful business intelligence.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Structured Reporting</h3>
              <ul>
                <li>Limited financial visibility</li>
                <li>Inconsistent statements</li>
                <li>Compliance risks</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Statements</span>
                <p>Balance sheet, P&L & cash flow</p>
              </div>
              <div className="dt-core-item">
                <span>Analysis</span>
                <p>Financial insights & ratios</p>
              </div>
              <div className="dt-core-item">
                <span>Compliance</span>
                <p>GAAP, IFRS & statutory reporting</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Structured Reporting</h3>
              <ul>
                <li>Clear financial visibility</li>
                <li>Accurate reporting</li>
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
            <h2>Request Financial Reporting Support</h2>
            <p>
              Need accurate financial statements or compliance-ready reports?
              Talk to our accounting experts today.
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
                placeholder="Tell us about your reporting needs..."
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
              alt="Financial Reporting Services"
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
