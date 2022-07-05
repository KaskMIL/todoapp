import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              handleDeleteProps={this.props.handleDeleteProps}
              handleEditProps={this.props.handleEditProps}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
