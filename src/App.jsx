import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import './App.css';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
    <div className='overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300
    selection:text-cyan-900 '>
    <div className='fixed top-0 -z-10 h-full w-full'></div>
    
    <div className='container mx-auto px-8'>
    <Navbar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
    
    
    
    </div>
    </>

  )
}

export default App