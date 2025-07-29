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
import WhoCanSubmitPage from './components/whoCanSubmitPage/WhoCanSubmitPage'

import AuthPopup from './components/AuthPopup'

import Sidebar from "./components/dashboard/components/Sidebar";
import { Outlet } from "react-router-dom";


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

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/WhoCanSubmitPage' element={<WhoCanSubmitPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}

      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
  <Route path='/WhoCanSubmitPage' element={<WhoCanSubmitPage />} />

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
