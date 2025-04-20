import TopBar from "../../Components/GeneralComponents/TopBar";
import Navbar from "../../Components/GeneralComponents/Navbar";
import Footer from "../../Components/GeneralComponents/Footer";
import AlumniEventDetails from '../../Components/AlumniNewsAndEvents/AlumniEventDetails'

function AlumniNewsAndEvents() {
  return (
    <>
      <TopBar />
      <Navbar />
      <AlumniEventDetails />
      <Footer />
    </>
  );
}

export default AlumniNewsAndEvents;