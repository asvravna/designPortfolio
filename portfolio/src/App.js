import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile'; 
import About from './components/About';
import Experience from './components/Experience';
import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
        <Header />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />           
    </div>

  );
}


export default App;
