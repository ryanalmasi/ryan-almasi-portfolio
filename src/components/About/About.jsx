import React from 'react'
import './About.scss'
import { FaLaptopCode } from 'react-icons/fa'


const About = () => {
  return (
    <section id="about">
      <header className="about-header">
        <h1 className='about-h1'>ABOUT ME</h1>
        <h3 className='about-h3'>&lt; /&gt;</h3>
      </header>
      
      <div className='container'>
        <div className='container about-cont'>
          <div className='about_img'>
            <img alt='My Image' />
          </div>
        </div>

        <div className='about-cont_content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaLaptopCode className='about-icon' />
              <h2>EXPERIENCE</h2>
              <small>~4 months professional experience</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About