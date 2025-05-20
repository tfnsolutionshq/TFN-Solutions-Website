import Navbar from "../Components/GeneralComponents/Navbar";
import Header from "../Components/Homepage/Header";
import Counter from "../Components/Homepage/Counter";
import ImageGallery from "../Components/Homepage/ImageGallery";
import ServiceSection from "../Components/Homepage/ServiceSection";
import ServiceContainer from "../Components/Homepage/ServiceContainer";
import LatestSolutions from "../Components/Homepage/LastestSolutions";
import TeamSection from "../Components/Homepage/TeamSection";
import Approach from '../Components/Homepage/Approach'
import TestimonialSection from "../Components/Homepage/Testimonials";
import Blog from "../Components/Homepage/Blog";
import FAQS from "../Components/Homepage/FAQS";
import ContactSection from "../Components/Homepage/ContactSection";
import Footer from "../Components/GeneralComponents/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Counter />
      <ImageGallery />
      <ServiceSection />
      <ServiceContainer />
      <Approach />
      <LatestSolutions />
      <TeamSection />
      <TestimonialSection />
      <Blog />
      
      <ContactSection />
      <FAQS />
      <Footer />
    </>
  );
}

export default Home;