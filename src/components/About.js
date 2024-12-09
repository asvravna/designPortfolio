import React from 'react'
import educationicon from '../assets/education.png'
import experienceicon from '../assets/experience.png'
import arrow from '../assets/arrow.png'


function About(){
    const handleIconClick = (url) => {
        window.open(url, '_blank');
      };
    return (
        <>
        <div className="about-section">
        <section id="about"> 
            <div className="text-box">
                <p className="section__text__p1"> Get to know more</p>
                <h1 className=" title"> About me</h1>
            </div>
            <div className="section-container">
                <div className=" about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src={experienceicon} alt="Experience icon"
                            className="icon"
                            />
                            <h3>Experience</h3>
                            <p>2+ years Software developement</p>
                        </div>
                        <div className="details-container"
                            onClick={() => handleIconClick('https://www.uio.no/studier/program/inf-design/')}>
                            <img 
                            src={educationicon} alt="Education icon"
                            className="icon"
                            />
                            <h3>Education</h3>
                            <p>2nd year of B.Sc Bachelors degree Informatics: Design, Use and Interaction University of Oslo</p>
                         </div>
                    </div>
                    <div className="text-container">
                        <p>
                            I am a 21 year old student from Tromsø, studying informatics at University of Oslo. I am currently studying research methods in Human-Computer-Interaction, as well as how public services and legal systems can automated to be more efficient. I have a great interest in software development, and I like working with both backend and frontend technologies.
                        </p>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="Arrow icon" className="icon arrow"
            onClick={() => (window.location.href = './#experience')}
            />
        </section>
    </div>
    </>
    )
}

export default About;