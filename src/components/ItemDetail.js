import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { Productos } from "./Productos";
import { Item } from "./Item";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ items }) => {
  let pesosArg = Intl.NumberFormat("ar-AR", {
    style: "currency",
    currency: "ARG",
  });
  const {cart, addItem, isInCart} = useContext(CartContext);

  const { itemIde } = useParams();
  const item = items.find((item) => item.id === itemIde);
  const filtrados = Productos.filter((producto) => ((producto.categoria === item.categoria) & (producto.id !== itemIde)));
  
  const [cnt, setCnt]= useState(0);
  const [flag, setFlag]= useState(true);

  function cantidad(data){
    setCnt(data);
    setFlag(false);
    
    const product ={
      qty : data,
      id : item.id,
      nombre : item.titulo,
      precio : item.precio
    }
    if(!isInCart(item)){
      addItem({product}, item);
    }
    else{
      console.log('jaja')
    }

    }


    useEffect(()=>{
        setCnt(0);
        setFlag(true);
    }, [itemIde]);

  return (
    <>
      <div className="container">
      <div className="imgContainer">
          <img src={item.url} className="imgDetail" alt="..." />
        </div>
        <div className="dataContainer">
          <h4>{item.titulo}</h4>
          <p>precio:<span> ${pesosArg.format(item.precio)}</span></p>
          {item.variedad.length !== 0 ? (
            <select>
              {item.variedad.map((variedad, index) => (
                <option key={index}>{variedad}</option>
              ))}
            </select>
          ) : (
            <p>variedad unica</p>
          )}
          <p>Descripción: {item.descripcion}</p>
          {flag ? <ItemCount inicial={item.stock} compra={cantidad}/> : <p><strong>Agregó {cnt} productos</strong></p>}
          <button className="btn btn-info m-3"><Link to={'/cart'}>Ver Carrito </Link></button>
          <button className="btn btn-info m-3"> <Link to={'/list'}> Volver</Link></button>
        </div>
        
        <div className="relacionados">
          <h2>Productos Relacionados</h2>          
          <div>
            <div className="itemList">
              {filtrados.length !== 0 ? (
                filtrados.map((relacionado, index) => (
                  <div key={index}>
                    <Item item={relacionado} />
                  </div>
                ))
              ) : (
                <div>No Existen Productos Relacionados</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
