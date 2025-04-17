import TopBar from "../Components/GeneralComponents/TopBar";
import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";
import HistoryHeader from "../Components/History/HistoryHeader";
import History from "../Components/History/History";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HistoryHeader />
      <History />
      <Footer />
    </>
  );
}

export default Home;