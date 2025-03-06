import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const textArray = [
    "Mina olen Margit",
  
    "Ma olen IT huviline",
    "See on minu kodu"
  ];
  
  const period = 1000;
  const [delta, setDelta] = useState(50);

  useEffect(() => {
    tick();
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, [tick]);

  const tick = () => {
    let i = loopNum % textArray.length;
    let fullText = textArray[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-left">
          <div className="text-animation-container">
            <h1 className="main-heading">Tere!</h1>
            <h2 className="typing-text">{text}<span className="cursor">|</span></h2>
          </div>
          
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
          {/* <img src={pilt} alt="Profile" /> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
