import { React, useState } from "react";
import "./navbar.css";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { BiBookOpen, BiMessageDetail } from "react-icons/bi";

const NavBarLink = ({ currentHash, href, children, onClick }) => {
  return (
    <a onClick={() => onClick(href)} aria-current ={currentHash === href ? "page" : "false"} href={href}>
      {children}
    </a>
  );
};
const Navbar = () => {
  const [hash, setHash] = useState(window.location.hash || "#");
  const onClickLink = (href) => {
    setHash(href);
  };

  return (
    <nav>
      <NavBarLink currentHash={hash} href="#" onClick={onClickLink}>
        <GoHome></GoHome>
      </NavBarLink>
      <NavBarLink currentHash={hash} href="#about" onClick={onClickLink}>
        <AiOutlineUser></AiOutlineUser>
      </NavBarLink>
      <NavBarLink currentHash={hash} href="#competences" onClick={onClickLink}>
        <BsAward></BsAward>
      </NavBarLink>
      <NavBarLink currentHash={hash} href="#portfolio" onClick={onClickLink}>
        <BiBookOpen></BiBookOpen>
      </NavBarLink>
      <NavBarLink currentHash={hash} href="#contact" onClick={onClickLink}>
        <BiMessageDetail></BiMessageDetail>
      </NavBarLink>
    </nav>
  );
};

export default Navbar;
