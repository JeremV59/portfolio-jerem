import React from "react";
import ButtonGroup from "./ButtonGroup";
import "./header.css";
import ReactLogo from "../../assets/reactjs-logo.jpg";

const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jérémy Vaneste</h1>
        <h5 className="text-light">Développeur Front-End</h5>
        <ButtonGroup></ButtonGroup>
        <img className="me" src={ReactLogo} alt="Jérémy"></img>
      </div>
    </header>
  );
};

export default Header;
