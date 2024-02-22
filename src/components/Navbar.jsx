import React from 'react';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Homepage from './Homepage';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
  return (
    <>

   
    <div className="container mt-4" style={{height:'2cm'}}>
              <ul className='d-flex  list-unstyled me-3 justify-content-center'>
                <li><a href='#home' className='ms-3 text-decoration-none text-warning'>Home</a></li>
                <li><a href='#about' className='ms-3 text-decoration-none text-light'>About</a></li>
                <li><a href='#skills' className='ms-3 text-decoration-none text-light'>Skills</a></li> 
                <li><a href='#projects' className='ms-3 text-decoration-none text-light'>Projects</a></li>
                <li><a href='#contact' className='ms-3 text-decoration-none text-light'>Contact</a></li>             
               </ul>
          </div>

    </>
  );
}

export default Navbar;
