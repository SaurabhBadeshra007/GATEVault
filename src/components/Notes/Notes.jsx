import React from 'react'
import './notes.css'
import os from '../../media/os-notes.png'
import cn from '../../media/cn-notes.png'
import er_mt from '../../media/maths-notes.png'
import dl from '../../media/Dl-notes.png'
import whitearrow from '../../media/right-arrow.png'

const Notes = () => {
    return (
        <div className='notes'>
            <div className="gallery">
                <img src={os} alt="" />
                <img src={cn} alt="" />
                <img src={er_mt} alt="" />
                <img src={dl} alt="" />
            </div>

            <button className='btn dark-btn'>See More Here <img src={whitearrow} alt="" /></button>
        </div>
    )
}

export default Notes
