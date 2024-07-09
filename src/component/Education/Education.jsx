import React from 'react';
import './education.css'
import girl from '../../assets/girl.png';

const Education = (props) => {
  return (
    <>
      <div id='education'  ref={props.newref}>
      <div className='pro1'>
           <h1 className='hi'>Education</h1>
           <div className='inner'>
              <img className='girl' src={girl}/>
              <div className='inner1'>
                 <div className='inner2'>
                  <h2>B.E(CSE)</h2>
                  <h4>PSRR College Of Engineering,Sivakasi</h4>
                  <h4>2019-2023</h4>
                  <h4>84.4%</h4>
              </div>
                 <div className='inner2'>
                  <h2>HSC</h2>
                  <h4>Govt Girls Hr Sec School,Thiruthangal</h4>
                  <h4>2019</h4>
                  <h4>69.17%</h4>

                 </div><div className='inner2'>
                  <h2>SSLC</h2>
                  <h4>Govt Girls Hr Sec School,Thiruthangal</h4>
                  <h4>2017</h4>
                  <h4>87.6%</h4>

                 </div>
              </div>
           </div>
      </div>
       

      </div>
    </>
  ); 
}

export default Education;
