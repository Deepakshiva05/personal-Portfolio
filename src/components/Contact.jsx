import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Lottie from 'lottie-react';
import anime from './telegram.json';
import contact from '../components/contact.json';
import teleanim from '../components/telegram.json';
import instaanim from '../components/instagram.json';
import likedanim from '../components/linkedin.json';
import whatsanim from '../components/whatsapp.json';
import Axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('https://personal-portfolio-ukcv.onrender.com/contact', {
        name: name,
        email: email,
        message: message
      });
      setModalMessage('Message sent successfully!');
      setShowModal(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <section id='contact' style={{ height: '110vh', marginTop: '6cm', marginBottom: '2cm' }}>
        <div className="container">
          <h1 className='text-light text-center'>Contact<span className='text-warning'> Us</span></h1>
          <br></br>
          <h5 className='text-center text-light mb-4'>Feel Free to Ask me For any Queries.</h5>
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex flex-direction-column justify-content-center order-2" data-aos="zoom-in-left" data-aos-duration="1000">
              <form className=' justify-content-center' onSubmit={handleSubmit}>
                <input type='text' placeholder='Your Name' id='box' className='form-control  text-light' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Your Email' id='box1' className='form-control  text-light' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='Your Message' id='boxs' className='form-control  text-light' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" className='btn btn-outline-light justify-content-center mt-5' style={{ width: '5cm' }}>Submit</button>
              </form>
            </div>
            <div className="col-md-6 col-lg-6 order-1" data-aos="zoom-in-right" data-aos-duration="1000">
              <Lottie animationData={contact} style={{ height: '9cm' }}></Lottie>
            </div>
          </div>
          <div className="container">
            <div className="row">
            </div>
          </div>
          <div className="container" style={{ marginTop: "2cm", minHeight: "3cm" }}>
            <ul className='d-flex justify-content-center'>
              <Lottie animationData={teleanim} style={{ height: '1.5cm' }} ></Lottie>
              <a href='https://www.instagram.com/iamshiva_offl?igsh=ZHBncmFhdHJ2aDd5'><Lottie animationData={instaanim} style={{ height: '1.5cm' }}></Lottie></a>
              <Lottie animationData={whatsanim} style={{ height: '1.5cm' }}></Lottie>
              <a href='https://www.linkedin.com/in/deepak-shiva-m-3186b8221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><Lottie animationData={likedanim} style={{ height: '1.5cm' }}></Lottie></a>
            </ul>
            <h5 className='text-center text-light'>@Copyrights 2023 By Deepak Shiva</h5>
          </div>
        </div>
      </section>

      {/* Modal for Success Message */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <p>{modalMessage}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contact;



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Lottie from 'lottie-react';
// import anime from './telegram.json';
// import contact from '../components/contact.json';
// import teleanim from '../components/telegram.json';
// import instaanim from '../components/instagram.json';
// import likedanim from '../components/linkedin.json';
// import whatsanim from '../components/whatsapp.json';
// import Axios from 'axios';


// const Contact = () => {

// const[name,setName]=useState('');
// const[email,setEmail]=useState('');
// const[message,setMessage]=useState('');

// const handleSubmit = (e) => {
//   e.preventDefault();
//   Axios.post('http://localhost:4000/contact', {
//     name: name,
//     email:email,
//     message:message

//   })
// }

//   return (
//     <>
//       <section id='contact' style={{height:'110vh',marginTop:'6cm',marginBottom:'2cm'}}>
//         <div className="container">
//       <h1 className='text-light text-center'>Contact<span className='text-warning'> Us</span></h1>
//       <br></br>
//       <h5 className='text-center text-light mb-4'>Feel Free to Ask me For any Queries.</h5>
//       <div className="row">
//       <div className="col-lg-6 col-md-6 d-flex flex-direction-column justify-content-center order-2"  data-aos="zoom-in-left" data-aos-duration="1000">
//       <form className=' justify-content-center' onSubmit={handleSubmit}>
        
//         <input type='text' placeholder='Your Name' id='box' className='form-control  text-light' onChange={(e)=>{setName(e.target.value)}}></input>
//         <input type='text' placeholder='Your Email'id='box1'className='form-control  text-light' onChange={(e)=>{setEmail(e.target.value)}}></input>
//         <input type='text' placeholder='Your Message'id='boxs' className='form-control  text-light' onChange={(e)=>{setMessage(e.target.value)}}></input>
//         <button type="submit" className='btn btn-outline-light justify-content-center mt-5' style={{width:'5cm'}}>Submit</button>
      
//       </form>
//       </div>
//       <div className="col-md-6 col-lg-6 order-1"  data-aos="zoom-in-right" data-aos-duration="1000">
//           <Lottie animationData={contact} style={{height:'9cm'}}></Lottie>
//       </div>
//       </div>
//       <div className="container">
//         <div className="row">
          
            
//         </div>
//       </div>
//       <div className="container" style={{marginTop:"2cm", minHeight:"3cm"}}>
//         <ul className='d-flex justify-content-center'>
//            <Lottie animationData={teleanim} style={{height:'1.5cm'}} ></Lottie>
//             <a href='https://www.instagram.com/iamshiva_offl?igsh=ZHBncmFhdHJ2aDd5'><Lottie animationData={instaanim} style={{height:'1.5cm'}}></Lottie></a>
//             <Lottie animationData={whatsanim} style={{height:'1.5cm'}}></Lottie>
//             <a href='https://www.linkedin.com/in/deepak-shiva-m-3186b8221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><Lottie animationData={likedanim} style={{height:'1.5cm'}}></Lottie></a>
//         </ul>
//         <h5 className='text-center text-light'>@Copyrights 2023 By Deepak Shiva</h5>
//     </div>
//       {/* <div className="container mt-5">
//         <ul className='d-flex justify-content-center'>
//             <Lottie animationData={teleanim} style={{height:'1.5cm'}}></Lottie>
//             <Lottie animationData={instaanim} style={{height:'1.5cm'}}></Lottie>
//             <Lottie animationData={whatsanim} style={{height:'1.5cm'}}></Lottie>
//             <Lottie animationData={likedanim} style={{height:'1.5cm'}}></Lottie>
//         </ul>
//         <h5 className='text-center text-light'>@Copyrights 2023 By Deepak Shiva</h5>
//     </div> */}
//       </div>
//       </section>
//     </>
//   );
// }

// export default Contact;
