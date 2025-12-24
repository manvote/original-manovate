import "./Legal.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Legal() {
  return (
    <>
    <Navbar />
    <div className="legal-bg">
    <div className="legal-page">
      <h1>Legal Information</h1>
      <p className="legal-updated">Last updated: December 2025</p>

      {/* ================= TERMS ================= */}
      <section id="terms">
        <h2>Terms & Conditions</h2>

        <p>
          These Terms and Conditions govern your access to and use of the website
          and services provided by <strong>Manovate Technologies</strong>.
          By accessing this website, you acknowledge that you have read,
          understood, and agree to be bound by these terms.
        </p>

        <h3>1. Eligibility</h3>
        <p>
          By using this website, you confirm that you are at least 18 years of
          age and legally capable of entering into binding agreements.
        </p>

        <h3>2. Use of Services</h3>
        <p>
          You agree to use our services only for lawful purposes and in
          compliance with all applicable local, national, and international
          laws and regulations.
        </p>

        <h3>3. Intellectual Property Rights</h3>
        <p>
          All content on this website, including but not limited to text,
          graphics, logos, software, and design elements, is the exclusive
          property of Manovate Technologies and is protected under applicable
          intellectual property laws.
        </p>

        <h3>4. Confidentiality</h3>
        <p>
          Any information shared with us during consultations, inquiries, or
          project discussions shall be treated as confidential unless otherwise
          agreed in writing.
        </p>

        <h3>5. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content, privacy practices, or availability of
          such external sites.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, Manovate Technologies shall
          not be liable for any indirect, incidental, special, or consequential
          damages arising from your use of this website or services.
        </p>

        <h3>7. Termination</h3>
        <p>
          We reserve the right to suspend or terminate access to our website or
          services at our discretion, without prior notice, for any violation
          of these terms.
        </p>

        <h3>8. Governing Law</h3>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws applicable in the jurisdiction where Manovate Technologies
          operates.
        </p>
      </section>

      {/* ================= PRIVACY ================= */}
      <section id="privacy">
        <h2>Privacy Policy</h2>

        <p>
          Manovate Technologies is committed to protecting your privacy and
          ensuring the security of your personal data. This Privacy Policy
          explains how we collect, use, store, and protect your information.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address,
          phone number, company name, and project details when you submit forms
          or communicate with us.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          Your information is used to respond to inquiries, provide services,
          improve our offerings, communicate updates, and enhance user
          experience.
        </p>

        <h3>3. Data Sharing</h3>
        <p>
          We do not sell or rent your personal information. Data may only be
          shared with trusted partners when required to deliver services or
          comply with legal obligations.
        </p>

        <h3>4. Cookies & Tracking</h3>
        <p>
          Cookies help us analyze website traffic and improve performance. You
          can manage cookie preferences at any time through our cookie
          management tools.
        </p>

        <h3>5. Data Security</h3>
        <p>
          We implement industry-standard security measures to protect your
          information against unauthorized access, alteration, or disclosure.
        </p>

        <h3>6. Data Retention</h3>
        <p>
          Personal data is retained only for as long as necessary to fulfill
          the purposes outlined in this policy or to comply with legal
          requirements.
        </p>

        <h3>7. Your Rights</h3>
        <p>
          You have the right to access, update, or request deletion of your
          personal data, subject to applicable laws and regulations.
        </p>

        <h3>8. Policy Updates</h3>
        <p>
          This Privacy Policy may be updated periodically. Continued use of the
          website indicates acceptance of the updated policy.
        </p>
      </section>
    </div>
    </div>
    <Footer />
    </>
  );
}
