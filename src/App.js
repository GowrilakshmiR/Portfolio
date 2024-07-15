import React from 'react';
import Togglebutton from './component/sidebar/toggle/Togglebutton';
import Projects from './component/Projects/Projects';
import About from './component/About/About'

import Home from './component/Home/Home';
import Education from './component/Education/Education';
import Contact from './component/Contact/Contact';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cv from './component/cv/Cv';


const App = () => {
  return (
   <>
   <BrowserRouter basename='/portfolio1'>
   <Routes>
    <Route >
    <Route path="/" element={<Togglebutton/>}/>
    <Route path='/cv' element={<Cv/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
     
   </>
  );
}

export default App;
