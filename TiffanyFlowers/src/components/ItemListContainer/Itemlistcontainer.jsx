import React,{useState,useEffect} from 'react';
import "./itemlistcontainer.css"; 
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()
    
    useEffect(()=>{
        setLoading(true);
        const fetchData = () => {
            return fetch("/data/productos.json")
            .then((response) => response.json())
            .then((data)=>{
               if(categoryId){
                const filterProducts = data.filter((p) => p.categoria == categoryId)
                setProducts(filterProducts)
               } else{
                setProducts(data)
               }
                
            })
            .catch((error)=>console.log(error))
            .finally(()=> setLoading(false));
        }

        setTimeout(()=> fetchData(), 500)

    },[categoryId])

    return (
        <>
            <h3>{categoryId}</h3>
            {products.length == 0 
            ?
            <h1>CARGANDO...</h1>
            :   
            <ItemList products={products}/>}       
        </>
    );
}

export default ItemListContainer; 
