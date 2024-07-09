import React from 'react'
import './toggle.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
import { useRef } from 'react';
import Home from '../../Home/Home';
import About from '../../About/About';
import Skills from '../../About/About';
import Projects from '../../Projects/Projects';
import Education from '../../Education/Education';
import Contact from '../../Contact/Contact';
 


const Togglebutton = () => {
  const homeref=useRef(null)
  const aboutref=useRef(null)
  const skillref=useRef(null)
  const projectref=useRef(null)
  const eduref=useRef(null)
  const contactref=useRef(null)

  const [display, setdisplay] =useState(false);
  function openform(params) {
    setdisplay(true)
  }
  function closeform(params) {
    setdisplay(false)
    
  }
  function scroller(getdata) {
 window.scrollTo( {top:getdata.current.offsetTop,
                   behavior:"smooth"})

  }
  return (
    <>
      <div className='toggle'>
      <GiHamburgerMenu  onClick={openform} className='burger'/>
     {display&&<div className='content'>
      <MdCancel onClick={closeform} className='cancel'/>
        <div className='head'>
          <h1 onClick={()=>scroller(homeref)}>Home</h1>
          <h1 onClick={()=>scroller(aboutref)}>Skills</h1>
          {/* <h1 onClick={()=>scroller(skillref)}>Skills</h1> */}
          <h1 onClick={()=>scroller(projectref)}>Projects</h1>
          <h1 onClick={()=>scroller(eduref)}>Education</h1>
          <h1 onClick={()=>scroller(contactref)}>Contact</h1>
        </div>
      </div>}
      <Home newref={homeref} />
      <About  newref={aboutref} />
      {/* <Skills  newref={skillref} /> */}
      <Projects newref={projectref}/>
      <Education newref={eduref}/>
      <Contact newref={contactref}/>
      </div>
    </>
  )
}

export default Togglebutton
