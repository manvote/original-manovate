import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "../styles/service-detail.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ServiceDetail() {
  const { categoryId, serviceId } = useParams();

  const category = servicesData.find(
    (cat) => cat.categoryId === categoryId
  );

  const service = category?.services?.find(
    (srv) => srv.id === serviceId
  );

  if (!service) {
    return (
      <div className="sd-error">
        <h2>Service not found</h2>
        <Link to="/services">← Back to Services</Link>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="sd-wrapper">

      {/* ================= HERO ================= */}
      <section className="sd-hero">
        <div className="sd-hero-left">
          <h1>{service.title}</h1>
          <p>{service.shortValue}</p>

          <div className="sd-hero-actions">
            <a href="/free-consultation" className="sd-btn-primary">
              Request Consultation
            </a>
            <a href="/contact" className="sd-btn-outline">
              Talk to Experts
            </a>
          </div>
        </div>

        <div className="sd-hero-right">
          {service.heroImage ? (
            <img src={service.heroImage} alt={service.title} />
          ) : (
            <div className="sd-image-placeholder" />
          )}
        </div>
      </section>

      {/* ================= SERVICE OVERVIEW ================= */}
<section className="sd-overview">
  <div className="sd-overview-text">
    <h2>Service Overview</h2>
    <p>{service.overview}</p>
  </div>

  <div className="sd-overview-image sd-image-cut">
    <img src={service.overviewImage} alt={service.title} />
    <span className="sd-image-glow"></span>
  </div>
</section>

<section className="sd-whw">
  <div className="sd-whw-card">
    <h3>What We Deliver</h3>
    <ul>
      <li>Enterprise-grade digital platforms</li>
      <li>High-performance, scalable architecture</li>
      <li>Secure and future-ready systems</li>
      <li>UX-focused, conversion-driven design</li>
    </ul>
  </div>

  <div className="sd-whw-card">
    <h3>How We Do It</h3>
    <ul>
      <li>Deep discovery & requirement analysis</li>
      <li>Architecture-first engineering approach</li>
      <li>Agile, milestone-based delivery</li>
      <li>Continuous testing & optimization</li>
    </ul>
  </div>

  <div className="sd-whw-wide">
    <h3>Why It Matters</h3>
    <p>
      Our approach ensures long-term scalability, reduced technical debt,
      faster go-to-market, and measurable business impact — not just software delivery.
    </p>
  </div>
</section>


      {/* ================= CAPABILITIES ================= */}
      <section className="sd-capabilities">
        <h2>Core Capabilities</h2>
        <div className="sd-cap-grid">
          {service.capabilities.map((cap, idx) => (
            <div className="sd-cap-card" key={idx}>
              <span>✓</span>
              <p>{cap}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DELIVERY FLOW ================= */}
<section className="sd-process">
  <h2>Our Delivery Approach</h2>

  <div className="sd-flow">
    {[
      "Discovery & Planning",
      "Design & Architecture",
      "Development & Integration",
      "Testing & Quality Assurance",
      "Deployment & Optimization"
    ].map((step, idx) => (
      <div className="sd-flow-step" key={idx}>
        <div className="sd-flow-circle">{idx + 1}</div>
        <p>{step}</p>

        {/* connector line */}
        {idx !== 4 && <span className="sd-flow-line" />}
      </div>
    ))}
  </div>
</section>


      {/* ================= OUTCOMES ================= */}
<section className="sd-outcomes">
  <h2>Business Outcomes</h2>

  <div className="sd-outcome-grid">
    {service.outcomes.map((out, idx) => (
      <div className="sd-outcome-card" key={idx}>
        <div className="sd-outcome-row">
          <span className="sd-outcome-icon">✔</span>
          <p>{out}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ================= INDUSTRIES ================= */}
      <section className="sd-industries">
        <h2>Industries We Serve</h2>
        <div className="sd-industry-tags">
          {service.industries.map((ind, idx) => (
            <span key={idx}>{ind}</span>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      

    </div>
    <Footer />
    </>
  );
}
