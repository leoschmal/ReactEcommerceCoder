import {ItemCount} from './ItemCount';

export const ItemListContainer = ({greeting}) => {
    return(
        <p>
            {greeting}
            <ItemCount />
        </p>
        )
}