import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    return (
      <ul>
        {props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={props.handleChangeProps}
              handleDeleteProps={props.handleDeleteProps}
              handleEditProps={props.handleEditProps}
            />
          );
        })}
      </ul>
    );
}

export default TodoList;
