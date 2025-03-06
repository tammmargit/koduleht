import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Tere! Mina olen Margit";
  const [index, setIndex] = useState(0);

  const tick = useCallback(() => {
    if (index < fullText.length) {
      setText(prev => prev + fullText[index]);
      setIndex(prev => prev + 1);
    }
  }, [fullText, index]);

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, [tick]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-left">
          <h1>{text}</h1>
          <div className="tagline">
            <p className="gradient-text">Loe rohkem</p>
          </div>

          <div className="highlight-box" onClick={() => scrollToSection('portfolio')}>
            <p>Minu projektid</p>
          </div>
          
          <button 
            className="contact-btn" 
            onClick={() => scrollToSection('skills')}
          >
            Oskused
          </button>
        </div>
        <div className="home-right">
        </div>
      </div>
    </section>
  );
};

export default Home;
