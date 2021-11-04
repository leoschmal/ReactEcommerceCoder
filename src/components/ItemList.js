import React, { useState , useEffect} from "react";
import {Item} from './Item';
//import {Productos} from './Productos'
import './ItemList.css'


export const ItemList = ({items})=>{
    
    const [products, setProducts] = useState([]); 

    useEffect(()=>{
        function carga () {new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(items);
            }, 2000)
        })
        .then((resolve) => setProducts(resolve))
        .catch((err)=>alert(err));}
        carga();            
    }, [items]);


    return(
        <div className="itemList">
        {products !== [] ? products.map((product, index) => (            
            <div key={index}>
                <Item item = {product} />                
            </div>)) : <div>Cargando Productosss....</div>}
        </div>                      
        )     
}


