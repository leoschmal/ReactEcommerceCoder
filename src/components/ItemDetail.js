import React from 'react';
import { useParams } from 'react-router';

export const ItemDetail =({ items }) => {
    const { itemIde } = useParams();
    
    const item = items.find(item => item.id === itemIde);
    return ( <>
                <div>
                    titulo: {item.titulo}
                </div>
                <div>
                    precio: {item.precio}
                </div>
                <img src = {item.url} alt="..." />                         
            </>)   
  }
  