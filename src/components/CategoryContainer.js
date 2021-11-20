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

    let ee = [];
    productos.map((cate)=>{ 
        ee.push( {
            id:cate.categoriaId,
            categoria:cate.categoria            
         });
        return ee;   
    })    
    let set = new Set( ee.map( JSON.stringify ) )
    let unique = Array.from( set ).map( JSON.parse );     
    return(
        <div>
            {unique.map((cat, index)=>(                
                    <div key={index}>
                        <Link to={"/categorias/" + parseInt(cat.id)}> <p>{cat.categoria}</p></Link>
                    </div>))}
                        </div>
        )}