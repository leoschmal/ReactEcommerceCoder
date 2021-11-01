import React, { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({inicial}) => {
  let stockInicial = Number(inicial);

  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(stockInicial);

  const sumar = () => {
    if (stock > 0) {
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

  return (
    <div>
      <div className="addItem">
        <button onClick={restar} className="btn btn-info">-</button>
        <h3>{contador}</h3>
        <button onClick={sumar} className="btn btn-info">+</button>        
      </div>
      {stock !== 1 ? <p>{stock} disponibles</p> : <h4>Última Disponible</h4>}
      <button className="btn btn-warning">Agregar ({contador})</button>
    </div>
  );
};
