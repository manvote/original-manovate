import "./vendor.css";

// import your logos here
import auditify from "../assets/vendors/auditify.png";
import axiselevate from "../assets/vendors/axiselevate.jpg";
import cma_cgm from "../assets/vendors/cmacgm.svg";
import crossml from "../assets/vendors/crossml.svg";
import logiqtrove from "../assets/vendors/logiqtrove.png";
import nithminds from "../assets/vendors/nithminds.jpg";
import quantiqueminds from "../assets/vendors/quantiqueminds.svg";
import testriq from "../assets/vendors/testriq.webp";
import trootech from "../assets/vendors/trootech.svg";
import vibevision from "../assets/vendors/vibevision.png";
import zenithblox from "../assets/vendors/zenithblox.svg";
import mindwebsolutions from "../assets/vendors/mindwebsolutions.webp";
import wildpitch from "../assets/vendors/wildpitch.jpg";
import letmestudy from "../assets/vendors/letmestudy.png";
import kevinandary from "../assets/vendors/kevinandary.png";
import softservehub from "../assets/vendors/softservehub.png";
// add more as needed

const vendors = [
  { src: auditify, bg: "dark" },
  { src: axiselevate },
  { src: cma_cgm },
  { src: crossml },
  { src: logiqtrove },
  { src: nithminds },
  { src: quantiqueminds },
  { src: testriq },
  { src: trootech },
  { src: vibevision },
  { src: zenithblox, bg: "dark" },
  { src: mindwebsolutions, bg: "dark" },
  { src:wildpitch },
  { src:kevinandary },
  { src:letmestudy },
  { src:softservehub },
];


export default function VendorSection() {
  return (
    <section className="vendor-section">
      <p className="vendor-eyebrow">Trusted Vendors</p>

      <h2 className="vendor-heading">
        Collaborations That Drive Innovation
      </h2>

      <div className="vendor-grid">
  {vendors.map((vendor, index) => (
    <div
      key={index}
      className={`vendor-logo ${vendor.bg === "dark" ? "logo-dark" : ""}`}
    >
      <img src={vendor.src} alt="Vendor logo" />
    </div>
  ))}
</div>

    </section>
  );
}
