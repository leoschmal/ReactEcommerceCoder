import {ItemList} from './ItemList';
//import {Productos} from './Productos';
import { useParams } from "react-router";



export const ListCategoryContainer = ({items})=>{
    const { catIde } = useParams();

    const categoria = items.filter((producto) => ((producto.categoriaId === catIde)));
    const titlee = items.find((producto)=> producto.categoriaId === catIde);
    console.log(titlee);
        
    return(
        <div>
            <h2>{titlee.categoria}</h2>
            <div className="listContainer">
                <ItemList items ={categoria}/>
            </div>
        </div>
        )

}