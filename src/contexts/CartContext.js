import { createContext , useState} from "react";

export const CartContext = createContext({});

export const CartProvider =({children})=>{
    const[cart, setCart]=useState([]);

    const addItem = (items, item)=>{
        if(isInCart(item)){  
            cart.forEach(function(a){
                if (a.product.id === items.product.id) {
                    a.product.qty = a.product.qty + items.product.qty;
                }
            });
                               
        }
        else{
            setCart([...cart,items]);
            console.log('agregue nuevo');
        }              
    }

    function  removeItem (id) {        
        const aux = Array.from(cart);
        aux.splice(id, 1);              
        setCart(aux);
    }

    const clearCart = ()=>{        
        setCart([]);        
    }   

    const isInCart = (item)=>{
        const ttt = cart.map((ides)=>{
            return ides.product.id;
            });
        const uniqueId= [...new Set(ttt)];        
        if(uniqueId.includes(item.id)){             
            return true;
        }else{            
            return false;
        }
    }
    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
        )
}