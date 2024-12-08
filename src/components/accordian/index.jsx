 import {useState} from 'react';
 import data from './data';
 import './style.css';


 export default function Accordian() {
    const [actItem, setActItem] = useState(null);
    const [toggleMultiple, setToggleMultiple] = useState(false);
    const [actItemsarr, setActItemsarr] = useState([]);

    function getClickItem(clickId) {
        setActItem(actItem === clickId ? null : clickId);
    }
    function mutiSelection(clickedId){
        let tempitemsarr = [...actItemsarr]
        let findedIndex = actItemsarr.indexOf(clickedId);

            if( findedIndex === -1) {
                tempitemsarr.push(clickedId);
            }else{
                tempitemsarr.splice(findedIndex, 1);
            }

            setActItemsarr(tempitemsarr)
    }

    return(
        <div className='wrapper'>
            <h3 onClick={()=>setToggleMultiple(!toggleMultiple)}>Multiple Selection</h3>
        {data && data.length > 0 ? ( 
           
            data.map((dataitem) =>(
                <div>
                <div className='title' onClick={toggleMultiple === true ? ()=> mutiSelection(dataitem.id) :()=> getClickItem(dataitem.id)}>{dataitem.question}</div>
                {actItem === dataitem.id || actItemsarr.indexOf(dataitem.id) !== -1 ?(
                    <div className="content">{dataitem.answer}</div>
                ):null
                }
                </div>
            ))
            ):null
        }
        
        </div>
    )
 }