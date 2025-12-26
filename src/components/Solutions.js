import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./solutions.css";

import aisolutions from "../assets/ai-solutions.jpg";
import modernization from "../assets/modernization.jpg";
import cloudMigration from "../assets/cloud-com.avif";
import cybersecurity from "../assets/cyber-security.jpg";
import dataAnalytics from "../assets/data.jpg";
import productEngineering from "../assets/product-engineering.avif";

const SolutionsCarousel = () => {

  // ✅ DEFINE SOLUTIONS ONLY ONCE
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
    }
  ];

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [isPaused, setIsPaused] = useState(false);


  /* ------------------ RESPONSIVE CHECK ------------------ */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ------------------ DESKTOP CENTERING ------------------ */
  useEffect(() => {
  if (isMobile) return;

  const track = trackRef.current;
  const card = track?.children[index];
  if (!card) return;

  const containerWidth = track.parentElement.offsetWidth;
  const cardCenter = card.offsetLeft + card.offsetWidth / 2;

  track.style.transform =
    `translateX(${containerWidth / 2 - cardCenter}px)`;
}, [index, isMobile]);

useEffect(() => {
  if (isMobile || isPaused) return;

  const interval = setInterval(() => {
    setIndex((i) => (i + 1) % solutions.length);
  }, 3500); // 3.5s feels premium

  return () => clearInterval(interval);
}, [isMobile, isPaused, solutions.length]);

  /* ------------------ MOBILE SLIDE ------------------ */



const next = () => {
  setIndex((i) => (i + 1) % solutions.length);
};

const prev = () => {
  setIndex((i) => (i === 0 ? solutions.length - 1 : i - 1));
};


  return (
    <section className="solutions-flex">
      <div className="solutions-accent" />
      <p className="solution-tag">• Solutions</p>

      <h1 className="solution-title">
        Powering Businesses Through Smart <br /> Engineering
      </h1>

      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={prev}>‹</button>

        <div
  className="carousel-window"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>

          <div className="carousel-track" ref={trackRef}>
            {solutions.map((item, i) => {
              const active = i === index;

              return (
                <div
                  key={item.slug}
                  className={`flex-card ${active ? "active" : ""}`}
                  onClick={() => {
  if (index === i) {
    setIndex(null); // collapse if same card
  } else {
    setIndex(i); // expand
  }
}}

                >
                  {!active && (
                    <div className="normal-card">
                      <img src={item.img} alt={item.title} />
                      <h2>{item.title}</h2>
                    </div>
                  )}

                  {active && (
                    <div className="expanded-content">
                      <img src={item.img} className="big-img" alt={item.title} />
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

        <button className="carousel-arrow right" onClick={next}>›</button>
      </div>
    </section>
  );
};

export default SolutionsCarousel;
