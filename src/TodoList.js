/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        handleDeleteProps={props.handleDeleteProps}
        handleEditProps={props.handleEditProps}
      />
    ))}
  </ul>
);

export default TodoList;
