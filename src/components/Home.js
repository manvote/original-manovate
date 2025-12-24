import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./HeroSlider.css";
import "./impact.css";
import "./solutions.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// Hero images
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import aiImg from "../assets/ai.jpg";
import cloudImg from "../assets/cloud.webp";
import cyberImg from "../assets/cyber.jpg";
import appImg from "../assets/app.avif";
import productImg from "../assets/product.jpg";
import brandingImg from "../assets/branding.png";
import businessImg from "../assets/business.jpg";
import digitalImg from "../assets/digital.avif"
import aisolutions from "../assets/ai-solutions.jpg";
import modernization from "../assets/modernization.jpg";
import cloudMigration from "../assets/cloud-com.avif";
import cybersecurity from "../assets/cyber-security.jpg";  
import dataAnalytics from "../assets/data-analytics.avif";
import productEngineering from "../assets/product-engineering.avif";
import ProductsSection from "./ProductsSection";
import webImg from "../assets/web.jpg"
// later in JSX




const images = [hero1, hero2, hero3];

const Home = () => {
  /* ---------------------- HERO SLIDER LOGIC ---------------------- */
  const [index, setIndex] = useState(0);


const solutions = [
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    img: aisolutions,
    desc: "AI-driven capabilities engineered to give your business a competitive edge."
  },
  {
    title: "Legacy Modernization",
    slug: "legacy-modernization",
    img: modernization,
    desc: "Transforming outdated systems into modern, scalable digital platforms."
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    img: cybersecurity,
    desc: "End-to-end security frameworks protecting your digital ecosystem."
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    img: dataAnalytics,
    desc: "Advanced insights powering strategic decision-making and automation."
  },
  {
    title: "Product Engineering",
    slug: "product-engineering",
    img: productEngineering,
    desc: "Enterprise-grade product development with innovation at its core."
  },
  {
    title: "Cloud Transformation",
    slug: "cloud-transformation",
    img: cloudMigration,
    desc: "Cloud-native solutions enabling agility, resilience and optimized performance."
  },
];


const [activeIndex, setActiveIndex] = useState(null);

// Move carousel so active card is centered
const centerActiveCard = (index) => {
  const cardWidth = 260;          // normal card width
  const expandedWidth = 480;   // active card width
  const gap = 40;                 // spacing between cards

  const baseX = index * (cardWidth + gap);

  const carousel = document.querySelector(".carousel-window");
  const windowCenter = carousel.offsetWidth / 2;

  const cardCenter = baseX + expandedWidth / 2;

  setTranslateX(windowCenter - cardCenter);
};


const [translateX, setTranslateX] = useState(0);

const nextCard = () => {
  setActiveIndex((prev) => {
    const newIndex = (prev + 1) % solutions.length;
    centerActiveCard(newIndex);
    return newIndex;
  });
};

const prevCard = () => {
  setActiveIndex((prev) => {
    const newIndex = prev === 0 ? solutions.length - 1 : prev - 1;
    centerActiveCard(newIndex);
    return newIndex;
  });
};

// Re-center on first load
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  if (activeIndex !== null) {
    setTimeout(() => centerActiveCard(activeIndex), 100);
  }
}, [activeIndex]);





  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  setTimeout(() => {
    const cards = document.querySelectorAll(".impact-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("in-view");
      }, i * 120);
    });
  }, 300);
}, []);

const [activeService, setActiveService] = useState(null);


