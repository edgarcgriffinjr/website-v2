import React from 'react'
import emailjs from 'emailjs-com'
import * as AiIcons from 'react-icons/ai'

import './assets/css/contact.css'

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('email', 'template', e.target, 'user_QmZHOyVj4eOaLwnqh3aOM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
}


const Contact = () => {
    return ( 
        <section id = 'contact' className = 'contact'> 
            <div className="contact-container">

                <div className="contact-heading">
                    <AiIcons.AiFillContacts />
                    <span> Contact Me </span>
                </div>
                
                <div className = 'contact-content'>
                    <p> 
                        I am currently looking for oppurtunities and full time employment so feel free
                        to email me with any concerns or questions below. Feel free to follow my socials as well!
                    </p>

                    <form className = 'contact-form' onSubmit={sendEmail}>
                        <div className="contact-form-line-one">
                            <input type = 'text' placeholder = 'Name' name = 'name'/>
                            <input type = 'email' placeholder = 'Email' name = 'email'/>
                        </div>

                        <div className="contact-form-message">
                            <textarea type = 'text' placeholder = 'Message' name = 'message'/>
                        </div>

                        <div className="contact-form-button">
                            <button type = 'submit' value = 'Send Message'> Send Message </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;