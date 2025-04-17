import TopBar from "../Components/GeneralComponents/TopBar";
import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";
import BranchList from "../Components/BranchList/BranchList"

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <BranchList />
      <Footer />
    </>
  );
}

export default Home;