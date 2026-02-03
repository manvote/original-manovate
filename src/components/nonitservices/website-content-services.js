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
    Website Content Writing Services | SEO Website Content Agency | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies offers professional website content writing services including SEO content, website copywriting, blogs, and landing pages. We help businesses improve search rankings, engagement, and conversions with clear, brand-aligned content."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/nonitservices/website-content-services"
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
          <h1>Website Content Services</h1>
          <p>
            Manovate Technologies delivers professional website content services
            that help businesses communicate clearly, rank higher on search
            engines, and convert visitors into customers with SEO-optimized,
            brand-aligned content.
          </p>

          <a href="#services" className="btn-primary">
            Get Content Started
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our website content services focus on clarity, relevance, and search
            visibility. From homepage copy and service pages to blogs and landing
            pages, we create content that drives engagement and conversions.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Website Copywriting</h3>
              <p>
                Clear, compelling website copy that reflects your brand voice,
                communicates value, and guides users through the journey.
              </p>
            </div>

            <div className="card animate">
              <h3>SEO Content Writing</h3>
              <p>
                Keyword-driven SEO content that improves rankings, organic
                traffic, and long-term visibility.
              </p>
            </div>

            <div className="card animate">
              <h3>Blogs & Landing Pages</h3>
              <p>
                Informative blogs and high-converting landing pages designed to
                support marketing and lead generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Our Website Content Process</h2>

          <p className="section-intro">
            A structured content development workflow designed for quality,
            consistency, and measurable results.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Research & Planning</h3>
              <p>
                Understand business goals, audience needs, competitors, and SEO
                opportunities.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Creation</span>
              <h3>Content Writing & Optimization</h3>
              <p>
                Craft SEO-friendly, engaging, and brand-consistent website
                content.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Refinement</span>
              <h3>Review & Improvement</h3>
              <p>
                Refine content for clarity, performance, and alignment with
                business objectives.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Content That Converts</h2>
          <p className="dt-subtitle">
            Turning unclear messaging into structured, engaging, and
            conversion-focused content.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Content Optimization</h3>
              <ul>
                <li>Unclear messaging</li>
                <li>Low engagement</li>
                <li>Poor search visibility</li>
                <li>Inconsistent brand voice</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Strategy</span>
                <p>Content planning and keyword research</p>
              </div>
              <div className="dt-core-item">
                <span>Writing</span>
                <p>SEO-friendly and user-focused content</p>
              </div>
              <div className="dt-core-item">
                <span>Optimization</span>
                <p>Structure, clarity, and conversion focus</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Content Optimization</h3>
              <ul>
                <li>Clear messaging</li>
                <li>Improved rankings</li>
                <li>Higher engagement</li>
                <li>Better conversions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Talk to Our Content Experts</h2>
            <p>
              Looking to improve your website content? Our specialists are ready
              to help.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our content team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your content requirements..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Content Consultation
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Website Content Writing and SEO Content Services"
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
