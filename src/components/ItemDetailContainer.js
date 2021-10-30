import React, { useState , useEffect} from "react";
import {Productos} from './Productos';
import {ItemDetail} from './ItemDetail';
import './ItemDetailContainer.css';


export const ItemDetailContainer = () => {        
        /* Esta función debe retornar la promesa que resuelva con delay */
        const [product, setProduct] = useState();// Hook
       
        useEffect(()=>{
            function carga (){ new Promise((resolve, reject)=>{//promesa que obtiene el primer elem a los 2 seg
                setTimeout(() => {
                    resolve(Productos);
                }, 2000)
            })
            .then((resolve) => setProduct(resolve))//actualizo producto
            .catch((err)=>alert(err));}
            carga();
            }, []);  
          
    
    // Implementar mock invocando a getItem() y utilizando el resolver then
     return (
     <div className="detailContainer">
        { product ? <ItemDetail items={product} /> : <p>Cargando Producto....</p> }
     </div>
     
    )/* JSX que devuelva un ItemDetail (punto 2) */
    }
    