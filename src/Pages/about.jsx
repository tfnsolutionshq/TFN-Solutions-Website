import Navbar from "../Components/GeneralComponents/Navbar";
import AboutUs from "../Components/AboutPage/About";
import Counter from "../Components/AboutPage/Counter";
import FAQAccordion from "../Components/Homepage/FAQS";
import ContactSection from "../Components/Homepage/ContactSection";
import TeamSection from "../Components/AboutPage/TeamSection";
import CEOWORD from "../Components/AboutPage/CeoWord";
import Footer from "../Components/GeneralComponents/Footer";

function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Counter />
      <CEOWORD />
      <TeamSection />
      <FAQAccordion />
      <ContactSection />
      <Footer />
    </>
  );
}

export default About;