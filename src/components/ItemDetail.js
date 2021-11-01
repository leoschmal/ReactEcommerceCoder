import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { Productos } from "./Productos";
import { Item } from "./Item";

export const ItemDetail = ({ items }) => {
  let pesosArg = Intl.NumberFormat("ar-AR", {
    style: "currency",
    currency: "ARG",
  });

  const { itemIde } = useParams();

  const item = items.find((item) => item.id === itemIde);

  const filtrados = Productos.filter((producto) => ((producto.categoria === item.categoria) & (producto.id !== itemIde)));
  

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
          <ItemCount inicial={item.stock} />
          <button className="btn btn-info m-3">Ver Carrito</button>
          <button className="btn btn-info m-3"> <Link to={'/list'}> Volver</Link></button>
        </div>
        
        <div className="relacionados">
          <h2>Productos Relacionados</h2>          
          <div>
            <div className="itemList">
              {filtrados.length !== 0 ? (
                filtrados.map((relacionado, index) => (
                  <div key={index} className="itemCard">
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
