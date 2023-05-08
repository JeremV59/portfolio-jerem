import React from "react";
import ButtonGroup from "./ButtonGroup";
import "./header.css";
import Me from "../../assets/jeremy.jpg";

const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Bienvenue sur mon Portfolio !</h5>
        <h1>Jérémy Vaneste</h1>
        <h5 className="text-light">Développeur ReactJS</h5>
        <ButtonGroup></ButtonGroup>
        <div className="me">
          <img className="image_style" src={Me} alt="Jérémy"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
