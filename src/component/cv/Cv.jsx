import React from 'react';
import './cv.css';
import { useNavigate } from 'react-router-dom';
import cv from "../../assets/Resume-Gowri Lakshmi R_page-0001.jpg"
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';




const Cv = () => {
    const navigate=useNavigate()
 function gohome(params) {
    navigate("/")
 }

 const pdf=useRef();
 const download=useReactToPrint({
       content:()=>pdf.current, 
       documentTitle:'Userdata',
       onAfterPrint:()=>alert("CV saved in PDF")
 });


  return (
    <>
    <div className='resume'>
      <div className='lt'>
             <button className='sub' onClick={gohome}>home</button>
             <button className='sub' onClick={download}>Download cv</button>
      </div>
            
      <div ref={pdf} style={{width:"100%"}}>
         <img className='cv1' src={cv}/> 
      </div>
             
            
             {/* <a href={cv} download><button className='sub' >Download cv</button></a> */}
    </div>
      
    </>
  );
}

export default Cv;
