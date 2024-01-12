import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import "../css/Contact.css";

export const Contact = () => {
  return (
    <div
    ><p><strong> Para contactar por aquí</strong></p>
    <FaRegArrowAltCircleDown size="200px" className="arrow"/>
      <div className="contactIcons">
        <a href="https://github.com/SH-ur" target="_blank" rel="noreferrer" >
          {" "}
          <AiFillGithub size="230px" color="yellow" className="GithubIcon"/>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-soto-43ab99260/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <AiFillLinkedin size="230px" color="blue" />
        </a>
      </div>
    </div>
  );
};
