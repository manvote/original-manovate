import { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import "./android-app.css";

export default function IOSAppDevelopment() {
  const heroImages = [hero1, hero2, hero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "iOS App Development Services | Custom iPhone & iPad Applications";

    const content =
      "Professional iOS app development services for iPhone and iPad. We build secure, scalable, and high-performance iOS applications using Swift and modern Apple frameworks.";

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
          <h1>iOS App Development Services</h1>
          <p>
            Manovate Technologies builds premium iOS applications for iPhone and
            iPad using Swift and Apple-native frameworks. Our apps deliver
            seamless user experience, strong security, and long-term scalability.
          </p>

          <a href="#services" className="btn-primary">
            Build iOS App
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>
          <p className="section-intro">
            Our iOS app development services help businesses design, develop, and
            launch high-quality mobile applications for the Apple ecosystem. We
            focus on performance, security, usability, and App Store compliance.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Custom iOS App Development</h3>
              <p>
                Native iOS applications built using Swift and Apple frameworks
                tailored to business goals.
              </p>
            </div>

            <div className="card animate">
              <h3>iOS UI/UX Design</h3>
              <p>
                Elegant, intuitive interfaces following Apple Human Interface
                Guidelines.
              </p>
            </div>

            <div className="card animate">
              <h3>API & Apple Ecosystem Integration</h3>
              <p>
                Secure integration with APIs, backend systems, iCloud, and Apple
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>iOS App Development Process</h2>
          <p className="section-intro">
            A structured process ensuring quality, performance, and smooth App
            Store approval.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Planning</span>
              <h3>Product Strategy & Architecture</h3>
              <p>
                Define app goals, user journeys, and technical architecture
                optimized for iOS.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development</span>
              <h3>iOS Engineering</h3>
              <p>
                Secure, scalable iOS development using Swift and best practices.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch</span>
              <h3>Testing & App Store Release</h3>
              <p>
                QA testing, App Store submission, and post-launch optimization.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Our iOS App Development Services</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Apple Ecosystem Expertise</h3>
              <p>
                Strong expertise in iOS, Swift, and Apple-native technologies.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Scalable Apps</h3>
              <p>
                Built with performance, security, and future growth in mind.
              </p>
            </div>

            <div className="why-box animate">
              <h3>End-to-End Delivery</h3>
              <p>
                Complete iOS app lifecycle from concept to App Store launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Your iOS App Project</h2>
            <p>
              Have an iOS app idea? Talk to our experts and turn it into a
              high-quality Apple application.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our iOS team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your iOS app requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request iOS Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="iOS App Development Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
