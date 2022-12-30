import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

<header className=" bg-black text-white  flex  items-center top-0 sticky z-10 body-font border-b-2 border-red-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-2xl text-red-500">V-Learn</span>
    </Link>
    <nav className=" flex flex-wrap items-center text-base ">
      <Link to={'/'} className="mr-5 text-lg hover:text-red-400">Home</Link>
      <Link to={'/Videos'} className="mr-5 text-lg hover:text-red-400">Video</Link>
      <Link to={'/Account'} className="mr-5 text-lg hover:text-red-400">Account</Link>
      <Link to={'/About'} className="mr-5 text-lg hover:text-red-400">About</Link>
      
    </nav>
   
 
  </div>
</header>
    
    
    </>
  )
}

export default Navbar