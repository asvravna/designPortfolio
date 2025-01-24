import React from 'react';
import emailicon from '../assets/email.png';
import linkedinicon from '../assets/linkedin.png';


function Contact(){
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="contact-section">
            <section id="contact">
                <p className="section__text__p1"> Get in touch</p>
                <h1 className="title"> Contact me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <img src={emailicon}
                        className="icon contact-icon"
                    />
                    <p><a href="mailto:ansvravna@gmail.com"> ansvravna@gmail.com</a></
                    p>
                    </div>
                    <div className="contact-info-container">
                        <img src={linkedinicon} alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p><a onClick={() => openInNewTab('https://www.linkedin.com/in/anna-ravna-2849ba284/')}> 
                    LinkedIn</a></
                    p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
