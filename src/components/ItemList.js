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
        <div className="container d-flex justify-content-center">
          <h3>Cargando Productos.</h3>
          <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
