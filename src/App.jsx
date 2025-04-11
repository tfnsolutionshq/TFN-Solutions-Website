import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BecomeAmember from "./Pages/Authentication/become-a-member";
import Login from "./Pages/Authentication/login";
import Resetpassword from "./Pages/Authentication/reset-password";
import Newpassword from "./Pages/Authentication/new-password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/become-a-member" element={<BecomeAmember />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/new-password" element={<Newpassword />} />
      </Routes>
    </Router>
  )
}

export default App
