//import {Productos } from './Productos';
import { Link } from 'react-router-dom';
import {    
    collection,
    query,    
    getDocs,
  } from "firebase/firestore";
  import { getFirestore } from "../firebase/index";
  import { useEffect , useState} from 'react';


export const CategoryContainer = ()=>{

    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const q = query(collection(db, "productos"));
        getDocs(q).then((snapshots)=>{
            if(!snapshots.empty){          
                setProductos(snapshots.docs.map((doc) => doc.data()))};
        })

    },[]);

    const categorias = productos.map((cate)=>{
    return cate.categoria;
    })
    const uniqueCat= [...new Set(categorias)]  

    return(
        <div>
            {uniqueCat.map((cat, index)=>(                
                    <div key={index}>
                        <Link to={"/categorias/" + parseInt(index + 1)}> <p>{cat}</p></Link>
                    </div>))}
                        </div>
        )}