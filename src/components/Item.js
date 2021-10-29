import { Link } from 'react-router-dom';
import { useEffect , useParams} from "react";
import './Item.css'

export const Item = ({item}) =>{
    //const { itemIde } = useParams();

    return(
        <div className="itemCard">
            <h3> {item.titulo} </h3>
            <img className="imgCard" src = {item.url} alt="..." />
            <h4>${item.precio}.-</h4>
            <p>Código:{item.id}</p>
            <Link to= {"/item/" + item.id}>Detalles</Link>
        </div>
        )
}