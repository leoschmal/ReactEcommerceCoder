import React, { useState } from "react";

import './ItemCount.css'

export const ItemCount = ({inicial, compra}) => {
  
  
  let stockInicial = Number(inicial);


  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(stockInicial);
  

  const sumar = () => {
    if (stock > 1) {
      setContador(contador + 1);
      setStock(stock - 1);      
    };
  };

  const restar = () => {
    if (stock < stockInicial) {
      setContador(contador - 1);
      setStock(stock + 1);
    };
  };

  const onChange = ()=>{
    compra(contador);    
  }

  return (
    <div className="contGral">
    <div className="contenedorCont">
      <div className="addItem">
        <button onClick={restar} className="btn  btn-cnt">-</button>
        <h3>{contador}</h3>
        <button onClick={sumar} className="btn  btn-cnt">+</button>        
      </div>
      {stock !== 1 ? <p>{stock} disponibles</p> : <h5>Última Disponible</h5>}
      <button className="btn btn-add" onClick={onChange}>Agregar ({contador})</button>
    </div>
    </div>
  );
};
