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
          <h1>Mobile app development</h1>
          <p>
           Manovate Technologies is a leading mobile app development company delivering secure, scalable, and high-performance 
           mobile applications for Android, iOS, and cross-platform environments. Our custom app development services help businesses 
           transform ideas into powerful digital products.

          </p>

          <a href="#services" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= WEBSITE DESIGN & DEVELOPMENT ================= */}
      <section className="section-white">
        <div className="service-container">
          <h2>Mobile App Development Overview</h2>

          <p className="section-intro">
            Our mobile application development services cover the complete app
             lifecycle—from idea validation and UI/UX design to development,
              testing, launch, and long-term support. As an experienced app 
              development company in India, we build native, hybrid, and 
              cross-platform mobile apps tailored to your business goals.

          </p>

          <div className="grid">
            <div className="card animate">
              <h3>Custom Mobile App Development</h3>
              <p>
             We provide custom mobile app development services for 
             startups, enterprises, and growing businesses. Our team 
             builds secure, scalable applications designed for performance, 
             usability, and long-term growth.

              </p>
            </div>

            <div className="card animate">
              <h3>Android & iOS App Development</h3>
              <p>
               Our Android and iOS app development services deliver 
               high-quality mobile applications using modern technologies, 
               ensuring smooth performance, security, and seamless user 
               experiences across devices.

              </p>
            </div>

            <div className="card animate">
              <h3>Cross-Platform App Development</h3>
              <p>
               Using React Native and Flutter, we develop 
               cross-platform mobile applications that reduce development 
               cost while maintaining native-like performance and consistent 
               functionality.

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
Our mobile app development process follows a structured timeline, ensuring clarity, efficiency, and predictable delivery from concept to launch.
          </p>

          <div className="timeline" id="brand-timeline">
            <div className="timeline-start"></div>
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <span className="timeline-label">Discovery & Brand Research</span>
              <h3>App Discovery & Planning</h3>
              <p>
                We analyze your business goals, target audience, and market positioning to create a clear brand identity that builds trust and recognition across digital platforms.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Strategy & Digital Planning</span>
              <h3>Design & App Development</h3>
              <p>
              Our app developers design intuitive UI/UX and build secure mobile applications using Android, iOS, or cross-platform technologies.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">Execution & Growth</span>
              <h3>Testing, Launch & Growth</h3>
              <p>
               We perform rigorous mobile app testing,
                deploy your application, and support continuous 
                improvements for performance, security, and scalability.

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
              <h3>Technical Excellence</h3>
              <p>
                Modern frameworks and best practices ensure reliability, speed,
                and maintainability.
              </p>
            </div>

            <div className="why-box animate">
              <h3>User-Centered Design</h3>
              <p>
                Accessible, responsive designs that deliver consistent
                experiences across devices.
              </p>
            </div>

            <div className="why-box animate">
              <h3>SEO & Performance</h3>
              <p>
                Optimized code, fast load times, and SEO-ready structures drive
                visibility and growth.
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
