import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Footer from './compo/Footer'
import Navbar from './compo/Navbar'
import Home from './Home'

import Videos from './Videos'
import Signup from './Signup'
import Account from './Account'
import About from './compo/About'



const App = () => {
  return (
    <>

    <Router>
     <Navbar/>
    
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/Videos' element={<Videos/>} />
        <Route path='/Account' element={<Account/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='*' element={<><h1> 404 </h1></>} />
      </Routes>
      <Footer/>
    </Router>

    
    </>
  )
}

export default App