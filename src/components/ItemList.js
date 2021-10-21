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
                                <h3>Código: {products.id}</h3>
                                <h3>{products.titulo}</h3>
                                <h3>${products.precio}</h3>
                                <img className="imgCard" src={products.url} alt='.v..' />
                                <button>Detalles</button>                       
                                                          
                            </div>
                        )
                    })}                    
        </div>
        
        )

}