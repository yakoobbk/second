import './App.css';
export const List= ({task , toggleComplete , deleteTodo , editTodo})=>{
    return( 
    <div className='list'>
  
          <p onClick={()=>toggleComplete(task.id)}  className={`${task.complete ? "complete" : ""}` }> {task.task}
          </p>
         <button className="btn2" onClick={()=>editTodo(task.id)}>EDIT</button>
         <button className="btn2" onClick={()=> deleteTodo(task.id)}>DELETE</button>
         
          
         
         
   </div>
    )
}