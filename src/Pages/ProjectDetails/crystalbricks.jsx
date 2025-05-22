import Navbar from "../../Components/GeneralComponents/Navbar";
import ContactSection from "../../Components/Homepage/ContactSection";
import Footer from "../../Components/GeneralComponents/Footer";
import WorkDetailsComponent from "../../Components/WorkDetails/Crystalbricks";
// import SimilarProjects from "../../Components/WorkDetails/SimilarProjects";

function WorkDetails() {
  return (
    <>
      <Navbar />
      <WorkDetailsComponent />
      {/* <SimilarProjects /> */}
      <ContactSection />
      <Footer />
    </>
  );
}
export default WorkDetails;