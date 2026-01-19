import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import "./android-app.css";

export default function SaaSDevelopment() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "SaaS Development Services | Scalable Cloud-Based Software Solutions";

    const content =
      "We design and develop scalable SaaS platforms using modern cloud architectures. From MVPs to enterprise-grade products, our SaaS solutions deliver security, performance, and seamless user experiences.";

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
          <h1>SaaS Product Development</h1>
          <p>
            Manovate Technologies builds secure, scalable, and high-performance
            SaaS platforms. From idea to launch and beyond, we help businesses
            create cloud-based software that grows with users, revenue, and
            demand.
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
            Our SaaS development services help startups and enterprises build
            subscription-based platforms using modern cloud technologies. We
            focus on scalability, security, and exceptional user experience.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Custom SaaS Architecture</h3>
              <p>
                Design and development of multi-tenant SaaS architectures
                optimized for performance and scalability.
              </p>
            </div>

            <div className="card animate">
              <h3>Cloud & DevOps Enablement</h3>
              <p>
                Cloud-native deployment with CI/CD pipelines, monitoring, and
                automated scaling.
              </p>
            </div>

            <div className="card animate">
              <h3>Subscription & Billing Systems</h3>
              <p>
                Secure integration of subscription management, billing, and
                access control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Build SaaS Products</h2>
          <p className="section-intro">
            A structured and scalable approach to delivering market-ready SaaS
            platforms.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Product Strategy & Planning</h3>
              <p>
                Analyze business goals, users, and technical requirements to
                define the SaaS roadmap.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development</span>
              <h3>Agile SaaS Development</h3>
              <p>
                Rapid development using modern frameworks, APIs, and cloud
                services.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch & Scale</span>
              <h3>Deployment & Growth</h3>
              <p>
                Secure deployment, performance optimization, and continuous
                improvement.
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
              <h3>SaaS Product Expertise</h3>
              <p>
                Proven experience building SaaS products from MVP to
                enterprise-scale platforms.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Secure by Design</h3>
              <p>
                Architected with performance, security, and scalability at the
                core.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Long-Term Partnership</h3>
              <p>
                Continuous optimization, feature growth, and platform support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Build Your SaaS Product</h2>
            <p>
              Ready to launch or scale your SaaS platform? Talk to our experts
              today.
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
                placeholder="Tell us about your SaaS product..."
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
              alt="SaaS Platform Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
