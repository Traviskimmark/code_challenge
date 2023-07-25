import { useState,useEffect } from 'react';
import FORM from './FORM';
import TABLE from './TABLE';
import './App.css';

function App() {
  const[getData,setGetData]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:3000/transactions")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setGetData(data)
    })
  }, [])
  return (
    <div className="App">
     
      {getData &&<TABLE data={getData}/>}
      <FORM/>
    </div>
  );
}


export default App;



