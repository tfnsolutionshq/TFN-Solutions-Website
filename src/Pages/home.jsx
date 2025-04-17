import TopBar from "../Components/GeneralComponents/TopBar";
import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";
import Header from "../Components/HomeComponents/Header";
import HeaderBottom from "../Components/HomeComponents/HeaderBottom";
import HallOfFame from "../Components/HomeComponents/HallOfFame";
import About from "../Components/HomeComponents/About";
import WordFromPresident from "../Components/HomeComponents/WordFromPresident";
import AlumniPrograms from "../Components/HomeComponents/AlumniPrograms";
import StoriesThatInspire from "../Components/HomeComponents/StoriesThatInspire";
import CommunityTestimonials from "../Components/HomeComponents/CommunityTestimonials";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header />
      <HeaderBottom />
      <HallOfFame />
      <About />
      <WordFromPresident />
      <AlumniPrograms />
      <StoriesThatInspire />
      <CommunityTestimonials />
      <Footer />
    </>
  );
}

export default Home;