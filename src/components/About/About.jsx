import React from 'react'
import './About.scss'
import IMAGE from '../../Assets/Images/IMG_1995.jpg'
import { FaLaptopCode } from 'react-icons/fa'
import { TbSchool } from 'react-icons/tb'
import { MdOutlineWorkOutline } from 'react-icons/md'


const About = () => {
  return (
    <section id="about">
      <header className="about-header">
        <h1 className='about-h1'>ABOUT</h1>
        <h3 className='about-h3'>&lt; /&gt;</h3>
      </header>
      
      <div className='container'>
        <div className='about-cont_content'>
          <div className='about-cards'>
            <article className='about-card about-card-experience'>
              <MdOutlineWorkOutline className='about-icon' />
              <h2 className='about-h2'>EXPERIENCE</h2>
              <small>~4 months professional experience</small>
            </article>

            <article className='about-card about-card-academic'>
              <TbSchool className='about-icon' />
              <h2 className='about-h2'>ACADEMIC HISTORY</h2>
              <small>BSc Computer Engineering Co-op - Software Option</small>
            </article>

            <article className='about-card about-card-coop'>
              <FaLaptopCode className='about-icon' />
              <h2 className='about-h2'>CO-OP AVAILABILITY</h2>
              <small>4 months | Summer 2023</small>
            </article>
          </div>
          
          <div className='about-cont-footer'>
            <div className='about-cont'>
              <div className='about_img'>
                <img src={IMAGE} alt='My Image' />
              </div>
            </div>

            <div className='paragraph-cont'>
              <p className='paragraph paragraph-1'>
                  Developer since youth exploring the limits of software and technology. 
                  I have since then expanded and strengthened my skills within languages
                  such as: Python, JavaScript, HTML, and CSS, with knowledge in libraries 
                  and frameworks such as Djano, ReactJS, Pandas, OpenPyxl and more.
              </p>
              <p className='paragraph paragraph-2'>
                I had begun my journey of software development by writing small 
                scripts with Python, ranging from menial tasks to small games. From then on I had 
                found my passion within the world of technology and engineering, ultimately influencing 
                my decision to enter the field of engineering at UAlberta. What I aim to accomplish within 
                my lifetime involves advancements and contributions within machine learning and artificial 
                intelligence. What I ultimately believe, is that as a collective we must come to embrace and 
                rely upon these technological advancements in order to truly progress and evolve as humans. 
                The limitless boundary of the universe cannot possibly be contained, nor examined by us alone... 
                but thats where the possibilities of AI come in.
              </p>
              <p className='paragraph paragraph-3'>
                Aside from my professional endeavors, I have been greatly passionate about fitness and 
                personal wellness. I have consistently pursued fitness since highschool, recently seeking 
                to branch out into a mix between powerliting and bodybuilding. I have since built structured 
                and thought out regiments for a number of my peers looking to enter the fitness world. 
                A dream of mine would be to ideally combine my passions within software and tech development 
                with health and wellness. A future project that I have begun recently includes an application 
                incorporating software into fitness. The program seamlessly takes user input in regards to their health, 
                fitness, and nutritional goals. Using this information, the software would strategically output 
                scientifically accurate and backed regiments to help users attain their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About