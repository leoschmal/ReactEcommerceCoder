import React, { useState , useEffect} from "react";
import {Item} from './Item';
import {Productos} from './Productos'
import './ItemList.css'


export const ItemList = ()=>{

    const [products, setProducts] = useState([]);

    const carga = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Productos);
        }, 2000)
    });

    useEffect(()=>{
        carga
        .then((resolve) => setProducts(resolve))
        .catch((err)=>alert(err));
    }, []);


    return(
        
        <div className="itemList">
                    {products.map((products, index)=>{
                        return(
                            <div key={index} className="itemCard">
                                <Item item = {products} />
                                <button>Detalles</button> 
                            </div>
                        )
                    })}                    
        </div>        
        )
}