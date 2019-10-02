import React, { Component } from 'react'
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/layout/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: "Take out the dirt",
        completed: false,
      },
      {
        id:2,
        title: "Take out kids",
        completed: false,
      },
      {
        id:3,
        title: "Meeting with client",
        completed: false,
      },
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({ todos:this.state.todos.map (todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] })
  }

  // Add Todo
  AddTodo= (title) =>{
    console.log(title);
  } 

  render() {
    return (
      <div>
        <div className='container'>
          <Header />
          <AddTodo addTodo = {this.AddTodo} />
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App