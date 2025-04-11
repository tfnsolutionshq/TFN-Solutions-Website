import TopBar from "../Components/GeneralComponents/TopBar";
import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";

function About() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">About UNIZIK Alumni</h1>
        <div className="prose max-w-none">
          <p className="mb-6">
            Welcome to the Nnamdi Azikiwe University Alumni Association. We are a community of graduates committed to maintaining connections and supporting our alma mater's growth and development.
          </p>
          <p className="mb-6">
            Our mission is to foster meaningful relationships among alumni, support current students, and contribute to the university's advancement through various initiatives and programs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;