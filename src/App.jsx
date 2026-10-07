import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Subject from './components/Subjects/Subject'
import Title from './components/Title/Title'
import About from './components/About/About'
import Notes from './components/Notes/Notes'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
    <Title subTitle='Our Program' title='What We Offer'/ > 
      <Subject/>
      </div>
      <About/>
       <Title subTitle='Notes' title='Notes Preview'/ > 
       <Notes/>

       <Title subTitle='Testimonials' title='What Student Says'/ > 
       <Testimonials/>

       <Title subTitle='Contact us' title='Get in Touch'/ > 
     <Contact/>
    </div>
  )
}

export default App
