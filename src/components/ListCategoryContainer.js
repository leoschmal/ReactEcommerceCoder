import {ItemList} from './ItemList';
import { useParams } from "react-router";
import {useState, useEffect} from "react";
import {
    collection,
    query,
    where,
    getDocs,
  } from "firebase/firestore";
  import { getFirestore } from "../firebase/index";


export const ListCategoryContainer = ()=>{
    const { catIde } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const q = query(collection(db, "productos"));
        console.log('catIde', catIde);
        getDocs(q).then((snapshots)=>{            
            if(!snapshots.empty){          
                setProducts(snapshots.docs.map((doc) => doc.data()))};
                console.log('products filter', products);
        })

    },[catIde]);

      
    return(
        <div>
            <h2>Categoria</h2>
            <div className="listContainer">
                <ItemList />
            </div>
        </div>
        )

}