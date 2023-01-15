import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMail } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> 
        <AiOutlineHome/> 
      </a> 
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> 
        <AiOutlineUser/> 
      </a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}> 
        <AiOutlineBook/> 
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> 
        <AiOutlineMail/> 
      </a>
    </nav>
  )
}

export default Navbar