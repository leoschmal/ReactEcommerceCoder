import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const Cart = ()=>{
    let pesosArg = Intl.NumberFormat("ar-AR", {
        style: "currency",
        currency: "ARG",
      });
    const {cart, clearCart, removeItem} = useContext(CartContext);

    
    return(
        <>
        <div><p>Soy el carrito</p></div>

        {/* <pre>
            {JSON.stringify(cart, null, 2)}
        </pre> */}

        <div className="">
        {cart !== [] ? cart.map((producto, index) => (            
            <div key={index}>
                <div>
                    <p>titulo: {producto.product.nombre} </p>
                    <p>cant: {producto.product.qty}</p>
                    <p> total: ${pesosArg.format(producto.product.precio)}</p>
                    <p> id: {producto.product.id}</p>
                    <button onClick={removeItem(producto.product.id)}>Eliminar</button>                
                </div>                
            </div>)) : <div>El carrito está vacío</div>}
        {cart!== [] ? <button onClick={clearCart}>Limpiar Carro</button> : <p>na pa borrar</p>}
        </div>   
        </>
    )

}