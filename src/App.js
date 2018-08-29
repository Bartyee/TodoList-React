import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos.js';


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
        Bootbox.state.alert("write some");
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
            <Bootbox />
            <div className="todo-app center-align">
                <h1>Todo's App</h1>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todolist={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        </div>
        
    )
}
}

class Bootbox extends Component{
    constructor(){
        super();

        this.state = {
            window: 'https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js'
        }
    }

    render(){
        return(null)
    }
}



export default App;
