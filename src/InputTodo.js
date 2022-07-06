import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs'

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: ''
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addItemProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write an Item');
    }
  };
  
  return (
     <form className="form-container" onSubmit={handleSubmit}>
       <input
         className="input-text"
         type="text"
         name="title"
         placeholder="Add Todo"
         value={inputText.title}
         onChange={onChange}
       />
       <button className="input-submit"><BsPlusCircleFill /></button>
     </form>
    );
  }


export default InputTodo;
