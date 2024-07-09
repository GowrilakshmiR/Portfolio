import React from 'react'
import './home.css'
import Top from '../sidebar/top/Top'
import man from "../../assets/header-img.svg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Home = (props) => {

  const mynavigate=useNavigate()

  function open(){
      mynavigate("/cv")
  }
 
  
  return (
    <>
    <div id='home' ref={props.newref}>
      <Top/>
      <div className='header'>
      <div className='sidecon'>
        <h1 className='ct1'>Welcome to my portfolio</h1>
        <h1 className='ct2'>Hi! I'm <span>Web Developer</span></h1>
        <p className='para'>To obtain a challenging position in a high quality  engineering  environment where my resourceful experience and academic skills will add value to organizational operations.</p>
        <button className='cv' onClick={open}>View CV</button>
  
      </div>
      <img className='man' src={man}></img>
      </div>
     
    
    </div>
      
    </>
  )
}

export default Home
