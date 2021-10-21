import {ItemCount} from './ItemCount';
import {ItemList} from './ItemList';

export const ItemListContainer = ({greeting}) => {
    return(
        <p>
            {greeting}
            <ItemCount inicial='20' />
            <div>
                <ItemList />
            </div>
        </p>
        )
}