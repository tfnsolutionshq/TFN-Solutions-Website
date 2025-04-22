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
import Gallery from "./Pages/Gallery/galleria";
import ViewGallery from "./Pages/Gallery/view-gallery";
import Donations from "./Pages/Donation/donations";
import DonationDetaisl from "./Pages/Donation/donation-details";
import DonationList from "./Pages/Donation/donation-list";
import Alumniprofiledetails from "./Pages/AlumniMembers/alumni-profile-details";
import AlumniMembers from "./Pages/AlumniMembers/alumni-members"
import AlumniNationalExecutives from "./Pages/AlumniMembers/alumni-national-executives";
import AlumniNews from './Pages/AlumniNewsAndEvents/alumni-news'
import AlumniNewsDetails from './Pages/AlumniNewsAndEvents/alumni-news-details'
import AlumniEvents from './Pages/AlumniNewsAndEvents/alumni-events'
import AlumniEventDetails from './Pages/AlumniNewsAndEvents/alumni-event-details'
import ScrollToTop from "./Components/GeneralComponents/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/galleria" element={<Gallery />} />
        <Route path="/view-gallery" element={<ViewGallery />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/donation-details" element={<DonationDetaisl />} />
        <Route path="/donation-list" element={<DonationList />} />
        <Route path="/alumni-members" element={<AlumniMembers />} />
        <Route path="/alumni-national-executives" element={<AlumniNationalExecutives />} />
        <Route path="/alumni-profile-details" element={<Alumniprofiledetails />} />
        <Route path="/alumni-news" element={<AlumniNews />} />
        <Route path="/alumni-news-details" element={<AlumniNewsDetails />} />
        <Route path="/alumni-events" element={<AlumniEvents />} />
        <Route path="/alumni-event-details" element={<AlumniEventDetails />} />
      </Routes>
    </Router>
  )
}

export default App
