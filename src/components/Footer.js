import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      Created by{" "}
      <a
        className="github"
        href="https://github.com/SDK-DIV"
        target="_blank"
        rel="noreferrer"
      >
        Divakaran S <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>{" "}
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
