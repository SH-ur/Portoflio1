import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { Title } from '../Components/Title'

export const Home = ()=>{
    return(
        <div>
            Estamos en El Home, Probando probando.
            <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      <Title/>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        </div>
    )
}