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
      "Performance Marketing Agency | Google Ads & Meta Ads for Fast Lead Generation";

    const content =
      "Performance marketing services focused on Google Ads and Meta Ads to drive fast lead generation, measurable ROI, higher conversion rates, and scalable paid advertising campaigns.";

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
          <h1>Performance Marketing Services</h1>
          <p>
            Manovate Technologies is a performance marketing agency delivering
            high-impact Google Ads and Meta Ads campaigns. We help businesses
            generate qualified leads, increase conversions, and achieve
            measurable ROI through data-driven paid advertising strategies.
          </p>

          <a href="#services" className="btn-primary">
            Launch Paid Campaigns
          </a>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Overview</h2>

          <p className="section-intro">
            Our performance marketing services focus on paid advertising across
            Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads. We design,
            manage, and optimize campaigns to drive fast lead generation,
            improve click-through rates, and maximize return on ad spend.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Google Ads & Search Marketing</h3>
              <p>
                High-performing Google Ads campaigns including search, display,
                remarketing, and conversion-focused PPC strategies.
              </p>
            </div>

            <div className="card animate">
              <h3>Meta Ads & Social Advertising</h3>
              <p>
                Facebook and Instagram ad campaigns with advanced targeting,
                creative testing, and conversion optimization.
              </p>
            </div>

            <div className="card animate">
              <h3>Conversion & ROI Optimization</h3>
              <p>
                Continuous optimization of creatives, landing pages, bidding,
                and funnels to improve ROI and lower acquisition costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How Our Performance Marketing Works</h2>

          <p className="section-intro">
            A structured performance marketing process designed for speed,
            scalability, and measurable results.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Plan</span>
              <h3>Audience & Funnel Strategy</h3>
              <p>
                Research target audiences, funnels, and competitors to build a
                data-driven paid advertising strategy.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Launch</span>
              <h3>Ads Execution & Optimization</h3>
              <p>
                Launch Google Ads and Meta Ads with optimized creatives,
                targeting, and bidding models.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Scale</span>
              <h3>ROI Tracking & Growth</h3>
              <p>
                Track CTR, CPA, ROAS, and scale winning campaigns for consistent
                lead generation.
              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= TRANSFORMATION FLOW ================= */}
      <section className="dt-flow-section">
        <div className="service-container">
          <h2 className="dt-title">Performance Marketing Framework</h2>
          <p className="dt-subtitle">
            A results-driven advertising model focused on measurable growth.
          </p>

          <div className="dt-flow">
            <div className="dt-stage before">
              <h3>Before Paid Ads</h3>
              <ul>
                <li>Low lead volume</li>
                <li>High acquisition costs</li>
                <li>Unpredictable marketing results</li>
              </ul>
            </div>

            <div className="dt-core">
              <div className="dt-core-item">
                <span>Targeting</span>
                <p>Audience & intent targeting</p>
              </div>
              <div className="dt-core-item">
                <span>Advertising</span>
                <p>Google Ads & Meta Ads</p>
              </div>
              <div className="dt-core-item">
                <span>Optimization</span>
                <p>Conversion & ROI improvement</p>
              </div>
            </div>

            <div className="dt-stage after">
              <h3>After Paid Ads</h3>
              <ul>
                <li>Consistent lead flow</li>
                <li>Lower CPA</li>
                <li>Predictable ROI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">
        <div className="service-container contact-grid">
          <div className="contact-left">
            <h2>Start Performance Marketing</h2>
            <p>
              Looking to generate leads fast with Google Ads and Meta Ads?
              Talk to our performance marketing experts today.
            </p>

            <form
              className="service-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our marketing team will contact you shortly.");
              }}
            >
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Your email*" required />
              <textarea
                rows="4"
                placeholder="Tell us about your advertising goals..."
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Request Campaign Setup
              </button>
            </form>
          </div>

          <div className="contact-right gif-container">
            <img
              src={inventoryGif}
              alt="Performance Marketing and Paid Advertising"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
