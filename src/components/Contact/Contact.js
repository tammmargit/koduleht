import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Võta ühendust</h2>
        
        <div className="contact-terminal">
          <div className="terminal-header">
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
          </div>
          
          <div className="terminal-content">
            <div className="command-line">
              <span className="prompt">$</span>
              <span className="command">get_contact_info</span>
            </div>
            
            <div className="contact-links">
              <a href="mailto:sinu.email@gmail.com" className="contact-link">
                <FaEnvelope />
                <span className="link-text">
                  <span className="label">EMAIL:</span>
                  margit.tammeorg@hotmail.com
                </span>
              </a>
              
              <a 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="contact-link">
                <FaPhoneAlt />
                <span className="link-text">
                  <span className="label">PHONE NUMBER:</span>
                  +372 5301 5324
                </span>
              </a>
              
              {/*
              <a href="https://github.com/tammmargit" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="contact-link">
                <FaGithub />
                <span className="link-text">
                  <span className="label">GITHUB:</span>
                  /tammmargit
                </span>
              </a>
              */}
            </div>
            

            <div className="command-line">
              <span className="prompt">$</span>
              <span className="command">get_status</span>
            </div>
            
            <div className="status-message">
              <FaCode className="status-icon" />
              <p>That's basically it! Hetkel olen lihtsalt üks asjaarmastaja, kes püüab teha seda IT värki siin ja otsib põnevaid võimalusi arendajana. 
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
