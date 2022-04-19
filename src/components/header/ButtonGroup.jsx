import React from "react";
import MonCV from "../../assets/cv-jeremy.pdf";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <a href={MonCV} download className="btn">
        Télécharger mon CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contactez-moi
      </a>
    </div>
  );
};

export default ButtonGroup;
