import { Link } from "react-router-dom";
import "../css/Navbar.css";
import {IoIosHome} from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import { BsFillArchiveFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="container">
      
        
          <Link to="/home" className="item">
            {" "}
            <IoIosHome size="45px"/>Home
          </Link>
        
        
          <Link to="/proyects" className="item">
            {" "}
            <BsFillArchiveFill size='45px'/>{" "}
          </Link>
        
        
          <Link to="/Contact" className="item">
            {" "}
            <FcContacts size="50px"/>
            Contact{" "}
          </Link>
    </div>
  );
};
