import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import "./android-app.css";
 
export default function DataProtectionCompliance() {
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
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
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
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("visible")
        ),
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
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="service-hero-content animate">
          <h1>Data Protection & Compliance Services</h1>
          <p>
            We help organizations safeguard sensitive data, meet regulatory
            requirements, and strengthen cyber security through comprehensive
            data protection and compliance solutions.
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
            Our data protection and compliance services secure customer data,
            enterprise systems, and digital assets while ensuring compliance
            with PCI DSS, HIPAA, SOC 2, GDPR, and ISO 27001 standards.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Data Privacy & Protection</h3>
              <p>
                Encryption, access controls, privacy policies, and secure data
                handling aligned with global data protection regulations.
              </p>
            </div>

            <div className="card animate">
              <h3>Compliance & Regulatory Readiness</h3>
              <p>
                Structured audits and assessments to achieve and maintain
                compliance across industry and regulatory frameworks.
              </p>
            </div>

            <div className="card animate">
              <h3>Security Testing & Risk Management</h3>
              <p>
                Penetration testing, vulnerability assessments, and risk
                analysis to strengthen cyber security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Ensure Data Protection & Compliance</h2>

          <p className="section-intro">
            A structured approach to securing data, managing compliance, and
            reducing cyber security risks.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment & Gap Analysis</span>
              <h3>Security & Compliance Assessment</h3>
              <p>
                Security audits, risk assessments, and compliance gap analysis
                across systems and data environments.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Implementation & Controls</span>
              <h3>Data Protection Controls</h3>
              <p>
                Technical and operational security controls to mitigate cyber
                threats and protect sensitive data.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Monitoring & Governance</span>
              <h3>Ongoing Compliance Management</h3>
              <p>
                Continuous monitoring, testing, and governance to maintain
                regulatory compliance and reduce risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Compliance & Security Expertise</h3>
              <p>
                Deep expertise across cyber security, data privacy, audits,
                penetration testing, and regulatory compliance.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Standards-Aligned Approach</h3>
              <p>
                Security strategies aligned with PCI DSS, HIPAA, SOC 2, GDPR,
                and ISO standards.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Risk Reduction & Trust</h3>
              <p>
                Reduced cyber risks, stronger data protection, and increased
                trust with customers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Contact Manovate Technologies</h2>
            <p>
              Secure your data, meet compliance requirements, and protect your
              organization from cyber threats.
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
                placeholder="Tell us about your data protection needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Project
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Data Protection and Compliance"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
