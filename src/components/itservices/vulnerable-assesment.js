import { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function VulnerabilityAssessment() {
  const heroImages = [hero1, hero2, hero3];
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
    Vulnerability Assessment Services – Application & Network Security | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides vulnerability assessment services to identify, analyze, and prioritize security risks across applications, networks, cloud, and infrastructure environments."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/vulnerability-assessment"
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
          <h1>Vulnerability Assessment Services</h1>
          <p>
            Manovate Technologies helps organizations identify security
            weaknesses before attackers do. Our vulnerability assessment
            services protect applications, networks, and infrastructure from
            potential threats.
          </p>

          <a href="#services" className="btn-primary">
            Explore Security Services
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our vulnerability assessment services provide a structured approach
            to identifying, analyzing, and prioritizing security risks across
            applications, networks, and systems.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Application Security Assessment</h3>
              <p>
                Identify vulnerabilities in web and mobile applications through
                automated and manual security testing.
              </p>
            </div>

            <div className="card animate">
              <h3>Network & Infrastructure Assessment</h3>
              <p>
                Detect misconfigurations and weaknesses in servers, networks,
                cloud, and infrastructure environments.
              </p>
            </div>

            <div className="card animate">
              <h3>Risk Analysis & Prioritization</h3>
              <p>
                Classify vulnerabilities by severity and business impact to
                guide remediation efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Vulnerability Assessment Process</h2>
          <p className="section-intro">
            A repeatable and proven process to uncover and mitigate security
            risks.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discover</span>
              <h3>Asset Identification</h3>
              <p>
                Identify systems, applications, and infrastructure within the
                assessment scope.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Assess</span>
              <h3>Vulnerability Scanning</h3>
              <p>
                Perform automated and manual testing to detect security
                weaknesses.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Mitigate</span>
              <h3>Reporting & Remediation</h3>
              <p>
                Deliver actionable reports with remediation guidance and risk
                prioritization.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our Vulnerability Assessment Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Security Expertise</h3>
              <p>
                Experienced security professionals using industry best
                practices and tools.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Comprehensive Coverage</h3>
              <p>
                Application, network, cloud, and infrastructure assessments
                under one service.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Actionable Insights</h3>
              <p>
                Clear, prioritized reports focused on real-world risk
                reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Secure Your Systems Today</h2>
            <p>
              Identify vulnerabilities before they become threats. Partner with
              our security experts for proactive protection.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our security team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your security requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Security Assessment
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Vulnerability Assessment Services"
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
