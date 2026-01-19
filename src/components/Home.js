import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./HeroSlider.css";
import "./impact.css";
import "./solutions.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Hero images

import hero2 from "../assets/enterprise-software-development-meeting.webp";
import hero3 from "../assets/ai-powered-digital-solutions.webp";
import aiImg from "../assets/ai-automation-solutions.webp";
import cloudImg from "../assets/cloud-infrastructure-services.webp";
import cyberImg from "../assets/cybersecurity-solutions.webp";
import appImg from "../assets/mobile-application-development.webp";
import productImg from "../assets/custom-enterprise-software.webp";
import brandingImg from "../assets/branding-creative-services.webp";
import businessImg from "../assets/business-strategy-consulting.webp";
import digitalImg from "../assets/digital-marketing-services.webp";
import ProductsSection from "./ProductsSection";
import webImg from "../assets/website-web-application-services.webp"
import Solutions from "./Solutions";
import Chatbot from "./Chatbot";
import ChatButton from "./ChatButton";
import ToolsCarousel from "./ToolsSection";
import VendorSection from "./VendorSection";


// later in JSX
const images = [ hero2, hero3];

const Home = () => {
  /* ---------------------- HERO SLIDER LOGIC ---------------------- */
  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 5000); // 5 seconds

  return () => clearInterval(interval);
}, []);


  useEffect(() => {
  setTimeout(() => {
    const cards = document.querySelectorAll(".impact-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("in-view");
      }, i * 120);
    });
  }, 500);
}, []);




