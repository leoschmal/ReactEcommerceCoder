import { createContext , useState} from "react";

export const CartContext = createContext({});

export const CartProvider =({children})=>{
    const[cart, setCart]=useState([]);

    const addItem = (items, item)=>{
        if(isInCart(item)){  
            console.log('yaexissste');
            
        }
        else{
            console.log('agregando');
            setCart([...cart,items]);
        }              
    }

    const removeItem = (id)=>{        
        cart.splice(id,1);
        console.log('banana');
    }

    const clearCart = ()=>{        
        setCart([]);
        console.log('manzana');
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