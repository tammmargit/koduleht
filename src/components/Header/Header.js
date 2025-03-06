import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Kontrollime scrolli positsiooni
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Kontrollime, kas oleme tumeda taustaga sektsioonis
      const sections = document.querySelectorAll('section');
      const currentPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
          // Kontrollime sektsiooni tausta värvi
          const backgroundColor = window.getComputedStyle(section).backgroundColor;
          const isDark = isColorDark(backgroundColor);
          setIsDarkBackground(isDark);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funktsioon värvi heleduse kontrollimiseks
  const isColorDark = (color) => {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const brightness = (parseInt(rgb[0]) * 299 + 
                        parseInt(rgb[1]) * 587 + 
                        parseInt(rgb[2]) * 114) / 1000;
      return brightness < 128;
    }
    return true;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isDarkBackground ? 'dark-bg' : 'light-bg'}`}>
      <nav className="nav">
        <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-container">
            <svg className="m-logo-svg" viewBox="0 0 100 100" width="40" height="40">
              <path 
                className="m-path" 
                d="M20 80 L20 20 L50 60 L80 20 L80 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
          </div>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Minust</a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Tehtud tööd</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Oskused</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Kontakt</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
