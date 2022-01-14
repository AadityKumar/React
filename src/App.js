import { useState } from 'react';
import './App.css';
import Users from './Users';

function App() {
  const[data,setData]=useState(null)
  const[print,setPrint]=useState(false)
  function update(val){
    setData(val.target.value)
  }
  return (
    <div>
     {
       print?
       <h1>{data}</h1>
       :null
     }
      <h1>Welcome to App.js</h1>
      <input type="text" onChange={update}/>
      <button onClick={()=>setPrint(true)}>Print</button>
      
    </div>
  );
}

export default App;
