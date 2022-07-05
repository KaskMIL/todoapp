import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const data = JSON.parse(temp);
    if (data) {
      this.setState({
        todos: data,
      })
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp)
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      title: title,
      id: uuidv4(),
      complete: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setEdit = (newTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    })
  };

  render() {
    return (
      <div className='container'>
        <div className='inner'>
          <Header />
          <InputTodo addItemProps={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            handleDeleteProps={this.delTodo}
            handleEditProps={this.setEdit}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
