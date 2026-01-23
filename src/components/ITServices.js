import { Link } from "react-router-dom";
import { ITservicesData } from "../data/ITservicesData";
import "../styles/services.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import servicesHero from "../assets/itservices.jpg"; // ✅ add image
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>

    <Helmet>
  <title>IT Services – AI & Software Engineering | Manovate Technologies</title>

  <meta
    name="description"
    content="Explore Manovate Technologies IT services including AI development, cloud solutions, web and mobile applications, enterprise software, and cybersecurity."
  />

  <link
    rel="canonical"
    href="https://www.manovate.co.in/itservices"
  />
</Helmet>

      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${servicesHero})` }}
      >
        <div className="services-hero-overlay">
          <h1>IT Services</h1>
          <p>
            Comprehensive technology solutions designed to modernize,
            secure, and scale your business operations.
          </p>
        </div>
      </section>

      {/* ===== SERVICES CONTENT ===== */}
      <section className="services-page">
        <div className="services-grid">
          {ITservicesData.map((cat) => (
            <Link
  key={cat.categoryId}
  to={`/itservices/${cat.categoryId}`}
  className="service-category-card"
>
  <h3>{cat.categoryTitle}</h3>
  <p>{cat.categoryDescription}</p>

  {/* FOOTER – MUST EXIST */}
  <div className="service-card-footer">
    <div className="view-more-btn">
      View more <span className="view-more-icon">→</span>
    </div>
  </div>
</Link>

          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
