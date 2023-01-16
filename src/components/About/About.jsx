import React from 'react'
import './About.scss'
import { FaLaptopCode } from 'react-icons/fa'


const About = () => {
  return (
    <section id="about">
      <header className="about-header">
        <h1 className='about-h1'>ABOUT ME</h1>
      </header>
      
      <div className='container'>
        <div className='container about-cont'>
          <div className='about_img'>
            <img alt='My Image' />
          </div>
        </div>

        <div className='about-cont_content'>
          <div className='about-cards'>
            <article className='about-card about-card-experience'>
              <FaLaptopCode className='about-icon' />
              <h2>EXPERIENCE</h2>
              <small>~4 months professional experience</small>
            </article>

            <article className='about-card about-card-academic'>
              <FaLaptopCode className='about-icon' />
              <h2>ACADEMIC HISTORY</h2>
              <small>BSc Computer Engineering Co-op - Software Option</small>
            </article>

            <article className='about-card about-card-coop'>
              <FaLaptopCode className='about-icon' />
              <h2>CO-OP WORK TERMS</h2>
              <small>4 months | Summer 2023</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About