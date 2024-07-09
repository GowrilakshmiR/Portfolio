import React from 'react'
import { Element } from 'react-scroll'
import "./scroll.css"
const Scroll = () => {
  return (
    <>
      <Element name="sec1" className='second'>
        <div>
            <h1>hello</h1>
        </div>
      </Element>
      <Element name="sec2" className='second'>
        <div>
            <h1>hello</h1>
        </div>
      </Element>
      <Element name="sec3" className='second'>
        <div>
            <h1>hello</h1>
        </div>
      </Element>
      <Element name="sec4" className='second'>
        <div>
            <h1>hello</h1>
        </div>
      </Element>
      <Element name="sec5" className='second'>
        <div>
            <h1>hello</h1>
        </div>
      </Element>
    </>
  )
}

export default Scroll
