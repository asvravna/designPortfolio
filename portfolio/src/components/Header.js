import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.webp'; 

function Header() {

    return (
      <div className="App">
        <header className="App-header">
          <nav id="desktop-nav">
              <p className= "Logo_text_1"> A. S.</p>
              <img src={logo} alt="Anna Vylka Ravna Logo" className="logo-image" />
              <p className= "Logo_text_2"> Ravna </p>
            <div className="navbar-elements">
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#this-website">This website</a></li>
                </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  
  
  export default Header;