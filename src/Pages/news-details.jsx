import Navbar from "../Components/GeneralComponents/Navbar";
import ContactSection from "../Components/Homepage/ContactSection";
import Footer from "../Components/GeneralComponents/Footer";
import News from "../Components/News-copy/News-Details";

function NewsDetails() {
  return (
    <>
      <Navbar />
      <News />
      <ContactSection />
      <Footer />
    </>
  );
}
export default NewsDetails;