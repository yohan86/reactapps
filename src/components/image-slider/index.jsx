import {useState, useEffect} from 'react'
import './style.css'

export default function ImageSlider({url, page=2, limit=5}){
    const [images, setImages] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(geturl){
        try{
            setLoading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImages(data);
                setLoading(false)
            }
            
        }catch(e){
            setError(e.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(url !=='') fetchImages(url)
    },[url])

    function previousImage(){
        setCurrentSlider(currentSlider === 0? images.length -1 : currentSlider-1)
    }
    function nextImage(){
        setCurrentSlider(currentSlider === images.length -1 ? 0 : currentSlider+1)
    }
  
    if(loading){
        return <div className="loading">Data is Loading, Please wait!!!</div>
    }
    if(error){
        return <div className="errormsg">{error} occured !</div>
    }
   
    return <div className="container">
        <div className="arrow arrow-left" onClick={previousImage}></div>
        <div className="arrow arrow-right" onClick={nextImage}></div>
        {
            images && images.length ? 
            images.map((image, index) => {
                return <div>
                    <img
                        key={image.id}
                        src={image.download_url}
                        alt={image.id}
                        className={currentSlider === index ? 'image current-image':'image'}
                    />
                    </div>
            })
            
            : null
        }

        <div className="pager-wrapper">
            {
                images && images.length ?
                    images.map((_, index) =>{
                        return <span
                            key={index}
                            onClick={()=>setCurrentSlider(index)}
                            className={currentSlider === index ? 'pager active' : 'pager'}
                        ></span>
                    })
                
                : null
            }


        </div>


     
    </div>
}