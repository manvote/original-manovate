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
      "Bookkeeping & Ledger Handling Services | Financial Accounting & General Ledger Management";

    const content =
      "Professional bookkeeping and ledger handling services including financial accounting, journal entries, general ledger management, double entry bookkeeping, accurate recording of daily transactions, and financial reporting.";

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
          <h1>Bookkeeping & Ledger Handling</h1>
          <p>
            Manovate Technologies provides reliable bookkeeping and ledger
            handling services focused on accurate recording of daily
            transactions, maintenance of general ledgers, and compliance with
            accounting standards to ensure clean, audit-ready books.
          </p>

          <a href="#services" className="btn-primary">
            Explore Bookkeeping Services
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our bookkeeping and ledger handling services cover financial
            accounting, journal entries, double entry bookkeeping, and general
            ledger management to ensure transparent and accurate financial
            records.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Daily Transaction Recording</h3>
              <p>
                Accurate recording of daily financial transactions using double
                entry bookkeeping principles and structured journal entries.
              </p>
            </div>

            <div className="card animate">
              <h3>General Ledger Management</h3>
              <p>
                Maintenance of general ledgers, chart of accounts, ledger
                balances, and reconciliations for accuracy and consistency.
              </p>
            </div>

            <div className="card animate">
              <h3>Financial Accounting & Reporting</h3>
              <p>
                Support for month-end close, structured financial records, and
                reliable accounting reports aligned with standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Bookkeeping Process</h2>

          <p className="section-intro">
            A structured and compliant process for accurate bookkeeping and
            reliable ledger management.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Record</span>
              <h3>Transaction Recording</h3>
              <p>
                Capture and record all business transactions using proper
                journal entries.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Post</span>
              <h3>Ledger Posting</h3>
              <p>
                Post journal entries to general ledger accounts and track
                balances accurately.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Reconcile</span>
              <h3>Ledger Reconciliation</h3>
              <p>
                Reconcile accounts, verify balances, and resolve discrepancies.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">From Transactions to Financial Clarity</h2>
          <p className="dt-subtitle">
            Turning daily financial activity into structured, reliable accounting
            records.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Proper Bookkeeping</h3>
              <ul>
                <li>Unrecorded transactions</li>
                <li>Disorganized ledgers</li>
                <li>Limited financial visibility</li>
                <li>Audit and compliance risks</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Entries</span>
                <p>Accurate journal entries</p>
              </div>
              <div className="dt-core-item">
                <span>Ledger</span>
                <p>Clean general ledger management</p>
              </div>
              <div className="dt-core-item">
                <span>Reports</span>
                <p>Clear and reliable financial reports</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Structured Bookkeeping</h3>
              <ul>
                <li>Accurate financial records</li>
                <li>Well-maintained ledgers</li>
                <li>Improved compliance</li>
                <li>Better financial control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your Bookkeeping Engagement</h2>
            <p>
              Need reliable bookkeeping and ledger handling services? Speak with
              our accounting specialists today.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our accounting team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your bookkeeping needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Bookkeeping Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Bookkeeping and General Ledger Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
