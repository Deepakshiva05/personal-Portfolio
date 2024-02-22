import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'lottie-react';
import animate from '../components/animation_lmuvovod.json';
import animate1 from '../components/animation_lmuvpdcr.json'
import calci from '../components/calci.json';
import sun from '../components/sun.json';
import movie from '../components/movie.json';
import organic from '../components/organic.json'
import 'aos/dist/aos.css';
const Projects = () => {
  return (
    <>
      <section id='projects' style={{minHeight:'165vh'}}>
        <div className="container mt-5">
            <h1 className='text-light text-center'>My <span className='text-warning'>Works</span></h1>
                <div className="cards d-flex justify-content-evenly mt-5 flex-wrap">
                <div className="card bg-dark m-4" style={{width:'22rem', height:'7cm'}} data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="card-img-top">
                            <Lottie animationData={sun} style={{height:'4cm'}}></Lottie>
                        </div>
                        <div className="card-body">
                            <h3 className='text-light'>Weather App</h3>
                            <a className='btn btn-sm btn-outline-light' href='https://checksky.netlify.app'>Live Demo</a>
                        </div>
                    </div>
                    <div className="card bg-dark m-4" style={{width:'22rem', height:'7cm'}}  data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="card-img-top">
                            <Lottie animationData={movie} style={{height:'4cm'}}></Lottie>
                        </div>
                        <div className="card-body">
                            <h3 className='text-light'>Movie App</h3>
                            <a className='btn btn-sm btn-outline-light' href='https://cinecraft.netlify.app'>Live Demo</a>
                        </div>
                    </div>
                    <div className="card bg-dark m-4" style={{width:'22rem', height:'7cm'}}  data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="card-img-top">
                            <Lottie animationData={organic} style={{height:'4cm'}}></Lottie>
                        </div>
                        <div className="card-body">
                            <h3 className='text-light'>Grocery App</h3>
                            <a className='btn btn-sm btn-outline-light' href='https://bigfruitz.netlify.app'>Live Demo</a>
                        </div>
                    </div>
                    <div className="card bg-dark m-4" style={{width:'22rem', height:'7cm'}}  data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="card-img-top">
                            <Lottie animationData={calci} style={{height:'4cm'}}></Lottie>
                        </div>
                        <div className="card-body">
                            <h3 className='text-light'>Calculator</h3>
                            <a className='btn btn-sm btn-outline-light' href='https://calcijsx.netlify.app'>Live Demo</a>
                        </div>
                    </div>
                </div>
                
            
        </div>
      </section>
    </>
  );
}

export default Projects;
