import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicAPI from "../publicApi";
import "./Careers.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FullPageLoader from "./FullPageLoader";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
 
  useEffect(() => {
    PublicAPI.get("/api/careers/jobs/")
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          setJobs(data);
        } else if (Array.isArray(data.results)) {
          setJobs(data.results);
        } else {
          setJobs([]);
        }
      })
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
  }, []);

  // 🔥 PROFESSIONAL LOADER
  if (loading) {
    return (
      <>
        <Navbar />
        <FullPageLoader text="Fetching career opportunities…" />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="careers-section">
        <div className="careers-header">
          <h1>Careers at Manovate</h1>
          <p>Build the future of technology and business with us</p>
        </div>

        <div className="careers-list">

  {jobs.length === 0 ? (
  <div className="careers-empty-animated">

    {/* Animated signal */}
    <div className="empty-wave">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <h2>No open positions right now</h2>
    <p>
      We’re not hiring at the moment.<br />
      New opportunities will be posted here soon.
    </p>

  </div>
) : (
  jobs.map((job) => (
    <div className="career-card" key={job.id}>
      <div className="career-content">
        <h2>{job.title}</h2>
        <div className="underline"></div>
        <p>{job.short_description}</p>

        <button
          className="career-btn"
          onClick={() => navigate(`/careers/${job.id}`)}
        >
          Read More →
        </button>
      </div>
    </div>
  ))
)}


</div>

      </section>

      <Footer />
    </>
  );
};

export default Careers;