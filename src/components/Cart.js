import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import "./Cart.css";

export const Cart = ()=>{
    let pesosArg = Intl.NumberFormat("ar-AR", {
        style: "currency",
        currency: "ARG",
      });

    const {cart, clearCart, removeItem} = useContext(CartContext);
    
    
    let total = 0;
    let productos =0;
    cart.forEach(function(a){total += parseInt(a.product.precio)*a.product.qty;});
    cart.forEach(function(a){productos += parseInt(a.product.qty);});
    console.log(total);
    console.log(productos);
    console.log('cant', cart.length);
    


    return(
        <>
        {/* <pre>
            {JSON.stringify(cart, null, 2)}
        </pre> */}

        <div className="cartProduct">
            <div className="product">
                    <p>Producto </p>
                    <p>Cant.</p>
                    <p>Precio U</p>
                    <p>Total</p>
                    <p> id</p>
            </div>
        {cart !== [] ? cart.map((producto, index) => (            
            <div key={index}>
                <div className="product">
                    <p> {producto.product.nombre} </p>
                    <p> {producto.product.qty}</p>
                    <p>  ${pesosArg.format(producto.product.precio)}</p>
                    <p>{producto.product.precio * producto.product.qty}</p>
                    <p>  {producto.product.id}</p>
                    <button onClick={removeItem(producto.product.id)}>Eliminar</button>                
                </div>                
            </div>)) : <div>El carrito está vacío</div>}
            <div>Total Compra: {total}               
            </div>
        {cart!== [] ? <><button onClick={clearCart}>Limpiar Carro</button><button>Terminar Compra</button></>: <p>na pa borrar</p>}
        </div>   
        </>
    )

}