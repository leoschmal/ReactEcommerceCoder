import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = ()=>{
    const {cart} = useContext(CartContext);
    return(
        <div className="containerWidget">
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="cart" />
            {cart.length !== 0 && <h3>({cart.length})</h3> }
        </div>        
        )
}
