import React, { useEffect, useState } from 'react'
import './Navbar.css'
import favicon from '../../media/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../media/menu.png'

const Navbar = () => {


  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);


  // toggleMenu
  const [mobileMenu,setMobileMenu]= useState(false)
  const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? `dark-nav` : ``}`}>
      <img className='HeadLogo' src={favicon} alt="" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Subject' smooth={true} offset={-260} duration={500}>Featured Subjects</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='notes' smooth={true} offset={-260} duration={500}>Notes</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='' smooth={true} offset={-260} duration={500}>PYQs</Link></li>
        <li><Link to='' smooth={true} offset={-260} duration={500}>Mock Test</Link></li>
        <li> <Link to='Contact' smooth={true} offset={0} duration={500}className='btn'>Contact Us</Link></li>
      </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
