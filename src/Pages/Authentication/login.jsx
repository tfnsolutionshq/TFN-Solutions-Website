import Login from '../../Components/Authentication/Login'
import TopBar from '../../Components/GeneralComponents/TopBar'
import Navbar from '../../Components/GeneralComponents/Navbar'
import Footer from '../../Components/GeneralComponents/Footer'

function login() {
  return (
    <div>
    <TopBar/>
    <Navbar/>
    <Login/>
    <Footer/>
    </div>
  )
}

export default login