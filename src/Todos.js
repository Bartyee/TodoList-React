import React from 'react'
import FlipMove from 'react-flip-move';



const Todos = ({todolist, deleteTodo}) => {
    const list = todolist.map(todo => {
        
        return(
           
            <li  onClick={() => {deleteTodo(todo.id)}} key={todo.id}><span>{todo.id}</span><p>{todo.name}</p></li>
            
            
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