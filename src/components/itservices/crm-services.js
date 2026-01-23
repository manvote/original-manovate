import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function CRMServices() {
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
    CRM Services & Custom CRM Solutions | Sales, Marketing & Support CRM | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides CRM services and custom CRM solutions to manage sales pipelines, automate marketing, and improve customer support. Our scalable CRM systems centralize customer data, streamline workflows, and drive customer engagement."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/crm-services"
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
          <h1>CRM Services</h1>
          <p>
            Manovate Technologies delivers CRM services that help businesses
            manage customer relationships, streamline sales pipelines, and
            improve customer engagement. Our CRM solutions centralize customer
            data, automate workflows, and enable data-driven decision-making.
          </p>
          <a href="#services" className="btn-primary">
            Build Your CRM
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our CRM services help businesses improve customer interactions,
            manage leads, track sales activities, and deliver personalized
            customer experiences through scalable CRM systems.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Sales CRM Solutions</h3>
              <p>
                Manage leads, opportunities, and pipelines efficiently with CRM
                tools that improve forecasting and deal closure.
              </p>
            </div>

            <div className="card animate">
              <h3>Marketing Automation CRM</h3>
              <p>
                Automate campaigns, track customer journeys, and personalize
                marketing using CRM-driven insights.
              </p>
            </div>

            <div className="card animate">
              <h3>Customer Support CRM</h3>
              <p>
                Centralize tickets, interactions, and customer history to
                deliver faster and more consistent support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our CRM Implementation Process</h2>
          <p className="section-intro">
            A structured CRM implementation approach aligned with your business
            goals.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>CRM Strategy & Requirements</h3>
              <p>
                Analyze customer journeys, workflows, and business processes to
                define the right CRM strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Configuration</span>
              <h3>CRM Customization & Setup</h3>
              <p>
                Configure CRM modules, dashboards, workflows, and integrations
                tailored to your teams.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimization</span>
              <h3>Deployment & Continuous Improvement</h3>
              <p>
                Deploy CRM systems, train users, and continuously optimize
                performance for better adoption.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our CRM Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Tailored CRM Solutions</h3>
              <p>
                CRM systems designed to align with your business processes and
                growth objectives.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Workflow Automation</h3>
              <p>
                Automate sales, marketing, and customer support processes to
                improve efficiency.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Customer-Centric Approach</h3>
              <p>
                CRM strategies focused on improving engagement, loyalty, and
                long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your CRM Project</h2>
            <p>
              Looking to improve customer relationships and sales efficiency?
              Talk to our CRM experts today.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our CRM team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your CRM requirements..."
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Request CRM Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="CRM Services Illustration"
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
