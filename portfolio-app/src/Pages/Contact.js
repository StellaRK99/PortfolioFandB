import { useState, React,useRef  } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Burger from "../Components/Burger";
import '../Public/styles/styles.css';


function Contact(){
    document.title = "Contact - Stella Kagri"
    const[touched, setTouched] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_oa62r6f', 'template_ycxties', form.current, 'c2XBO2H-JtCQ8lqsc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

    const touch =() =>{
        setTouched(!touched)
        console.log(touched)
    }
    console.log(touched)
    return (   
        <div className="contact">
            <Navbar />
            <Burger />
        
            <div className="contact-content">
                <h1>Get In Touch!</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Enter Your Name" required></input>

                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Enter Your Email" required></input>

                    <label>Subject</label>
                    <input placeholder="Enter Subject" required></input>

                    <label>Message</label>
                    <textarea name="message" id="message-box" placeholder="What's On Your Mind?" required></textarea>

                    {/* <button type="submit" value="Send" className="submit-btn" onClick={touch}>Send</button> */}
                    {!touched ?(<button type="submit" value="Send" className="submit-btn" onClick={touch}>Send</button>):
                    (<button type="submit" value="Send" className="submit-btn" onClick={touch}>Thank you! Your message has been sent</button>)}
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact