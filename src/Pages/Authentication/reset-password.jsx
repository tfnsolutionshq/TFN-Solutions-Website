import TopBar from "../../Components/GeneralComponents/TopBar"
import Navbar from "../../Components/GeneralComponents/Navbar"
import ResetPassword from "../../Components/Authentication/ResetPassword"
import Footer from "../../Components/GeneralComponents/Footer"

function Resetpassword() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <ResetPassword />
      <Footer />
    </div>
  )
}

export default Resetpassword