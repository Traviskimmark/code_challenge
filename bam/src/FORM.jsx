import React, {useState} from 'react'

function FORM() {

  const [getData, setGetData] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',

  })
function submittion(e) {
  e.preventDefault()
setGetData([...getData, formData])
  fetch("http://localhost:3000/transactions",{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(formData)
  })
  
}
 


  return (
    <div>
    <form onSubmit={submittion}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})}/>

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description"  value={formData.description} onChange={(e)=>setFormData({...formData, description:e.target.value})}/>

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" value={formData.category} onChange={(e)=>setFormData({...formData, category:e.target.value})} />

      <label htmlFor="amount">Amount:</label>
      <input type="number" step="0.01" id="amount" name="amount"value={formData.amount} onChange={(e)=>setFormData({...formData, amount:e.target.value})}/>

      <button type="submit">Add Transaction</button>
    </form>
    </div>
  )
  }


export default FORM