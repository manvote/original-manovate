import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FreeConsultation.css";
import {
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

export default function FreeConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const finalService = service === "Other" ? otherService : service;

    try {
      const res = await fetch("http://127.0.0.1:8000/contact-service/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: finalService || "Free Consultation",
          ...form,
        }),
      });

      if (!res.ok) throw new Error();

      setSubmitted(true);
      setStatus("success");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="consult-page split-layout">

      {/* LEFT CONTENT */}
      <div className="consult-left">

        <span className="consult-eyebrow">WHY MANOVATE</span>

        <h1 className="consult-heading">
          Trusted Digital Engineering <br />
          & Consulting Partner
        </h1>

        <p className="consult-intro">
          We help organizations design, build, and scale secure digital platforms
          using modern architectures, AI-driven automation, and enterprise-grade
          engineering practices.
        </p>

        <div className="consult-highlights">
          <div className="highlight-item">
            <FaCheckCircle /> Enterprise-grade architecture & scalability
          </div>
          <div className="highlight-item">
            <FaCheckCircle /> AI-driven automation & modern technology stacks
          </div>
          <div className="highlight-item">
            <FaCheckCircle /> Proven delivery model & long-term support
          </div>
        </div>

        {/* COMPANY INFO */}
        <div className="company-info-wrapper">

          <div className="company-info">
            <div
              className="info-row clickable"
              onClick={() => window.open("https://manovate.co.in", "_blank")}
            >
              <FaGlobe className="info-icon" />
              <span>https://manovate.co.in</span>
            </div>

            <div
              className="info-row clickable"
              onClick={() =>
                (window.location.href = "mailto:info@manovate.co.in")
              }
            >
              <FaEnvelope className="info-icon" />
              <span>info@manovate.co.in</span>
            </div>

            <div className="info-row">
              <FaMapMarkerAlt className="info-icon" />
              <span>
                Prince Info City | 286/1, Rajiv Gandhi Salai,
                <br />
                Nehru Nagar, Perungudi, Chennai,
                <br />
                Tamil Nadu – 600096
              </span>
            </div>
          </div>

          <div className="info-divider"></div>

          <a href="/" className="back-home">
            <FaArrowLeft /> Back to Home
          </a>

        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="consult-right">
        <div className="consult-card">

          {!submitted ? (
            <>
              <span className="consult-tag">FREE CONSULTATION</span>

              <h2>Let’s Talk About Your Project</h2>

              <p className="consult-sub">
                Share your requirements with us. Our experts will contact you
                within <strong>24 hours</strong>.
              </p>

              <form className="consult-form" onSubmit={handleSubmit}>
                <input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} required />
                <input name="company" placeholder="Company Name (Optional)" value={form.company} onChange={handleChange} />

                <select
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (e.target.value !== "Other") setOtherService("");
                  }}
                  required
                >
                  <option value="">Service Interested In *</option>
                  <option>Website & E-Commerce Development</option>
                  <option>AI, Machine Learning & Automation</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions & SaaS Development</option>
                  <option>Custom Software Development</option>
                  <option>Other</option>
                </select>

                {service === "Other" && (
                  <input
                    placeholder="Please specify the service *"
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    required
                  />
                )}

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Briefly describe your requirement"
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" className="consult-btn">
                  {status === "sending"
                    ? "Sending..."
                    : "Request Free Consultation →"}
                </button>

                {status === "error" && (
                  <p className="form-error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </>
          ) : (
            <div className="consult-success">
              <h2>Thank you!</h2>
              <p>
                Your request has been received. Our team will contact you within
                <strong> 24 hours</strong>.
              </p>
              <p className="redirect-note">Redirecting to Home…</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}