import React from 'react'
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from './components/AboutMe';
import Contact from './components/Contact.js';
import Footer from './components/Footer'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails';
import Resume from './components/Resume';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element= {<About/>} />
          <Route path="/projects" element= {<Projects/>}>
            <Route path="projects/:id" element = {<ProjectDetails/>}></Route>
          </Route>
          <Route path="/resume" element= {<Resume/>} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>
        </BrowserRouter> 
        <Footer/>
    </div>
  );
}

export default App;