useEffect(() => {
  const elements = document.querySelectorAll(
    ".impact-left-v2, .impact-card-v2"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.25 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


useEffect(() => {
  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = Number(counter.getAttribute("data-target"));
    const isCurrency = counter.innerText.includes("₹");
    let count = 0;
    const increment = Math.max(1, Math.floor(target / 120));

    const update = () => {
      if (count < target) {
        count += increment;
        counter.innerText = isCurrency
          ? `₹${count}`
          : count;
        requestAnimationFrame(update);
      } else {
        counter.innerText = isCurrency
          ? `₹${target}+`
          : `${target}+`;
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));

  return () => observer.disconnect();
}, []);


useEffect(() => {
  const revenueCard = document.querySelector(".impact-revenue");

  if (!revenueCard) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revenueCard.classList.add("animate");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(revenueCard);

  return () => observer.disconnect();
}, []);

//IMPACT GRAPH

useEffect(() => {
  const graph = document.querySelector(".growth-graph-card");
  if (!graph) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        graph.classList.add("in-view");
        observer.unobserve(graph); // ✅ unobserve ONLY this element
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(graph);

  return () => observer.disconnect();
}, []);


const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    
      <Navbar />
<Helmet>
        <title>AI Software Development Company | Manovate Technologies</title>

        <meta
          name="description"
          content="Manovate Technologies is an AI-driven software development and digital engineering company delivering scalable enterprise solutions."
        />

        <link rel="canonical" href="https://www.manovate.co.in/" />
      </Helmet>

      {/* Chatbot */}
      <Chatbot open={open} onClose={() => setOpen(false)} />

      {/* Chat button ONLY when chat is closed */}
      {!open && (
        <ChatButton onClick={() => setOpen(true)} />
      )}


{/* ---------------------- HERO SLIDER ---------------------- */}
      <div className="hero-slider">
        {images.map((img, i) => (
          <div
            key={img}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="home-hero-content">
  <h1>Building Intelligent AI-Powered Software for Modern Enterprises</h1>

  <p className="hero-desc">
  Manovate Technologies is a technology and consulting partner delivering
intelligent, AI-powered software, enterprise platforms, and scalable
digital solutions.
</p>

<br />
  <Link to="/request-demo" className="hero-demo-btn">
    Book a Demo <span>→</span>
  </Link>
</div>
 </div>


      {/* ------------------ ULTRA PREMIUM IMPACT SECTION 2.0 ------------------ */}
<section className="impact-mnc">

  {/* LEFT */}
  <div className="impact-left">
    <span className="impact-tag">• Our Global Impact</span>

    <h2 className="impact-title">
      Building Intelligent, Scalable & Secure
      <span> Digital Ecosystems</span>
    </h2>

    <p className="impact-desc">
      Manovate Technologies is a technology and consulting partner delivering
      intelligent, AI-powered software, enterprise platforms, and scalable
      digital solutions. We help organizations modernize systems, automate
      operations, and execute growth with confidence at scale.
    </p>

<div className="impact-points">
  <div className="impact-point">
    <span>✓</span>
    <p>Enterprise-grade architecture designed for scalability, security, and long-term performance.</p>
  </div>

  <div className="impact-point">
    <span>✓</span>
    <p>AI-driven automation and analytics that reduce operational complexity and accelerate outcomes.</p>
  </div>

  <div className="impact-point">
    <span>✓</span>
    <p>Proven delivery frameworks enabling consistent execution across global, multi-technology programs.</p>
  </div>
</div>


    <button
  className="impact-btn"
  onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span>Explore Our Capabilities →</span>
</button>

  </div>

  {/* RIGHT */}
  <div className="impact-right">

    <div className="impact-metric">
      <div className="metric-icon clients"></div>
      <h4 className="counter" data-target="620">0</h4>
      <p>Clients Worldwide</p>
    </div>

    <div className="impact-metric">
      <div className="metric-icon founded"></div>
      <h4>9+ Years</h4>
      <p>Founded & Scaling Since</p>
    </div>

    <div className="impact-metric">
      <div className="metric-icon projects"></div>
      <h4 className="counter" data-target="1156">0</h4>
      <p>Projects Successfully Delivered</p>
    </div>

    <div className="impact-metric">
      <div className="metric-icon global"></div>
      <h4 className="counter" data-target="45">0</h4>
      <p>Global Strategic Collaborations</p>
    </div>

    <div className="impact-revenue">
      <h4 className="counter" data-target="30">₹0</h4>
      <p>₹30+ Crores Monthly Project Execution Capability</p>
      <div className="revenue-graph"></div>
    </div>

  </div>
</section>



<Solutions />

<ToolsCarousel />


 {/* ================= HOME SERVICES SECTION ================= */}
<section className="home-services" id="home-services">

  <p className="home-services-tag">• Services</p>

  <h2 className="home-services-title">
    Transforming Businesses<br />Through Engineering Excellence
  </h2>

  <div className="home-services-grid">

    {[
      {
        title: "Website & Web Application Services",
        img: webImg,
        desc: "High-performance websites and enterprise-grade web platforms engineered for speed, security, and scalability.",
        type: "it",
        categoryId: "website-web-application-services"
      },
      {
        title: "Mobile Application Development",
        img: appImg,
        desc: "Modern, scalable mobile applications across Android, iOS, and cross-platform frameworks.",
        type: "it",
        categoryId: "mobile-application-development"
      },
      {
        title: "AI & Automation Solutions",
        img: aiImg,
        desc: "Intelligent automation and AI systems that streamline operations and drive smarter decisions.",
        type: "it",
        categoryId: "ai-automation-solutions"
      },
      {
        title: "Custom Enterprise Software",
        img: productImg,
        desc: "Tailored enterprise systems including CRM, ERP, HRMS, and custom platforms.",
        type: "it",
        categoryId: "custom-enterprise-software"
      },
      {
        title: "Cloud & Infrastructure Services",
        img: cloudImg,
        desc: "Secure, resilient cloud environments built for performance and cost efficiency.",
        type: "it",
        categoryId: "cloud-infrastructure-services"
      },
      {
        title: "Cybersecurity Solutions",
        img: cyberImg,
        desc: "End-to-end cybersecurity frameworks for continuous protection and compliance.",
        type: "it",
        categoryId: "cybersecurity-solutions"
      },
      {
        title: "Business & Strategy Consulting",
        img: businessImg,
        desc: "Strategic advisory services to optimize operations, efficiency, and long-term growth.",
        type: "nonit",
        categoryId: "business-strategy-consulting"
      },
      {
        title: "Branding & Creative Services",
        img: brandingImg,
        desc: "Creative solutions that strengthen brand identity and market presence.",
        type: "nonit",
        categoryId: "branding-creative-services"
      },
      {
        title: "Digital Marketing Services",
        img: digitalImg,
        desc: "Performance-driven digital marketing and growth strategies.",
        type: "nonit",
        categoryId: "digital-marketing-services"
      }
    ].map((item) => {

      const link =
        item.type === "it"
          ? `/itservices/${item.categoryId}`
          : `/nonitservices/${item.categoryId}`;

      return (
        <div className="home-service-card" key={`${item.type}-${item.categoryId}`}>

          <img
            src={item.img}
            alt={item.title}
            className="home-service-img"
          />

          <div className="home-service-title">
            <h3>{item.title}</h3>
          </div>

          <div className="home-service-overlay">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <Link to={link} className="home-service-link">
              Explore AI & Software Services →
            </Link>
          </div>

        </div>
      );
    })}

  </div>
</section>



<ProductsSection />
<VendorSection />

<section className="impact-story impact-story--compact">

  {/* LEFT CONTENT */}
  <div className="impact-story-left">
    <span className="story-tag">• Execution at Scale</span>

    <h2 className="story-title">
      Proven Enterprise Delivery
      <span>Built for Scale & Reliability</span>
    </h2>

    <p className="story-desc">
  Since 2016, Manovate Technologies has partnered with fast-growing and
  enterprise organizations worldwide to design, modernize, and scale
  mission-critical digital platforms.
</p>

<p className="story-desc">
  Our clients typically experience accelerated growth, operational efficiency,
  and measurable business outcomes — driven by AI-powered engineering,
  proven delivery frameworks, and execution at enterprise scale.
</p>


    <a href="/contact" className="story-btn">
  <span>Discuss Your Requirements →</span>
</a>

  </div>

  {/* RIGHT IMAGE */}
  <div className="impact-story-right">
  <div className="growth-graph-card growth-animate">

  <h3 className="graph-title">Average Client Growth</h3>

  <div className="graph-metric">
  <div className="growth-badge">3×</div>

  <p className="graph-sub">
    Growth acceleration achieved through strategic engineering
  </p>
</div>


    <svg
  className="growth-graph"
  viewBox="0 0 300 160"
  preserveAspectRatio="none"
>
  {/* SHARP LINE */}
  <polyline
    points="
      10,130
      60,110
      100,125
      150,90
      200,105
      260,40
    "
    fill="none"
    stroke="#006cff"
    strokeWidth="4"
    strokeLinejoin="miter"
    strokeLinecap="square"
  />

  {/* AREA FILL */}
  <polygon
    points="
      10,130
      60,110
      100,125
      150,90
      200,105
      260,40
      260,160
      10,160
    "
    fill="url(#fade)"
  />

  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#006cff" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#006cff" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>


    <p className="graph-footnote">
    Typical outcomes observed within <strong>12–18 months</strong> of
    engagement
  </p>
  </div>
</div>


</section>





<Footer />

    </>
  );
};

export default Home;
