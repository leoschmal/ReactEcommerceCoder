import { Item } from "./Item"
import {    
    getDocs,
    collection,
    query,
    where 
  } from "firebase/firestore";
import { getFirestore } from "../firebase/index";
import { useState, useEffect } from "react";


export const Related = ({item}) => {

    const [filtrados, setFiltrados] = useState([]);


    useEffect(() => {
    const db = getFirestore();
    const relatedRef = collection(db, "productos");      
    const q = query(relatedRef, where("categoria", "==", item.categoria), where("id", "!=", item.id));
    getDocs(q)
    .then((querySnapshot)=>{
        setFiltrados(querySnapshot.docs.map((docc) => docc.data()));      
    });
    }, [filtrados, item.categoria, item.id]);

    return(
        <div>
            { filtrados.length !== 0 && (
          <div className="relacionados">
            <h2>Productos Relacionados</h2>
            <div>
              <div className="itemList">                
                  {filtrados.map((relacionado, index) => (
                    <div key={index}>
                      <Item item={relacionado} />
                    </div>
                  ))}                
              </div>
            </div>
          </div>)}
        </div>)
}