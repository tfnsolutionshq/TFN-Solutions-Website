import TopBar from "../Components/GeneralComponents/TopBar";
import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";
import Header from "../Components/HomeComponents/Header";
import HeaderBottom from "../Components/HomeComponents/HeaderBottom";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header />
      <HeaderBottom />
      <Footer />
    </>
  );
}

export default Home;