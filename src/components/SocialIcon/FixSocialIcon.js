import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/saishnu25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/saishnu25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.instagram.com/saishnu25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="item">
          <a
            href="https://twitter.com/saishnu25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.youtube.com/user/GhostProtocol2503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube/>
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
