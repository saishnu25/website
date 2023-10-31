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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png"
            alt="Coursera"
          />
          <div className="AboutBio">
          
          </div>
          <div className="AboutBio tagline2">
            Foundations of Project Management (Issued Oct 2023)
          </div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png"
            alt="Coursera"
          />
          <div className="AboutBio">
          </div>
          <div className="AboutBio tagline2">
            Project Initiation: Starting a Successful Project (Issued Oct 2023)
          </div>

          <Image
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
            alt="YouTube"
          />
          <div className="AboutBio">
          </div>
          <div className="AboutBio tagline2">
            YouTube Music Certification (Issued Sep 2023 - Expires Mar 2025)
          </div>

          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt="Google"
          />
          <div className="AboutBio">
          </div>
          <div className="AboutBio tagline2">
            Waze Ads Fundamentals (Issued Jun 2023 - Expires Jun 2024)
          </div>

          </div>

          
      </div>

      
    </ContactWrapper>
  );
}

export default Certifications;
