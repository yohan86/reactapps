import React, {useState} from 'react';

const Callback = ({getColor})=>{
    const [actColor, setActColor] = useState(null);

    const changeColor= (e) =>{
        const {value} = e.target;
        setActColor(value);
        getColor(value);
    }

    return(
        <div>
            <input type="text" onChange={changeColor} value={actColor} />
        </div>
    );
}

export default Callback;