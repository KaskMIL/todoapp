import React from 'react';
import TodoList from './TodoList';
import Header from './Header';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id:1,
        title: 'Setup development enviroment',
        completed: true,
      },
      {
        id:2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id:3,
        title: 'Deploy to live server',
        completed: false,
      }
    ]
  }
  render () {
    return (
      <div>
        <React.StrictMode>
          <Header />
        <TodoList todos={this.state.todos} />
        </React.StrictMode>
      </div>
    );
  };
}

export default TodoContainer;