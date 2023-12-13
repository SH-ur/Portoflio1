//import { useState } from 'react'

import {Routes, Route} from 'react-router-dom';
import { Home } from './Views/Home';
import {Proyects} from './Views/Proyects';
import {Contact} from './Views/Contact';
import { Navbar } from './Components/Navbar';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
    <Routes>
<Route exact path='/home' element={<Home/>}/>
<Route  path='/proyects' element={<Proyects/>}/>
<Route  path='/Contact' element={<Contact/>}/>
      
    </Routes>
    </>
  )
}

export default App
