import React from 'react';
// Import styling component
import styles from './components/TodoItem.module.scss';

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.setState({
        editing: !this.state.editing,
      })
    }
  };

  componentWillUnmount() {
    console.log('Cleaning up...')
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const { id, title, completed } = this.props.todo;

    return (
      <li className={styles.item}>
        <div style={viewMode} onDoubleClick={this.handleEditing}>
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
        </div>
        <input type="text"
         style={editMode}
         className={styles.textInput} 
         value={title}
         onChange={(e) => this.props.handleEditProps(e.target.value, id)}
         onKeyDown={(e) => this.handleKeyDown(e)}
         />
      </li>
    );
  }
}

export default TodoItem;
