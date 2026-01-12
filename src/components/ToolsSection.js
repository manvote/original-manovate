// Font Awesome
import {
  FaGithub,
  FaDocker,
  FaAws,
  FaJenkins,
  FaWordpress,
  FaBitbucket,
  FaMicrosoft
} from "react-icons/fa";
import "./Tools.css";
// Simple Icons
import {
  SiFigma,
  SiNetlify,
  SiRender,
  SiPostman,
  SiSelenium,
  SiDatadog,
  SiSemrush,
  SiWix,
  SiWeb3Dotjs,
  SiZoho
} from "react-icons/si";
import neondb from "../assets/tools/neondb.png";
import zohomail from "../assets/tools/zohomail.svg";
import zohocliq from "../assets/tools/zohocliq.svg";
import workplace from "../assets/tools/workplace.svg";

const tools = [
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaJenkins, color: "#D24939" },
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: SiNetlify, color: "#00C7B7" },
  { Icon: SiRender, color: "#000000" },
  { Icon: SiZoho, color: "#E42527" },
  { Icon: FaBitbucket, color: "#0052CC" },
  { Icon: FaMicrosoft, color: "#0078D4" },
   
 
  { Icon: SiSemrush, color: "#FF642D" },
  { Icon: SiWix, color: "#0C6EFC" },
  { Icon: FaWordpress, color: "#21759B" },
  { Icon: SiWeb3Dotjs, color: "#F16822" },
  { Icon: SiPostman, color: "#FF6C37" },
  { Icon: SiSelenium, color: "#43B02A" },
  { Icon: SiDatadog, color: "#632CA6" },
  { Icon: () => <img src={neondb} alt="NeonDB" style={{ width: '50px', height: '50px' }} /> },
  { Icon: () => <img src={zohomail} alt="Zoho Mail" style={{ width: '90px', height: '90px' }} />},
  { Icon: () => <img src={zohocliq} alt="Zoho Cliq" style={{ width: '90px', height: '90px' }} /> },
  { Icon: () => <img src={workplace} alt="Workplace" style={{ width: '150px', height: '150px' }} /> },
];

export default function ToolsSection() {
  return (
    <section className="tools-section">
      <div className="tools-header">
  <p className="tools-eyebrow">Our Digital Capabilities</p>

  <h2 className="tools-heading">
    Platforms & tools we trust
    <br />
    to build world-class solutions.
  </h2>
</div>



      <div className="carousel-wrapper">
  <div className="carousel">
    <div className="track">
      {[...tools, ...tools].map(({ Icon, color }, index) => (
        <div className="tool-icon" key={index}>
          <Icon style={{ color }} />
        </div>
      ))}
    </div>
  </div>

  <div className="fade left" />
  <div className="fade right" />
</div>

    </section>
  );
}