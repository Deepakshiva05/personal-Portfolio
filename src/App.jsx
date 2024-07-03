import React, { useEffect } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])
 
 

  return (
    <>
    <Navbar/>
   <Homepage/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>

  

    </>
    
  )
}

export default App
