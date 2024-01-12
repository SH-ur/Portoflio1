//import { useState } from 'react'

import { Routes, Route, useLocation} from "react-router-dom";
import { Home } from "./Views/Home";
import { Proyects } from "./Views/Proyects";
import { Contact } from "./Views/Contact";
import { Navbar } from "./Components/Navbar";
import "./css/Home.css";
import "./css/Navbar.css";
import "./css/App2.css"
function App() {
  //const [count, setCount] = useState(0)
const location = useLocation();
  return (
    
      <div className="main-Items">
        
          <Navbar classname='sidebar'/>
          {location.pathname !== '/' ? '' : <p>Si no ves nada,
       dale click a uno de los íconos</p>}
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    
  );
}

export default App;
