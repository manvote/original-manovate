import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import "./android-app.css";

export default function ThreatMonitoringServices() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length; // ✅ FIX
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "Threat Monitoring Services | Network & Endpoint Security | MDR Solutions";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Threat monitoring services with continuous network security and endpoint security monitoring, threat intelligence, MDR services, real-time threat detection and response, and enterprise cybersecurity solutions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Threat monitoring services with continuous network security and endpoint security monitoring, threat intelligence, MDR services, real-time threat detection and response, and enterprise cybersecurity solutions.";
      document.head.appendChild(meta);
    }
  }, []);

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
          <h1>Threat Monitoring Services</h1>
          <p>
            Continuous threat monitoring services that protect networks,
            endpoints, and enterprise data using real-time detection,
            threat intelligence, and rapid response strategies.
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
            Our threat monitoring services provide always-on cybersecurity
            protection across networks, endpoints, and cloud environments
            using MDR, EDR, and advanced threat intelligence.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Network & Endpoint Monitoring</h3>
              <p>
                Continuous monitoring to detect malware, anomalies,
                and suspicious activities in real time.
              </p>
            </div>

            <div className="card animate">
              <h3>Threat Intelligence & Detection</h3>
              <p>
                Advanced analytics and global threat intelligence to
                identify known and emerging threats.
              </p>
            </div>

            <div className="card animate">
              <h3>Detection, Response & Protection</h3>
              <p>
                Rapid incident response and data protection strategies
                to reduce cyber risk and business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How Our Threat Monitoring Works</h2>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Monitoring</span>
              <h3>24/7 Security Monitoring</h3>
              <p>
                Real-time monitoring of endpoints, networks, and
                cloud workloads.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Detection</span>
              <h3>Threat Detection & Analysis</h3>
              <p>
                Intelligent threat detection using MDR, EDR, and
                threat intelligence platforms.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Response</span>
              <h3>Rapid Response & Mitigation</h3>
              <p>
                Immediate response actions to contain threats and
                protect enterprise systems.
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
              <h3>Advanced Threat Monitoring</h3>
              <p>
                Proven expertise in MDR, EDR, endpoint security, and
                enterprise threat monitoring solutions.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Proactive Security Response</h3>
              <p>
                Early detection and response to prevent security
                incidents before impact.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Centric Protection</h3>
              <p>
                Security solutions designed to protect data, systems,
                and business continuity.
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
              Detect threats early and secure your business with
              continuous threat monitoring services.
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
                placeholder="Tell us about your threat monitoring needs..."
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
              alt="Threat Monitoring Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
