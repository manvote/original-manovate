import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "../styles/services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Services() {
  return (
    <>
    <Navbar />
    <section className="services-page">
      <h1>Our Services</h1>
      <p>End-to-end technology and business solutions.</p>

      <div className="services-grid">
        {servicesData.map(cat => (
          <Link
            key={cat.categoryId}
            to={`/services/${cat.categoryId}`}
            className="service-category-card"
          >
            <h3>{cat.categoryTitle}</h3>
            <p>{cat.categoryDescription}</p>
            <span>{cat.services.length} Services →</span>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}
