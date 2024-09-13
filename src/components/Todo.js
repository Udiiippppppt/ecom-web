// import React, { useState } from "react";

// function Todo() {
  // const [todos, setTodos] = useState([]);
  // const [inputValue, setInputValue] = useState("");

  // const addTodo = () => {
  //   if (inputValue) {
  //     setTodos([...todos, inputValue]);
  //     setInputValue("");
  //   }

  // };
  // const Deletetask = () =>{
  //   const newTodos = todos.filter((_,i)=> i !== index);
  //   setTodos(newTodos);
//   }
//   return (
//     <div>
//       <div className="conatiner">
//         <h1>Todo list</h1>
//         <input
//           type="text"
//           placeholder="Enter the text:-"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={addTodo}>
//           ADD Task
//         </button>
//         <ul>
//           {todos.map((todo,index) => ( 
//                 <li key={index}>{todo}
//             <button className="btn btn-danger" onClick={Deletetask(index)}>Delete</button>
//           </li>))}
         
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Todo;
import React from 'react'
import { useState } from 'react'

function Todo() {
  const [inputValue, setInputValue]  = useState('');
  const[todos, setTodos] = useState([]);

  const addtodo = () =>{
    if(inputValue){
      setTodos(...todos, inputValue)
      setInputValue("");
    }
  }
  const deletetodo =(index)=>{
    const newtodo = todos.filter((_,i)=> i !== index);
    setTodos(newtodo)
  }
  return (
    <div>
      <div className='Todo'>
        <h1>ToDo List</h1>
        <input 
          type='text'
          value={inputValue}
          placeholder='Enter a text:-'
          onChange={(e)=>setInputValue(e.target.value)}        
        />
        <button onClick={addtodo}>Add Task</button>
        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>
              {todo}
              <button onClick={()=>deletetodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}

export default Todo
