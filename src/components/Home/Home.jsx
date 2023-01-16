import React from 'react'
import './Home.scss'
import CTA from './CTA'
import Socials from './Socials'


const Home = () => {
    return (
        <header id='header'>
            <div className='container header-cont'>
                <div className='intro'>
                    <h1 className='logo-header'>
                        <span className='logo'>&apos; RYAN</span><span className='logo'>&nbsp;ALMASI &apos;</span>
                    </h1>
                </div>
                <h3> &lt; /&gt; </h3>
                <h2> Software Engineering Co-op Student at the University of Alberta </h2>
                <CTA />
                <Socials />
            </div>
        </header>
    )
}

export default Home