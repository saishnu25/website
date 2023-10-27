import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://raw.githubusercontent.com/saishnu25/website/main/src/Assets/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="experiences" smooth={true}>
            Experiences
          </NavLink>
          <NavLink className="menu-item" to="awards" smooth={true}>
            Awards
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>

        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://docs.google.com/document/d/1utya4huh-65tzE6iz1--_F4pT0x8dp9rlfdfie45bMQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
