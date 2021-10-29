import {ItemCount} from './ItemCount';
import {ItemList} from './ItemList';
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    return(
        <p>
            {greeting}
            <ItemCount inicial='20' />
            <div className="listContainer">
                <ItemList />
            </div>
        </p>
        )
}