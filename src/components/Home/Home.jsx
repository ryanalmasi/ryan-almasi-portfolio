import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['R', 'y', 'a', 'n']
    const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`$(letterClass) _12`}>i,</span>
                        
                        <br />

                        <span className={`$(letterClass) _13`}>I,</span>
                        <span className={`$(letterClass) _14`}>'m</span>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            setArray={nameArray}
                            idx={15}
                        />
                        
                        <br />

                        <AnimatedLetters
                            letterClass={letterClass}
                            setArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Software Engineering Co-op Student</h2>
                    <Link to='/contact' className='flat-button'>
                        CONTACT ME
                    </Link>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Home