import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const App = () => (
  <div className="app">
    <Header />
    <nav>
      <Link to="/ToDoContainer">TodoContainer</Link>
    </nav>
  </div>
);

export default App;
