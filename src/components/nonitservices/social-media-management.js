import { useEffect, useState } from "react";
import inventoryGif from "../../assets/inventory-management.gif";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./App.css";
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
    Social Media Management Services | Social Media Marketing Agency | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies offers professional social media management services to help brands grow awareness, increase engagement, and build measurable ROI across platforms like Instagram, Facebook, LinkedIn, and Twitter through strategic content and campaign management."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/social-media-management"
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
          <h1>Social Media Management Services</h1>
          <p>
            Manovate Technologies provides end-to-end social media management
            services to help brands build awareness, engage audiences, and grow
            their online presence across major platforms.
          </p>

          <a href="#services" className="btn-primary">
            Grow on Social Media
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our social media management services help businesses connect with
            their audience through consistent content, strategic campaigns, and
            active engagement, driving brand visibility and measurable growth.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Social Media Strategy</h3>
              <p>
                Data-driven social media strategies aligned with brand goals,
                audience behavior, and platform best practices.
              </p>
            </div>

            <div className="card animate">
              <h3>Content Creation & Scheduling</h3>
              <p>
                Creative posts, visuals, captions, and consistent scheduling
                across social media platforms.
              </p>
            </div>

            <div className="card animate">
              <h3>Community & Campaign Management</h3>
              <p>
                Active engagement, comment moderation, and campaign execution to
                build trust and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Social Media Management Process</h2>

          <p className="section-intro">
            A structured approach to building strong, consistent, and engaging
            social media presence.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Research</span>
              <h3>Audience & Platform Analysis</h3>
              <p>
                Analyze audience behavior, competitors, and platform insights to
                define the right content strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Execution</span>
              <h3>Content Publishing & Engagement</h3>
              <p>
                Publish content, manage interactions, and actively engage with
                audiences across platforms.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Optimization</span>
              <h3>Analytics & Performance Improvement</h3>
              <p>
                Track performance metrics and continuously optimize campaigns
                for growth.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">From Posts to Performance</h2>
          <p className="dt-subtitle">
            Turning social activity into measurable brand growth.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Social Media Management</h3>
              <ul>
                <li>Inconsistent posting</li>
                <li>Low engagement rates</li>
                <li>Limited brand visibility</li>
                <li>No clear strategy</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Strategy</span>
                <p>Audience targeting and content planning</p>
              </div>
              <div className="dt-core-item">
                <span>Content</span>
                <p>Creative posts and campaigns</p>
              </div>
              <div className="dt-core-item">
                <span>Analytics</span>
                <p>Performance tracking and optimization</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Social Media Management</h3>
              <ul>
                <li>Consistent brand presence</li>
                <li>Higher engagement</li>
                <li>Audience growth</li>
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
            <h2>Talk to Our Social Media Experts</h2>
            <p>
              Ready to grow your brand on social media? Our experts are here to
              help.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Our social media team will contact you shortly."
                );
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your social media goals..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Social Media Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Social Media Management Services"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <p className="service-backlink">
  Explore our complete range of{" "}
  <a href="/nonitservices">Non-IT Services & Business Solutions</a>.
</p>
<br />
<br />
      <Footer />
    </>
  );
}
