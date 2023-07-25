import React, { useEffect, useState } from 'react'

function TABLE({data}) {
  const[form, setForm]=useState("")
const[filtered, setFiltered]=useState(data)
function handleSubmit(e){
  e.preventDefault()
  const filtrator=data.filter((item)=>{
    item.description.toLowerCase().includes(form.toLowerCase())
  })
  setFiltered(filtrator)
}
const display=form ===""? data:filtered
  return (

    <div> 
      <form action=""onSubmit={handleSubmit}>
        <input type="text" value={form}onChange={(e)=>setForm(e.target.value)} />
        <button>Search</button>
      </form>
      <h2>Transactions</h2>
    <table><tr>
    
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
    </tr>  
    
      {display.map((item)=>(
       <tr key={item.id}>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
       </tr>
      ))}
  
    </table>
    </div>
   
    
  )


}

export default TABLE 