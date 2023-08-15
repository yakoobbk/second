import './App.css';
import { useState } from 'react';
export const Edit= ({editItems ,task})=>{

     const [items,setItems]= useState(task.task);
     

    
     const addValue= (e)=>{
       e.preventDefault();

       editItems(items, task.id)
    
       setItems("")

     }
    return (
       <form className='form' onSubmit={addValue}>
         
         <input type="text" placeholder='edit value' value={items} className='inp' onChange={(e)=>setItems(e.target.value)}/>
         <button className='btn'>EDIT</button>
       </form>
    )
}