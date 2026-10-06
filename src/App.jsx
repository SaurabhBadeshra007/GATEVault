import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Subject from './components/Subjects/Subject'
import Title from './components/Title/Title'
import About from './components/About/About'

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
    </div>
  )
}

export default App
