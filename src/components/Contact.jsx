import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'lottie-react';
import anime from './telegram.json';
import contact from '../components/contact.json';
import teleanim from '../components/telegram.json';
import instaanim from '../components/instagram.json';
import likedanim from '../components/linkedin.json';
import whatsanim from '../components/whatsapp.json';
import Axios from 'axios';


const Contact = () => {

const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[message,setMessage]=useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  Axios.post('http://localhost:4000/contact', {
    name: name,
    email:email,
    message:message

  })
}

  return (
    <>
      <section id='contact' style={{height:'100vh',marginTop:'2cm',marginBottom:'2.5cm'}}>
        <div className="container">
      <h1 className='text-light text-center'>Contact<span className='text-warning'> Us</span></h1>
      <br></br>
      <h5 className='text-center text-light mb-4'>Feel Free to Ask me For any Queries.</h5>
      <div className="row">
      <div className="col-lg-6 col-md-6 d-flex flex-direction-column justify-content-center order-2"  data-aos="zoom-in-left" data-aos-duration="1000">
      <form className=' justify-content-center' onSubmit={handleSubmit}>
        
        <input type='text' placeholder='Your Name' id='box' className='form-control  text-light' onChange={(e)=>{setName(e.target.value)}}></input>
        <input type='text' placeholder='Your Email'id='box1'className='form-control  text-light' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type='text' placeholder='Your Message'id='boxs' className='form-control  text-light' onChange={(e)=>{setMessage(e.target.value)}}></input>
        <button type="submit" className='btn btn-outline-light justify-content-center mt-5' style={{width:'5cm'}}>Submit</button>
      
      </form>
      </div>
      <div className="col-md-6 col-lg-6 order-1"  data-aos="zoom-in-right" data-aos-duration="1000">
          <Lottie animationData={contact} style={{height:'9cm'}}></Lottie>
      </div>
      </div>
      <div className="container">
        <div className="row">
          
            
        </div>
      </div>
      {/* <div className="container mt-5">
        <ul className='d-flex justify-content-center'>
            <Lottie animationData={teleanim} style={{height:'1.5cm'}}></Lottie>
            <Lottie animationData={instaanim} style={{height:'1.5cm'}}></Lottie>
            <Lottie animationData={whatsanim} style={{height:'1.5cm'}}></Lottie>
            <Lottie animationData={likedanim} style={{height:'1.5cm'}}></Lottie>
        </ul>
        <h5 className='text-center text-light'>@Copyrights 2023 By Deepak Shiva</h5>
    </div> */}
      </div>
      </section>
    </>
  );
}

export default Contact;
