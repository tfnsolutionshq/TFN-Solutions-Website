import TopBar from "../Components/GeneralComponents/TopBar";
import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";
import AlumniDirectory from "../Components/Directory/AlumniDirectory";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <AlumniDirectory />
      <Footer />
    </>
  );
}

export default Home;