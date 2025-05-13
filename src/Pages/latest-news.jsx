import Navbar from "../Components/GeneralComponents/Navbar";
import ContactSection from "../Components/Homepage/ContactSection";
import Footer from "../Components/GeneralComponents/Footer";
import News from "../Components/News/News";

function LatestNews() {
  return (
    <>
      <Navbar />
      <News />
      <ContactSection />
      <Footer />
    </>
  );
}
export default LatestNews;