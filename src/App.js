import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos.js';
import './css/index.css';


class App extends React.Component {
  constructor(){
      super();

      this.state = {
          
          todos: [
              
          ]
      }
  }

  addTodo = (todo) => {

    if(todo.name === '')
    {
        alert("You must write something!");
    }
    else{
        
        let todos = [...this.state.todos, todo];
        

        this.setState({
            todos: todos
        })
    }
    
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
        return todo.id !== id
    })
    this.setState({
        todos
    });
  }

  render(){
    return(
        
        
        <div className="container">
            
            <div className="todo-app center-align">
                <h1>Todo's App</h1>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todolist={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        </div>
        
    )
}
}

export default App;
