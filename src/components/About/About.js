import React from "react";
import { langList, stackList } from "../../data/ProjectData";
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
          Greetings! Welcome to my website. I'm Saishnu, a 
          student pursuing Computer Science at California State University, Fresno. 
          I established this website to present my journey and experiences in my professional 
          career. It serves as a hub for my projects and showcases my diverse interests. 
          I have interests in Project Management, Web Development, and all things IT-related. 
          I find joy in exploring the multitude of ways technology can be applied in businesses and 
          how we can potentially allow it to grow. I am constantly driven by a thirst for knowledge 
          and embrace every opportunity to learn and grow, both in my both aspects of my life. 
          </div>

          <div className = "AboutBio tagline2">
            Languages
          </div>
          <Technologies>
            {langList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>

          <div className="AboutBio tagline2">
            Skills
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
