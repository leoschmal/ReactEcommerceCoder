import { useParams } from "react-router";
import {useState, useEffect} from "react";
import {Item} from "./Item";
import {
    collection,
    query,    
    getDocs,
    where
  } from "firebase/firestore";
  import { getFirestore } from "../firebase/index";

export const ListCategoryContainer = ()=>{
    const { catIde } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const q = query(collection(db, "productos"), where("categoriaId","==", catIde));               
        getDocs(q).then((snapshots)=>{                        
            if(!snapshots.empty){                      
                setProducts(snapshots.docs.map((doc) => doc.data()))};                
        })
    },[catIde]);
      
    return(
      <>{
        products.length !== 0 ? (      
        <div className="itemList">
        {products.map((product, index) => (
            <div key={index}>
              <Item item={product} />
            </div>
            ))         
        }
      </div>):(<div>
                  <h3>Cargando Productos</h3>
                  <div className="spinner-grow" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
                </div>)
        }</>
              )
}