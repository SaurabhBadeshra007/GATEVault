import React from 'react'
import './Navbar.css'
import favicon from '../../media/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img className='HeadLogo' src={favicon} alt="" />
      <ul>
        <li>Home</li>
        <li>Featured Subjects</li>
        <li>About Us</li>
        <li>Notes</li>
        <li>PYQs</li>
        <li>Ads</li>
        <li>Mock Test</li>
        <li> <button className='btn'>Contact Us</button></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
