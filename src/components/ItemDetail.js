import React from "react";
import { Related } from "./Related";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
//import { Item } from "./Item";
import { CartContext } from "../contexts/CartContext";
import {
  doc,
  getDoc  
} from "firebase/firestore";
import { getFirestore } from "../firebase/index";

export const ItemDetail = () => {
  let pesosArg = Intl.NumberFormat("ar-AR", {
    style: "currency",
    currency: "ARG",
  });
  const { addItem } = useContext(CartContext);
  const { itemIde } = useParams();

  const [item, setItem] = useState();
  


  const [cnt, setCnt] = useState(0);
  const [flag, setFlag] = useState(true);
  const [variedad, setVariedad] = useState('Unica');

  const handleVariedad = (e) => setVariedad(e.target.value);

  function cantidad(data) {
    setCnt(data);
    setFlag(false);

    const product = {
      qty: data,
      id: item.id,
      nombre: item.titulo,
      precio: item.precio,
      variedad: variedad,
    };
    addItem({ product }, item);    
  }

  useEffect(() => {
    setCnt(0);
    setFlag(true);

    const db = getFirestore();
    const prodRef = doc(db, "productos", itemIde);
    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()) {        
        setItem(snapshot.data());                
      }
    })
   }, [itemIde]);

  return (
    <>
      {item && (
        <div className="container">
          <div className="imgContainer">
            <img src={item.url} className="imgDetail" alt="..." />
          </div>
          <div className="dataContainer">
            <h4>{item.titulo}</h4>
            <p>
              <span> ${pesosArg.format(item.precio)}</span>
            </p>
            {item.variedad.length !== 0 ? (
              <select onChange={handleVariedad}>
                {item.variedad.map((variedad, index) => (
                  <option key={index} >{variedad}</option>
                ))}
              </select>
            ) : (
              <p>variedad unica</p>
            )}
            <p>{item.descripcion}</p>
            {flag ? (
              <ItemCount inicial={item.stock} compra={cantidad} />
            ) : (
              <p>
                <strong>Agregó {cnt} productos</strong>
              </p>
            )}
            <button className="btn btn-info m-3">
              <Link to={"/cart"}>Ver Carrito </Link>
            </button>
            <button className="btn btn-info m-3">              
              <Link to={"/list"}> Volver</Link>
            </button>
          </div> 
          <Related item={item}/>         
        </div>
      )}
    </>
  );
};
