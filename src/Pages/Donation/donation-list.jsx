import TopBar from "../../Components/GeneralComponents/TopBar";
import Navbar from "../../Components/GeneralComponents/Navbar";
import Footer from "../../Components/GeneralComponents/Footer";
import DonationsList from "../../Components/Donation/Donation-List"

function DonationList() {
  return (
    <>
      <TopBar />
      <Navbar />
      <DonationsList />
      <Footer />
    </>
  );
}

export default DonationList;