import React from 'react'
import insta from '../../../assets/instagram.png'
import whatsapp from '../../../assets/whatsapp.png'
import linkedin from '../../../assets/linkedin.png'
import '../top/top.css'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const Top = () => {
   
     const nav=useNavigate()
    function contact(params) {
        nav("/contact")
    } 


  return (
    <> 
    <div className='tf'>
    <div className='topbar'>
    <h1 className='toptxt'>GOWRI R</h1>
    <div className='top7'>
      <div className='top'>
          <a href='https://www.instagram.com/gowri_rv?igsh=azRubmZua2dodGM1'>< BsInstagram className='ic1'/></a>
          <a href='https://www.linkedin.com/in/gowrilakshmir007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedinIn className='ic1' /></a>
          <FaWhatsapp className='ic1'/>


          
      </div>
          
          <div>
          <button className='btt' onClick={contact}>Let's connect</button>
          </div>
         

    </div>
    </div>
    </div>
    
    
    
    
   


      
    </>
  )
}

export default Top
