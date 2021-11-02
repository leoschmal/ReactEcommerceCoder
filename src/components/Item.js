import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({item}) =>{   

    return(
        <div className="itemCard">
            <h4 className="cardTitle"> {item.titulo} </h4>
            <img className="imgCard" src = {item.url} alt="..." />
            <h3>${item.precio}.-</h3>
            <p className="ref">REF: {item.id}</p>
            <Link to= {"/item/" + item.id}><button className="btn btnDetail">Detalles</button></Link>
        </div>
        )
}