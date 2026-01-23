import React from "react";
import "./Legal.css";
import { FaEnvelope, FaArrowLeft, FaFileAlt, FaCalendarAlt, FaBuilding, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TermsAndConditions() {
  return (
    <>
    <Navbar/>
    <Helmet>
        <title>Terms & Conditions | Manovate Technologies</title>
        <meta
          name="description"
          content="Read the Terms & Conditions of Manovate Technologies. Understand the rules and guidelines for using our website and services."
        />  
        <meta
          name="keywords"
          content="Terms and Conditions, Manovate Technologies, Legal, Website Terms, Service Agreement"
        />
      </Helmet>
      {/* ================= HERO ================= */}
      <section className="legal-hero">
        <Link to="/" className="legal-back-home">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="legal-hero-inner">
          <FaFileAlt className="legal-hero-icon" />
          <h1>Terms & Conditions</h1>
          <p className="legal-hero-sub">
            Manovate Technologies – Terms & Conditions
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

          <h2>1. Introduction</h2>
          <p>
            These Terms & Conditions (“Terms”) govern the access to and use of the
            website, products, platforms, and services provided by
            <strong> Manovate Technologies</strong> (“Company”, “we”, “our”, or “us”).
          </p>
          <p>
            By accessing our website or engaging our services, you acknowledge
            that you have read, understood, and agree to be legally bound by
            these Terms. If you do not agree, you must discontinue use.
          </p>

          <h2>2. About Manovate Technologies</h2>
          <p>
            Manovate Technologies is a professional Information Technology (IT)
            and Non-Information Technology (Non-IT) services company delivering
            technology solutions, consulting, digital transformation, and
            business support services across India and international markets.
          </p>
          <p>The Company operates as a service-based organization and does not offer
consumer retail products unless expressly stated.
</p>

          <h2>3. Acceptance of Terms</h2>
          <p>By accessing this website, submitting inquiries, signing contracts, or availing
            services, you confirm that:</p>
          <ul className="legal-arrow-list">
            <li>You are legally competent to enter into a binding agreement</li>
            <li>You accept these Terms without limitation or qualification</li>
            <li>You agree to comply with all applicable laws and regulations</li>
          </ul>
          <p>If you are using services on behalf of an organization, you confirm that you
have authority to bind that organization.</p>

          <h2>4. Scope of Services</h2>
          <p>Manovate Technologies provides the following services:</p>
          <p><strong>IT Services</strong></p>
          <ul className="legal-arrow-list">
            <li>Website and Web Application Development</li>
            <li>Mobile Application Development</li>
            <li>Artificial Intelligence and Automation Solutions</li>
            <li>Custom Enterprise Software Development</li>
            <li>Cloud and Infrastructure Services</li>
            <li>Cybersecurity Solutions</li>
          </ul>

          <p><strong>Non-IT Services</strong></p>
          <ul className="legal-arrow-list">
            <li>Business and Strategy Consulting</li>
            <li>Branding and Creative Services</li>
            <li>Accounting and Financial Operations Support</li>
            <li>Digital Marketing Services</li>
          </ul>
          <p>All services are delivered strictly as per <strong>written agreements, proposals,
contracts, or Statements of Work</strong>. Website content is descriptive only and
does not constitute a binding offer.</p>

          <h2>5. Website Use</h2>
          <p>The website is intended for business and informational purposes only.
Users agree:
          </p>
          <ul className="legal-arrow-list">
            <li>Not misuse or interfere with website functionality</li>
            <li>Not attempt unauthorized access to systems or data</li>
            <li>Not upload malicious software or harmful content</li>
          </ul>
          <p>Unauthorized use may result in legal action.</p>

          <h2>6. Intellectual Property Rights</h2>
          <p>
            All intellectual property including software code, designs,
            documentation, trademarks, and brand assets remain the exclusive
            property of Manovate Technologies.
          </p>

          <h2>7. Service Delivery & Disclaimer</h2>
          <p>Services are delivered based on agreed scope, timelines, and client inputs.
Manovate Technologies does <strong>not guarantee</strong>:</p>
          <ul className="legal-arrow-list">
            <li>No guarantee of business profits or revenue</li>
            <li>No guarantee of SEO rankings or lead generation</li>
            <li>No cybersecurity immunity from all threats</li>
            <li>No AI prediction accuracy guarantee</li>
          </ul>
          <p>All services are provided on a <strong>best-effort and professional basis</strong>.</p>


          <h2>8. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul className="legal-arrow-list">
            <li>Provide accurate and complete information</li>
            <li>Grant timely approvals and feedback</li>
            <li>Ensure lawful use of deliverables</li>
            <li>Maintain confidentiality</li>
            <li>Fulfill payment obligations on time</li>
          </ul>
          <p>Delays caused due to client dependency may impact project timelines and costs.</p>

          <h2>9. Payments & Commercial Terms</h2>
          <p>All fees, payment schedules, taxes, invoicing, and commercial terms are
governed by written agreements or invoices.
Failure to make timely payments may result in:</p>
          <ul className="legal-arrow-list">
            <li>Service suspension</li>
            <li>Termination of engagement</li>
            <li>Withholding of deliverables</li>
          </ul>
          <p>All payments are non-refundable unless explicitly stated otherwise in writing.</p>

          <h2>10. Third-Party Services</h2>
          <p>
            Some services may involve third-party platforms, tools, or cloud providers.
Manovate Technologies:
          </p>
          <ul className="legal-arrow-list">
            <li>Does not control third-party services</li>
            <li>Is not responsible for third-party outages, policy changes, or data
handling</li>
            <li>Disclaims liability arising from third-party dependencies</li>
          </ul>

          <h2>11. Confidentiality</h2>
          <p>
            Both parties agree to maintain strict confidentiality of:
          </p>
          <ul className="legal-arrow-list">
            <li>Business information</li>
            <li>Technical documentation</li>
            <li>Pricing, strategies, and operational data</li>
          </ul>
          <p>Confidentiality obligations apply during and after the engagement, subject to
applicable Non-Disclosure Agreements.</p>

          <h2>12. Limitation of Liability</h2>
          <p>
           To the maximum extent permitted by law, Manovate Technologies shall not be
liable for:
          </p>
          <ul className="legal-arrow-list">
            <li>Indirect or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>System downtime or service interruptions</li>
          </ul>
          <p>Total liability, if any, shall not exceed the fees paid for the specific service.</p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Manovate Technologies, its
directors, employees, and partners from any claims, losses, or damages arising
from:     </p>
          <ul className="legal-arrow-list">
            <li>Misuse of services</li>
            <li>Violation of laws</li>
            <li>Breach of these Terms</li>
          </ul>

          <h2>14. Termination</h2>
          <p>
            Either party may terminate services as per contractual terms.
Upon termination:
          </p>
          <ul className="legal-arrow-list">
            <li>Outstanding dues must be settled</li>
            <li>Access to services may be revoked</li>
            <li>Intellectual property rights remain protected</li>
          </ul>

          <h2>15. Privacy & Data Protection</h2>
          <p>
            Use of the website and services is governed by our Privacy Policy, which
outlines how personal and business data is collected, processed, stored, and
protected in accordance with applicable laws.
          </p>

          <h2>16. Changes to Terms</h2>
          <p>
            Manovate Technologies reserves the right to modify these Terms at any time.
Continued use of the website or services constitutes acceptance of updated
Terms.</p>

          <h2>17. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by the laws of India, and courts located in
Chennai, Tamil Nadu, shall have exclusive jurisdiction over any disputes.
          </p>

          {/* ================= CONTACT (UNCHANGED DESIGN) ================= */}
          <div className="legal-contact-section">
            <h2>17. Contact</h2>
            <p className="legal-contact-sub">
              For any queries regarding these Terms & Conditions, please contact:
            </p>

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