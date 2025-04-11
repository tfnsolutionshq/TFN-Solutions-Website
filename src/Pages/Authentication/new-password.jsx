import TopBar from "../../Components/GeneralComponents/TopBar"
import Navbar from "../../Components/GeneralComponents/Navbar"
import Footer from "../../Components/GeneralComponents/Footer"
import NewPassword from "../../Components/Authentication/New-Password"

function Newpassword() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <NewPassword />
      <Footer />
    </div>
  )
}

export default Newpassword