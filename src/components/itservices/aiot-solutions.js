
import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import inventoryGif from "../../assets/inventory-management.gif";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./android-app.css";
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
    AIoT Development Solutions – AI & IoT Services | Manovate Technologies
  </title>

  <meta
    name="description"
    content="Manovate Technologies delivers AIoT development solutions by integrating artificial intelligence with IoT systems, edge computing, and real-time analytics to build intelligent, connected platforms."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices/aiot-development-solutions"
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
          <h1>AIoT Development Solutions</h1>
          <p>
            Manovate Technologies delivers intelligent AIoT solutions by
            integrating Artificial Intelligence with Internet of Things (IoT)
            ecosystems. We build smart, connected systems that enable real-time
            insights, automation, and predictive decision-making at scale.
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
            Our AIoT development services help organizations transform connected
            devices into intelligent systems. By combining IoT sensors, edge
            computing, cloud platforms, and AI models, we enable smarter
            operations, automation, and data-driven intelligence.
          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Smart Device & Sensor Integration</h3>
              <p>
                Design and integration of IoT devices, sensors, and gateways to
                collect real-time data from connected environments.
              </p>
            </div>

            <div className="card animate">
              <h3>Edge AI & Real-Time Analytics</h3>
              <p>
                Deploy AI models at the edge for low-latency processing,
                real-time decision-making, and reduced cloud dependency.
              </p>
            </div>

            <div className="card animate">
              <h3>Predictive Intelligence & Automation</h3>
              <p>
                Enable predictive maintenance, anomaly detection, and automated
                actions using AI-driven insights from IoT data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>How We Deliver AIoT Solutions</h2>
          <p className="section-intro">
            A structured and scalable approach to building secure,
            high-performance AIoT ecosystems.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery & Architecture</span>
              <h3>Use Case & IoT Strategy</h3>
              <p>
                We analyze business objectives, device ecosystems, and data
                flows to define the optimal AIoT architecture and technology
                stack.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Development</span>
              <h3>AIoT System & Model Development</h3>
              <p>
                Development of IoT platforms, edge AI models, data pipelines,
                and cloud integrations for intelligent system behavior.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment & Scale</span>
              <h3>Deployment, Monitoring & Optimization</h3>
              <p>
                Secure deployment with continuous monitoring, model updates,
                and performance optimization across devices and environments.
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
              <h3>AIoT & Edge AI Expertise</h3>
              <p>
                Deep expertise in AI, IoT platforms, edge computing, and
                real-time data analytics for intelligent systems.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Secure & Scalable Architectures</h3>
              <p>
                Enterprise-grade AIoT solutions designed for security,
                scalability, and long-term operational reliability.
              </p>
            </div>

            <div className="why-box animate">
              <h3>Industry-Focused Solutions</h3>
              <p>
                Proven AIoT implementations across smart manufacturing,
                logistics, healthcare, energy, and smart city applications.
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
              Build intelligent, connected systems with AIoT. Talk to our
              experts to start your AIoT transformation today.
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
                placeholder="Tell us about your AIoT requirements..."
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
              alt="AIoT system illustration"
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





