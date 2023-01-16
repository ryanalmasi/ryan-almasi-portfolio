import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { Route, Routes, Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
