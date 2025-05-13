import Navbar from "../Components/GeneralComponents/Navbar";
import ContactSection from "../Components/Homepage/ContactSection";
import Footer from "../Components/GeneralComponents/Footer";
import NewsDetailsComponent from "../Components/News/BuildingScalableNetworkInfrastructre";
import BlogSection from "../Components/Homepage/Blog";

function Work() {
  return (
    <>
      <Navbar />
      <NewsDetailsComponent />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Work;