import React from 'react'
import './Contact.css'
import msg from '../../media/msg.svg'
import mob from '../../media/mobile.svg'
import loction from '../../media/location.svg'
import mail from '../../media/email.svg'
import arr_icon from '../../media/next-icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c0f692f0-2dbf-456a-bf09-37e840de5f35");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className='Contact'>

            <div className="contact-col">
                <h3>Send a Message <img src={msg} alt="" /></h3>
                <p>Have a question or suggestion? We’d love to hear from you.
                    Reach out to us for feedback, queries, or anything related to your GATE preparation.
                </p>

                <ul>
                    <li> <img src={mail} alt="" />Contact@gatevault.com</li>
                    <li> <img src={mob} alt="" />+91 9874563210</li>
                    <li> <img src={loction} alt="" />123,City,State,Zip</li>
                </ul>
            </div>

            <div className="contact-col">

                <form onSubmit={onSubmit}>
                <label >Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />

                 <label >Phone Number</label>
                 <input type="tel" name='phone' placeholder='Enter your Mobile number' required />

                  <label >Write your Message</label>
                  <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>

                  <button type='submit' className='btn dark-btn'>Submit Now <img src={arr_icon} alt="" /></button>
                </form>
                <span>{result}</span>

            </div>
        </div>
    )
}

export default Contact
