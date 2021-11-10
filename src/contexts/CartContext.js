import { createContext , useState} from "react";

export const CartContext = createContext({});

export const CartProvider =({children})=>{
    const[cart, setCart]=useState([]);

    const addItem = (item)=>{
        setCart([...cart,item])
    }

    return(
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
        )
}