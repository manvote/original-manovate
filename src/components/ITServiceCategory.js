import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ITservicesData } from "../data/ITservicesData";
import "../styles/service-category-advanced.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ServiceCategory() {
  const { categoryId } = useParams();

  const category = ITservicesData.find(
    (c) => c.categoryId === categoryId
  );

  const [activeIndex, setActiveIndex] = useState(0);

  if (!category || !category.services) {
    return <div style={{ padding: 100 }}>Category not found</div>;
  }

  const activeService = category.services[activeIndex];

  return (
    <>
    <Navbar />
    <section className="sc-hybrid">

      {/* ===== HERO ===== */}
      <div className="sch-hero">
        <h1>{category.categoryTitle}</h1>
        <p>{category.categoryDescription}</p>
        <span className="sch-line" />
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="sch-layout">

        {/* LEFT LIST */}
        <div className="sch-list">
          {category.services.map((service, index) => (
            <div
              key={service.id}
              className={`sch-item ${
                index === activeIndex ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        {/* RIGHT HYBRID PANEL */}
        <div className="sch-preview">

          <div className="sch-card">

            {/* HYBRID VISUAL */}
            <div className="sch-visual">
              {/* Gradient animation layer */}
              <div className="sch-gradient" />

              {/* Image layer (optional) */}
              {activeService.heroImage && (
                <img
                  src={activeService.heroImage}
                  alt={activeService.title}
                  onError={(e) => (e.target.style.display = "none")}
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="sch-content">
              <h2>{activeService.title}</h2>
              <p>{activeService.shortValue}</p>

              <div className="sch-tags">
                {activeService.capabilities?.slice(0, 5).map((cap, i) => (
                  <span key={i}>{cap}</span>
                ))}
              </div>

              <Link
                to={`/itservices/${categoryId}/${activeService.id}`}
                className="sch-btn"
              >
                View Service
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
