import React from "react";
import {
  Image,
  ContactWrapper,
} from "./AwardsElements";

function Awards() {
  return (
    <ContactWrapper id="awards">
      <div className="Container">
        <div className="SectionTitle">Awards</div>
        <div className="BigCard">
          <Image
            src="https://avatars.githubusercontent.com/u/93381519?s=280&v=4"
            alt="GDSC"
          />
          <div className="AboutBio">
          
          </div>
          <div className="AboutBio tagline2">
            GDSC Core Team Member - Certificate of Completion, Fresno State (2022-2023)
          </div>

          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/California_State_University%2C_Fresno_seal.svg/1200px-California_State_University%2C_Fresno_seal.svg.png"
            alt="Dean's List"
          />
          <div className="AboutBio">
          </div>
          <div className="AboutBio tagline2">
            Dean's List, Fresno State (Spring 2021)
          </div>
          </div>

          
      </div>

      
    </ContactWrapper>
  );
}

export default Awards;
