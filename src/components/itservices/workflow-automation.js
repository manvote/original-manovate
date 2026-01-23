import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function WorkflowAutomation() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <Helmet>
  <title>
    Workflow Automation Solutions – Business Process Automation | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides workflow automation solutions that streamline business processes, integrate systems, reduce manual effort, and improve operational efficiency through intelligent automation."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/workflow-automation"
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
          <h1>Workflow Automation Solutions</h1>
          <p>
            Manovate Technologies helps organizations automate repetitive,
            manual, and time-consuming processes using intelligent workflow
            automation. We design scalable systems that improve efficiency,
            accuracy, and business agility across departments.
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
            Our workflow automation services streamline operations by connecting
            people, systems, and data through intelligent automation. We help
            businesses reduce costs, minimize errors, and accelerate execution.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Business Process Automation</h3>
              <p>
                Automate end-to-end workflows across finance, HR, operations,
                and customer support to remove manual bottlenecks.
              </p>
            </div>

            <div className="card animate">
              <h3>System & Tool Integration</h3>
              <p>
                Seamless integration of CRMs, ERPs, databases, and third-party
                tools for automated data flow.
              </p>
            </div>

            <div className="card animate">
              <h3>Intelligent Automation</h3>
              <p>
                Combine rule engines and AI-driven logic to automate complex
                decisions and adaptive workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Deliver Workflow Automation</h2>
          <p className="section-intro">
            A structured approach to building reliable, scalable, and secure
            automation systems.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Process Analysis & Strategy</h3>
              <p>
                Identify inefficiencies and define automation opportunities
                aligned with business goals.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design & Build</span>
              <h3>Workflow Design & Implementation</h3>
              <p>
                Build automated workflows with integrations, approvals,
                triggers, and exception handling.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deploy & Scale</span>
              <h3>Monitoring & Optimization</h3>
              <p>
                Production deployment with continuous monitoring, optimization,
                and scalability planning.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Automation Expertise</h3>
              <p>
                Deep expertise in workflow automation, integration, and
                intelligent process optimization.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Secure</h3>
              <p>
                Enterprise-grade automation built with security and performance
                at its core.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-First Results</h3>
              <p>
                Focused on efficiency, cost savings, and faster execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Automate Your Workflows</h2>
            <p>
              Ready to streamline your operations? Talk to our automation
              experts today.
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
                placeholder="Tell us about your automation needs..."
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
              alt="Workflow Automation Illustration"
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
