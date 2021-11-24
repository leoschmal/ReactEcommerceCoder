import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import "./ItemList.css";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "../firebase/index";

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, "productos")).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="itemList">
      {products.length !== 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <Item item={product} />
          </div>
        ))
      ) : (
        <div><h2>Cargando Productos.</h2></div>
      )}
    </div>
  );
};
