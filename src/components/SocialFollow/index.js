import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../App.css";

export default function SocialFollow() {
  return (
    <div>
      <a
        href="https://www.instagram.com/pclalanyc"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a
        href="https://www.linkedin.com/in/patricia-cancio-31711421b/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      <a href="https://github.com/pcancio" className="github social">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
    </div>
  );
}
