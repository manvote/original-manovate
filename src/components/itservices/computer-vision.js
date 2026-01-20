import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";

export default function ComputerVisionServices() {
  const heroImages = [shero1, shero2, shero3];
  const totalSlides = heroImages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SEO META ================= */
  useEffect(() => {
    document.title =
      "Computer Vision Development | AI-Based Visual Intelligence Solutions";

    const content =
      "We provide end-to-end computer vision solutions leveraging image processing, deep learning, and AI-powered visual recognition. Our systems support object tracking, image classification, video analytics, and automated visual inspection to help businesses extract actionable insights from visual data at scale.";

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
          <h1>Computer Vision Solutions</h1>
          <p>
            Manovate Technologies delivers advanced computer vision solutions
            that enable machines to analyze, interpret, and understand visual
            data. Our AI-powered systems support image recognition, video
            analytics, and automated visual inspection for smarter decisions
            and operational efficiency.
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
            Our computer vision services help businesses unlock insights from
            images and videos using deep learning and AI-powered visual
            intelligence. We design scalable solutions for object detection,
            facial recognition, video monitoring, and automated quality
            inspection.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Image Recognition & Classification</h3>
              <p>
                Identify and classify objects, faces, and scenes from images
                using advanced deep learning and computer vision models.
              </p>
            </div>

            <div className="card animate">
              <h3>Video Analytics & Monitoring</h3>
              <p>
                Analyze live and recorded video streams for real-time insights,
                motion tracking, behavior detection, and security monitoring.
              </p>
            </div>

            <div className="card animate">
              <h3>Automated Visual Inspection</h3>
              <p>
                Detect defects, anomalies, and quality issues using AI-powered
                visual inspection systems for manufacturing and industrial
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Deliver Computer Vision Solutions</h2>
          <p className="section-intro">
            A structured approach to building reliable, scalable, and accurate
            computer vision systems.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery</span>
              <h3>Use Case Analysis & Data Strategy</h3>
              <p>
                We analyze business objectives, visual data sources, and use
                cases to define the right computer vision strategy and model
                architecture.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Model Development</span>
              <h3>Computer Vision Model Training</h3>
              <p>
                Development and training of deep learning models for image and
                video analysis with high accuracy and scalability.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment</span>
              <h3>Deployment & Continuous Optimization</h3>
              <p>
                Deploy production-ready computer vision systems with continuous
                monitoring, optimization, and performance improvements.
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
              <h3>Computer Vision Expertise</h3>
              <p>
                Strong expertise in image processing, deep learning, and
                AI-powered video analytics solutions.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Enterprise-Grade Solutions</h3>
              <p>
                Scalable, secure, and production-ready computer vision systems
                designed for real-world deployment.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Industry-Focused Use Cases</h3>
              <p>
                Proven implementations across healthcare, manufacturing,
                retail, security, and smart city environments.
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
              Unlock insights from visual data with AI-driven computer vision
              solutions. Talk to our experts today.
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
                placeholder="Tell us about your computer vision requirements..."
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
              alt="Computer Vision Illustration"
              className="contact-gif"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
