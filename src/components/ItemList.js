import React, { useState , useEffect} from "react";
import {Item} from './Item';
import {Productos} from './Productos'
import './ItemList.css'


export const ItemList = ()=>{

    const [products, setProducts] = useState([]);

    const categorias = Productos.map((cate)=>{
        return cate.categoria;
    })
    const uniqueCat= [...new Set(categorias)]    

    useEffect(()=>{
        function carga () {new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Productos);
            }, 2000)
        })
        .then((resolve) => setProducts(resolve))
        .catch((err)=>alert(err));}
        carga();            
    }, []);


    return(
        <div className="itemList">
        {products !== [] ? products.map((product, index) => (            
            <div key={index} className="">
                <Item item = {product} />                
            </div>)) : <div>Cargando Productosss....</div>}
        </div>                      
        )     
}


