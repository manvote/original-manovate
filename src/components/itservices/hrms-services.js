import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import "./android-app.css";

export default function HRMSServices() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "HRMS Software Solutions | Employee Management, Payroll & HR Automation";

    const content =
      "HRMS software solutions to manage employees, payroll, attendance, performance, and HR operations efficiently. We provide scalable human resource management systems for modern organizations.";

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
          <h1>HRMS Software for Modern Workforces</h1>
          <p>
            Manovate Technologies delivers powerful HRMS solutions that help
            organizations manage employees, automate HR processes, and improve
            workforce efficiency across the employee lifecycle.
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
            Our HRMS platform centralizes HR operations including payroll,
            attendance, leave management, performance tracking, and compliance
            to help HR teams operate efficiently and stay compliant.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Employee Management System</h3>
              <p>
                Centralized employee records, roles, departments, documents,
                and lifecycle management in a secure HRMS dashboard.
              </p>
            </div>

            <div className="card animate">
              <h3>Payroll & Attendance Management</h3>
              <p>
                Automate payroll, attendance tracking, leave policies, and
                statutory compliance using an integrated HRMS system.
              </p>
            </div>

            <div className="card animate">
              <h3>Performance & HR Analytics</h3>
              <p>
                Track appraisals, goals, engagement, and workforce insights
                using data-driven HR analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How Our HRMS Works</h2>
          <p className="section-intro">
            A structured HRMS implementation approach designed for smooth
            adoption and long-term HR efficiency.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment</span>
              <h3>HR Process & Requirement Analysis</h3>
              <p>
                Evaluate HR workflows, policies, and compliance requirements
                to design a tailored HRMS solution.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Configuration</span>
              <h3>HRMS Setup & Customization</h3>
              <p>
                Configure HRMS modules for employee management, payroll,
                attendance, and performance tracking.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment</span>
              <h3>Go-Live & Optimization</h3>
              <p>
                Deploy HRMS, train teams, and continuously optimize system
                performance.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our HRMS Solutions</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>End-to-End HR Automation</h3>
              <p>
                Complete employee lifecycle coverage from onboarding to payroll
                and performance management.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Scalable Platform</h3>
              <p>
                Enterprise-grade security and scalability for growing
                organizations.
              </p>
            </div>

            <div className="why-box animate">
              <h3>HR-Focused Insights</h3>
              <p>
                Real-time HR analytics for better workforce decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our HRMS Experts</h2>
            <p>
              Planning to implement or upgrade your HRMS platform? Our experts
              are ready to help.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our HRMS team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your HRMS needs..."
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Request HRMS Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="HRMS Software Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
