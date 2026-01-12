import "./vendor.css";

// import your logos here
import auditify from "../assets/vendors/auditify.png";
import axiselevate from "../assets/vendors/axiselevate.png";
import cma_cgm from "../assets/vendors/cma_cgm.jpg";
import crossml from "../assets/vendors/crossml.svg";
import logiqtrove from "../assets/vendors/logiqtrove.png";
import nithminds from "../assets/vendors/nithminds.jpg";
import quantiqueminds from "../assets/vendors/quantiqueminds.svg";
import testriq from "../assets/vendors/testriq.png";
import trootech from "../assets/vendors/trootech.png";
import vibevision from "../assets/vendors/vibevision.webp";
import zenithblox from "../assets/vendors/zenithblox.jpg";
// add more as needed

const vendors = [
  auditify,
  axiselevate,
  cma_cgm,
  crossml,
  logiqtrove,
  nithminds,
  quantiqueminds,
  testriq,
  trootech,
  vibevision,
  zenithblox,
];

export default function VendorSection() {
  return (
    <section className="vendor-section">
      <p className="vendor-eyebrow">Trusted Vendors</p>

      <h2 className="vendor-heading">
        Collaborations That Drive Innovation
      </h2>

      <div className="vendor-grid">
        {vendors.map((logo, index) => (
          <div className="vendor-card" key={index}>
            <img src={logo} alt="Vendor logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
