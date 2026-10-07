import React, { useEffect , useState } from 'react'
import './Navbar.css'
import favicon from '../../media/logo.png'


const Navbar = () => {


  const[sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true):setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? `dark-nav` : ``}`}>
      <img className='HeadLogo' src={favicon} alt="" />
      <ul>
        <li>Home</li>
        <li>Featured Subjects</li>
        <li>About Us</li>
        <li>Notes</li>
        <li>Testimonials</li>
        <li>PYQs</li>
        <li>Mock Test</li>
        <li> <button className='btn'>Contact Us</button></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
