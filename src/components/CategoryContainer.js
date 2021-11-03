import {Productos } from './Productos';
import { Link } from 'react-router-dom';


export const CategoryContainer = ({items})=>{
    const categorias = Productos.map((cate)=>{
    return cate.categoria;
    })
    const uniqueCat= [...new Set(categorias)]  

    return(
        <div>
            {uniqueCat.map((cat, index)=>(                
                    <div key={index}>
                        <Link to={"/categorias/" + parseInt(index + 1)}> <p>{cat}</p></Link>
                    </div>))}
                        </div>
        )}