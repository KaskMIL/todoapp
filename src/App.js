import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header />
      <nav>
        <Link to={'/ToDoContainer'}>TodoContainer</Link>
      </nav>
    </div>
  )
}

export default App;