import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import animation from '../components/instagram.json';
import Lottie from 'lottie-react';
import robo from '../components/robo.json';

const About = () => {
  return (
    <>
    <section id='about'>
    <div className="container">
      <div className="row d-flex flex-wrap">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-5" data-aos="zoom-in-left" data-aos-duration="1000">
          <Lottie animationData={robo}></Lottie>
        </div>
        <div className="col-lg-6 col-md-6 mt-5"style={{marginTop:'1cm'}}  data-aos="zoom-in-right" data-aos-duration="1000">
        <h1 className='text-light text-center mt-5'>About <span className='text-warning'>Me</span></h1>
        <div className="row mt-5">
          <h5 className='text-light'>My self <span className='text-warning'>M.Deepak Shiva </span>Final year Student
           Persueing Computer science and Engineering at S.A Engineering College.
           {/* <h4 className='text-warning'>Tech Stack :<span className='text-light'>Mern Stack</span>.</h4>
           <h4 className='text-warning'>Domain :<span className='text-light'>Fullstack Web Development</span>.</h4> */}
           <h5 className='text-warning'>Languages :<span className='text-light'>HTML , CSS , JavaScript , Bootstrap , React Js , MongoDb , Node JS , C Programming</span>.</h5>
           <h4 className='text-warning'>Educational Qualifications :</h4>
           <ul>
            <li>UG - 8.51 Cgpa</li>
            <li>HSE - 64.66 %</li>
            <li>SSLC - 82 %</li>
           </ul>
           </h5>
        </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default About;
