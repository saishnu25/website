import React from "react";
import {
  Image,
  ContactWrapper,
} from "./ExperiencesElements";

function Experiences() {
  return (
    <ContactWrapper id="experiences">
      <div className="Container">
        <div className="SectionTitle">Experiences</div>
        <div className="BigCard">
          <Image
            src="https://pbs.twimg.com/profile_images/1309921495007682561/UL5tWYCm_400x400.jpg"
            alt="CSci Club"
          />
          <div className="AboutBio">
          
          </div>
          <div className="AboutBio tagline2">
            Computer Science Club (Fresno State) - Treasurer (Aug 2022 - Aug 2023)
          </div>
          <Image
            src="https://avatars.githubusercontent.com/u/93381519?s=280&v=4"
            alt="GDSC"
          />
          <div className="AboutBio">
          </div>
          <div className="AboutBio tagline2">
            Google Developer Student Club (Fresno State) - Treasurer (Aug 2022 - Present)
          </div>
          </div>

          
      </div>

      
    </ContactWrapper>
  );
}

export default Experiences;
