import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import teleanim from '../components/telegram.json';
import instaanim from '../components/instagram.json';
import likedanim from '../components/linkedin.json';
import whatsanim from '../components/whatsapp.json';
import Lottie from 'lottie-react';

const Footer = () => {
  return (
    <>
    <div className="container" style={{marginTop:"2cm", minHeight:"3cm"}}>
        <ul className='d-flex justify-content-center'>
           <Lottie animationData={teleanim} style={{height:'1.5cm'}} ></Lottie>
            <a href='https://www.instagram.com/iamshiva_offl?igsh=ZHBncmFhdHJ2aDd5'><Lottie animationData={instaanim} style={{height:'1.5cm'}}></Lottie></a>
            <Lottie animationData={whatsanim} style={{height:'1.5cm'}}></Lottie>
            <a href='https://www.linkedin.com/in/deepak-shiva-m-3186b8221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><Lottie animationData={likedanim} style={{height:'1.5cm'}}></Lottie></a>
        </ul>
        <h5 className='text-center text-light'>@Copyrights 2023 By Deepak Shiva</h5>
    </div>
    
    </>
  );
}

export default Footer;
