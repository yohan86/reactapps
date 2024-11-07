import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Callback from './callback';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [UIcolor, setUIcolor] = useState(null);
  const getColor = (color) =>{
    setUIcolor(color);
  }

  const [width, setWidth] = useState(50);
  const increasedWidth = () => setWidth((previousWidth) => previousWidth + 10);
  const [btnwidth, setBtnwidth] = useState(100);


  const [states, setState] =useState({name:'saman'});

  const updateSate = () =>{
    //setState({creater: 'facebook'});
    setState((prevStates)=>({...prevStates, creaater:'facebook'}));
  }

  const expandedmes =() =>{
    setBtnwidth((previousbtnwidth)=> previousbtnwidth+30);
  }
  const expandedme =() => setBtnwidth((previousbtnwidth)=>previousbtnwidth+30);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);



  return (
    <div className="App">

      <header className="App-header aa">
        <p style={{background:`${UIcolor}`}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <button style={{width}} onClick={increasedWidth}>text</button>
        {JSON.stringify(states)}
        <button onClick={updateSate}>update</button>
        <button style={{width:`${btnwidth}px`}} onClick={expandedme}>Increase me</button>
      </header>
      <Callback getColor={getColor} />









    </div>
  );
}

export default App;
