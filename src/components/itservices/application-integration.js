import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
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
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      const lineHeight = progress * rect.height;
      line.style.height = `${lineHeight}px`;

      items.forEach((item) => {
        if (lineHeight >= item.offsetTop + 20) {
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
    <Helmet>
  <title>
    Application Integration Services – API & System Integrations | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides application integration services including API integrations, enterprise system integration, and process automation to enable seamless data flow and unified business operations."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/application-integrations"
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
          <h1>Application Integrations</h1>
          <p>
            Manovate Technologies delivers robust application integration
            solutions that connect multiple systems, platforms, and software
            applications for seamless data flow. We help businesses unify
            operations software, automate processes, and improve operational
            efficiency through secure API and system integrations.
          </p>

          <a href="#services" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="">
          <h2>Seamless System & Application Integration</h2>

          <p className="section-intro">
            Our application integration services enable businesses to connect
            enterprise software, business applications, and third-party
            platforms into a unified ecosystem. By ensuring smooth data
            integration and real-time data flow, we help organizations eliminate
            silos, automate workflows, and optimize business operations.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>API & Third-Party Integrations</h3>
              <p>
                We design and implement secure API integrations that connect
                applications, services, and external platforms—enabling
                real-time data exchange and system-to-system communication.
              </p>
            </div>

            <div className="card animate">
              <h3>Enterprise System Integration</h3>
              <p>
                Integrate ERP, CRM, accounting software, content management
                systems, and business tools into a single operational workflow
                for better control and productivity.
              </p>
            </div>

            <div className="card animate">
              <h3>Process Automation & Data Flow</h3>
              <p>
                Automate business processes by synchronizing data across
                applications, reducing manual work, improving accuracy, and
                enhancing operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="">
          <h2>Our Application Integration Approach</h2>

          <p className="section-intro">
            We follow a structured integration methodology to ensure reliable,
            scalable, and secure application integration solutions.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment & Planning</span>
              <h3>Integration Strategy & Architecture</h3>
              <p>
                We analyze existing software systems, data sources, and business
                workflows to design an optimal integration architecture.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development & Integration</span>
              <h3>API, Data & System Integration</h3>
              <p>
                Our engineers implement secure application integrations, data
                synchronization, and automation across enterprise and cloud
                platforms.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimization & Support</span>
              <h3>Monitoring & Continuous Improvement</h3>
              <p>
                We monitor performance, optimize data flows, and provide ongoing
                support to ensure long-term system reliability.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Integration-First Expertise</h3>
              <p>
                Deep experience in application integration, system architecture,
                and enterprise software ecosystems.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Scalable Solutions</h3>
              <p>
                We build integration solutions that scale with business growth
                while maintaining data security and compliance.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Operational Efficiency Focus</h3>
              <p>
                Our integrations streamline workflows, improve data accuracy,
                and drive measurable business efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className=" contact-grid">
          <div className="contact-left">
            <h2>Contact Manovate Technologies</h2>
            <p>
              Connect your applications, systems, and data with powerful
              integration solutions. Talk to our experts today.
            </p>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your integration needs..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Project
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
