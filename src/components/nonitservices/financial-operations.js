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
      "Financial Operations Support | Billing, Invoicing, Accounts Payable & Receivable";

    const content =
      "Financial operations support services covering e invoicing, billing and payments, accounts payable and accounts receivable processes, invoice processing, payment approvals, automated invoicing, invoice to pay workflows, and billing management.";

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
          <h1>Financial Operations Support</h1>
          <p>
            Manovate Technologies delivers financial operations support services
            covering billing and payments, e invoicing, invoice processing,
            accounts payable, and accounts receivable. We help businesses
            streamline invoice-to-pay and order-to-cash workflows.
          </p>

          <a href="#services" className="btn-primary">
            Explore Financial Operations
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our financial operations support services improve billing,
            invoicing, and payment workflows. We manage invoice generation,
            approval workflows, accounts payable, and receivable collections to
            reduce delays and improve cash flow.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Billing & Invoicing</h3>
              <p>
                Digital invoicing, online billing, invoice creation, delivery,
                due date tracking, and billing management.
              </p>
            </div>

            <div className="card animate">
              <h3>Accounts Payable</h3>
              <p>
                Invoice approvals, PO matching, payment authorization, and
                automated accounts payable processing.
              </p>
            </div>

            <div className="card animate">
              <h3>Accounts Receivable</h3>
              <p>
                Customer invoicing, collections, reconciliation, and overdue
                invoice management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Financial Operations Workflow</h2>

          <p className="section-intro">
            An end-to-end process covering invoicing, approvals, payments, and
            reconciliation.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Invoice</span>
              <h3>Invoice Creation</h3>
              <p>
                Generate and submit invoices with defined billing terms and
                payment instructions.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Approve</span>
              <h3>Invoice Approval</h3>
              <p>
                Automated approvals, validation checks, and PO-to-invoice
                matching.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Pay</span>
              <h3>Payment & Reconciliation</h3>
              <p>
                Process payments, track receipts, and reconcile payables and
                receivables.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Invoice-to-Pay Optimization</h2>
          <p className="dt-subtitle">
            Streamlining billing, invoicing, and payments.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Optimization</h3>
              <ul>
                <li>Manual invoicing</li>
                <li>Delayed payments</li>
                <li>Limited visibility</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Invoices</span>
                <p>Digital invoicing workflows</p>
              </div>
              <div className="dt-core-item">
                <span>Payments</span>
                <p>Approval automation & tracking</p>
              </div>
              <div className="dt-core-item">
                <span>Automation</span>
                <p>AP & AR process automation</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Optimization</h3>
              <ul>
                <li>Faster collections</li>
                <li>Reduced overdue invoices</li>
                <li>Improved cash flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Optimize Your Financial Operations</h2>
            <p>
              Need help with billing, invoicing, payables, or receivables? Talk
              to our financial operations specialists.
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
                placeholder="Tell us about your billing & payment needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Support
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Financial Operations Support Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
