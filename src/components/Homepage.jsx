import React from 'react';
import animation from '../components/animation_lmutqoq8.json';
import Lottie from 'lottie-react';
import hacker from '../components/hacker.json';
import resume from '../assets/DS-finalResume.pdf'

const Homepage = () => {
  return (
    <>
      <div className="container" style={{
        width:'100%',
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <div className="row">
            <div className="col-lg-6 order-2 col-md-6" data-aos="zoom-in-left" data-aos-duration="1000">
                <h3 className='text-light'>Hii There !</h3>
                <h1 className='text-light'>I am a <span className='text-warning'>Developer</span></h1>
                <p className='text-light'>Passionate frontend developer with expertise in HTML, CSS, JavaScript and React Js.Eager to contribute creativity and technical proficiency to dynamic development teams.</p>
                <a className='btn btn-outline-light' href={resume} download >Download Cv</a> <button className='btn btn-outline-light'>Hire Me</button>
                
            </div>
            <div className="col-lg-6 order-1 col-md-6" data-aos="zoom-in-right" data-aos-duration="1000">
                <Lottie animationData={hacker} style={{height:'10cm',marginTop:'-2cm'}}></Lottie>
            </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
