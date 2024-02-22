import React from 'react';
import Lottie from 'lottie-react';
import back from '../components/db3.json';
import front from '../components/fr1.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  return (
    <>
    <section id='skills'>
        <div className="container">
            <h1 className='text-light text-center'>My <span className='text-warning'>Skills</span></h1>
                <div className="cards d-flex align-items-left justify-content-evenly mt-5 flex-wrap">
                    <div className="card bg-dark m-4 " style={{width:'22rem', height:'7cm'}} data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="card-img-top">
                            <Lottie animationData={front} style={{height:'4cm'}}></Lottie>
                        </div>
                        <div className="card-body">
                            <h1 className='text-light'>FrontEnd</h1>
                            <p className='text-light'>Html, Css, Js, Bootstrap & React Js</p>
                        </div>
                    </div>
                    <div className="card bg-dark m-4" style={{width:'22rem', height:'7cm'}}  data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="card-img-top">
                            <Lottie animationData={back} style={{height:'4cm'}}></Lottie>
                        </div>
                        <div className="card-body">
                            <h1 className='text-light'>BackEnd</h1>
                            <p className='text-light'>Node Js, Express JS & MongoDb</p>
                            {/* <button className='btn btn-sm btn-outline-light'>Live Demo</button> */}
                        </div>
                    </div>
                    
                </div>
                
            
        </div>
      </section>
    
    </>
  );
}

export default Skills;
