import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function CyberSecurityAudit() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length; // ✅ FIX
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= HERO SLIDESHOW ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]); // ✅ FIXED

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
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add("visible")
        ),
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Helmet>
  <title>
    Cyber Security Audit Services | Vulnerability Assessment & Compliance | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides cyber security audit services including vulnerability assessment, penetration testing, network security audits, and compliance audits aligned with ISO 27001, PCI DSS, HIPAA, and SOC 2 standards."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/cyber-security-audit"
  />
</Helmet>

    <Navbar />
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
          <h1>Cyber Security Audit Services</h1>
          <p>
            We deliver comprehensive cyber security audits to identify
            vulnerabilities, assess risks, and strengthen enterprise security
            across networks, applications, and cloud environments.
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
            Our cyber security audit services evaluate your organization’s
            security posture through information security audits, network
            assessments, vulnerability testing, and compliance reviews.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Information & Network Security Audits</h3>
              <p>
                Identification of security gaps across infrastructure,
                access controls, configurations, and policies.
              </p>
            </div>

            <div className="card animate">
              <h3>Vulnerability & Penetration Testing</h3>
              <p>
                Real-world attack simulations to uncover exploitable
                vulnerabilities across systems and applications.
              </p>
            </div>

            <div className="card animate">
              <h3>Compliance & Risk Assessment</h3>
              <p>
                Audits aligned with ISO 27001, PCI DSS, HIPAA, SOC 2, and
                regulatory compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Security Audit Approach</h2>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment</span>
              <h3>Security Posture Evaluation</h3>
              <p>
                Review of systems, networks, policies, and threat exposure.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Testing</span>
              <h3>Penetration & Vulnerability Analysis</h3>
              <p>
                Identification of exploitable risks through structured
                testing methodologies.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Reporting</span>
              <h3>Risk Mitigation & Hardening</h3>
              <p>
                Clear audit reports with remediation guidance and
                security improvement strategies.
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
              <h3>Security Audit Expertise</h3>
              <p>
                Experienced professionals delivering enterprise-grade
                cyber security assessments.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Compliance-Driven Approach</h3>
              <p>
                Audits aligned with global security and regulatory standards.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Actionable Insights</h3>
              <p>
                Clear findings and remediation plans to reduce cyber risks.
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
              Identify security gaps and protect your organization with
              expert cyber security audit services.
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
                placeholder="Tell us about your security audit needs..."
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
              alt="Cyber Security Audit Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <p className="service-backlink">
  Explore our complete range of{" "}
  <a href="/itservices">IT Services & Software Engineering Solutions</a>.
</p>
<br />
<br />
      <Footer />
    </>
  );
}
