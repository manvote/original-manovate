import { useEffect, useState } from "react";
import shero1 from "../../assets/hero1.jpg";
import shero2 from "../../assets/hero2.jpg";
import shero3 from "../../assets/hero3.jpg";
import "./android-app.css";

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


  /* ================= TIMELINE PROGRESS (ONE ORIGIN → ONE END) ================= */
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
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="service-hero-content animate">
          <h1>AI & Machine Learning Solutions</h1>
          <p>
           Manovate Technologies delivers advanced AI and machine learning solutions that help businesses automate processes, analyze data intelligently, and create personalized digital experiences. Our artificial intelligence development services combine machine learning, deep learning, and predictive analytics to build scalable, future-ready AI systems.


          </p>

          <a href="#services" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= WEBSITE DESIGN & DEVELOPMENT ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>AI & Machine Learning Solutions (Automation, Predictive Analytics, Personalization)
</h2>

          <p className="section-intro">
            Our AI and machine learning services help organizations turn data into intelligent decision-making systems. From AI automation and predictive analytics to personalized user experiences, we design and deploy artificial intelligence solutions that drive efficiency, accuracy, and business growth.


          </p>

          <div className="grid">
            <div className="card animate">
              <h3>AI Automation Solutions</h3>
              <p>
            We build AI-powered automation systems using machine learning algorithms to streamline workflows, reduce manual effort, and improve operational efficiency across business processes.

              </p>
            </div>

            <div className="card animate">
              <h3>Predictive Analytics & AI Models</h3>
              <p>
               Our predictive analytics solutions use machine learning models and AI algorithms to forecast trends, optimize decision-making, and deliver accurate business predictions using real-time data.


              </p>
            </div>

            <div className="card animate">
              <h3>Personalized AI Experiences</h3>
              <p>
               We develop personalized AI systems that adapt to user behavior, delivering intelligent recommendations, customized content, and enhanced customer experiences across web and mobile platforms.


              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAND TIMELINE ================= */}
      <section className="section-light">
        <div className="service-container">
          <h2>Building a Strong Digital Brand Presence</h2>

          <p className="section-intro">
Our AI and machine learning development process follows a structured timeline, ensuring reliable model design, deployment, and continuous optimization for real-world business impact.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">AI Discovery & Data Strategy</span>
              <h3>AI & Machine Learning Planning</h3>
              <p>
We analyze business objectives, data sources, and AI opportunities to design a clear artificial intelligence strategy aligned with automation, prediction, and scalability goals.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Model Development & Training</span>
              <h3>Machine Learning & AI Development</h3>
              <p>
Our AI engineers build and train machine learning and deep learning models using advanced algorithms, ensuring accuracy, performance, and secure AI system architecture.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Deployment & Optimization</span>
              <h3>AI Deployment & Continuous Learning</h3>
              <p>
               We deploy AI solutions into production environments, monitor performance, and continuously optimize models to deliver scalable, intelligent, and business-ready AI systems.

              </p>
            </div>

            <div className="timeline-end"></div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section-white" id="services">
        <div className="service-container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-box animate">
              <h3>AI & Machine Learning Expertise</h3>
              <p>
                Our AI and machine learning experts design intelligent solutions using advanced algorithms, deep learning models, and data-driven strategies to solve complex business challenges efficiently.

              </p>
            </div>

            <div className="why-box animate">
              <h3>Scalable & Secure AI Solutions</h3>
              <p>
                We build scalable, secure AI solutions designed for enterprise environments, ensuring data protection, performance optimization, and reliable AI model deployment.

              </p>
            </div>

            <div className="why-box animate">
              <h3>Business-Driven AI Strategy</h3>
              <p>
                Our AI strategies focus on automation, predictive analytics, and personalization to help businesses improve decision-making, efficiency, and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= CONTACT ================= */}
<section className="contact-section" id="contact">
  <div className="service-container contact-grid">
    
    {/* LEFT */}
    <div className="contact-left">
      <h2>Contact Manovate Technologies</h2>

      <p>
        Tell us about your project and our team will get back to you shortly.
      </p>

      <form
        className="service-contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Our team will contact you shortly.");
        }}
      >
        <input
          type="text"
          placeholder="Your name*"
          required
        />

        <input
          type="email"
          placeholder="Your email*"
          required
        />

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

    {/* RIGHT */}
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
          <span
            key={index}
            onClick={(e) => e.target.classList.toggle("active")}
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

    </>
  );
}
