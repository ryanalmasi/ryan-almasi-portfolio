import React from "react";
import './Projects.scss'
import companystocker from '../../Assets/Images/companystocker.png'
import automation from '../../Assets/Images/automation.jpg'
import currencyconverter from '../../Assets/Images/currencyconverter.png'
import receipt from '../../Assets/Images/receipt.jpg'
import website from '../../Assets/Images/website.png'


const Projects = () => {
    return (
        <section id="projects">
            <div className="portfolio-container">
                <div className="projects-header">
                    <h1>PROJECTS</h1>
                    <h2>&lt; /&gt;</h2>
                </div>

                <div className="items">
                    <div className="items-wrapper">
                        <div className="portfolio-cont">
                            <article className="portfolio-item">
                                <h3 className="portfolio-h3">CompanyStocker</h3>
                                <h4 className="portfolio-h4">
                                    This is CompanyStocker, a simple interactive application demonstrating the creative and 
                                    limitless potential of Python. Using a custom version of Python's Tkinter module, we have 
                                    created a modern GUI that takes any stock ticker as input in order to display that companies 
                                    historical financial information.
                                </h4>
                                <div className="portfolio-img">
                                    <img src={companystocker} alt='' />
                                </div>
                                <div className="portfolio-item-cta">
                                    <a href='https://github.com/ryanalmasi/CompanyStocker' className="btn portfolio-btn">TAKE A LOOK</a>
                                </div>
                            </article>

                            <article className="portfolio-item">
                                <h3 className="portfolio-h3">Timesheet Automator</h3>
                                <h4 className="portfolio-h4">
                                    Basic automated time sheet which can scan through multiple excel sheets in order to copy and 
                                    paste relevant information, making accounting and logging easier for employees.
                                </h4>
                                <div className="portfolio-img">
                                    <img src={automation} alt='' />
                                </div>
                                <div className="portfolio-item-cta">
                                    <a href='https://github.com/ryanalmasi/Basic-Automated-Time-Sheet' className="btn portfolio-btn">TAKE A LOOK</a>
                                </div>
                            </article>

                            <article className="portfolio-item">
                                <h3 className="portfolio-h3">Currency Conversion App</h3>
                                <h4 className="portfolio-h4">
                                    A simple currency converter GUI created with Python and the Tkinter module. The user inputs 
                                    a currency amount , followed by its respective currency sign, in addition to what they wish 
                                    to convert to.
                                </h4>
                                <div className="portfolio-img">
                                    <img src={currencyconverter} alt='' />
                                </div>
                                <div className="portfolio-item-cta">
                                    <a href='https://github.com/ryanalmasi/Currency-Converter-App' className="btn portfolio-btn">TAKE A LOOK</a>
                                </div>
                            </article>

                            <article className="portfolio-item">
                                <h3 className="portfolio-h3">Receipt Scanner with OCR API</h3>
                                <h4 className="portfolio-h4">
                                    In this repository, we are building off of an
                                    Asprise OCR API driven python script that analyzes a photo of a 
                                    receipt, and then provides valuable information regarding the merchant, 
                                    subtotal, item price, etc.
                                </h4>
                                <div className="portfolio-img">
                                    <img src={receipt} alt='' />
                                </div>
                                <div className="portfolio-item-cta">
                                    <a href='https://github.com/ryanalmasi/ryan-almasi-portfolio' className="btn portfolio-btn">TAKE A LOOK</a>
                                </div>
                            </article>

                            <article className="portfolio-item">
                                <h3 className="portfolio-h3">This Website</h3>
                                <h4 className="portfolio-h4">
                                    Personal full-stack website created as a portfolio. Created using the ReactJS and NodeJS framework
                                    integrated with HTML and CSS.
                                </h4>
                                <div className="portfolio-img">
                                    <img src={website} alt='' />
                                </div>
                                <div className="portfolio-item-cta">
                                    <a href='https://github.com/ryanalmasi/ReceiptScannerProject' className="btn portfolio-btn">TAKE A LOOK</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects