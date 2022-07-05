import React, { useState, useEffect } from 'react';
// Import styling component
import styles from './components/TodoItem.module.scss';

const TodoItem = props => {

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {
      console.log('cleaning up...');
    }
  }, [])

  const handleEditing = () => {
    setEditing(true);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const { id, title, completed } = props.todo;

    return (
      <li className={styles.item}>
        <div style={viewMode} onDoubleClick={handleEditing}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          />
          <button
            onClick={() => props.handleDeleteProps(props.todo.id)}
          >
            Delete
          </button>
          <span style={props.todo.completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input type="text"
         style={editMode}
         className={styles.textInput} 
         value={title}
         onChange={(e) => props.handleEditProps(e.target.value, id)}
         onKeyDown={(e) => handleKeyDown(e)}
         />
      </li>
    );
}

export default TodoItem;
