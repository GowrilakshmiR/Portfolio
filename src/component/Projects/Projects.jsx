import React from 'react'
import './projects.css'
import project1 from "../../assets/project-img1.png"
import img1 from '../../assets/zain1.png';
import img2 from '../../assets/zain2.png';
import img3 from '../../assets/zain3.png';
import img4 from '../../assets/zain4.png';
import img5 from '../../assets/zain5.png';
import img6 from '../../assets/zain6.png';
import e1 from '../../assets/e1.png';
import e2 from '../../assets/e2.png';
import e3 from '../../assets/e3.png';
import e4 from '../../assets/e4.png';
import e5 from '../../assets/e5.png';
import e6 from '../../assets/e6.png';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';


const Projects = (props) => {
  return (
    <>
    <div id='projects'  ref={props.newref}>
      <div className='pro'>
          <h1 className='txt'>Projects </h1>
          
          <div className='pro2'>
            <div className='scroll'>
              <div className='align'>
               <img className='img1' src={img1}></img>
               <img className='img1' src={img2}></img>
               <img className='img1' src={img3}></img>
               <img className='img1' src={img4}></img>
               <img className='img1' src={img5}></img>
               <img className='img1' src={img6}></img>
              </div>
              <div className='btn'>
                <a  href='https://portfoliosite100.netlify.app'><button className='bx'>Open</button></a>
                
              </div>
             
              
               
            </div>

            <div className='scroll'>
              <div className='align'>
               <img className='img1' src={e1}></img>
               <img className='img1' src={e2}></img>
               <img className='img1' src={e3}></img>
               <img className='img1' src={e4}></img>
               <img className='img1' src={e5}></img>
               <img className='img1' src={e6}></img>
              </div>
              <div className='btn'>
                <button className='bx'>Open</button>
              </div>
               
               
            </div>
            <div className='scroll'>
              <div className='align'>
               <img className='img1' src={p1}></img>
               <img className='img1' src={p2}></img>
               <img className='img1' src={p3}></img>
               <img className='img1' src={p4}></img>
               <img className='img1' src={p5}></img>
               <img className='img1' src={p6}></img>
              </div>

              <div className='btn'>
                <button className='bx'>Open</button>
              </div>
             
               {/* <div className='img2'>
                <a href="https://portfoliosite100.netlify.app">
                <button className='srcbt'>OPEN</button>
                </a>
                
               </div> */}
               
            </div>
            
     
     
      </div>
      </div>
    </div>
      
    </>
  )
}

export default Projects
