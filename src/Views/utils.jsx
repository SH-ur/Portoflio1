//Esto para los icons
import { DiJsBadge, DiCss3, DiReact, DiNodejs } from "react-icons/di";
import { SiRedux, SiSequelize, SiPostgresql, SiExpress } from "react-icons/si";
import { PiFigmaLogoDuotone } from "react-icons/pi";



export default function iconsRender(str){
    if(str=='Javascript') return <DiJsBadge size='100px' color="yellow" display='flex' justify-content='space-around'/>
    else if(str=='CSS')return <DiCss3 size='100px' color="blue"/>
    else if(str == 'React') return <DiReact size='100px' color="skyblue"/>
    else if(str =='Redux') return <SiRedux size='100px' color="purple"/>
    else if(str == 'Node JS') return <DiNodejs size='100px' color="greenyellow"/>
    else if(str== 'Figma') return <PiFigmaLogoDuotone size='100px' color="brown"/>
    else if(str== 'Sequelize') return <SiSequelize size='100px' color="darkblue"/>
    else if(str=='PostgreSQL') return <SiPostgresql size='100px' color="blue"/>
    else if(str=='Express') return <SiExpress size='100px' color="yellow"/>
}

