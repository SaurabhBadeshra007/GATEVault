import React, { useRef } from 'react'
import './Testimonial.css'
import nexticon from '../../media/next-icon.svg'
import backicon from '../../media/back-icon.svg'
import User1 from '../../media/User1.svg'


const Testimonials = () => {

     const slider = useRef();
     let tx = 0;
    const slideBackward = ()=>{
        if (tx<0) {
            tx+=25;
        }

         slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideForward = ()=>{
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={backicon} alt="" className='back-btn' onClick=
            {slideBackward} />
            <img src={nexticon} alt="" className='next-btn' onClick=
            {slideForward} />

            <div className="slider">
                <ul ref={slider}>


                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User1} alt="" />
                                <div>
                                    <h3>
                                        FName Lname
                                    </h3>
                                    <span>City,State</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi iusto recusandae saepe quod? Modi fuga ea deserunt nisi veritatis.</p>
                        </div>
                    </li>


 <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User1} alt="" />
                                <div>
                                    <h3>
                                        FName Lname1
                                    </h3>
                                    <span>City,State</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi iusto recusandae saepe quod? Modi fuga ea deserunt nisi veritatis.</p>
                        </div>
                    </li>


                     <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User1} alt="" />
                                <div>
                                    <h3>
                                        FName Lname2
                                    </h3>
                                    <span>City,State</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi iusto recusandae saepe quod? Modi fuga ea deserunt nisi veritatis.</p>
                        </div>
                    </li>


                     <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User1} alt="" />
                                <div>
                                    <h3>
                                        FName Lname3
                                    </h3>
                                    <span>City,State</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quasi iusto recusandae saepe quod? Modi fuga ea deserunt nisi veritatis.</p>
                        </div>
                    </li>

                    
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
