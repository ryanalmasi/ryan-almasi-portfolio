import React from "react";
import './Contact.scss'
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_75yjws1', 'template_68px6hr', form.current, 'fzt2jXqFfVzQtwUQG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-h1">CONTACT ME</h1>
                    <h2 className="contact-h2">&lt; /&gt;</h2>
                    <h5 className="contact-h5">THANK YOU FOR SCROLLING</h5>
                    <h6 className="contact-h6">FEEL FREE TO CONTACT ME THROUGH ANY OF THE PLATFORMS BELOW</h6>
                </div>

                <div className="contact-content">
                    <article className="contact-cards contact-email">
                        <AiOutlineMail className="contact-icon" />
                        <h3 className="contact-h3">EMAIL</h3>
                        <h4 className="contact-h4">ryan.almasi@gmail.com</h4>
                        <a href="mailto: ryan.almasi@gmail.com" target='blank' className="btn contact-btn">EMAIL ME</a>
                    </article>

                    <article className="contact-cards contact-linkedin">
                        <AiOutlineLinkedin className="contact-icon" />
                        <h3 className="contact-h3">LINKEDIN</h3>
                        <h4 className="contact-h4">Ryan Almasi</h4>
                        <a href="https://www.linkedin.com/in/ryan-almasi-493447251/" target='_blank' className="btn contact-btn">CONNECT WITH ME</a>
                    </article>

                    <article className="contact-cards contact-github">
                        <FiGithub className="contact-icon" />
                        <h3 className="contact-h3">GITHUB</h3>
                        <h4 className="contact-h4">ryanalmasi</h4>
                        <a href="mailto: ryan.almasi@gmail.com" target='blank' className="btn contact-btn">EMAIL ME</a>
                    </article>
                </div>

                <h6 className="contact-h6">OR SEND ME A MESSAGE BELOW</h6>
                <div className="contact-form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Enter Your Full Name' required />
                        <input type="text" name='Email' placeholder='Enter Your Email Address' />
                        <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
                        <a type='Submit' className='btn contact-btn contact-form-btn' onClick={sendEmail}>SEND MESSAGE</a>  
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact