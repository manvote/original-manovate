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
import android from "../assets/tools/android.png";
import applexcode from "../assets/tools/applexcode.jpg";
import canva from "../assets/tools/canva.svg";
import cypress from "../assets/tools/cypress.svg";
import jira from "../assets/tools/jira.jpg";
import notion from "../assets/tools/notion.png";
import playwright from "../assets/tools/playwright.png";
import slack from "../assets/tools/slack.png";
import tally from "../assets/tools/tally.png";

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
  { Icon: () => <img src={android} alt="android" style={{ width: '80px', height: '80px' }} /> },
  { Icon: () => <img src={applexcode} alt="applexcode" style={{ width: '100px', height: '100px' }} /> },
  { Icon: () => <img src={canva} alt="canva" style={{ width: '150px', height: '150px' }} /> },
  { Icon: () => <img src={cypress} alt="cypress" style={{ width: '150px', height: '150px' }} /> },
  { Icon: () => <img src={jira} alt="jira" style={{ width: '150px', height: '80px' }} /> },
  { Icon: () => <img src={notion} alt="notion" style={{ width: '150px', height: '150px' }} /> },
  { Icon: () => <img src={slack} alt="slack" style={{ width: '150px', height: '100px' }} /> },
  { Icon: () => <img src={tally} alt="tally" style={{ width: '150px', height: '150px' }} /> },
  { Icon: () => <img src={playwright} alt="playwright" style={{ width: '150px', height: '150px' }} /> },
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



      <div className="tools-carousel-wrapper">
  <div className="carousel">
    <div className="track">
      {[...tools, ...tools].map(({ Icon, color }, index) => (
        <div className="tool-icon" key={index}>
          <Icon style={{ color }} />
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}