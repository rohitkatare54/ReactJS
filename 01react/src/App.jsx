import { useState } from 'react'
import './App.css'
import Chai from './Chai'
import plusIcon from '/src/assets/plus.png';
import deleteIcon from '/src/assets/delete.png';


function App() {
  
  let [counter,setCounter]=useState(1);
  const addValue=()=>{
  
    setCounter(counter+1);
  }
  const subValue=()=>{
    console.log("sub value")
    if(counter-1 < 0){
      setCounter(0);
    }
    else{
      setCounter(counter-1);
    }
    
  }
  return (
    <>
      <h1>hello world</h1>
     
      <button type="submit" onClick={addValue}> 
        <img src={plusIcon} alt="buttonpng" border="0" />
      </button>
      <h2>{counter}</h2>
      <button type="submit" onClick={subValue}>
        <img src={deleteIcon} alt="buttonpng" border="0" />
      </button>

    </>
  )
}

export default App
