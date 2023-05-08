import { React, useState } from "react";
import "./navbar.css";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { BiBookOpen, BiMessageDetail } from "react-icons/bi";

const Navbar = () => {
  const [iconIsActive, setIconsIsActive] = useState("#");

  const changeActiveIcon = (iconRef) => {
    setIconsIsActive(iconRef);
  };

  return (
    <nav>
      <a
        onClick={() => changeActiveIcon("#")}
        className={iconIsActive === "#" ? "active" : ""}
        href="#"
      >
        <GoHome></GoHome>
      </a>
      <a
        className={iconIsActive === "#about" ? "active" : ""}
        onClick={() => changeActiveIcon("#about")}
        href="#about"
      >
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a
        className={iconIsActive === "#competences" ? "active" : ""}
        onClick={() => changeActiveIcon("#competences")}
        href="#competences"
      >
        <BsAward></BsAward>
      </a>
      <a
        className={iconIsActive === "#portfolio" ? "active" : ""}
        onClick={() => changeActiveIcon("#portfolio")}
        href="#portfolio"
      >
        <BiBookOpen></BiBookOpen>
      </a>
      <a
        className={iconIsActive === "#contact" ? "active" : ""}
        onClick={() => changeActiveIcon("#contact")}
        href="#contact"
      >
        <BiMessageDetail></BiMessageDetail>
      </a>
    </nav>
  );
};

export default Navbar;
