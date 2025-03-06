import './About.css';
import React from 'react';
import margitPilt from '../../assets/images/margit.png';
import { FaBook, FaDumbbell, FaSnowboarding, FaGraduationCap, FaMusic } from 'react-icons/fa';
import { GiTennisRacket, GiTennisCourt } from 'react-icons/gi';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>Minust</h2>
        
        <div className="about-content">
          <div className="about-info">
            <div className="education-grid">
              <div className="education-card current">
                <span className="status-badge">Praegu</span>
                <h3>Noorem Tarkvaraarendaja</h3>
                <p>Tallinna Tehnikakõrgkool</p>
                <p className="year">2023 - ...</p>
              </div>

              <div className="education-card">
                <h3>Kehakultuuri Bakalaureus</h3>
                <p>Tallinna Ülikool</p>
                <p className="year">2020 - 2023</p>
              </div>
            </div>

            <div className="about-text">
              <p className="detail-text">
                Hetkel töötan lasteaias liikumisõpetajana, olen töö kõrvalt ka praktikal väikeses IT ettevõttes ja lõpetan vaikselt õpinguid TTHK-s.
              </p>
              <p className="detail-text">
                Üldiselt kui ma mingi ülesande või eesmärgi ette võtan, siis tihti peale ma kaon selle sisse tundideks, kuni on asi tehtud. Mu vabaaeg kulub peamiselt
                spordile, klaveri mängimisele ja erinevatele IT alastele ülesannetele.
              </p>
              <p className="detail-text">
                Kuigi IT kogemuste pagas pole küll eriliselt suur, siis huvi seda õppida on kindlalt suurem.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <img src={margitPilt} alt="Margit" />
          </div>
        </div>

        <div className="hobbies-section">
          <h3 className="hobbies-title">Vabaaeg</h3>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <FaMusic className="hobby-icon" />
              <h4>Klaver</h4>
            </div>

            <div className="hobby-card">
              <GiTennisCourt className="hobby-icon" />
              <h4>Padel</h4>
            </div>

            <div className="hobby-card">
              <GiTennisRacket className="hobby-icon" />
              <h4>Tennis</h4>
            </div>

            <div className="hobby-card">
              <FaSnowboarding className="hobby-icon" />
              <h4>Lumelauatamine</h4>
      
            </div>

            <div className="hobby-card">
              <FaBook className="hobby-icon" />
              <h4>Lugemine</h4>
            </div>

            <div className="hobby-card">
              <FaDumbbell className="hobby-icon" />
              <h4>Jõusaal</h4>
            </div>

            <div className="hobby-card">
              <FaGraduationCap className="hobby-icon" />
              <h4>IT</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
