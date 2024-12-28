import {useState,useEffect} from 'react'
import './style.css'

export default function LoadMore(){
    const [items, setItems] = useState([])
    const [loadLimit, setLoadLimit] = useState(9)
    const [error, setError] = useState(null)
    const [loadingMsg, setLoadingMsg] = useState(false);

    async function fetchItems(){
        try{
            setLoadingMsg(true)
            const response = await fetch(`https://dummyjson.com/products?page=1&limit=${loadLimit}`);
            const data = await  response.json();
            if(data){
                setItems(data.products)
                setLoadingMsg(false)
            }
        }catch(e){
            setLoadingMsg(false)
            setError(e.message)
        }
    }

    useEffect(()=>{
        fetchItems()
    },[loadLimit])

    if(loadingMsg){
        return <p>Loading, Please wait</p>
    } 
    if(error){
        return <p>Error : {error}</p>
    } 

    return <div className="product-wrapper">
        <div className="products">
    {
        items.map(item =>{
            return (
                <div className="item" key={item.id}>
                    <div className="item-image">
                        <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <h3 className="item-title">{item.title}</h3>
                </div>
            )
        })
    }
    </div>
    <button className="load-more" onClick={()=>setLoadLimit((prevloadLimit)=>prevloadLimit*2)}>Load More</button>
    </div>


}
