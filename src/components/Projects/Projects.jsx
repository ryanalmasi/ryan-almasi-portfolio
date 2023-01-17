import React from "react";
import './Projects.scss'


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
                        <article className="portfolio-item">
                            <div className="portfolio-img">
                                <img alt='' />
                            </div>
                            <h3>CompanyStocker</h3>
                            <div className="portfolio-item-cta">
                                <a href='https://github.com/ryanalmasi/CompanyStocker' className="btn">TAKE A LOOK</a>
                            </div>
                        </article>

                        <article className="portfolio-item">
                            <div className="portfolio-img">
                                <img alt='' />
                            </div>
                            <h3>Timesheet Automator</h3>
                            <div className="portfolio-item-cta">
                                <a href='https://github.com/ryanalmasi/Basic-Automated-Time-Sheet' className="btn">TAKE A LOOK</a>
                            </div>
                        </article>

                        <article className="portfolio-item">
                            <div className="portfolio-img">
                                <img alt='' />
                            </div>
                            <h3>Currency Conversion App</h3>
                            <div className="portfolio-item-cta">
                                <a href='https://github.com/ryanalmasi/Currency-Converter-App' className="btn">TAKE A LOOK</a>
                            </div>
                        </article>

                        <article className="portfolio-item">
                            <div className="portfolio-img">
                                <img alt='' />
                            </div>
                            <h3>Receipt Scanner with OCR API</h3>
                            <div className="portfolio-item-cta">
                                <a href='https://github.com/ryanalmasi/ryan-almasi-portfolio' className="btn">TAKE A LOOK</a>
                            </div>
                        </article>

                        <article className="portfolio-item">
                            <div className="portfolio-img">
                                <img alt='' />
                            </div>
                            <h3>This Website</h3>
                            <div className="portfolio-item-cta">
                                <a href='https://github.com/ryanalmasi/ReceiptScannerProject' className="btn">TAKE A LOOK</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects