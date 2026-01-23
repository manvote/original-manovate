import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
import { Helmet } from "react-helmet-async";

export default function WebApplicationServices() {
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
    Web Application Services – Scalable Web Apps & Websites | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies offers web application services including high-performance websites, scalable web applications, UI/UX design, and SEO-optimized digital platforms built for business growth."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/web-application-services"
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
          <h1>Web Application Services</h1>
          <p>
            We design and build high-performance websites and scalable web
            applications that strengthen digital presence, engage users, and
            support long-term business growth.
          </p>

          <a href="#services" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Website Design & Development</h2>

          <p className="section-intro">
            We help businesses build a strong brand presence through
            professionally designed marketing websites and corporate platforms
            that communicate value, build trust, and scale with growth.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Brand & Strategy Planning</h3>
              <p>
                We analyze your business goals, audience, and market positioning
                to define structure, messaging, and visual direction aligned with
                your brand.
              </p>
            </div>

            <div className="card animate">
              <h3>Design & Development</h3>
              <p>
                Responsive, modern websites built with clean UI/UX, fast
                performance, and scalable architecture for long-term success.
              </p>
            </div>

            <div className="card animate">
              <h3>Launch & Optimization</h3>
              <p>
                SEO checks, performance optimization, and testing ensure your
                website delivers measurable results after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Building a Strong Digital Brand Presence</h2>

          <p className="section-intro">
            Our structured web development process ensures clarity, consistency,
            and measurable impact from concept to launch.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery & Research</span>
              <h3>Define Brand Identity</h3>
              <p>
                We analyze goals, competitors, and audience behavior to create a
                strong and consistent digital identity.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Strategy & Execution</span>
              <h3>Build Visibility & Authority</h3>
              <p>
                Through optimized content and performance-focused development,
                we increase brand awareness and engagement.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Growth & Optimization</span>
              <h3>Scale & Optimize</h3>
              <p>
                Continuous improvements ensure performance, SEO, and long-term
                digital growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Digital Solutions That Power Business Growth</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>Technical Excellence</h3>
              <p>
                Modern frameworks and best practices ensure reliability, speed,
                and scalability.
              </p>
            </div>

            <div className="why-box animate">
              <h3>User-Centered Design</h3>
              <p>
                Clean, accessible designs that deliver seamless user experiences
                across devices.
              </p>
            </div>

            <div className="why-box animate">
              <h3>SEO & Performance</h3>
              <p>
                Optimized architecture, fast load times, and SEO-ready structure
                drive visibility and conversions.
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
            <p>Tell us about your project and our team will reach out.</p>

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
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Project
              </button>
            </form>
          </div>

          <div className="contact-right">
            <p className="interest-title">I'm interested in…</p>
            <div className="interest-tags">
              {[
                "Branding",
                "Web Design",
                "Web Development",
                "UI/UX",
                "E-Commerce",
                "Mobile App",
                "Corporate Website",
                "Other",
              ].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
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
