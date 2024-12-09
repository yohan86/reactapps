import {useState,useEffect} from 'react'
import './style.css'

export default function LoadMore(){
    const [items, setItems] = useState([])
    const [loadLimit, setLoadLimit] = useState(9)
    const [error, setError] = useState(null)

    async function fetchItems(){
        try{
            const response = await fetch(`https://dummyjson.com/products?page=1&limit=${loadLimit}`);
            const data = await  response.json();
            if(data){
                setItems(data.products)
                console.log(items)
            }
        }catch(e){
            setError(e.message)
        }
    }

    useEffect(()=>{
        fetchItems()
    },[loadLimit])

    return <div className="product-wrapper">
        <div className="products">
    {
        items.map(item =>{
            return <div className="item" key={item.id}>{item.title}sds</div>
        })
    }
    </div>
    <div className="load-more" onClick={()=>setLoadLimit(loadLimit*2)}>Load More</div>
    </div>


}
