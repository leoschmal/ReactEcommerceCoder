import React, { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({inicial}) => {
  let stockInicial = Number(inicial);

  const [contador, setContador] = useState(0);
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
        <button onClick={restar}>-</button>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>        
      </div>
      {stock !== 1 ? <h4>{stock} disponibles</h4> : <h4>Última Disponible</h4>}
      <button>Agregar ({contador})</button>
    </div>
  );
};
