import Navbar from "../Components/GeneralComponents/Navbar";
import Footer from "../Components/GeneralComponents/Footer";
import ContactForm from '../Components/ContactPage/ContactForm'
import Maps from '../Components/ContactPage/Map'

function Contactus() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Maps />
      <Footer />
    </div>
  )
}

export default Contactus