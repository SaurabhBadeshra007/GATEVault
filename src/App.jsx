import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Subject from './components/Subjects/Subject'
import Title from './components/Title/Title'
import About from './components/About/About'
import Notes from './components/Notes/Notes'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


const App = () => {

      const[playState,setPlayState] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
    <Title subTitle='Our Program' title='What We Offer'/ > 
      <Subject/>
      {/* </div> */}
      <About setPlayState={setPlayState}/>
       <Title subTitle='Notes' title='Notes Preview'/ > 
       <Notes/>

       <Title subTitle='Testimonials' title='What Student Says'/ > 
       <Testimonials/>

       <Title subTitle='Contact us' title='Get in Touch'/ > 
     <Contact/>
     <Footer/>

       </div>
     <VideoPlayer playState={playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App
