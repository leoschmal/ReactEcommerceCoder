import { Link } from "react-router-dom";
import "./CategoryContainer.css";
//import Icon from "../assets/cereales.png";
import { collection, query, getDocs } from "firebase/firestore";
import { getFirestore } from "../firebase/index";
import { useEffect, useState } from "react";

export const CategoryContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "productos"));
    getDocs(q).then((snapshots) => {
      if (!snapshots.empty) {
        setProductos(snapshots.docs.map((doc) => doc.data()));
      }
    });
  }, []);

  let categories = [];
  productos.map((cate) => {
    categories.push({
      id: cate.categoriaId,
      categoria: cate.categoria,
    });
    return categories;
  });
  let set = new Set(categories.map(JSON.stringify));
  let unique = Array.from(set).map(JSON.parse);
  return (
    <div className="categoryContainer">
      {unique.length !==0 ? (
      unique.map((cat, index) => (
        <div key={index} className="categoryCard">
          <Link to={"/categorias/" + parseInt(cat.id)}>
            <p className="categoryTitle">{cat.categoria}</p>
            <img
            src={process.env.PUBLIC_URL + "/" + cat.id + ".png"}
            alt="imggg"
            ></img>
          </Link>          
        </div>
      ))
      ):(<div> 
            <h2>Cargando Categorias</h2>
            <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>)  
        }
    </div>
  );
};
