import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaCode } from 'react-icons/fa';

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
            
            <div className="contact-info">
              <a href="mailto:margit.tammeorg@hotmail.com" 
                 className="contact-link">
                <FaEnvelope />
                <span className="link-text">
                  <span className="label">EMAIL:</span>
                  margit.tammeorg@hotmail.com
                </span>
              </a>

              <a href="tel:+37253015324" 
                 className="contact-link">
                <FaPhoneAlt />
                <span className="link-text">
                  <span className="label">TELEFON:</span>
                  +372 5301 5324
                </span>
              </a>
            </div>

            <div className="command-line status-command">
              <span className="prompt">$</span>
              <span className="command">get_status</span>
            </div>
              
            <div className="contact-link status-message">
              <FaCode className="status-icon" />
              <p>That's basically it! Hetkel olen lihtsalt üks asjaarmastaja, kes püüab teha seda IT värki ja otsib vahvaid võimalusi arendajana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
