
import './App.css';
import { useState } from 'react';
import { Input } from './Input';
import { List } from './List';
import { Edit } from './Edit';
export const TodoWrapper= ()=>{

    const [todos,setTodo] =useState([])

    const addItems= (item)=>{
       setTodo([...todos, {id:Math.random(), task:item, complete:false, edit:false}] )
         console.log(todos)
    }
  const toggleComplete = id =>{
       
     setTodo(todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo))
  }
    
  const deleteTodo= id=>{
    setTodo(todos.filter(todo => todo.id !==id))

   
  }
  const editTodo= (id)=>{
    
    setTodo(todos.map(todo => todo.id === id ? {...todo ,edit : !todo.edit}: todo))
     console.log(todos)
  }

    const editItems= (task, id)=>{
         setTodo(todos.map(todo => todo.id=== id ? {...todo, task, edit: !todo.edit}: todo));
    }
    return(
        <div className="continer">
        <h1 className="heading">add todo list</h1>
           
         <Input  addItems={addItems} />

         {todos.map((todo ,index) =>(
          todo.edit ? (
          <Edit editItems={editItems} task ={todo} /> 
          ): (<List  task={todo} key={index} toggleComplete={toggleComplete}  deleteTodo={deleteTodo} editTodo={editTodo} />
          )
          ))}
         
      
        
       </div>

    )
}