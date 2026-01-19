import React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import FreeConsultation from "./components/free-consultation";
import RequestDemo from "./components/request-demo";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
/*import Navbar from "./components/Navbar";*/
import About from "./components/About";
import "./index.css";
import AiSolutions from "./components/AiSolutions";
import LegacyModernization from "./components/LegacyModernization";
import Cybersecurity from "./components/Cybersecurity";
import DataAnalytics from "./components/DataAnalytics";
import ProductEngineering from "./components/ProductEngineering";
import CloudTransformation from "./components/CloudTransformation";
import Careers from "./components/Careers";
import CareerJobDetail from "./components/CareerJobDetail";
import CookieBanner from "./components/CookieBanner";
import HRMS from "./components/products/HRMS";
import CRM from "./components/products/CRM";
import Messaging from "./components/products/Messaging";
import FoodDelivery from "./components/products/FoodDelivery";
import Contact from "./components/Contact";
import AdminApplications from "./components/AdminApplications";
import AdminHome from "./components/AdminHome";
import AdminJobDetail from "./components/AdminJobDetail";
import AdminJobs from "./components/AdminJobs";
import ITServices from "./components/ITServices";
import NonITServices from "./components/NonITServices";
import ITServiceCategory from "./components/ITServiceCategory";
import ITServiceDetail from "./components/ITServiceDetail";
import NonITServiceCategory from "./components/NonITServiceCategory";
import NonITServiceDetail from "./components/NonITServiceDetail";
import ScrollToTop from "./components/scrolltop";
import Legal from "./components/Legal";
import PrivacyPolicy from "./components/PrivacyPolicy";
/*IT Serices path*/
import AndroidAppDevelopment from "./components/itservices/android-app-development";
import MachineLearningSolutions from "./components/itservices/ai-ml-solutions";
import WebApplicationServices from "./components/itservices/web-application-development";
import CustomEnterpriseSoftware from "./components/itservices/custom-software";
import DataProtectionCompliance from "./components/itservices/data-protection";
import InfrastructureManagement from "./components/itservices/infrastructure-management";
import InventoryAssetManagement from "./components/itservices/inventory-asset-management";
import CyberSecurityAudit from "./components/itservices/cyber-security-audit";
import ThreatMonitoringServices from "./components/itservices/threat-monitoring";
import UnifiedCommunicationsSolutions from "./components/itservices/unified-communications";
import ITStaffAugmentationServices from "./components/itservices/it-staff-augmentation";
import AIotSolutions from "./components/itservices/aiot-solutions";
import AIChatbotServices from "./components/itservices/chatbot-development";
import CloudMigrationServices from "./components/itservices/cloud-migration";
import ComputerVisionServices from "./components/itservices/computer-vision";
import CRMServices from "./components/itservices/crm-services";
import ERPServices from "./components/itservices/erp-services";
import HRMSServices from "./components/itservices/hrms-services";
import CrossPlatformAppDevelopment from "./components/itservices/cross-platform-app";
import AIRecommendationSystems from "./components/itservices/recommendation-engine";
import SaaSDevelopment from "./components/itservices/saas-application";
import WebDevelopment from "./components/itservices/web-design -development";
import WorkflowAutomation from "./components/itservices/workflow-automation";
import ApplicationIntegration from "./components/itservices/application-integration";
import CloudArchitectureSetup from "./components/itservices/cloud-architecture-setup";
import IOSAppDevelopment from "./components/itservices/ios-development";

