import { Link } from "react-router-dom";
import "../css/Navbar.css";
import {IoIosHome} from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import { BsFillArchiveFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="container">
      
        
          <Link to="/home" className="Link">
            {" "}
            <IoIosHome size="45px" className="item"/>
          </Link>
        
        
          <Link to="/proyects" className="Link">
            {" "}
            <BsFillArchiveFill size='45px' className="item"/>{" "}
          </Link>
        
        
          <Link to="/Contact" className="Link">
            {" "}
            <FcContacts size="50px" className="item"/>
            {" "}
          </Link>
    </div>
  );
};
