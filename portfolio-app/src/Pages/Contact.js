import { useState, React,useRef  } from "react";
import BackToTop from "../Components/BackToTop";
import emailjs from '@emailjs/browser';
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Burger from "../Components/Burger";
import '../Public/styles/styles.css';


function Contact(){
    document.title = "Contact - Stella Kagri"
    const [name, setName] = useState(null)    
    const [email, setEmail] = useState(null)
    const [subject, setSubject] = useState(null)
    const [message, setMessage] = useState(null)

    const[touched, setTouched] = useState("Send")
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_oa62r6f', 'template_ycxties', form.current, 'c2XBO2H-JtCQ8lqsc')
      .then((result) => {
      
        setTouched("Sent!")
        
        console.log(result.text);
           
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      
  };

    return (   
        <div className="contact">
            <Navbar />
            <Burger />
            <div className="contact-content">
                <h1>Get In Touch!</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Enter Your Name" required onChange={e=> setName(e.target.value)}></input>

                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Enter Your Email" required onChange={e=> setEmail(e.target.value)}></input>

                    <label>Subject</label>
                    <input placeholder="Enter Subject" required onChange={e=>setSubject(e.target.value)}></input>

                    <label>Message</label>
                    <textarea name="message" id="message-box" placeholder="What's On Your Mind?" required onChange={e=>setMessage(e.target.value)}></textarea>

                    <button type="submit" value="Send" className="submit-btn">{touched}</button>
                </form>
            </div>
        <BackToTop />
            <Footer />
        </div>
    )
}

export default Contact