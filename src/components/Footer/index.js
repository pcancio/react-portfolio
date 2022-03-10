import React from "react";
import SocialFollow from "../SocialFollow";

function Footer() {
  return (
    <footer bg="light">
      <div className="social-container">
        <span className="d-flex justify-content-center">
          Patricia Cancio 2022
        </span>
        <SocialFollow />
      </div>
    </footer>
  );
}

export default Footer;
