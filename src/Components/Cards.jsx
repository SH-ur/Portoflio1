import data from '../data';
import { Card } from './Card';
export const Cards = ()=>{
    return(
        <>
        <div>
            {data?.map(proyect=> <Card key={Math.random() * 1000} proyect={proyect}/>)}
        </div>
        </>
    )
}