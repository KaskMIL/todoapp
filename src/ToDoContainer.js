import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Header from './Header';

import TodoList from './TodoList';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const data = JSON.parse(temp);
    return data || [];
  }

  /*useEffect(() => {
    console.log('test run');
    // getting stored items
    const temp = localStorage.getItem('todos');
    const data = JSON.parse(temp);
    // update state
    if (data) {
      setTodos(data)
    }
  }, [setTodos]); */

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos(prevTodos => prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      title: title,
      id: uuidv4(),
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setEdit = (newTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <Header />
      <nav>
        <Link to={'/'}>Home</Link>
      </nav>
      <div className="inner">
        <InputTodo addItemProps={addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          handleDeleteProps={delTodo}
          handleEditProps={setEdit}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
