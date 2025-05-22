import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react"
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/latest-news" element={<News />} />
        <Route path="/news/future-of-software-development" element={<NewsDetails />} />
        <Route path="/news/ai-business-transformation" element={<AItransformation />} />
        <Route path="/news/building-scalable-network-infrastructure" element={<BuildingScalableNetworkInfrastructure />} />
        <Route path="/works/crystalbricks" element={<Crystalbricks />} />
        <Route path="/works/afriwok" element={<Afriwok />} />
        <Route path="/works/unizik-alumni" element={<UnizikAlumni />} />
        <Route path="/works/unizik-portal" element={<UnizikPortal />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/backup-and-disaster-recovery" element={<BackupAndDisasterRecovery />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/communication-and-collaboration-tools" element={<CommunicationAndCollaborationTools />} />
        <Route path="/services/cybersecurity-services" element={<CybersecurityServices />} />
        <Route path="/services/data-services" element={<DataServices />} />
        <Route path="/services/hardware-and-software-procurement" element={<HardwareAndSoftwareProcurement />} />
        <Route path="/services/infrastructure-services" element={<InfrastructureServices />} />
        <Route path="/services/it-consulting-and-strategy" element={<ITConsultingAndStrategy />} />
        <Route path="/services/it-support-and-helpdesk" element={<ITSupportAndHelpdesk />} />
        <Route path="/services/managed-it-services" element={<ManagedITServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/works/infrastructure-service" element={<Infrastructure />} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
