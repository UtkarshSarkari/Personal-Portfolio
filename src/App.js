import React from 'react';
import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Education from './components/Education';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <Contact />
      <Copyright />
    </div>
  )
}
