import Careers from "../../Components/Career/Careers"
import Navbar from "../../Components/GeneralComponents/Navbar"
import Footer from "../../Components/GeneralComponents/Footer"
import Contactsection from "../../Components/HomePage/ContactSection"

function careers() {
  return (
    <div>
      <Navbar />
      <Careers />
      <Contactsection />
      <Footer />
    </div>
  )
}

export default careers
