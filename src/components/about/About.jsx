import React from "react";
import "./about.css";
import MyPicture from "../../assets/jeremy.jpg";
import { IoBagCheck, IoFolderOpen, IoSchool } from "react-icons/io5";
import ReactLogo from "../../assets/reactjs-logo.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Afin d'en savoir plus sur moi</h5>
      <h2>Petite présentation</h2>

      <div className="container about_container">
        <div className="about_left_content">
          <div className="about_image">
            <img src={ReactLogo} alt="about_image"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <IoBagCheck className="about_icon"></IoBagCheck>
              <h5>Expériences</h5>
              <small>1 an et demi de développement web </small>
            </article>
            <article className="about_card">
              <IoSchool className="about_icon"></IoSchool>
              <h5>Diplomes</h5>
              <small>Bac +3 en cours d'obtention</small>
            </article>
            <article className="about_card">
              <IoFolderOpen className="about_icon"></IoFolderOpen>
              <h5>Projets</h5>
              <small>+ de 8 projets à mon actif</small>
            </article>
          </div>

          <p>
            {`J'ai effectué une formation de Technicien Développeur (Niveau Bac +2) ainsi qu'un stage de 3 mois à la fin de celle-ci. J'ai ensuite completé avec une année d'alternance pour un diplome de concepteur développeur d'application (Niveau Bac +3)`}
          </p>

          <a href="#contact" className="btn btn-primary">
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
