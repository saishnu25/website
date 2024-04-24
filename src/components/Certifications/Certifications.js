import React from "react";
import {
  Image,
  ContactWrapper,
} from "./CertificationsElements";

function Certifications() {
  return (
    <ContactWrapper id="certifications">
      <div className="Container">
        <div className="SectionTitle">Certifications</div>
        <div className="BigCard">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="Google"
          />
          <div className="AboutBio">
          
          </div>
          <div className="AboutBio tagline2">
            Google Project Management Professional Certificate (Issued Dec 2023)
          </div>

          </div>

          
      </div>

      
    </ContactWrapper>
  );
}

export default Certifications;
