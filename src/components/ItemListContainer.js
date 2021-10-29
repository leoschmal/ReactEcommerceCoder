import {ItemCount} from './ItemCount';
import {ItemList} from './ItemList';
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    return(
        <div>
            {greeting}
            <ItemCount inicial='20' />
            <div className="listContainer">
                <ItemList />
            </div>
        </div>
        )
}