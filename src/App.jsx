// import './App.css'
// import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'

// // 
// import WhoCanSubmitPage from './pages/WhoCanSubmitPage'

// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// // import About from './pages/About'
// import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
// // import Programs from './pages/Programs'
// // import Resources from './pages/Resources'
// import Signup from './pages/Signup'
// import NotFound from './pages/NotFound'
// // import SearchResult from './pages/SearchResult'
// import Footer from './components/Footer'

// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//       <>
//         {/* <HeaderWithDropdown /> */}
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

//         <Routes>
//           <Route path='/' element={<Home />} />
//           {/* <Route path='/searchResult' element={<SearchResult />} /> */}
//           {/* <Route path='/resources' element={<Resources />} /> */}
//           {/* <Route path='/programs' element={<Programs />} /> */}
//           {/* <Route path='/About' element={<About />} /> */}
//           <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path='/dashboard' element={<Dashboard />} />


//           <Route path='/WhoCanSubmitPage' element={<WhoCanSubmitPage />} />


//           <Route path='*' element={<NotFound />} />
//         </Routes>

//         <Footer />

//       </>
//   )
// }

// export default App




import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
// import Dashboard from './components/dashboard/Dashboard'
import Login from './components/loginPage/Login'
import Signup from './components/signupPage/Signup'
import NotFound from './components/notFound/NotFound'
import Footer from './components/footer/Footer'

// Top Header Links
import WhoCanSubmitPage from './components/topHeaderPages/whoCanSubmitPage/WhoCanSubmitPage'
import SubmitEssentialsPage from './components/topHeaderPages/SubmitEssentialsPage/SubmitEssentialsPage'
import SubmitGuidelinesPage from './components/topHeaderPages/SubmitGuidelinesPage/SubmitGuidelinesPage'
import BenifitToTheReshearchersPage from './components/topHeaderPages/BenifitToTheReshearchers/BenifitToTheReshearchersPage'
import VisionaryLeadershipPage from './components/topHeaderPages/VisionaryLeadershipPage/VisionaryLeadershipPage'
import CeoMessagePage from './components/topHeaderPages/CeoMessagePage/CeoMessagePage'
import BehindTheScenesStrategyPage from './components/topHeaderPages/behindTheScenesStrategyPage/BehindTheScenesStrategyPage'
import CommitmentToEducationPage from './components/topHeaderPages/commitmentToEducationPage/commitmentToEducationPage'
import DiverseTeamOfExpertsPage from './components/topHeaderPages/DiverseTeamOfExpertsPage/DiverseTeamOfExpertsPage'
import InnovationDrivenCulturePage from './components/topHeaderPages/InnovationDrivenCulturePage/InnovationDrivenCulturePage'
import MeetTheDevelopersPage from './components/topHeaderPages/MeetTheDevelopersPage/MeetTheDevelopersPage'
import StoryOfOurJourneyPage from './components/topHeaderPages/StoryOfOurJourneyPage/StoryOfOurJourneyPage'
import OurMissionAndVisionPage from './components/topHeaderPages/OurMissionAndVisionPage/OurMissionAndVisionPage'
import MeetWithTheCEOPage from './components/topHeaderPages/MeetWithTheCEOPage/MeetWithTheCEOPage'
import AboutCaseChroniclesPage from './components/topHeaderPages/AboutCaseChroniclesPage/AboutCaseChroniclesPage'

// Authentication PopUp
import AuthPopup from './components/AuthPopup'

// import Sidebar from "./components/dashboard/components/Sidebar";
// import { Outlet } from "react-router-dom";

// Sidebar Pages
import Dashboard from './components/dashboard/Dashboard';
import DashboardHome from './components/dashboard/pages/DashboardHome';
import AllCases from './components/dashboard/pages/AllCases';
import AddCase from './components/dashboard/pages/AddCase';
import Users from './components/dashboard/pages/Users';
import Reports from './components/dashboard/pages/Reports';
import Settings from './components/dashboard/pages/Settings';
import Logout from './components/dashboard/pages/Logout';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // First time only
    const alreadyShown = sessionStorage.getItem("popupShown");
    if (!alreadyShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} />}

      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
  <Route path='/Who-Can-Submit-Page' element={<WhoCanSubmitPage />} />
  <Route path='/submit-essentials' element={<SubmitEssentialsPage />} />
  <Route path='/submit-guidelines' element={<SubmitGuidelinesPage />} />
  <Route path='/benifit-reshearchers' element={<BenifitToTheReshearchersPage />} />
  <Route path='/visionary-leadership' element={<VisionaryLeadershipPage />} />
  <Route path='/ceo-message' element={<CeoMessagePage />} />
  <Route path='/behind-the-scenes-strategy' element={<BehindTheScenesStrategyPage />} />
  <Route path='/commitment-to-education' element={<CommitmentToEducationPage />} />
  <Route path='/diverse-team-of-experts' element={<DiverseTeamOfExpertsPage />} />
  <Route path='/innovation-driven-culture' element={<InnovationDrivenCulturePage />} />
  <Route path='/meet-the-developers' element={<MeetTheDevelopersPage />} />
  <Route path='/story-of-our-journey' element={<StoryOfOurJourneyPage />} />
  <Route path='/our-mission-and-Vision' element={<OurMissionAndVisionPage />} />
  <Route path='/meet-with-the-ceo' element={<MeetWithTheCEOPage />} />
  <Route path='/about-casechronicles' element={<AboutCaseChroniclesPage />} />

  {/* Dashboard with Sidebar layout */}
  <Route path='/dashboard' element={<Dashboard />}>
    <Route index element={<DashboardHome />} />
    <Route path='all-cases' element={<AllCases />} />
    <Route path='add-case' element={<AddCase />} />
    <Route path='users' element={<Users />} />
    <Route path='reports' element={<Reports />} />
    <Route path='settings' element={<Settings />} />
    <Route path='logout' element={<Logout />} />
  </Route>

  <Route path='*' element={<NotFound />} />
</Routes>


      <Footer />
    </>
  )
}

export default App
