import React from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Maki API Website",
      description: "C# ja .NET-põhine veebirakendus erinevate API-de demonstreerimiseks",
      image: "/api.jpg",
      tags: ["C#", ".NET", "API", "Azure"],
      features: [
        "AccuWeather API",
        "Chuck Norris API",
        "Kokteilide API",
        "FreeGames API"
      ],
      demoUrl: "https://makiapiwebsite-e4dqf7e8ghbparfn.canadacentral-01.azurewebsites.net/"
    },
    {
      id: 2,
      title: "Maki Chat App",
      description: "Reaalajas vestlusrakendus kasutajate suhtlemiseks",
      image: "/chat.jpg",
      tags: ["React", "Stream.io", "CSS"],
      features: [
        "Reaalajas vestlused",
        "Kasutajate autentimine",
        "Responsive disain"
      ],
      demoUrl: "https://makichatapp.netlify.app/"
    },
    {
      id: 3,
      title: "Foto Editor",
      description: "React-based fotoeditor AI integratsiooniga",
      image: "/popkorn.png",
      tags: ["React", "CSS", "AI"],
      features: [
        "Pildi töötlemine",
        "AI kirjeldused",
        "Filtrid"
      ],
      demoUrl: "https://tiny-meringue-894744.netlify.app/"
    },
    {
      id: 4,
      title: "Laohalduse Süsteem",
      description: "PHP/Laravel-põhine täislahendus laoseisu ja toodete haldamiseks",
      image: "/ladu.jpg",
      tags: ["PHP", "Laravel", "MySQL", "Filament"],
      features: [
        "Toodete ja laoseisu reaalajas jälgimine",
        "Toodete lisamine/kustutamine/liigutamine",
        "Ladude, riiulite, bokside süsteem",
        "Barcode genereerimine",
        "Kasutajate õiguste haldus"
      ]
    },
    {
      id: 5,
      title: "Korvpalli lepingute haldus",
      description: "Digitaalne platvorm lepingute ja arvete haldamiseks korvpalliklubile",
      image: "/basketball.jpg",
      tags: ["PHP", "Laravel", "Filament", "MySQL"],
      features: [
        "Avalik avalduste vorm, lepingute genereerimine",
        "Lepingute digitaalne kinnitamine",
        "Automaatne arvete genereerimine",
        "Mängijate andmebaas",
        "E-posti teavitused"
      ]
    },
    {
      id: 6,
      title: "Mänguasja poe XML toodete importimine",
      description: "Automatiseeritud süsteem XML-põhiseks toodete halduseks",
      image: "/xml.jpg",
      tags: ["PHP", "XML", "Laravel", "API"],
      features: [
        "XML failide automaatne töötlemine",
        "Toodete sünkroniseerimine",
        "Administreerimisliides",
      ]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h2>Tehtud tööd</h2>
        
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="project-slide">
              <div className="project-showcase-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-button"
                        >
                          <FaGithub /> Vaata koodi
                        </a>
                      )}
                      
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="demo-button"
                        >
                          <FaExternalLinkAlt /> Vaata Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-image-container">
                      <img src={project.image} alt={project.title} />
                    </div>
                    
                    <div className="project-details">
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-features">
                        <h4>Põhifunktsioonid:</h4>
                        <ul>
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
