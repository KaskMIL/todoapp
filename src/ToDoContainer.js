import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development enviroment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

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

  addTodoItem = title => {
    const newTodo = {
      title: title,
      id: uuidv4(),
      complete: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <React.StrictMode>
          <Header />
          <InputTodo
            addItemProps={this.addTodoItem}
          />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            handleDeleteProps={this.delTodo}
          />
        </React.StrictMode>
      </div>
    );
  }
}

export default TodoContainer;
