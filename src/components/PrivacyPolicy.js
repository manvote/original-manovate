import React from "react";
import "./Legal.css";
import {
  FaEnvelope,
  FaArrowLeft,
  FaShieldAlt,
  FaCalendarAlt,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <Helmet>
        <title>Privacy Policy | Manovate Technologies</title>
        <meta
          name="description"
          content="Read Manovate Technologies' Privacy Policy to understand how we collect, use, and protect your personal and business information."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Data Protection, Information Security, Manovate Technologies"
        />
      </Helmet>
      {/* ================= HERO ================= */}
      <section className="legal-hero">
        <Link to="/" className="legal-back-home">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="legal-hero-inner">
          <FaShieldAlt className="legal-hero-icon" />
          <h1>Privacy Policy</h1>
          <p className="legal-hero-sub">
            Manovate Technologies – Privacy Policy
          </p>

          <div className="legal-meta">
            <span><FaCalendarAlt /> Last Updated: 05 / 12 / 2025</span>
            <span><FaBuilding /> Company: Manovate Technologies</span>
            <span><FaGlobe /> Website: manovate.co.in</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="legal-content">
        <div className="legal-card">

          <p>
            Manovate Technologies (“Manovate Technologies”, “Company”, “we”, “our”,
            or “us”) is committed to safeguarding the privacy and confidentiality
            of personal and business information collected through our website,
            digital platforms, and professional services.
          </p>

          <p>
            This Privacy Policy describes how we collect, use, store, disclose,
            and protect information in accordance with applicable laws and
            industry standards.
          </p>

          <p>
            By accessing or using our website or services, you acknowledge that
            you have read, understood, and agreed to this Privacy Policy.
          </p>

          {/* 1 */}
          <h2>1. Applicability of This Privacy Policy</h2>
          <p>This Privacy Policy applies to:</p>
          <ul className="legal-arrow-list">
            <li>Visitors and users of the Manovate Technologies website</li>
            <li>Clients, prospective clients, partners, vendors, and consultants</li>
            <li>Users of our Information Technology (IT) and Non-Information Technology (Non-IT) services</li>
          </ul>
          <p>
            This policy governs information collected online and offline during
            business interactions. It does not apply to third-party websites or
            platforms linked from our website.
          </p>

          {/* 2 */}
          <h2>2. Information We Collect</h2>
          <p>
            We collect information necessary to deliver services, maintain
            business relationships, and comply with legal obligations.
          </p>

          <h3>2.1 Personal Information</h3>
          <ul className="legal-arrow-list">
            <li>Full name, designation, and organization name</li>
            <li>Email address, telephone number, and business contact details</li>
            <li>Information submitted through inquiry, contact, or registration forms</li>
          </ul>
          <p>Personal information is collected only when voluntarily provided.</p>

          <h3>2.2 Business and Service Information</h3>
          <ul className="legal-arrow-list">
            <li>Project requirements, specifications, and communications</li>
            <li>Contractual information, proposals, and service-related documentation</li>
            <li>Billing, invoicing, and payment-related details</li>
          </ul>

          <h3>2.3 Technical and Usage Information</h3>
          <ul className="legal-arrow-list">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type, operating system, and device information</li>
            <li>Website usage behavior, access times, and pages visited</li>
          </ul>

          {/* 3 */}
          <h2>3. Method of Information Collection</h2>
          <ul className="legal-arrow-list">
            <li>Website visits and form submissions</li>
            <li>Email, telephone, video calls, or in-person meetings</li>
            <li>Service agreements and contractual engagements</li>
            <li>Automated technologies such as cookies and server logs</li>
          </ul>
          <p>
            We do not collect personal data through unlawful or deceptive means.
          </p>

          {/* 4 */}
          <h2>4. Purpose of Data Collection</h2>
          <ul className="legal-arrow-list">
            <li>Responding to inquiries and business requests</li>
            <li>Delivering and managing IT and Non-IT services</li>
            <li>Communicating service updates and operational information</li>
            <li>Improving website functionality, security, and content</li>
            <li>Fulfilling contractual, regulatory, and legal obligations</li>
          </ul>

          {/* 5 */}
          <h2>5. Legal Basis for Processing Information</h2>
          <ul className="legal-arrow-list">
            <li>User consent</li>
            <li>Performance of a contract or pre-contractual obligations</li>
            <li>Legitimate business interests</li>
            <li>Compliance with applicable laws and regulations</li>
          </ul>

          {/* 6 */}
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to:
          </p>
          <ul className="legal-arrow-list">
            <li>Analyze traffic and usage patterns</li>
            <li>Enhance website functionality and performance</li>
            <li>Improve user experience</li>
          </ul>

          {/* 7 */}
          <h2>7. Information Sharing and Disclosure</h2>
          <p>
            Manovate Technologies does not sell, rent, or trade personal information.
          </p>
          <ul className="legal-arrow-list">
            <li>Authorized employees and internal teams</li>
            <li>Trusted service providers under confidentiality obligations</li>
            <li>Legal or government authorities when required by law</li>
          </ul>

          {/* 8 */}
          <h2>8. Data Security Measures</h2>
          <ul className="legal-arrow-list">
            <li>Controlled access to systems and data</li>
            <li>Secure infrastructure and servers</li>
            <li>Confidentiality obligations for employees and partners</li>
          </ul>

          {/* 9 */}
          <h2>9. Data Retention Policy</h2>
          <ul className="legal-arrow-list">
            <li>Provide services and manage relationships</li>
            <li>Fulfill contractual obligations</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          {/* 10 */}
          <h2>10. User Rights</h2>
          <ul className="legal-arrow-list">
            <li>Request access to personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion where legally permitted</li>
            <li>Withdraw consent for certain communications</li>
          </ul>

          {/* 11 */}
          <h2>11. Confidentiality of Client Data</h2>
          <p>
            All client-related data is treated as strictly confidential and used
            solely for service delivery under applicable confidentiality agreements.
          </p>

          {/* 12 */}
          <h2>12. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices.
          </p>

          {/* 13 */}
          <h2>13. Children’s Privacy</h2>
          <p>
            Our services are intended for business use and not directed toward
            individuals under 18 years of age.
          </p>

          {/* 14 */}
          <h2>14. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use
            constitutes acceptance of the updated policy.
          </p>

          {/* 15 */}
          <h2>15. Governing Law</h2>
          <p>
            This Privacy Policy is governed by and interpreted in accordance with
            the laws of India.
          </p>

          {/* CONTACT */}
          <div className="legal-contact-section">
            <h2>16. Contact Information</h2>

            <div className="legal-contact-grid">
              <a href="mailto:info@manovate.co.in" className="legal-contact-card">
                <FaEnvelope />
                <h4>Business Email</h4>
                <p>info@manovate.co.in</p>
              </a>

              <a href="https://manovate.co.in" className="legal-contact-card">
                <FaGlobe />
                <h4>Website</h4>
                <p>manovate.co.in</p>
              </a>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}
