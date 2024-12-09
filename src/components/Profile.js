import React from 'react';
import profileImg from '../assets/about-pic.jpg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'


function About(){
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
    return (
        <>
        <div className="profile-section"> 
            <section id= "profile"> 
                <div className="section_pic-container">
                    <img src={profileImg}
                        alt="Anna Ravna profile picture "
                        className="about-pic"
                        />
                </div>
                    <div className="section__text">
                        <p className= "section__text__p1"> Hello I'm </p>
                        <h1 className="profile-title">Anna Sofie Vylka Ravna</h1>
                        <p className="section__text__p2">Developer & UX-designer</p>
                    <div className="btn-container">
                    <button className="btn btn-color-2"
                        onClick={() => openInNewTab('../CV_english2.pdf')}
                    >
                    Download CV
                    </button>
                    <button className="btn btn-color-2"
                        onClick={() => (window.location.href = './#contact')}
                    >
                    Contact info
                    </button>
                </div>
                    <div id ="socials-container">
                        <img src={linkedin} alt="My LinkedIn profile"
                        className="icon"  onClick={() => openInNewTab('https://www.linkedin.com/in/anna-sofie-vylka-ravna-2849ba284/')}
                        />
                        <img src={github} alt="My GitHub profile"
                        className="icon" onClick={() => openInNewTab('https://github.com/asvravna')}
                        />
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}

export default About;

