import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({item}) =>{   

    return(
        <div className="itemCard">
            <h3> {item.titulo} </h3>
            <img className="imgCard" src = {item.url} alt="..." />
            <h4>${item.precio}.-</h4>
            <p>Código:{item.id}</p>
            <Link to= {"/item/" + item.id}><button>Detalles</button></Link>
        </div>
        )
}