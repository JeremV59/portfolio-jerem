import React from "react";
import "./footer.css";
import { GrReactjs } from "react-icons/gr";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container_footer">
      <div className="main_part_footer">
        <GrReactjs className="footer_icon"></GrReactjs>
        <a href="#">Accueil</a>
        <a href="#about">A propos</a>
        <a href="#competences">Compétences</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="second_part_footer">
        <small>&copy; Jérémy Vaneste</small>
        <div className="socials_icon_container">
          <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-vaneste-78a84b22b/">
            <BsLinkedin className="social_icon"></BsLinkedin>
          </a>

          <a href="https://github.com/jeremyv59">
            <BsGithub className="social_icon"></BsGithub>
          </a>
          <a>
            <BsInstagram className="social_icon"></BsInstagram>
          </a>
          <a>
            <BsTwitter className="social_icon"></BsTwitter>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
