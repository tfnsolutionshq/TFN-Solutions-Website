import TopBar from "../../Components/GeneralComponents/TopBar";
import Navbar from "../../Components/GeneralComponents/Navbar";
import Footer from "../../Components/GeneralComponents/Footer";
import DonationsDetails from "../../Components/Donation/Donation-Details";

function DonationDetails() {
  return (
    <>
      <TopBar />
      <Navbar />
      <DonationsDetails />
      <Footer />
    </>
  );
}

export default DonationDetails;