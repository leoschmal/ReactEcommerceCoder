import {ItemCount} from './ItemCount';

export const ItemListContainer = ({greeting}) => {
    return(
        <p>
            {greeting}
            <ItemCount inicial='20' />
        </p>
        )
}