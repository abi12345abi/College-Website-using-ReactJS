import React from 'react'
import './Contact.css';
import msg_icon from '../../Images/msg-icon.png';
import mail_icon from '../../Images/mail-icon.png';
import phone_icon from '../../Images/phone-icon.png';
import location_icon from '../../Images/location-icon.png';
import white_arrow from '../../Images/white-arrow.png';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9b69f16-b084-4973-bc68-bd5fa535e540");

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
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message  <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact 
        information below. Your feedback, questions, and suggestions are 
        important to us as we strive to provide expectional service to our 
        university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@AbishaEdusity.dev</li>
          <li><img src={phone_icon} alt="" />+1 846-834-7386</li>
          <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br></br> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type='text' name='name' placeholder='Enter your name' required></input>

          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required></input>

          <label>Write your message here</label>
          <textarea name='message'  rows="6" placeholder='Enter your message' required ></textarea>

          <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt="" /></button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
