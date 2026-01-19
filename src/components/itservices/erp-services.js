import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import "./android-app.css";

export default function ERPServices() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "ERP Software Services | Enterprise Resource Planning Solutions";

    const content =
      "ERP software services to integrate finance, HR, inventory, sales, and operations into a unified enterprise resource planning system. We deliver scalable ERP solutions for growing businesses.";

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
          <h1>ERP Solutions for Integrated Business Operations</h1>
          <p>
            Manovate Technologies delivers ERP solutions that integrate finance,
            HR, inventory, sales, procurement, and operations into a unified
            enterprise platform for better visibility and decision-making.
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
            Our ERP software centralizes core business functions including
            finance, supply chain, HR, and operations into a single scalable
            system that streamlines workflows and improves control.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Financial & Accounting ERP</h3>
              <p>
                Manage general ledger, accounts payable, receivable, budgeting,
                and financial reporting within a unified ERP system.
              </p>
            </div>

            <div className="card animate">
              <h3>Inventory & Supply Chain ERP</h3>
              <p>
                Track inventory, procurement, vendors, warehouses, and order
                fulfillment in real time.
              </p>
            </div>

            <div className="card animate">
              <h3>HR & Operations ERP</h3>
              <p>
                Streamline HR, payroll, employee management, and operational
                workflows through integrated ERP modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How Our ERP Implementation Works</h2>
          <p className="section-intro">
            A structured ERP implementation approach ensuring smooth adoption
            and long-term scalability.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment</span>
              <h3>Business Process Analysis</h3>
              <p>
                Analyze existing systems, workflows, and pain points to design
                an ERP solution aligned with business goals.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Configuration</span>
              <h3>ERP Customization & Integration</h3>
              <p>
                Configure ERP modules, integrate third-party systems, and tailor
                workflows to business requirements.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment</span>
              <h3>Go-Live & Optimization</h3>
              <p>
                Deploy ERP, train users, and continuously optimize performance
                for operational efficiency.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our ERP Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>End-to-End ERP Expertise</h3>
              <p>
                ERP solutions covering finance, operations, HR, and supply chain
                in one integrated platform.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Secure ERP</h3>
              <p>
                Enterprise-grade ERP designed to scale securely with business
                growth.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Centric Approach</h3>
              <p>
                ERP implementations aligned with business goals to maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our ERP Experts</h2>
            <p>
              Planning to implement or upgrade your ERP system? Our specialists
              are ready to help.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our ERP team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your ERP requirements..."
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Request ERP Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="ERP Software Services Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
