import { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function CloudArchitectureSetup() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "Cloud Architecture Setup Services | Secure & Scalable Cloud Infrastructure";

    const content =
      "Professional cloud architecture setup services for AWS, Azure, and Google Cloud. We design secure, scalable, and high-availability cloud infrastructures optimized for performance, reliability, and cost efficiency.";

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
          <h1>Cloud Architecture Setup Services</h1>
          <p>
            Manovate Technologies designs secure, scalable, and
            high-availability cloud architectures tailored to your business
            needs. We build reliable cloud foundations that support growth,
            performance, and long-term success.
          </p>

          <a href="#services" className="btn-primary">
            Build Cloud Architecture
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our cloud architecture setup services help organizations design,
            implement, and optimize infrastructure across AWS, Microsoft Azure,
            and Google Cloud with a focus on security, scalability, and cost
            efficiency.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Cloud Infrastructure Design</h3>
              <p>
                Design optimized network, compute, storage, and security
                architectures following cloud best practices.
              </p>
            </div>

            <div className="card animate">
              <h3>Secure Cloud Setup</h3>
              <p>
                Implement IAM, access control, encryption, and compliance-ready
                security layers.
              </p>
            </div>

            <div className="card animate">
              <h3>Scalability & Performance</h3>
              <p>
                Build auto-scaling, load-balanced, and highly available cloud
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Cloud Architecture Setup Process</h2>
          <p className="section-intro">
            A structured approach to delivering secure, scalable, and
            production-ready cloud infrastructure.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment</span>
              <h3>Cloud Readiness & Planning</h3>
              <p>
                Evaluate workloads, risks, and requirements to define the right
                cloud strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Design</span>
              <h3>Architecture & Security Design</h3>
              <p>
                Design network topology, security layers, and infrastructure
                aligned with best practices.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment</span>
              <h3>Implementation & Validation</h3>
              <p>
                Deploy cloud infrastructure, validate performance, and ensure
                production readiness.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our Cloud Architecture Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Cloud Expertise</h3>
              <p>
                Experienced architects across AWS, Azure, and Google Cloud.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure by Design</h3>
              <p>
                Security, compliance, and governance built into every
                architecture.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Cost-Efficient</h3>
              <p>
                Architectures optimized for performance, reliability, and cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your Cloud Architecture Project</h2>
            <p>
              Planning to move or scale on the cloud? Talk to our architects and
              build a future-ready infrastructure.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our cloud team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your cloud requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Cloud Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Cloud Architecture Setup Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
