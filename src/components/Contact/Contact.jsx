import React from "react";
import './Contact.scss'
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'


const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-h1">CONTACT ME</h1>
                    <h2 className="contact-h2">&lt; /&gt;</h2>
                </div>

                <div className="contact-content">
                    <article className="contact-cards">
                        <AiOutlineMail className="contact-icon" />
                        <h3>EMAIL</h3>
                        <h4>ryan.almasi@gmail.com</h4>
                        <a href="mailto: ryan.almasi@gmail.com" target='blank' className="btn contact-btn">EMAIL ME</a>
                    </article>

                    <article className="contact-cards">
                        <AiOutlineLinkedin className="contact-icon" />
                        <h3>LINKEDIN</h3>
                        <h4>Ryan Almasi</h4>
                        <a href="https://www.linkedin.com/in/ryan-almasi-493447251/" target='_blank' className="btn contact-btn">CONNECT WITH ME</a>
                    </article>

                    <article className="contact-cards">
                        <FiGithub className="contact-icon" />
                        <h3>GITHUB</h3>
                        <h4>ryanalmasi</h4>
                        <a href="mailto: ryan.almasi@gmail.com" target='blank' className="btn contact-btn">EMAIL ME</a>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Contact