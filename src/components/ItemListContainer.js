//import {ItemCount} from './ItemCount';
import {ItemList} from './ItemList';
import './ItemListContainer.css'
import {Productos} from './Productos';

export const ItemListContainer = () => {
    return(
        <div>
            <div className="listContainer">
                <ItemList items ={Productos}/>
            </div>
        </div>
        )
}