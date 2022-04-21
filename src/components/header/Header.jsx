import React from "react";
import ButtonGroup from "./ButtonGroup";
import "./header.css";
import Me from "../../assets/jeremy.jpg";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jérémy Vaneste</h1>
        <h5 className="text-light">Développeur Front-End</h5>
        <ButtonGroup></ButtonGroup>
        <div className="me">
          <img className="image_style" src={Me} alt="Jérémy"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
