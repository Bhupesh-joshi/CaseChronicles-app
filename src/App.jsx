import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// 
import WhoCanSubmitPage from './pages/WhoCanSubmitPage'

import Navbar from './components/Navbar'
import Home from './pages/Home'
// import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
// import Programs from './pages/Programs'
// import Resources from './pages/Resources'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
// import SearchResult from './pages/SearchResult'
import Footer from './components/Footer'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <>
        {/* <HeaderWithDropdown /> */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/searchResult' element={<SearchResult />} /> */}
          {/* <Route path='/resources' element={<Resources />} /> */}
          {/* <Route path='/programs' element={<Programs />} /> */}
          {/* <Route path='/About' element={<About />} /> */}
          <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/dashboard' element={<Dashboard />} />


          <Route path='/WhoCanSubmitPage' element={<WhoCanSubmitPage />} />


          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />

      </>
  )
}

export default App
