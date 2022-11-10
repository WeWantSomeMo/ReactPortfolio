import React from 'react'
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from './components/AboutMe';
import Contact from './components/Contact.js';
import Footer from './components/Footer'
import Projects from './components/Projects'
import WeatherBoi from './components/WeatherBoi';
import Resume from './components/Resume';
import ThanksforGiving from './components/ThanksforGiving';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element= {<About/>} />
          <Route path="/projects" element= {<Projects/>}></Route>            
          <Route path="/projects/weatherboi" element = {<WeatherBoi/>}></Route>
          <Route path="/projects/thanksforgiving" element ={<ThanksforGiving/>}></Route>
          {/* <Route path="/projects/showbiz-baby" element = {<ProjectDetails/>}></Route> */}
          <Route path="/resume" element= {<Resume/>} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>
        </BrowserRouter> 
        <Footer/>
    </div>
  );
}

export default App;
