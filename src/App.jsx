//import { useState } from 'react'

import { Routes, Route } from "react-router-dom";
import { Home } from "./Views/Home";
import { Proyects } from "./Views/Proyects";
import { Contact } from "./Views/Contact";
import { Navbar } from "./Components/Navbar";
import "./css/Home.css";
import "./css/Navbar.css";
import "./css/App2.css"
function App() {
  //const [count, setCount] = useState(0)

  return (
    
      <div className="main-Items">
        
          <Navbar classname='sidebar'/>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    
  );
}

export default App;
