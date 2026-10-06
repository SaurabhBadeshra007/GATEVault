import React from 'react'
import './Hero.css'
import dark_arrow from '../../media/right-arrow.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-text container">
                <h1>Prepare Smarter. Practice Better. Crack GATE.</h1>
                <p>Complete GATE syllabus, notes, PYQs, important topics, and mock tests — all in one place. Learn, practice, and improve with focused preparation.</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>

            </div>
        </div>
    )
}
import './Hero.css'

export default Hero
