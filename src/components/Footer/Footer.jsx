import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <h1 className='footer-h1'>RYAN ALMASI PORTFOLIO 1.0</h1>
                <ul className='links'>
                    <div className='links-container'>
                        <a className='footer-title'>CONTENT</a>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#about">About</a> </li>
                        <li> <a href="#experience">Experience</a> </li>
                        <li> <a href="#portfolio">Portfolio</a> </li>
                        <li> <a href="#contact">Contact</a> </li>
                    </div>
                </ul>
            </div>
        </footer>
    );
}

export default Footer