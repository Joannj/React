import React, { Component } from 'react'
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/layout/AddTodo';
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: "Take out the dirt",
        completed: false,
      },
      {
        id:uuid.v4(),
        title: "Take out kids",
        completed: false,
      },
      {
        id:uuid.v4(),
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
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
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