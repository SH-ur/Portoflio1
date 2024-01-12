/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import iconsRender from "../Views/utils";
import "../css/Card.css"
export const Card = ({proyect})=>{
    // eslint-disable-next-line react/prop-types
    const {nombre, colaboradores, descripcion, url, tecnologias} = proyect;
    return (
        <div className="divCard">
<div>
    <h2>{nombre}</h2>
</div>

<div>
    <h2>{descripcion}</h2>
</div>
<div>
    <p style={{fontSize: '30px', display: 'flex', alignItems:'normal', justifyContent:'center'}}> Tecnologias { tecnologias?.map(tech=> iconsRender(tech)) }</p> 
</div>

<div>
    <h2> {colaboradores.length > 1 ?
    <p>Este proyecto fue en colaboración con los siguientes Developers: {colaboradores?.map(friends=> `${friends} `)}</p>:
    <p>Este proyecto fue llevado a cabo gracias al Developer: {colaboradores?.map(friends=> `${friends} `)}</p>
     }</h2>
</div>

<div>
    <h2>Aqui esta el enlace al proyecto : <a href={url} target="_blank" rel="noopener noreferrer"> {url} </a> </h2>
</div>


        </div>
    )
}