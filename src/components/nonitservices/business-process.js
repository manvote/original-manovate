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
      "Business Process Optimisation Services | ERP, Automation & Measurable ROI";

    const content =
      "Business process optimisation services focused on ERP systems, workflow automation, process improvement, and digital transformation to reduce costs, increase efficiency, and deliver measurable ROI.";

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
          <h1>Business Process Optimisation</h1>
          <p>
            Manovate Technologies delivers business process optimisation services
            that reduce operational costs, streamline workflows, and deliver
            measurable ROI through ERP systems, workflow automation, and digital
            transformation.
          </p>

          <a href="#services" className="btn-primary">
            Optimize Business Processes
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our business process optimisation services improve end-to-end
            workflows through ERP optimisation, workflow automation, process
            mapping, and data-driven digital transformation initiatives.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>ERP & Enterprise Systems</h3>
              <p>
                Design, implementation, and optimisation of ERP platforms to
                unify operations, data, and reporting across the organisation.
              </p>
            </div>

            <div className="card animate">
              <h3>Workflow & Process Automation</h3>
              <p>
                Automate approvals, repetitive tasks, and business workflows
                using intelligent automation and BPM tools.
              </p>
            </div>

            <div className="card animate">
              <h3>Process Improvement & Cost Reduction</h3>
              <p>
                Identify inefficiencies, optimise operations, and reduce costs
                through continuous improvement frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Process Optimisation Approach</h2>

          <p className="section-intro">
            A structured, data-driven methodology to optimise processes and
            improve business performance.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discover</span>
              <h3>Process Assessment & Mapping</h3>
              <p>
                Analyse workflows, ERP systems, and operations to identify
                bottlenecks and optimisation opportunities.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design</span>
              <h3>Optimisation & Automation</h3>
              <p>
                Redesign workflows and deploy ERP and automation improvements
                for efficiency.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Improve</span>
              <h3>Performance Monitoring & ROI</h3>
              <p>
                Track KPIs, cost savings, and efficiency metrics for continuous
                improvement.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Business Process Optimisation Framework</h2>
          <p className="dt-subtitle">
            Aligning people, processes, and technology for sustainable
            efficiency.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Optimisation</h3>
              <ul>
                <li>Manual and fragmented workflows</li>
                <li>High operational costs</li>
                <li>Disconnected ERP systems</li>
                <li>Limited process visibility</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>ERP</span>
                <p>Unified enterprise systems</p>
              </div>
              <div className="dt-core-item">
                <span>Automation</span>
                <p>Intelligent workflow automation</p>
              </div>
              <div className="dt-core-item">
                <span>Optimization</span>
                <p>Cost reduction and efficiency gains</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Optimisation</h3>
              <ul>
                <li>Streamlined operations</li>
                <li>Lower costs and higher productivity</li>
                <li>Integrated ERP-driven workflows</li>
                <li>Measurable ROI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Optimize Your Business Processes</h2>
            <p>
              Ready to reduce costs and improve efficiency? Talk to our process
              optimisation experts today.
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
                placeholder="Describe your process optimisation goals..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Process Assessment
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Business Process Optimisation and Workflow Automation"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
