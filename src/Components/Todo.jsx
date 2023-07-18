import React, { useState } from 'react'

function Todo() {

    const [todo, setTodo] = useState('')

    const [todos, setTodos] = useState([])

    const addTodo = ()=> {
        setTodos([...todos, {list : todo, id : Date.now()}])
        setTodo('')
    }

    const dltTodo = (id)=> {
        setTodos(todos.filter((to)=> to.id !== id))
    }

  return (
    <div>
        <h1>Todo List</h1>
        <input type='text' value={todo} placeholder='Add Todo' onChange={(event) => setTodo(event.target.value)}/>
        <button onClick={addTodo}>Add</button>
    
        <ul>
            {todos.map( (todoo)=> (
                <li key={todoo.id}>{todoo.list}
                <button onClick={()=> dltTodo(todoo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    
    
  )
}

export default Todo