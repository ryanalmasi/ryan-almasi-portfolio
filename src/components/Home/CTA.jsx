import React from "react"
import Resume from '../../Assets/Ryan_Almasi-Resume.pdf'
import './Home.scss'

const CTA = () => {
    return (
      <div className="CTA">
          <a href={Resume} download className='btn resume-el'>RESUME</a>
          <a href="#contact" className='btn'>CONTACT ME</a>
      </div>
    )
  }
  
  export default CTA