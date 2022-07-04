import React from 'react';
// Import styling component
import styles from './components/TodoItem.module.scss';

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { id, title, completed } = this.props.todo;

    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button
          onClick={() => this.props.handleDeleteProps(this.props.todo.id)}
        >
          Delete
        </button>
        <span style={this.props.todo.completed ? completedStyle : null}>
        {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
