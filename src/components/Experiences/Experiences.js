import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/saishnu25/website/main/src/Assets/profile.png"
            alt="profile"
          />
          <div className="AboutBio">
          Greetings! Welcome to my website. I'm Saishnu, a senior 
          student pursuing Computer Science at California State University, Fresno. 
          I established this platform to present my journey and experiences in both 
          my personal life and professional career. It serves as a comprehensive hub
          for my projects and showcases my diverse interests. I have a passion for 
          Game Development and Web Development and Design, and I find joy in exploring
          the multitude of ways technology can be applied. Constantly driven by a thirst for knowledge, 
          I embrace every opportunity to learn and grow, both in my chosen path and in life as a whole. 
          </div>
          <div className="AboutBio tagline2">
            Here are a number of languages I have experience with.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