function App() {
  return (

      <BrowserRouter>
      <SplashScreen>
        <CookieBanner />
        <ScrollToTop />
      <div className="page-wrapper"></div>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/request-demo" element={<RequestDemo />} />
<Route path="/about" element={<About />} />
<Route path="/solutions/ai-solutions" element={<AiSolutions />} />
<Route path="/solutions/legacy-modernization" element={<LegacyModernization />} />
<Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
<Route path="/solutions/data-analytics" element={<DataAnalytics />} />
<Route path="/solutions/product-engineering" element={<ProductEngineering />} />
<Route path="/solutions/cloud-transformation" element={<CloudTransformation />} />
<Route path="/careers" element={<Careers />} />
 
<Route path="/products/hrms" element={<HRMS />} />
        <Route path="/products/crm" element={<CRM />} />
        <Route path="/products/messaging" element={<Messaging />} />
        <Route path="/products/food-delivery" element={<FoodDelivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers/:id" element ={<CareerJobDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminHome />} />
              <Route path="jobs" element={<AdminJobs />} />
              <Route path="jobs/:id" element={<AdminJobDetail />} />
              <Route path="applications" element={<AdminApplications />} />
             </Route>

             <Route path="/itservices" element={<ITServices />} />

<Route
  path="/itservices/android-app-development"
  element={<AndroidAppDevelopment />}
/>
<Route
  path="/itservices/ai-ml-solutions"
  element={<MachineLearningSolutions />}
/>
<Route
  path="/itservices/web-application-development"
  element={<WebApplicationServices />}
/>
<Route
  path="/itservices/custom-software"
  element={<CustomEnterpriseSoftware />}
/>
<Route
  path="/itservices/data-protection"
  element={<DataProtectionCompliance />}
/>
<Route
  path="/itservices/infrastructure-management"
  element={<InfrastructureManagement />}
/>
<Route
  path="/itservices/inventory-asset-management"
  element={<InventoryAssetManagement />}
/>
<Route
  path="/itservices/cyber-security-audit"
  element={<CyberSecurityAudit />}
/>
<Route
  path="/itservices/threat-monitoring"
  element={<ThreatMonitoringServices />}
/>
<Route
  path="/itservices/unified-communications"
  element={<UnifiedCommunicationsSolutions />}
/>
<Route
  path="/itservices/it-staff-augmentation"
  element={<ITStaffAugmentationServices />}
/>
<Route
  path="/itservices/aiot-solutions"
  element={<AIotSolutions />}
/>
<Route
  path="/itservices/chatbot-development"
  element={<AIChatbotServices />}
/>
<Route
  path="/itservices/cloud-migration"
  element={<CloudMigrationServices />}
/>
<Route
  path="/itservices/computer-vision"
  element={<ComputerVisionServices />}
/>
<Route
  path="/itservices/crm-services"
  element={<CRMServices />}
/>
<Route
  path="/itservices/erp-services"
  element={<ERPServices />}
/>
<Route
  path="/itservices/hrms-services"
  element={<HRMSServices />}
/>
<Route
  path="/itservices/cross-platform-app"
  element={<CrossPlatformAppDevelopment />}
/>
<Route
  path="/itservices/recommendation-engine"
  element={<AIRecommendationSystems />}
/>
<Route
  path="/itservices/saas-application"
  element={<SaaSDevelopment />}
/>
<Route
  path="/itservices/web-design-development"
  element={<WebDevelopment />}
/>
<Route
  path="/itservices/workflow-automation"
  element={<WorkflowAutomation />}
/>
<Route
  path="/itservices/application-integration"
  element={<ApplicationIntegration />}
/>
<Route
  path="/itservices/cloud-architecture-setup"
  element={<CloudArchitectureSetup />}
/>
<Route
  path="/itservices/ios-development"
  element={<IOSAppDevelopment />}
/>

<Route path="/itservices/:categoryId" element={<ITServiceCategory />} />
<Route path="/itservices/:categoryId/:serviceId" element={<ITServiceDetail />} />
<Route path="/nonitservices" element={<NonITServices />} />
<Route path="/nonitservices/:categoryId" element={<NonITServiceCategory />} />
<Route path="/nonitservices/:categoryId/:serviceId" element={<NonITServiceDetail />} />
<Route path="/legal" element={<Legal />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
        
        </SplashScreen>
      </BrowserRouter>
    
  );
}

export default App;