import React from "react"
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'

const Socials = () => {
    return (
        <div className="socials">
            <a href='https://www.linkedin.com/in/ryan-almasi-493447251/' 
                className="socials-el"> 
                <BsLinkedin /> 
            </a>
            <a href='https://github.com/ryanalmasi' className="socials-el"> 
                <BsGithub /> 
            </a>
            <a href='https://www.instagram.com/ralmasifit/' className='socials-el'> 
                <BsInstagram /> 
            </a>
        </div>
    )
}
export default Socials