import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };
    fetch('/api/todos', init)
      .then(res => res.json())
      .then(todo => {
        const newTodos = this.state.todos.concat([todo]);
        this.setState({ todos: newTodos });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    let index = null;
    let newStatus = null;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        index = i;
        newStatus = { isCompleted: !this.state.todos[i].isCompleted };
      }
    }

    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStatus)
    };
    fetch(`/api/todos/${todoId}`, init)
      .then(res => res.json())
      .then(todo => {
        const newTodos = this.state.todos.slice(0);
        newTodos[index] = todo;
        this.setState({ todos: newTodos });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
