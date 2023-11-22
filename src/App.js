import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Use from './Use'


function App() {
  const details=[

    {
    name:"Aarani",
    skills:[
    {name:"tester", type:"Fullstack"},
    {name:"tester", type:"Fullstack"}
    ]
    
    },
    {
    name:"Shena",
    skills:[
    {name:"designer", type:"CADD"},
    {name:"designer", type:"Autocad"}
    ]
    
  }
    
    
    ]
  const[count,setCount]=useState("Pink")
  const change=()=>{
      setCount("Blue")
  } 
  return (
    <div className="App">
       
        <div className="data2">
                <p>value:{count}</p>
                <button onClick={change}>change</button>
                <Use dataStore={details}/>
          </div> 
      </div>
  );
}

export default App