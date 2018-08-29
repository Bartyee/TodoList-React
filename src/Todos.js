import React from 'react'
import FlipMove from 'react-flip-move';



const Todos = ({todolist, deleteTodo}) => {
    const list = todolist.map(todo => {
        return(
            
            <li key={todo.id}><span>{todo.id}</span><p onClick={() => {deleteTodo(todo.id)}}>{todo.name}</p></li>
            
        )
    })

    return(
        
        <ul>
        <FlipMove duration={250} easing="ease-out">
            {list}
            </FlipMove>
        </ul>

        
      
       
    )
}

export default Todos;