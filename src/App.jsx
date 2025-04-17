import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import BecomeAmember from "./Pages/Authentication/become-a-member";
import Login from "./Pages/Authentication/login";
import Resetpassword from "./Pages/Authentication/reset-password";
import Newpassword from "./Pages/Authentication/new-password";
import AlumniDirectory from "./Pages/alumni-directory";
import BranchList from "./Pages/branch-list";
import History from "./Pages/history";

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
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/branch-list" element={<BranchList />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  )
}

export default App