// CLICK TO TOGGLE OVERLAY
useEffect(() => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Close all others
      cards.forEach(c => c.classList.remove("active"));

      // Open clicked one
      card.classList.add("active");
    });
  });
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
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(graph);

  return () => observer.disconnect();
}, []);



  return (
    <>
      <Navbar />

      

{/* ---------------------- HERO SLIDER ---------------------- */}
      <div className="hero-slider">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-content">
          <h1>Engineering Digital Success</h1>
          <p>Transforming businesses through technology and innovation</p><br></br>
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



{/* ---------------------- SOLUTIONS SECTION ---------------------- */}

<section className="solutions-flex">
  <div className="solutions-accent"></div>

  <p className="solution-tag">• Solutions</p>

  <h1 className="solution-title">
    Powering Businesses Through Smart<br /> Engineering
  </h1>

  {/* WRAPPER FOR ARROWS + CAROUSEL */}
  <div className="carousel-wrapper">

    {/* LEFT ARROW */}
    <button
      className="carousel-arrow left"
      onClick={prevCard}
      aria-label="Previous"
    >
      ‹
    </button>

    {/* CAROUSEL WINDOW */}
    <div className="carousel-window">
      <div
        className="carousel-track"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {solutions.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              className={`flex-card ${isActive ? "active" : "inactive"}`}
              onClick={() => {
                if (activeIndex === i) {
                  setActiveIndex(null);
                } else {
                  setActiveIndex(i);
                  centerActiveCard(i);
                }
              }}
            >
              {/* NORMAL CARD */}
              {!isActive && (
                <div className="normal-card">
                  <div className="normal-img-wrapper">
                    <img
                      className="normal-img"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>

                  <div className="normal-title-wrapper">
                    <h2 className="normal-title">{item.title}</h2>
                  </div>
                </div>
              )}

              {/* EXPANDED CARD */}
              {isActive && (
                <div className="expanded-content">
                  <img
                    className="big-img"
                    src={item.img}
                    alt={item.title}
                  />

                  <div className="text-side">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>

                    <Link
  to={`/solutions/${item.slug}`}
  className="solution-arrow-btn"
>
  Explore →
</Link>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* RIGHT ARROW */}
    <button
      className="carousel-arrow right"
      onClick={nextCard}
      aria-label="Next"
    >
      ›
    </button>

  </div>
</section>



{/* ================= HOME SERVICES SECTION ================= */}
<section className="home-services" id="home-services">

  <p className="home-services-tag">• Services</p>

  <h1 className="home-services-title">
    Transforming Businesses<br />Through Engineering Excellence
  </h1>

  <div className="home-services-grid">

    {[
      { title: "Website & Web Application Services", img: webImg, desc: "High-performance websites and enterprise-grade web platforms engineered for speed, security, and scalability." },
      { title: "Mobile Application Development", img: appImg, desc: "Modern, scalable mobile applications across Android, iOS, and cross-platform frameworks." },
      { title: "AI & Automation Solutions", img: aiImg, desc: "Intelligent automation and AI systems that streamline operations and drive smarter decisions." },
      { title: "Custom Enterprise Software", img: productImg, desc: "Tailored enterprise systems including CRM, ERP, HRMS, and custom platforms." },
      { title: "Cloud & Infrastructure Services", img: cloudImg, desc: "Secure, resilient cloud environments built for performance and cost efficiency." },
      { title: "Cybersecurity Solutions", img: cyberImg, desc: "End-to-end cybersecurity frameworks for continuous protection and compliance." },
      { title: "Business & Strategy Consulting", img: businessImg, desc: "Strategic guidance to optimize operations and accelerate growth." },
      { title: "Branding & Creative Services", img: brandingImg, desc: "Impactful brand identities and visually compelling digital assets." },
      { title: "Digital Marketing Services", img: digitalImg, desc: "Data-driven SEO and performance marketing delivering measurable growth." }
    ].map((item, idx) => (
      <div
        key={idx}
        className={`home-service-card ${activeService === idx ? "active" : ""}`}
        onClick={() => {
          setActiveService(idx);
          setTimeout(() => setActiveService(null), 4000);
        }}
      >
        <img src={item.img} alt={item.title} className="home-service-img" />

        {/* Always visible title */}
        <div className="home-service-title">
          <h3>{item.title}</h3>
        </div>

        {/* Slide-up overlay */}
        <div className="home-service-overlay">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    ))}

  </div>
</section>


<ProductsSection />

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
