import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import '../css/Contact.css'

export const Contact =()=>{
    return (
        <div style={{marginLeft: '535px', border: 'solid blue 20px'}}>
            <strong style={{textAlign: 'center', color: 'golden'}}>Por acá irán los distintos medios de contacto</strong>

            <div className='contactIcons'>
               <a href="https://github.com/SH-ur" target="_blank" rel="noreferrer"> <AiFillGithub size='100px' color='yellow'/> </a>
<a href='https://www.linkedin.com/in/santiago-soto-43ab99260/' target='_blank' rel='noreferrer'> <AiFillLinkedin size='100px' color='blue'/></a>

            </div>
        </div>
    )
}