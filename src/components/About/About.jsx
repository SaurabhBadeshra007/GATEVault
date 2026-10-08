import React from 'react'
import './about.css'
import about from '../../media/about.png'
import play from '../../media/play.png'
const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about} alt="" className='about-img' />
                <img src={play} alt="" className='play-img' onClick={()=>{
                    setPlayState(true)
                }}/>
            </div>

            <div className="about-right">
                <h3>About GATEVault</h3>
                <h2>Focused Preparation, Better Results</h2>
                <p>GATEVault is a focused preparation platform built to make GATE preparation simple, organized, and accessible. Everything you need to study and practice is brought together in one place.</p>

                <p>From complete syllabus coverage and subject-wise notes to important topics and previous year questions, GATEVault helps you understand what to study and where to focus.</p>


                <p>With mock tests and regular practice, our goal is to help aspirants build strong concepts, improve accuracy, and prepare with confidence for the GATE examination.</p>

            </div>

        </div>
    )
}
import './about.css'
export default About
