import {useEffect, useState} from 'react';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState();
    const [bgColor, setBgColor] = useState('#000000');

    function colorMix(length){
        return Math.floor(Math.random()*length);
    }

    function createHexColor() {
        let hexColor = '#';
        const hexcode = [0,1,2,3,4,5,6,7,8,9,'A','B','c','d','E','f'];

        for(let i=0; i<6; i++){
            hexColor +=hexcode[colorMix(hexcode.length)];
        }
        setBgColor(hexColor);
    }
    function createRgbColor() {
        let r = colorMix(255);
        let g = colorMix(255);
        let b = colorMix(255);

        setBgColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if(typeOfColor === 'hex') createHexColor();
        else createRgbColor();

    }, [typeOfColor]);

    return(

        <div style={{
            width:'100vw',
            height:'100vh',
            background:bgColor,
        }}>
        <button onClick={()=> setTypeOfColor('rgb')}>RGB Color</button>
        <button onClick={()=> setTypeOfColor('hex')}>Hex Color</button>
        <button onClick={typeOfColor === 'hex'? createHexColor:createRgbColor}>Random Color</button>
        
      <h3> {typeOfColor === 'hex'? 'HEX Color' : 'RGB Color'}</h3> 
      <h1>{bgColor}</h1>

        </div>
    )
};