import React from "react";
import "./About.css";
import ceo from "../assets/team/ceo.webp";
import manager1 from "../assets/team/manager.webp";
import manager2 from "../assets/team/manager1.webp";
import robotImg from "../assets/ai-waving-robot.webp"
import Footer from "./Footer";
import Navbar from "./Navbar";
import ClientGrowthWithFilter from "./charts/ClientGrowthWithFilter";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-wrapper">

      {/* HERO */}
   {/* HERO */}
<section className="about-hero">
  <div className="about-hero-layout">

    {/* LEFT CONTENT */}
    <div className="about-hero-inner">
      <h1>Engineering Digital Excellence</h1>

      <p>
        Manovate Technologies is a technology consulting and engineering
        organization helping businesses design, build, and scale
        secure, high-performance, and future-ready digital systems.
      </p>

      <p>
        We partner with startups, growing enterprises, and established
        organizations to transform complex business challenges into
        intelligent technology solutions.
      </p>

      <p>
        From enterprise platforms and cloud-native applications to
        AI-powered automation and data-driven systems, we focus on
        building technology that performs under scale.
      </p>
    </div>

    {/* RIGHT – ROBOT */}
    <div className="about-hero-robot">
      <img src={robotImg} alt="AI Robot" />
    </div>

  </div>
</section>



      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Manovate Technologies partners with enterprises, startups, and
          growing organizations to design, engineer, and modernize
          mission-critical digital platforms.
        </p>
        <p>
          Our expertise spans custom software engineering, cloud platforms,
          enterprise systems, AI-driven automation, and secure digital
          transformation initiatives. We focus on building systems that
          scale reliably, perform consistently, and evolve with business needs.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          We deliver enterprise-grade technology solutions across web
          platforms, mobile systems, cloud infrastructure, data engineering,
          artificial intelligence, and cybersecurity-ready architectures.
        </p>
        <p>
          From modernizing legacy environments to building cloud-native
          platforms, Manovate ensures every solution is engineered with
          performance, security, and long-term sustainability at its core.
        </p>
      </section>

    <div className="analytics-section">

  <div className="analytics-heading">
    
  </div>

  <ClientGrowthWithFilter />

</div>

 




      {/* LEADERSHIP */}
  
{/* LEADERSHIP */}
<section className="about-team">
  <h2>Leadership Team</h2>

  <div className="team-grid">

    {/* FOUNDER */}
    <div className="team-card">
      <div className="team-photo">
        <img src={ceo} alt="Syed Kareem Mynudeen - Founder & Director" />
      </div>

      <h4>Syed Kareem Mynudeen</h4>
      <span>Founder & Director</span>

      <p>
  Responsible for shaping the company’s long-term vision, strategic direction,
  and enterprise growth initiatives. The role focuses on aligning technology
  strategy with business objectives, enabling organizations to build secure,
  scalable, and future-ready digital platforms. With deep experience in digital
  engineering and technology consulting, leadership emphasizes engineering
  excellence, innovation, and sustainable delivery models while partnering with
  global clients to drive measurable business outcomes.
</p>


      <div className="team-socials">
        <a
          href="https://www.linkedin.com/in/syed-kareem-mynudeen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:syedkareemmynudeen@manovate.co.in"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
    href="https://syedkareemmynudeen.page.gd/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Portfolio Website"
  >
    <FaGlobe />
  </a>
      </div>
    </div>

    {/* MANAGER */}
    <div className="team-card">
      <div className="team-photo">
        <img src={manager1} alt="Harish N - Business Operations & Client Strategy" />
      </div>

      <h4>Harish N</h4>
      <span>Manager – Business Operations & Client Strategy</span>

      <p>
  Responsible for leading business operations and client strategy across
  enterprise engagements. The role focuses on aligning delivery execution with
  client objectives while maintaining operational efficiency, governance, and
  quality standards. Through strong coordination with cross-functional teams,
  this position ensures disciplined execution, transparent delivery processes,
  and consistent outcomes that support long-term partnerships and client success.
</p>


      <div className="team-socials">
        <a
          href="https://www.linkedin.com/in/harishnandhakumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:harishnandakuamr@manovate.co.in"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
    href="https://harishn.rf.gd/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Portfolio Website"
  >
    <FaGlobe />
  </a>
      </div>
    </div>

    {/* MANAGER */}
    <div className="team-card">
      <div className="team-photo">
        <img src={manager2} alt="Santhosh G - Business Operations & Client Strategy" />
      </div>

      <h4>Santhosh G</h4>
      <span>Manager – Business Operations & Client Strategy</span>

     <p>
  Responsible for leading business operations and client strategy across
  enterprise engagements. The role focuses on aligning delivery execution with
  client objectives while maintaining operational efficiency, governance, and
  quality standards. Through strong coordination with cross-functional teams,
  this position ensures disciplined execution, transparent delivery processes,
  and consistent outcomes that support long-term partnerships and client success.
</p>


      <div className="team-socials">
        <a
          href="https://www.linkedin.com/in/santhosh155/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:santhoshsandy@manovate.co.in"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
    href="https://santhosh.page.gd/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Portfolio Website"
  >
    <FaGlobe />
  </a>
      </div>
    </div>

  </div>
</section>


    </div>
    <Footer />
    </>
  );
};

export default About;