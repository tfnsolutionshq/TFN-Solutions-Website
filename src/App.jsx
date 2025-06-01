import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react"
import SEOTitle from "../src/Components/SeoConfig/SEOTitle";
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
import CareerDetailsPage from "./Pages/Careers/career-details";
import Careers from "./Pages/Careers/careers";
import { seoConfig } from "./Components/SeoConfig/seoconfig";
import PrivacyPolicy from "./Pages/Legal/privacy-policy";
import TermsAndConditions from "./Pages/Legal/terms-and-conditions";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <SEOTitle
                title={seoConfig.home.title}
                description={seoConfig.home.description}
                keywords={seoConfig.home.keywords}
                image="/logo.png"
              />
              <Home />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEOTitle
                title={seoConfig.about.title}
                description={seoConfig.about.description}
                keywords={seoConfig.about.keywords}
                image="/logo.png"
              />
              <About />
            </>
          } />
          <Route path="/projects" element={
            <>
              <SEOTitle
                title={seoConfig.projects.title}
                description={seoConfig.projects.description}
                keywords={seoConfig.projects.keywords}
                image="/logo.png"
              />
              <Works />
            </>
          } />
          <Route path="/latest-news" element={
            <>
              <SEOTitle
                title={seoConfig.news.title}
                description={seoConfig.news.description}
                keywords={seoConfig.news.keywords}
                image="/logo.png"
              />
              <News />
            </>
          } />
          <Route path="/news/future-of-software-development" element={
            <>
              <SEOTitle
                title="The Future of Software Development - TFN Solutions"
                description="Explore emerging trends in software development including AI, low-code platforms, and cloud-native technologies shaping the future."
                keywords="future of software development, AI in programming, low-code development, software trends 2024"
                type="article"
                author="TFN Solutions Team"
                publishedTime="2024-01-15T10:00:00Z"
                image="/logo.png"
              />
              <NewsDetails />
            </>
          } />
          <Route path="/news/ai-business-transformation" element={
            <>
              <SEOTitle
                title="AI Business Transformation - TFN Solutions"
                description="Discover how TFN Solutions helps businesses achieve AI-driven transformation for enhanced efficiency and innovation."
                keywords="AI business transformation, AI solutions, artificial intelligence consulting, business innovation"
                image="/logo.png"
              />
              <AItransformation />
            </>
          } />
          <Route path="/news/building-scalable-network-infrastructure" element={
            <>
              <SEOTitle
                title="Building Scalable Network Infrastructure - TFN Solutions"
                description="Learn about best practices for building robust and scalable network infrastructure with TFN Solutions."
                keywords="scalable network infrastructure, network solutions, IT infrastructure, network architecture"
                image="/logo.png"
              />
              <BuildingScalableNetworkInfrastructure />
            </>
          } />
          {/* Add dynamic route for news details using ID */}
          <Route path="/news-details/:id" element={
            <>
              <SEOTitle
                title="News Details - TFN Solutions"
                description="Detailed insights into specific news articles and technology trends."
                keywords="news details, technology news, tech articles"
                image="/logo.png"
              />
              <DynamicNewsDetails />
            </>
          } />
          <Route path="/projects/crystalbricks" element={
            <>
              <SEOTitle
                title="Crystalbricks Project - TFN Solutions"
                description="Details of the Crystalbricks project developed by TFN Solutions."
                keywords="Crystalbricks project, software development, web application"
                image="/logo.png"
              />
              <Crystalbricks />
            </>
          } />
          <Route path="/projects/afriwok" element={
            <>
              <SEOTitle
                title="Afriwok Project - TFN Solutions"
                description="Details of the Afriwok project developed by TFN Solutions."
                keywords="Afriwok project, mobile app development, e-commerce"
                image="/logo.png"
              />
              <Afriwok />
            </>
          } />
          <Route path="/projects/unizik-alumni" element={
            <>
              <SEOTitle
                title="Unizik Alumni Project - TFN Solutions"
                description="Details of the Unizik Alumni project developed by TFN Solutions."
                keywords="Unizik Alumni, custom software, university portal"
                image="/logo.png"
              />
              <UnizikAlumni />
            </>
          } />
          <Route path="/projects/unizik-portal" element={
            <>
              <SEOTitle
                title="Unizik Portal Project - TFN Solutions"
                description="Details of the Unizik Portal project developed by TFN Solutions."
                keywords="Unizik Portal, web portal, university system"
                image="/logo.png"
              />
              <UnizikPortal />
            </>
          } />
          <Route path="/services/software-development" element={
            <>
              <SEOTitle
                title={seoConfig.services.softwareDevelopment.title}
                description={seoConfig.services.softwareDevelopment.description}
                keywords={seoConfig.services.softwareDevelopment.keywords}
                image="/logo.png"
              />
              <SoftwareDevelopment />
            </>
          } />
          <Route path="/services/backup-and-disaster-recovery" element={
            <>
              <SEOTitle
                title={seoConfig.services.backupAndDisasterRecovery.title}
                description={seoConfig.services.backupAndDisasterRecovery.description}
                keywords={seoConfig.services.backupAndDisasterRecovery.keywords}
                image="/logo.png"
              />
              <BackupAndDisasterRecovery />
            </>
          } />
          <Route path="/services/cloud-services" element={
            <>
              <SEOTitle
                title={seoConfig.services.cloudServices.title}
                description={seoConfig.services.cloudServices.description}
                keywords={seoConfig.services.cloudServices.keywords}
                image="/logo.png"
              />
              <CloudServices />
            </>
          } />
          <Route path="/services/communication-and-collaboration-tools" element={
            <>
              <SEOTitle
                title={seoConfig.services.communicationAndCollaborationTools.title}
                description={seoConfig.services.communicationAndCollaborationTools.description}
                keywords={seoConfig.services.communicationAndCollaborationTools.keywords}
                image="/logo.png"
              />
              <CommunicationAndCollaborationTools />
            </>
          } />
          <Route path="/services/cybersecurity-services" element={
            <>
              <SEOTitle
                title={seoConfig.services.cybersecurity.title}
                description={seoConfig.services.cybersecurity.description}
                keywords={seoConfig.services.cybersecurity.keywords}
                image="/logo.png"
              />
              <CybersecurityServices />
            </>
          } />
          <Route path="/services/data-services" element={
            <>
              <SEOTitle
                title={seoConfig.services.dataServices.title}
                description={seoConfig.services.dataServices.description}
                keywords={seoConfig.services.dataServices.keywords}
                image="/logo.png"
              />
              <DataServices />
            </>
          } />
          <Route path="/services/hardware-and-software-procurement" element={
            <>
              <SEOTitle
                title={seoConfig.services.hardwareAndSoftwareProcurement.title}
                description={seoConfig.services.hardwareAndSoftwareProcurement.description}
                keywords={seoConfig.services.hardwareAndSoftwareProcurement.keywords}
                image="/logo.png"
              />
              <HardwareAndSoftwareProcurement />
            </>
          } />
          <Route path="/services/infrastructure-services" element={
            <>
              <SEOTitle
                title={seoConfig.services.infrastructureServices.title}
                description={seoConfig.services.infrastructureServices.description}
                keywords={seoConfig.services.infrastructureServices.keywords}
                image="/logo.png"
              />
              <InfrastructureServices />
            </>
          } />
          <Route path="/services/it-consulting-and-strategy" element={
            <>
              <SEOTitle
                title={seoConfig.services.itConsultingAndStrategy.title}
                description={seoConfig.services.itConsultingAndStrategy.description}
                keywords={seoConfig.services.itConsultingAndStrategy.keywords}
                image="/logo.png"
              />
              <ITConsultingAndStrategy />
            </>
          } />
          <Route path="/services/it-support-and-helpdesk" element={
            <>
              <SEOTitle
                title={seoConfig.services.itSupportAndHelpdesk.title}
                description={seoConfig.services.itSupportAndHelpdesk.description}
                keywords={seoConfig.services.itSupportAndHelpdesk.keywords}
                image="/logo.png"
              />
              <ITSupportAndHelpdesk />
            </>
          } />
          <Route path="/services/managed-it-services" element={
            <>
              <SEOTitle
                title={seoConfig.services.managedITServices.title}
                description={seoConfig.services.managedITServices.description}
                keywords={seoConfig.services.managedITServices.keywords}
                image="/logo.png"
              />
              <ManagedITServices />
            </>
          } />
          <Route path="/contactus" element={
            <>
              <SEOTitle
                title={seoConfig.contact.title}
                description={seoConfig.contact.description}
                keywords={seoConfig.contact.keywords}
                image="/logo.png"
              />
              <ContactUs />
            </>
          } />
          <Route path="/projects/infrastructure-service" element={
            <>
              <SEOTitle
                title="Infrastructure Service Project - TFN Solutions"
                description="Details of the infrastructure service project implemented by TFN Solutions."
                keywords="infrastructure project, IT infrastructure, network solutions"
                image="/logo.png"
              />
              <Infrastructure />
            </>
          } />
          <Route path="/careers" element={
            <>
              <SEOTitle
                title="Careers at TFN Solutions - Join Our Team"
                description="Explore career opportunities at TFN Solutions and join a dynamic team of technology innovators."
                keywords="careers, jobs, tech jobs, software development jobs, TFN Solutions careers"
                image="/logo.png"
              />
              <Careers />
            </>
          } />
          <Route path="/career-details/:id" element={
            <>
              <SEOTitle
                title="Career Details - TFN Solutions"
                description="Detailed information about specific career openings at TFN Solutions."
                keywords="career details, job description, tech job openings"
                image="/logo.png"
              />
              <CareerDetailsPage />
            </>
          } />
          <Route path="/legal/privacy-policy" element={
            <>
              <SEOTitle
                title="Privacy Policy - TFN Solutions"
                description="Understand how TFN Solutions collects, uses, and protects your personal information."
                keywords="privacy policy, data protection, TFN Solutions privacy, cookies"
                image="/logo.png"
              />
              <PrivacyPolicy />
            </>
          } />
          <Route path="/legal/terms-and-conditions" element={
            <>
              <SEOTitle
                title="Terms and Conditions - TFN Solutions"
                description="Read the Terms and Conditions for using TFN Solutions' website and services."
                keywords="terms of service, TFN Solutions terms, legal, website terms"
                image="/logo.png"
              />
              <TermsAndConditions />
            </>
          } />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;