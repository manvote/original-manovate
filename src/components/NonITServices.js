import { Link } from "react-router-dom";
import { nonItServicesData } from "../data/Non-ITservicesData";
import "../styles/services.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import nonithero from "../assets/nonitservices.jpg";

export default function NonITServices() {
  return (
    <>
      <Navbar />

      <section className="services-hero" style={{ backgroundImage: nonithero }}>
        <div className="services-hero-overlay">
          <h1>Non-IT Services</h1>
          <p>Business services that complement technology and operations.</p>
        </div>
      </section>

      <section className="services-page">
        <div className="services-grid">
          {nonItServicesData.map((cat) => (
            <Link
              key={cat.categoryId}
              to={`/nonitservices/${cat.categoryId}`}
              className="service-category-card"
            >
              <h3>{cat.categoryTitle}</h3>
              <p>{cat.categoryDescription}</p>

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
