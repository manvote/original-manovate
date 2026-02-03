import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function CloudMigrationServices() {
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
    Cloud Migration Services | Secure AWS, Azure & GCP Migration | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies provides cloud migration services to securely migrate applications, data, and infrastructure to AWS, Microsoft Azure, and Google Cloud with minimal downtime, optimized performance, and cost efficiency."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/cloud-migration-services"
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
          <h1>Cloud Migration Services</h1>
          <p>
            Manovate Technologies helps businesses migrate applications, data,
            and infrastructure to the cloud securely and efficiently. Our cloud
            migration services improve scalability, performance, and security
            while reducing operational complexity and costs.
          </p>
          <a href="#services" className="btn-primary">
            Start Your Migration
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our cloud migration services enable organizations to modernize
            legacy systems and adopt cloud-native architectures. We support
            public, private, and hybrid cloud migrations across AWS,
            Microsoft Azure, and Google Cloud.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Application Migration</h3>
              <p>
                Rehost, refactor, or re-architect applications for cloud
                environments with minimal downtime and high performance.
              </p>
            </div>

            <div className="card animate">
              <h3>Data & Database Migration</h3>
              <p>
                Secure migration of databases and critical data with validation,
                backup strategies, and zero data loss.
              </p>
            </div>

            <div className="card animate">
              <h3>Infrastructure Modernization</h3>
              <p>
                Move on-premise infrastructure to scalable cloud platforms with
                improved resilience, automation, and cost efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Deliver Cloud Migration</h2>
          <p className="section-intro">
            A structured, secure, and proven approach to successful cloud
            transformation.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Assessment</span>
              <h3>Cloud Readiness & Strategy</h3>
              <p>
                We assess infrastructure, applications, and business goals to
                define the right cloud migration strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Migration</span>
              <h3>Execution & Data Transfer</h3>
              <p>
                Secure migration of workloads, applications, and data with
                minimal disruption and robust validation.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimization</span>
              <h3>Performance & Cost Optimization</h3>
              <p>
                Continuous monitoring, performance tuning, and cost optimization
                to maximize cloud ROI.
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
              <h3>Multi-Cloud Expertise</h3>
              <p>
                Certified cloud engineers with hands-on experience across AWS,
                Azure, and Google Cloud platforms.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Reliable Migration</h3>
              <p>
                Best practices for security, compliance, and business continuity
                throughout the migration lifecycle.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Aligned Strategy</h3>
              <p>
                Migration strategies aligned with business goals, timelines,
                and long-term scalability.
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
              Ready to move to the cloud? Talk to our experts and start your
              cloud migration journey today.
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
                placeholder="Tell us about your cloud migration requirements..."
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Cloud Migration Illustration"
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
