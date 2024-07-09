import React from 'react';
import './contact.css'
import manimg from "../../assets/contact-img.svg"
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";


const Contact = (props) => {



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_143yscl', 'template_5pupvuf', e.target,"kgjiQ3FPZZvKBqneo" 
      
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };







  return (
    <>
       <div id='contact' ref={props.newref}>
    
       <img className="manimg" src={manimg}></img>
       <div className='dx1'>
        <h2 className='word' >Get In Touch</h2> 
        <div >  
          <form  onSubmit={sendEmail}  className='dx2'>
        
              <div className='dx4'>
                <input type='text' name='user_fname' placeholder='First Name' />
                <input type='text' name='user_lname' placeholder='Last Name'/>
              </div>
              <div className='dx4'>
                <input type='email' name='user_email' placeholder='Email Adress' />
                <input type='text'  name='user_number' placeholder='Phone Number'/>
              </div>
               <textarea name='message' className='txtarea' placeholder='Message'/>
               
               <button type='submit' value='Send' className='subm'>Send</button>
          </form>
        
        </div>
        
       </div>
      </div>


     
    </>
  );
}

export default Contact;
