import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Component file
import App from './App';
// Stylesheet
import './App.scss';
import TodoContainer from './ToDoContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='ToDoContainer' element={<TodoContainer/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
