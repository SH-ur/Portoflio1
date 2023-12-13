import { Link } from "react-router-dom";
import '../css/Navbar.css'
export const Navbar = ()=>{
    return(
        <div className="container" >
                <Link to='/home' className="item"> <strong>Home</strong></Link>
                
            <Link to='/proyects' className="item"> Proyects </Link>
               
            <Link to='/Contact' className="item"> Contact </Link>
        </div>
    )
}