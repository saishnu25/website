import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { BiMouse } from "react-icons/bi";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Saishnu</h1>
            <h5>Computer Science Student</h5>
            <p>
            Currently studying. Always eager to learn about new technology and innovations.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://raw.githubusercontent.com/saishnu25/website/main/src/Assets/profile.png"
              alt="profile"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Continue scrolling 
            <BiMouse/>
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
