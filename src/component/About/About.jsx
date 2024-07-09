import React from 'react';
import './about.css';
import mountain from "../../assets/mountains.png"
import stars from "../../assets/stars.png"
import planet from "../../assets/planets.png"

import htmllogo from '../../assets/html.png'
import csslogo from '../../assets/css.png'
import mongo from '../../assets/mongodb.png'
import nodelogo from '../../assets/node.png'
import reactlogo from '../../assets/react.png'
import pythonlogo from '../../assets/python-logo-only.png'

const About = (props) => {
  return (
    <>
    <div id='about'  ref={props.newref}>
      <div className='box'>
     <h1 className='dc' >Skills5</h1>
        <div className='png'>
          <div className='fl'>
             <div className='circle'>
                 <img className='pg' src={htmllogo}></img>
             </div>
              <h3 style={{color:"white"}}>HTML</h3>
          </div>
           <div className='fl'>
           <div className='circle'>
                <img className='pg' src={csslogo}></img>
            </div>
            <h3 style={{color:"white"}}>CSS</h3>
           </div>
           <div className='fl'>
           <div className='circle'>
                <img className='pg' src={mongo}></img>
            </div>
            <h3 style={{color:"white"}}>MongoDB</h3>
           </div>
           <div className='fl'>
           <div className='circle'>
               <img className='pg' src={reactlogo}></img>
            </div>
            <h3 style={{color:"white"}}>React</h3>

           </div>
          <div className='fl'>
          <div className='circle'>
               <img className='pg' src={nodelogo}></img>
            </div>
            <h3 style={{color:"white"}}>Node</h3>
          </div>
          <div className='fl'>
             <div className='circle'>
                 <img className='pg' src={pythonlogo}></img>
             </div>
              <h3 style={{color:"white"}}>Python</h3>
          </div>
            
           
            
          
            
           
            

        </div>
      </div>
      
      {/* <img className='stars' src={stars}></img> */}
      {/* <img className='planet' src={planet}></img> */}
      <img className='mount' src={mountain}></img>
     
    </div>
      
    </>
  );
}

export default About;
