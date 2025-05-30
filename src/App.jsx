import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react"
import SEOTitle from "./Components/GeneralComponents/SEOTitle";
import Home from "./Pages/home";
import About from "./Pages/about";
import Works from "./Pages/works";
import Crystalbricks from "./Pages/ProjectDetails/crystalbricks";
import News from "./Pages/latest-news";
import NewsDetails from "./Pages/future-of-software-development";
import AItransformation from "./Pages/ai-business-transformation";
import BuildingScalableNetworkInfrastructure from "./Pages/building-scalable-network-infrastructure";
import ContactUs from "./Pages/contactus";
import ScrollToTop from "./Components/GeneralComponents/ScrollToTop"
import SoftwareDevelopment from "./Pages/ServiceDetails/software-development";
import BackupAndDisasterRecovery from "./Pages/ServiceDetails/backup-and-disaster-recovery";
import CloudServices from "./Pages/ServiceDetails/cloud-services";
import CommunicationAndCollaborationTools from "./Pages/ServiceDetails/communication-and-collaboration-tools";
import CybersecurityServices from "./Pages/ServiceDetails/cybersecurity-services";
import DataServices from "./Pages/ServiceDetails/data-services";
import HardwareAndSoftwareProcurement from "./Pages/ServiceDetails/hardware-and-software-procurement";
import InfrastructureServices from "./Pages/ServiceDetails/infrastructure-services";
import ITConsultingAndStrategy from "./Pages/ServiceDetails/it-consulting-and-strategy";
import ITSupportAndHelpdesk from "./Pages/ServiceDetails/it-support-and-helpdesk";
import ManagedITServices from "./Pages/ServiceDetails/managed-it-services";
import Afriwok from "./Pages/ProjectDetails/afriwok";
import UnizikAlumni from "./Pages/ProjectDetails/unizik-alumni";
import UnizikPortal from "./Pages/ProjectDetails/unizik-portal";
import Infrastructure from "./Pages/ProjectDetails/infrastructure-service";
import DynamicNewsDetails from "./Pages/news-details";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<><SEOTitle title="TurboFlux Network Solutions" /><Home /></>} />
          <Route path="/about" element={<><SEOTitle title="navbar.about" /><About /></>} />
          <Route path="/works" element={<><SEOTitle title="navbar.works" /><Works /></>} />
          <Route path="/latest-news" element={<><SEOTitle title="navbar.news" /><News /></>} />
          <Route path="/news/future-of-software-development" element={<><SEOTitle title="Future of Software Development" /><NewsDetails /></>} />
          <Route path="/news/ai-business-transformation" element={<><SEOTitle title="AI Business Transformation" /><AItransformation /></>} />
          <Route path="/news/building-scalable-network-infrastructure" element={<><SEOTitle title="Building Scalable Network Infrastructure" /><BuildingScalableNetworkInfrastructure /></>} />
          {/* Add dynamic route for news details using ID */}
          <Route path="/news-details/:id" element={<><SEOTitle title="News Details" /><DynamicNewsDetails /></>} />
          <Route path="/works/crystalbricks" element={<><SEOTitle title="Crystalbricks" /><Crystalbricks /></>} />
          <Route path="/works/afriwok" element={<><SEOTitle title="Afriwok" /><Afriwok /></>} />
          <Route path="/works/unizik-alumni" element={<><SEOTitle title="Unizik Alumni" /><UnizikAlumni /></>} />
          <Route path="/works/unizik-portal" element={<><SEOTitle title="Unizik Portal" /><UnizikPortal /></>} />
          <Route path="/services/software-development" element={<><SEOTitle title="Software Development" /><SoftwareDevelopment /></>} />
          <Route path="/services/backup-and-disaster-recovery" element={<><SEOTitle title="Backup and Disaster Recovery" /><BackupAndDisasterRecovery /></>} />
          <Route path="/services/cloud-services" element={<><SEOTitle title="Cloud Services" /><CloudServices /></>} />
          <Route path="/services/communication-and-collaboration-tools" element={<><SEOTitle title="Communication and Collaboration Tools" /><CommunicationAndCollaborationTools /></>} />
          <Route path="/services/cybersecurity-services" element={<><SEOTitle title="Cybersecurity Services" /><CybersecurityServices /></>} />
          <Route path="/services/data-services" element={<><SEOTitle title="Data Services" /><DataServices /></>} />
          <Route path="/services/hardware-and-software-procurement" element={<><SEOTitle title="Hardware and Software Procurement" /><HardwareAndSoftwareProcurement /></>} />
          <Route path="/services/infrastructure-services" element={<><SEOTitle title="Infrastructure Services" /><InfrastructureServices /></>} />
          <Route path="/services/it-consulting-and-strategy" element={<><SEOTitle title="IT Consulting and Strategy" /><ITConsultingAndStrategy /></>} />
          <Route path="/services/it-support-and-helpdesk" element={<><SEOTitle title="IT Support and Helpdesk" /><ITSupportAndHelpdesk /></>} />
          <Route path="/services/managed-it-services" element={<><SEOTitle title="Managed IT Services" /><ManagedITServices /></>} />
          <Route path="/contactus" element={<><SEOTitle title="navbar.contact" /><ContactUs /></>} />
          <Route path="/works/infrastructure-service" element={<><SEOTitle title="Infrastructure Service" /><Infrastructure /></>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
