import './App.css';
import { useState } from 'react';
export const Input= ({addItems})=>{

     const [items,setItems]= useState("");
     

    
     const addValue= (e)=>{
       e.preventDefault();
        if(items === "")  return alert("Empty.....")

       addItems(items)
      
    
       setItems("")

     }
    return (
       <form className='form' onSubmit={addValue}>
         
         <input type="text" placeholder='enter something...' value={items} className='inp' onChange={(e)=>setItems(e.target.value)}/>
         <button className='btn'>ADD</button>
       </form>
    )
}