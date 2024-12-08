import {FaStar} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './style.css';

export default function RatingMe({noOfStars = 5}) {
    const [activeStars, SetActiveStars] = useState(0);
    const [hoverStar, SetHoverStar] = useState(0);

    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(0);


    useEffect(()=>{
        setCalculation((count)=>count*2)
    },[count])


    function rateClick(clickedStar){
        SetActiveStars(clickedStar);
    }
    function mouseMove(clickedStar){
        SetHoverStar(clickedStar);
    }

    function mouseLeave(){
        SetHoverStar(activeStars);
    }

    return(
        <div className="star-rating-wrapper">
            {
                [...Array(noOfStars)].map((_,index) => {
                   index +=1;
                    return <FaStar className={index <= (hoverStar || activeStars ) ? 'active':'inactive'}
                    key={index}
                    onClick={()=>rateClick(index)}
                    onMouseMove={()=>mouseMove(index)}
                    onMouseLeave={()=>mouseLeave()} 
                    size='40'
                    />
                })
            }
            <h3>Amount is {count}</h3>
            <button onClick={()=>setCount((e)=>e+1)}>Click</button>
            <p>Calculation: {calculation}</p>

        </div>
    )
        

}