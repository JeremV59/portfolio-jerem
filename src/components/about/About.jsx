import React from "react";
import "./about.css";
import MyPicture from "../../assets/jeremy.jpg";
import { IoBagCheck, IoFolderOpen, IoSchool } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h2>A propos de moi</h2>

      <div className="container about_container">
        <div className="about_left_content">
          <div className="about_image">
            <img src={MyPicture} alt="about_image"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <IoBagCheck className="about_icon"></IoBagCheck>
              <h5>Experiences</h5>
              <small>Plus d'un an d'expérience</small>
            </article>
            <article className="about_card">
              <IoSchool className="about_icon"></IoSchool>
              <h5>Diplomes</h5>
              <small>Bac +3 en cours d'obtention</small>
            </article>
            <article className="about_card">
              <IoFolderOpen className="about_icon"></IoFolderOpen>
              <h5>Projets</h5>
              <small>8 projets réalisés à mon actif</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptatem beatae rerum itaque accusamus quisquam, consectetur
            voluptate maiores sint ducimus hic ex impedit officiis porro dolorum
            tempore. Commodi, cum placeat?
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
